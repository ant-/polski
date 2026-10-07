#!/usr/bin/env python3
"""Builds data/2022-11.js. Run: python3 tools/build_2022_11.py
Content = verbatim from sources/2022-11/test.txt (+ PDF page renders for underlined/bold PRZYKŁAD answers),
keys = official 'Klucz do zadań' in transcript.txt. Adapted from tools/build_2024_02.py (docs/conversion-recipe.md).
NOTE: does not touch data/manifest.js (shared file) - see the report."""
import json, sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2022-11"
test = clean_lines(read(SID, "test.txt"))
OPT = lambda *texts: [{"id": "abc"[i], "text": t} for i, t in enumerate(texts)]
src_ = lambda s: "Na podstawie: " + s


def mc_item(tid, n, prompt, opts, ans, **kw):
    return {"id": f"{tid}.{n}", "number": n, "prompt": prompt, "options": OPT(*opts), "answer": ans, **kw}


def sect(start_pat, end_pat):
    return between(test, start_pat, end_pat)


tr_lines = clean_lines(read(SID, "transcript.txt"))


def tr_block(roman):
    s = next(i for i, l in enumerate(tr_lines) if re.match(rf"^TRANSKRYPCJA {roman}\s*$", l))
    e = next(i for i in range(s + 1, len(tr_lines)) if re.match(r"^TRANSKRYPCJA [IV]+\s*$", tr_lines[i]) or "ROZUMIENIE ZE SŁUCHU" in tr_lines[i])
    return [l for l in tr_lines[s + 1:e] if l.strip()]


# =============================================================== LISTENING
# ---- l1: 14 single utterances; transcript lines look like "  3. text (K)"
l1_tr = {}
for l in tr_block("I"):
    m = re.match(r"^\s*(Przykład|\d+)[:.]\s*(.*?)\s*\(([MK])\)\s*$", l)
    assert m, l
    l1_tr["ex" if m[1] == "Przykład" else int(m[1])] = {"sp": m[3], "t": m[2]}
assert len(l1_tr) == 15
l1_key = "a b a c c b a c b c b a c a".split()
l1_items = [
    ("Tę wypowiedź można usłyszeć przed", ["egzaminem.", "rozmową o pracę.", "spektaklem."]),
    ("Ta wypowiedź jest typowa z okazji", ["urodzin.", "ślubu.", "awansu."]),
    ("Ta wypowiedź oznacza, że kobieta", ["jutro zapłaci za lekcje.", "jutro zacznie lekcje.", "będzie prowadzić lekcje."]),
    ("Tę wypowiedź można usłyszeć", ["w punkcie informacji.", "w przebieralni.", "przy kasie."]),
    ("Tę wypowiedź można usłyszeć", ["w lodziarni.", "w sklepie rybnym.", "w barze."]),
    ("Ta wypowiedź jest typowa dla", ["kelnera.", "klienta.", "sprzedawcy."]),
    ("Tę wypowiedź można usłyszeć", ["na dworcu PKP.", "na dworcu autobusowym.", "na przystanku tramwajowym."]),
    ("Ta wypowiedź oznacza", ["obawę.", "radę.", "krytykę."]),
    ("Ta wypowiedź jest typowa", ["przed posiłkiem.", "po posiłku.", "przy wyjściu."]),
    ("Ta wypowiedź jest typowa", ["na poczcie.", "w biurze podróży.", "w urzędzie."]),
    ("Ta wypowiedź to pytanie o", ["datę ważności.", "możliwe rabaty.", "dostępność produktu."]),
    ("Ta wypowiedź oznacza", ["zaproszenie.", "rekomendację.", "rezygnację."]),
    ("Ta wypowiedź jest typowa", ["w firmie cateringowej.", "w biurze tłumaczeń.", "w szkole językowej."]),
    ("Ta wypowiedź jest typowa", ["w banku.", "na poczcie.", "w kantorze."]),
]
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
    "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 3,
    "audio": task_audio(SID, "I", ["l1.ex"] + [f"l1.{i}" for i in range(1, 15)]),
    "example": {"id": "l1.ex", "prompt": "Ta wypowiedź oznacza", "options": OPT("propozycję.", "polecenie.", "radę."),
                "answer": "a", "shown": True, "transcript": l1_tr["ex"]},   # PDF p.3: option a bold-underlined
    "items": [mc_item("l1", i + 1, p, o, l1_key[i], transcript=l1_tr[i + 1]) for i, (p, o) in enumerate(l1_items)],
}

