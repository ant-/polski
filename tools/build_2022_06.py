#!/usr/bin/env python3
"""Builds data/2022-06.js. Run: python3 tools/build_2022_06.py
Content = verbatim from sources/2022-06/test.txt (+ PDF page renders for underlined/bold PRZYKŁAD answers),
keys = official 'Klucz do zadań' in transcript.txt. Adapted from tools/build_2024_02.py (docs/conversion-recipe.md).
NOTE: does not touch data/manifest.js (shared file) - see the report."""
import json, sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2022-06"
test = clean_lines(read(SID, "test.txt"))
OPT = lambda *texts: [{"id": "abc"[i], "text": t} for i, t in enumerate(texts)]
src_ = lambda s: "Na podstawie: " + s


def mc_item(tid, n, prompt, opts, ans, **kw):
    return {"id": f"{tid}.{n}", "number": n, "prompt": prompt, "options": OPT(*opts), "answer": ans, **kw}


def sect(start_pat, end_pat):
    return between(test, start_pat, end_pat)


tr_lines = clean_lines(read(SID, "transcript.txt"))


def tr_block(roman):
    s = next(i for i, l in enumerate(tr_lines) if re.match(rf"^TRANSKRYPCJA {roman}\s*$", l, re.I))
    e = next(i for i in range(s + 1, len(tr_lines)) if re.match(r"^TRANSKRYPCJA [IV]+\s*$", tr_lines[i], re.I) or "ROZUMIENIE ZE SŁUCHU" in tr_lines[i])
    return [l for l in tr_lines[s + 1:e] if l.strip()]


def dialog(roman, names):
    """Two-speaker interview transcript with 'Name:' / 'Ab.:' tags -> [{sp,t}] (wrapped 'Na podstawie' URL lines dropped)."""
    out, skip = [], False
    for l in tr_block(roman):
        s = l.strip()
        if s.startswith("Na podstawie"):
            skip = True; continue
        if skip and " " not in s:
            continue
        m = re.match(r"^([A-ZŁŚŻ][\wąęóśłżźćń]*\.?):\s*(.*)$", s)
        if m:
            out.append({"sp": names[m[1]], "t": m[2]})
        else:
            out[-1]["t"] += " " + s
    return out


# =============================================================== LISTENING
# ---- l1: 14 single utterances; transcript lines look like "  3. text (K)"
l1_tr = {}
for l in tr_block("I"):
    m = re.match(r"^\s*(Przykład|\d+)[:.]\s*(.*?)\s*\(([MK])\)\s*$", l)
    assert m, l
    l1_tr["ex" if m[1] == "Przykład" else int(m[1])] = {"sp": m[3], "t": m[2]}
assert len(l1_tr) == 15
l1_key = "b a c b c a a b c c a b c a".split()
l1_items = [
    ("Ta wypowiedź jest typowa dla", ["kelnerki.", "nauczycielki.", "sprzątaczki."]),
    ("Ta wypowiedź oznacza", ["propozycję.", "przeprosiny.", "odmowę."]),
    ("Ta wypowiedź oznacza, że", ["można siadać wszędzie.", "wszystkie miejsca są zajęte.", "połowa miejsc musi być wolna."]),
    ("Ta wypowiedź jest typowa", ["w kawiarni.", "w piekarni.", "w sklepie mięsnym."]),
    ("Ta wypowiedź oznacza", ["złość.", "zadowolenie.", "smutek."]),
    ("Ta wypowiedź oznacza, że ta osoba", ["płaci za wszystkich.", "płaci tylko za siebie.", "inni płacą za niego."]),
    ("Ta wypowiedź oznacza, że sportowcy", ["zdobyli pierwsze miejsce.", "nie zdobyli medalu.", "przegrali zawody."]),
    ("Ta wypowiedź oznacza, że w firmie", ["jest świeże powietrze.", "miło się pracuje.", "są ładne kolory ścian."]),
    ("Ta wypowiedź jest typowa", ["w autobusie.", "w kinie.", "w teatrze."]),
    ("Ta wypowiedź oznacza, że", ["można się zaszczepić.", "nie trzeba się szczepić.", "trzeba przyjąć szczepionkę."]),
    ("Ta wypowiedź oznacza, że ubranie", ["pasuje.", "jest za duże.", "jest za małe."]),
    ("Ta wypowiedź oznacza, że", ["za dojazd płaci się dodatkowo.", "w ofercie jest wyżywienie.", "trzeba kupić osobno obiady."]),
    ("Ta wypowiedź jest typowa dla", ["lekarza.", "klienta.", "kelnera."]),
    ("Ta wypowiedź oznacza", ["złość.", "radość.", "zainteresowanie."]),
]
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
    "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 3,
    "audio": task_audio(SID, "I", ["l1.ex"] + [f"l1.{i}" for i in range(1, 15)]),
    "example": {"id": "l1.ex", "prompt": "Ta wypowiedź jest typowa", "options": OPT("w salonie urody.", "na siłowni.", "na komisariacie."),
                "answer": "b", "shown": True, "transcript": l1_tr["ex"]},   # PDF p.3: option b bold-underlined
    "items": [mc_item("l1", i + 1, p, o, l1_key[i], transcript=l1_tr[i + 1]) for i, (p, o) in enumerate(l1_items)],
}

