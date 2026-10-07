#!/usr/bin/env python3
"""Validate data/<id>.js against docs/schema.md invariants.

  python3 tools/validate.py data/2024-02.js [more.js ...]
  python3 tools/validate.py --all                 # every data/*.js except manifest.js and _*.js test fixtures (+ manifest consistency)
  python3 tools/validate.py data/2024-02.js --verbatim   # also compare text fields with sources/<id>/test.txt / transcript.txt (warnings)
  python3 tools/validate.py data/2024-02.js --table      # print compact item -> answer table (for cross-checking against the key)

Exit code 1 if any ERROR. Warnings (W) never fail the run.
"""
import json, os, re, subprocess, sys, unicodedata
from collections import Counter

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
EPS = 1e-9
TYPES = {"mc", "tf", "match", "matchMulti", "gapMatch", "clozeChoice", "clozeBox", "clozeForm", "question", "transform", "writing"}
SECTIONS = [("listening", 30, 5), ("reading", 30, 5), ("grammar", 30, 8), ("writing", 30, 1)]
GRADING = {"auto", "auto+review", "review"}


def load(path):
    txt = open(path, encoding="utf-8").read()
    m = re.search(r'window\.EXAMS\[\s*"([^"]+)"\s*\]\s*=\s*', txt)
    if not m:
        raise ValueError('no `window.EXAMS["id"] = ` wrapper found')
    obj, end = json.JSONDecoder().raw_decode(txt, m.end())
    rest = txt[end:].strip()
    if rest not in ("", ";"):
        raise ValueError("trailing garbage after JSON: %r" % rest[:40])
    return m.group(1), obj


def num(x):
    return isinstance(x, (int, float)) and not isinstance(x, bool)


def parse_formula(s):
    m = re.fullmatch(r"\s*(\d+)\s*x\s*(\d+(?:,\d+)?)\s*p\.\s*", s or "")
    return (int(m[1]), float(m[2].replace(",", "."))) if m else None


class V:
    def __init__(self, name):
        self.name, self.errors, self.warns = name, [], []

    def e(self, where, msg):
        self.errors.append(f"{where}: {msg}")

    def w(self, where, msg):
        self.warns.append(f"{where}: {msg}")

    def close(self, where, a, b, what):
        if abs(a - b) > 1e-6:
            self.e(where, f"{what}: {a} != {b}")


def markers(text):
    return re.findall(r"\{\{([^{}]+)\}\}", text or "")


def check_markers(v, w, passage, ids, what="blanks/items"):
    ms = markers(passage)
    if len(ms) != len(set(ms)):
        v.e(w, f"duplicate markers in passage: {[k for k, c in Counter(ms).items() if c > 1]}")
    if set(ms) != set(ids):
        v.e(w, f"passage markers != {what}: only in passage {sorted(set(ms) - set(ids))}, only in {what} {sorted(set(ids) - set(ms))}")


def item_points(t, it):
    return it.get("points", t.get("pointsPerItem"))


