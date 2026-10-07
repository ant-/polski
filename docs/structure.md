# Polish B1 certificate exam — structure of the source material

Research on `/Users/antonkazlouski/src/polski/sources/<YYYY-MM>/` (15 sessions, 2021-01 … 2024-06).
Reference session: **2024-02** (read fully; every key below is from its `transcript.pdf` "Klucz do zadań").
Other sessions were checked mechanically (task headers, point formulas, key tables) — all 15 follow the same skeleton.

Machine-readable by-products of this research:
- `/Users/antonkazlouski/src/polski/docs/audio_segments.json` — listening segments for **all 15** sessions (see §6).
- `/Users/antonkazlouski/src/polski/docs/tools/audio_segments.py` — script that produced it (ffmpeg silencedetect).
- Schema + worked 2024-02 examples: `/Users/antonkazlouski/src/polski/docs/schema.md`.

## 0. Files per session / gotchas

| file | content |
|---|---|
| `test.pdf` (28–30 p.) | the exam booklet: cover, 4 written modules (listening, reading, grammar, writing) incl. KARTA OCENY. **No speaking (Mówienie, 40 p.) material** — only a row in the cover score box. |
| `transcript.pdf` (7–8 p.) | "TRANSKRYPCJE I KLUCZ DO ZADAŃ": transcripts I–V (listening) + 3 key blocks: *Rozumienie ze słuchu*, *Rozumienie tekstów pisanych*, *Poprawność gramatyczna*. **No key / model answers for Pisanie** (writing is graded by rubric only). |
| `audio.mp3` | 320 kbps/44.1 kHz, 1540–1690 s (≈26 min), whole listening module in one file. |
| `*.txt` | `pdftotext -layout`. Good enough for text, but **loses underlining/bold** (the PRZYKŁAD answer is shown underlined/bold in the PDF, e.g. "znajduje się" in reading V) and renders 2-column tables side by side (listening I, grammar I key, reading V key). |

- Cover score box: Rozumienie ze słuchu /30, Rozumienie tekstów pisanych /30, Poprawność gramatyczna /30, Pisanie /30, Mówienie /40. Total of the 4 written modules = 120 p. The pass rule is **not stated** in these files (do not hard-code; if wanted, treat as an app setting, e.g. ≥60 % per module).
- Month label: dir `2021-05` is printed "marzec 2021" on both PDFs (README dates it 8–9.05.2021). Keep dir id, show PDF label as `labelPdf`.
- Module limits (printed on module covers): listening "do 30 minut" (audio ≈ 26 min), reading 40 min, grammar 45 min, writing 75 min. Order in booklet = order in exam.
- Each task has a PRZYKŁAD (example, 0 p.) — present in every task of every session except writing. Example answers are in the PDF but not recoverable from the txt (underline) — see schema `example`.

## 1. Skeleton common to all 15 sessions

| module | tasks | max p. | notes |
|---|---|---|---|
| Rozumienie ze słuchu | 5 (I–V) | 30 | I = 14×0.5 p. always |
| Rozumienie tekstów pisanych | 5 (I–V) | 30 | |
| Poprawność gramatyczna | 8 (I–VIII) | 30 | identical formula in all sessions (see §4) |
| Pisanie | choose 1 of 3 sets; do a + b | 30 | rubric §5 |

## 2. Rozumienie ze słuchu — 2024-02 (booklet pp. 3–7; audio 1600 s)

Header: "5 zadań, Liczba punktów: 30". Every task header = "N. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone {tylko jeden raz | dwa razy}." (V: "Nagranie zostanie…" without "Uwaga!").

