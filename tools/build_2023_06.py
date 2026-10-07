#!/usr/bin/env python3
"""Builds data/2023-06.js. Run from anywhere: python3 tools/build_2023_06.py
Content = verbatim from sources/2023-06/test.txt (+ PDF page images for the underlined/bold PRZYKŁAD answers),
keys = official 'Klucz do zadań' in transcript.txt. Derived from tools/build_2024_02.py (docs/conversion-recipe.md)."""
import json, sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2023-06"
test = clean_lines(read(SID, "test.txt"))
OPT = lambda *texts: [{"id": "abc"[i], "text": t} for i, t in enumerate(texts)]


def mc_item(tid, n, prompt, opts, ans, **kw):
    return {"id": f"{tid}.{n}", "number": n, "prompt": prompt, "options": OPT(*opts), "answer": ans, **kw}


# =============================================================== LISTENING
# ---- l1: 14 single utterances (transcript.txt TRANSKRYPCJA I: "n. text (K|M)")
l1_tr = {}
for l in transcript_block(SID, "I"):
    m = re.match(r"^\s*(Przykład:|\d+\.)\s*(.*?)\s*\((K|M)\)\s*$", l)
    assert m, l
    l1_tr["ex" if m[1] == "Przykład:" else m[1].rstrip(".")] = {"sp": m[3], "t": m[2]}
assert len(l1_tr) == 15
l1_ex = ("Ta wypowiedź jest typowa", ["w warzywniaku.", "w kiosku.", "w piekarni."], "c")   # PDF p.3: option c bold-underlined
l1_items = [
    ("To wypowiedź", ["nauczyciela.", "ucznia.", "rodzica."]),
    ("Ta wypowiedź jest typowa", ["w biurze podróży.", "na dworcu PKP.", "w księgarni."]),
    ("Ta wypowiedź to fragment", ["prognozy pogody.", "porady lekarskiej.", "audycji kulinarnej."]),
    ("Ta wypowiedź jest typowa", ["w restauracji.", "na stacji benzynowej.", "w sklepie motoryzacyjnym."]),
    ("Ta wypowiedź oznacza, że osoba", ["długo szukała mieszkania.", "wynajęła mieszkanie kawalerowi.", "kupiła trzypokojowy apartament."]),
    ("Ta wypowiedź oznacza", ["zdenerwowanie.", "rozczarowanie.", "zaskoczenie."]),
    ("Ta wypowiedź oznacza, że osoba pyta o dania", ["dla alergików.", "bez mięsa.", "niskokaloryczne."]),
    ("Ta wypowiedź jest typowa", ["w kasie biletowej.", "na poczcie.", "w przychodni."]),
    ("Ta wypowiedź oznacza, że", ["jest upalny dzień.", "ona czuje się dobrze.", "ona ma gorączkę."]),
    ("Ta wypowiedź jest typowa", ["w autobusie.", "w taksówce.", "w pociągu."]),
    ("Ta wypowiedź oznacza, że ciepłe ubrania", ["należy włożyć na siebie.", "trzeba zostawić poza salą.", "trzeba mieć przy sobie."]),
    ("Ta wypowiedź oznacza, że osoby", ["niedawno wróciły do domu.", "za kilka minut wychodzą.", "do wyjścia mają 30 minut."]),
    ("Ta wypowiedź to", ["prośba.", "rada.", "odmowa."]),
    ("To wypowiedź", ["kibica piłki nożnej.", "fana przegranej drużyny.", "fana wygranej drużyny."]),
]
l1_key = "a c a b a c b a c b b c a b".split()
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
    "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 3,
    "audio": task_audio(SID, "I", ["l1.ex"] + [f"l1.{i}" for i in range(1, 15)]),
    "example": {"id": "l1.ex", "prompt": l1_ex[0], "options": OPT(*l1_ex[1]), "answer": l1_ex[2], "shown": True, "transcript": l1_tr["ex"]},
    "items": [mc_item("l1", i + 1, p, o, l1_key[i], transcript=l1_tr[str(i + 1)]) for i, (p, o) in enumerate(l1_items)],
}

# ---- l2: 8 dialogues, MC (transcript parsed: "- line (K|M)")
l2_tr, cur = {}, None
for l in transcript_block(SID, "II"):
    s = l.strip()
    m = re.match(r"^(Przykład:|(\d+)\.)\s*(.*)$", s)
    if m:
        cur = "ex" if m[1] == "Przykład:" else m[2]
        l2_tr[cur] = []
        s = m[3].strip()
        if not s:
            continue
    m = re.match(r"^[–-]\s*(.*?)\s*\((K|M)\)\s*$", s)
    assert m and cur, s
    l2_tr[cur].append({"sp": m[2], "t": m[1]})