# ---- l2: 8 dialogues, MC; transcript: "N." line then two "- text (X)" lines
l2_blk = tr_block("II")
l2_tr, cur, last = {}, None, None
for l in l2_blk:
    s = l.strip()
    m = re.match(r"^Przykład:\s*-\s*(.*?)\s*\(([MK])\)$", s)
    if m:
        cur = "ex"; l2_tr[cur] = [(m[2], m[1])]; continue
    m = re.match(r"^(\d+)\.$", s)
    if m:
        cur = int(m[1]); l2_tr[cur] = []; continue
    m = re.match(r"^-\s*(.*?)\s*\(([MK])\)$", s)
    assert m, s
    l2_tr[cur].append((m[2], m[1]))
assert len(l2_tr) == 9 and all(len(v) == 2 for v in l2_tr.values())
tr2 = lambda d: {"lines": [{"sp": s, "t": t} for s, t in d]}
l2_key = "a c b a b c b c".split()
l2_items = [
    ("Z tego dialogu dowiadujemy się, że Anka", ["planuje mieszkać za granicą.", "chce spędzić wakacje we Francji.", "za miesiąc będzie w Polsce."]),
    ("Z tego dialogu dowiadujemy się, że wnuczka", ["nie umie grać w szachy.", "jest niezdecydowana.", "ma inne obowiązki."]),
    ("Z tego dialogu dowiadujemy się, że", ["kobieta bardzo lubi kuchnię tajską.", "kobieta nigdy nie próbowała tej potrawy.", "mężczyzna nie umie gotować."]),
    ("Z tego dialogu dowiadujemy się, że", ["eksponaty niedługo będzie można zobaczyć za darmo.", "wejście do muzeum jest zamknięte.", "eksponaty będzie można zobaczyć od jutra."]),
    ("Z tego dialogu dowiadujemy się, że", ["para zaplanowała daleką podróż.", "kobieta marzy o dalekiej podróży.", "mężczyzna pierwszy raz poleci samolotem."]),
    ("Z tego dialogu dowiadujemy się, że mężczyzna", ["zdał kurs na prawo jazdy.", "dostał podwyżkę w pracy.", "planuje otworzyć własny biznes."]),
    ("Z tego dialogu dowiadujemy się, że mężczyzna", ["pomylił dwa biura.", "zmienił zdanie.", "zgubił rachunek."]),
    ("Z tego dialogu dowiadujemy się, że", ["kobieta już kupiła prezent.", "mężczyzna nie chce prezentu.", "kobieta jeszcze nie zdecydowała, co kupić."]),
]
l2 = {
    "id": "l2", "number": "II", "type": "mc", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać dialogów i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "8 x 1 p.", "pointsPerItem": 1, "maxPoints": 8, "plays": 2, "pdfPage": 4,
    "audio": task_audio(SID, "II", ["l2.ex"] + [f"l2.{i}" for i in range(1, 9)]),
    "example": {"id": "l2.ex", "prompt": "Z tego dialogu dowiadujemy się, że ona",
                "options": OPT("będzie piła kawę w kawiarni.", "nie będzie piła kawy w kawiarni.", "chce zarezerwować stolik w kawiarni."),
                "answer": "a", "shown": True, "transcript": tr2(l2_tr["ex"])},   # PDF p.4: option a bold-underlined
    "items": [mc_item("l2", i + 1, p, o, l2_key[i], transcript=tr2(l2_tr[i + 1])) for i, (p, o) in enumerate(l2_items)],
}

# ---- l3: interview MC. Transcript speakers are tagged inconsistently in the source (Dziennikarka:/Maestro: then Dz.:/M.:) -> normalised to full names
l3_tr = []
for l in tr_block("III"):
    s = l.strip()
    if s.startswith("Na podstawie") or re.fullmatch(r"\S+\.html", s):
        continue
    m = re.match(r"^(Dziennikarka|Maestro|Dz\.|M\.):\s*(.*)$", s)
    if m:
        l3_tr.append({"sp": {"Dz.": "Dziennikarka", "M.": "Maestro"}.get(m[1], m[1]), "t": m[2]})
    else:
        l3_tr[-1]["t"] += " " + s
assert [x["sp"] for x in l3_tr] == ["Dziennikarka", "Maestro"] * 4
l3_key = "b a c b c".split()
l3_items = [
    ("Prezes firmy Wedel", ["kupił czekoladową rzeźbę.", "chciał spotkać się z twórcą rzeźby.", "zaproponował Januszowi praktykę w firmie."]),
    ("Janusz Profus za granicą", ["zdobywał kwalifikacje.", "prowadził warsztaty cukiernicze.", "pracował w fabryce czekolady."]),
    ("Według Janusza Profusa maestro czekolady powinien", ["mieć własną cukiernię.", "uwielbiać smak czekolady.", "pracować z pasją."]),
    ("Dla Janusza Profusa problemem jest", ["brak zamówień.", "pośpiech.", "praca w nocy."]),
    ("Cukiernik wymyśla nowe produkty", ["sam w swojej pracowni.", "podczas wizyt w innych fabrykach.", "dzięki wyjazdom zagranicznym."]),
]
l3 = {
    "id": "l3", "number": "III", "type": "mc", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wywiadu z Januszem Profusem – maestro czekolady w firmie Wedel.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 5,
    "source": src_("https://haps.pl/Haps/7,167709,24589241,janusz-profus-maestro-czekolady-e-wedel-dla-cukiernika-czekolada.html"),
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_tr},
    "example": {"id": "l3.ex", "prompt": "Janusz Profus na początku swojej kariery pracował",
                "options": OPT("w zespole muzycznym.", "w biurze Wielkiej Orkiestry Świątecznej Pomocy.", "w cukierni."),
                "answer": "c", "shown": True},   # PDF p.5: option c bold-underlined
    "items": [mc_item("l3", i + 1, p, o, l3_key[i]) for i, (p, o) in enumerate(l3_items)],
}