def check_task(v, t, sec_id, ids_seen, duration):
    tid = t.get("id", "?")
    W = f"{sec_id}/{tid}"
    for k in ("id", "number", "type", "instruction", "maxPoints", "grading"):
        if k not in t:
            v.e(W, f"missing field {k}")
    if t.get("id") in ids_seen:
        v.e(W, "duplicate task id")
    ids_seen.add(t.get("id"))
    typ = t.get("type")
    if typ not in TYPES:
        v.e(W, f"unknown type {typ!r}")
        return
    if t.get("grading") not in GRADING:
        v.e(W, f"grading {t.get('grading')!r}")
    if typ == "writing":
        return check_writing(v, t, W)
    if not re.match(r"^[IVX]+\. ", t.get("instruction", "")):
        v.e(W, "instruction should start with the printed roman number, e.g. 'I. Proszę…'")
    elif not t["instruction"].startswith(t.get("number", "") + "."):
        v.e(W, "instruction number != task.number")
    prefix = {"listening": "l", "reading": "r", "grammar": "g"}[sec_id]
    if not re.fullmatch(prefix + r"\d", tid):
        v.e(W, f"task id should look like {prefix}1..")
    f = parse_formula(t.get("pointsFormula"))
    if not f:
        v.e(W, f"pointsFormula unparsable: {t.get('pointsFormula')!r}")
    if not num(t.get("maxPoints")):
        v.e(W, "maxPoints not a number"); return
    if not t.get("pdfPage") and not t.get("pdfPages"):
        v.w(W, "no pdfPage")

    # ---- items / blanks accounting
    n_items = None
    sumpts = None
    ex = t.get("example")
    if typ in ("mc", "tf", "match", "gapMatch", "question", "transform"):
        items = t.get("items") or []
        n_items = len(items)
        sumpts = 0
        for k, it in enumerate(items, 1):
            if it.get("number") != k:
                v.e(f"{W}/{it.get('id')}", f"item number {it.get('number')} != {k}")
            if it.get("id") != f"{tid}.{k}":
                v.e(W, f"item id {it.get('id')!r} != {tid}.{k}")
            p = item_points(t, it)
            if not num(p):
                v.e(f"{W}/{it.get('id')}", "no points"); p = 0
            sumpts += p
    elif typ in ("clozeChoice", "clozeBox", "clozeForm"):
        bl = t.get("blanks") or []
        real = [b for b in bl if not b.get("example")]
        n_items = len(real)
        sumpts = sum(b.get("points", t.get("pointsPerItem", 0)) for b in real)
        for k, b in enumerate(real, 1):
            if b.get("id") != str(k):
                v.e(W, f"blank id {b.get('id')!r} != {k!r}")
        if len({b.get("id") for b in bl}) != len(bl):
            v.e(W, "duplicate blank ids")
    elif typ == "matchMulti":
        sts = t.get("statements") or []
        slots = sum(s.get("slots", 0) for s in sts)
        n_items = slots
        sumpts = slots * t.get("pointsPerSlot", 0)
    if f and n_items is not None and n_items != f[0]:
        v.e(W, f"item count {n_items} != printed formula count {f[0]}")
    if f:
        v.close(W, f[0] * f[1], t["maxPoints"], "pointsFormula product vs maxPoints")
    if sumpts is not None:
        v.close(W, sumpts, t["maxPoints"], "sum of item points vs maxPoints")

    # ---- per type
    if typ == "mc":
        for it in ([ex] if ex else []) + t["items"]:
            ids = [o["id"] for o in it.get("options", [])]
            if len(ids) < 2 or len(set(ids)) != len(ids):
                v.e(f"{W}/{it.get('id')}", f"bad options {ids}")
            if it.get("answer") not in ids:
                v.e(f"{W}/{it.get('id')}", f"answer {it.get('answer')!r} not in options {ids}")
            if not it.get("prompt"):
                v.e(f"{W}/{it.get('id')}", "no prompt")
            if sec_id == "reading" and not it.get("passage") and not t.get("passage"):
                v.e(f"{W}/{it.get('id')}", "reading mc item without passage")
            for o in it.get("options", []):
                if not o.get("text"):
                    v.e(f"{W}/{it.get('id')}", f"option {o.get('id')} empty")
        if not ex:
            v.e(W, "missing example (PRZYKŁAD)")
    elif typ == "tf":
        for it in ([ex] if ex else []) + t["items"]:
            if it.get("answer") not in ("TAK", "NIE"):
                v.e(f"{W}/{it.get('id')}", f"answer {it.get('answer')!r} not TAK/NIE")
            if not it.get("statement"):
                v.e(f"{W}/{it.get('id')}", "no statement")
        if not ex:
            v.e(W, "missing example")
    elif typ == "match":
        oids = [o["id"] for o in t.get("options", [])]
        if len(set(oids)) != len(oids):
            v.e(W, "duplicate option ids")
        used = []
        for it in t["items"] + ([ex] if ex else []):
            if it.get("answer") not in oids:
                v.e(f"{W}/{it.get('id')}", f"answer {it.get('answer')!r} not in options {oids}")
            used.append(it.get("answer"))
            if not (it.get("prompt") or it.get("image")):
                v.e(f"{W}/{it.get('id')}", "match item needs prompt or image")
            if it.get("image"):
                check_img(v, f"{W}/{it.get('id')}", it["image"])
        dup = [k for k, c in Counter(used).items() if c > 1]
        if dup:
            v.e(W, f"option used more than once: {dup}")
        if len(oids) < n_items:
            v.e(W, "fewer options than items")
        if not ex:
            v.e(W, "missing example")
        for im in t.get("images", []):
            check_img(v, W, im.get("src", ""))
    elif typ == "gapMatch":
        oids = [o["id"] for o in t.get("options", [])]
        gaps = [it["gap"] for it in t["items"]]
        check_markers(v, W, t.get("passage", ""), gaps + ([ex["gap"]] if ex else []), "items")
        used = [it.get("answer") for it in t["items"]] + ([ex["answer"]] if ex else [])
        for a in used:
            if a not in oids:
                v.e(W, f"answer {a!r} not in options {oids}")
        dup = [k for k, c in Counter(used).items() if c > 1]
        if dup:
            v.e(W, f"fragment used more than once: {dup}")
    elif typ == "matchMulti":
        pids = [p["id"] for p in t.get("persons", [])]
        seen_letters = set()
        for s in t["statements"]:
            sw = f"{W}/{s.get('id')}"
            a = s.get("answer")
            if not isinstance(a, list) or not a:
                v.e(sw, "answer must be a non-empty list"); continue
            if len(a) != s.get("slots"):
                v.e(sw, f"slots {s.get('slots')} != len(answer) {len(a)}")
            if len(set(a)) != len(a):
                v.e(sw, "persons repeat within a row")
            for p in a:
                if p not in pids:
                    v.e(sw, f"person {p!r} not in persons {pids}")
            if s.get("anyOrder") is not True:
                v.e(sw, "anyOrder must be true")
            if s.get("letter") in seen_letters:
                v.e(sw, "duplicate letter")
            seen_letters.add(s.get("letter"))
        if not num(t.get("pointsPerSlot")):
            v.e(W, "pointsPerSlot missing")
        if ex:
            for p in ex.get("answer", []):
                if p not in pids:
                    v.e(W, f"example person {p!r} not in persons")
        else:
            v.e(W, "missing example")
    elif typ == "clozeChoice":
        bl = t["blanks"]
        check_markers(v, W, t.get("passage", ""), [b["id"] for b in bl])
        for b in bl:
            bw = f"{W}/{b['id']}"
            if len(b.get("options", [])) < 2:
                v.e(bw, "needs >=2 options")
            if b.get("answer") not in b.get("options", []):
                v.e(bw, f"answer {b.get('answer')!r} not in options {b.get('options')}")
        if not any(b.get("example") for b in bl):
            v.e(W, "no example blank")
    elif typ == "clozeBox":
        bl = t["blanks"]
        check_markers(v, W, t.get("passage", ""), [b["id"] for b in bl])
        box = Counter(t.get("wordBox", []))
        used = Counter(b.get("answer") for b in bl)
        if any(b.get("answer") in (None, "") for b in bl):
            v.e(W, "blank without answer")
        over = used - box
        if over:
            v.e(W, f"answers not (sufficiently) in wordBox: {dict(over)}")
        left = sorted((box - used).elements())
        if sorted(t.get("distractors", [])) != left:
            v.e(W, f"box words unused {left} != distractors {t.get('distractors')} (printed 'Wyraz zbędny')")
        if not any(b.get("example") for b in bl):
            v.e(W, "no example blank")
    elif typ == "clozeForm":
        bl = t["blanks"]
        check_markers(v, W, t.get("passage", ""), [b["id"] for b in bl])
        for b in bl:
            if not b.get("answer") or not b.get("given"):
                v.e(f"{W}/{b['id']}", "needs given + answer")
        if not any(b.get("example") for b in bl):
            v.w(W, "no example blank")
    elif typ == "question":
        for it in t["items"] + ([ex] if ex else []):
            for k in ("sentence", "underlined", "stem", "answer"):
                if not it.get(k):
                    v.e(f"{W}/{it.get('id')}", f"missing {k}")
            if it.get("underlined") and it.get("sentence") and it["underlined"].lower() not in it["sentence"].lower():
                v.e(f"{W}/{it.get('id')}", "underlined part not inside sentence")
        if "match" not in t:
            v.w(W, "question task without task-level match{stripChars}")
    elif typ == "transform":
        for it in t["items"]:
            iw = f"{W}/{it['id']}"
            for k in ("source", "hint", "answer"):
                if not it.get(k):
                    v.e(iw, f"missing {k}")
            if it.get("rubricParts"):
                v.close(iw, sum(p["points"] for p in it["rubricParts"]), item_points(t, it), "rubricParts sum vs item points")
            else:
                v.w(iw, "no rubricParts")
        if not ex:
            v.e(W, "missing example")

    # ---- no null answers outside examples
    for it in t.get("items", []) + t.get("blanks", []) + t.get("statements", []):
        if "answer" in it and it["answer"] is None and not it.get("unresolved"):
            v.e(f"{W}/{it.get('id')}", "answer null (mark unresolved:true or fix)")

    if sec_id == "listening":
        check_audio(v, t, W, duration)


