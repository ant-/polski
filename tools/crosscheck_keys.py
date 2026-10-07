#!/usr/bin/env python3
"""Independent re-read of the official answer key (sources/<id>/transcript.txt, 'Klucz do zadań') and diff against data/<id>.js.
Does NOT use the builder: it re-parses the key tables from scratch.

  python3 tools/crosscheck_keys.py 2024-02          # prints compact item->key table per task + MISMATCH lines, exit 1 on mismatch

Handles key layouts: number row over value row; 1-/2-column "n. value" lists; TAK/NIE X-tables; statement rows ("A* 1, 4 | B 5");
transform (grammar VI) is checked by token containment of the model sentence in the left key column.
Layouts it cannot parse are reported as 'UNPARSED' (exit 1) - then read the PDF page by eye and extend the recipe notes."""
import json, os, re, sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from validate import load  # noqa

FOOT = re.compile(r"^\s*(POZIOM B1|[a-zńó]+ \d{4}|\d{1,2})\s*$")
TITLES = [("listening", "ROZUMIENIE ZE SŁUCHU"), ("reading", "ROZUMIENIE TEKSTÓW PISANYCH"), ("grammar", "POPRAWNOŚĆ GRAMATYCZNA")]
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"]


def key_blocks(sid):
    lines = [l.replace("\x0c", "").rstrip() for l in open(f"{ROOT}/sources/{sid}/transcript.txt", encoding="utf-8")]
    lines = [l for l in lines if not FOOT.match(l)]
    # locate each module's "Klucz do zadań"
    idx = [i for i, l in enumerate(lines) if l.strip() == "Klucz do zadań"]
    assert len(idx) == 3, f"expected 3 'Klucz do zadań' headers, got {len(idx)}"
    out = {}
    for n, (sec, _) in enumerate(TITLES):
        s = idx[n] + 1
        e = idx[n + 1] - 2 if n + 1 < 3 else len(lines)   # module title line precedes the next 'Klucz'
        body = lines[s:e]
        tasks, cur = {}, None
        for l in body:
            m = re.match(r"^\s*Zadanie (\w+)\s*$", l)
            if m:
                cur = m[1]; tasks[cur] = []
            elif cur:
                tasks[cur].append(l)
        out[sec] = tasks
    return out


def parse_block(lines, hint=None):
    """Return {key: value} for one 'Zadanie' key block, or None if unknown layout."""
    L = [l for l in lines if l.strip()]
    res = {}
    # TAK/NIE X-table (handle both "TAK"/"NIE" and "T"/"N" headers)
    hdr = next((l for l in L if ("TAK" in l and "NIE" in l) or (re.search(r"\bT\b", l) and re.search(r"\bN\b", l))), None)
    if hdr:
        # Find the positions of TAK/T and NIE/N
        tak_idx = hdr.index("TAK") if "TAK" in hdr else hdr.index("T")
        nie_idx = hdr.index("NIE") if "NIE" in hdr else hdr.index("N")
        ct, cn = tak_idx, nie_idx
        for l in L:
            m = re.match(r"^\s*(\d+)\.\s+(.*)$", l)
            if m:
                xs = [m2.start() + len(l) - len(m[2]) for m2 in re.finditer(r"X", m[2])]
                if len(xs) != 1:
                    return None
                res[m[1]] = "TAK" if abs(xs[0] - ct) < abs(xs[0] - cn) else "NIE"
        return res
    # statement rows: header with letters, next line values
    if L and re.match(r"^\s*([A-Z]\*?\s+)+[A-Z]\*?\s*$", L[0]):
        heads = L[0].split()
        vals = [v.strip() for v in re.split(r"\s{2,}", L[1].strip())]
        if len(vals) != len(heads):
            return None
        for h, v in zip(heads, vals):
            res[h.rstrip("*")] = sorted(x.strip() for x in v.split(","))
        return res
    # number header row + value row(s)
    i = 0
    while i < len(L):
        toks = L[i].split()
        if toks and all(re.fullmatch(r"\d+\.?", t) for t in toks) and i + 1 < len(L):
            vals = L[i + 1].split()
            if len(vals) != len(toks):
                return None
            for t, v in zip(toks, vals):
                res[t.rstrip(".")] = v
            i += 2
            continue
        # "n. value   m. value" lists
        m = re.match(r"^\s*(\d+)\.\s+(.*?)(?:\s{2,}(\d+)\.?\s+(.*))?$", L[i])
        if m:
            res[m[1]] = m[2].strip()
            if m[3]:
                res[m[3]] = m[4].strip()
        elif re.match(r"^\s*Wyraz zbędny:\s*(.+)$", L[i]):
            res["_distractor"] = re.match(r"^\s*Wyraz zbędny:\s*(.+)$", L[i])[1].strip()
        elif re.match(r"^\s*\*", L[i]):
            res["_note"] = L[i].strip()
        i += 1
    return res or None