# ---- l4: TAK/NIE on a continuous monologue (no speakers)
l4_par, curp = [], []
for l in tr_block("IV"):
    s = l.strip()
    if s.startswith("Na podstawie") or re.fullmatch(r"\S+-roku", s):
        continue
    curp.append(s)
l4_text = join(curp)
l4_par = re.split(r"(?<=\.) (?=W stylu prowansalskim nie ma)", l4_text)   # paragraph break at the line-initial sentence of the 2nd paragraph
assert len(l4_par) == 2
l4_stm = ["Cechą prowansalskich budynków jest naturalność.", "Meble w stylu prowansalskim powinny być nowoczesne.",
          "Na materiałach w stylu prowansalskim są wzory kwiatowe.", "Dziś styl prowansalski jest tak samo modny jak minimalistyczny.",
          "Domy w stylu prowansalskim najczęściej spotyka się w dużych miastach."]
l4_key = "TAK NIE TAK NIE NIE".split()
l4 = {
    "id": "l4", "number": "IV", "type": "tf", "grading": "auto",
    "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać nagrania dotyczącego stylu prowansalskiego w architekturze. Proszę zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 6,
    "source": src_("https://czasnawnetrze.pl/wnetrza/pomieszczenia/salon/25821-styl-prowansalski-we-wnetrzach-czy-francuska-moda-sprawdzi-sie-w-2021-roku"),
    "audio": task_audio(SID, "IV"),
    "transcript": {"text": "\n\n".join(l4_par)},
    "example": {"id": "l4.ex", "statement": "Styl prowansalski pochodzi z regionu Francji.", "answer": "TAK", "shown": True},   # PDF p.6: X in TAK
    "items": [{"id": f"l4.{i+1}", "number": i + 1, "statement": s, "answer": l4_key[i]} for i, s in enumerate(l4_stm)],
}

# ---- l5: persons (1-4) -> opinions (A-D), unordered set rows; row B has two boxes, no asterisk anywhere in this session (printed key: A 4 | B 2, 3 | C 1 | D 3)
l5_tr, cp = [], None
for l in tr_block("V"):
    s = l.strip()
    if re.match(r"^Osoba \d$", s):
        cp = {"sp": s, "t": ""}; l5_tr.append(cp)
    elif s.startswith("Na podstawie"):
        continue
    else:
        cp["t"] += " " + s
for p in l5_tr:
    m = re.match(r"^(.*)\s*\(([MK])\)$", p["t"].strip())
    p["t"] = m[1].strip(); p["sp"] = f"{p['sp']} ({m[2]})"
assert len(l5_tr) == 4
l5_st = [("A", "korzysta z aplikacji mobilnych, kiedy porusza się po mieście.", ["4"]),
         ("B", "może zaoszczędzić czas i szybciej dotrzeć do celu.", ["2", "3"]),
         ("C", "dzięki zmianie transportu oszczędza pieniądze.", ["1"]),
         ("D", "przejazd komunikacją miejską wykorzystuje na czytanie lub odpoczynek.", ["3"])]
l5 = {
    "id": "l5", "number": "V", "type": "matchMulti", "grading": "auto",
    "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać tekstów na temat podróżowania komunikacją miejską i dopasować osoby (1-4) do ich opinii (A-D). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
    "pointsFormula": "5 x 1 p.", "pointsPerSlot": 1, "maxPoints": 5, "plays": 2, "pdfPage": 7,
    "source": src_("http://infosa.pl/zalety-komunikacji-miejskiej"),
    "audio": task_audio(SID, "V"),   # per-person chunks omitted: 4 in-play pauses detected for 4 persons (expected 3), see structure.md §6
    "persons": [{"id": str(i), "label": f"osoba {i}"} for i in range(1, 5)],
    "example": {"id": "l5.ex", "statement": "kiedy wybiera transport publiczny, myśli o ekologii.", "answer": ["1"], "shown": True},
    "statements": [{"id": f"l5.{L}", "letter": L, "text": t, "slots": len(a), "answer": a, "anyOrder": True, "starred": False} for L, t, a in l5_st],
    "transcript": {"lines": l5_tr},
    "pdfNotes": ["Row B has two boxes and no asterisk in this session; stored as an unordered set like every multi-box row."],
}

listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [3, 7], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
r1_ex = {"id": "r1.ex",
         "passage": {"text": "Ruszamy z kolejnym cyklem rodzinnych treningów biegowych, które przygotowaliśmy dla państwa w ramach programu „Bliżej siebie – radość życia”. Będą one doskonałą okazją do rozpoczęcia przygody z bieganiem i włączenia w tę aktywność dzieci w różnym wieku.",
                     "source": src_("http://facebook.com")},
         "prompt": "Z tego tekstu wynika, że program",
         "options": OPT("jest przeznaczony tylko dla dzieci.", "odbywa się po raz pierwszy.", "angażuje całe rodziny."),
         "answer": "c", "shown": True}   # PDF p.9: option c bold-underlined
r1_data = [
    ("Festiwal Letnie Brzmienia to cykl ponad 100 koncertów na świeżym powietrzu w 13 miastach Polski. Na scenie pojawią się najpopularniejsi polscy artyści. Występy będą trwać całe wakacje i zakończą się dwudniowym koncertem finałowym.",
     "https://ec1lodz.pl/aktualnosci/letnie-brzmienia-2022",
     "Z tego tekstu wynika, że festiwal Letnie Brzmienia", ["to seria koncertów wakacyjnych.", "odbędzie się w stu polskich miastach.", "to imprezy w 13 dużych salach koncertowych."], "a"),
    ("Obecnie Europejczycy kupują w sieci częściej niż kiedykolwiek wcześniej. W grudniu około 80% mieszkańców Wielkiej Brytanii zrobiło zakupy online. Spędzamy też więcej czasu w aplikacjach zakupowych – korzystamy z nich o 45% dłużej niż w ubiegłym roku.",
     "https://businessinsider.com.pl/technologie/nowe-technologie/jak-zmienily-sie-zachowania-konsumentow-online-i-jak-wplywa-to-na-firmy/ejqyjy1",
     "Z tego tekstu wynika, że", ["internauci spędzają 45% wolnego czasu na zakupach online.", "w ostatnim roku 80% Europejczyków kupiło coś w internecie.", "aplikacje zakupowe są coraz popularniejsze."], "c"),
    ("Zapraszamy do odnowionego hotelu, który oferuje spokojny wypoczynek z dala od codziennych problemów. Posiadamy dwa baseny i luksusowe SPA, a nasze nowe wnętrza urządziliśmy w eleganckim stylu. 500 metrów od obiektu znajduje się prywatna plaża, do której dojeżdża darmowy bus hotelowy. Nasi goście nie płacą za parking.",
     "https://www.wakacje.pl/wczasy/riwiera-turecka/?firstminute",
     "Z tego tekstu wynika, że", ["z plaży mogą korzystać wszyscy.", "bus na plażę jest bezpłatny.", "hotel jest nowym budynkiem."], "b"),
    ("Andy Warhol namalował obraz „Shot Sage Blue Marilyn” w 1964 roku, dwa lata po śmierci aktorki Marylin Monroe. Po 58 latach nowojorski dom aukcyjny sprzedał dzieło w niewiele ponad 3 minuty – znany amerykański biznesmen wylicytował je za 195 milionów dolarów.",
     "https://www.national-geographic.pl/artykul/slynny-obraz-andyego-warhola-sprzedany-za-rekordowa-kwote-ile-kosztowal-220510120854",
     "Z tego tekstu wynika, że", ["klient kupił obraz w niecałe cztery minuty.", "obraz powstał za życia Marylin Monroe.", "zorganizowanie aukcji kosztowało 195 milionów dolarów."], "a"),
    ("W samym środku Warszawy, obok najwyższego budynku w stolicy, powstanie nowoczesne osiedle. W siedmiopiętrowych blokach będzie więcej niż 200 mieszkań różnej wielkości, które można kupować już od stycznia przyszłego roku. Na dachach domów zaprojektowano zielone tarasy.",
     "https://www.se.pl/warszawa/postawia-bloki-w-cieniu-kolosa-nowe-osiedle-powstanie-w-samym-centrum-warszawy-aa-StLe-hXEw-VKCj.html",
     "Z tego tekstu wynika, że nowe osiedle w Warszawie będzie", ["znajdować się poza centrum miasta.", "oferowało ponad 200 lokali.", "najwyższym osiedlem w stolicy."], "b"),
]
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 9, "pdfPages": [9, 10],
    "example": r1_ex,
    "items": [{"id": f"r1.{i+1}", "number": i + 1, "passage": {"text": t, "source": src_(u)}, "prompt": p, "options": OPT(*o), "answer": a}
              for i, (t, u, p, o, a) in enumerate(r1_data)],
    "pdfNotes": ["Item 5 option c ('najwyższym osiedlem w stolicy.') is printed without a verb, verbatim."],
}

