#!/usr/bin/env python3
"""Builds data/2023-04.js. Run from anywhere: python3 tools/build_2023_04.py
Content = verbatim from sources/2023-04/test.txt (+ PDF page images for the underlined/bold PRZYKŁAD answers),
keys = official 'Klucz do zadań' in transcript.txt. Adapted from tools/build_2024_02.py (docs/conversion-recipe.md).
Does NOT touch data/manifest.js (owner merges manifest separately)."""
import json, sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2023-04"
MONTH_FOOT = r"^\s*[^\W\d_]+ \d{4}\s*$"          # 'kwiecień 2023' (buildlib.FOOTER misses 'ę')
test = [l for l in clean_lines(read(SID, "test.txt")) if not re.match(MONTH_FOOT, l)]
OPT = lambda *texts: [{"id": "abc"[i], "text": t} for i, t in enumerate(texts)]


# ------------------------------------------------------------------ local helpers (session-independent)
def split_tasks(lines):
    """-> {'listening': {'I': [lines..]}, 'reading': {...}, 'grammar': {...}} using the 'N. Proszę' headers (numerals restart per module)."""
    hdr = [(i, m[1]) for i, l in enumerate(lines) if (m := re.match(r"^\s*(VIII|VII|VI|IV|V|III|II|I)\. Proszę", l))]
    secs, cur, out = ["listening", "reading", "grammar"], -1, {s: {} for s in ("listening", "reading", "grammar")}
    for k, (i, r) in enumerate(hdr):
        if r == "I":
            cur += 1
        e = len(lines)
        for j in range(i + 1, len(lines)):
            if re.search(r"Państwowa Komisja", lines[j]) or (k + 1 < len(hdr) and j >= hdr[k + 1][0]):
                e = j; break
        out[secs[cur]][r] = lines[i:e]
    return out


def head(tl):
    """-> (instruction, pointsFormula, rest-lines-after-points-line)"""
    pi = next(i for i, l in enumerate(tl) if re.search(r"_{3,}\s*/\s*[\d,]+", l))
    instr = join(tl[:pi])
    f = re.search(r"\((\d+ x [\d,]+ p\.)\)", tl[pi])[1]
    return instr, f, tl[pi + 1:]


def src_line(L, i):
    """'Na podstawie…' line at L[i] plus wrapped URL tail lines (no spaces) -> (text, next index)."""
    s = L[i].strip()
    j = i + 1
    while j < len(L) and L[j].strip() and not re.search(r"\s", L[j].strip()):
        s += L[j].strip(); j += 1
    return s, j


def find_src(L):
    i = next((i for i, l in enumerate(L) if l.strip().startswith("Na podstawie")), None)
    return (None, None) if i is None else (i, src_line(L, i)[0])


def parse_mc(lines):
    """Lines -> [{'num': None|int, 'prompt', 'opts':[..]}] ; an item starts at 'PRZYKŁAD' or '<n>. text'."""
    items, cur, mode = [], None, None
    for l in lines:
        s = l.strip()
        if not s or s.startswith("Na podstawie"):
            continue
        m, o = re.match(r"^(\d+)\.\s+(.*)$", s), re.match(r"^([abc])\)\s*(.*)$", s)
        if s == "PRZYKŁAD":
            cur = {"num": None, "prompt": "", "opts": []}; items.append(cur); mode = "p"
        elif m and not o:
            cur = {"num": int(m[1]), "prompt": m[2], "opts": []}; items.append(cur); mode = "p"
        elif o:
            cur["opts"].append(o[2]); mode = "o"
        elif mode == "p":
            cur["prompt"] = (cur["prompt"] + " " + s).strip()
        elif mode == "o":
            cur["opts"][-1] += " " + s
    for it in items:
        it["prompt"] = re.sub(r"\s+", " ", it["prompt"]).strip()
        assert len(it["opts"]) == 3, it
    return items


def two_cols(lines):
    L, R = [], []
    for l in lines:
        m = re.search(r"(?<=\S)\s{3,}(?=\d{1,2}\.\s|[abc]\)\s)", l)
        if m:
            L.append(l[:m.start()]); R.append(l[m.end():])
        else:
            L.append(l)
    return L, R


def mc_item(tid, it, key, **kw):
    return {"id": f"{tid}.{it['num']}", "number": it["num"], "prompt": it["prompt"], "options": OPT(*it["opts"]), "answer": key, **kw}