| task | type | items × pts | plays | image? | key format in transcript.pdf |
|---|---|---|---|---|---|
| I (p.3) | **MC a/b/c** on 14 single utterances ("Ta wypowiedź oznacza / jest typowa / to fragment …"). "Proszę zaznaczyć właściwe odpowiedzi." Example: "Ta wypowiedź oznacza a) komplement." | 14 × 0.5 = 7 | **1** | no | one row: `1.…14.` over letters `b b a c b c a c a a c b c a` |
| II (p.4) | **MC a/b/c** on 6 short dialogues. "Proszę wysłuchać dialogów i zaznaczyć właściwe odpowiedzi." Stems "Z tego dialogu wynika/dowiadujemy się, że …" | 6 × 1 = 6 | 2 | no | `1…6` over `a b c c b a` |
| III (p.5) | **MC a/b/c** on an interview (firma Wtórpol). "Proszę wysłuchać wywiadu na temat firmy zajmującej się niepotrzebnymi ubraniami i zaznaczyć właściwe odpowiedzi." | 5 × 1 = 5 | 2 | no | `c b b b c` |
| IV (p.6) | **TAK/NIE** on an interview (aplikacja Pola): "…zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem." Example is a NIE. | 6 × 1 = 6 | 2 | no | table TAK/NIE with an X per row: `NIE TAK NIE TAK TAK NIE` |
| V (p.7) | **multi-match persons→statements ("multi-select")**: 5 speakers (osoba 1–5), 4 statements A–D; "Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię." Answer table has **one row per statement A–D with 2/1/2/1 empty boxes `[____]`** (= number of persons who say it; example row shows `[___3___]`). | 6 slots × 1 = 6 | 2 | no | table by statement: `A* 1,4 | B 5 | C* 1,3 | D 2` + footnote "*kolejność odpowiedzi dowolna" (= for starred rows the two person numbers may be entered in either order) |

Scoring semantics for V: 1 point per correct *(statement, person)* pair, i.e. per box; a person may appear under several statements (person 1 is under A and C). Because boxes within a row are interchangeable, order never matters even when the asterisk is missing (older sessions print multiple numbers without asterisk, e.g. 2023-11 `B 1,4`, 2022-11 `B 2,3`). Treat every multi-box row as an unordered set.

Transcript format (transcript.pdf p.1–3): "TRANSKRYPCJA I … V"; speakers tagged `(K)`/`(M)` (kobieta/mężczyzna) or `Dziennikarka:/Programista:`, `M:/K:`, `Osoba 1 (M)`. Task I/II are numbered; the PRZYKŁAD line is included. (Typo in official II.6: both lines tagged (M).)

### Listening task types across the corpus (15 sessions)

| role | variants |
|---|---|
| I | always: 14 × 0.5 single-utterance MC, 1 play (stem varies: "oznacza", "jest typowa (w/dla…)", "jest pytaniem o"). |
| II | (a) dialogues MC: 6 items (2023-11, 2024-02/04/06; 2021-11 uses persons→traits instead) or 8 items (2021-06, 2022-02/03/06/11, 2023-02/04/06); (b) **matching table I→II**: items in column I (A–F options, 1 spare) — 2021-01, 2021-05 (5 items); (c) persons→traits multi-match (2021-11, 4 persons, A–E). |
| III | interview MC (5×1) **or** TAK/NIE (5–8 items; 2021-01/05/06/11, 2022-06). |
| IV | TAK/NIE (5–7) **or** interview MC (5) **or** match table (2021-06) **or** persons→opinions multi-match (2021-01, 4 persons, A–D, 5 slots). |
| V | one of: **match to pictures** (2021-01/05/06/11: 10 texts ↔ 11 photos A–K, A=example, 10×0.5=5 p.), **match table** column I→II with letters (2022-02/03/06: 5×1, 6 letters), **persons→opinions multi-match** (2022-11 … 2024-06: 4–5 persons, A–D/E, 5–6 slots × 1 p.; asterisk note only in 2024-02/04/06). |

So the **listening task types** to support: `mc`, `tf`, `match` (one-to-one with spare options), `matchMulti` (persons→statements, set answers), `matchPicture` (a `match` where the items are images).

## 3. Rozumienie tekstów pisanych — 2024-02 (pp. 9–14)

"5 zadań, 40 minut, Liczba punktów: 30"; task V's header: "podkreślić najlepszą spośród możliwości podanych w nawiasach".