assert all(len(v) == 2 for v in l2_tr.values()) and len(l2_tr) == 9
l2_key = "a b c c a c a b".split()
l2_items = [
    ("Ta wypowiedź oznacza, że kobieta", ["przeprowadziła się.", "zrobiła w domu remont.", "wzięła kredyt na mieszkanie."]),
    ("Z tego dialogu dowiadujemy się, że klient", ["ma pieniądze w portfelu.", "ma pieniądze na koncie.", "negocjuje cenę produktu."]),
    ("Z tego dialogu dowiadujemy się, że", ["mężczyzna chwali potrawę.", "kobieta zrobiła pyszne danie.", "kobieta zgadza się z mężczyzną."]),
    ("Z tego dialogu dowiadujemy się, że", ["za śniadanie trzeba dodatkowo zapłacić.", "wszystkie posiłki są gratis.", "cena zawiera jeden posiłek."]),
    ("Z tego dialogu dowiadujemy się, że", ["syn marzy o własnym zwierzątku.", "kolega kupił sobie zwierzątko.", "mama nie zgadza się na zwierzątko."]),
    ("Z tego dialogu dowiadujemy się, że", ["kobieta umawia znajomego na wizytę.", "mężczyzna nie chce iść do dentysty.", "mężczyzna kolejny raz czuje ból."]),
    ("Z tego dialogu dowiadujemy się, że mężczyzna", ["szedł w złą stronę.", "jedzie taksówką do muzeum.", "pyta taksówkarza o drogę."]),
    ("Z tego dialogu dowiadujemy się, że mężczyzna", ["nie zdążył na spektakl.", "przyszedł na czas.", "przyszedł za wcześnie."]),
]
l2 = {
    "id": "l2", "number": "II", "type": "mc", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać dialogów i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "8 x 1 p.", "pointsPerItem": 1, "maxPoints": 8, "plays": 2, "pdfPage": 4,
    "audio": task_audio(SID, "II", ["l2.ex"] + [f"l2.{i}" for i in range(1, 9)]),
    "example": {"id": "l2.ex", "prompt": "Z tego dialogu wynika, że",
                "options": OPT("pacjent nie spotka się dziś z lekarzem.", "wizyta będzie później niż planowano.", "pacjent wszedł do gabinetu lekarza."),
                "answer": "a", "shown": True,   # PDF p.4: option a bold-underlined
                "transcript": {"lines": l2_tr["ex"]}},
    "items": [mc_item("l2", i + 1, p, o, l2_key[i], transcript={"lines": l2_tr[str(i + 1)]}) for i, (p, o) in enumerate(l2_items)],
}

# ---- l3: interview MC (speakers: Dziennikarka / Robert Lewandowski, later "D:" / "RL:")
l3_tr = []
for l in transcript_block(SID, "III"):
    m = re.match(r"^(Dziennikarka|Robert Lewandowski|D|RL):\s*(.*)$", l.strip())
    if m:
        l3_tr.append({"sp": {"D": "Dziennikarka", "RL": "Robert Lewandowski"}.get(m[1], m[1]), "t": m[2]})
    else:
        l3_tr[-1]["t"] += " " + l.strip()
assert [x["sp"][0] for x in l3_tr] == list("DRDRDRDR"), [x["sp"] for x in l3_tr]
l3_key = "c b a b c".split()
l3_items = [
    ("Rodzice Roberta Lewandowskiego", ["uprawiali ten sam sport.", "pracowali na uniwersytecie.", "razem studiowali i pracowali."]),
    ("Ojciec Roberta był", ["instruktorem judo.", "kierownikiem instytucji sportowej.", "kierownikiem szkoły."]),
    ("Ojciec Roberta", ["pomógł synowi zdecydować o przyszłości.", "odradzał synowi karierę sportową.", "trenował syna na siatkarza."]),
    ("Rodzice uczyli Roberta,", ["jak szybko wygrywać.", "jak zachowywać się po zwycięstwie.", "gdzie inwestować pieniądze."]),
    ("Ojciec Roberta zmarł", ["nagle po intensywnym treningu.", "przed ważnym meczem syna.", "w wyniku poważnej choroby."]),
]
l3 = {
    "id": "l3", "number": "III", "type": "mc", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wywiadu na temat relacji Roberta Lewandowskiego z rodzicami i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 5,
    "source": "Na podstawie: https://viva.pl/ludzie/newsy/robert-lewandowski-w-szczerym-wywiadzie-o-ojcu-32646-r3/",
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_tr},
    "example": {"id": "l3.ex", "prompt": "Dla rodziców Roberta sport był",
                "options": OPT("częścią życia.", "rozrywką.", "mało ważny."),
                "answer": "a", "shown": True},   # PDF p.5: option a bold-underlined
    "items": [mc_item("l3", i + 1, p, o, l3_key[i]) for i, (p, o) in enumerate(l3_items)],
}