def tf_parse(lines):
    """-> (example statement, [statements]) ; TAK/NIE header and the X marks are dropped."""
    ex, items, cur = [], [], None
    cur = ex
    for l in lines:
        l = re.sub(r"\s{3,}X\s*$", "", l.rstrip())
        s = l.strip()
        if not s or s in ("PRZYKŁAD", "X") or re.fullmatch(r"(TAK\s+NIE|T\s+N)", s) or s.startswith("Na podstawie"):
            continue
        s = re.sub(r"^PRZYKŁAD\s+", "", s)
        m = re.match(r"^(\d+)\.\s+(.*)$", s)
        if m:
            items.append([m[2]]); cur = items[-1]
        else:
            cur.append(s)
    return join(ex), [join(x) for x in items]


def tblock(roman):
    """TRANSKRYPCJA <roman> lines from transcript.txt (own footer filter: buildlib's misses 'kwiecień')."""
    foot = re.compile(r"^\s*(POZIOM B1|[^\W\d_]+ \d{4}|\d{1,2})\s*$")
    lines = [l.replace("\x0c", "").rstrip() for l in read(SID, "transcript.txt").split("\n")]
    lines = [l for l in lines if not foot.match(l)]
    s = next(i for i, l in enumerate(lines) if re.match(rf"^TRANSKRYPCJA {roman}\s*$", l))
    e = next((i for i in range(s + 1, len(lines)) if re.match(r"^TRANSKRYPCJA [IV]+\s*$", lines[i]) or "ROZUMIENIE ZE SŁUCHU" in lines[i]), len(lines))
    return [l for l in lines[s + 1:e] if l.strip() and not l.strip().startswith("Na podstawie")]


def tr_single(block):
    """TRANSKRYPCJA I: 'Przykład: text (K)' / 'n. text (M)' -> {'ex': {sp,t}, n: {sp,t}}"""
    out = {}
    for l in block:
        m = re.match(r"^\s*(Przykład:|\d+\.)\s*(.*?)\s*\(([KM])\)\s*$", l)
        assert m, l
        out["ex" if m[1] == "Przykład:" else int(m[1][:-1])] = {"sp": m[3], "t": m[2]}
    return out


def tr_dialogs(block):
    """TRANSKRYPCJA II: dialogues '- text (K)' per item -> {'ex'|n: {'lines': [...]}}"""
    out, cur = {}, None
    for l in block:
        s = l.strip()
        m0 = re.match(r"^Przykład:\s*(.*)$", s)
        if m0:
            cur = "ex"; out[cur] = []; s = m0[1]
        elif re.match(r"^\d+\.$", s):
            cur = int(s[:-1]); out[cur] = []; continue
        m = re.match(r"^-\s*(.*?)\s*\(?([KM])\)\s*$", s)
        assert m, s
        out[cur].append({"sp": m[2], "t": m[1]})
    return {k: {"lines": v} for k, v in out.items()}


def tr_persons(block):
    out, cur = [], None
    for l in block:
        s = l.strip()
        m = re.match(r"^Osoba (\d)(?: \(([KM])\))?$", s)
        if m:
            cur = {"n": m[1], "sex": m[2], "t": []}; out.append(cur)
        else:
            cur["t"].append(s)
    res = []
    for p in out:
        t = join(p["t"])
        m = re.search(r"\s\(([KM])\)$", t)
        if m:
            p["sex"] = m[1]; t = t[:m.start()]
        res.append({"sp": f"Osoba {p['n']} ({p['sex']})", "t": t})
    return res


# =============================================================== LISTENING
TL = split_tasks(test)["listening"]

# ---- l1: 14 single utterances (two-column table)
l1_instr, l1_f, l1_body = head(TL["I"])
l1_prompt = join(l1_body[:next(i for i, l in enumerate(l1_body) if l.strip() == "PRZYKŁAD")])
cl, cr = two_cols(l1_body[next(i for i, l in enumerate(l1_body) if l.strip() == "PRZYKŁAD"):])
l1_all = parse_mc(cl) + parse_mc(cr)
l1_ex, l1_its = l1_all[0], l1_all[1:]
assert [i["num"] for i in l1_its] == list(range(1, 15))
l1_tr = tr_single(tblock("I"))
l1_key = "c b c b a c a c b b a c b c".split()
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto", "instruction": l1_instr, "prompt": l1_prompt,
    "pointsFormula": l1_f, "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 3,
    "audio": task_audio(SID, "I", ["l1.ex"] + [f"l1.{i}" for i in range(1, 15)]),
    "example": {"id": "l1.ex", "prompt": l1_ex["prompt"], "options": OPT(*l1_ex["opts"]), "answer": "a", "shown": True,   # PDF p.3: option a bold-underlined
                "transcript": l1_tr["ex"]},
    "items": [mc_item("l1", it, l1_key[it["num"] - 1], transcript=l1_tr[it["num"]]) for it in l1_its],
}