| task | type | items | key format |
|---|---|---|---|
| I (pp.9–10) | **MC a/b/c** per short text. Each item = its own passage (2–4 lines + "Na podstawie: URL") then "Z tego tekstu wynika, że a/b/c". Example passage first. | 5 × 1 | `b a c b c` |
| II (p.11) | **TAK/NIE** on one long text (3 paragraphs) | 6 × 1 | table: `NIE NIE TAK TAK TAK TAK` |
| III (p.12) | **gap-fragment matching**: text with 7 numbered gaps `[_____]1…7` + example `[__C__]`, 8 fragments A–H (in 2024-02 all 8 are used: example C + 7 answers; other sessions may leave one spare). Instruction: "dopasować usunięte z niego fragmenty (A–H)". | 7 × 1 | `1.…7.` → `E A H B G D F` |
| IV (p.13) | **match titles→paragraphs**: general heading ("Co trzeba wiedzieć przed adopcją psa"), column I = 7 short titles (+example), column II = 8 paragraphs A–H (example uses B; in 2024-02 all 8 are used, other sessions may have a spare). Answers are written in a 7-cell table. | 7 × 1 | `1.…7.` → `D H A G C F E` |
| V (p.14) | **inline choice**: text with 10 gaps, each shows 2–3 words in parentheses followed by the gap number as superscript: `(dyrektorem, reżyserem, aktorem)1`; examinee underlines one. Example `(występuje, leży, znajduje się)PRZYKŁAD`. | 10 × 0.5 | list `1.reżyserem 2.wyjechał 3.dużo 4.szybko 5.wykorzystał 6.Temat 7.kłócą się 8.fanami 9.popularność 10.regularnie` (capitalised "Temat" because it starts a sentence) |

Variants in other sessions: I has 4–6 items (2021-11: 4; 2022-06: 6); II 6–7; III 7–8 gaps and A–H or **A–I** (2021-05, 2021-11); IV 6–7; V is **either** inline choice (most; 8 gaps in 2021-06/11 = 8×0.5) **or** *uzupełnić tekst wyrazami z ramki* (box cloze, 10×0.5; 2021-01, 2021-05, 2022-02, 2022-06): a word box (10 answers + the word used by the example), gaps are dotted `…….1`, answer = box word (key lists them). Always totals 30 p.

Reading task types: `mc` (passage per item), `tf`, `gapMatch` (fragments → gaps in a passage), `match` (titles → paragraphs), `clozeChoice`, `clozeBox`.

## 4. Poprawność gramatyczna — 2024-02 (pp. 16–21) — identical formula every session

"8 zadań, 45 minut, Liczba punktów: 30". Instruction pattern: "N. Proszę – zgodnie z przykładem/przykładami – …". Underline = answer mechanism on paper; in the app, choose/type.

| task | type & topic | items | pts | key format |
|---|---|---|---|---|
| I | `clozeChoice` – declension of nouns/adjectives/pronouns. Text with `(a, b, c)n` choices; **3 examples** (PRZYKŁAD ×3 at start). | 10 | 10×0.5=5 | `1. malarskiej … 10. wsi` (2-column list) |
| II | `clozeBox` – conjunctions from a box of 7 words, "Jeden wyraz w ramce jest niepotrzebny" (gaps `……1`) | 5 | 5×0.5=2.5 | list + `Wyraz zbędny: dlaczego` (distractor) |
| III | `clozeChoice` – comparison of adjectives/adverbs | 5 | 2.5 | list |
| IV | `clozeForm` – put the bracketed verb in the right form (present & future; in some sessions present & past); hints like `(zastanawiać się)`, `(wy-móc)`, `(wy – przyjść)` (= given subject pronoun + verb); answers may be multi-word ("będziecie mogli") | 10 | 5 | list; some entries have `A / B` alternatives (e.g. 2021-01 `będą radzić / będą radzili`, 2023-11 `będą się zdarzały/zdarzać`) |
| V | `question` – "zapytać o podkreśloną część zdania": statement with an underlined part, then Q/A mini-dialogue with `……………` where the question word(s) go; the answer line gives the underlined part ("– Grypą."). Answer = interrogative phrase. | 5 | 2.5 | `Czym…? / Na kogo…? / Który…? / Z czego…? / Kiedy…?`; alternatives separated by `/` or by spaces (2022-06 `Jak długo…? Ile czasu…? Ile lat……?`); trailing `…?` is decoration → ignore in matching |
| VI | `transform` – "użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens" (free sentence) | 5 | 5×1 | a model sentence + **partial-credit rubric text per item** (e.g. `dodanie przyimka (0,25) + 2 transformacje (2 x 0,25) + brak transformacji (0,25)`) and the global note **"Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem."** → cannot be auto-graded reliably; some sessions list 2 variants with `/`. |
| VII | `clozeChoice` – aspect & mood (imperative/conditional/future); dialogue text, **2 examples** | 10 | 5 | list |
| VIII | `clozeBox` – prepositions from a box of 7, one unnecessary | 5 | 2.5 | list + `Wyraz zbędny: bez` |

