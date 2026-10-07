# Conversion recipe — one exam session -> `data/<id>.js`

Pilot: **2024-02** (`tools/build_2024_02.py` is the worked template; read it first). Background: `docs/structure.md` (exam anatomy, per-session task variants), `docs/schema.md` (field semantics). Rule zero: **never invent answers** — every key comes from the official "Klucz do zadań" in `transcript.txt` (or, for PRZYKŁAD answers, from the PDF image). Anything unreadable -> render the page and look.

## Tools

| tool | purpose |
|---|---|
| `tools/buildlib.py` | helpers: `clean_lines/between/after_points/paras_by_indent/paras_by_blank` (text slicing), `cloze_choice` (turns `(a, b, c)3` into `{{3}}` + options), `set_answers`, `transcript_block/speaker_lines`, `audio_meta`, `task_audio` (from `docs/audio_segments.json`), `writing_task`, `emit`, `update_manifest` |
| `tools/build_<id>.py` | one builder per session (copy `build_2024_02.py`) -> writes `data/<id>.js`, merges `data/manifest.js` |
| `tools/validate.py <file> [--verbatim] [--table]` / `--all` | schema invariants (see below); `--verbatim` diffs every text field against `test.txt`/`transcript.txt`; `--table` prints item->answer |
| `tools/crosscheck_keys.py <id>` | independent re-parse of the key tables in `transcript.txt`, diffed with the data file (exit 1 on mismatch) |
| `tools/extract_images.sh <id> --find` / `<id> <page> [prefix] [labels]` | content images -> `data/img/<id>/` |

## Steps

1. **Read** `sources/<id>/test.txt` and `transcript.txt` fully; note the task variants for this session in `structure.md` §2-4 (e.g. listening II/IV/V types, reading V inline vs box, grammar IV present/past, 2021 sessions have picture matching). Compare the pilot builder task by task; where the type differs, build that type per `schema.md` §4/§5.
2. **Render pages you need to see** (`pdftoppm -r 80 -png -f N -l N sources/<id>/test.pdf /tmp/p`, view with Read): every PRZYKŁAD answer (bold/underlined; not in the txt!), grammar V underlined parts, any table (reading IV, listening II/V in older sessions), images. Use `-r 130 -x -y -W -H` crops to confirm single underlined words.
   PRZYKŁAD answers that cannot be resolved -> `"answer": null` + `"unresolved": true` (validator tolerates only that), never guess.
3. **Copy** `tools/build_2024_02.py` -> `tools/build_<id>.py`; change `SID`, delete the `ex[...]`/`copy.deepcopy(ex[...])` reuse (that only exists for 2024-02 where the worked examples were pre-built) and write each task from the txt. Use the parser helpers for long passages; type short items by hand but *always* let `--verbatim` check them.
4. **Per-task data** (instruction/prompt/source verbatim, `pointsFormula`/`pointsPerItem`/`maxPoints` from the printed `_____ / N p. (n x p p.)`, `pdfPage` = page index in test.pdf, which is **not** the printed page number — printed numbers restart per module).
5. **Keys**: type the key from the `Klucz` block (or use the printed rows). Don't read it from memory of the item content; after the build the cross-check does the second reading.
6. **Listening audio**: `task_audio(SID, "II", refs)` takes the segmentation from `docs/audio_segments.json`. `refs` = ids of play-1 chunks in order, length must equal pauses+1: tasks I/II -> `[ "lN.ex", "lN.1", … ]` (example is chunk 0); V persons -> `["p1".."p5"]` (no example chunk, it is on paper only); III/IV continuous -> no refs. Sessions where `ok` is false or pause counts deviate (2021-01/05/11, 2022-11, 2023-11, see structure.md §6): give only whole plays (omit refs) rather than guessing chunk boundaries. `audio_meta` produces the exam-level intro/readingTime/tail.
7. **Transcripts** (shown after checking): I/II per item (`item.transcript`: I = `{sp,t}`, II = `{lines:[{sp,t}]}`), III/IV/V task-level `{lines:[…]}` (V: one line per `Osoba N (M/K)`). `speaker_lines()` parses `M:`/`K:`/`Dz:` styles; pass `abbrev` for `Dz`/`P`-type shorthands. Keep official typos (II.6 both lines tagged (M) in 2024-02).
8. **Writing**: `writing_task(sets, pdf_pages)`; copy the three sets (a/b prompts, `wordTarget` from the "NN słów" column, `genre` = the noun from the prompt, `startsWith`/`title` where the prompt gives them; photo prompts: `image` path after `extract_images.sh`). Rubric is identical in all sessions and comes from the template. No key exists for writing.
9. **Images** (only 2021-01/05/06/11 listening V, 2021-06 writing III b, 2023-04 writing I b): `tools/extract_images.sh <id> --find` -> page; `tools/extract_images.sh 2021-01 7 l5 A,B,C,D,E,F,G,H,I,J,K`. Verify the label order against a page render (A=example photo). JSON path: `"data/img/<id>/l5-A.jpg"` (relative to index.html, like `audio.src`). Picture-match shape: `schema.md` §4 `match` (items `{label,image,answer}`, options = text numbers).
10. **Build, validate, cross-check** (all must be clean):
    ```
    python3 tools/build_<id>.py
    python3 tools/validate.py data/<id>.js --verbatim
    python3 tools/crosscheck_keys.py <id>
    python3 tools/validate.py --all
    ```
    Then eyeball the layout against the PDF for every task with a table/box (reading IV, grammar II/VIII boxes, listening V) and print `--table` once more against the key page images.