# ---- l2: 8 dialogues MC
l2_instr, l2_f, l2_body = head(TL["II"])
k = next(i for i, l in enumerate(l2_body) if l.strip() == "PRZYKŁAD")
l2_prompt = join(l2_body[:k])
l2_all = parse_mc(l2_body[k:])
l2_ex, l2_its = l2_all[0], l2_all[1:]
assert [i["num"] for i in l2_its] == list(range(1, 9))
l2_tr = tr_dialogs(tblock("II"))
l2_key = "c b a c b a b a".split()
l2 = {
    "id": "l2", "number": "II", "type": "mc", "grading": "auto", "instruction": l2_instr, "prompt": l2_prompt,
    "pointsFormula": l2_f, "pointsPerItem": 1, "maxPoints": 8, "plays": 2, "pdfPage": 4,
    "audio": task_audio(SID, "II", ["l2.ex"] + [f"l2.{i}" for i in range(1, 9)]),
    "example": {"id": "l2.ex", "prompt": l2_ex["prompt"], "options": OPT(*l2_ex["opts"]), "answer": "c", "shown": True,   # PDF p.4: option c bold-underlined
                "transcript": l2_tr["ex"]},
    "items": [mc_item("l2", it, l2_key[it["num"] - 1], transcript=l2_tr[it["num"]]) for it in l2_its],
    "pdfNotes": ["Official transcript II.2 prints the speaker tag of the first line as 'M)' (opening bracket missing); read as (M)."],
}

# ---- l3: interview MC
l3_instr, l3_f, l3_body = head(TL["III"])
k = next(i for i, l in enumerate(l3_body) if l.strip() == "PRZYKŁAD")
l3_prompt = join(l3_body[:k])
l3_all = parse_mc(l3_body[k:])
l3_ex, l3_its = l3_all[0], l3_all[1:]
assert [i["num"] for i in l3_its] == list(range(1, 6))
l3_lines = []
for l in tblock("III"):
    m = re.match(r"^(Dziennikarka|Pan Henryk|D|H):\s*(.*)$", l.strip())
    if m:
        l3_lines.append({"sp": {"D": "Dziennikarka", "H": "Pan Henryk"}.get(m[1], m[1]), "t": m[2]})
    else:
        l3_lines[-1]["t"] += " " + l.strip()
for o in l3_lines:
    o["t"] = re.sub(r"\s+", " ", o["t"]).strip()
assert len(l3_lines) == 10
l3_key = "c c b a b".split()
l3 = {
    "id": "l3", "number": "III", "type": "mc", "grading": "auto", "instruction": l3_instr, "prompt": l3_prompt,
    "pointsFormula": l3_f, "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 5,
    "source": find_src(l3_body)[1],
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_lines},
    "example": {"id": "l3.ex", "prompt": l3_ex["prompt"], "options": OPT(*l3_ex["opts"]), "answer": "a", "shown": True},   # PDF p.5: option a bold-underlined
    "items": [mc_item("l3", it, l3_key[it["num"] - 1]) for it in l3_its],
}

# ---- l4: TAK/NIE
l4_instr, l4_f, l4_body = head(TL["IV"])
k = next(i for i, l in enumerate(l4_body) if "TAK" in l and "NIE" in l)
l4_prompt = join(l4_body[:k])
l4_exs, l4_sts = tf_parse(l4_body[k + 1:])
assert len(l4_sts) == 5
l4_key = "NIE NIE TAK NIE TAK".split()
l4 = {
    "id": "l4", "number": "IV", "type": "tf", "grading": "auto", "instruction": l4_instr, "prompt": l4_prompt,
    "pointsFormula": l4_f, "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 6,
    "source": find_src(l4_body)[1],
    "audio": task_audio(SID, "IV"),
    "transcript": {"text": join(tblock("IV"))},
    "example": {"id": "l4.ex", "statement": l4_exs, "answer": "TAK", "shown": True},   # PDF p.6: X in the TAK column
    "items": [{"id": f"l4.{i+1}", "number": i + 1, "statement": s, "answer": l4_key[i]} for i, s in enumerate(l4_sts)],
}