def check_img(v, where, rel):
    if not rel:
        v.e(where, "empty image path"); return
    if rel.startswith("data:"):
        return
    if not any(os.path.isfile(os.path.join(ROOT, p, rel)) for p in ("", "data")):
        v.e(where, f"image file not found: {rel}")


def check_audio(v, t, W, duration):
    a = t.get("audio")
    if not a:
        v.e(W, "listening task without audio block"); return
    plays = a.get("plays", [])
    if t.get("plays") not in (1, 2):
        v.e(W, f"plays {t.get('plays')!r} must be 1 or 2")
    if len(plays) != t.get("plays"):
        v.e(W, f"task.plays {t.get('plays')} != len(audio.plays) {len(plays)}")
    an = a.get("announce")
    if not an or len(an) != 2 or an[0] >= an[1]:
        v.e(W, f"bad announce {an}")
    prev_end = an[1] if an else 0
    for i, p in enumerate(plays):
        if not (p["start"] < p["end"]):
            v.e(W, f"play {i+1} start>=end")
        if p["start"] < prev_end:
            v.e(W, f"play {i+1} starts before previous segment ends")
        prev_end = p["end"]
        if duration and p["end"] > duration + 0.05:
            v.e(W, f"play {i+1} end {p['end']} > duration {duration}")
    if len(plays) == 2:
        d = abs((plays[0]["end"] - plays[0]["start"]) - (plays[1]["end"] - plays[1]["start"]))
        if d >= 1.0:
            v.e(W, f"play lengths differ by {d:.2f}s (>=1s)")
        if "pauseBetweenPlays" in a:
            v.close(W, plays[1]["start"] - plays[0]["end"], a["pauseBetweenPlays"], "pauseBetweenPlays")
    refs = [x["ref"] for x in a.get("items", [])]
    if len(set(refs)) != len(refs):
        v.e(W, "duplicate audio item refs")
    valid = {it["id"] for it in t.get("items", [])} | ({t["example"]["id"]} if t.get("example", {}).get("id") else set()) \
        | {s["id"].split(".")[-1] for s in t.get("persons", [])} | {f"p{p['id']}" for p in t.get("persons", [])}
    for x in a.get("items", []):
        if x["ref"] not in valid:
            v.e(W, f"audio item ref {x['ref']!r} has no matching item")
        if not (plays and plays[0]["start"] - 0.05 <= x["start"] < x["end"] <= plays[0]["end"] + 0.05):
            v.e(W, f"audio item {x['ref']} outside play 1")
    if t.get("type") in ("mc",) and a.get("items"):
        want = {it["id"] for it in t["items"]}
        miss = want - set(refs)
        if miss:
            v.w(W, f"items without audio chunk: {sorted(miss)}")
    # transcript present?
    has_tr = bool(t.get("transcript")) or (t["items"] and all(it.get("transcript") for it in t["items"]) if t.get("items") and t.get("type") == "mc" else False)
    if not has_tr:
        v.e(W, "no transcript (task-level or on every item)")


