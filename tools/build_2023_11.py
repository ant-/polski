#!/usr/bin/env python3
"""Builds data/2023-11.js. Run from anywhere: python3 tools/build_2023_11.py
Content = verbatim from sources/2023-11/test.txt (+ PDF page images for the underlined/bold PRZYKŁAD answers),
keys = official 'Klucz do zadań' in transcript.txt. Derived from tools/build_2024_02.py (docs/conversion-recipe.md)."""
import json, sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2023-11"
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
l1_ex = ("Ta wypowiedź to", ["polecenie.", "rada.", "odmowa."], "a")   # PDF p.3: option a bold-underlined
l1_items = [
    ("Ta wypowiedź to", ["rada.", "komplement.", "krytyka."]),
    ("Ta wypowiedź jest typowa", ["u ortopedy.", "u dentysty.", "u internisty."]),
    ("Ta wypowiedź oznacza, że jutro", ["będzie gorąco.", "będzie chłodno.", "pogoda będzie taka sama."]),
    ("Ta wypowiedź oznacza", ["zadowolenie.", "złość.", "smutek."]),
    ("Ta wypowiedź oznacza, że biuro jest otwarte", ["w wybrane dni.", "po południu.", "tylko rano."]),
    ("Ta wypowiedź jest typowa w sklepie", ["meblowym.", "ogrodniczym.", "obuwniczym."]),
    ("Ta wypowiedź jest typowa dla", ["dyrektora.", "pracownika.", "urzędnika."]),
    ("Ta wypowiedź oznacza, że", ["cena roweru jest wysoka.", "o cenie można rozmawiać.", "rower wymaga naprawy."]),
    ("Ta wypowiedź jest typowa", ["w serwisie.", "w sklepie.", "na policji."]),
    ("Ta wypowiedź dotyczy", ["rozmiaru.", "wagi.", "wzrostu."]),
    ("Ta wypowiedź to", ["prośba o radę.", "pozytywna opinia.", "negatywna opinia."]),
    ("Ta wypowiedź to fragment", ["audycji radiowej.", "prognozy pogody.", "porady lekarskiej."]),
    ("Ta wypowiedź jest typowa", ["w kiosku.", "w aptece.", "u lekarza."]),
    ("Ta wypowiedź dotyczy", ["kolorowego papieru.", "zakupów w sklepie.", "segregacji śmieci."]),
]
l1_key = "b c a c b c a b c c b a b c".split()
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
    "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 3,
    "audio": task_audio(SID, "I", ["l1.ex"] + [f"l1.{i}" for i in range(1, 15)]),
    "example": {"id": "l1.ex", "prompt": l1_ex[0], "options": OPT(*l1_ex[1]), "answer": l1_ex[2], "shown": True, "transcript": l1_tr["ex"]},
    "items": [mc_item("l1", i + 1, p, o, l1_key[i], transcript=l1_tr[str(i + 1)]) for i, (p, o) in enumerate(l1_items)],
}

# ---- l2: 6 dialogues, MC (transcript parsed: "– line (K|M)")
l2_tr, cur, buf = {}, None, ""
for l in transcript_block(SID, "II"):
    s = l.strip()
    m = re.match(r"^(Przykład:|(\d+)\.)\s*(.*)$", s)
    if m:
        cur = "ex" if m[1] == "Przykład:" else m[2]
        l2_tr[cur] = []
        s = m[3].strip()
        if not s:
            continue
    m = re.match(r"^–\s*(.*?)\s*\((K|M)\)\s*$", s)
    assert m and cur, s
    l2_tr[cur].append({"sp": m[2], "t": m[1]})