Session differences: 2024-06 II is headed "(wskaźniki zespolenia)" instead of "(spójniki)"; IV says "czas teraźniejszy i przyszły" (2021-01/05/06, 2022-11, 2023-11, 2024-02) or "…przeszły" (all others). VI keys in 2021–2022-03 contain only model sentences, 2022-06+ contain rubric strings. Example answers inside the text (e.g. `(najciekawszą, najciekawszych, najciekawszym)PRZYKŁAD`) are shown underlined in the PDF only.

## 5. Pisanie — 2024-02 (pp. 23–29)

- 75 min; **three sets (I, II, III), each with tasks a (short) and b (long); the examinee does both a and b of ONE set**. Word targets always sum to 200 (a: 20–50, b: 140–180). In 2023-11 the target is printed as a bare number.
- Pages 24–28 are answer sheets ("ZESTAW NR … IMIĘ I NAZWISKO"), 2 sheets + 2 BRUDNOPIS. Page 29 = **KARTA OCENY WYPOWIEDZI PISEMNEJ**.
- Booklet cover lists "KRYTERIA OCENY: Wykonanie zadania (treść, forma, objętość) 0–10 p.; Środki językowe 0–10 p.; Poprawność językowa 0–10 p.; RAZEM max 30 p." (sums of a+b).
- Prompts 2024-02:
  - **Zestaw I** a: ogłoszenie (sprzedaż używanych mebli i sprzętów kuchennych po remoncie, internet) — 30 słów; b: opowiadanie zaczynające się od zdania „Tego dnia padał deszcz." — 170 słów.
  - **Zestaw II** a: pozdrowienia z nowego miejsca (przeprowadzka) do polskiej koleżanki/kolegi — 35 słów; b: sprawozdanie (relacja) z otwarcia centrum sportowego „Wszystko dla Zdrowia" do polskiej gazety — 165 słów.
  - **Zestaw III** a: życzenia dla dyrektorki firmy z okazji ślubu — 30 słów; b: esej pt. „Zawsze znajdę czas na moje hobby" — 170 słów.
- Genres seen in corpus: ogłoszenie, życzenia, pozdrowienia, zaproszenie, e-mail/list, opowiadanie (often with a given first sentence/title/photo), esej, sprawozdanie/relacja, opinia/recenzja, charakterystyka, rada/perswazja.
- **Rubric (identical in all 15 sessions)**, per task a and per task b (max 15 each → 30):

| criterion | sub-criterion (code) | max |
|---|---|---|
| 1. wykonanie zadania (treść, forma, objętość) = 5 | treść (t) | 2.5 |
| | forma (f) | 1.5 |
| | objętość (o) | 1 |
| 2. środki językowe (leksyka i frazeologia, składnia, styl) = 5 | leksyka i frazeologia (l) | 2 |
| | składnia (s) | 2 |
| | styl (st) | 1 |
| 3. poprawność językowa (gramatyka, ortografia i interpunkcja) = 5 | gramatyka (g) | 3.5 |
| | ortografia i interpunkcja (o) | 1.5 |

  Plus on the card: error counts (gramatyczne, leksykalne, stylistyczne, ortograficzne+interpunkcyjne, inne — over a and b together), "Objętość prac: liczba słów w pracy / liczba wymaganych słów, %" for a and b, and free text "RECENZJA". The sources give **no band descriptors and no penalty thresholds for under-length** — only the target and a % ratio. Any band descriptors used by Claude when reviewing are therefore Claude's judgement against these criteria (state this in the export prompt). Suggested app behaviour: live word counter vs target; flag <80 % as "too short" (our convention, not official).