def check_writing(v, t, W):
    sets = t.get("sets", [])
    if len(sets) != 3:
        v.e(W, f"expected 3 sets, got {len(sets)}")
    for s in sets:
        parts = {p["id"]: p for p in s.get("parts", [])}
        if set(parts) != {"a", "b"}:
            v.e(W, f"set {s.get('id')}: parts {sorted(parts)} != a,b"); continue
        tot = parts["a"]["wordTarget"] + parts["b"]["wordTarget"]
        if tot != 200:
            v.e(W, f"set {s['id']}: word targets sum {tot} != 200")
        for p in parts.values():
            if not p.get("prompt") or not p.get("genre"):
                v.e(W, f"set {s['id']}{p['id']}: prompt/genre missing")
            if p.get("image"):
                check_img(v, W, p["image"])
    r = t.get("rubric", {})
    crit = r.get("criteria", [])
    v.close(W, sum(c["max"] for c in crit), r.get("perPartMax", -1), "rubric criteria sum vs perPartMax")
    v.close(W, r.get("perPartMax", 0) * 2, t.get("maxPoints", -1), "2 x perPartMax vs maxPoints")
    for c in crit:
        if c.get("sub"):
            v.close(W, sum(x["max"] for x in c["sub"]), c["max"], f"rubric sub-criteria of {c['id']}")
    if t.get("maxPoints") != 30:
        v.e(W, "writing maxPoints != 30")