def norm(s):
    """Normalize: strip ellipsis/punctuation, normalize whitespace, lowercase."""
    return re.sub(r"[…?.!,;:]+$", "", re.sub(r"\s+", " ", s.strip()).lower()).strip()


def split_alternatives(s):
    """Split a string on alternative separators: '/' with optional spaces, or '…?' / '...?' markers.
    Returns list of alternatives. For partial forms like 'będą się zdarzały/zdarzać',
    the second alternative replaces only the last word of the first."""
    # Drop point annotations like "(0,25 p.)" and close up "… ?" -> "…?"
    s = re.sub(r"\(\s*\d+(?:,\d+)?\s*p\.?\s*\)", "", s)
    s = re.sub(r"([\.…])\s+\?", r"\1?", s)
    # Try splitting on ellipsis+question markers (handles both …? and ...? patterns)
    if "…?" in s or "...?" in s:
        # Use a more comprehensive regex: match dots (. or …) followed by ?
        parts = re.split(r"[\.…\s]{1,6}\?", s)
        # Clean up parts: remove slashes and extra whitespace
        parts = [p.strip().lstrip("/").strip() for p in parts if p.strip()]
        if len(parts) > 1:
            return parts

    # Then try splitting on "/" (with or without spaces)
    if "/" in s:
        parts = re.split(r"\s*/\s*", s)
        if len(parts) > 1:
            # Handle partial forms: if second part has fewer words, it replaces only the last word(s) of the first
            expanded = [parts[0].strip()]
            first_words = parts[0].strip().split()
            for i in range(1, len(parts)):
                alt = parts[i].strip()
                alt_words = alt.split()
                # If the alternative has fewer words than the first, use first's prefix
                if alt_words and len(alt_words) < len(first_words):
                    # Replace the last word(s) with the alternative
                    prefix = " ".join(first_words[:-len(alt_words)])
                    alt = (prefix + " " + alt).strip() if prefix else alt
                expanded.append(alt)
            return expanded

    # No alternatives found
    return [s.strip()]


def expected(t):
    """data -> {key: value} in the same shape as parse_block.
    For types with accept alternatives, returns list [answer] + accept."""
    ty, e = t["type"], {}
    if ty in ("mc", "tf", "match"):
        e = {str(i["number"]): i["answer"] for i in t["items"]}
    elif ty == "gapMatch":
        # Include accept alternatives
        for i in t["items"]:
            answers = [i["answer"]]
            if i.get("accept"):
                answers.extend(i["accept"])
            e[i["gap"]] = answers if len(answers) > 1 else i["answer"]
    elif ty == "matchMulti":
        e = {s["letter"]: sorted(s["answer"]) for s in t["statements"]}
    elif ty in ("clozeChoice", "clozeBox", "clozeForm"):
        for b in t["blanks"]:
            if not b.get("example"):
                answers = [b["answer"]]
                if b.get("accept"):
                    answers.extend(b["accept"])
                e[b["id"]] = answers if len(answers) > 1 else b["answer"]
        if t.get("distractors"):
            e["_distractor"] = t["distractors"][0]
    elif ty == "question":
        # Include accept alternatives
        for i in t["items"]:
            answers = [i["answer"]]
            if i.get("accept"):
                answers.extend(i["accept"])
            e[str(i["number"])] = answers if len(answers) > 1 else i["answer"]
    return e