# ---- l5: persons (1-4) -> statements (A-D), 5 slots
l5_instr, l5_f, l5_body = head(TL["V"])
l5_prompt = join(l5_body[:next(i for i, l in enumerate(l5_body) if l.strip().startswith("Proszę zdecydować"))])
l5_stm = [("A", "Wspomina, że nauczyciel szukał lub nauczycielka szukała mocnych stron uczniów.", ["2"]),
          ("B", "Dzięki nauczycielowi lub nauczycielce wybrał zawód.", ["1", "3"]),
          ("C", "Chwali nauczyciela lub nauczycielkę za dużą wiedzę i traktuje go/ją jako wzór.", ["4"]),
          ("D", "Już nie pracuje zawodowo, ale wciąż się uczy.", ["3"])]
l5 = {
    "id": "l5", "number": "V", "type": "matchMulti", "grading": "auto", "instruction": l5_instr, "prompt": l5_prompt,
    "pointsFormula": l5_f, "pointsPerSlot": 1, "maxPoints": 5, "plays": 2, "pdfPage": 7,
    "source": find_src(l5_body)[1],
    "audio": task_audio(SID, "V", [f"p{i}" for i in range(1, 5)]),
    "persons": [{"id": str(i), "label": f"osoba {i}"} for i in range(1, 5)],
    "example": {"id": "l5.ex", "statement": "Opowiada o więcej niż jednym nauczycielu lub jednej nauczycielce.", "answer": ["1"], "shown": True},
    "statements": [{"id": f"l5.{a}", "letter": a, "text": t, "slots": len(ans), "answer": ans, "anyOrder": True, "starred": False} for a, t, ans in l5_stm],
    "transcript": {"lines": tr_persons(tblock("V"))},
}

listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [3, 7], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
TR = split_tasks(test)["reading"]

# ---- r1: 5 short texts MC
r1_instr, r1_f, r1_body = head(TR["I"])
r1_rows, passage, phase, cur = [], [], "passage", {}
i = 0
while i < len(r1_body):
    s = r1_body[i].strip()
    if phase == "passage":
        if s.startswith("Na podstawie"):
            cur = {"text": join(passage), "source": src_line(r1_body, i)[0]}; passage = []
            i = src_line(r1_body, i)[1]
            phase = "prompt"; continue
        if s and s != "PRZYKŁAD":
            passage.append(re.sub(r"^\d\.\s*", "", s))
    elif phase == "prompt":
        if "Z tego tekstu wynika" in s:
            cur["prompt"] = re.sub(r"^\d+\.\s*", "", s); cur["opts"] = []; phase = "opts"
    else:
        o = re.match(r"^([abc])\)\s*(.*)$", s)
        if o:
            cur["opts"].append(o[2])
            if len(cur["opts"]) == 3:
                r1_rows.append(cur); phase = "passage"
    i += 1
assert len(r1_rows) == 6
r1_key = "c b b a a".split()
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto", "instruction": r1_instr,
    "pointsFormula": r1_f, "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 9, "pdfPages": [9, 10],
    "example": {"id": "r1.ex", "passage": {"text": r1_rows[0]["text"], "source": r1_rows[0]["source"]}, "prompt": r1_rows[0]["prompt"],
                "options": OPT(*r1_rows[0]["opts"]), "answer": "c", "shown": True},   # PDF p.9: option c bold-underlined
    "items": [{"id": f"r1.{n}", "number": n, "passage": {"text": r["text"], "source": r["source"]}, "prompt": r["prompt"],
               "options": OPT(*r["opts"]), "answer": r1_key[n - 1]} for n, r in enumerate(r1_rows[1:], 1)],
}

# ---- r2: TAK/NIE on one text
r2_instr, r2_f, r2_body = head(TR["II"])
si, r2_src = find_src(r2_body)
r2_par = paras_by_indent(r2_body[:si])
r2_title = r2_par.pop(0)
assert len(r2_par) == 3 and len(r2_title) < 40, (r2_title, r2_par)
r2_exs, r2_sts = tf_parse(r2_body[src_line(r2_body, si)[1]:])
assert len(r2_sts) == 6
r2_key = "TAK NIE TAK NIE TAK NIE".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto", "instruction": r2_instr,
    "pointsFormula": r2_f, "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 11,
    "title": r2_title, "source": r2_src, "passage": "\n\n".join(r2_par),
    "example": {"id": "r2.ex", "statement": r2_exs, "answer": "NIE", "shown": True},   # PDF p.11: X in the NIE column
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_sts)],
}