def validate(path, verbatim=False, table=False):
    v = V(os.path.basename(path))
    try:
        sid, ex = load(path)
    except Exception as e:
        v.e("load", str(e)); return v, None
    stem = os.path.splitext(os.path.basename(path))[0]
    if sid != stem:
        v.e("wrapper", f"EXAMS key {sid!r} != file name {stem!r}")
    if ex.get("id") != sid:
        v.e("exam", f"id {ex.get('id')!r} != {sid!r}")
    if ex.get("schemaVersion") != 1:
        v.e("exam", "schemaVersion != 1")
    meta = ex.get("meta", {})
    for k in ("level", "labelPdf", "examDates", "sources", "maxPoints"):
        if k not in meta:
            v.e("meta", f"missing {k}")
    for k, p in (meta.get("sources") or {}).items():
        if not os.path.isfile(os.path.join(ROOT, p)):
            v.e("meta.sources", f"{k}: file not found {p}")
    A = ex.get("audio", {})
    for k in ("src", "duration", "intro", "readingTime", "tail"):
        if k not in A:
            v.e("audio", f"missing {k}")
    if A.get("src") and not os.path.isfile(os.path.join(ROOT, A["src"])):
        v.e("audio", f"file not found {A['src']}")
    dur = A.get("duration")
    secs = ex.get("sections", [])
    if [s.get("id") for s in secs] != [s[0] for s in SECTIONS]:
        v.e("sections", f"ids {[s.get('id') for s in secs]} != {[s[0] for s in SECTIONS]}")
    total = 0
    ids_seen = set()
    for s, (sid_, mx, nt) in zip(secs, SECTIONS):
        tasks = s.get("tasks", [])
        if s.get("maxPoints") != mx:
            v.e(sid_, f"maxPoints {s.get('maxPoints')} != {mx}")
        if s.get("taskCount") != len(tasks) or len(tasks) != nt:
            v.e(sid_, f"taskCount {s.get('taskCount')} / tasks {len(tasks)} != {nt}")
        tsum = sum(t.get("maxPoints", 0) for t in tasks)
        v.close(sid_, tsum, mx, "sum of task maxPoints")
        total += tsum
        if not s.get("timeMinutes"):
            v.e(sid_, "timeMinutes missing")
        nums = [t.get("number") for t in tasks]
        roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"][:len(tasks)]
        if sid_ != "writing" and nums != roman:
            v.e(sid_, f"task numbers {nums} != {roman}")
        for t in tasks:
            check_task(v, t, sid_, ids_seen, dur)
    v.close("exam", total, 120, "total points of 4 modules")
    if meta.get("maxPoints") != 120:
        v.e("meta", "maxPoints != 120")
    # all text must be JSON-clean strings (no NaN / weird whitespace)
    bad = scan_strings(ex)
    for b in bad:
        v.w("text", b)
    if verbatim:
        verbatim_check(v, sid, ex)
    if table:
        print_table(ex)
    return v, ex