# ---- l2: 8 dialogues, MC; transcript: "N." line then two "- text (X)" lines
l2_tr, cur = {}, None
for l in tr_block("II"):
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
l2_key = "b c c a c b b a".split()
l2_items = [
    ("Z tego dialogu dowiadujemy się, że", ["remont kosztował zgodnie z planem.", "jej zdaniem remont kosztował zbyt dużo.", "udało się zaoszczędzić trochę pieniędzy."]),
    ("Z tego dialogu wynika, że kobieta", ["jechała za wolno.", "jechała zgodnie z przepisami.", "nie zgadza się z policjantem."]),
    ("Z tego dialogu wynika, że ona", ["lubi miejski rytm życia.", "nie lubi korków.", "ceni ciszę i spokój."]),
    ("Z tego dialogu dowiadujemy się, że on proponuje", ["wakacje podobne do poprzednich.", "nowy sposób spędzenia urlopu.", "aktywne wakacje nad wodą."]),
    ("Z tego dialogu wynika, że kobieta", ["zdała egzamin.", "pierwszy raz podeszła do egzaminu.", "ponownie zdawała egzamin."]),
    ("Z tego dialogu dowiadujemy się, że", ["wizyta jest możliwa pod koniec tygodnia.", "wolne terminy są w przyszłym tygodniu.", "ona planuje wizytę w myjni."]),
    ("Z tego dialogu dowiadujemy się, że", ["on narzeka na transport publiczny.", "ona radzi mu dojazd transportem publicznym.", "tramwaj jest tańszy niż samochód."]),
    ("Z tego dialogu wynika, że", ["oni mieli odebrać ciocię ze szpitala.", "ona przypomina mu o wizycie u cioci.", "oni powinni zawieźć ciocię do lekarza."]),
]
l2 = {
    "id": "l2", "number": "II", "type": "mc", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać dialogów i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "8 x 1 p.", "pointsPerItem": 1, "maxPoints": 8, "plays": 2, "pdfPage": 4, "pdfPages": [4, 5],
    "audio": task_audio(SID, "II", ["l2.ex"] + [f"l2.{i}" for i in range(1, 9)]),
    "example": {"id": "l2.ex", "prompt": "Z tego dialogu dowiadujemy się, że",
                "options": OPT("ona zaczęła nową pracę.", "ona chce zrezygnować z pracy.", "on pyta o jej plany zawodowe."),
                "answer": "c", "shown": True, "transcript": tr2(l2_tr["ex"])},   # PDF p.4: option c bold-underlined
    "items": [mc_item("l2", i + 1, p, o, l2_key[i], transcript=tr2(l2_tr[i + 1])) for i, (p, o) in enumerate(l2_items)],
}

# ---- l3: TAK/NIE on an interview (Dziennikarz / Ekspert; tags in the source: 'Dziennikarz:'/'Ekspert:' then 'Dz.:'/'E.:')
l3_tr = dialog("III", {"Dziennikarz": "Dziennikarz", "Ekspert": "Ekspert", "Dz.": "Dziennikarz", "E.": "Ekspert"})
assert [x["sp"] for x in l3_tr] == ["Dziennikarz", "Ekspert", "Dziennikarz", "Ekspert"]
l3_stm = ["Rodzice sami deklarują, że dzieci mogą uczyć się w domu.", "Egzaminy klasyfikacyjne nie obejmują plastyki czy muzyki.",
          "Podczas edukacji domowej warto wybrać najbliższą szkołę.", "Rodzice nie płacą za nauczanie domowe.", "Rodzice mogą liczyć na pomoc nauczycieli."]
l3_key = "TAK TAK NIE TAK NIE".split()
l3 = {
    "id": "l3", "number": "III", "type": "tf", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę posłuchać rozmowy na temat edukacji domowej i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 5,
    "source": src_("https://www.polskieradio.pl/7/163/Artykul/2674049,Homeschooling-Czy-edukacja-domowa-jest-dla-kazdego"),
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_tr},
    "example": {"id": "l3.ex", "statement": "Rozpoczęcie edukacji domowej jest procesem skomplikowanym.", "answer": "NIE", "shown": True},   # PDF p.5: X in NIE
    "items": [{"id": f"l3.{i+1}", "number": i + 1, "statement": s, "answer": l3_key[i]} for i, s in enumerate(l3_stm)],
}