# ---- r3: fragments -> gaps
r3_instr, r3_f, r3_body = head(TR["III"])
si, r3_src = find_src(r3_body)
r3_par = paras_by_indent(r3_body[:si])
r3_title = r3_par.pop(0)
assert len(r3_title) < 40
r3_text = "\n\n".join(r3_par)
r3_text = re.sub(r"\[_{2}C_{2}\]\s*PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\]\s*(\d)", r"{{\1}}", r3_text)
frag, last, pend = {}, None, None
for l in r3_body[src_line(r3_body, si)[1]:]:
    s = l.strip()
    if not s or s == "PRZYKŁAD":
        continue
    m = re.match(r"^([A-H])\s{2,}(\S.*)$", l.strip())
    if m:
        frag[m[1]] = m[2]; last = m[1]; pend = None
    elif re.fullmatch(r"[A-H]", s):
        pend = s; last = s; frag[s] = ""
    else:
        frag[last] = (frag[last] + " " + s).strip()
assert list(frag) == list("ABCDEFGH"), frag
r3_key = "G B A E H F D".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto", "instruction": r3_instr,
    "pointsFormula": r3_f, "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 12,
    "title": r3_title, "source": r3_src, "passage": r3_text,
    "options": [{"id": k_, "text": v} for k_, v in frag.items()],
    "example": {"gap": "ex", "answer": "C", "shown": True},    # printed in the text: [__C__]PRZYKŁAD
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs (two-column table: typed by hand, --verbatim checks it)
r4_instr, r4_f, r4_body = head(TR["IV"])
r4_par = {
    "A": "Zaproponuj kolegom w firmie, aby przekazać potrzebującym na przykład podstawowe produkty spożywcze. Wspólnie zawieźcie je do organizacji charytatywnej. Szefowi na pewno spodoba się zespół, który działa razem.",
    "B": "To najłatwiejszy sposób, aby komuś pomóc. Czasem tak prosta rzecz może sprawić, by dzień drugiego człowieka był trochę lepszy.",
    "C": "Jeżeli jesteś zdrowy i masz więcej niż 18 lat, zastanów się nad oddaniem krwi. Jest zawsze potrzebna, a nie da się jej wyprodukować w laboratorium.",
    "D": "Możesz oferować swój czas i zaangażowanie, a nic na tym nie zarabiać? Warto to robić, jeśli w ten sposób pomagasz seniorom, samotnym matkom czy osobom chorym – możliwości jest wiele.",
    "E": "Ktoś na ulicy źle się poczuł? A może nie radzi sobie z ciężkimi zakupami? Nie zastanawiaj się, tylko zaproponuj pomoc.",
    "F": "Zbliżają się twoje urodziny lub ślub? Poproś, aby bliscy zamiast kupować podarunki, wpłacili pieniądze na konto organizacji charytatywnej – dowolnej lub wybranej przez ciebie.",
    "G": "Na stronie www.domydziecka.org znajdują się informacje o tym, czego potrzebują ich mali mieszkańcy. Czasem są to zabawki, a niekiedy inne potrzebne rzeczy, np. buty, książki czy ubrania.",
    "H": "Jeśli podczas generalnego sprzątania znalazłeś rzeczy, których od dawna nie używasz, nie wyrzucaj ich do kosza. Koce i miski możesz na przykład oddać do schroniska dla zwierząt.",
}
r4_titles = ["Nie bądź bierny w codziennych sytuacjach", "Podaruj drugie życie niepotrzebnym przedmiotom", "Zorganizuj zbiórkę w pracy",
             "Przygotuj paczkę dla najmłodszych", "Przekaż to, co najcenniejsze", "Zrezygnuj z prezentów", "Zostań wolontariuszem"]
r4_key = "E H A G C F D".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto", "instruction": r4_instr,
    "pointsFormula": r4_f, "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 13,
    "source": find_src(r4_body)[1], "heading": "Jak pomagać bez pieniędzy?",
    "options": [{"id": k_, "text": v} for k_, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Uśmiechaj się i bądź życzliwy", "answer": "B", "shown": True},
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
}