assert sorted(l2_tr, key=lambda x: (x != "ex", x)) and all(len(v) == 2 for v in l2_tr.values()) and len(l2_tr) == 7
l2_key = "a b c b c b".split()
l2_items = [
    ("Z tego dialogu wynika, że Basia", ["już miała urodziny.", "nie świętuje swoich urodzin.", "zapomniała o urodzinach."]),
    ("Z tego dialogu dowiadujemy się, że dzieci", ["nie lubią grać na trawie.", "nie słuchały próśb mamy.", "wybiły okno."]),
    ("Z tego dialogu dowiadujemy się, że", ["cały rok można oglądać wystawę za darmo.", "latem wystawa jest nieczynna.", "oglądanie wystawy latem nic nie kosztuje."]),
    ("Z tego dialogu wynika, że", ["kobieta jest bardzo zadowolona z projektu.", "to nie jest projekt, jaki chciała klientka.", "projekt garderoby jest bardzo ładny."]),
    ("Z tego dialogu dowiadujemy się, że kobieta", ["zapomniała o ślubie.", "jeszcze nie wybrała prezentu.", "prosi o odbiór paczki."]),
    ("Z tego dialogu wynika, że", ["mężczyzna obejrzał finał.", "ulubiony zespół zajął pierwsze miejsce.", "mężczyzna słuchał meczu w radiu."]),
]
l2 = {
    "id": "l2", "number": "II", "type": "mc", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać dialogów i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "plays": 2, "pdfPage": 4,
    "audio": task_audio(SID, "II", ["l2.ex"] + [f"l2.{i}" for i in range(1, 7)]),
    "example": {"id": "l2.ex", "prompt": "Z tego dialogu wynika, że",
                "options": OPT("wizyta będzie opóźniona.", "pacjent wszedł do gabinetu doktora.", "nie będzie wizyty."),
                "answer": "c", "shown": True,   # PDF p.4: option c bold-underlined
                "transcript": {"lines": l2_tr["ex"]}},
    "items": [mc_item("l2", i + 1, p, o, l2_key[i], transcript={"lines": l2_tr[str(i + 1)]}) for i, (p, o) in enumerate(l2_items)],
}

# ---- l3: interview MC (speakers: Dziennikarka / Kamil Kowalski, later "D:" / "K:")
l3_tr = []
for l in transcript_block(SID, "III"):
    m = re.match(r"^(Dziennikarka|Kamil Kowalski|D|K):\s*(.*)$", l.strip())
    if m:
        l3_tr.append({"sp": {"D": "Dziennikarka", "K": "Kamil Kowalski"}.get(m[1], m[1]), "t": m[2]})
    else:
        l3_tr[-1]["t"] += " " + l.strip()
assert [x["sp"][0] for x in l3_tr] == list("DKDKDKDK"), [x["sp"] for x in l3_tr]
l3_key = "c b a b c".split()
l3_items = [
    ("Zawody e-sportowe miały początek", ["w dwudziestym pierwszym wieku.", "ponad siedemdziesiąt lat temu.", "w latach siedemdziesiątych."]),
    ("W pierwszych zawodach gier wideo uczestniczyli", ["profesjonalni gracze.", "ludzie związani z uniwersytetem.", "studenci informatyki."]),
    ("Międzynarodowe zawody są organizowane", ["dwa razy w roku.", "co roku.", "co dwa lata."]),
    ("Turnieje e-sportowe można oglądać", ["jedynie online.", "na żywo oraz online.", "na specjalnych ekranach."]),
    ("Najważniejsze umiejętności w e-sporcie to", ["lata praktyki w grach komputerowych.", "znajomość wszystkich gier na rynku.", "szybkość i myślenie analityczne."]),
]
l3 = {
    "id": "l3", "number": "III", "type": "mc", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wywiadu na temat e-sportu i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 5,
    "source": "Na podstawie: https://geex.x-kom.pl/lifestyle/histora-e-sportu-czym-jest-jak-powstal-dlaczego-jest-popularny/",
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_tr},
    "example": {"id": "l3.ex", "prompt": "E-sport to:",
                "options": OPT("oglądanie w telewizji zawodów sportowych.", "zawody w grach komputerowych.", "montowanie sprzętu komputerowego na czas."),
                "answer": "b", "shown": True},   # PDF p.5: option b bold-underlined
    "items": [mc_item("l3", i + 1, p, o, l3_key[i]) for i, (p, o) in enumerate(l3_items)],
}

# ---- l4: TAK/NIE on a guide's monologue (no speaker labels)
l4_text = join(transcript_block(SID, "IV"))
l4_key = "NIE TAK NIE NIE TAK TAK".split()
l4_stm = ["Główne drzwi do teatru są duże i widać je z daleka.", "Kolory wnętrza budynku kontrastują z zewnętrznymi.",
          "Szekspir w Gdańsku napisał jedną ze swoich sztuk.", "Budowę dawnego teatru sfinansował prywatny inwestor.",
          "Pierwsze spektakle odbywały się w języku angielskim.", "Wokół teatru na wysokości 3. piętra jest trasa spacerowa."]
l4 = {
    "id": "l4", "number": "IV", "type": "tf", "grading": "auto",
    "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę posłuchać informacji udzielanych przez przewodnika po Gdańskim Teatrze Szekspirowskim i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "plays": 2, "pdfPage": 6,
    "source": "Na podstawie: https://audycjekulturalne.pl/audiooprowadzanie-po-teatrze-szekspirowskim/",
    "audio": task_audio(SID, "IV"),
    "transcript": {"text": l4_text},
    "example": {"id": "l4.ex", "statement": "W drodze do teatru powinniśmy przejść przez Złotą Bramę.", "answer": "NIE", "shown": True},   # X in NIE column (printed)
    "items": [{"id": f"l4.{i+1}", "number": i + 1, "statement": s, "answer": l4_key[i]} for i, s in enumerate(l4_stm)],
}