# ---- l4: interview MC
l4_tr = dialog("IV", {"Dziennikarka": "Dziennikarka", "Lekarka": "Lekarka", "Dz.": "Dziennikarka", "L.": "Lekarka"})
assert [x["sp"] for x in l4_tr] == ["Dziennikarka", "Lekarka", "Dziennikarka", "Lekarka", "Dziennikarka", "Lekarka"]
l4_key = "a b b a c".split()
l4_items = [
    ("Kiedy dziecko ma około 40 stopni, należy", ["podać środek na obniżenie temperatury.", "natychmiast zrobić zimny okład.", "od razu zastosować obie metody."]),
    ("Najlepiej stosować okłady", ["z lodu.", "z chłodnej wody.", "na brzuch."]),
    ("Lekarka uważa, że pacjenci", ["najlepiej leczą się sami.", "mają swoje preferencje.", "rzadko mówią, co im dolega."]),
    ("Według lekarki chłodne napoje", ["mogą pomagać małym pacjentom.", "nie powinny być podawane chorym dzieciom.", "są podawane chorym dzieciom przez rodziców."]),
    ("Dla dziecka z wysoką gorączką temperatura kąpieli chłodzącej powinna", ["wynosić maksymalnie 30 stopni.", "wynosić tyle stopni, ile temperatura ciała.", "być niewiele niższa niż temperatura ciała."]),
]
l4 = {
    "id": "l4", "number": "IV", "type": "mc", "grading": "auto",
    "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wywiadu z lekarką na temat domowych sposobów leczenia i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 6,
    "source": src_("https://radioklinika.pl/zdrowotne-rady-naszych-dziadkow-i-babc-na-wzmocnienie-organizmu-w-chorobie/"),
    "audio": task_audio(SID, "IV"),
    "transcript": {"lines": l4_tr},
    "example": {"id": "l4.ex", "prompt": "Zdaniem lekarki zimny okład na zwalczenie temperatury",
                "options": OPT("to dobry pomysł w każdej sytuacji.", "należy umieć stosować.", "to raczej nieskuteczna metoda."),
                "answer": "b", "shown": True},   # PDF p.6: option b bold-underlined
    "items": [mc_item("l4", i + 1, p, o, l4_key[i]) for i, (p, o) in enumerate(l4_items)],
}

# ---- l5: match column I (milk kinds) -> column II (A-F), all six letters used (example E)
l5_raw = join([l.strip() for l in tr_block("V")])
l5_opts = {"A": "nie jest dobre dla osób na diecie.", "B": "jest odpowiednie dla alergików.", "C": "dobrze pasuje do różnych rodzajów kaw.",
           "D": "jest chętnie kupowane przez Polaków.", "E": "może powodować alergię.", "F": "można zrobić samodzielnie."}
l5_titles = ["Mleko kozie", "Mleko roślinne", "Mleko ryżowe", "Mleko migdałowe", "Mleko kokosowe"]
l5_key = "D C B F A".split()
l5 = {
    "id": "l5", "number": "V", "type": "match", "grading": "auto",
    "instruction": "V. Proszę uważnie słuchać nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać tekstu na temat różnych rodzajów mlek oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 7,
    "audio": task_audio(SID, "V"),
    "options": [{"id": k, "text": v} for k, v in l5_opts.items()],
    "transcript": {"text": l5_raw},
    "example": {"id": "l5.ex", "prompt": "Mleko krowie", "answer": "E", "shown": True},   # PDF p.7: E shaded
    "items": [{"id": f"l5.{i+1}", "number": i + 1, "prompt": t, "answer": l5_key[i]} for i, t in enumerate(l5_titles)],
}

listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [3, 7], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
r1_ex = {"id": "r1.ex",
         "passage": {"text": "„Dziękuję najlepszym kibicom na świecie, którzy zawsze ze mną byli” – napisał na Facebooku polski biegacz, który w tym roku zakończył karierę sportową. Następnie podziękował za pomoc swoim bliskim oraz trenerom, a za wsparcie finansowe sponsorom.",
                     "source": src_("https://www.tvp.info/58496717/adam-kszczot-zakonczyl-kariere")},
         "prompt": "Z tego tekstu wynika, że",
         "options": OPT("biegacz osobiście podziękował wszystkim sportowcom.", "sportowiec najpierw podziękował osobom, z którymi pracował.", "sportowiec podziękował osobom, które finansowały jego udział w zawodach."),
         "answer": "c", "shown": True}   # PDF p.9: option c bold-underlined