# ---- r2: TAK/NIE on one text
r2_lines = after_points(sect(r"^II\. Proszę przeczytać tekst", r"Na podstawie: https://www\.centrumrowerowe"))
r2_title = r2_lines[0].strip()
r2_text = [re.sub(r"(\w-) (\w)", r"\1\2", p) for p in paras_by_indent(r2_lines[1:])]   # rejoin hyphen line-breaks (warmińsko-mazurskiego)
assert r2_title == "Green Velo – wschodni szlak rowerowy" and len(r2_text) == 4, (r2_title, r2_text)
r2_stm = ["Szlak rowerowy promuje turystykę we wschodnich regionach Polski.",
          "Jeśli zdecydyjemy się podróżować szlakiem Green Velo, zwiedzimy pięć najważniejszych zabytków Polski.",   # sic: "zdecydyjemy" is printed so in the booklet
          "Każdy turysta samodzielnie wybiera punkt początkowy i końcowy swojej wycieczki.",
          "Korzystanie ze szlaku Green Velo jest polecane tylko doświadczonym rowerzystom.",
          "Przejechanie od początku do końca szlaku rowerowego Green Velo zajmuje ponad miesiąc.",
          "W parkach na trasie Green Velo można zobaczyć zwierzęta dobrze znane w całej Polsce."]
r2_key = "TAK NIE TAK NIE NIE NIE".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 11,
    "title": r2_title,
    "source": src_("https://www.centrumrowerowe.pl/trasy-rowerowe/trasa-rowerowa-green-velo/"),
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "Green Velo to szlak rowerowy.", "answer": "TAK", "shown": True},   # PDF p.11: X in TAK
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
    "pdfNotes": ["Statement 2 prints „zdecydyjemy” (sic) in the booklet; kept verbatim."],
}

# ---- r3: fragments -> gaps
r3_lines = after_points(sect(r"^III\. Proszę przeczytać tekst i", r"Na podstawie: https://nano\.komputronik"))
r3_title = r3_lines[0].strip()
r3_text = "\n\n".join(paras_by_indent(r3_lines[1:]))
r3_text = re.sub(r"\[_{2}C_{2}\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\](\d)", r"{{\1}}", r3_text)
assert r3_title == "Aplikacja Booksy" and r3_text.count("{{") == 8, r3_text
r3_frag = {"A": "nawet w środku nocy możesz rezerwować wizytę", "B": "odwołać wizytę lub zmienić jej termin", "C": "innego rodzaju zabieg kosmetyczny",
           "D": "aby umówić się do wybranego specjalisty", "E": "w prosty i szybki sposób", "F": "na początku warto utworzyć konto w systemie",
           "G": "we współczesnym świecie czas to pieniądz", "H": "otrzymasz SMS z przypomnieniem"}
r3_key = "G E A H B F D".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–H).",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 12,
    "title": r3_title,
    "source": src_("https://nano.komputronik.pl/n/booksy-aplikacja-czy-warto/"),
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "C", "shown": True},
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs (two-column table typed from the page render; checked by --verbatim)
r4_par = {
    "A": "Rozmawiajmy ze znajomymi i rodziną o ekologii. Bądźmy cierpliwi i uświadamiajmy innych, nawet jeśli kolejny raz słyszymy: „ale co ja jeden mogę zmienić?”.",
    "B": "Nie musimy od razu przechodzić na wegetarianizm, ale starajmy się jeść mniej mięsa. Podczas jego produkcji zużywa się bardzo dużo wody.",
    "C": "Dbajmy o swoje najbliższe otoczenie i podnośmy śmieci, które leżą na ulicy, a świat stanie się piękniejszy! Co więcej – jeśli widzimy ludzi, którzy śmiecą, zwróćmy im uwagę.",
    "D": "Zrezygnujmy z jednorazowych kubków, sztućców czy reklamówek foliowych. Koniecznie miejmy przy sobie materiałowe torby na zakupy czy kubek termiczny na kawę.",
    "E": "Wybierzmy rower, ewentualnie komunikację miejską. Jeśli musimy jeździć samochodem, zdecydujmy się na wspólne przejazdy z kolegami z pracy. Tak będzie lepiej dla środowiska i naszego portfela!",
    "F": "Zepsuty telefon? Oddajmy go do serwisu, nie biegnijmy od razu po nowy model. To samo dotyczy np. mebli. Pamiętajmy, że ze starego krzesła można wyczarować cuda – wystarczy użyć narzędzi, farb i… fantazji!",
    "G": "Trudno w to uwierzyć, ale 40% ludzi nadal nie sortuje śmieci. Nie zapominajmy, że jest to jedna z najprostszych i najskuteczniejszych metod na poprawę stanu naszego środowiska.",
    "H": "Codziennie reklamy próbują nas przekonać, że powinniśmy mieć coś, czego tak naprawdę nie potrzebujemy! Pomyślmy dwa razy, zanim kupimy następny gadżet, którego nie będziemy używać.",
}
r4_titles = ["Naprawiajmy, nie wyrzucajmy", "Kupujmy mniej i mądrzej", "Dyskutujmy i edukujmy", "Wielorazowy – niech to będzie nasze nowe ulubione słowo",
             "Segregujmy odpady", "Sprzątajmy", "Zmieńmy myślenie o transporcie"]
