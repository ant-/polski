#!/usr/bin/env python3
"""Builds data/2021-11.js. Run from anywhere: python3 tools/build_2021_11.py
Content = verbatim from sources/2021-11/test.txt (+ PDF page images for underlined/bold PRZYKŁAD answers),
keys = official 'Klucz do zadań' in transcript.txt. Adapted from build_2024_02.py (docs/conversion-recipe.md).
Does NOT touch data/manifest.js (done by the coordinator)."""
import json, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2021-11"
test = clean_lines(read(SID, "test.txt"))
OPT = lambda *texts: [{"id": "abc"[i], "text": t} for i, t in enumerate(texts)]
tr1 = lambda sp, t: {"sp": sp, "t": t}


def mc_item(tid, n, prompt, opts, ans, **kw):
    return {"id": f"{tid}.{n}", "number": n, "prompt": prompt, "options": OPT(*opts), "answer": ans, **kw}


def numbered_block(sid, roman):
    """transcript block -> {label: (text, speaker)} for lines like '3. text (M)'; 'Przykład: ...' -> label 'ex'."""
    txt = " ".join(l.strip() for l in transcript_block(sid, roman))
    txt = re.sub(r"\s+", " ", txt)
    out = {}
    for m in re.finditer(r"(?:^|(?<=[)\.\?!”\"]) )(Przykład:|\d+\.)\s*(.*?)\s*\(?([KM])\)(?= (?:\d+\.|Przykład:)|\s*$)", txt):
        lab = "ex" if m[1].startswith("Przykład") else m[1].rstrip(".")
        out[lab] = (m[2].strip(), m[3])
    return out


# =============================================================== LISTENING
# ---- l1: 14 single utterances MC, 1 play
l1_tr = numbered_block(SID, "I")
assert sorted(l1_tr, key=lambda k: (k != "ex", int(k) if k != "ex" else 0)) == ["ex"] + [str(i) for i in range(1, 15)], list(l1_tr)
l1_key = "a b c c a c b c b b a c c a".split()
l1_items = [
    ("Ta wypowiedź jest typowa", ["na lotnisku.", "na stacji benzynowej.", "na dworcu."]),
    ("Ta wypowiedź jest typowa", ["w sklepie warzywnym.", "w piekarni.", "w kawiarni."]),
    ("Ta wypowiedź to", ["zakaz.", "podziękowanie.", "rada."]),
    ("Ta wypowiedź jest typowa", ["na basenie", "w sklepie obuwniczym.", "w perfumerii."]),
    ("Ta wypowiedź jest typowa podczas", ["podróży.", "pracy.", "zakupów."]),
    ("Ta wypowiedź to", ["pozdrowienia.", "zgoda.", "propozycja."]),
    ("Ta wypowiedź jest typowa", ["w sklepie spożywczym.", "w restauracji.", "w drogerii."]),
    ("To jest pytanie o", ["czas.", "prędkość.", "kierunek."]),
    ("Ta wypowiedź to", ["zgoda.", "odmowa.", "prośba."]),
    ("Ta wypowiedź to", ["sugestia.", "zakaz.", "prośba."]),
    ("Ta wypowiedź jest typowa", ["w supermarkecie.", "w sklepie z zabawkami.", "w sklepie zoologicznym."]),
    ("Ta wypowiedź to", ["zdziwienie.", "rada.", "komplement."]),
    ("Ta wypowiedź oznacza", ["radość.", "zmęczenie.", "smutek."]),
    ("Ta wypowiedź to", ["polecenie.", "powitanie.", "przeprosiny."]),
]
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
    "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 3,
    "audio": task_audio(SID, "I"),   # whole play only: per-item times not used for 2021 sessions
    "example": {"id": "l1.ex", "prompt": "Ta wypowiedź jest typowa", "options": OPT("w kiosku.", "w biurze.", "w kościele."),
                "answer": "a", "shown": True,   # PDF p.3: option a bold-underlined
                "transcript": tr1(l1_tr["ex"][1], l1_tr["ex"][0])},
    "items": [mc_item("l1", i + 1, p, o, l1_key[i], transcript=tr1(l1_tr[str(i + 1)][1], l1_tr[str(i + 1)][0]))
              for i, (p, o) in enumerate(l1_items)],
    "pdfNotes": ["Official transcript item 6 prints the speaker tag as „K)” (missing opening bracket); parsed as K."],
}