r1_data = [
    ("„Farma” będzie nowym programem telewizyjnym. Wezmą w nim udział osoby, które nigdy nie mieszkały i nie pracowały na wsi. Spędzą razem sześć tygodni i w tym czasie będą musiały wykonać różne zadania, a wygra ten uczestnik, który najbardziej spodoba się widzom.",
     "https://www.polsat.pl/news/2022-01-05/farma-poznaj-zasady-nowego-reality-show-polsatu/",
     ["uczestnikami programu „Farma” będą rolnicy.", "o wygranej będą decydować osoby, które oglądają program.", "program będzie trwał ponad dwa miesiące."], "b"),
    ("Polski film Sukienka, którego reżyserem jest Tadeusz Łysiak, miał szansę na Oscara. Jednak w tym roku tę prestiżową nagrodę otrzymał inny film. Głównym tematem polskiej produkcji jest opowieść o pracownicy hotelu, która z powodu niskiego wzrostu nie może znaleźć partnera.",
     "https://www.tvp.info/58396994/oscary-2022-polski-film-nominowany-to-sukienka-tadeusza-lysiaka-nominowany-takze-janusz-kaminski-west-side-story",
     ["reżyser filmu dostał Oscara.", "film Sukienka otrzymał wiele nagród.", "bohaterka filmu nie jest wysoka."], "c"),
    ("Naukowcy z uniwersytetu w Bergen udowodnili, że dorosła osoba może wydłużyć swoje życie o ponad 10 lat. Musi jedynie zmienić dietę na taką, która zawiera więcej roślin i orzechów, a mniej mięsa. Wyniki badań zostały opublikowane w czasopiśmie akademickim „PLOS One\".",
     "https://tvn24.pl/tvnmeteo/ciekawostki/dieta-wiecej-orzechow-mniej-czerwonego-miesa-zmiana-diety-moze-wydluzyc-nasze-zycie-o-ponad-dekade-5595549",
     ["dzięki diecie można wydłużyć życie o niecałe dziesięć lat.", "rezultaty badań na temat diety zostały opisane w prasie.", "w diecie dorosłego człowieka nie powinno być posiłków z mięsem."], "b"),
    ("Słowacka telewizja właśnie poinformowała, że latający samochód AirCar przeszedł wszystkie testy i otrzymał certyfikat bezpieczeństwa. Maszyna potrafi zmieniać się z samochodu w samolot, a zajmuje jej to dwie minuty i piętnaście sekund. Do latania AirCarem trzeba mieć licencję pilota.",
     "https://www.tvp.info/58153821/slowacki-latajacy-samochod-przeszedl-testy-i-otrzymal-certyfikat",
     ["AirCarem może latać każda osoba.", "AirCar zamienia się w samolot w kilka sekund.", "informacje o AirCarze przekazały media."], "c"),
    ("„Naprawdę nie rozumiem, jak można do gry dodać język polski, a zapomnieć o włoskim?” – to tylko jeden z komentarzy, który w internecie napisali gracze z Włoch. W grze „Dying Light 2” jest siedemnaście języków, w tym np. czeski czy arabski, ale brakuje włoskiego.",
     "https://www.tvp.info/58424065/techland-producent-gry-dying-light-2-nie-umiescil-wloskiej-wersji-jezykowej-wlosi-ostro-krytykuja-polska-firme",
     ["niedługo w grze będzie można wybrać język polski.", "w grze już teraz można wybrać język polski.", "gracze przetłumaczyli grę na język czeski i arabski."], "b"),
    ("Zaplanowana na poniedziałek 20 września konferencja pod tytułem „Komunikacja międzynarodowa” obędzie się w piątek 24 września. Za zmianę bardzo przepraszamy. Lokalizacja konferencji pozostaje bez zmian, czyli spotykamy się w głównej auli, która znajduje się na pierwszym piętrze biurowca naszej firmy.",
     None,
     ["zmienił się termin konferencji.", "planowana jest inna lokalizacja konferencji.", "konferencja ma zmieniony temat."], "a"),
]
r1_items = []
for i, (t, u, o, a) in enumerate(r1_data):
    pas = {"text": t}
    if u:
        pas["source"] = src_(u)
    r1_items.append({"id": f"r1.{i+1}", "number": i + 1, "passage": pas, "prompt": "Z tego tekstu wynika, że", "options": OPT(*o), "answer": a})
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 9, "pdfPages": [9, 10],
    "example": r1_ex, "items": r1_items,
    "pdfNotes": ["Item 6 (a notice) has no 'Na podstawie' source line.",
                 "Item 3 passage ends with „PLOS One\" - the closing quote is a straight quote in the booklet, kept verbatim."],
}

# ---- r2: TAK/NIE on one text (no title, source printed as bare URL)
r2_lines = after_points(sect(r"^II\. Proszę przeczytać tekst", r"https://www\.polskieradio\.pl/13/53"))
r2_text = [re.sub(r"(\w-) (\w)", r"\1\2", p) for p in paras_by_indent(r2_lines)]
assert len(r2_text) == 3, r2_text
r2_stm = ["Polscy widzowie mogli obejrzeć pierwszy raz ten film w latach 90. XX wieku.", "Podczas pierwszego Polconu dużo rozmawiano o Gwiezdnych wojnach.",
          "Dzięki pierwszym polskim fanom Gwiezdnych wojen film był sprzedawany na kasetach VHS.", "Lokalne fankluby zakładały osoby, które poznały się przez internet.",
          "Władze Grabowca zaproponowały, aby jedną z ulic nazwać imieniem Obi-Wana Kenobiego.", "Część fanów Gwiezdnych wojen przyjeżdża do Grabowca z kostiumami postaci z filmu."]
