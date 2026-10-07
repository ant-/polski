#!/usr/bin/env python3
"""Shared helpers for tools/build_<id>.py session builders (see docs/conversion-recipe.md).

Everything here is deterministic text/audio plumbing; *content decisions* (which answer is right)
always come from the official key in transcript.txt / the PDF image, never from code.
"""
import json, os, re, subprocess

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
ROOT = os.path.normpath(ROOT)


def read(sid, name):
    with open(f"{ROOT}/sources/{sid}/{name}", encoding="utf-8") as f:
        return f.read()


# ---------------------------------------------------------------- text helpers
FOOTER = re.compile(r"^\s*(POZIOM B1|[a-zńó]+ \d{4}|\d{1,2})\s*$")


def clean_lines(txt):
    """Drop page footers (POZIOM B1 / luty 2024 / bare page numbers) from pdftotext -layout text."""
    return [l.replace("\x0c", "").rstrip() for l in txt.split("\n") if not FOOTER.match(l.replace("\x0c", ""))]


def between(lines, start_pat, end_pat, include_start=False):
    """Slice list of lines from first line matching start_pat (exclusive) to first later line matching end_pat."""
    s = next(i for i, l in enumerate(lines) if re.search(start_pat, l))
    e = next(i for i in range(s + 1, len(lines)) if re.search(end_pat, lines[i]))
    return lines[s + (0 if include_start else 1):e]


def after_points(lines):
    """Drop the task header: everything up to and including the '_____ / 6 p. (6 x 1 p.)' score line."""
    i = next(i for i, l in enumerate(lines) if re.search(r"_{3,}\s*/\s*[\d,]+\s*(p\.|\()", l))
    return lines[i + 1:]


def join(lines):
    return re.sub(r"\s+", " ", " ".join(l.strip() for l in lines)).strip()


def paras_by_blank(lines):
    """Paragraphs separated by blank lines; hard line-breaks joined."""
    out, cur = [], []
    for l in lines + [""]:
        if l.strip():
            cur.append(l)
        elif cur:
            out.append(join(cur)); cur = []
    return out


def paras_by_indent(lines, min_indent=3):
    """pdftotext -layout prints paragraph-first lines indented, continuation lines at col 0 (justified body text)."""
    out, cur = [], []
    for l in lines:
        if not l.strip():
            continue
        if re.match(r"^\s{%d,}\S" % min_indent, l) and cur:
            out.append(join(cur)); cur = []
        cur.append(l)
    if cur:
        out.append(join(cur))
    return out


CLOZE_RE = re.compile(r"\(([^()]*)\)\s*(PRZYKŁAD|\d+)")


def cloze_choice(text, example_ids=None):
    """Turn `(a, b, c)3` / `(a, b, c)PRZYKŁAD` into {{3}} / {{ex}} markers.
    Returns (passage, blanks) with blanks[i] = {id, options[, example:true]}; answers are NOT set here."""
    blanks, n_ex = [], [0]
    n_total_ex = len(re.findall(r"\)\s*PRZYKŁAD", text))

    def rep(m):
        opts = [o.strip() for o in m.group(1).split(",")]
        if m.group(2) == "PRZYKŁAD":
            n_ex[0] += 1
            bid = "ex" if n_total_ex == 1 else f"ex{n_ex[0]}"
            blanks.append({"id": bid, "example": True, "options": opts})
        else:
            bid = m.group(2)
            blanks.append({"id": bid, "options": opts})
        return "{{%s}}" % bid
    return CLOZE_RE.sub(rep, text), blanks


def set_answers(blanks, answers, examples=None):
    """answers: dict id->answer (or list for ids 1..n); examples: dict exid->answer (from the PDF image)."""
    if isinstance(answers, list):
        answers = {str(i + 1): a for i, a in enumerate(answers)}
    allans = dict(answers); allans.update(examples or {})
    for b in blanks:
        b["answer"] = allans[b["id"]]
        if "options" in b:   # key may differ from the printed option only by capitalisation (sentence start) -> store option casing
            m = [o for o in b["options"] if o.lower() == b["answer"].lower()]
            assert m, (b["id"], b["answer"], b["options"])
            b["answer"] = m[0]
    return blanks


# ---------------------------------------------------------------- transcript parsing
def transcript_block(sid, roman):
    """Lines of 'TRANSKRYPCJA <roman>' from transcript.txt (footers removed)."""
    lines = clean_lines(read(sid, "transcript.txt"))
    s = next(i for i, l in enumerate(lines) if re.match(rf"^TRANSKRYPCJA {roman}\s*$", l))
    e = next((i for i in range(s + 1, len(lines)) if re.match(r"^TRANSKRYPCJA [IV]+\s*$", lines[i])
              or re.search(r"Klucz do zadań", lines[i]) or "ROZUMIENIE ZE SŁUCHU" in lines[i]), len(lines))
    return [l for l in lines[s + 1:e] if l.strip() and not l.strip().startswith("Na podstawie")
            and not re.fullmatch(r"\S*[%/]\S*|\S+\.(html|pl)\S*", l.strip())]   # wrapped URL tail lines