# ---- l2: persons 1-4 -> traits A-E (matchMulti), 6 slots
l2_tr = numbered_block(SID, "II")
assert sorted(l2_tr) == ["1", "2", "3", "4"], list(l2_tr)
l2_stm = [("A", "szybko się denerwuje.", ["3"]), ("B", "jest bardzo zaangażowana w to, co robi.", ["1", "3"]),
          ("C", "nie lubi kłócić się z innymi.", ["2"]), ("D", "lubi pomagać innym.", ["4"]), ("E", "ma wesołą naturę.", ["1"])]
l2 = {
    "id": "l2", "number": "II", "type": "matchMulti", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wypowiedzi czterech osób (1-4), które opisują swoje cechy charakteru (A-E). Proszę dopasować osoby do ich cech. Uwaga! Jedna osoba może opisać więcej niż jedną cechę.",
    "pointsFormula": "6 x 1 p.", "pointsPerSlot": 1, "maxPoints": 6, "plays": 2, "pdfPage": 4,
    "source": "Na podstawie: https://www.focus.pl/artykul/psychotest-jaki-jest-twj-typ-temperamentu?page=2",
    "audio": task_audio(SID, "II"),
    "persons": [{"id": str(i), "label": f"osoba {i}"} for i in range(1, 5)],
    "example": {"id": "l2.ex", "statement": "analizuje plusy i minusy różnych sytuacji.", "answer": ["2"], "shown": True},
    "statements": [{"id": f"l2.{L}", "letter": L, "text": t, "slots": len(a), "answer": a, "anyOrder": True, "starred": False} for L, t, a in l2_stm],
    "transcript": {"lines": [{"sp": f"Osoba {i} ({l2_tr[str(i)][1]})", "t": l2_tr[str(i)][0]} for i in range(1, 5)]},
}

# ---- l3: interview TAK/NIE, 7 x 1
l3_tr = speaker_lines(transcript_block(SID, "III"), {"Dz": "Dziennikarz", "K": "Kobieta"})
assert [x["sp"] for x in l3_tr] == ["Dziennikarz", "Kobieta"] * 5 + ["Dziennikarz"], [x["sp"] for x in l3_tr]
l3_stm = ["Kolekcje ubrań stworzyła znana firma odzieżowa.", "Szczególnie drogie są wirtualne sukienki.", "Popularność aplikacji była zaskoczeniem.",
          "Zakładanie wirtualnych ubrań jest łatwe.", "Twórcy aplikacji muszą brać pod uwagę cechy różnych materiałów.",
          "Programiści ukończyli nową wersję aplikacji.", "Nowa wersja będzie dostępna w tym miesiącu."]
l3_key = "NIE TAK TAK TAK TAK NIE NIE".split()
l3 = {
    "id": "l3", "number": "III", "type": "tf", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Dziennikarz prowadzi wywiad na temat cyfrowej mody. Proszę zaznaczyć: TAK – gdy zdanie jest zgodne z nagraniem; NIE – gdy nie jest zgodne z nagraniem.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "plays": 2, "pdfPage": 5,
    "source": "Na podstawie: https://www.vogue.pl/a/cyfrowa-moda-podpowiadamy-jak-ja-nosic",
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_tr},
    "example": {"id": "l3.ex", "statement": "Cyfrowa moda pojawiła się w tym roku.", "answer": "NIE", "shown": True},   # X in NIE column (PDF p.5)
    "items": [{"id": f"l3.{i+1}", "number": i + 1, "statement": s, "answer": l3_key[i]} for i, s in enumerate(l3_stm)],
}

# ---- l4: match table I -> II (A-F, one spare? all 6 used incl. example E)
_txt = " ".join(l.strip() for l in transcript_block(SID, "IV"))
_txt = re.sub(r"\s+", " ", _txt).replace("Przykład: ", "")
l4_lines = [{"sp": sp, "t": t.strip()} for t, sp in re.findall(r"(.+?) \(([KM])\)", _txt)]
assert len(l4_lines) == 6, l4_lines
l4_opts = {"A": "dla kogoś, komu sprawiliśmy przykrość.", "B": "dla osoby, która lubi te kwiaty.", "C": "można dostać od dziecka.",
           "D": "dla osoby podziwianej i cenionej.", "E": "dla osoby, którą bardzo kochamy.", "F": "z okazji Dnia Kobiet."}