- Photo prompts exist in 2021-06 (III b, ship photo) and 2023-04 (I b, "opowiadanie zainspirowane poniższym zdjęciem"). Others are text-only. 2021-01 II a embeds a one-line ad in the prompt (text).

## 6. Listening ↔ audio mapping

Tools: `ffmpeg 7.1.1` and `ffprobe` present (`/opt/homebrew/bin`). Whisper: **no Python whisper**, but `whisper-cli` (whisper.cpp 1.8.3) is installed with **no multilingual model** (only `for-tests-ggml-tiny.bin` and superwhisper's *English-only* `ggml-small.en.bin`) → no Polish ASR available; not needed (see below).

The audio is machine-assembled with fixed-length silences, so structure is recoverable. `silencedetect=n=-35dB:d=3` on 2024-02 yields 16 "big" silences (≥9 s) and ~40 short (6.3–6.7 s) item pauses:

```
0 –  47.3  intro speech (welcome + instruction)
 47.3– 107.8  SILENCE 60.5 s  (time to read task I)
107.8– 123.9  "Zadanie I …" announcement
123.9– 134.2  SILENCE 10.3 s
134.2– 315.9  TASK I, single play: 15 chunks (example + 14 items) separated by 6.4 s pauses
315.9– 326.2  SILENCE 10.3   | 326.2–342.2 announcement II | 342.2–352.5 SILENCE 10.4
352.5– 461.3  II play 1  (7 chunks = example + 6 dialogues, 6.5 s pauses between)
461.3– 507.1  SILENCE 45.8 s  between the two plays
507.1– 616.0  II play 2  (identical length to play 1: 108.8 s)
616.0 … same pattern: [10 s][announce 16 s][10 s][play1][45.8 s][play2] for III, IV, V
1519.5–1530.0 SILENCE | 1530.0–1536.4 closing line | 1536.4–1596.6 SILENCE 60 s | file ends 1599.9
```

Proposed 2024-02 segments (seconds; `plays` = what the app should offer; one-play task I = exam rule 1 play):

| task | announce | play 1 | play 2 |
|---|---|---|---|
| I | 107.8–123.9 | 134.2–315.9 | — |
| II | 326.2–342.2 | 352.5–461.3 | 507.1–616.0 |
| III | 626.4–642.1 | 652.3–753.9 | 799.7–901.3 |
| IV | 911.8–927.7 | 937.9–1028.9 | 1074.7–1165.8 |
| V | 1176.2–1192.2 | 1202.4–1338.0 | 1383.8–1519.5 |

Per-item times (task I, II, V "persons") are the chunks between short pauses: e.g. task I item k = chunk k (chunk 0 = example): `[134.2–144.5 ex] [150.9–156.0 #1] [162.4–167.7 #2] … [309.8–315.9 #14]`; task II play 1: `[352.5–365.9 ex] [372.6–382.2 #1] [388.8–398.5 #2] [405.0–416.9 #3] [423.4–431.2 #4] [437.8–446.0 #5] [452.5–461.3 #6]`; task V play 1: persons 1–5 = `[1202.4–1229.5] [1236.1–1261.6] [1268.2–1284.1] [1290.5–1308.7] [1315.2–1338.0]`. Tasks III/IV are continuous speech (no item pauses).

**Reliability.** `/Users/antonkazlouski/src/polski/docs/tools/audio_segments.py` resolves all 4 two-play tasks in **all 15 sessions** with a built-in self-check (|len(play1)−len(play2)| < 1 s; passes everywhere, usually 0.00 s), (the script stores every in-play pause ≥3 s, incl. long 9–12 s ones in 2022-11/2023-11, in `plays[i][3]`). What to re-verify by ear (spot check one item per task): (a) 2021-01/2021-05 where reading-time silence is 40.5 s and one mid silence is 20–31 s (detected with the ≥18 s threshold; sym-check passes, but the pre-task announcement boundaries are less sure), (b) 2022-11 (II) and 2023-11 (V) have 9–12 s pauses inside plays — they are item boundaries too (included in `pauses`). Item-level pauses are **not** always ≥3 s-detectable: item counts matched expected counts in 14/15 sessions for task I (always 14 pauses), and for II/V in 2022-02 … 2024-06 (II: 6 dialogs → 6 pauses, 8 → 8; V: n persons → n−1 pauses, e.g. 2024-02 has 4 for 5 persons); the 2021 sessions deviate (2021-01/05 II are one continuous text for a match table: 0 pauses; 2021-11 II has 3, V has 0) → there the app should only offer whole-play segments, not per-item seeking. Treat `announce` ranges as ±1 s; `plays` as ±0.3 s (trim ~0.3 s of lead-in if you want to avoid clipping). Because one long mp3 is used, the app should seek with `audio.currentTime` and stop on `timeupdate` ≥ end (work from file://; CBR 320 kbps seeks accurately).

Matching transcripts to the audio is by order only (TRANSKRYPCJA I–V = tasks I–V, items by number) — no ASR needed.

## 7. Images — which tasks need them

pdfimages shows: every session has ~20 tiny decorative bitmaps (header banners 1310×155 etc., logo 257×257 on the cover) — **ignore all of these**. Real content images:

| session | where | what | needed to answer? |
|---|---|---|---|
| 2021-01, 2021-05, 2021-06, 2021-11 | test.pdf p.7 (listening V) | 11 photos A–K (A = example) | **yes** — task is "match text number to picture" |
| 2021-06 | p.22 (writing III b) | 640×427 cruise-ship photo | **yes** — prompt "Proszę wykorzystać tę fotografię" |
| 2023-04 | p.23 (writing I b) | 446×340 photo | **yes** — "opowiadanie zainspirowane poniższym zdjęciem" |
| all others incl. 2024-02 | — | none | text-only (2024-02 has **no** content image) |

Extraction recommendation: `pdftohtml -xml -f N -l N test.pdf out` writes each embedded JPEG **plus `<image top left width height>` boxes in reading order** — I verified on 2021-01 p.7: 11 images, order = A…K (row1 A,B; row2 C,D,E; row3 F,G,H; row4 I,J,K). That avoids guessing which `pdfimages` object is which. Page-region crops with `pdftoppm -r 150 -x -y -W -H` are the fallback if a bitmap carries a transparency mask. For the grammar/reading tasks there is nothing to crop; tables (reading IV, listening II/IV/V) are rebuilt as data, not images.

## 8. Parsing plan (for the later extraction step)

1. Split `test.txt` by module covers; tasks by `^\s*[IVX]+\.\s+Proszę`. Points from `_{3,} / (\d+,?\d*) p. \((\d+) x ([\d,]+) p.\)` → `items`, `pointsPerItem`.
2. Inline choice (`clozeChoice`): regex `\(([^()]*?)\)\s*(PRZYKŁAD|\d+)` (note a space inside `( opinię, …)` in 2024-02 reading V item 9). Box cloze: dotted gaps `[….]+\s*(\d+)`.
3. Keys: page-by-page `pdftotext -layout` of the key pages; tables are row-oriented (`1. 2. 3.` over letters) or 2-column (`1. x   6. y`) → parse by number tokens; verify counts equal to item counts from `test.txt` and `sum(points)` = module max; flag mismatches.
4. Underlined PRZYKŁAD answers and the underlined part in grammar V: take from the answer line / manual (`pdftotext -bbox-layout` or view page at 70 dpi). Grammar V underlined span = short answer line.
5. The listening V key is **row-per-statement**; reading/listening keys for IV/III/matching are **row-per-item**; picture-matching key is row-per-picture-letter (B…K → text number).