# ---- l5: persons (1-4) -> opinions (A-E), 6 slots; key rows without asterisk (B 1, 4) -> unordered set anyway
l5_tr, cur = [], None
for l in transcript_block(SID, "V"):
    m = re.match(r"^(Osoba \d \([KM]\))\s*$", l.strip())
    if m:
        l5_tr.append({"sp": m[1], "t": ""})
    else:
        l5_tr[-1]["t"] = (l5_tr[-1]["t"] + " " + l.strip()).strip()
assert len(l5_tr) == 4
l5_st = [("A", "wolny czas w ciągu dnia poświęca na odpoczynek lub sport.", ["2"]),
         ("B", "tworzy plan zadań na każdy dzień.", ["1", "4"]),
         ("C", "zaczyna wcześnie swój dzień.", ["3"]),
         ("D", "robi regularne przerwy.", ["2"]),
         ("E", "dzięki technologii lepiej pamięta o swoich zadaniach.", ["1"])]
l5 = {
    "id": "l5", "number": "V", "type": "matchMulti", "grading": "auto",
    "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać tekstu na temat organizacji czasu w ciągu dnia i dopasować osoby (1-4) do ich opinii (A-E). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
    "pointsFormula": "6 x 1 p.", "pointsPerSlot": 1, "maxPoints": 6, "plays": 2, "pdfPage": 7,
    "source": "Na podstawie: https://www.livecareer.pl/porady-zawodowe/jak-znalezc-prace/",
    "audio": task_audio(SID, "V", [f"p{i}" for i in range(1, 5)]),
    "persons": [{"id": str(i), "label": f"osoba {i}"} for i in range(1, 5)],
    "example": {"id": "l5.ex", "statement": "unika wielozadaniowości.", "answer": ["4"], "shown": True},
    "statements": [{"id": f"l5.{L}", "letter": L, "text": t, "slots": len(a), "answer": a, "anyOrder": True, "starred": False} for L, t, a in l5_st],
    "transcript": {"lines": l5_tr},
    "pdfNotes": ["Key rows with two persons (B: 1, 4) carry no asterisk in this session; stored as unordered sets like every multi-slot row."],
}

listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [3, 7], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
src_ = lambda s: "Na podstawie: " + s
r1_ex = {"id": "r1.ex",
         "passage": {"text": "Kredyt studencki to pożyczka, którą dają wybrane banki. Dzięki niej absolwenci szkół średnich mogą kontynuować naukę na uczelni wyższej. Banki oferują niskie odsetki, a spłatę kredytu można zacząć dopiero dwa lata po skończeniu studiów.",
                     "source": src_("https://gazetawroclawska.pl/kredyt-studencki-2023-rozwiazaniem-na-sfinansowanie-wymarzonych-studiow-zobacz-kto-moze-go-otrzymac-i-jakie-sa-warunki-splaty/ar/c5-17610013")},
         "prompt": "Z tego tekstu wynika, że",
         "options": OPT("wszystkie banki proponują klientom kredyt studencki.", "dzięki pożyczce młodzi ludzie mogą zacząć naukę na uniwersytecie.", "pożyczone pieniądze trzeba zwrócić od razu po studiach."),
         "answer": "b", "shown": True}   # PDF p.9: option b bold-underlined