r4_key = "F H A D G C E".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 13,
    "source": src_("https://gadulec.pl/zycie-zero-waste-codziennosc-podroz/"),
    "heading": "Ekologia w życiu codziennym",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Ograniczmy jedzenie mięsa", "answer": "B", "shown": True},
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
}

# ---- r5: inline choice, 10 x 0.5 (example 'kraju' bold-underlined on PDF p.14)
r5_lines = after_points(sect(r"^V\. Proszę – zgodnie z przykładem – podkreślić najlepszą", r"Na podstawie: https://polakwseulu"))
r5_title = r5_lines[0].strip()
r5_raw = "\n\n".join(paras_by_indent(r5_lines[1:]))
r5_pass, r5_bl = cloze_choice(r5_raw)
set_answers(r5_bl, "obchodzi się|uczestniczyć|podobnych|rozwiązanie|podróży|pustymi|zabraknąć|zakłada|zwyczajów|poprawę".split("|"), {"ex": "kraju"})
assert r5_title == "Chuseok – tradycja i nowe trendy"
r5 = {
    "id": "r5", "number": "V", "type": "clozeChoice", "grading": "auto",
    "instruction": "V. Proszę – zgodnie z przykładem – podkreślić najlepszą spośród możliwości podanych w nawiasach.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 14,
    "title": r5_title,
    "source": src_("https://polakwseulu.blogspot.com/2019/09/chuseok-koreanskie-swieto-dziekczynienia.html"),
    "passage": r5_pass, "blanks": r5_bl,
}

reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [9, 14], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
# the first match of 'POPRAWNOŚĆ GRAMATYCZNA' is the module cover; use the second (task pages)
idx = [i for i, l in enumerate(test) if l.strip() == "POPRAWNOŚĆ GRAMATYCZNA"]
gram = test[idx[1]:]
gram = gram[:next(i for i, l in enumerate(gram) if l.strip() == "PISANIE")]
G = lambda a, b: between(gram, a, b)

# ---- g1: declension (3 examples underlined on PDF p.16: najlepszy / człowieka / te)
g1_raw = paras_by_blank(after_points(G(r"^I\. Proszę – zgodnie z przykładami", r"^II\. Proszę")))
g1_pass, g1_bl = cloze_choice("\n\n".join(g1_raw))
set_answers(g1_bl, "towarzyskie najgorszym końca momentach to swojego obowiązków nim weterynarza wakacji".split(),
            {"ex1": "najlepszy", "ex2": "człowieka", "ex3": "te"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 16,
    "passage": g1_pass, "blanks": g1_bl,
}

# ---- g2: conjunctions from a box (example 'że'; distractor 'ani')
g2_lines = after_points(G(r"^II\. Proszę – zgodnie z przykładem", r"Na podstawie: Nowy wspaniały"))
g2_box = g2_lines[next(i for i, l in enumerate(g2_lines) if l.strip())].split()
assert g2_box == "że ani lub i ponieważ kiedy a".split(), g2_box
g2_raw = join(g2_lines[next(i for i, l in enumerate(g2_lines) if l.strip()) + 1:])
g2_raw = re.sub(r"że PRZYKŁAD", "{{ex}}", g2_raw)
g2_raw = re.sub(r"…+\.*(\d)", r"{{\1}}", g2_raw)
g2 = {
    "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
    "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 16,
    "source": src_("Nowy wspaniały świat, Twój Styl, maj 2022"),
    "wordBox": g2_box, "distractors": ["ani"],
    "passage": g2_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "że"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("kiedy lub i a ponieważ".split())],
}