l4_titles = ["Białe róże", "Tulipany", "Gerbery", "Narcyzy i żonkile", "Polne kwiaty"]
l4_key = "A F D B C".split()
l4 = {
    "id": "l4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wypowiedzi na temat kwiatów oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 6,
    "source": "Na podstawie: https://przeglad-ogrodniczy.pl/poza-ogrodem/87-poza-ogrodem/319-jakie-kwiaty-na-jaka-okazje",
    "heading": "Kwiaty doskonale oddają nasze uczucia, a czasami znaczą więcej niż niejedno słowo.",
    "audio": task_audio(SID, "IV"),
    "transcript": {"lines": l4_lines},
    "options": [{"id": k, "text": v} for k, v in l4_opts.items()],
    "example": {"id": "l4.ex", "prompt": "Czerwone róże", "answer": "E", "shown": True},
    "items": [{"id": f"l4.{i+1}", "number": i + 1, "prompt": t, "answer": l4_key[i]} for i, t in enumerate(l4_titles)],
}

# ---- l5: picture matching, 10 texts <-> photos B-K (A = example)
l5_tr = numbered_block(SID, "V")
assert sorted(l5_tr, key=lambda k: (k != "ex", int(k) if k != "ex" else 0)) == ["ex"] + [str(i) for i in range(1, 11)], list(l5_tr)
l5_labels = list("BCDEFGHIJK")
l5_key = "4 8 6 1 10 2 5 9 7 3".split()   # key row B..K
IMG = f"data/img/{SID}"
l5 = {
    "id": "l5", "number": "V", "type": "match", "grading": "auto",
    "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wypowiedzi na temat przygotowywania się do zagranicznej podróży i dopasować numer tekstu do ilustracji.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "plays": 2, "pdfPage": 7,
    "source": "Na podstawie: https://dworzeconline.pl/info/strefa-pasazera/przydatne-w-podrozy/co-zabrac-w-podroz",
    "audio": task_audio(SID, "V"),   # whole plays only
    # options = text numbers 1..10; 'PRZYKŁAD' is the printed answer of example picture A (A – [PRZYKŁAD]) and must exist as an option id
    "options": [{"id": "PRZYKŁAD", "text": "PRZYKŁAD"}] + [{"id": str(i), "text": str(i)} for i in range(1, 11)],
    "example": {"id": "l5.ex", "label": "A", "image": f"{IMG}/l5-A.jpg", "answer": "PRZYKŁAD", "shown": True},
    "items": [{"id": f"l5.{i+1}", "number": i + 1, "label": lab, "image": f"{IMG}/l5-{lab}.jpg", "answer": l5_key[i]} for i, lab in enumerate(l5_labels)],
    "transcript": {"lines": [{"sp": f"Przykład ({l5_tr['ex'][1]})", "t": l5_tr["ex"][0]}] +
                            [{"sp": f"Tekst {i} ({l5_tr[str(i)][1]})", "t": l5_tr[str(i)][0]} for i in range(1, 11)]},
    "pdfNotes": ["Photos extracted with tools/extract_images.sh 2021-11 7 l5 A..K; A..K order verified against a page render (A notebook, B passport, C board games, D map, E cosmetics, F children in sunglasses, G medicines, H ATM, I hiker, J phone, K suitcase).",
                 "Transcript opens with the title „Jak się przygotować do zagranicznej podróży?”."],
}

listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [3, 7], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
src_ = lambda s: "Na podstawie: " + s
r1_ex = {"id": "r1.ex",
         "passage": {"text": "Drugie śniadanie jest najczęściej pomijanym posiłkiem. Regularnie rezygnujemy z zabierania do pracy kanapek czy przekąsek. Po 3–4 godzinach od pierwszego śniadania poziom cukru we krwi spada, a my tracimy koncentrację i właśnie wtedy powinniśmy dostarczyć organizmowi energii.",
                     "source": src_("https://www.medexpress.pl/polacy-nie-jedza-drugiego-sniadania/63223")},
         "prompt": "Z tego tekstu wynika, że",
         "options": OPT("często zapominamy o wzięciu drugiego śniadania do pracy.", "zjedzenie drugiego śniadania obniża poziom cukru we krwi.", "dzięki drugiemu śniadaniu możemy lepiej skupić się na pracy."),
         "answer": "c", "shown": True}   # PDF p.9: option c bold-underlined