# ---- l4: TAK/NIE on a tourist/guide dialogue (T: / P:)
l4_tr = speaker_lines(transcript_block(SID, "IV"), {"T": "Turysta", "P": "Przewodnik"})
assert [x["sp"] for x in l4_tr] == ["Turysta", "Przewodnik", "Turysta", "Przewodnik", "Turysta", "Przewodnik", "Turysta", "Przewodnik"], [x["sp"] for x in l4_tr]
l4_key = "NIE NIE TAK NIE TAK".split()
l4_stm = ["Do katedry można dojść tylko jedną trasą.", "Kopernik częściej mieszkał w pracowni niż w swoim domu.",
          "We Fromborku już nie ma domu Mikołaja Kopernika.", "Frombork powstał z połączenia dwóch różnych miast.",
          "Na lokalizację katedry wybrano szczególnie bezpieczne miejsce."]
l4 = {
    "id": "l4", "number": "IV", "type": "tf", "grading": "auto",
    "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę posłuchać rozmowy turysty z przewodnikiem po Fromborku – mieście, w którym żył Mikołaj Kopernik – i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 6,
    "source": "Na podstawie: https://jedynka.polskieradio.pl/artykul/1726187,Frombork-miasto-z-efektem-wow",
    "audio": task_audio(SID, "IV"),
    "transcript": {"lines": l4_tr},
    "example": {"id": "l4.ex", "statement": "Wieża wodna znajduje się w centrum miasta.", "answer": "TAK", "shown": True},   # PDF p.6: X in TAK column
    "items": [{"id": f"l4.{i+1}", "number": i + 1, "statement": s, "answer": l4_key[i]} for i, s in enumerate(l4_stm)],
}

# ---- l5: persons (1-4) -> opinions (A-D), 5 slots; row A has two persons (no asterisk printed) -> unordered set
l5_tr = []
for l in transcript_block(SID, "V"):
    m = re.match(r"^(Osoba \d \([KM]\))\s*$", l.strip())
    if m:
        l5_tr.append({"sp": m[1], "t": ""})
    else:
        l5_tr[-1]["t"] = (l5_tr[-1]["t"] + " " + l.strip()).strip()
assert len(l5_tr) == 4
l5_st = [("A", "proponuje, żeby dbać o swoją edukację.", ["3", "4"]),
         ("B", "radzi, żeby być aktywnym w mediach społecznościowych.", ["4"]),
         ("C", "poleca dobrze przygotować się do rozmowy kwalifikacyjnej.", ["2"]),
         ("D", "radzi przeanalizować swoje wady i zalety.", ["1"])]
l5 = {
    "id": "l5", "number": "V", "type": "matchMulti", "grading": "auto",
    "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać tekstu na temat poszukiwania pracy i dopasować osoby (1-4) do ich opinii (A-D). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
    "pointsFormula": "5 x 1 p.", "pointsPerSlot": 1, "maxPoints": 5, "plays": 2, "pdfPage": 7,
    "source": "https://www.livecareer.pl/porady-zawodowe/jak-znalezc-prace/",
    "audio": task_audio(SID, "V", [f"p{i}" for i in range(1, 5)]),
    "persons": [{"id": str(i), "label": f"osoba {i}"} for i in range(1, 5)],
    "example": {"id": "l5.ex", "statement": "poleca szukać pracy lokalnie.", "answer": ["1"], "shown": True},
    "statements": [{"id": f"l5.{L}", "letter": L, "text": t, "slots": len(a), "answer": a, "anyOrder": True, "starred": False} for L, t, a in l5_st],
    "transcript": {"lines": l5_tr},
    "pdfNotes": ["Key row A has two persons (3, 4) without an asterisk in this session; stored as an unordered set like every multi-slot row. The printed source line has no 'Na podstawie:' prefix."],
}

listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [3, 7], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
src_ = lambda s: "Na podstawie: " + s
r1_ex = {"id": "r1.ex",
         "passage": {"text": "Baza najpopularniejszych imion zainteresuje wszystkich przyszłych rodziców. Może być także cenną wskazówką np. dla przedsiębiorców produkujących pamiątki czy akcesoria dla najmłodszych. Z danych wynika, że tradycyjne imiona dla dzieci cieszą się bardzo dużą popularnością. Obecnie są chętniej wybierane niż dawniej.",
                     "source": src_("https://www.gov.pl/web/cyfryzacja/zosia-i-antek-najpopularniejszymi-imionami-2022-roku")},
         "prompt": "Z tekstu wynika, że",
         "options": OPT("baza imion przeznaczona jest przede wszystkim dla producentów gadżetów dla dzieci.", "w bazie imion można zamówić spersonalizowane gadżety dla dzieci.", "Polacy wracają do tradycyjnych imion dla dzieci."),
         "answer": "c", "shown": True}   # PDF p.9: option c bold-underlined