r1_data = [
    ("Na zagraniczne wakacje planuje wyjechać tego lata tylko 18 proc. Polaków. W tym sezonie wypoczynek z biurami podróży kosztuje średnio 3,5 tysiąca złotych za osobę. Rok temu podobne oferty można było kupić ponad 500 złotych taniej, a biura podróży dodatkowo oferowały wiele promocji.",
     "https://businessinsider.com.pl/poradnik-finansowy/wakacje-za-25-tys-zl-sprawdz-dokad-mozesz-za-to-poleciec/jn109cj",
     "Z tego tekstu wynika, że w tym roku", ["wakacje poza Polską nie są popularne.", "ponad połowa Polaków skorzysta z ofert biura podróży.", "biura podróży obniżyły ceny wyjazdów za granicę."], "a"),
    ("W Gdyni mieszkańcy i turyści cieszą się nie tylko licznymi ścieżkami rowerowymi, czystym powietrzem, ale także nowoczesnością. Dobrze rozwinięta komunikacja miejska ułatwia codzienne funkcjonowanie. W mieście znajduje się wiele sklepów, punktów usługowych, zakładów pracy, a także najlepsze w regionie szkoły podstawowe.",
     "https://www.money.pl/gospodarka/dolacz-do-najszczesliwszych-ludzi-w-polsce-wyjatkowa-inwestycja-mieszkaniowa-w-gdyni-6903608397404864a.html",
     "Z tego tekstu wynika, że w Gdyni", ["mieszkańcy wolą jeździć do pracy rowerami.", "potrzebne są inwestycje w komunikację miejską.", "dzieci mają szansę na dobre wykształcenie."], "c"),
    ("Catering dietetyczny to najlepszy wybór dla ludzi zapracowanych, którzy chcą odżywiać się zdrowo, ale nie mogą spędzać wielu godzin w kuchni. Zestawy posiłków są przygotowywane przez dietetyków, którzy wiedzą, jak najlepiej skomponować jedzenie na cały dzień.",
     "https://portal.abczdrowie.pl/catering-dietetyczny-w-trosce-o-twoje-zdrowie",
     "Z tego tekstu wynika, że", ["firmy płacą pracownikom za catering.", "w cateringu dietetycznym nie ma śniadania.", "niektórym brakuje czasu na gotowanie w domu."], "c"),
    ("Zbliża się 16. edycja Nocy Teatrów. To wyjątkowe wydarzenie, podczas którego mieszkańcy Krakowa i turyści mogą zupełnie za darmo zobaczyć przedstawienia przygotowane przez krakowskie teatry. W tym czasie odbywają się również spotkania z aktorami i ludźmi teatru oraz multimedialne prezentacje.",
     "https://lovekrakow.pl/aktualnosci/noc-teatrow-ponad-60-spektakli-i-pokazow-plenerowych-w-jedna-czerwcowa-noc_51293.html",
     "Z tego tekstu wynika, że", ["aktorzy będą udzielać wywiadów krakowskim mediom.", "nie trzeba płacić za oglądanie przedstawień teatralnych.", "spektakle są prezentowane przez teatry z całej Polski."], "b"),
    ("Firma „Sokołów” zaprasza rodziców i dzieci do Akademii Sokolika, w której maluchy poprzez zabawę będą odkrywać zasady zdrowego stylu życia. Uczestnicy dowiedzą się, dlaczego codzienna aktywność fizyczna jest podstawą dobrego samopoczucia, poznają przepisy na nowe dania z ulubionymi składnikami i samodzielnie je ugotują.",
     "https://kuchnia.wp.pl/wspolna-zabawa-i-gotowanie-akademia-sokolika-czeka-na-malych-i-duzych-6896544681843488a",
     "Z tego tekstu wynika, że", ["dzieci będą przygotowywać dania, które dobrze znają i lubią.", "firma „Sokołów” proponuje zajęcia edukacyjne połączone z zabawą.", "opiekunowie dzieci nie mogą uczestniczyć w zajęciach."], "b"),
]
r1_key = "a c c b b".split()
assert [x[4] for x in r1_data] == r1_key
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 9, "pdfPages": [9, 10],
    "example": r1_ex,
    "items": [{"id": f"r1.{i+1}", "number": i + 1, "passage": {"text": t, "source": src_(u)}, "prompt": p, "options": OPT(*o), "answer": a}
              for i, (t, u, p, o, a) in enumerate(r1_data)],
}

# ---- r2: TAK/NIE on one text
r2_lines = after_points(between(test, r"II\. Proszę przeczytać tekst", r"Na podstawie: https://swps"))
r2_title = r2_lines[0].strip()
assert r2_title == "Projekt RESQL"
r2_text = paras_by_indent(r2_lines[1:])
assert len(r2_text) == 5, r2_text
r2_stm = ["Cyberprzemoc jest rodzajem agresji najłatwiejszym do rozpoznania.", "Obecnie jest coraz mniej miejsc, w których uczniowie czują się bezpieczni.",
          "W powstaniu programu RESQL brali udział wykładowcy, nauczyciele i uczniowie.",
          "Aplikacja RESQL automatycznie informuje nauczycieli i rodziców o problemach uczniów.",
          "Program RESQL oferuje także gotowe propozycje lekcji dla nauczycieli.", "Aplikacja jest jeszcze testowana na polskich uniwersytetach."]
r2_key = "NIE TAK TAK NIE TAK NIE".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 11,
    "title": r2_title,
    "source": "Na podstawie: https://swps.pl/uczelnia/aktualnosci-uniwersytet-swps/23003-aplikacja-resql-stop-przemocy-w-polskich-szkolach",
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "Agresja fizyczna wśród uczniów pojawia się dopiero w szkole średniej.", "answer": "NIE", "shown": True},
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
}