AUT = "Na podstawie autorskiego tekstu"
r1_data = [
    ("Mimo że radio i telewizja coraz częściej informują o zbliżającym się spadku cen na polskim rynku mieszkaniowym, to w rzeczywistości za mieszkania wcale nie płaci się mniej. Najbardziej odczuwalne jest to w średnich i dużych miastach. W tym roku ceny są najwyższe od 10 lat.",
     AUT, "Z tego tekstu wynika, że",
     ["w mediach często mówi się o coraz wyższych cenach mieszkań.", "ceny mieszkań rosną tylko w średnich i dużych miastach.", "przez ostatnie 10 lat ceny mieszkań były niższe niż obecnie."], "c"),
    ("Uczniowie szkoły podstawowej w Podkowie Leśnej budują domy dla bezdomnych zwierząt. Projekt edukacyjny odbywa się w czasie zajęć z biologii i koordynuje go nauczyciel biologii, który jest autorem tego pomysłu. Materiały do budowy pochodzą z recyklingu, a dostarczają je pracownicy urzędu miasta.",
     AUT, "Z tego tekstu wynika, że",
     ["uczniowie po lekcjach zajmują się bezdomnymi zwierzętami.", "za realizację projektu jest odpowiedzialny jeden z nauczycieli.", "uczniowie budują domy z tego, co sami zebrali w mieście."], "b"),
    ("Twórcą popularnej marki kosmetyków Max Factor był Polak – Maksymilian Faktorowicz. Zaczynał jako pomocnik w drogerii, gdzie eksperymentował z mieszaniem kremów i perfum. W 1914 roku wymyślił specjalny kosmetyk do makijażu dla aktorów, który można było łatwo nakładać i usuwać.",
     src_("https://www.money.pl/galerie/artykul/najslynniejsi-polacy-w-usa,138,8,2210698.html"), "Z tego tekstu wynika, że Maksymilian Faktorowicz",
     ["opracował prosty w użyciu produkt kosmetyczny.", "założył drogerię, w której testował kosmetyki.", "doradzał aktorom, jak zrobić makijaż."], "a"),
    ("Pierwszą, zachowaną do dzisiaj, polską książkę kucharską wydano w 1698 roku. Każdy jej rozdział zawiera sto przepisów przede wszystkim na potrawy mięsne, ale także rybne i warzywne. To nie tylko opowieść o gotowaniu, lecz także o całej kulturze jedzenia w tamtych czasach.",
     src_("https://kulinarny.krakow.pl/dziedzictwo_kulinarne/224867,2065_pierwsza_polska_ksiazka_kucharska.html"), "Z tego tekstu wynika, że pierwsza polska książka kucharska",
     ["składa się z ponad stu stron.", "nie zawiera przepisów na dania wegetariańskie.", "zawiera informacje o tradycjach kulinarnych."], "c"),
]
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "4 x 1 p.", "pointsPerItem": 1, "maxPoints": 4, "pdfPage": 9, "pdfPages": [9, 10],
    "example": r1_ex,
    "items": [{"id": f"r1.{i+1}", "number": i + 1, "passage": {"text": t, "source": u}, "prompt": p, "options": OPT(*o), "answer": a}
              for i, (t, u, p, o, a) in enumerate(r1_data)],
    "pdfNotes": ["Source line of item 3 is printed with a stray trailing ' /' and item 4's URL contains a line-break space ('2065_ pierwsza'); stored cleaned."],
}

# ---- r2: TAK/NIE on one text
r2_lines = between(test, r"II\. Proszę przeczytać tekst", r"Na podstawie: https://businessinsider")
r2_lines = after_points(r2_lines)
r2_title = r2_lines[0].strip() if r2_lines[0].strip() else next(l.strip() for l in r2_lines if l.strip())
r2_body = [l for l in r2_lines if l.strip() and l.strip() != r2_title]
r2_text = paras_by_indent(r2_body)
assert len(r2_text) == 3, r2_text
r2_stm = ["Projekt „Drugie życie” prowadzony jest w Warszawie.", "Dzięki akcji można kupić zepsuty sprzęt sportowy w niskiej cenie.",
          "W supermarkecie za markowe używane ubrania zapłacimy poniżej 40 zł.", "Pracownicy supermarketu przygotowują używane ubrania do sprzedaży.",
          "Osoba, która odda stare rzeczy, dostanie zniżkę na zakupy.", "Dalsza sprzedaż ubrań z drugiej ręki będzie zależała od zainteresowania klientów.",
          "Z powodu pandemii mniej ludzi kupowało używane ubrania."]