# ---- r5: inline choice
r5_instr, r5_f, r5_body = head(TR["V"])
si, r5_src = find_src(r5_body)
r5_par = paras_by_indent(r5_body[:si])
r5_title = r5_par.pop(0)
r5_pass, r5_bl = cloze_choice("\n\n".join(r5_par))
r5_key = "zmęczeni dbają odpoczynku ważny najczęściej martwić pamiętać Podstawową ćwiczenia wizytę".split()
set_answers(r5_bl, r5_key, {"ex": "przepisu"})   # example: PDF p.14, 'przepisu' bold-underlined
r5 = {
    "id": "r5", "number": "V", "type": "clozeChoice", "grading": "auto", "instruction": r5_instr,
    "pointsFormula": r5_f, "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 14,
    "title": r5_title, "source": r5_src, "passage": r5_pass, "blanks": r5_bl,
}

reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [9, 14], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
TG = split_tasks(test)["grammar"]


def gtext(roman):
    ins, f, body = head(TG[roman])
    si, src = find_src(body)
    body = body if si is None else body[:si]
    return ins, f, [l for l in body if l.strip()], src


# ---- g1
g1_instr, g1_f, g1_lines, g1_src = gtext("I")
g1_pass, g1_bl = cloze_choice("\n\n".join(paras_by_indent(g1_lines)))
set_answers(g1_bl, "tej podróżami miast którym polskiego sali obrazom specjalny angielskiej go".split(),
            {"ex1": "rocznicę", "ex2": "Jego", "ex3": "bogaty"})   # PDF p.16