r1_data = [
    ("Ta popularna linia lotnicza zarabia głównie na dodatkowych opcjach dla pasażerów. Przed podróżą można zapłacić za możliwość szybszego wejścia na pokład samolotu, rezerwację konkretnego miejsca, a nawet za posiłek, który zjemy w czasie lotu. Jeśli jednak chcemy podróżować ekonomicznie, powinniśmy przemyśleć nasze potrzeby, aby nie wydawać niepotrzebnie pieniędzy.",
     "https://zbiorowy.info/2022/10/tanie-podrozowanie-jak-maksymalnie-obnizyc-koszt-podrozy/",
     "Z tego tekstu wynika, że", ["dodatkowe usługi to dla linii lotniczej sposób na promocję.", "cena biletu lotniczego nie zawiera usługi gastronomicznej.", "pasażerowie najwięcej pieniędzy wydają w czasie lotu."], "b"),
    ("Ponad 8 tysięcy osób z 60 krajów wzięło udział w Maratonie Warszawskim. Jako pierwszy na mecie pojawił się Kenijczyk. Rywalizację kobiet wygrała Etiopka, która jednocześnie ustanowiła rekord tej międzynarodowej imprezy sportowej. Najszybszy z Polaków – Dariusz Nożyński – zajął 8. miejsce.",
     "https://tvn24.pl/tvnwarszawa/najnowsze/warszawa-44-maraton-warszawski-wyniki-zwyciezcami-sa-kenijczyk-i-etiopka",
     "Z tego tekstu możemy się dowiedzieć, że", ["zawodnikami byli przede wszystkim warszawiacy.", "żadna kobieta nie wygrała warszawskiego biegu", "żaden z Polaków nie zdobył w tych zawodach medalu."], "c"),
    ("„Żywioły” to nietypowa piekarnia – miejsce idealne zarówno na śniadanie, jak i na wieczornego drinka czy posiłek z bliską osobą. To pierwszy w Warszawie punkt, który z sukcesem łączy piekarnię z rozbudowaną częścią bistro. Amatorzy dobrej jakości pieczywa znajdą tam pyszne chleby i bułki, a także kanapki, ciasta i przekąski, które można zjeść na miejscu lub wziąć na wynos.",
     "https://warszawa.naszemiasto.pl/bistro-zywioly-nietypowa-piekarnia-to-miejsce-zarowno-n",
     "Z tego tekstu wynika, że w piekarni „Żywioły” można", ["spróbować lokalnych i nietypowych deserów.", "zarezerwować stolik na romantyczne spotkanie.", "zjeść posiłek w bistro lub zabrać jedzenie ze sobą."], "c"),
    ("POLIN Music Festival wraca do Warszawy po ponad dwóch latach. Już w najbliższy piątek rozpocznie się jeden z największych organizowanych w mieście koncertów, który potrwa aż trzy dni. Wysłuchać będzie można pięciu znakomitych występów polskich i zagranicznych artystów. Uczestnicy poznają także kilka zupełnie nowych utworów.",
     "https://tvn24.pl/tvnwarszawa/najnowsze/warszawa-polin-music-festival-rozpoczyna-sie-w-piatek-potrwa-trzy-dni-6770572",
     "Z tego tekstu wynika, że", ["POLIN Music Festival odbędzie się pierwszy raz po przerwie.", "podczas imprezy można kupić płyty znanych zespołów.", "tym razem na festiwalu wystąpią tylko polskie zespoły."], "a"),
    ("Czy kawa jest dobra na wszystko? Oczywiście, że tak. Ponad połowa Polaków nie wyobraża sobie początku dnia bez filiżanki tego czarnego napoju. Pijemy ją, bo lubimy, bo dodaje nam energii, bo to miły zwyczaj. Ma również pozytywny wpływ na zdrowie – tak uważają naukowcy, którzy mówią: „Pijcie kawę na zdrowie!”.",
     "https://beszamel.se.pl/porady/jak-zrobic/kawa-dobra-na-wszystko-zdrowotne-wlasciwosci-kawy",
     "Z tego tekstu wynika, że", ["prawie 50% Polaków pije kawę każdego dnia rano.", "picie tego napoju pomaga ludziom dbać o zdrowie.", "badacze uważają, że kawa jest lepsza niż lekarstwa."], "b"),
]
r1_key = "b c c a b".split()
assert [x[4] for x in r1_data] == r1_key
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 9, "pdfPages": [9, 10],
    "example": r1_ex,
    "items": [{"id": f"r1.{i+1}", "number": i + 1, "passage": {"text": t, "source": src_(u)}, "prompt": p, "options": OPT(*o), "answer": a}
              for i, (t, u, p, o, a) in enumerate(r1_data)],
    "pdfNotes": ["Item 3's printed source URL is cut off in the booklet ('…zarowno-n'); item 2 option b has no final full stop. Both kept verbatim."],
}