r2_key = "NIE TAK NIE TAK NIE TAK".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 11,
    "source": "https://www.polskieradio.pl/13/53/Artykul/1769097,Gwiezdne-wojny-w-Polsce",
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "Gwiezdne wojny pokazano w polskich kinach w dniu światowej premiery filmu.", "answer": "NIE", "shown": True},   # PDF p.11: X in NIE
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
    "pdfNotes": ["The source line is printed as a bare URL without the 'Na podstawie:' prefix; stored as printed."],
}

# ---- r3: fragments -> gaps
r3_lines = after_points(sect(r"^III\. Proszę przeczytać tekst i", r"Na podstawie: https://blog\.beactivetv"))
r3_text = "\n\n".join(paras_by_indent(r3_lines))
r3_text = re.sub(r"\[_{2}C_{2}\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\](\d)", r"{{\1}}", r3_text)
assert r3_text.count("{{") == 8, r3_text
r3_frag = {"A": "i zapisać w tradycyjnym lub elektronicznym kalendarzu", "B": "szybko ci się znudzą i przestaniesz je lubić", "C": "Co ćwiczyć i jak znaleźć czas na trening",
           "D": "dlatego lepiej zacznij od zestawów ćwiczeń", "E": "staraj się ćwiczyć regularnie, najlepiej co drugi dzień", "F": "pomogą wzmocnić całe ciało",
           "G": "jak inne obowiązki i aktywności", "H": "to nie oczekuj spektakularnych efektów"}
r3_key = "G A E H B D F".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–H).",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 12,
    "source": src_("https://blog.beactivetv.pl/jak-zaczac-trenowac/"),
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "C", "shown": True},
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs (7 paragraphs A-G for 6 titles + example; all used)
r4_par = {
    "A": "Ile musimy miesięcznie zapłacić za prąd, a ile możemy wydać na jedzenie, paliwo czy ubrania? Rodzice zwykle nie informują o tym dzieci, bo uważają, że to są sprawy dorosłych. To błąd, już małym dzieciom można tłumaczyć, jak wygląda budżet rodzinny.",
    "B": "Jesteś wzorem dla swojego dziecka i twoja postawa pomoże lub przeszkodzi mu w osiągnięciu celu. Jeśli to konieczne, powinieneś zmienić swoje zwyczaje związane z wydawaniem pieniędzy.",
    "C": "Warto organizować raz w miesiącu rodzinne rozmowy, podczas których dziecko dowie się, jaki mamy budżet i jakie rachunki, raty kredytu oraz faktury do zapłacenia.",
    "D": "Rysujemy tabelę i wpisujemy obowiązki oraz kwoty, np. wyrzucanie śmieci – 3 złote. Decydujemy, ile razy w miesiącu dziecko będzie mogło w ten sposób zarobić. Na końcu obliczamy kwotę, którą dziecko może otrzymać po wykonaniu wszystkich zaplanowanych zadań.",
    "E": "Część zaoszczędzonych pieniędzy warto przekazać na cel charytatywny. To bardzo ważna lekcja. Niech dziecko samo wybierze, czy kupi karmę dla zwierząt ze schroniska, czy pomoże osobie, która tego potrzebuje.",
    "F": "Wybierz razem z dzieckiem naczynia, np. słoiki, do których będzie zbierać pieniądze. Warto je podpisać, np. każdy słoik to inny cel: bilet na koncert idola – 150 zł, gra komputerowa – 85 zł, kieszonkowe na wakacje – 300 zł.",
    "G": "Młodsze dzieci, które jeszcze nie potrafią liczyć, za dobrze wykonane czynności można nagradzać kuponami. Takim kuponem dzieci mogą „zapłacić” za obejrzenie bajki, zabawkę lub inną dodatkową przyjemność.",
}
r4_titles = ["Miesięczne wynagrodzenie", "Nie tylko pieniądze za pracę", "Naucz, jak się dzielić", "Zacznij od pracy nad sobą", "Rozmawiaj o wydatkach", "Naucz oszczędzania na przyjemności"]
r4_key = "D G E B A F".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    # the booklet prints stray combining ogonek/acute marks in this instruction (Proszę̨, połączyć́, wpisać́); normalised
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 13,
    "source": src_("https://zuch.media/12-praktycznych-porad-jak-nauczyc-dzieci-oszczedzac-i-gospodarowac-pieniedzmi-czesc-1/"),
    "heading": "Jak nauczyć dzieci oszczędzania?",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Domowe wydatki", "answer": "C", "shown": True},
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
    "pdfNotes": ["Instruction is printed with stray combining marks (Proszę̨, połączyć́, wpisać́) in the booklet; stored with normal letters."],
}