g1 = {"id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto", "instruction": g1_instr,
      "pointsFormula": g1_f, "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 16, "source": g1_src, "passage": g1_pass, "blanks": g1_bl}

# ---- g2: conjunctions from a box
g2_instr, g2_f, g2_lines, g2_src = gtext("II")
g2_box = re.split(r"\s{2,}", g2_lines[0].strip())
g2_raw = join(g2_lines[1:])
g2_raw = re.sub(r"(?<=\S)\s*[….]{3,}\s*(\d)", r" {{\1}}", g2_raw)
g2_raw = re.sub(r"lecz PRZYKŁAD", "{{ex}}", g2_raw)
g2 = {"id": "g2", "number": "II", "type": "clozeBox", "grading": "auto", "instruction": g2_instr,
      "pointsFormula": g2_f, "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 16, "source": g2_src,
      "wordBox": g2_box, "distractors": ["chociaż"], "passage": g2_raw,
      "blanks": [{"id": "ex", "example": True, "answer": "lecz"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("żeby więc oraz który gdy".split())]}

# ---- g3
g3_instr, g3_f, g3_lines, g3_src = gtext("III")
g3_pass, g3_bl = cloze_choice(join(g3_lines))
set_answers(g3_bl, "najniższa więcej tańszego najgorszy mniejsze".split(), {"ex1": "wyższe", "ex2": "trudno"})   # PDF p.17
g3 = {"id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto", "instruction": g3_instr,
      "pointsFormula": g3_f, "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17, "source": g3_src, "passage": g3_pass, "blanks": g3_bl}

# ---- g4: verb forms (present & past); example answers are printed in the text (PDF p.17: 'było', 'powtarzają')
g4_instr, g4_f, g4_lines, g4_src = gtext("IV")
g4_txt = "\n\n".join(paras_by_indent(g4_lines))
g4_ex = {}
def _ex(m):
    n = len(g4_ex) + 1
    g4_ex[f"ex{n}"] = (m[2], m[1])    # id -> (given, answer)
    return "{{ex%d}}" % n
g4_txt = re.sub(r"(\w+)\s*\(([^()]*)\)\s*PRZYKŁAD", _ex, g4_txt)
g4_blk = {}
def _bl(m):
    g4_blk[m[1]] = m[2]
    return "{{%s}}" % m[1]
g4_txt = re.sub(r"[….]{3,}\s*(\d+)\s*\(([^()]*)\)\s*\1(?!\d)", _bl, g4_txt)
g4_ans = ["patrzy", "widzą", "ubierają się", "nosiłam", "słyszę", "rozmawialiśmy", "szanowała", "skarżyli się", "krytykowały", "narzekają"]
assert sorted(g4_blk, key=int) == [str(i) for i in range(1, 11)], g4_blk
g4 = {"id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review", "instruction": g4_instr,
      "pointsFormula": g4_f, "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17,
      "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
      "passage": g4_txt,
      "blanks": [{"id": k_, "example": True, "given": v[0], "answer": v[1]} for k_, v in g4_ex.items()]
                + [{"id": str(i), "given": g4_blk[str(i)], "answer": g4_ans[i - 1]} for i in range(1, 11)]}
if g4_src:
    g4["source"] = g4_src

# ---- g5: ask about the underlined part (underlined parts read from PDF p.18)
g5_q = [  # (sentence, underlined, stem, short answer, key, accept)
    ("Zosia trzy razy w tygodniu chodzi na basen.", "trzy razy w tygodniu", "…………… Zosia chodzi na basen?", "Trzy razy w tygodniu.", "Jak często", ["Ile razy w tygodniu", "Ile razy na tydzień"]),
    ("Poinformowaliśmy ciocię Basię, że przyjdziemy jutro.", "ciocię Basię", "…………… poinformowaliście, że przyjdziecie jutro?", "Ciocię Basię.", "Kogo", []),
    ("Janek kupił tort z owocami egzotycznymi.", "egzotycznymi", "…………… owocami Janek kupił tort?", "Z egzotycznymi.", "Z jakimi", []),
    ("Matka nie wyprała ubrania syna.", "syna", "…………… ubrania nie wyprała matka?", "Syna.", "Czyjego", []),
    ("Marysia przyszła do szkoły na drugą lekcję.", "drugą", "…………… lekcję Marysia przyszła do szkoły?", "Na drugą.", "Na którą", []),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": head(TG["V"])[0], "pointsFormula": head(TG["V"])[1], "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Beata codziennie słucha radia.", "underlined": "radia",
                "stem": "…………… Beata codziennie słucha?", "shortAnswer": "Radia.", "answer": "Czego", "shown": True},
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": ac}
              for i, (s, u, st, sa, a, ac) in enumerate(g5_q)],
    "pdfNotes": ["Official key prints the question word with decoration (Kogo…?); stored without it, match.stripChars ignores the decoration.",
                 "Key 1 lists three variants (Jak często…? Ile razy w tygodniu…? Ile razy na tydzień…?): first is the answer, others in accept."],
}

# ---- g6: transformation
g6_rows = [  # (source, hint, model answer from the key, rubric printed in the key, rubricParts)
    ("Mojej siostrze smakuje zupa pomidorowa.", "lubi", "Moja siostra lubi zupę pomidorową.", "4 transformacje (2 x 0,25)", [("4 transformacje", 1)]),
    ("Wszyscy pracowici ludzie szanują czas.", "osoby", "Wszystkie pracowite osoby szanują czas.", "2 transformacje (2 x 0,5)", [("2 transformacje", 1)]),
    ("W weekend byliśmy w kinie na fascynującym filmie.", "poszliśmy", "W weekend poszliśmy do kina na fascynujący film.",
     "3 transformacje (2 x 0,25) + odpowiedni przyimek 0,25", [("3 transformacje", 0.75), ("odpowiedni przyimek", 0.25)]),
    ("Wiem, jak ma na nazwisko ten pan.", "znam", "Znam nazwisko tego pana.", "usunięcie słów: jak, ma, na – 0,5 + 2 transformacje (2 x 0,25)",
     [("usunięcie słów: jak, ma, na", 0.5), ("2 transformacje", 0.5)]),
    ("Dlaczego nigdy nie ubierasz się w ten ciepły płaszcz?", "nosisz", "Dlaczego nigdy nie nosisz tego ciepłego płaszcza?",
     "usunięcie przyimka 0,25 p. + 3 transformacje (2 x 0,25)", [("usunięcie przyimka", 0.25), ("3 transformacje", 0.75)]),
]
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": head(TG["VI"])[0], "pointsFormula": head(TG["VI"])[1], "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 19,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Gosia doskonale zna angielski.", "hint": "mówi", "answer": "Gosia doskonale mówi po angielsku.", "shown": True},
    "items": [{"id": f"g6.{i+1}", "number": i + 1, "source": s, "hint": h, "answer": a, "rubric": r,
               "rubricParts": [{"what": w, "points": p} for w, p in rp]} for i, (s, h, a, r, rp) in enumerate(g6_rows)],
    "pdfNotes": ["The key prints '(2 x 0,25)' after '4 transformacje' / '3 transformacje' (items 1, 3, 5) although every item is worth 1 p.; "
                 "rubricParts use the arithmetic that sums to 1 p. (4 x 0,25 / 3 x 0,25), the printed rubric string is kept verbatim."],
}