# ---- r3: fragments -> gaps
r3_lines = after_points(between(test, r"III\. Proszę przeczytać tekst i", r"^\s*https://www\.national-geographic"))
r3_text = "\n\n".join(paras_by_indent(r3_lines))
r3_text = re.sub(r"\[_{2}C_{2}\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\](\d)", r"{{\1}}", r3_text)
r3_frag = {"A": "takie rozwiązanie było nierealne", "B": "jak ludzie zareagują", "C": "z pięciu dni do czterech",
           "D": "że skrócenie tygodnia pracy", "E": "testuje się możliwości wykonywania pracy", "F": "ale też zdrowie badanych",
           "G": "że mieli większą ochotę", "H": "bo wcześniej w wielu miejscach"}
r3_key = "A E B F D G H".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–H).",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 12,
    "source": "https://www.national-geographic.pl/artykul/wielka-brytani-testuje-skrocony-tydzien-pracy-to-najwiekszy-taki-eksperyment-do-tej-pory-220607044048",
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "C", "shown": True},    # printed in the text: [__C__]PRZYKŁAD
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
    "pdfNotes": ["The printed source line has no 'Na podstawie:' prefix in this session."],
}

# ---- r4: titles -> paragraphs (PDF p.13; letters are in the middle column of the table)
r4_par = {
    "A": "Jack's przypomina połączenie rockowego klubu z oglądaniem filmu na świeżym powietrzu w fotelach samochodowych. Przyjdź na burgera w amerykańskim stylu i przy okazji obejrzyj dobry film.",
    "B": "„Przystanek Cafe” to kawiarnia zorganizowana w autobusie. Jego wnętrze przeszło dużą zmianę, a w menu znajdziemy typowe dania barowe.",
    "C": "Restauracja Shabu-shabu oferuje – znany z kuchni japońskiej – styl przygotowywania potraw. Częścią stołu jest specjalny garnek, do którego goście wlewają bulion, a następnie dodają mięso, warzywa czy grzyby.",
    "D": "Masz dość czekania na kolejne piwo? W takim razie nalej je sobie sam! The Alchemist oferuje taką możliwość, a wszystko to dzięki specjalnej ścianie z 8 kranami.",
    "E": "Pizza, pasta, wino to pierwsza w Polsce restauracja z pizzą, którą sami skomponujemy i zamówimy za pomocą tabletu. Wybieramy składniki, które lubimy i za każdym razem cieszymy się zupełnie innym daniem!",
    "F": "W M. Cafe mieszkają koty, które można brać na ręce i głaskać. W ich towarzystwie wypijemy kawę lub herbatę i zjemy pyszną wegetariańską kanapkę lub inne wegańskie potrawy.",
    "G": "Dobro & Dobro Cafe to najmniejsza kawiarnia w Polsce, a jej założyciele to małżeństwo z Ukrainy. W ofercie: smaczna kawa i możliwość porozmawiania z miłymi właścicielami.",
    "H": "W Dine in dominują węgierskie potrawy, chociaż goście i tak nie widzą, co jedzą. W restauracji jest bardzo mało światła, a szef kuchni specjalnie nie zdradza menu, by nie popsuć niespodzianki.",
}
r4_titles = ["Niewiele miejsca, dużo serdeczności", "Technologia i kuchnia", "Sala kinowa w środku restauracji", "Kolacja w ciemności",
             "Ugotuj to sam", "Tu szklanki zawsze są pełne", "W nietypowym towarzystwie i bez mięsa"]
r4_key = "G E A H C D F".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 13,
    "source": "Na podstawie: https://warszawa.naszemiasto.pl/najdziwniejsze-restauracje-w-warszawie-obiad-w-ciemnosci-50/ga/c11-4659895/zd/32541219",
    "heading": "Nietypowe restauracje w Warszawie",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Dla fanów komunikacji miejskiej", "answer": "B", "shown": True},   # PDF p.13: row B shaded + answer table 'B'
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
}