# ---- r2: TAK/NIE on one text
r2_lines = after_points(between(test, r"II\. Proszę przeczytać tekst", r"Na podstawie: https://www\.mamasaidbecool"))
r2_title = r2_lines[0].strip()
assert r2_title == "Ekspres Lodowcowy"
r2_text = paras_by_indent(r2_lines[1:])
assert len(r2_text) == 4, r2_text
r2_stm = ["Pojazd ma ogromne okna i dach ze szkła.", "Dobre warunki w Ekspresie Lodowcowym ułatwiają turystom długą podróż.",
          "Cała trasa Ekspresu Lodowcowego znajduje się na liście UNESCO.", "Ekspres rusza ze stacji początkowej zawsze zgodnie z rozkładem.",
          "Wszystkie bilety na Ekspres Lodowcowy są w jednej cenie.", "Posiadacze karty Swiss Travel Pass mają zagwarantowane miejsca siedzące."]
r2_key = "NIE TAK NIE TAK NIE NIE".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 11,
    "title": r2_title,
    "source": "Na podstawie: https://www.mamasaidbecool.pl/glacier-express-ekspres-lodowcowy/",
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "Glacier Express to najbardziej interesująca atrakcja w szwajcarskich górach.", "answer": "NIE", "shown": True},
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
}

# ---- r3: fragments -> gaps
r3_lines = after_points(between(test, r"III\. Proszę przeczytać tekst i", r"Na podstawie: https://wnetrza-mieszkan"))
r3_title = r3_lines[0].strip()
assert r3_title == "Funkcjonalna kuchnia"
r3_text = "\n\n".join(paras_by_indent(r3_lines[1:]))
r3_text = re.sub(r"\[_{2}C_{2}\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\](\d)", r"{{\1}}", r3_text)
r3_frag = {"A": "krojenia, zmywania, gotowania i pieczenia", "B": "najważniejszych sprzętów", "C": "rodzinne posiłki, w pośpiechu jemy śniadania",
           "D": "powinien stanowić element dekoracyjny", "E": "mniej niż 10 metrów kwadratowych", "F": "najważniejszy mebel w całym domu",
           "G": "od półtora do dwóch i pół metra", "H": "wykonywać niepotrzebnych ruchów"}
r3_key = "E B G A H D F".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–H).",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 12,
    "title": r3_title,
    "source": "Na podstawie: https://wnetrza-mieszkan.pl/kuchnia/funkcjonalna-kuchnia",
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "C", "shown": True},    # printed in the text: [__C__]PRZYKŁAD
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs (PDF p.13; letters are in the middle column of the table)
r4_par = {
    "A": "Są produkty, których ceny potrafią się zmienić z tygodnia na tydzień. Jeśli to możliwe, zrób zapasy tych, które mają długi termin ważności.",
    "B": "Nieważne, czy robisz duże zakupy, czy tylko kupujesz chleb w piekarni – zapisuj wszystko, by mieć pełną kontrolę nad tym, ile i na co wydajesz.",
    "C": "Kupuj z głową! Na przykład kup kurczaka, bo możesz zrobić z niego kotlety, rosół i pieczone udka.",
    "D": "Otwórz lodówkę i sprawdź, co może być smacznym dodatkiem do zupy, pasztetu lub omleta. Czasem wystarczy odrobina kreatywności, by powstało zupełnie nowe danie.",
    "E": "Nawet kiedy już zapiszesz wszystkie produkty, które planujesz kupić – zastanów się, czy na pewno są to niezbędne rzeczy. W sklepie bądź konsekwentny, nie kupuj niczego dodatkowego.",
    "F": "Sposobów na wykorzystanie pieczywa jest wiele. Możesz z niego zrobić tosty, bułkę tartą, a nawet zupę. W internecie na pewno znajdziesz mnóstwo przepisów.",
    "G": "Możesz zainstalować aplikacje Foodsi lub Too Good To Go, dzięki którym zamówisz smaczne potrawy w dużo niższych cenach.",
    "H": "Określ tygodniowy budżet na posiłki oraz produkty spożywcze i zawsze płać za nie gotówką – w ten sposób nie wydasz więcej niż zaplanowałeś.",
}
r4_titles = ["Zrób dokładną listę zakupów", "Nie płać kartą, jeśli chcesz kontrolować wydatki", "Czasami więcej oznacza też taniej",
             "Nowe technologie – korzystne promocje", "Postaw na produkty, z których przygotujesz kilka obiadów", "Zrób użytek ze starego chleba",
             "Wykorzystaj resztki"]