11. `data/manifest.js` is merged by `update_manifest` (keeps `_*` fixture entries). Do not hand-edit other sessions' entries.

## What the validator enforces (errors fail the run)

Wrapper `window.EXAMS["id"] = {...};` parses as JSON; id == filename; 4 sections in order, 5/5/8/1 tasks, module max 30 each, total 120; per task `printed formula product == maxPoints == Σ item points` and item count == formula count; items numbered 1..n with ids `<task>.<n>`; roman numbers I.. in order and instruction starts with them; mc/tf/match answers exist in options, option used once in match/gapMatch; `{{n}}` markers <-> blanks/items (exact set equality); `clozeChoice` answer ∈ options; `clozeBox` answers ⊂ wordBox (as multiset) and the leftover words == `distractors`; matchMulti `slots == len(answer)`, `anyOrder: true`, persons exist, `maxPoints == pointsPerSlot × Σ slots`; transform `rubricParts` sum == item points; writing: 3 sets, a+b word targets == 200, rubric sums 15/part; no `answer: null` (unless `unresolved`); listening: `plays == len(audio.plays)`, play lengths differ < 1 s, items inside play 1, `end <= duration`, transcript present, files (audio, sources, images) exist. `--verbatim` warnings are advisory: false alarms occur for clozeForm passages (the `(given)` hint sits between fragments) and two-column tables; every other hit is a typo — fix it.

## Pitfalls hit (2024-02) and format quirks

- **txt loses underline/bold** -> PRZYKŁAD answers only from page images. In 2024-02: l2 c, l3 b, r1 c, r2 NIE, r3 C, r4 B (shaded paragraph), r5 "znajduje się", g1 najciekawszych/roku/nas, g2 że, g3 gorsza/zdecydowanie, g4 Ma/będzie zależało (/ będzie zależeć)/dostaną się, g5 "U kogo", g7 Posłuchaj/mógłbym, g8 przez.
- **Key casing vs option casing**: key prints `1. zapytaj`, the option is `Zapytaj` (sentence start) — store the option's casing (`set_answers` does this and asserts membership). Reading V `Temat` likewise. Matching is case-insensitive anyway.
- **Decorated keys**: grammar V prints `Czym…?`; store `Czym` (`match.stripChars` covers the decoration). Keys with alternatives `A / B` -> `answer` = first, rest in `accept`. Grammar IV keys may also be multi-word (`będziecie mogli`); the pronoun in `(wy-móc)` cue is not part of the answer.
- **Wrapped URLs** in `Na podstawie:` break at hyphens and join without space (`…za-1-\neuro` -> `za-1-euro`); the `%C4%85` tails sit on their own line. `transcript_block` drops such tail lines.
- **Paragraphs**: `pdftotext -layout` indents the first line of each justified paragraph and leaves continuation lines at col 0 -> `paras_by_indent`. Dialogues with one line per turn (grammar VII) need splitting at speaker labels. Page footers (`POZIOM B1 / luty 2024 / n`) land mid-passage: `clean_lines` removes them.
- **Superscripts**: `m2` -> `m²`; `(zastanawiać się)3` in grammar IV is a stray superscript in the PDF (ignore). Spaces like `(…)7` vs `( opinię, …)` occur — regex tolerates them, but check the result.
- **Official typos are kept** (r2 item 4 "osiągnieć", l3 "recyclingu", l2.6 both lines `(M)`); note them in `pdfNotes`.
- **Box cloze** (`clozeBox`): the box can list a word twice (2024-02 g8 `na`); example word is part of the box; leftover = distractor (printed `Wyraz zbędny`). Reading V in other sessions may be a box cloze with 10 answers + example word and no distractor.
- **Key table shapes**: number row over value row (mc, gapMatch, match), `n. value` single/2-column lists (cloze), TAK/NIE `X` table (column decides), listening V is **row per statement** (`A* 1, 4`), grammar VI = model + rubric text per item. `crosscheck_keys.py` handles these; an `UNPARSED` result means read the PDF page and (if needed) extend the parser.
- **Reading III/IV**: in 2024-02 all A–H are used (example included); other sessions may have a spare option, A–I, or fewer items — `options` just lists what is printed.
- **Points are floats** (0.5, 2.5) and compared with tolerance; do not store formulas as strings except `pointsFormula`.
- **Speaking (40 p.) and writing keys do not exist** in the sources; `maxPoints` = 120.
- No answer-letter / option shuffling in the data: the printed order is the order.

## Checklist (tick before handing over)

- [ ] `build_<id>.py` has no reused-from-example blocks that don't belong to this session
- [ ] every PRZYKŁAD checked on a page image; none guessed
- [ ] all 5+5+8 tasks + writing present; instruction text verbatim incl. "Uwaga!" and plays (`jeden raz`/`dwa razy` -> `plays`)
- [ ] `validate.py data/<id>.js --verbatim`: 0 errors, remaining warnings explained
- [ ] `crosscheck_keys.py <id>`: ALL MATCH (or each UNPARSED task checked by eye on the PDF)
- [ ] audio refs: counts consistent, unverifiable boundaries left out; `verified: false` kept (nobody listened)
- [ ] images (if any) extracted, labels checked against page render, paths validated
- [ ] `data/manifest.js` lists `<id>`; `validate.py --all` clean
- [ ] unusual features of the session written into `meta.notes` (e.g. month label printed differently: 2021-05 is "marzec 2021")