r2_key = "TAK NIE TAK NIE TAK TAK NIE".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 11,
    "title": r2_title,
    "source": "Na podstawie: https://businessinsider.com.pl/firmy/strategie/decathlon-sprzedaje-sprzet-po-testach-i-zwrotach-auchan-uzywane-ubrania",
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "Używane ubrania można kupować w supermarketach od kilku lat.", "answer": "NIE", "shown": True},
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
}

# ---- r3: fragments -> gaps (A-I, example B, all 9 used)
r3_lines = between(test, r"III\. Proszę przeczytać tekst i", r"Na podstawie: https://serwisy")
r3_lines = after_points(r3_lines)
r3_text = "\n\n".join(paras_by_indent(r3_lines)).strip()
r3_text = re.sub(r"\[_{2}B_{2}\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\](\d)", r"{{\1}}", r3_text).replace(" m2", " m²")
r3_frag = {"A": "lecz najczęściej chcieli tu mieszkać biedni artyści", "B": "które powstały tam, gdzie dawniej były fabryki",
           "C": "mają dużo otwartej przestrzeni", "D": "nie cieszyły się dużym zainteresowaniem", "E": "lecz w Polsce mają one krótką historię",
           "F": "które zabierali do pracy pod ziemią", "G": "dzięki biedniejszym amerykańskim malarzom", "H": "oraz niskie ceny czynszu",
           "I": "składa się tylko z dwóch pokoi"}
r3_key = "C I D A G H E F".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–I).",
    "pointsFormula": "8 x 1 p.", "pointsPerItem": 1, "maxPoints": 8, "pdfPage": 12,
    "source": "Na podstawie: https://serwisy.gazetaprawna.pl/nieruchomosci/artykuly/654819,lofty-oryginalne-i-nowoczesne-mieszkania-z-historia.html",
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "B", "shown": True},
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs (A-H, example B, all 8 used)
r4_par = {
    "A": "Kiedy w domu jest pies, marnuje się mniej jedzenia – pupil chętnie pomoże zjeść niektóre produkty z lodówki.",
    "B": "Psy potrafią wyczuć zbliżające się ataki migreny. Kładą się wtedy na właścicielu lub szczekają.",
    "C": "Regularne spacery i posiłki dla psa uczą jego właściciela, jak właściwie planować czas.",
    "D": "Psy to świetni ochroniarze. Szczekają, gdy w okolicy zobaczą obcą, podejrzaną osobę.",
    "E": "Opieka nad psem pozwala czuć się potrzebnym, dzięki czemu pomaga w walce z samotnością, a nawet depresją.",
    "F": "Posiadacze psów mają większe szanse na przeżycie po ataku serca. Szczekanie psa to często informacja, że coś złego dzieje się z jego opiekunem i ratunek może przyjść szybciej.",
    "G": "Nie tylko trener personalny i ćwiczenia na siłowni pomagają schudnąć. Zamiast stać i rzucać psu kijek – można biegać razem z nim.",
    "H": "Warto spacerować z psem, bo wiele par poznało się podczas wyprowadzania swoich pupili.",
}
r4_titles = ["Zawsze w formie", "Na pomoc właścicielowi", "Sposób na partnera", "Lekarstwo na smutek", "Bezpieczny dom",
             "Nauczyciel systematyczności", "Ekologiczny przyjaciel"]
r4_key = "G F H E D C A".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 13,
    "source": "Na podstawie: https://zooart.com.pl/blog/czy-warto-miec-psa-oto-10-zalet-jego-posiadania",
    "heading": "Czy warto mieć psa? Oto jakie zalety ma posiadanie tego zwierzęcia",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "System informacji o bólu", "answer": "B", "shown": True},
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
}