r4_key = "E H A G C F D".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 13,
    "source": "Na podstawie: https://tueuropa.pl/blog/2266/jak-oszcz-dzac-pieniadze-12-praktycznych-wskazowek",
    "heading": "Jak oszczędzać na zakupach?",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Notuj wszystkie wydatki", "answer": "B", "shown": True},   # PDF p.13: row B shaded + answer table 'B'
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
}

# ---- r5: inline choice (PRZYKŁAD: bardzo, PDF p.14)
r5_raw = paras_by_indent(after_points(between(test, r"V\. Proszę – zgodnie z przykładem – podkreślić najlepszą", r"Na podstawie: https://www\.nowaera")))
r5_title = r5_raw[0] if r5_raw[0].startswith("Zrozumieć") else None
assert r5_title, r5_raw[:2]
r5_pass, r5_bl = cloze_choice("\n\n".join(r5_raw[1:]))
set_answers(r5_bl, "opisywać wiedzieć Nazwę spędzają czują cech ważna pokazywać aktywnego bardziej".split(), {"ex": "bardzo"})
r5 = {
    "id": "r5", "number": "V", "type": "clozeChoice", "grading": "auto",
    "instruction": "V. Proszę – zgodnie z przykładem – podkreślić najlepszą spośród możliwości podanych w nawiasach.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 14,
    "title": r5_title,
    "source": "Na podstawie: https://www.nowaera.pl/eduone/zrozumiec-pokolenie-alfa",
    "passage": r5_pass, "blanks": r5_bl,
}
reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [9, 14], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
# ---- g1: declension (examples underlined PDF p.16: październiku / Międzynarodowy / to)
g1_raw = paras_by_indent(after_points(between(test, r"I\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych", r"Na podstawie: Organizacja")))
g1_pass, g1_bl = cloze_choice("\n\n".join(g1_raw))
set_answers(g1_bl, "miejscach nas naszej ludźmi miasto swoją pomysłów nowe mieszkańcowi najbliższej".split(),
            {"ex1": "październiku", "ex2": "Międzynarodowy", "ex3": "to"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 16,
    "source": "Na podstawie: Organizacja przestrzeni. Czy krajobraz ma wpływ na nasze życie? (polskieradio.pl)",
    "passage": g1_pass, "blanks": g1_bl,
}

# ---- g2: conjunctions from a box (example: ale, in the text); gaps follow a numbered list 1)-4)
g2_lines = after_points(between(test, r"II\. Proszę uzupełnić tekst wyrazami z ramki", r"Na podstawie: https://www\.gov\.pl/web/edukacja"))
g2_box = "lub jeśli ale ponieważ więc a żeby"
assert join(g2_lines[:1]) == g2_box, g2_lines[:1]
g2_paras, cur = [], []
for l in g2_lines[1:]:
    if re.match(r"^\d\) ", l.strip()) and cur:
        g2_paras.append(join(cur)); cur = []
    cur.append(l)
g2_paras.append(join(cur))
g2_raw = "\n\n".join(g2_paras)
g2_raw = re.sub(r"\s*[….]{3,}\s*(\d)", r" {{\1}}", g2_raw)
g2_raw = g2_raw.replace("ale PRZYKŁAD", "{{ex}}")
g2_raw = re.sub(r"[ \t]+", " ", g2_raw)
assert len(g2_paras) == 5
g2 = {
    "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
    "instruction": "II. Proszę uzupełnić tekst wyrazami z ramki zgodnie z podanym przykładem (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 16,
    "source": "Na podstawie: https://www.gov.pl/web/edukacja-ekologiczna/miedzynarodowy-dzien-ziemi-fakty-o-naszej-planecie",
    "wordBox": g2_box.split(), "distractors": ["więc"],
    "passage": g2_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "ale"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("jeśli lub a żeby ponieważ".split())],
}