# ---- r5: word-box variant (clozeBox): 11 box words = 10 answers + the example word 'film'; no distractor
r5_lines = after_points(sect(r"^V\. Proszę – zgodnie z przykładem – uzupełnić tekst wyrazami z ramki", r"Na podstawie: https://www\.koty\.pl"))
nz = [l for l in r5_lines if l.strip()]
r5_box = nz[0].split() + nz[1].split()
assert len(r5_box) == 11, r5_box
r5_title = nz[2].strip()
body = r5_lines[r5_lines.index(nz[2]) + 1:]
r5_raw = "\n\n".join(paras_by_indent(body))
r5_raw = re.sub(r"film PRZYKŁAD", "{{ex}}", r5_raw)
r5_raw = re.sub(r"[.…]{4,}\s*(\d+)", r"{{\1}}", r5_raw)
assert r5_title == "Mechaniczny kelner" and r5_raw.count("{{") == 11, r5_raw
r5_key = "robot potrafi wie suficie obiekt drogi zajmie przyszłości kelnerom szklanki".split()
r5 = {
    "id": "r5", "number": "V", "type": "clozeBox", "grading": "auto",
    "instruction": "V. Proszę – zgodnie z przykładem – uzupełnić tekst wyrazami z ramki.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 14,
    "title": r5_title,
    "source": src_("https://www.koty.pl/kot-robot-obsluguje-gosci-restauracji/"),
    "wordBox": r5_box, "distractors": [],
    "passage": r5_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "film"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate(r5_key)],
    "pdfNotes": ["Word-box variant of reading V: box = 10 answers + the example word (film), no unneeded word. Gaps are numbered 1-10 (dotted)."],
}

reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [9, 14], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
idx = [i for i, l in enumerate(test) if l.strip() == "POPRAWNOŚĆ GRAMATYCZNA"]
gram = test[idx[1]:]
gram = gram[:next(i for i, l in enumerate(gram) if l.strip() == "PISANIE")]
G = lambda a, b: between(gram, a, b)

# ---- g1 (3 examples underlined on PDF p.16: najstarszy / on / tradycję)
g1_raw = paras_by_blank(after_points(G(r"^I\. Proszę – zgodnie z przykładami", r"Na podstawie: https://www\.publio")))
g1_pass, g1_bl = cloze_choice("\n\n".join(g1_raw))
set_answers(g1_bl, "nowoczesnością|tym|najnowszym|ilustracji|które|miesięczniku|znani|badacze|świata|ciekawe".split("|"),
            {"ex1": "najstarszy", "ex2": "on", "ex3": "tradycję"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 16,
    "source": src_("https://www.publio.pl/wiedza-i-zycie,p661692.html"),
    "passage": g1_pass, "blanks": g1_bl,
}

# ---- g2: conjunctions from a box (example 'bo'; distractor 'czyli')
g2_lines = after_points(G(r"^II\. Proszę – zgodnie z przykładem", r"Na podstawie: Wegetariański"))
nzl = [l for l in g2_lines if l.strip()]
g2_box = nzl[0].split()
assert g2_box == "czyli żeby dlatego bo że i ale".split(), g2_box
g2_raw = join(nzl[1:])
g2_raw = re.sub(r"bo PRZYKŁAD", "{{ex}}", g2_raw)
g2_raw = re.sub(r"…+\.*(\d)", r"{{\1}}", g2_raw)
g2 = {
    "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
    "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 16,
    "source": src_("Wegetariański raj, Twój Styl, numer 3, marzec 2022"),
    "wordBox": g2_box, "distractors": ["czyli"],
    "passage": g2_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "bo"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("żeby i ale dlatego że".split())],
}