# ---- r5: inline choice, 8 x 0.5 (example: porach, PDF p.14)
r5_raw = join(after_points(between(test, r"V\. Proszę – zgodnie z przykładem – podkreślić najlepszą", r"Na podstawie: https://podroze")))
r5_pass, r5_bl = cloze_choice(r5_raw)
set_answers(r5_bl, "spędzić reguły walczą trasami wyjątkowy szukają miejscach wycieczkę".split(), {"ex": "porach"})
r5 = {
    "id": "r5", "number": "V", "type": "clozeChoice", "grading": "auto",
    "instruction": "V. Proszę – zgodnie z przykładem – podkreślić najlepszą spośród możliwości podanych w nawiasach.",
    "pointsFormula": "8 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 4, "pdfPage": 14,
    "source": "Na podstawie: https://podroze.se.pl/polska/malopolskie/zakopane/publikujesz-zdjecia-z-tatr-mozesz-dostac-mandat-nawet-500-zl-lepiej-zapoznaj-sie-z-zasadami/7357/",
    "passage": r5_pass, "blanks": r5_bl,
}
reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [9, 14], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
# ---- g1: declension (3 examples: ostatni / sposobów / tę, PDF p.16)
g1_raw = paras_by_indent(after_points(between(test, r"I\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych", r"Na podstawie: https://natemat")))
g1_pass, g1_bl = cloze_choice("\n\n".join(g1_raw))
g1_key = "młodym wózek ludzie niepełnosprawni Polski niej inwalidzkim te je osobę".split()
set_answers(g1_bl, g1_key, {"ex1": "ostatni", "ex2": "sposobów", "ex3": "tę"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 16,
    "source": "Na podstawie: https://natemat.pl/351089,jesttyledoodkrycia-milosz-krawczyk-opowiada-zachwytach-2020",
    "passage": g1_pass, "blanks": g1_bl,
}

# ---- g2: conjunctions from box (example: więc)
g2_raw = join(after_points(between(test, r"II\. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki \(spójniki\)", r"Na podstawie: https://weekend.gazeta.pl/weekend/7,177339")))
g2_raw = re.sub(r"więcPRZYKŁAD", "{{ex}}", g2_raw)
g2_raw = re.sub(r"\s*[….]{3,}\s*(\d)", r" {{\1}}", g2_raw)
g2_raw = re.sub(r"\s+", " ", g2_raw)
assert g2_raw.startswith("że więc chociaż czy żeby ponieważ i "), g2_raw[:50]
g2_raw = g2_raw[len("że więc chociaż czy żeby ponieważ i "):]
g2 = {
    "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
    "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 16,
    "source": "Na podstawie: https://weekend.gazeta.pl/weekend/7,177339,27029406,recepta-na-spokoj-malgosia-uwielbia-alokazje-zwane-w-roslinnych.html",
    "wordBox": ["że", "więc", "chociaż", "czy", "żeby", "ponieważ", "i"], "distractors": ["czy"],
    "passage": g2_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "więc"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("że chociaż i ponieważ żeby".split())],
}