# ---- r5: inline choice (PRZYKŁAD: odpowiedź, PDF p.14)
r5_raw = paras_by_indent(after_points(between(test, r"V\. Proszę – zgodnie z przykładem – podkreślić najlepszą", r"Na podstawie: https://wszechmocne")))
r5_title = r5_raw[0] if r5_raw[0].startswith("Ile jest") else None
assert r5_title, r5_raw[:2]
r5_pass, r5_bl = cloze_choice("\n\n".join(r5_raw[1:]))
set_answers(r5_bl, "są różnica pogodzie czas daje spada specjalistom ciągle nigdy zmiany".split(), {"ex": "odpowiedź"})
r5 = {
    "id": "r5", "number": "V", "type": "clozeChoice", "grading": "auto",
    "instruction": "V. Proszę – zgodnie z przykładem – podkreślić najlepszą spośród możliwości podanych w nawiasach.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 14,
    "title": r5_title,
    "source": "Na podstawie: https://wszechmocne.pl/cztery-szesc-osiem-ile-tak-naprawde-mamy-por-roku/",
    "passage": r5_pass, "blanks": r5_bl,
    "pdfNotes": ["Passage prints „Pracownicy Instytut Meteorologii” (sic); kept verbatim."],
}
reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [9, 14], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
# ---- g1: declension (examples underlined PDF p.16: edukacji / nowoczesna / swoje)
g1_raw = paras_by_blank(after_points(between(test, r"I\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych", r"Na podstawie: U króla")))
g1_pass, g1_bl = cloze_choice("\n\n".join(g1_raw))
set_answers(g1_bl, "tym rodziny Jego zasadą artyści nimi materiałów żydowskiej zabawy bezpłatne".split(),
            {"ex1": "edukacji", "ex2": "nowoczesna", "ex3": "swoje"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 16,
    "source": "Na podstawie: U króla Maciusia | Muzeum Historii Żydów Polskich POLIN w Warszawie oraz „U króla Maciusia\" - zajrzyj do muzeum POLIN - RMF 24",
    "passage": g1_pass, "blanks": g1_bl,
}

# ---- g2: conjunctions from a box (example: żeby, in the title)
g2_raw = join(after_points(between(test, r"II\. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki \(spójniki\)", r"Na podstawie: https://edytazajac")))
g2_box = "więc żeby bo dlaczego ale że które"
assert g2_raw.startswith(g2_box + " ")
g2_raw = g2_raw[len(g2_box) + 1:]
g2_raw = re.sub(r"\s*[….]{3,}\s*(\d)", r" {{\1}}", g2_raw)
g2_raw = g2_raw.replace("żeby PRZYKŁAD", "{{ex}}")
g2_raw = re.sub(r"\s+", " ", g2_raw).replace(" {{ex}} osiągnąć sukces? ", " {{ex}} osiągnąć sukces?\n\n", 1)
g2 = {
    "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
    "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 16,
    "source": "Na podstawie: https://edytazajac.pl/jak-zaplanowac-przyszlosc/",
    "wordBox": g2_box.split(), "distractors": ["dlaczego"],
    "passage": g2_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "żeby"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("bo które że ale więc".split())],
    "pdfNotes": ["The example gap sits in the passage heading ('Jak zaplanować przyszłość, żeby osiągnąć sukces?'), which is therefore the first paragraph of the passage."],
}