def speaker_lines(block, abbrev=None):
    """Parse 'M: text' / 'Dz: text' style transcripts; abbrev maps abbreviations to full names."""
    abbrev = abbrev or {}
    out = []
    for l in block:
        m = re.match(r"^([A-ZŁŚŻ][\wąęóśłżźćń]*):\s*(.*)$", l.strip())
        if m:
            out.append({"sp": abbrev.get(m[1], m[1]), "t": m[2]})
        elif out:
            out[-1]["t"] += " " + l.strip()
    for o in out:
        o["t"] = re.sub(r"\s+", " ", o["t"]).strip()
    return out


# ---------------------------------------------------------------- audio
def audio_meta(sid):
    """exam-level audio block from ffprobe/ffmpeg silencedetect (intro / readingTime / tail)."""
    p = f"{ROOT}/sources/{sid}/audio.mp3"
    out = subprocess.run(["ffmpeg", "-hide_banner", "-nostats", "-i", p, "-af", "silencedetect=n=-35dB:d=3", "-f", "null", "-"],
                         capture_output=True, text=True).stderr
    m = re.search(r"Duration: (\d+):(\d+):([\d.]+)", out)
    dur = int(m[1]) * 3600 + int(m[2]) * 60 + float(m[3])
    starts = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", out)]
    ends = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", out)]
    r = lambda x: round(x, 1)
    return {"src": f"sources/{sid}/audio.mp3", "duration": r(dur), "intro": [0, r(starts[0])],
            "readingTime": [r(starts[0]), r(ends[0])], "tail": [r(starts[-1]), r(dur)],
            "segmentation": {"method": "silencedetect -35dB 3s; see docs/tools/audio_segments.py", "verified": False}}


_SEG = None


def segments(sid):
    global _SEG
    if _SEG is None:
        _SEG = json.load(open(f"{ROOT}/docs/audio_segments.json"))
    return {t["task"]: t for t in _SEG[sid]["tasks"]}


def task_audio(sid, roman, item_refs=None, pause_between=None):
    """Per-task audio block from docs/audio_segments.json.
    item_refs: refs for chunks of play 1 (len must be n_pauses+1) or None (continuous speech, no items)."""
    t = segments(sid)[roman]
    assert t["ok"], (sid, roman, t)
    plays = t["plays"]
    a = {"announce": t["announce"], "plays": [{"start": p[0], "end": p[1]} for p in plays]}
    if len(plays) == 2:
        a["pauseBetweenPlays"] = round(plays[1][0] - plays[0][1], 1)
    if item_refs:
        p = plays[0]
        edges = [p[0]] + [x for pr in p[3] for x in pr] + [p[1]]
        chunks = [(edges[i], edges[i + 1]) for i in range(0, len(edges), 2)]
        assert len(chunks) == len(item_refs), (roman, len(chunks), len(item_refs))
        a["items"] = [{"ref": r, "start": s, "end": e} for r, (s, e) in zip(item_refs, chunks)]
    a["source"] = "auto-silencedetect"; a["verified"] = False
    return a


# ---------------------------------------------------------------- writing (rubric is identical in all 15 sessions)
def writing_task(sets, pdf_pages, time_minutes=75):
    """Writing task = shared template (instruction, choose, wordCount, rubric from docs/example-2024-02.json) + this session's sets.
    sets: [{"id":"I","parts":[{"id":"a","genre":..,"wordTarget":..,"prompt":..[,"image":"data/img/<id>/w-I-b.jpg"]}, {"id":"b",..}]}, ...]"""
    import copy
    w = copy.deepcopy(next(t for t in json.load(open(f"{ROOT}/docs/example-2024-02.json"))["tasks"] if t["id"] == "w"))
    w["sets"] = sets; w["pdfPages"] = pdf_pages; w["timeMinutes"] = time_minutes
    return w


# ---------------------------------------------------------------- output
def emit(sid, exam):
    os.makedirs(f"{ROOT}/data", exist_ok=True)
    path = f"{ROOT}/data/{sid}.js"
    body = json.dumps(exam, ensure_ascii=False, indent=1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(f'window.EXAMS = window.EXAMS || {{}};\nwindow.EXAMS["{sid}"] = {body};\n')
    return path


def update_manifest(entries):
    """entries: list of {id,label}. Merges with existing manifest.js (keeps unknown entries such as _example)."""
    path = f"{ROOT}/data/manifest.js"
    cur = []
    if os.path.exists(path):
        txt = open(path, encoding="utf-8").read()
        m = re.search(r"window\.EXAM_MANIFEST\s*=\s*(\[.*\])\s*;?\s*$", txt, re.S)
        if m:
            cur = json.loads(m[1])
    ids = {e["id"]: e for e in cur}
    for e in entries:
        ids[e["id"]] = e
    out = sorted(ids.values(), key=lambda e: (e["id"].startswith("_"), e["id"]))
    with open(path, "w", encoding="utf-8") as f:
        f.write("window.EXAM_MANIFEST = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n")
    return path