# ---- g3: comparison (2 examples: bardziej zrelaksowani / wcześniej)
g3_raw = re.sub(r"\s+", " ", " ".join(after_points(between(test, r"III\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów", r"Na podstawie: https://weekend.gazeta.pl/weekend/7,177334"))))
g3_pass, g3_bl = cloze_choice(g3_raw.strip())
set_answers(g3_bl, "szybsze mniejszą mocno dziwnie najlepiej".split(), {"ex1": "bardziej zrelaksowani", "ex2": "wcześniej"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "source": "Na podstawie: https://weekend.gazeta.pl/weekend/7,177334,27027463,obiecywalam-sobie-ze-nigdy-wiecej-nie-spotkam-sie-z-zadnym.html",
    "passage": g3_pass, "blanks": g3_bl,
}

# ---- g4: verb forms (present & past), examples ratowała / mówi are printed filled in
g4_raw = join(after_points(between(test, r"IV\. Proszę – zgodnie z przykładami – uzupełnić tekst", r"Na podstawie: „Śniadanie z misiem”")))
g4_raw = g4_raw.replace("ratowała (ratować)PRZYKŁAD", "{{ex1}}").replace("mówi (mówić)PRZYKŁAD", "{{ex2}}")
g4_given = {}


def _g4(m):
    g4_given[m[1]] = m[2].strip()
    return "{{%s}}" % m[1]


g4_raw = re.sub(r"[….]{3,}\s*(\d+)\s*\(([^()]*)\)\s*\d+", _g4, g4_raw)
assert sorted(g4_given, key=int) == [str(i) for i in range(1, 11)], g4_given
g4_key = ["usłyszały", "pomagała", "umierały", "pomyślał", "przygotowuje", "opiekują się", "zgubił się", "wyobrażamy", "przeprowadziliśmy się", "przychodzą"]
g4 = {
    "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
    "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przeszły).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17,
    "source": "Na podstawie: „Śniadanie z misiem”, Twój Styl, grudzień, 2020.",
    "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
    "passage": g4_raw,
    "blanks": [{"id": "ex1", "example": True, "given": "ratować", "answer": "ratowała"}, {"id": "ex2", "example": True, "given": "mówić", "answer": "mówi"}] +
              [{"id": str(i + 1), "given": g4_given[str(i + 1)], "answer": g4_key[i], "accept": []} for i in range(10)],
    "pdfNotes": ["Printed example answers (ratowała, mówi) are shown bold-underlined inside the text; the pronoun 'my' in item 9's cue '(my – przeprowadzić się)' is not part of the answer."],
}

# ---- g5: ask about the underlined part
g5_q = [  # (sentence, underlined, stem, short answer, key, accept)
    ("Kasia boi się myszy.", "myszy", "…………… boi się Kasia?", "Myszy.", "Czego", []),
    ("Marek myślał o swoich problemach przez cały dzień.", "o swoich problemach", "…………… myślał Marek przez cały dzień?", "O swoich problemach.", "O czym", ["O czyich problemach"]),
    ("Czekali na koleżankę półtorej godziny.", "półtorej godziny", "…………… czekali na koleżankę?", "Półtorej godziny.", "Jak długo", ["Ile czasu"]),
    ("Ten pan nie zapłacił za benzynę.", "za benzynę", "…………… nie zapłacił ten pan?", "Za benzynę.", "Za co", []),
    ("Magda zajmuje się chorymi dziećmi.", "chorymi dziećmi", "…………… zajmuje się Magda?", "Chorymi dziećmi.", "Kim", ["Jakimi dziećmi"]),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Iwona pije kawę z mlekiem.", "underlined": "z mlekiem",
                "stem": "…………… Iwona pije kawę?", "shortAnswer": "Z mlekiem.", "answer": "Z czym", "shown": True},
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": acc}
              for i, (s, u, st, sa, a, acc) in enumerate(g5_q)],
    "pdfNotes": ["The printed example shows the full question „Z czym Iwona pije kawę?”; stored with the question word replaced by the gap like the items.",
                 "Official key prints the question word with decoration (Czego…?, Za co ….?); stored without it, match.stripChars ignores the decoration. Alternatives from the key: „O czym…? / O czyich problemach…?”, „Jak długo…?/Ile czasu…?”, „Kim…? / Jakimi dziećmi…?”."],
}

# ---- g6: transformation (rubric text from transcript.pdf p.7 key table, rows verified on the page image)
g6_data = [
    ("Beata jest dyrektorem firmy cukierniczej.", "kieruje", "Beata kieruje firmą cukierniczą.", "2 transformacje (2 x 0,5)", [("2 transformacje", 1)]),
    ("Mojej córce nie smakuje bigos.", "nie lubi", "Moja córka nie lubi bigosu.", "2 transformacje (2 x 0,25) + transformacja 0,5", [("2 transformacje", 0.5), ("transformacja", 0.5)]),
    ("Chłopcy poszli do baru na zupę.", "zjedli", "Chłopcy zjedli w barze zupę.", "odpowiedni przyimek 0,25 + transformacja 0,25 + usunięcie przyimka 0,25 + brak transformacji 0,25",
     [("odpowiedni przyimek", 0.25), ("transformacja", 0.25), ("usunięcie przyimka", 0.25), ("brak transformacji", 0.25)]),
    ("Janek przyglądał się ładnej blondynce.", "patrzył", "Janek patrzył na ładną blondynkę.", "dodanie przyimka 0,5 + 2 transformacje (2 x 0,25)", [("dodanie przyimka", 0.5), ("2 transformacje", 0.5)]),
    ("Państwo Kowalscy planują generalny remont łazienki.", "myślą", "Państwo Kowalscy myślą o generalnym remoncie łazienki.",
     "dodanie przyimka 0,25 + 2 transformacje (2 x 0,25) + brak transformacji 0,25", [("dodanie przyimka", 0.25), ("2 transformacje", 0.5), ("brak transformacji", 0.25)]),
]
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 19,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Stefan jest nauczycielem.", "hint": "pracuje", "answer": "Stefan pracuje jako nauczyciel.", "shown": True},
    "items": [{"id": f"g6.{i+1}", "number": i + 1, "source": s, "hint": h, "answer": a, "rubric": r, "rubricParts": [{"what": w_, "points": p} for w_, p in parts]}
              for i, (s, h, a, r, parts) in enumerate(g6_data)],
}