# ---- g3 (examples: sławnego / lepiej)
g3_raw = re.sub(r"\s+", " ", " ".join(after_points(G(r"^III\. Proszę – zgodnie z przykładami", r"Na podstawie: https://wyborcza")))).strip()
g3_pass, g3_bl = cloze_choice(g3_raw)
set_answers(g3_bl, "częstsze wysokie później najwięcej mniejsza".split(), {"ex1": "sławnego", "ex2": "lepiej"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "source": src_("https://wyborcza.pl/7,177851,28072976,tylko-jedna-fala-upalow-spowodowala-smierc-okolo-80-tys-europejczykow.html"),
    "passage": g3_pass, "blanks": g3_bl,
}

# ---- g4: verb forms (present & PAST in this session); examples wspomina / była are printed in the text before "(inf)PRZYKŁAD"
g4_lines = after_points(G(r"^IV\. Proszę – zgodnie z przykładami", r"Na podstawie: Dobrze znów być razem"))
g4_raw = "\n\n".join(paras_by_indent(g4_lines))
g4_raw = re.sub(r"wspomina \(wspominać\)PRZYKŁAD", "{{ex1}}", g4_raw)
g4_raw = re.sub(r"była \(być\)PRZYKŁAD", "{{ex2}}", g4_raw)
g4_given = {}
def _g4(m):
    g4_given[m[1]] = m[2]
    return "{{%s}}" % m[1]
g4_raw = re.sub(r"…+\.*(\d+)\s*\(([^()]*)\)\d+", _g4, g4_raw)
assert sorted(g4_given, key=int) == [str(i) for i in range(1, 11)], g4_given
g4_ans = "uczyli|opiekowała się|dawał|pamięta|chciała|wyszła|tęsknimy|rozglądamy się|podoba|marzę".split("|")
g4 = {
    "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
    "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przeszły).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17, "pdfPages": [17, 18],
    "source": src_("Dobrze znów być razem, Twój Styl, numer 3, marzec 2022"),
    "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
    "passage": g4_raw,
    "blanks": [{"id": "ex1", "example": True, "given": "wspominać", "answer": "wspomina"}, {"id": "ex2", "example": True, "given": "być", "answer": "była"}]
              + [{"id": str(i), "given": g4_given[str(i)], "answer": g4_ans[i - 1], "accept": []} for i in range(1, 11)],
}

# ---- g5 (underlines read from PDF p.18)
g5_q = [  # (sentence, underlined, stem, short answer, key, accept)
    ("Michał smaruje chleb dżemem.", "dżemem", "…………… Michał smaruje chleb?", "Dżemem.", "Czym", []),
    ("Weronika zapytała starszego pana o drogę.", "o drogę", "…………… Weronika zapytała starszego pana?", "O drogę.", "O co", []),
    ("Marcin codziennie używa laptopa.", "codziennie", "…………… Marcin używa laptopa?", "Codziennie.", "Jak często", []),
    ("Karol zabrał dzieci siostry do muzeum.", "siostry", "…………… dzieci Karol zabrał do muzeum?", "Siostry.", "Czyje", []),
    ("Monika mieszkała w Australii dwa lata.", "dwa lata", "…………… Monika mieszkała w Australii?", "Dwa lata.", "Jak długo", ["Ile czasu", "Ile lat"]),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Teresa obejrzała program o podróżach.", "underlined": "o podróżach",
                "stem": "…………… Teresa obejrzała program?", "shortAnswer": "O podróżach.", "answer": "O czym", "shown": True},
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": ac}
              for i, (s, u, st, sa, a, ac) in enumerate(g5_q)],
    "pdfNotes": ["Printed example shows the full question ('O czym Teresa obejrzała program?', O czym bold-underlined); stored as stem with the question words removed, like the items.",
                 "Official key lists three alternatives for item 5 (Jak długo…? Ile czasu…? Ile lat……?); first stored as answer, rest in accept.",
                 "Official key prints the question word with decoration (Czym…?); stored without it, match.stripChars ignores the decoration."],
}

# ---- g6
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 19,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Michalina dała jeść swoim kotom.", "hint": "nakarmiła", "answer": "Michalina nakarmiła swoje koty.", "shown": True},
    "items": [
        {"id": "g6.1", "number": 1, "source": "W lipcu planujemy wyjazd do Hiszpanii.", "hint": "zamiar", "answer": "W lipcu mamy zamiar wyjechać do Hiszpanii.",
         "rubric": "odpowiedni czasownik 0,5 + transformacja rzeczownika na bezokolicznik 0,5",
         "rubricParts": [{"what": "odpowiedni czasownik", "points": 0.5}, {"what": "transformacja rzeczownika na bezokolicznik", "points": 0.5}]},
        {"id": "g6.2", "number": 2, "source": "Mojej koleżance ładnie jest w kolorze zielonym.", "hint": "wygląda", "answer": "Moja koleżanka ładnie wygląda w kolorze zielonym.",
         "rubric": "2 transformacje (2 x 0,5)", "rubricParts": [{"what": "2 transformacje", "points": 1}]},
        {"id": "g6.3", "number": 3, "source": "Dorota przeprowadziła się do Krakowa już rok temu.", "hint": "mieszka", "answer": "Dorota mieszka w Krakowie już rok.",
         "accept": ["Dorota mieszka w Krakowie od roku."],
         "rubric": "2 transformacje (2 x 0,25) + brak transformacji lub transformacja 0,25 + usunięcie przyimka temu 0,25",
         "rubricParts": [{"what": "2 transformacje", "points": 0.5}, {"what": "brak transformacji lub transformacja", "points": 0.25}, {"what": "usunięcie przyimka temu", "points": 0.25}]},
        {"id": "g6.4", "number": 4, "source": "W jakim wieku jest ich córka?", "hint": "lat", "answer": "Ile lat ma ich córka?",
         "rubric": "odpowiedni zaimek pytajny 0,5 + odpowiedni czasownik 0,5",
         "rubricParts": [{"what": "odpowiedni zaimek pytajny", "points": 0.5}, {"what": "odpowiedni czasownik", "points": 0.5}]},
        {"id": "g6.5", "number": 5, "source": "Wczoraj był słoneczny, ale chłodny dzień.", "hint": "było", "answer": "Wczoraj było słonecznie, ale chłodno.",
         "rubric": "2 transformacje (2 x 0,5)", "rubricParts": [{"what": "2 transformacje", "points": 1}]},
    ],
    "pdfNotes": ["Key item 3 prints the model as 'Dorota mieszka w Krakowie już rok / od roku.'; stored as first variant + accept (the printed 'od roku' variant)."],
}