# ---- g3: comparison (2 examples: zdrowego / bardziej efektywnie)
g3_raw = re.sub(r"\s+", " ", " ".join(after_points(G(r"^III\. Proszę – zgodnie z przykładami", r"Na podstawie: https://www\.janpol"))))
g3_pass, g3_bl = cloze_choice(g3_raw.strip())
set_answers(g3_bl, "dłuższy dobry mniej wyższe najważniejszym".split(), {"ex1": "zdrowego", "ex2": "bardziej efektywnie"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "source": src_("https://www.janpol.pl/porady/znaczenie-snu-dla-organizmu-czlowieka/"),
    "passage": g3_pass, "blanks": g3_bl,
}

# ---- g4: verb forms (present & future); 2 examples (mówią / spadną) are printed in the text before "(inf)PRZYKŁAD"
g4_raw = join(after_points(G(r"^IV\. Proszę – zgodnie z przykładami", r"Na podstawie: 10 sposobów")))
g4_raw = re.sub(r"mówią \(mówić\)PRZYKŁAD", "{{ex1}}", g4_raw)
g4_raw = re.sub(r"spadną \(spaść\)PRZYKŁAD", "{{ex2}}", g4_raw)
g4_given = {}
def _g4(m):
    g4_given[m[1]] = m[2]
    return "{{%s}}" % m[1]
g4_raw = re.sub(r"…+\.*(\d+)\s*\(([^()]*)\)\d+", lambda m: _g4(m), g4_raw)
assert sorted(g4_given, key=int) == [str(i) for i in range(1, 11)], g4_given
g4_ans = "zobaczy|powinniśmy|będziemy musieli|jeżdżę|wydaję|pakuję|palą|wezmę|kupię|wybierzemy się".split("|")
g4 = {
    "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
    "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przyszły).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17,
    "source": src_("10 sposobów na dobre prowadzenie, Twój Styl, maj 2022"),
    "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
    "passage": g4_raw,
    "blanks": [{"id": "ex1", "example": True, "given": "mówić", "answer": "mówią"}, {"id": "ex2", "example": True, "given": "spaść", "answer": "spadną"}]
              + [{"id": str(i), "given": g4_given[str(i)], "answer": g4_ans[i - 1], "accept": []} for i in range(1, 11)],
}

# ---- g5: question about the underlined part (underlines read from PDF p.18)
g5_q = [  # (sentence, underlined, stem, short answer, key, accept)
    ("Magda zapłaciła za zakupy kartą.", "kartą", "…………… Magda zapłaciła za zakupy?", "Kartą.", "Czym", ["Jak"]),
    ("Dyskutowali o książce Doroty Masłowskiej.", "Doroty Masłowskiej", "…………… książce dyskutowali?", "Doroty Masłowskiej.", "O czyjej", []),
    ("Marek spędził całe wakacje u swojego kuzyna.", "u swojego kuzyna", "…………… Marek spędził całe wakacje?", "U swojego kuzyna.", "U kogo", ["Gdzie"]),
    ("Kowalscy wrócili wczoraj znad morza.", "znad morza", "…………… Kowalscy wrócili wczoraj?", "Znad morza.", "Skąd", []),
    ("Kierowca jechał bardzo wolno po śliskiej drodze.", "bardzo wolno", "…………… jechał kierowca?", "Bardzo wolno.", "Jak", []),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Dowiedzieliśmy o jego przyjeździe tydzień temu.", "underlined": "tydzień temu",
                "stem": "…………… dowiedzieliście się o jego przyjeździe?", "shortAnswer": "Tydzień temu.", "answer": "Kiedy", "shown": True},
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": ac}
              for i, (s, u, st, sa, a, ac) in enumerate(g5_q)],
    "pdfNotes": ["Printed example shows the full question ('Kiedy dowiedzieliście się o jego przyjeździe?', Kiedy bold-underlined); stored as stem with the question word removed, like the items.",
                 "Official key lists alternatives for items 1 (Czym…? Jak…?) and 3 (U kogo…? Gdzie…?); first stored as answer, rest in accept.",
                 "Official key prints the question word with decoration (Czym…?); stored without it, match.stripChars ignores the decoration."],
}

# ---- g6: transformation
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 19,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Nie wiem, kim jest ten pan.", "hint": "znam", "answer": "Nie znam tego pana.", "shown": True},
    "items": [
        {"id": "g6.1", "number": 1, "source": "W lecie często noszę krótkie spodnie.", "hint": "chodzę", "answer": "W lecie często chodzę w krótkich spodniach.",
         "rubric": "odpowiedni przyimek 0,5 + 2 transformacje (2 x 0,25)", "rubricParts": [{"what": "odpowiedni przyimek", "points": 0.5}, {"what": "2 transformacje", "points": 0.5}]},
        {"id": "g6.2", "number": 2, "source": "Ludwik przepada za lodami czekoladowymi.", "hint": "uwielbia", "answer": "Ludwik uwielbia lody czekoladowe.",
         "rubric": "2 transformacje (2 x 0,5)", "rubricParts": [{"what": "2 transformacje", "points": 1}]},
        {"id": "g6.3", "number": 3, "source": "Krzysiek zawsze zapomina o moich urodzinach.", "hint": "pamięta", "answer": "Krzysiek nigdy nie pamięta o moich urodzinach.",
         "rubric": "zmiana przysłówka (0,5) + dodanie partykuły 0,5", "rubricParts": [{"what": "zmiana przysłówka", "points": 0.5}, {"what": "dodanie partykuły", "points": 0.5}]},
        {"id": "g6.4", "number": 4, "source": "Jakiego koloru jest twój samochód?", "hint": "kolor", "answer": "Jaki kolor ma twój samochód?",
         "rubric": "odpowiedni zaimek pytajny 0,5 + odpowiedni czasownik 0,5", "rubricParts": [{"what": "odpowiedni zaimek pytajny", "points": 0.5}, {"what": "odpowiedni czasownik", "points": 0.5}]},
        {"id": "g6.5", "number": 5, "source": "Niestety, nie było ich na tym koncercie.", "hint": "nie przyszli", "answer": "Niestety, nie przyszli na ten koncert.",
         "rubric": "2 transformacje (2 x 0,5)", "rubricParts": [{"what": "2 transformacje", "points": 1}]},
    ],
}