def scan_strings(o, path="$"):
    out = []
    if isinstance(o, str):
        if o != o.strip():
            out.append(f"{path}: leading/trailing whitespace")
        if "  " in o:
            out.append(f"{path}: double space")
        if unicodedata.normalize("NFC", o) != o:
            out.append(f"{path}: not NFC")
        if "­" in o or "\x0c" in o or "ﬁ" in o:
            out.append(f"{path}: control/ligature char")
    elif isinstance(o, dict):
        for k, x in o.items():
            out += scan_strings(x, f"{path}.{k}")
    elif isinstance(o, list):
        for i, x in enumerate(o):
            out += scan_strings(x, f"{path}[{i}]")
    return out[:40]


# ----------------------------------------------------------------------------- verbatim check
def _norm(s):
    s = unicodedata.normalize("NFC", s).replace("²", "2")
    s = s.replace("’", "'")
    return re.sub(r"\s+", "", s)


def _src(sid):
    d = {}
    for name in ("test", "transcript"):
        pdf = os.path.join(ROOT, "sources", sid, f"{name}.pdf")
        parts = []
        txt = os.path.join(ROOT, "sources", sid, f"{name}.txt")
        if os.path.isfile(txt):
            parts.append(open(txt, encoding="utf-8").read())
        if os.path.isfile(pdf):
            try:
                parts.append(subprocess.run(["pdftotext", "-raw", pdf, "-"], capture_output=True, text=True).stdout)
            except Exception:
                pass
        d[name] = [_norm(re.sub(r"POZIOM B1\s+\w+ \d{4}\s+\d*", " ", p)) for p in parts]
    return d