# ---- g3: comparison (examples: lepszy / szybciej)
g3_raw = paras_by_indent(after_points(between(test, r"III\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów", r"Na podstawie: https://czytio")))
g3_pass, g3_bl = cloze_choice("\n\n".join(g3_raw))
set_answers(g3_bl, "dłużej bliższy więcej najwyższa mniej".split(), {"ex1": "lepszy", "ex2": "szybciej"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "source": "Na podstawie: https://czytio.pl/blog/tablet-a-czytnik-ebook-na-czym-czytac-ebooki/",
    "passage": g3_pass, "blanks": g3_bl,
}

# ---- g4: verbs (present & PAST); examples in the text: przeprowadziła się / uważamy
g4_raw = join(after_points(between(test, r"IV\. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi", r"^V\. Proszę")))
g4_raw = g4_raw.replace("przeprowadziła się (przeprowadzić się)PRZYKŁAD", "{{ex1}}").replace("uważamy (uważać)PRZYKŁAD", "{{ex2}}")
g4_given = {}
def g4_rep(m):
    g4_given[m[1]] = re.sub(r"\s+", " ", m[2]).strip()
    return " {{%s}}" % m[1]
g4_raw = re.sub(r"\s*[….]{3,}\s*(\d+)\s*\(([^()]*)\)\s*\1", g4_rep, g4_raw)
g4_raw = re.sub(r"\s+", " ", g4_raw)
assert sorted(g4_given, key=int) == [str(i) for i in range(1, 11)], g4_given
g4_ans = {"1": "podjęliśmy", "2": "mieszkałam", "3": "przeszkadzał", "4": "musiały", "5": "staliśmy",
          "6": "cieszymy się", "7": "prowadzi", "8": "pracuję", "9": "idą", "10": "żyjemy"}
g4_ex = [("ex1", "przeprowadzić się", "przeprowadziła się"), ("ex2", "uważać", "uważamy")]
g4 = {
    "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
    "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przeszły).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17,
    "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
    "passage": g4_raw,
    "blanks": [{"id": i, "example": True, "given": g, "answer": a} for i, g, a in g4_ex]
              + [{"id": k, "given": g4_given[k], "answer": g4_ans[k]} for k in map(str, range(1, 11))],
}

# ---- g5: ask about the underlined part
g5_q = [  # (sentence, underlined, stem, short answer, key, accept)
    ("Adam poszedł na niedzielny spacer z całą swoją rodziną.", "z całą swoją rodziną", "…………… Adam poszedł na niedzielny spacer?", "Z całą swoją rodziną.", "Z kim", []),
    ("W tym roku państwo Sikorscy obchodzą dziesiątą rocznicę ślubu.", "dziesiątą", "…………… rocznicę ślubu obchodzą w tym roku państwo Sikorscy?", "Dziesiątą.", "Którą", []),
    ("Igor mieszka w Warszawie już prawie dwa lata.", "już prawie dwa lata", "…………… Igor mieszka w Warszawie?", "Już prawie dwa lata.", "Jak długo", ["Ile czasu", "Ile lat"]),
    ("Przed domem stoi samochód mojego brata.", "mojego brata", "…………… samochód stoi przed domem?", "Mojego brata.", "Czyj", []),
    ("Michał podarował kwiaty swojej nauczycielce matematyki.", "swojej nauczycielce matematyki", "…………… Michał podarował kwiaty?", "Swojej nauczycielce matematyki.", "Komu", []),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Basia czekała na męża na przystanku autobusowym.", "underlined": "na przystanku autobusowym",
                "stem": "…………… Basia czekała na męża?", "shortAnswer": "Na przystanku autobusowym.", "answer": "Gdzie", "shown": True},   # PDF p.18: 'Gdzie' underlined
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": ac}
              for i, (s, u, st, sa, a, ac) in enumerate(g5_q)],
    "pdfNotes": ["Official key prints the question word with decoration (Z kim...?, Którą…?); stored without it, match.stripChars ignores the decoration. Item 3 key lists three alternatives: Jak długo / Ile czasu / Ile lat."],
}

# ---- g6: transformation (key = model sentence + rubric per item)
g6_data = [
    ("Mąż Anny jest technikiem dentystycznym.", "pracuje jako", "Mąż Anny pracuje jako technik dentystyczny.", "2 transformacje (2 x 0,5)", [("2 transformacje", 1.0)]),
    ("Brak mi długich rozmów z przyjaciółką.", "Tęsknię za", "Tęsknię za długimi rozmowami z przyjaciółką.", "2 transformacje (2 x 0,5)", [("2 transformacje", 1.0)]),
    ("Jerzy często wspomina swoją pierwszą wycieczkę rowerową.", "opowiada o", "Jerzy często opowiada o swojej pierwszej wycieczce rowerowej.", "4 transformacje (4 x 0,25)", [("4 transformacje", 1.0)]),
    ("Jestem trochę wyższa niż moja siostra.", "od", "Jestem trochę wyższa od mojej siostry.", "2 transformacje (2 x 0,5)", [("2 transformacje", 1.0)]),
    ("W grupie astronautów są kobiety i mężczyźni.", "składa się z", "Grupa astronautów składa się z kobiet i mężczyzn.", "usunięcie przyimka 0,25 p. + 3 transformacje (3 x 0,25)", [("usunięcie przyimka", 0.25), ("3 transformacje", 0.75)]),
]
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 19,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Już od miesiąca planujemy nasz letni urlop.", "hint": "myślimy",
                "answer": "Już od miesiąca myślimy o naszym letnim urlopie.", "shown": True},
    "items": [{"id": f"g6.{i+1}", "number": i + 1, "source": s, "hint": h, "answer": a, "rubric": r,
               "rubricParts": [{"what": w_, "points": p} for w_, p in parts]} for i, (s, h, a, r, parts) in enumerate(g6_data)],
}