# ---- g3: comparison (examples: lepiej / bardziej relaksująca)
g3_raw = paras_by_indent(after_points(between(test, r"III\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów", r"Na podstawie: https://autokult")))
g3_pass, g3_bl = cloze_choice("\n\n".join(g3_raw))
set_answers(g3_bl, "więcej tańszy modniejsze Najwygodniejszym najdokładniej".split(), {"ex1": "lepiej", "ex2": "bardziej relaksująca"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "source": "Na podstawie: https://autokult.pl/podrozowanie-samochodem-dlaczego-warto,6878448824482624a",
    "passage": g3_pass, "blanks": g3_bl,
}

# ---- g4: verbs (present & future); examples in the text: Zgadzają się / będzie wyglądała / zmieni się
g4_raw = join(after_points(between(test, r"IV\. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi", r"Na podstawie: https://special\.gazeta")))
g4_raw = g4_raw.replace("Zgadzają się (zgadzać się)PRZYKŁAD", "{{ex1}}").replace("będzie wyglądała (wyglądać)PRZYKŁAD", "{{ex2}}").replace("zmieni się (zmienić się)PRZYKŁAD", "{{ex3}}")
g4_given = {}
def g4_rep(m):
    g4_given[m[1]] = re.sub(r"\s+", " ", m[2]).strip()
    return " {{%s}}" % m[1]
g4_raw = re.sub(r"\s*[….]{3,}\s*(\d+)\s*\(([^()]*)\)\s*\1", g4_rep, g4_raw)
g4_raw = re.sub(r"\s+", " ", g4_raw)
assert sorted(g4_given, key=int) == [str(i) for i in range(1, 11)], g4_given
g4_ans = {"1": "zostawimy", "2": "decyduje", "3": "będą się zdarzały", "4": "zareagują", "5": "zrozumieją",
          "6": "będziemy musieli", "7": "niszczą", "8": "spada", "9": "brakuje", "10": "myślimy"}
g4_ex = [("ex1", "zgadzać się", "Zgadzają się"), ("ex2", "wyglądać", "będzie wyglądała"), ("ex3", "zmienić się", "zmieni się")]
g4 = {
    "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
    "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przyszły).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17, "pdfPages": [17, 18],
    "source": "Na podstawie: https://special.gazeta.pl/special/7,169150,24641572,ziemia-za-20-30-i-50-lat-jaki-swiat-zostawimy-naszym-dzieciom.html",
    "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
    "passage": g4_raw,
    "blanks": [{"id": i, "example": True, "given": g, "answer": a} for i, g, a in g4_ex]
              + [{"id": k, "given": g4_given[k], "answer": g4_ans[k], **({"accept": ["będą się zdarzać"]} if k == "3" else {})} for k in map(str, range(1, 11))],
    "pdfNotes": ["Key item 3 prints 'będą się zdarzały/zdarzać' (alternative without spaces around '/'); stored as answer + accept (crosscheck_keys splits alternatives only at ' / ' and reports this one item)."],
}

# ---- g5: ask about the underlined part
g5_q = [  # (sentence, underlined, stem, short answer, key, accept)
    ("Magda najbardziej lubi mleczną czekoladę.", "mleczną", "…………… czekoladę Magda lubi najbardziej?", "Mleczną.", "Jaką", []),
    ("Byłam wczoraj w kinie z siostrą Adama.", "z siostrą Adama", "…………… byłaś wczoraj w kinie?", "Z siostrą Adama.", "Z kim", []),
    ("Anna spotkała na spacerze swoją nauczycielkę.", "swoją nauczycielkę", "…………… Anna spotkała na spacerze?", "Swoją nauczycielkę.", "Kogo", []),
    ("Chłopcy marzą o nocnej wyprawie do lasu.", "o nocnej wyprawie do lasu", "…………… marzą chłopcy?", "O nocnej wyprawie do lasu.", "O czym", []),
    ("Za dwa tygodnie zaczynają się egzaminy maturalne.", "Za dwa tygodnie", "…………… zaczynają się egzaminy maturalne?", "Za dwa tygodnie.", "Kiedy", ["Za ile tygodni", "Za ile czasu"]),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Jerzy pracuje w szpitalu wojewódzkim.", "underlined": "w szpitalu wojewódzkim",
                "stem": "…………… pracuje Jerzy?", "shortAnswer": "W szpitalu wojewódzkim.", "answer": "Gdzie", "shown": True},   # PDF p.18: 'Gdzie' underlined
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": ac}
              for i, (s, u, st, sa, a, ac) in enumerate(g5_q)],
    "pdfNotes": ["Official key prints the question word with decoration (Jaką...?, Z kim…?); stored without it, match.stripChars ignores the decoration. Item 5 key lists three alternatives: Kiedy / Za ile tygodni / Za ile czasu."],
}

# ---- g6: transformation (key = model sentence + rubric per item)
g6_data = [
    ("Anna ma na sobie strój kąpielowy.", "ubrana", "Anna jest ubrana w stój kąpielowy.",
     "dodanie czasownika i przyimka (2 x 0,25) + 2 x brak transformacji (2 x 0,25)",
     [("dodanie czasownika i przyimka", 0.5), ("2 x brak transformacji", 0.5)]),
    ("Wczoraj pojechaliśmy na wycieczkę rowerową do lasu.", "byliśmy", "Wczoraj byliśmy na wycieczce rowerowej w lesie.",
     "3 transformacje (3 x 0,25) + zmiana przyimka 0,25 p.", [("3 transformacje", 0.75), ("zmiana przyimka", 0.25)]),
    ("Hobby Dawida to gry komputerowe.", "interesuje się", "Dawid interesuje się grami komputerowymi.",
     "usunięcie konstrukcji „hobby to…” 0,25 p. + 3 transformacje (3 x 0,25)", [("usunięcie konstrukcji „hobby to…”", 0.25), ("3 transformacje", 0.75)]),
    ("Jej mąż jest dyrektorem w dużej firmie energetycznej.", "kieruje", "Jej mąż kieruje dużą firmą energetyczną.",
     "usunięcie przyimka 0,25 p. + 3 transformacje (3 x 0,25)", [("usunięcie przyimka", 0.25), ("3 transformacje", 0.75)]),
    ("Czy masz jeszcze stary adres mailowy?", "korzystać", "Czy korzystasz jeszcze ze starego adresu mailowego?",
     "dodanie przyimka 0,25 p. + 3 transformacje (3 x 0,25)", [("dodanie przyimka", 0.25), ("3 transformacje", 0.75)]),
]
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 19,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Niebieska sukienka jest dużo ładniejsza niż tamta żółta.", "hint": "od",
                "answer": "Niebieska sukienka jest dużo ładniejsza od tamtej żółtej.", "shown": True},
    "items": [{"id": f"g6.{i+1}", "number": i + 1, "source": s, "hint": h, "answer": a, "rubric": r,
               "rubricParts": [{"what": w_, "points": p} for w_, p in parts]} for i, (s, h, a, r, parts) in enumerate(g6_data)],
    "pdfNotes": ["Model answer 1 prints „stój kąpielowy” (sic) in the official key; kept verbatim."],
}