# ---- g7: aspect & mood (2 examples: idź / Pracowałaby, PDF p.20)
g7_pass, g7_bl = cloze_choice("\n\n".join(paras_by_indent(after_points(between(test, r"VII\. Proszę – zgodnie z przykładami", r"^VIII\.")))))
set_answers(g7_bl, ["robiłaby", "dostała się", "wyglądałoby", "Pomyśl", "Wybierajcie", "postanowiła", "poznałaby", "obiecaj", "poszła", "bylibyśmy"],
            {"ex1": "idź", "ex2": "Pracowałaby"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 20,
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: prepositions from a box (example: W)
g8_raw = join(after_points(between(test, r"VIII\. Proszę – zgodnie z przykładem", r"Na podstawie artykułu")))
g8_raw = re.sub(r"W PRZYKŁAD", "{{ex}}", g8_raw)
g8_raw = re.sub(r"\s*[….]{3,}\s*(\d)", r" {{\1}}", g8_raw)
g8_raw = re.sub(r"\s+", " ", g8_raw)
assert g8_raw.startswith("za na w obok z dla od "), g8_raw[:40]
g8_raw = g8_raw[len("za na w obok z dla od "):]
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeBox", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (przyimki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 20,
    "source": "Na podstawie artykułu: Sen o dolinie, „Twój Styl”, październik 2020.",
    "wordBox": ["za", "na", "w", "obok", "z", "dla", "od"], "distractors": ["obok"],
    "passage": g8_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "w"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("na za od dla z".split())],
    "pdfNotes": ["The example gap is printed „W PRZYKŁAD” (capital W at sentence start); stored answer is the box word „w”."],
}

grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [16, 20], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING
sets = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 30, "prompt": "Jest Pani właścicielką / Pan właścicielem baru z frytkami w miejscowości turystycznej. Szuka Pani/Pan dodatkowego pracownika na czas wakacji. Proszę napisać ogłoszenie, w którym przedstawi Pani/Pan warunki pracy."},
        {"id": "b", "genre": "list", "wordTarget": 170, "prompt": "Koleżanka zaprosiła Panią/Pana na weekend do swojego domku w górach. Niestety nie może Pani/Pan pojechać. W Pani/Pana mieszkaniu jest remont, który miał się skończyć w zeszłym tygodniu, ale ciągle trwa. Proszę opisać, co będzie Pani/Pan robić w weekend i zaproponować koleżance inny termin spotkania."}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "życzenia", "wordTarget": 25, "prompt": "Jest Pani/Pan dyrektorem dużej firmy. Proszę napisać do swoich pracowników życzenia z okazji Nowego Roku."},
        {"id": "b", "genre": "sprawozdanie", "wordTarget": 175, "prompt": "Dwa tygodnie temu odbył się międzynarodowy festiwal piosenki studenckiej, na którym była Pani obecna / był Pan obecny. Proszę napisać sprawozdanie (relację) z tego wydarzenia do gazety „Kultura i Uczelnia”, z którą Pani/Pan współpracuje."}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "zaproszenie", "wordTarget": 30, "prompt": "Przez cały rok uczestniczyła Pani / uczestniczył Pan w kursie projektowania ogrodów. Na zakończenie nauki chce Pani/Pan zorganizować imprezę. Proszę napisać zaproszenie do koleżanek i kolegów z grupy, które zamieści Pani/Pan na Facebooku."},
        {"id": "b", "genre": "opis", "wordTarget": 170, "prompt": "„Tu najlepiej odpoczywam” – proszę opisać idealne dla Pani/Pana miejsce wypoczynku.", "title": "Tu najlepiej odpoczywam"}]},
]
w = writing_task(sets, [22, 28])
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [22, 28], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "listopad 2021", "examDates": "20-21.11.2021",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear; for this 2021 session only whole plays are offered (per-item times unreliable).",
                       "Listening II is a persons -> traits multi-match (4 persons, traits A-E, 6 slots); listening IV is a column I -> II match table (A-F, all used incl. the example); listening V is picture matching (10 texts <-> photos B-K, A = example).",
                       "Reading III has fragments A-I (all 9 used incl. example B); reading V is inline choice with 8 gaps (8 x 0,5 p.); reading I has 4 items.",
                       "Grammar IV is present & past tense."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