# ---- g7: aspect & mood dialogue (examples: grali / Poprośmy)
g7_lines = after_points(between(test, r"VII\. Proszę – zgodnie z przykładami", r"^VIII\."))
g7_turns, cur = [], []
for l in g7_lines:
    if re.match(r"^(Adam|Paweł|Ania|Basia|Janek|Profesor):", l.strip()) and cur:
        g7_turns.append(join(cur)); cur = []
    if l.strip():
        cur.append(l)
g7_turns.append(join(cur))
g7_turns = [re.sub(r"\)\s+(\d+)", r")\1", t) for t in g7_turns]
g7_pass, g7_bl = cloze_choice("\n\n".join(g7_turns))
set_answers(g7_bl, ["porozmawiaj", "nie narzekajcie", "chodźmy", "moglibyście", "Chciałbym", "wolałbyś", "zgodziłby się", "Bylibyśmy", "niech napiszą", "przypomni"],
            {"ex1": "grali", "ex2": "Poprośmy"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 20,
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: prepositions from a box (example: za)
g8_s = next(i for i, l in enumerate(test) if re.match(r"^VIII\. Proszę", l))
g8_e = next(i for i in range(g8_s, len(test)) if "Państwowa Komisja" in test[i])
g8_raw = join(after_points(test[g8_s:g8_e]))
g8_box = "dla z za przez u o na"
assert g8_raw.startswith(g8_box + " "), g8_raw[:50]
g8_raw = g8_raw[len(g8_box) + 1:]
g8_raw = re.sub(r"\s*[….]{3,}\s*(\d)", r" {{\1}}", g8_raw)
g8_raw = g8_raw.replace("za PRZYKŁAD", "{{ex}}")
g8_raw = re.sub(r"\s+", " ", g8_raw)
g8_src = re.search(r"Na podstawie: \S+", g8_raw)[0]
g8_raw = g8_raw.replace(" " + g8_src, "")
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeBox", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (przyimki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 20,
    "source": g8_src,
    "wordBox": g8_box.split(), "distractors": ["przez"],
    "passage": g8_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "za"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("u z o na dla".split())],
}

grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [16, 20], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING (prompts: test.txt p.22; targets printed as 'NN słów')
w_sets = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 25, "prompt": "Chce Pani/Pan doskonalić swój język polski i w zamian uczyć w Polsce swojego języka. Proszę napisać ogłoszenie na tablicę w szkole językowej."},
        {"id": "b", "genre": "e-mail", "wordTarget": 175, "prompt": "W tym roku postanowiła Pani / postanowił Pan dbać o swoje zdrowie. W e-mailu do polskiej koleżanki / polskiego kolegi proszę napisać, co Pani/Pan robi, by dobrze się czuć i lepiej wyglądać."}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "pozdrowienia", "wordTarget": 30, "prompt": "Proszę napisać pozdrowienia z zagranicznej podróży służbowej do polskiego kolegi lub polskiej koleżanki z pracy."},
        {"id": "b", "genre": "opis", "wordTarget": 170, "prompt": "Polski portal budowlany „Zmieniamy i Remontujemy“ ogłosił konkurs na najciekawszy opis domu lub mieszkania pt. „Mój dom wygląda teraz jak nowy“. Chce Pani/Pan wziąć w nim udział. Proszę napisać tekst, w którym opisze Pani/Pan swoje mieszkanie / swój dom po remoncie.", "title": "Mój dom wygląda teraz jak nowy"}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "zaproszenie", "wordTarget": 30, "prompt": "Wyprowadza się Pani/Pan z Polski. Proszę napisać zaproszenie dla swoich polskich znajomych na kolację z tej okazji."},
        {"id": "b", "genre": "opowiadanie", "wordTarget": 170, "prompt": "Proszę napisać opowiadanie pod tytułem: „Prawdziwy przyjaciel zawsze ci pomoże”.", "title": "Prawdziwy przyjaciel zawsze ci pomoże"}]},
]
w = writing_task(w_sets, [22, 28])
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [21, 28], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "czerwiec 2023", "examDates": "24-25.06.2023",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear; listening II (8 pauses) and V (3 pauses = 4 persons) item chunks match the expected counts.",
                       "Listening II has 8 items (8 x 1 p.), listening III interview, IV TAK/NIE with 5 items, V has 4 persons and 4 opinions (A-D, 5 slots; row A = two persons, no asterisk printed).",
                       "Grammar II heading is worded differently ('Proszę uzupełnić tekst wyrazami z ramki zgodnie z podanym przykładem (spójniki)'); grammar IV is present & past tense.",
                       "Reading IV: option letters sit in the middle column of the table; listening V and reading III printed source lines may lack the 'Na podstawie:' prefix."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
    # data/manifest.js is NOT touched by this builder (shared file, merged by the coordinator): entry {"id": SID, "label": "czerwiec 2023"}