# ---- g7: aspect & mood dialogue (examples: Powiedz / chcieliby)
g7_lines = after_points(between(test, r"VII\. Proszę – zgodnie z przykładami", r"^VIII\."))
g7_turns, cur = [], []
for l in g7_lines:
    if re.match(r"^(Babcia Zosia|Krzysztof):", l.strip()) and cur:
        g7_turns.append(join(cur)); cur = []
    if l.strip():
        cur.append(l)
g7_turns.append(join(cur))
g7_turns = [re.sub(r"\)\s+(\d+)", r")\1", t) for t in g7_turns]
g7_pass, g7_bl = cloze_choice("\n\n".join(g7_turns))
set_answers(g7_bl, "budził musiałbym zaproponowałaby wolał Jedźcie pozwalali byłoby zdecyduje".split() + ["martw się", "Daj"],
            {"ex1": "Powiedz", "ex2": "chcieliby"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 20,
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: prepositions from a box (example: w)
g8_s = next(i for i, l in enumerate(test) if re.match(r"^VIII\. Proszę", l))
g8_e = next(i for i in range(g8_s, len(test)) if "Państwowa Komisja" in test[i])
g8_raw = join(after_points(test[g8_s:g8_e]))
g8_box = "dla przed w na przy wśród przez"
assert g8_raw.startswith(g8_box + " "), g8_raw[:50]
g8_raw = g8_raw[len(g8_box) + 1:]
g8_raw = re.sub(r"\s*[….]{3,}\s*(\d)", r" {{\1}}", g8_raw)
g8_raw = g8_raw.replace("w PRZYKŁAD dniach", "{{ex}} dniach")
g8_raw = re.sub(r"\s+", " ", g8_raw)
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeBox", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (przyimki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 21,
    "wordBox": g8_box.split(), "distractors": ["przy"],
    "passage": g8_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "w"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("na przez dla wśród przed".split())],
    "pdfNotes": ["Key prints 'Na' and 'Przed' capitalised (sentence start); stored in box casing."],
}

grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [16, 21], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING (prompts: test.txt p.23; targets = bare numbers in the right column)
w_sets = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "e-mail", "wordTarget": 40, "prompt": "Mama Pani/Pana koleżanki/kolegi z Polski obchodzi urodziny. Proszę napisać do niej e-mail z życzeniami z tej okazji."},
        {"id": "b", "genre": "esej", "wordTarget": 160, "prompt": "„Zwierzę w domu”. Proszę napisać esej (wypracowanie szkolne) na ten temat.", "title": "Zwierzę w domu"}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 40, "prompt": "Śpiewa Pani/Pan w zespole muzycznym „Trio”. Proszę napisać ogłoszenie o koncercie, które zamieści Pani/Pan w internecie."},
        {"id": "b", "genre": "charakterystyka", "wordTarget": 160, "prompt": "„Lubię z nią/nim pracować”. Proszę napisać charakterystykę takiej osoby.", "title": "Lubię z nią/nim pracować"}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "pozdrowienia", "wordTarget": 30, "prompt": "Wyjechała Pani / wyjechał Pan na kilka dni, żeby odpocząć w gospodarstwie agroturystycznym. Proszę napisać pozdrowienia do polskich przyjaciół, które wyśle Pani/Pan pocztą tradycyjną."},
        {"id": "b", "genre": "opowiadanie", "wordTarget": 170, "prompt": "Proszę napisać opowiadanie zaczynające się od słów: „Tego dnia jechałam/jechałem pociągiem …”.", "startsWith": "Tego dnia jechałam/jechałem pociągiem …"}]},
]
w = writing_task(w_sets, [23, 29])
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [22, 29], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "listopad 2023", "examDates": "18-19.11.2023",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear; listening II (6 pauses) and V (3 pauses = 4 persons) item chunks match the expected counts, V has long 8-12 s pauses.",
                       "Listening V has 4 persons and 5 opinions (A-E), key rows without asterisk (B: 1, 4) -> unordered sets.",
                       "Reading III prints the source URL without the 'Na podstawie:' prefix; reading IV: option letters sit in the middle column of the table."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
    # data/manifest.js is NOT touched by this builder (shared file, merged by the coordinator): entry {"id": SID, "label": "listopad 2023"}