# ---- g7: aspect & mood dialogue
g7_instr, g7_f, g7_lines, g7_src = gtext("VII")
g7_turns, cur = [], []
for l in g7_lines:
    if re.match(r"^\s*(Anna|Paweł):", l) and cur:
        g7_turns.append(join(cur)); cur = []
    if l.strip():
        cur.append(l)
g7_turns.append(join(cur))
g7_turns = [re.sub(r"\)\s+(\d+)", r")\1", t) for t in g7_turns]
g7_pass, g7_bl = cloze_choice("\n\n".join(g7_turns))
g7_key = ["mogłabyś", "byłoby", "odchudzaj się", "zrobiłbyś", "chciał", "zapewniłyby", "wyrzuć", "wybieraj", "chodźmy", "Idźcie"]
set_answers(g7_bl, g7_key, {"ex1": "dałabym", "ex2": "Przygotuj"})   # PDF p.20
g7 = {"id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto", "instruction": g7_instr,
      "pointsFormula": g7_f, "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 20, "passage": g7_pass, "blanks": g7_bl}

# ---- g8: prepositions from a box
g8_instr, g8_f, g8_lines, g8_src = gtext("VIII")
g8_box = re.split(r"\s{2,}", g8_lines[0].strip())
g8_raw = join(g8_lines[1:])
g8_raw = re.sub(r"(?<=\S)\s*[….]{3,}\s*(\d)", r" {{\1}}", g8_raw)
g8_raw = re.sub(r"przy PRZYKŁAD", "{{ex}}", g8_raw)
g8 = {"id": "g8", "number": "VIII", "type": "clozeBox", "grading": "auto", "instruction": g8_instr,
      "pointsFormula": g8_f, "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 21, "source": g8_src,
      "wordBox": g8_box, "distractors": ["na"], "passage": g8_raw,
      "blanks": [{"id": "ex", "example": True, "answer": "przy"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("za w z u dla".split())]}

grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [16, 21], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING (photo prompt: data/img/2023-04/w-I-b-1.jpg, extracted with tools/extract_images.sh 2023-04 23 w-I-b)
sets = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "życzenia", "wordTarget": 30, "prompt": "Proszę napisać życzenia, które wyśle Pani/Pan do swojej cioci z Polski z okazji jej 70-tych urodzin."},
        {"id": "b", "genre": "opowiadanie", "wordTarget": 170, "prompt": "Proszę napisać opowiadanie zainspirowane poniższym zdjęciem.", "image": "data/img/2023-04/w-I-b-1.jpg"}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "zaproszenie", "wordTarget": 40, "prompt": "Jest Pani/Pan członkiem teatru „Maska”, który działa przy szkole języka polskiego. Proszę napisać zaproszenie dla uczniów tej szkoły na premierę nowego spektaklu."},
        {"id": "b", "genre": "esej", "wordTarget": 160, "prompt": "Proszę napisać esej (wypracowanie szkolne) pt. „Lubię to, co robię“.", "title": "Lubię to, co robię"}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 35, "prompt": "Zgubiła Pani / Zgubił Pan torbę sportową (plecak) w parku w Warszawie. Proszę napisać ogłoszenie, które rozwiesi Pani/Pan w okolicy."},
        {"id": "b", "genre": "e-mail", "wordTarget": 165, "prompt": "Planuje Pani/Pan za kilka miesięcy się przeprowadzić. Proszę napisać do koleżanki /kolegi z Polski e-mail na ten temat."}]},
]
w = writing_task(sets, [23, 29])
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [22, 29], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "kwiecień 2023", "examDates": "15-16.04.2023",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear.",
                       "Listening II has 8 dialogues (8 x 1 p.); listening V has 4 persons and 5 answer boxes (A 1, B 2, C 1, D 1; 5 x 1 p.).",
                       "Writing I b is a photo prompt (data/img/2023-04/w-I-b-1.jpg, source printed: pixabay.com/pl).",
                       "Grammar IV is 'czas teraźniejszy i przeszły'; its two PRZYKŁAD answers (było, powtarzają) are printed in the text."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