# ---- g7: aspect & mood (2 examples: chcielibyście / dołączcie), one paragraph
g7_raw = join(after_points(G(r"^VII\. Proszę – zgodnie z przykładami", r"Na podstawie: https://portal\.librus")))
g7_pass, g7_bl = cloze_choice(g7_raw)
set_answers(g7_bl, "spędzalibyśmy|znaleźlibyście|pojechali|niech nazbiera|wykąpcie się|interesowałyby|spotkałby|wolałby|zabierz|odwiedźcie".split("|"),
            {"ex1": "chcielibyście", "ex2": "dołączcie"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 20,
    "source": src_("https://portal.librus.pl/rodzina/artykuly/regiony-polskie-cz-1-polesie"),
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: prepositions, inline choice in this session (not a word box); example 'od'
g8_raw = join(after_points(G(r"^VIII\. Proszę – zgodnie z przykładem", r"Na podstawie: Eko na moją miarę")))
g8_pass, g8_bl = cloze_choice(g8_raw)
set_answers(g8_bl, "na w dla do z".split(), {"ex": "od"})
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – wybrać i podkreślić poprawny wyraz spośród podanych w nawiasach (przyimki).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 20,
    "source": src_("Eko na moją miarę, Twój Styl, maj 2022"),
    "passage": g8_pass, "blanks": g8_bl,
    "pdfNotes": ["In this session VIII is an inline choice (underline one of 3 prepositions), not a word-box task."],
}

grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [16, 20], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING
W = lambda a, b: " ".join(x.split()) 
sets = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "zaproszenie", "wordTarget": 30, "prompt": "Zdała Pani / Zdał Pan ważny egzamin i organizuje Pani/Pan kolację. Proszę zaprosić na nią polskich przyjaciół."},
        {"id": "b", "genre": "e-mail", "wordTarget": 170, "prompt": "Polska firma, w której Pani/Pan teraz pracuje, opłaciła Pani/Panu wyjazd na szkolenie. W e-mailu do dyrektora tej firmy proszę napisać relację z kursu."}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "pozdrowienia", "wordTarget": 25, "prompt": "Wyjechała Pani / wyjechał Pan na zimowy odpoczynek w góry. Proszę napisać pozdrowienia do kolegi/koleżanki z Polski."},
        {"id": "b", "genre": "opinia", "wordTarget": 175, "prompt": "Szkoła językowa, w której uczy się Pani/Pan polskiego, przygotowuje gazetkę dla studentów. Współpracuje Pani/Pan z redakcją gazetki. O ciekawych spektaklach, filmach, serialach można przeczytać w dziale: „Każdy powinien to obejrzeć!”. Proszę napisać opinię o filmie, który Panią/Pana zainteresował."}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 25, "prompt": "Szuka Pani/Pan nauczyciela języka polskiego. Proszę napisać ogłoszenie na stronę Naukapolskiego.pl"},
        {"id": "b", "genre": "opis", "wordTarget": 175, "prompt": "Pani/Pana nauczyciel języka polskiego ogłosił konkurs na najlepszy tekst pt. „Moje wymarzone miasto”. Bierze Pani/Pan udział w konkursie. Proszę opisać miasto, w którym chciałaby Pani / chciałby Pan mieszkać.", "title": "Moje wymarzone miasto"}]},
]
w = writing_task(sets, [22, 28])
w["pdfNotes"] = ["The printed footer of the writing prompt page says „czerwiec 2022” (copy typo in the booklet)."]
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [21, 28], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "listopad 2022", "examDates": "5-6.11.2022",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear; listening V has no per-person chunks (in-play pause count deviates).",
                       "Listening V has only 4 persons and 5 slots (row B has two boxes, no asterisk); rows are unordered sets.",
                       "Grammar VIII is an inline choice (not a word box); grammar II has a word box with one distractor ('ani')."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