# ---- g7 (examples: pragnęliby / Spełniajcie)
g7_raw = join(after_points(G(r"^VII\. Proszę – zgodnie z przykładami", r"Na podstawie: https://katalogmarzen")))
g7_pass, g7_bl = cloze_choice(g7_raw)
set_answers(g7_bl, "mówcie|umówili się|byłoby|otrzymałyby|woleliby|wybierz|martw się|ucieszyłby się|Spróbujmy|poczuje się".split("|"),
            {"ex1": "pragnęliby", "ex2": "Spełniajcie"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 20,
    "source": src_("https://katalogmarzen.pl/pl/artykul/czy-polacy-maja-marzenia"),
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: prepositions from a box (example 'na'; distractor 'między')
g8_lines = [l for l in after_points(G(r"^VIII\. Proszę – zgodnie z przykładem", r"Na podstawie: https://www\.wysokieobcasy")) if l.strip()]
g8_box = g8_lines[0].split()
assert g8_box == "dla w na przed z do między".split(), g8_box
g8_raw = join(g8_lines[1:])
g8_raw = re.sub(r"na PRZYKŁAD", "{{ex}}", g8_raw)
g8_raw = re.sub(r"[.…]{3,}\s*(\d+)", r"{{\1}}", g8_raw)
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeBox", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (przyimki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 20,
    "source": src_("https://www.wysokieobcasy.pl/wysokie-obcasy/7,168673,28065746,facynacje-z-drugiej-reki-aleksandra-koperda-w-swojej-ksiazce.html"),
    "wordBox": g8_box, "distractors": ["między"],
    "passage": g8_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "na"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("w z do dla przed".split())],
}

grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [16, 20], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING
sets = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "zaproszenie", "wordTarget": 30, "prompt": "Jest Pani właścicielką / Jest Pan właścicielem klubu „Zabawa dla Całej Rodziny” i z okazji Dnia Dziecka organizuje Pani/Pan piknik. Proszę napisać zaproszenie, które zamieści Pani/Pan przed wejściem do klubu."},
        {"id": "b", "genre": "list", "wordTarget": 170, "prompt": "Zakończyła Pani / Zakończył Pan remont mieszkania. Proszę napisać list do przyjaciółki/przyjaciela z Polski i opisać, jak teraz wyglądają pokoje, kuchnia i łazienka."}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "życzenia", "wordTarget": 20, "prompt": "Pani/Pana polski kolega żeni się w następną sobotę. Proszę napisać życzenia dla młodej pary."},
        {"id": "b", "genre": "relacja", "wordTarget": 180, "prompt": "Polskie czasopismo „Poznajemy Świat” czeka na teksty od czytelników o ich najciekawszych wyjazdach. Proszę napisać relację ze szczególnie interesującej podróży."}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 25, "prompt": "Chce Pani/Pan sprzedać lodówkę. Proszę napisać ogłoszenie, które powiesi Pani/Pan na tablicy z ofertami w supermarkecie."},
        {"id": "b", "genre": "charakterystyka", "wordTarget": 175, "prompt": "Internetowy portal edukacyjny ogłosił konkurs na najlepszą nauczycielkę / najlepszego nauczyciela roku. Zgłasza Pani/Pan osobę, którą Pani/Pan lubi i szanuje. Proszę napisać jej charakterystykę i uzasadnić, dlaczego powinna dostać nagrodę."}]},
]
w = writing_task(sets, [22, 28])
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [21, 28], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "czerwiec 2022", "examDates": "25-26.06.2022",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear.",
                       "Listening: III = TAK/NIE on an interview (5), IV = interview MC (5), V = match column I (milk kinds) -> II (A-F), 5 x 1 p.",
                       "Reading: I has 6 items; V is the word-box variant (clozeBox, 11 box words = 10 answers + example, no distractor).",
                       "Grammar IV is present & past (czas teraźniejszy i przeszły); II and VIII are word-box tasks with one distractor each (czyli / między)."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