def verbatim_check(v, sid, ex):
    src = _src(sid)
    miss = []

    def found(s, kind):
        s = s.strip()
        if len(s) < 4:
            return True
        n = _norm(s)
        return any(n in hay for hay in src[kind])

    def frags(s):
        return [x for x in re.split(r"\{\{[^{}]*\}\}|\n\n", s or "") if len(x.strip()) > 3]

    def chk(kind, where, s):
        for f in frags(s) if isinstance(s, str) else []:
            if not found(f, kind):
                miss.append(f"{where}: {f[:70]!r}")

    def walk_transcript(tr, where):
        if not tr:
            return
        if "t" in tr:
            chk("transcript", where, tr["t"])
        for ln in tr.get("lines", []):
            chk("transcript", where, ln["t"])
        if "text" in tr:
            chk("transcript", where, tr["text"])

    for sec in ex["sections"]:
        for t in sec["tasks"]:
            W = t["id"]
            if t["type"] == "writing":
                for s in t["sets"]:
                    for p in s["parts"]:
                        chk("test", f"{W}.{s['id']}{p['id']}", p["prompt"])
                continue
            for k in ("instruction", "prompt", "source", "passage", "heading"):
                chk("test", f"{W}.{k}", t.get(k))
            for o in t.get("options", []):
                chk("test", f"{W}.opt{o.get('id')}", o.get("text"))
            for w_ in t.get("wordBox", []):
                pass
            walk_transcript(t.get("transcript"), f"{W}.transcript")
            its = list(t.get("items", [])) + ([t["example"]] if t.get("example") else [])
            for it in its:
                iw = it.get("id", W)
                for k in ("prompt", "statement", "sentence", "stem", "source"):
                    if k == "stem":
                        continue
                    chk("test", f"{iw}.{k}", it.get(k))
                if isinstance(it.get("passage"), dict):
                    chk("test", f"{iw}.passage", it["passage"].get("text"))
                    chk("test", f"{iw}.src", it["passage"].get("source"))
                for o in it.get("options", []):
                    chk("test", f"{iw}.opt{o['id']}", o["text"])
                walk_transcript(it.get("transcript"), f"{iw}.transcript")
            for s in t.get("statements", []):
                chk("test", s["id"], s.get("text"))
    if miss:
        v.w("verbatim", f"{len(miss)} text fragment(s) not found in sources (two-column layouts / underlines / typos can cause false alarms):")
        for m in miss[:60]:
            v.w("verbatim", "  " + m)


# ----------------------------------------------------------------------------- compact answer table
def print_table(ex):
    for sec in ex["sections"]:
        for t in sec["tasks"]:
            ty = t["type"]
            if ty == "writing":
                continue
            if ty == "matchMulti":
                row = " | ".join(f"{s['letter']}={','.join(s['answer'])}" for s in t["statements"])
            elif ty in ("clozeChoice", "clozeBox", "clozeForm"):
                row = " ".join(f"{b['id']}:{b['answer']}" for b in t["blanks"] if not b.get("example"))
            elif ty == "gapMatch":
                row = " ".join(f"{i['gap']}:{i['answer']}" for i in t["items"])
            elif ty == "transform":
                row = " ".join(f"{i['number']}:{i['answer']!r}" for i in t["items"])
            else:
                row = " ".join(f"{i['number']}:{i['answer']}" for i in t["items"])
            print(f"{t['id']:3} {ty:11} {row}")


def main(argv):
    flags = {a for a in argv if a.startswith("--")}
    files = [a for a in argv if not a.startswith("--")]
    if "--all" in flags:
        d = os.path.join(ROOT, "data")
        files += sorted(os.path.join(d, f) for f in os.listdir(d) if f.endswith(".js") and f != "manifest.js" and not f.startswith("_"))
    if not files:
        print(__doc__); return 2
    bad = 0
    for f in files:
        v, _ = validate(f, "--verbatim" in flags, "--table" in flags)
        status = "FAIL" if v.errors else "OK"
        print(f"[{status}] {f}  ({len(v.errors)} errors, {len(v.warns)} warnings)")
        for m in v.errors:
            print("  ERROR", m)
        for m in v.warns:
            print("  W", m)
        bad += bool(v.errors)
    if "--all" in flags:
        mp = os.path.join(ROOT, "data", "manifest.js")
        if os.path.isfile(mp):
            m = re.search(r"window\.EXAM_MANIFEST\s*=\s*(\[.*\])\s*;?\s*$", open(mp, encoding="utf-8").read(), re.S)
            try:
                ids = [e["id"] for e in json.loads(m[1])]
            except Exception as e:
                print("  ERROR manifest.js unparsable", e); bad += 1; ids = []
            have = {os.path.basename(f)[:-3] for f in files}
            for i in ids:
                if not i.startswith("_") and i not in have and not os.path.isfile(os.path.join(ROOT, "data", i + ".js")):
                    print(f"  ERROR manifest lists {i} but data/{i}.js does not exist"); bad += 1
            for i in have - set(ids):
                print(f"  W data/{i}.js not listed in manifest.js")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