def main(sid):
    _, ex = load(f"{ROOT}/data/{sid}.js")
    kb = key_blocks(sid)
    bad = 0
    for sec in ex["sections"]:
        if sec["id"] == "writing":
            continue
        for k, t in enumerate(sec["tasks"]):
            blk = kb[sec["id"]].get(ROM[k])
            where = f"{t['id']} ({t['type']})"
            if blk is None:
                print(f"{where}: UNPARSED - no 'Zadanie {ROM[k]}' key block"); bad += 1; continue
            if t["type"] == "transform":
                left = " ".join(re.sub(r"\s+", " ", re.sub(r"^\s*\d\.\s*", "", l[:55])) for l in blk)
                left = re.sub(r"\s+", " ", left)
                for it in t["items"]:
                    ok = it["answer"].rstrip(".") in left.replace(" .", ".")
                    print(f"{it['id']:6} {'ok ' if ok else 'MISMATCH'} {it['answer']}")
                    bad += not ok
                continue
            got = parse_block(blk)
            if got is None:
                print(f"{where}: UNPARSED key layout - read the PDF page"); bad += 1; continue
            exp = expected(t)
            # Picture matching (2021 listening V): key is keyed by picture letter B..K
            if t["type"] == "match" and all(re.fullmatch(r"[A-Z]", k) for k in got if not k.startswith("_")) \
                    and all(i.get("label") for i in t["items"]):
                exp = {i["label"]: [str(i["answer"])] for i in t["items"]}
                got = {k: [str(x) for x in v] if isinstance(v, list) else [v] for k, v in got.items()}
                t = dict(t, type="matchMulti")
            keys = sorted(set(exp) | set(got), key=lambda x: (not x.isdigit(), int(x) if x.isdigit() else 0, x))
            cells, bad_here = [], []
            for kk in keys:
                if kk == "_note":
                    continue
                a, b = exp.get(kk), got.get(kk)

                # Compare based on type
                if a is None or b is None:
                    same = a == b
                elif t["type"] == "matchMulti" and isinstance(a, list) and isinstance(b, list):
                    # Special case: matchMulti expects list comparison
                    same = a == b
                else:
                    # Normalise and compare for all other cases
                    if isinstance(a, list):
                        # a is a list (from accept alternatives)
                        norm_a_set = set(norm(x) for x in a)
                    else:
                        norm_a_set = {norm(a)}

                    if t["type"] in ("mc", "match", "tf", "gapMatch"):
                        # For these types, do exact case-insensitive comparison without alternatives
                        if isinstance(a, list):
                            # If a is a list, check if any element matches b
                            same = any(x.lower() == b.lower() for x in a)
                        else:
                            same = a.lower() == b.lower()
                    else:
                        # For other types (cloze, question, etc.), compare normalised values considering alternatives
                        # Get all alternatives from the key (b) and normalise them
                        alternatives = split_alternatives(b)
                        norm_b_set = set(norm(alt) for alt in alternatives)

                        # Rule: official alternatives must be contained in or equal to data alternatives
                        same = norm_b_set <= norm_a_set

                cells.append(f"{kk}:{b if b is not None else '-'}{'' if same else '!='+str(a)}")
                if not same:
                    bad_here.append(kk)
            print(f"{t['id']:3} {'ok ' if not bad_here else 'MISMATCH'} " + " ".join(cells))
            bad += bool(bad_here)
    print("RESULT:", "ALL MATCH" if not bad else f"{bad} problem(s)")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1]) if len(sys.argv) > 1 else print(__doc__) or 2)
