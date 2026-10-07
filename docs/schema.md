# Data schema — one file per session

Companion to `structure.md` (read that for the exam anatomy). Worked examples are all from **2024-02**
and use the real official keys; they are machine-checked and assembled into
`/Users/antonkazlouski/src/polski/docs/example-2024-02.json` (listening I/IV/V, reading V, grammar II/IV/VI, writing).

## 1. Files and loading (works from `file://`)

```
data/manifest.js        window.EXAM_INDEX = [{id:"2024-02", label:"luty 2024"}, ...];   // one entry per session; the app can't list a dir on file://
data/2024-02.js         window.EXAMS = window.EXAMS || {}; window.EXAMS["2024-02"] = { ...exam object... };
data/2024-02.json       same object as pure JSON (source of truth for tooling; .js is generated: prefix + JSON + ";")
img/2024-02/*.jpg       extracted images (only where needed, see structure.md §7)
sources/2024-02/audio.mp3   audio is NOT copied; referenced relatively from index.html
```
`index.html` loads `data/manifest.js` with a `<script>` tag, then lazily injects `<script src="data/<id>.js">` for the chosen session (dynamic `<script>` works on file://; `fetch`/XHR of JSON does not). Audio via `<audio src="sources/2024-02/audio.mp3">` works on file:// and over http; seek with `currentTime` and pause when `currentTime >= end` (listen on `timeupdate`, ~250 ms granularity — add a 0.3 s lead/trim).

Numbers use JS numbers (0.5, 2.5; **dot** decimal, the PDFs use a comma). Text is NFC Polish, quotes as printed („ ” ), no HTML. Paragraphs separated by `\n\n`; PDF hard line-breaks are joined.

## 2. Exam object

```jsonc
{
  "schemaVersion": 1,
  "id": "2024-02",                       // dir name
  "meta": {
    "level": "B1", "labelPdf": "luty 2024", "examDates": "4-5.02.2024",
    "sources": { "test": "sources/2024-02/test.pdf", "transcript": "sources/2024-02/transcript.pdf", "audio": "sources/2024-02/audio.mp3" },
    "maxPoints": 120,                     // 4 written modules (Mówienie 40 p. is not in the sources)
    "notes": []                           // free-text caveats (e.g. "2021-05 is printed 'marzec 2021'")
  },
  "audio": { "src": "sources/2024-02/audio.mp3", "duration": 1599.9, "intro": [0, 47.3], "readingTime": [47.3, 107.8], "tail": [1536.4, 1599.9],
             "segmentation": { "method": "silencedetect -35dB 3s; see docs/tools/audio_segments.py", "verified": false } },
  "sections": [ Section, ... ]            // listening, reading, grammar, writing — in booklet order
}
```

### Section
```jsonc
{ "id": "listening",                      // listening | reading | grammar | writing
  "title": "Rozumienie ze słuchu",
  "maxPoints": 30, "timeMinutes": 30,     // 30 (audio-driven) / 40 / 45 / 75
  "taskCount": 5, "pdfPages": [3, 7],
  "tasks": [ Task, ... ] }
```

### Task (common fields)
| field | meaning |
|---|---|
| `id` | `l1`…`l5`, `r1`…`r5`, `g1`…`g8`, `w` |
| `number` | Roman numeral as printed ("I"…"VIII") |
| `type` | `mc` · `tf` · `match` · `matchMulti` · `gapMatch` · `clozeChoice` · `clozeBox` · `clozeForm` · `question` · `transform` · `writing` |
| `instruction` | the numbered header **verbatim** (Polish), e.g. "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz." |
| `prompt` | second instruction paragraph verbatim ("Proszę wysłuchać wywiadu na temat … i zaznaczyć właściwe odpowiedzi.") — optional |
| `pointsFormula` | printed string, e.g. `"14 x 0,5 p."` |
| `maxPoints`, `pointsPerItem` | numbers; invariant `maxPoints = Σ item.points` |
| `plays` | listening only: `1` or `2` (from "odtworzone … jeden raz / dwa razy") |
| `grading` | `"auto"` (objective: choice/TAK-NIE/letter/set), `"auto+review"` (free text with a closed list of accepted forms; a miss may still be right → user can override, or export), `"review"` (no reliable auto-check: transform, writing) |
| `example` | the PRZYKŁAD, same shape as an item + `"answer"` shown (0 p., `"shown": true`) |
| `items` | array of Item (see per type) |
| `audio` | listening only, see §3 |
| `transcript` | listening only: `{ "text": "…" }` or `{ "lines": [{"sp":"K","t":"…"}] }`, per item for I/II (`item.transcript`) |
| `images` | `[{"id":"A","src":"img/2021-01/l5-A.jpg","alt":""}]` — only where the image is required |
| `source` | "Na podstawie: URL" if printed |
| `pdfPage` | page in test.pdf (for "show original" links / re-cropping) |

### Item (common)
`id` (`"l1.3"`, example `"l1.ex"`), `number` (printed number), `points` (default `task.pointsPerItem`), `answer`, optional `accept[]`, optional `explain`/`transcript`.

### Answer & matching semantics (all types)

| situation | fields | check |
|---|---|---|
| single choice (a/b/c, letter A–H, number) | `answer: "b"` | equal after upper/lower-case folding |
| TAK/NIE | `answer: "TAK"` / `"NIE"` (UI may show Prawda/Fałsz) | equal |
| unordered set (matchMulti rows) | `answer: ["1","4"]`, `anyOrder: true` | score = \|user ∩ answer\| × `pointsPerSlot` (1 p. per correct box, no negative); **set semantics for every row**, regardless of the printed `*` — the `*kolejność odpowiedzi dowolna` footnote is stored as `starred: true` for fidelity |
| free text, closed answer | `answer: "kupują"`, `accept: ["…","…"]` (extra official variants; the key's `A / B` alternatives are split into `accept`) | `norm(user) ∈ {norm(answer)} ∪ norm(accept)` |
| free text, open (transform, writing) | `answer: "<model>"`, `grading: "review"`, `rubric: "<verbatim key text>"`, `rubricParts: [{"what":"2 transformacje","points":0.5}]` | no auto verdict; show model answer; user self-scores in the printed partial points, or export |

`norm()` (default for `match` unless the task overrides it with `"match": {…}`): NFC → trim → collapse internal whitespace to one space → lower-case → unify quotes/dashes → strip leading/trailing `. … ! ? , ; :` and surrounding quotes. **Diacritics are significant** (ł≠l, ą≠a): exam keys are orthographic; offer an app-level "lenient diacritics" toggle that folds with `normalize("NFD")` and removes marks, scoring such answers with a visible "missing diacritics" hint (not full credit by default). Capitalisation is ignored even where the key shows a capital ("Temat").
Task-level override example (grammar V): `"match": {"stripChars": "…?.!", "ignoreCase": true}` so `Czym`, `czym…?`, `Czym ?` all match `Czym…?`.

## 3. Listening audio block

```jsonc
"audio": {
  "announce": [326.2, 342.2],                       // spoken "Zadanie II …" (skip in practice mode)
  "plays": [ { "start": 352.5, "end": 461.3 },      // play 1
             { "start": 507.1, "end": 616.0 } ],    // play 2 (absent for 1-play tasks)
  "pauseBetweenPlays": 45.8,                         // for exam-simulation mode
  "items": [ { "ref": "l2.ex", "start": 352.5, "end": 365.9 }, { "ref": "l2.1", "start": 372.6, "end": 382.2 } ],   // optional, play-1 timestamps;
                                                     //  play-2 times = itemTimes + (plays[1].start - plays[0].start)
  "source": "auto-silencedetect", "verified": false
}
```
Modes: **exam** (limit to `task.plays`, start at `plays[0].start`, optional 45.8 s pause, then play 2), **practice** (unlimited replay of the whole task or of a single `items[]` chunk, optional transcript reveal after answering). Because play 2 is an identical copy, per-item times for play 2 are just offset. Tasks III/IV (and II/V in a few 2021 sessions) have no per-item pauses → omit `items`.
Generator: `docs/tools/audio_segments.py` → `docs/audio_segments.json` (all 15 sessions).

## 4. Item shapes by task type

- **`mc`** — `items[]: { prompt, options:[{id:"a",text}], answer:"b", passage? , transcript? }`. For reading I each item carries its own `passage` (text + `source`). `task.example` = a full item with its answer.
- **`tf`** — `items[]: { statement, answer:"TAK"|"NIE" }`; optional shared `task.passage` (reading II, text) — listening has none.
- **`match`** (one-to-one) — `task.options:[{id:"A",text}]` (letters/titles/paragraphs; may include a spare), `items[]: { prompt | image, answer:"E" }`. Reading IV: `task.heading` + items = titles, options = paragraphs. Listening picture task: items = `{ "label":"B", "image":"img/…", "answer":"3" }`, options = text numbers `1…10`, example = picture A → `"answer"`.
- **`gapMatch`** — `task.passage` with `{{ex}}`, `{{1}}`… markers, `task.options` = fragments A–H, items `{gap:"1", answer:"E"}`.
- **`matchMulti`** — `task.statements:[{id:"A",text,slots:2,answer:["1","4"],anyOrder:true,starred:true}]`, `task.persons:[{id:"1",label:"osoba 1"}]`, example `{statement, answer:["3"]}`. Item points: `pointsPerSlot: 1`; `maxPoints = Σ slots`.
- **`clozeChoice`** — `task.passage` with `{{n}}` and `task.blanks:[{id:"1", options:["malarskiej","malarskiego"], answer:"malarskiej"}]`; examples `{id:"ex", …, "example":true}` are rendered pre-answered. In-text `capitalise: true` is not needed: options are stored as printed.
- **`clozeBox`** — `task.wordBox:["dlaczego","że",…]`, `task.distractors:["dlaczego"]` (from "Wyraz zbędny"), `task.passage`, `blanks:[{id, answer}]`; the example's word is in the box but flagged in `task.example.answer`. Reading V box-style: same shape (box = 10 answers + the example word, no distractor).
- **`clozeForm`** — passage + `blanks:[{id, given:"zastanawiać się", answer:"zastanawiają się", accept:[]}]`; `given` printed verbatim (e.g. `"wy-móc"`, `"wy – przyjść"`: the pronoun is part of the cue and **not** part of the answer).
- **`question`** — items `{ sentence:"Robert zaraził się grypą od Stefana.", underlined:"grypą", stem:"…………… zaraził się Robert od Stefana?", shortAnswer:"Grypą.", answer:"Czym", accept:[…] }`; check with `match.stripChars` above.
- **`transform`** — items `{ source, hint:"patrzył", answer:"<model>", accept:[…], rubric:"<verbatim>", rubricParts:[…], grading:"review" }`; task-level `note: "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem."`
- **`writing`** — see §6.

## 5. Worked examples (2024-02; real data)

### 5.1 Listening I — MC a/b/c, 14 × 0.5, one play (full task)

```json
{
  "id": "l1", "number": "I", "type": "mc", "grading": "auto",
  "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
  "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
  "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 3,
  "audio": {
    "announce": [107.8, 123.9],
    "plays": [{ "start": 134.2, "end": 315.9 }],
    "items": [
      {"ref":"l1.ex","start":134.2,"end":144.5}, {"ref":"l1.1","start":150.9,"end":156.0}, {"ref":"l1.2","start":162.4,"end":167.7},
      {"ref":"l1.3","start":174.2,"end":180.5}, {"ref":"l1.4","start":186.8,"end":191.7}, {"ref":"l1.5","start":198.1,"end":204.6},
      {"ref":"l1.6","start":210.9,"end":217.2}, {"ref":"l1.7","start":223.5,"end":229.2}, {"ref":"l1.8","start":235.6,"end":241.7},
      {"ref":"l1.9","start":248.1,"end":253.3}, {"ref":"l1.10","start":259.7,"end":265.9}, {"ref":"l1.11","start":272.3,"end":278.7},
      {"ref":"l1.12","start":285.1,"end":291.1}, {"ref":"l1.13","start":297.5,"end":303.5}, {"ref":"l1.14","start":309.8,"end":315.9}
    ],
    "source": "auto-silencedetect", "verified": false
  },
  "example": { "id": "l1.ex", "prompt": "Ta wypowiedź oznacza", "options": [{"id":"a","text":"komplement."},{"id":"b","text":"porównanie."},{"id":"c","text":"dezaprobatę."}], "answer": "a", "shown": true,
               "transcript": {"sp":"K","t":"Świetnie pasuje ci ta skórzana kurtka."} },
  "items": [
    {"id":"l1.1","number":1,"prompt":"Ta wypowiedź oznacza","options":[{"id":"a","text":"zgodę na propozycję."},{"id":"b","text":"odrzucenie propozycji."},{"id":"c","text":"brak decyzji."}],"answer":"b","transcript":{"sp":"M","t":"Z przykrością, ale muszę ci odmówić."}},
    {"id":"l1.2","number":2,"prompt":"Ta wypowiedź jest pytaniem o","options":[{"id":"a","text":"czas."},{"id":"b","text":"drogę."},{"id":"c","text":"transport."}],"answer":"b","transcript":{"sp":"K","t":"Czy wie pan, jak dojść do urzędu miasta?"}},
    {"id":"l1.3","number":3,"prompt":"Ta wypowiedź oznacza, że pociąg","options":[{"id":"a","text":"przyjedzie niezgodnie z rozkładem."},{"id":"b","text":"będzie dokładnie o czasie."},{"id":"c","text":"będzie kwadrans stał na stacji."}],"answer":"a","transcript":{"sp":"M","t":"Pociąg do Wrocławia jest opóźniony 15 minut."}},
    {"id":"l1.4","number":4,"prompt":"Ta wypowiedź oznacza","options":[{"id":"a","text":"zadowolenie."},{"id":"b","text":"zainteresowanie."},{"id":"c","text":"krytykę."}],"answer":"c","transcript":{"sp":"K","t":"Jak mogłeś jej to wszystko powiedzieć!"}},
    {"id":"l1.5","number":5,"prompt":"Ta wypowiedź oznacza, że podczas wykładu","options":[{"id":"a","text":"można korzystać z telefonów."},{"id":"b","text":"nie wolno używać telefonów."},{"id":"c","text":"trzeba włączyć telefon."}],"answer":"b","transcript":{"sp":"M","t":"Podczas wykładu obowiązuje zakaz używania telefonów."}},
    {"id":"l1.6","number":6,"prompt":"Ta wypowiedź jest typowa","options":[{"id":"a","text":"u szewca."},{"id":"b","text":"u fryzjera."},{"id":"c","text":"u krawca."}],"answer":"c","transcript":{"sp":"K","t":"Chciałabym skrócić tę spódnicę o 6 cm."}},
    {"id":"l1.7","number":7,"prompt":"Ta wypowiedź jest typowa dla","options":[{"id":"a","text":"rodzica."},{"id":"b","text":"nauczyciela."},{"id":"c","text":"brata."}],"answer":"a","transcript":{"sp":"M","t":"Synku, odrobiłeś już zadanie domowe?"}},
    {"id":"l1.8","number":8,"prompt":"Ta wypowiedź oznacza, że","options":[{"id":"a","text":"pakiet jest dodatkowo płatny."},{"id":"b","text":"abonament jest darmowy."},{"id":"c","text":"pakiet jest wliczony w opłaty."}],"answer":"c","transcript":{"sp":"K","t":"Pakiet dodatkowych minut jest w cenie abonamentu."}},
    {"id":"l1.9","number":9,"prompt":"Ta wypowiedź oznacza","options":[{"id":"a","text":"prośbę."},{"id":"b","text":"zaproszenie."},{"id":"c","text":"gratulacje."}],"answer":"a","transcript":{"sp":"M","t":"Poszedłbyś wreszcie z psem na spacer!"}},
    {"id":"l1.10","number":10,"prompt":"Ta wypowiedź jest typowa","options":[{"id":"a","text":"w czasie podróży."},{"id":"b","text":"w czasie wizyty u lekarza."},{"id":"c","text":"w sklepie turystycznym."}],"answer":"a","transcript":{"sp":"K","t":"Bagaż podręczny należy umieścić pod siedzeniem."}},
    {"id":"l1.11","number":11,"prompt":"Ta wypowiedź oznacza","options":[{"id":"a","text":"obojętność."},{"id":"b","text":"znudzenie."},{"id":"c","text":"zaciekawienie."}],"answer":"c","transcript":{"sp":"M","t":"Niesamowita historia! Co było potem?"}},
    {"id":"l1.12","number":12,"prompt":"Ta wypowiedź to fragment","options":[{"id":"a","text":"prognozy pogody."},{"id":"b","text":"porady lekarskiej."},{"id":"c","text":"audycji sportowej."}],"answer":"b","transcript":{"sp":"K","t":"Proszę brać leki przeciwgorączkowe i odpoczywać."}},
    {"id":"l1.13","number":13,"prompt":"Ta wypowiedź oznacza, że klient chce","options":[{"id":"a","text":"zestaw z rybą."},{"id":"b","text":"potrawę z mięsem."},{"id":"c","text":"danie wegetariańskie."}],"answer":"c","transcript":{"sp":"M","t":"Czy mają państwo w ofercie dania warzywne?"}},
    {"id":"l1.14","number":14,"prompt":"Ta wypowiedź oznacza, że kurs jest dla osób","options":[{"id":"a","text":"które mają co najmniej 18 lat."},{"id":"b","text":"które mają mniej niż 18 lat."},{"id":"c","text":"bez względu na wiek."}],"answer":"a","transcript":{"sp":"K","t":"Na kurs zapraszamy wszystkie osoby pełnoletnie."}}
  ]
}
```

### 5.2 Listening IV — TAK/NIE, 6 × 1, two plays

```json
{
  "id": "l4", "number": "IV", "type": "tf", "grading": "auto",
  "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
  "prompt": "Proszę posłuchać informacji na temat aplikacji Pola i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
  "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "plays": 2, "pdfPage": 6,
  "source": "Na podstawie: https://jedynka.polskieradio.pl/artykul/2671258,Kod-590-aplikacja-Pola-Jak-%C5%9Bwiadomie-kupowa%C4%87-polskie-produkty",
  "audio": { "announce": [911.8, 927.7], "plays": [{"start": 937.9, "end": 1028.9}, {"start": 1074.7, "end": 1165.8}], "pauseBetweenPlays": 45.8, "source": "auto-silencedetect", "verified": false },
  "transcript": { "lines": [
    {"sp":"Dziennikarka","t":"Po co nam ta nowa aplikacja?"},
    {"sp":"Programista","t":"Żeby sprawdzić, czy sok lub wędlina, które kupujemy, wyprodukowano w Polsce. Dzięki aplikacji Pola możemy zrobić to sami, wystarczy zeskanować kod kreskowy."},
    {"sp":"Dziennikarka","t":"Jak działa aplikacja?"},
    {"sp":"Programista","t":"To bardzo proste. Bierzemy na przykład jogurt, uruchamiamy aplikację w naszym smartfonie i skanujemy kod kreskowy. Po chwili możemy sprawdzić, czy producent jest z Polski lub czy płaci tu podatki."},
    {"sp":"Dziennikarka","t":"Jak oceniacie produkty?"},
    {"sp":"Programista","t":"Jest pięć kryteriów. Najwięcej punktów jest za wielkość polskiego kapitału, produkcję na terenie naszego kraju i prowadzenie tutaj badań naukowych. Najmniej za rejestrację firmy w Polsce."},
    {"sp":"Dziennikarka","t":"Ile to kosztuje?"},
    {"sp":"Programista","t":"Aplikacja jest całkowicie bezpłatna, zarówno dla firm, jak i dla użytkowników."},
    {"sp":"Dziennikarka","t":"Tylko z aplikacją możemy sprawdzić, czy kupujemy polskie produkty?"},
    {"sp":"Programista","t":"Nie, na przykład jedna z sieci sklepów drukuje takie informacje na paragonie – podaje na nim sumę, jaką ze sprzedaży otrzymają polscy producenci. Poza tym pomocny może być sam kod kreskowy. Trzy pierwsze liczby kodu: 590 oznaczają, że firma zarejestrowała się w Polsce, ale uwaga – nie ma gwarancji, że tutaj wyprodukowała produkt."}
  ]},
  "example": { "id": "l4.ex", "statement": "Aplikację skanujemy przy kasie.", "answer": "NIE", "shown": true },
  "items": [
    {"id":"l4.1","number":1,"statement":"Dzięki aplikacji możemy sprawdzić, z jakiego kraju pochodzi produkt.","answer":"NIE"},
    {"id":"l4.2","number":2,"statement":"Aplikacja jest łatwa w obsłudze.","answer":"TAK"},
    {"id":"l4.3","number":3,"statement":"Każdy produkt może otrzymać maksymalnie 5 punktów.","answer":"NIE"},
    {"id":"l4.4","number":4,"statement":"Aplikacja jest darmowa dla klientów i producentów.","answer":"TAK"},
    {"id":"l4.5","number":5,"statement":"Czasami z paragonu można dowiedzieć się, czy kupiliśmy jakieś polskie produkty.","answer":"TAK"},
    {"id":"l4.6","number":6,"statement":"Początek kodu 590 oznacza, że firma produkuje towar w Polsce.","answer":"NIE"}
  ]
}
```

### 5.3 Listening V — multi-match persons → statements ("A*: 1,4"), 6 slots × 1

Key as printed: `A* 1,4 | B 5 | C* 1,3 | D 2`, footnote `*kolejność odpowiedzi dowolna`. UI = rows A–D, each with `slots` empty boxes; person 1 legitimately appears in two rows. Score = number of correct (row, person) pairs.

```json
{
  "id": "l5", "number": "V", "type": "matchMulti", "grading": "auto",
  "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Nagranie zostanie odtworzone dwa razy.",
  "prompt": "Proszę wysłuchać wypowiedzi dotyczących uczestnictwa w wydarzeniach kulturalnych (1-5) i dopasować do ich opinie (A-D). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
  "pointsFormula": "6 x 1 p.", "pointsPerSlot": 1, "maxPoints": 6, "plays": 2, "pdfPage": 7,
  "audio": {
    "announce": [1176.2, 1192.2],
    "plays": [{"start": 1202.4, "end": 1338.0}, {"start": 1383.8, "end": 1519.5}],
    "pauseBetweenPlays": 45.8,
    "items": [
      {"ref":"p1","start":1202.4,"end":1229.5}, {"ref":"p2","start":1236.1,"end":1261.6}, {"ref":"p3","start":1268.2,"end":1284.1},
      {"ref":"p4","start":1290.5,"end":1308.7}, {"ref":"p5","start":1315.2,"end":1338.0}
    ],
    "source": "auto-silencedetect", "verified": false
  },
  "persons": [{"id":"1","label":"osoba 1"},{"id":"2","label":"osoba 2"},{"id":"3","label":"osoba 3"},{"id":"4","label":"osoba 4"},{"id":"5","label":"osoba 5"}],
  "example": { "id": "l5.ex", "statement": "chodzi na premiery kinowe.", "answer": ["3"], "shown": true },
  "statements": [
    {"id":"l5.A","letter":"A","text":"korzysta z darmowych ofert.","slots":2,"answer":["1","4"],"anyOrder":true,"starred":true},
    {"id":"l5.B","letter":"B","text":"chodzi na spotkania z pisarzami.","slots":1,"answer":["5"],"anyOrder":true,"starred":false},
    {"id":"l5.C","letter":"C","text":"dzieli swoją pasję z bliskimi.","slots":2,"answer":["1","3"],"anyOrder":true,"starred":true},
    {"id":"l5.D","letter":"D","text":"uczestniczy w zagranicznych wydarzeniach kulturalnych.","slots":1,"answer":["2"],"anyOrder":true,"starred":false}
  ],
  "keyNote": "*kolejność odpowiedzi dowolna",
  "transcript": { "lines": [
    {"sp":"Osoba 1 (M)","t":"Raz w tygodniu w konkretny dzień mogę odwiedzić wybrane muzeum lub galerię i nie płacić za bilet. A raz w roku podczas nocy muzeów niemal wszystkie instytucje kultury w Polsce otwierają swoje drzwi dla zwiedzających. Wtedy razem z moją rodziną oglądam ciekawe wystawy."},
    {"sp":"Osoba 2 (M)","t":"Lubię oglądać filmy, ale nie w multipleksach. Wolę małe sale kinowe, dlatego wybieram kameralne festiwale, podczas których prezentowane są filmy z określonego gatunku lub z określonego kraju. Jeżdżę też na festiwale filmowe za granicę między innymi do Cannes i do Berlina, skąd przywożę niezapomniane wrażenia!"},
    {"sp":"Osoba 3 (K)","t":"Uwielbiam kino. Jestem na bieżąco z każdym nowym tytułem, ponieważ często chodzę na pokazy premierowe. Jeśli dowiem się, że coś nowego wchodzi na ekrany, to od razu kupuję bilety dla siebie i przyjaciółki."},
    {"sp":"Osoba 4 (K)","t":"Lubię muzykę klasyczną i często jej słucham. Chciałabym chodzić do filharmonii lub opery, ale ceny biletów są za wysokie. Na szczęście w parku, gdzie spaceruję, mogę latem bezpłatnie słuchać muzyki Chopina na żywo."},
    {"sp":"Osoba 5 (K)","t":"Często uczestniczę w spotkaniach autorskich, które są organizowane przez biblioteki lub domy kultury w moim mieście. Ponadto szukam imprez dla fanów literatury. Targi książki w dużych miastach w Polsce przyciągają wielu miłośników książek, którzy mogą spotkać tam ulubionych autorów."}
  ]}
}
```
(Listening II/III follow `mc` exactly as 5.1 with `plays: 2`; their per-item `audio.items` for play 1 are in `docs/audio_segments.json`.)

### 5.4 Reading V — inline choice (underline one of 2–3 words), 10 × 0.5

```json
{
  "id": "r5", "number": "V", "type": "clozeChoice", "grading": "auto",
  "instruction": "V. Proszę – zgodnie z przykładem – podkreślić najlepszą spośród możliwości podanych w nawiasach.",
  "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 14,
  "title": "Najlepsza komedia",
  "source": "Na podstawie: https://culture.pl/pl/dzielo/sami-swoi-rez-sylwester-checinski",
  "passage": "„Sami swoi” to ulubiona komedia Polaków i wciąż {{ex}} na liście najpopularniejszych polskich filmów. Produkcja powstała w 1967 roku, a jej {{1}} był Sylwester Chęciński. Film o konflikcie dwóch rodzin zaczyna się od przyjazdu do ojczyzny Jaśka „Johna” Pawlaka, który dawno temu {{2}} do Stanów Zjednoczonych. W czasie jego nieobecności w rodzinnej wsi {{3}} się zmieniło. Spotkanie mężczyzny z bratem Kazimierzem jest pełne radości, ale wesoły nastrój {{4}} się kończy. A wszystko z powodu sąsiada – Kargula.\n\nInspiracją do napisania fabuły było samo życie. Kiedy scenarzysta, Andrzej Mularczyk, opisywał losy dwóch wiejskich rodzin, {{5}} historię swojego wujka.\n\n{{6}} konfliktu między sąsiadami jest w komediach częstym motywem. Bohaterowie „Samych swoich” {{7}} o wszystko, a symbolem niezgody jest płot pomiędzy ich domami. Nawet widzowie, którzy nie są {{8}} filmu, uważają, że opowieść o Kargulach i Pawlakach stała się częścią kultury polskiej. Dużą {{9}} miały też dwie kontynuacje komedii – „Nie ma mocnych” i „Kochaj albo rzuć”. Seria jest tak lubiana, że na festiwalu filmów komediowych, który jest organizowany {{10}} na Dolnym Śląsku, co roku można obejrzeć te filmy.",
  "blanks": [
    {"id":"ex","example":true,"options":["występuje","leży","znajduje się"],"answer":"znajduje się"},
    {"id":"1","options":["dyrektorem","reżyserem","aktorem"],"answer":"reżyserem"},
    {"id":"2","options":["wrócił","wyjechał","poszedł"],"answer":"wyjechał"},
    {"id":"3","options":["dużo","nic","długo"],"answer":"dużo"},
    {"id":"4","options":["krótko","mało","szybko"],"answer":"szybko"},
    {"id":"5","options":["zrobił","wykorzystał","wymyślił"],"answer":"wykorzystał"},
    {"id":"6","options":["Temat","Tytuł","Plan"],"answer":"Temat"},
    {"id":"7","options":["wołają","proszą","kłócą się"],"answer":"kłócą się"},
    {"id":"8","options":["fanami","ulubieńcami","adoratorami"],"answer":"fanami"},
    {"id":"9","options":["opinię","popularność","sławę"],"answer":"popularność"},
    {"id":"10","options":["regularnie","przypadkowo","czasowo"],"answer":"regularnie"}
  ]
}
```
(The example answer is bold-underlined in the PDF, not in `test.txt`; `"znajduje się"` was read from the page image. For other sessions mark unresolved example answers `"answer": null` and render the example without a highlight. Items are `blanks[1..10]`; each scores 0.5.)

### 5.5 Grammar II — conjunctions from a box with one distractor (2.5 p.)

```json
{
  "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
  "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
  "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 16,
  "source": "Na podstawie: https://www.medonet.pl/zdrowy-dom/zdrowy-sen,jak-zasnac-w-kilkadziesiat-sekund--to-genialny-trik-zolnierzy,artykul,55836898.html",
  "wordBox": ["dlaczego","że","który","lecz","jeśli","lub","a"],
  "distractors": ["dlaczego"],
  "passage": "Masz wrażenie, {{ex}} więcej czasu zajmuje ci zasypianie niż sam sen? Budzisz się często w nocy, {{1}} rano jesteś zmęczony? Nie tylko ty masz taki kłopot, {{2}} także miliony ludzi na całym świecie. To wina stresu, {{3}} odczuwasz przez cały dzień. Nie zaśniesz, {{4}} wieczorem będziesz nadal myślał o swoich problemach. Lepiej wyłącz telefon, komputer i telewizor oraz weź ciepłą kąpiel {{5}} prysznic. Możesz też posłuchać cichej, spokojnej muzyki. To na pewno pomoże ci się zrelaksować.",
  "blanks": [
    {"id":"ex","example":true,"answer":"że"},
    {"id":"1","answer":"a"}, {"id":"2","answer":"lecz"}, {"id":"3","answer":"który"}, {"id":"4","answer":"jeśli"}, {"id":"5","answer":"lub"}
  ]
}
```
(Each box word may be used once; the key's `Wyraz zbędny: dlaczego` → `distractors`. Grammar VIII has the same shape with prepositions: `z w przez na bez na wokół`, answers `wokół z na w na`, distractor `bez`; note the box lists "na" twice.)

### 5.6 Grammar IV — free-form verb forms (present & future), 10 × 0.5

```json
{
  "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
  "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przyszły).",
  "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17,
  "source": "Na podstawie: Matura czyli... jak nie dać się zwariować - Szkoła Maturzystów Łukasza Jarosińskiego (szkolamaturzystow.pl)",
  "match": { "ignoreCase": true, "collapseSpace": true, "stripChars": ".,;:!?…" },
  "passage": "Egzamin maturalny coraz bliżej. {{ex1}} on ogromny wpływ na przyszłość uczniów, bo od jego wyników {{ex2}} to, czy za kilka miesięcy wszyscy {{ex3}} na wymarzone kierunki studiów. Dlatego już teraz młodzi ludzie intensywnie {{1}}, jak dobrze przygotować się do egzaminu. Często oni {{2}} o radę nauczycieli albo {{3}} książki z testami przykładowymi. Moja córka jest bardzo zestresowana i dlatego ona {{4}} w tym tygodniu zapisać się na kurs przygotowawczy. Jednak ja {{5}} jej i innym uczniom:\n\n– Nie trzeba się martwić, tylko opracować dobry plan pracy. Gdy zaplanujecie naukę, to przez najbliższe miesiące {{6}} dobrze przygotowywać się do egzaminu. Ta strategia na pewno {{7}} was do rozpoczęcia systematycznego powtarzania, {{8}} wam poczucie spokoju. Dlatego w maju nikt nie {{9}} uczyć się w stresie od rana do wieczora na kilka dni przed egzaminem. Na pewno na maturę {{10}} dobrze przygotowani.",
  "blanks": [
    {"id":"ex1","example":true,"given":"mieć","answer":"Ma"},
    {"id":"ex2","example":true,"given":"zależeć","answer":"będzie zależało","accept":["będzie zależeć"]},
    {"id":"ex3","example":true,"given":"dostać się","answer":"dostaną się"},
    {"id":"1","given":"zastanawiać się","answer":"zastanawiają się"},
    {"id":"2","given":"prosić","answer":"proszą"},
    {"id":"3","given":"kupować","answer":"kupują"},
    {"id":"4","given":"chcieć","answer":"chce"},
    {"id":"5","given":"tłumaczyć","answer":"tłumaczę"},
    {"id":"6","given":"wy-móc","answer":"będziecie mogli"},
    {"id":"7","given":"zmotywować","answer":"zmotywuje"},
    {"id":"8","given":"zapewnić","answer":"zapewni"},
    {"id":"9","given":"musieć","answer":"będzie musiał"},
    {"id":"10","given":"wy – przyjść","answer":"przyjdziecie"}
  ],
  "pdfNotes": ["PDF prints the superscript '3' after '(zastanawiać się)' of item 1 — a typo in the original, ignore."]
}
```
`grading: "auto+review"`: the key lists a single form (plus `/` variants where the examiners gave them); a miss is shown as "not in official key — see model" with a "mark as correct" override and is included in the review export.

### 5.7 Grammar VI — transformation (partial-credit rubric, review-graded), 5 × 1

```json
{
  "id": "g6", "number": "VI", "type": "transform", "grading": "review",
  "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
  "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 19,
  "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
  "example": { "id": "g6.ex", "source": "Mój tata świetnie mówi po francusku.", "hint": "zna", "answer": "Mój tata świetnie zna francuski.", "shown": true },
  "items": [
    {"id":"g6.1","number":1,"source":"Mateusz z zainteresowaniem przyglądał się kolorowym wystawom sklepów.","hint":"patrzył","answer":"Mateusz z zainteresowaniem patrzył na kolorowe wystawy sklepów.","rubric":"dodanie przyimka (0,25) + 2 transformacje (2 x 0,25) + brak transformacji (0,25)","rubricParts":[{"what":"dodanie przyimka","points":0.25},{"what":"2 transformacje","points":0.5},{"what":"brak transformacji","points":0.25}]},
    {"id":"g6.2","number":2,"source":"Proszę ustawić ławki wzdłuż tamtej żółtej ściany.","hint":"pod","answer":"Proszę ustawić ławki pod tamtą żółtą ścianą.","rubric":"1 transformacja „ścianą” 0,5 p. + 2 transformacje (2 x 0,25)","rubricParts":[{"what":"transformacja „ścianą”","points":0.5},{"what":"2 transformacje","points":0.5}]},
    {"id":"g6.3","number":3,"source":"Uczniów z mojej klasy nie stresuje egzamin pisemny.","hint":"nie boją się","answer":"Uczniowie z mojej klasy nie boją się egzaminu pisemnego.","rubric":"1 transformacja „uczniowie” 0,5 p. + 2 transformacje (2 x 0,25)","rubricParts":[{"what":"transformacja „uczniowie”","points":0.5},{"what":"2 transformacje","points":0.5}]},
    {"id":"g6.4","number":4,"source":"Kto jest autorem tego opowiadania?","hint":"napisał","answer":"Kto napisał to opowiadanie?","rubric":"2 transformacje (2 x 0,5)","rubricParts":[{"what":"2 transformacje","points":1}]},
    {"id":"g6.5","number":5,"source":"Mój syn jest starszym programistą.","hint":"jako","answer":"Mój syn pracuje jako starszy programista.","rubric":"dodanie czasownika 0,5 p. + 2 transformacje (2 x 0,25)","rubricParts":[{"what":"dodanie czasownika","points":0.5},{"what":"2 transformacje","points":0.5}]}
  ]
}
```
UI: type sentence → on check show the model + rubric; the user (or Claude via export) assigns points in the printed steps; auto-hint only when `norm(user) == norm(answer)` → full point.

### 5.8 Writing — 3 sets × (a, b), rubric, export

```json
{
  "id": "w", "number": null, "type": "writing", "grading": "review", "pdfPages": [23, 29],
  "instruction": "Uwaga! Proszę wybrać tylko jeden z zestawów i wykonać obydwa zadania (a i b) z tego samego zestawu.",
  "timeMinutes": 75, "maxPoints": 30,
  "choose": { "sets": 1, "of": 3, "doBoth": ["a", "b"] },
  "sets": [
    { "id": "I", "parts": [
      { "id": "a", "genre": "ogłoszenie", "wordTarget": 30, "prompt": "Robi Pani/Pan remont kuchni i chce Pani/Pan sprzedać używane meble oraz sprzęty kuchenne. Proszę napisać ogłoszenie, które zamieści Pani/Pan w internecie." },
      { "id": "b", "genre": "opowiadanie", "wordTarget": 170, "prompt": "Proszę napisać opowiadanie, które zaczyna się od zdania: „Tego dnia padał deszcz.”", "startsWith": "Tego dnia padał deszcz." }
    ]},
    { "id": "II", "parts": [
      { "id": "a", "genre": "pozdrowienia", "wordTarget": 35, "prompt": "Przeprowadziła się Pani / Przeprowadził się Pan do innego miasta w Polsce. Proszę napisać pozdrowienia z nowego miejsca do polskiej koleżanki/polskiego kolegi." },
      { "id": "b", "genre": "sprawozdanie", "wordTarget": 165, "prompt": "Była Pani / Był Pan na otwarciu nowego centrum sportowego „Wszystko dla Zdrowia”, w którym znajdują się sklepy i sale do ćwiczeń. Proszę napisać sprawozdanie (relację) z tego wydarzenia do polskiej gazety, z którą Pani/Pan współpracuje." }
    ]},
    { "id": "III", "parts": [
      { "id": "a", "genre": "życzenia", "wordTarget": 30, "prompt": "Dyrektorka firmy, w której Pani/Pan pracuje, wychodzi za mąż. Proszę napisać życzenia z tej okazji." },
      { "id": "b", "genre": "esej", "wordTarget": 170, "prompt": "Proszę napisać esej (wypracowanie szkolne) pt. „Zawsze znajdę czas na moje hobby”.", "title": "Zawsze znajdę czas na moje hobby" }
    ]}
  ],
  "wordCount": { "targetKind": "approx", "warnBelowRatio": 0.8, "note": "Source gives only the target and a '% of required words' field; 0.8 is an app convention, not official." },
  "rubric": {
    "source": "KARTA OCENY WYPOWIEDZI PISEMNEJ (test.pdf p.29)", "perPartMax": 15, "totalMax": 30,
    "criteria": [
      { "id": "task", "name": "wykonanie zadania (treść, forma, objętość)", "max": 5, "sub": [
        {"id":"t","name":"treść","max":2.5}, {"id":"f","name":"forma","max":1.5}, {"id":"o","name":"objętość","max":1} ] },
      { "id": "means", "name": "środki językowe (leksyka i frazeologia, składnia, styl)", "max": 5, "sub": [
        {"id":"l","name":"leksyka i frazeologia","max":2}, {"id":"s","name":"składnia","max":2}, {"id":"st","name":"styl","max":1} ] },
      { "id": "correct", "name": "poprawność językowa (gramatyka, ortografia i interpunkcja)", "max": 5, "sub": [
        {"id":"g","name":"gramatyka","max":3.5}, {"id":"or","name":"ortografia i interpunkcja","max":1.5} ] }
    ],
    "errorCounts": ["gramatyczne", "leksykalne", "stylistyczne", "ortograficzne+interpunkcyjne", "inne"],
    "extraFields": ["recenzja"]
  }
}
```

**Writing-answer export for Claude review** (what the app should produce; one file per attempt):
```json
{
  "exam": "2024-02", "task": "w", "set": "I", "language": "pl", "level": "B1",
  "parts": [
    { "id": "a", "genre": "ogłoszenie", "prompt": "…verbatim…", "wordTarget": 30, "wordCount": 27, "text": "…user text…" },
    { "id": "b", "genre": "opowiadanie", "prompt": "…", "wordTarget": 170, "wordCount": 151, "text": "…" }
  ],
  "rubric": { "…same as above…": true },
  "instructionsForReviewer": "Score each part with the rubric (sub-criteria maxima as given), count errors per category, give a short RECENZJA in Polish and suggested corrections. No official band descriptors exist in the sources: state that scores are an estimate."
}
```
Also export any `review`-graded grammar answers (task id, item id, source/hint, user answer, model answer, rubricParts) the same way (`"kind":"grammarReview"`).

## 6. User state (not part of exam files)

`localStorage["polski.v1"] = { attempts: [{ attemptId, examId, mode:"exam|practice", startedAt, answers: { "l1.3": "a", "l5.A": ["4","1"], "g4.6": "będziecie mogli", "w.I.a": "text…" }, overrides: { "g4.9": true }, selfScores: { "g6.2": 0.5 } }] }`. Answers are keyed by item/blank/statement `id`; sets are arrays (unordered); TAK/NIE strings; choice letters lower-case for mc, upper-case for letter matching.

## 7. Validation invariants (write a checker, run on every generated file)

1. `Σ task.maxPoints` per section = 30; per module `taskCount` matches; total 120.
2. Per task: `maxPoints == Σ item.points` (or `pointsPerSlot × Σ slots`; `0.5 × 10`, etc.) and equals the printed `pointsFormula` product.
3. Every `answer` letter/number exists in `options`/`persons`; every `{{id}}` marker in `passage` has a `blank`/`item` and vice-versa; `clozeBox` answers ⊂ `wordBox`, `distractors` ∩ answers = ∅ (the example's word is the only box word not accounted for).
4. `match`/`gapMatch`/`matchMulti`: a letter is used at most once except in `matchMulti` (a person may recur across statements; within a row persons are distinct).
5. Listening: every task has `plays == audio.plays.length`; for 2-play tasks `|len(play1) − len(play2)| < 1 s`; `items` ref ids exist; `end <= duration`.
6. Writing: `Σ wordTarget(a,b) = 200` per set; rubric maxima sum to 15 per part.
7. No `answer: null` outside `example` blocks (except flagged `"unresolved": true`).
