#!/usr/bin/env python3
"""Builds data/2024-06.js. Run from anywhere: python3 tools/build_2024_06.py
Content = verbatim from sources/2024-06/test.txt (+ PDF page images for underlined/bold PRZYKŁAD answers),
keys = official 'Klucz do zadań' in transcript.txt. Adapted from tools/build_2024_02.py (docs/conversion-recipe.md).
NOTE: data/manifest.js is intentionally NOT touched by this builder (merged by the coordinator)."""
import json, sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2024-06"
test = clean_lines(read(SID, "test.txt"))
OPT = lambda *texts: [{"id": "abc"[i], "text": t} for i, t in enumerate(texts)]
tr_all = clean_lines(read(SID, "transcript.txt"))


def mc_item(tid, n, prompt, opts, ans, **kw):
    return {"id": f"{tid}.{n}", "number": n, "prompt": prompt, "options": OPT(*opts), "answer": ans, **kw}


nb = lambda ls: [l for l in ls if l.strip()]


def tr_block(roman):
    """TRANSKRYPCJA <roman> lines without wrapped-URL tails ('Na podstawie' + the following hyphenated tail)."""
    b = transcript_block(SID, roman)
    return [l for l in b if not re.fullmatch(r"[\w,.%-]+-[\w,.%-]+", l.strip())]


def cloze_form(raw):
    """clozeForm passage: examples are printed filled in ('widzą (widzieć)PRZYKŁAD'); gaps are dotted '....N (hint)N'."""
    blanks, n = [], [0]

    def ex(m):
        n[0] += 1
        bid = f"ex{n[0]}"
        blanks.append({"id": bid, "example": True, "given": m.group(2), "answer": m.group(1)})
        return "{{%s}}" % bid
    raw = re.sub(r"(\S+)\s*\(([^()]*)\)\s*PRZYKŁAD", ex, raw)

    def gap(m):
        assert m.group(1) == m.group(3), m.group(0)
        blanks.append({"id": m.group(1), "given": m.group(2).strip()})
        return "{{%s}}" % m.group(1)
    raw = re.sub(r"\.{4,}\s*(\d+)\s*\(([^()]*)\)\s*(\d+)", gap, raw)
    raw = re.sub(r"\s+([,.;:?!])", r"\1", raw)
    return raw, blanks


# =============================================================== LISTENING
# ---- l1: 14 single utterances (transcript.txt TRANSKRYPCJA I: "n. text (K)")
l1_tr = {}
for l in tr_block("I"):
    m = re.match(r"^\s*(Przykład:|\d+\.)\s*(.*?)\s*\(([KM])\)\s*$", l)
    assert m, l
    l1_tr["ex" if m[1] == "Przykład:" else int(m[1][:-1])] = {"sp": m[3], "t": m[2]}
assert len(l1_tr) == 15
l1_items = [
    ("Ta wypowiedź jest typowa", ["w bibliotece.", "w księgarni.", "w biurze."]),
    ("Ta wypowiedź oznacza", ["smutek.", "zdenerwowanie.", "radość."]),
    ("Ta wypowiedź to fragment rozmowy", ["o wakacjach.", "o pracy.", "o spotkaniu."]),
    ("Ta wypowiedź oznacza, że ona", ["kończy rozmowę.", "wszystko usłyszała.", "prosi o powtórzenie."]),
    ("Ta wypowiedź oznacza, że lekarz przyjmuje", ["po południu.", "codziennie.", "raz w tygodniu."]),
    ("Ta wypowiedź oznacza, że osoba", ["czuje się dobrze.", "ma gorączkę.", "narzeka na pogodę."]),
    ("Ta wypowiedź oznacza, że osoba", ["będzie sama gotować.", "nie planuje zmian.", "planuje zacząć dietę."]),
    ("Ta wypowiedź oznacza, że", ["bilety wstępu są wliczone w cenę.", "za muzea płaci się dodatkowo.", "bilety do muzeów są bardzo tanie."]),
    ("Ta wypowiedź oznacza, że siatkarze", ["wygrali zawody.", "przegrali mecz.", "mają drugie miejsce."]),
    ("Ta wypowiedź jest typowa", ["u ortopedy.", "w salonie urody.", "na sali gimnastycznej."]),
    ("Ta wypowiedź oznacza, że w biurze", ["działa klimatyzacja.", "jest dobra atmosfera.", "jest świeże powietrze."]),
    ("Ta wypowiedź jest typowa dla", ["policjanta.", "taksówkarza.", "konduktora."]),
    ("Ta wypowiedź to", ["krytyka.", "komplement.", "rada."]),
    ("Ta wypowiedź jest typowa dla", ["nauczyciela.", "rodzica.", "pielęgniarki."]),
]
l1_key = "a c b c a b c b a c b c b a".split()
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
    "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 4,
    "audio": task_audio(SID, "I", ["l1.ex"] + [f"l1.{i}" for i in range(1, 15)]),
    "example": {"id": "l1.ex", "prompt": "Ta wypowiedź jest typowa", "options": OPT("w cukierni.", "w drogerii.", "w kwiaciarni."),
                "answer": "a", "shown": True, "transcript": l1_tr["ex"]},   # PDF p.4: option a bold-underlined
    "items": [mc_item("l1", i + 1, p, o, l1_key[i], transcript=l1_tr[i + 1]) for i, (p, o) in enumerate(l1_items)],
}

# ---- l2: 6 dialogues (example + 6 pairs; example: both lines tagged (K) in the official transcript)
l2_lines = [re.match(r"^\s*(?:Przykład:|\d+\.)?\s*–\s*(.*?)\s*\(([KM])\)\s*$", l) for l in tr_block("II") if "–" in l]
assert len(l2_lines) == 14 and all(l2_lines)
l2_pairs = [[{"sp": m[2], "t": m[1]} for m in l2_lines[i:i + 2]] for i in range(0, 14, 2)]
l2_key = "c b b c b a".split()
l2_items = [
    ("Z tego dialogu dowiadujemy się, że mężczyzna", ["spóźnił się pierwszy raz.", "szedł pieszo do pracy.", "czasami się spóźnia."]),
    ("Z tego dialogu dowiadujemy się, że", ["obraz jest bardzo drogi.", "mężczyzna chciałby kupić obraz.", "można kupić ten obraz."]),
    ("Z tego dialogu dowiadujemy się, że on", ["wie, o której będzie koniec filmu.", "nie jest pewny, o której kończy się film.", "nie pamięta tytułu filmu."]),
    ("Z tego dialogu dowiadujemy się, że", ["kobieta nie chce jechać taksówką do ZOO.", "autobus jedzie najszybciej.", "mężczyzna poleca taksówkę."]),
    ("Z tego dialogu dowiadujemy się, że", ["on zachęca ją do pracy.", "ona się z nim zgadza.", "ona jest zadowolona z oferty pracy."]),
    ("Z tego dialogu dowiadujemy się, że ona", ["jeszcze nie zdecydowała.", "uważa, że to dobry pomysł.", "nie chce się przeprowadzać."]),
]
l2 = {
    "id": "l2", "number": "II", "type": "mc", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać dialogów i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "plays": 2, "pdfPage": 5,
    "audio": task_audio(SID, "II", ["l2.ex"] + [f"l2.{i}" for i in range(1, 7)]),
    "example": {"id": "l2.ex", "prompt": "Z tego dialogu dowiadujemy się, że",
                "options": OPT("klientce podobają się granatowe spodnie.", "klientka potrzebuje większego rozmiaru spodni.", "klientka nie chce granatowych spodni."),
                "answer": "c", "shown": True,   # PDF p.5: option c bold-underlined
                "transcript": {"lines": l2_pairs[0]}},
    "items": [mc_item("l2", i + 1, p, o, l2_key[i], transcript={"lines": l2_pairs[i + 1]}) for i, (p, o) in enumerate(l2_items)],
}

# ---- l3: interview MC (Dziennikarz / Ekspert, later Dz: / E:)
l3_tr = speaker_lines(tr_block("III"), {"Dz": "Dziennikarz", "E": "Ekspert"})
assert [x["sp"] for x in l3_tr] == ["Dziennikarz", "Ekspert"] * 4, [x["sp"] for x in l3_tr]
l3_key = "b c a b c".split()
l3_items = [
    ("Warunki programu „Dom za 1 euro”", ["są takie same dla całego kraju.", "są inne dla każdej miejscowości.", "zmieniają się co rok."]),
    ("Remont domu", ["nie jest obowiązkowy.", "muszą zaakceptować mieszkańcy miasta.", "trzeba skończyć w określonym czasie."]),
    ("„Domy za 1 euro” znajdują się w miastach,", ["w których mieszka mało ludzi.", "które są popularne wśród turystów.", "w których mieszka dużo studentów."]),
    ("Program „Dom za 1 euro” jest", ["dostępny tylko dla Europejczyków.", "znany na całym świecie.", "najbardziej popularny wśród Włochów."]),
    ("Tradycyjny zakup nieruchomości", ["jest popularny wśród Polaków.", "jest skomplikowany na południu Włoch.", "ma więcej zalet niż program „Dom za 1 euro”."]),
]
l3 = {
    "id": "l3", "number": "III", "type": "mc", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wywiadu na temat domów za 1 euro we Włoszech.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 6,
    "source": "Na podstawie: https://wloskiedomy.pl/domy-za-1-euro-we-wloszech/",
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_tr},
    "example": {"id": "l3.ex", "prompt": "„Dom za 1 euro” to inicjatywa, w której włoskie gminy",
                "options": OPT("szukają nowych mieszkańców miasteczek.", "promują małe miasteczka na świecie.", "oddają stare domy za paczkę kawy."),
                "answer": "a", "shown": True},   # PDF p.6: option a bold-underlined
    "items": [mc_item("l3", i + 1, p, o, l3_key[i]) for i, (p, o) in enumerate(l3_items)],
}

# ---- l4: TAK/NIE on an interview (Dziennikarka / Trener; later 'Dz.:' / 'T.:')
l4_blk = [re.sub(r"^(Dz|T)\.:", r"\1:", l.strip()) for l in tr_block("IV")]
l4_tr = speaker_lines(l4_blk, {"Dz": "Dziennikarka", "T": "Trener"})
assert [x["sp"] for x in l4_tr] == ["Dziennikarka", "Trener"] * 6, [x["sp"] for x in l4_tr]
l4_stm = ["Mężczyzna nie startuje w zawodach z powodu wieku.", "W mieście jest dużo siłowni na świeżym powietrzu.",
          "Przed marszem można zrezygnować z dodatkowych ćwiczeń mięśni.", "Krótkie treningi nie dają dobrych rezultatów.",
          "Mężczyzna poleca dobre jedzenie zamiast suplementów.", "Według trenera powinno się ćwiczyć każdego dnia."]
l4_key = "NIE TAK NIE TAK TAK NIE".split()   # key table: X column per row
l4 = {
    "id": "l4", "number": "IV", "type": "tf", "grading": "auto",
    "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę posłuchać rozmowy z trenerem sportowym na temat aktywności fizycznych wiosną i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "plays": 2, "pdfPage": 7,
    "source": "Na podstawie: https://trendyradio.pl/pl/audycje-gosc-dnia/1/krosno/22579/wiosna-to-dobry-czas-na-sport",
    "audio": task_audio(SID, "IV"),
    "transcript": {"lines": l4_tr},
    "example": {"id": "l4.ex", "statement": "Trener poleca szybsze lub wolniejsze bieganie każdemu.", "answer": "NIE", "shown": True},   # PDF p.7: X in NIE
    "items": [{"id": f"l4.{i+1}", "number": i + 1, "statement": s, "answer": l4_key[i]} for i, s in enumerate(l4_stm)],
}

# ---- l5: persons -> statements (5 persons, 4 statements A-D)
l5_lines = []
for l in tr_block("V"):
    m = re.match(r"^(Osoba \d)\s*\(\s*([KM])\)\s*$", l.strip())
    if m:
        l5_lines.append({"sp": f"{m[1]} ({m[2]})", "t": ""})
    else:
        l5_lines[-1]["t"] += " " + l.strip()
for o in l5_lines:
    o["t"] = o["t"].strip()
assert len(l5_lines) == 5
l5_st = [("A", "kupuje naturalne produkty.", ["5"], False), ("B", "zwraca uwagę na ceny produktów.", ["2", "4"], True),
         ("C", "zwykle wybiera najnowsze modele.", ["1", "3"], True), ("D", "poszukuje oryginalnych i wyjątkowych rzeczy.", ["1"], False)]
l5 = {
    "id": "l5", "number": "V", "type": "matchMulti", "grading": "auto",
    "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać tekstu na temat preferencji zakupowych Polaków i dopasować osoby (1-5) do ich opinii (A-E). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
    "pointsFormula": "6 x 1 p.", "pointsPerSlot": 1, "maxPoints": 6, "plays": 2, "pdfPage": 8,
    "audio": task_audio(SID, "V", [f"p{i}" for i in range(1, 6)]),
    "persons": [{"id": str(i), "label": f"osoba {i}"} for i in range(1, 6)],
    "example": {"id": "l5.ex", "statement": "to entuzjastka nowych technologii.", "answer": ["3"], "shown": True},   # PDF p.8: [___3___]
    "statements": [{"id": f"l5.{k}", "letter": k, "text": t, "slots": len(a), "answer": a, "anyOrder": True, "starred": s} for k, t, a, s in l5_st],
    "keyNote": "*kolejność odpowiedzi dowolna",
    "transcript": {"lines": l5_lines},
    "pdfNotes": ["Printed prompt says opinions '(A-E)' although the table has only A–D (official typo, kept verbatim)."],
}

listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [4, 8], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
src_ = lambda s: "Na podstawie: " + s
r1_ex = {"id": "r1.ex",
         "passage": {"text": "Szukasz dla siebie swetra lub spodni, ale chcesz też zaoszczędzić? Zapraszamy na wymianę używanych ubrań! Spotkamy się w najbliższą sobotę o 15:00 w klubie „Lamus”, wypijemy pyszną kawę, porozmawiamy, spędzimy miłe popołudnie. Wymiana odbywa się bez pieniędzy.",
                     "source": src_("https://odracentrum.org/wymiana-ubran-w-odra-centrum-zerowaste/")},
         "prompt": "Z tego tekstu wynika, że",
         "options": OPT("nie poznasz innych uczestników akcji.", "ubrań nie będzie można kupować.", "przekazać można tylko nową odzież."),
         "answer": "b", "shown": True}   # PDF p.10: option b bold-underlined
r1_data = [
    ("Bilety na komunikację są drogie. Jednak lepiej je kupić niż denerwować się, że spotkamy kontrolera. W Gdańsku brak biletu na przejazd może nas kosztować nawet 300 złotych. Warto jednak pamiętać, że kwota będzie niższa, jeśli zapłacimy mandat od razu lub najpóźniej w ciągu 7 dni.",
     "https://www.trojmiasto.pl/wiadomosci/Nawet-300-zl-za-jazde-bez-waznego-biletu-Trojmiasto-walczy-z-gapowiczami-n186608.html",
     "Z tego tekstu wynika, że w Gdańsku wysokość mandatu", ["jest zawsze taka sama.", "zależy od terminu zapłaty.", "zależy od kontrolera."], "b"),
    ("W ostatnim meczu polska tenisistka Iga Świątek w pięknym stylu pokonała swoją rywalkę i bez problemu awansowała do finału turnieju w Dubaju. Sukces był wyjątkowy także z innego powodu – Polka kontynuuje szczęśliwą serię zwycięstw, która trwa od października ubiegłego roku.",
     "https://www.sport.pl/tenis/7,64987,30726107,13-0-imponujacy-dorobek-igi-swiatek.html",
     "Z tego tekstu wynika, że Iga Świątek", ["nie przegrała meczu od zeszłego roku.", "wygrała turniej tenisa organizowany w Dubaju.", "zagrała ostatni raz w tym turnieju."], "a"),
    ("Nowe badania na temat emocji oraz zdrowia psychicznego dzieci pokazują, że w najlepszej sytuacji są te bez rodzeństwa lub z tylko jednym bratem lub jedną siostrą. Specjaliści uważają też, że duża różnica wieku między rodzeństwem wpływa negatywnie na stan psychiczny najmłodszych.",
     "https://www.mjakmama24.pl/aktualnosci/liczne-rodzenstwo-to-swietna-sprawa-naukowcy-ustalili-ze-niekoniecznie-aa-L3Jm-dgQV-xVe6.html",
     "Z tego tekstu wynika, że", ["badanie dotyczyło tylko dzieci, które mają starsze rodzeństwo.", "wiek rodzeństwa nie jest ważny dla psychiki dziecka.", "na emocje dziecka dobrze wpływa fakt, że nie ma siostry lub brata."], "c"),
    ("Już w najbliższych latach na terenie całej Europy ludzie odczują efekty zmiany klimatu. Skutki ocieplenia nie będą takie same we wszystkich regionach naszego kontynentu. W Polsce możemy spodziewać się między innymi rzadkich opadów deszczu oraz częstych upałów, dlatego trzeba liczyć się z wyższymi cenami żywności.",
     "https://www.wwf.pl/srodowisko/klimat",
     "Z tego tekstu wynika, że", ["w niektórych częściach Europy klimat się nie zmieni.", "w całej Europie będzie podobna pogoda.", "niedługo w Polsce jedzenie może być droższe."], "c"),
    ("Podczas wakacji Park Legend odwiedzali głównie turyści indywidualni, a teraz coraz więcej wycieczek rezerwują szkoły. W tym niezwykłym muzeum dzięki technice komputerowej możemy dowiedzieć się więcej o wydarzeniach, które miały miejsce dawno temu.",
     "https://turystyka.wp.pl/nowa-atrakcja-w-polsce-takiego-miejsca-jeszcze-nie-bylo-6943593016044256a",
     "Z tego tekstu wynika, że Park Legend", ["wcześniej był atrakcją popularną tylko wśród uczniów.", "prezentuje przeszłość w nowoczesny sposób.", "można zwiedzić także przez internet."], "b"),
]
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 10, "pdfPages": [10, 11],
    "example": r1_ex,
    "items": [{"id": f"r1.{i+1}", "number": i + 1, "passage": {"text": t, "source": src_(u)}, "prompt": p, "options": OPT(*o), "answer": a}
              for i, (t, u, p, o, a) in enumerate(r1_data)],
}

# ---- r2: TAK/NIE on one text (4 paragraphs)
r2_text = paras_by_indent(after_points(between(test, r"II\. Proszę przeczytać tekst", r"Na podstawie: https://www.programosy.pl")))
assert len(r2_text) == 4, r2_text
r2_stm = ["Yazio pomaga utrzymać wagę i modelować sylwetkę.", "Przy rejestracji należy podać kilka informacji o sobie.",
          "Aplikacja proponuje ilość płynów, które mamy wypić każdego dnia.", "Skaner kodów pomoże nam znaleźć najsmaczniejszy posiłek.",
          "Program ma wbudowaną bogatą listę ćwiczeń sportowych.", "Podczas rejestracji trzeba zapłacić za korzystanie z Yazio."]
r2_key = "TAK NIE TAK NIE TAK NIE".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 12,
    "source": "Na podstawie: https://www.programosy.pl/program,android-yazio.html",
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "Tekst dotyczy aplikacji dietetycznej.", "answer": "TAK", "shown": True},   # PDF p.12: X in TAK
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
}

# ---- r3: fragments -> gaps (all 8 fragments A-H used: example C + 7 answers), with a title line
r3_lines = nb(after_points(between(test, r"III\. Proszę przeczytać tekst i", r"Na podstawie: https://www.edunews.pl")))
r3_title = r3_lines[0].strip()
r3_text = "\n\n".join(paras_by_indent(r3_lines[1:]))
r3_text = re.sub(r"\[_{2}C_{2}\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\](\d)", r"{{\1}}", r3_text)
r3_frag = {"A": "ale nie będzie rozumiał ich uczuć", "B": "żeby trochę odpocząć czy spędzić czas z rodziną",
           "C": "ale czy we wszystkim mogą zastąpić człowieka", "D": "czy kolejny raz spóźni się na lekcję",
           "E": "którzy dzięki specjalnemu programowi", "F": "który nawiąże z nim emocjonalną relację",
           "G": "i może już za kilka lat będzie faktem", "H": "że pozwoli zastąpić nauczycieli robotami"}
r3_key = "H B E D F A G".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–H).",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 13,
    "source": "Na podstawie: https://www.edunews.pl/badania-i-debaty/przyszlosc-edukacji/2788-androidowy-nauczyciel-eksperyment-myslowy",
    "title": r3_title,
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "C", "shown": True},    # printed in the text: [__C__]PRZYKŁAD
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs (all 8 paragraphs used: example B + 7 answers)
r4_par = {
    "A": "Mój ostatni kierownik był naprawdę świetnym specjalistą w swojej dziedzinie, ale czasem mieliśmy różne opinie na ten sam temat – zawsze jednak umieliśmy się porozumieć.",
    "B": "Fabryka istnieje na rynku od 15 lat i jest liderem wśród producentów mebli w Polsce, a jej produkty są cenione przez klientów za jakość i nowoczesny wygląd.",
    "C": "Mimo że najbardziej lubię wykonywać zadania samodzielnie, to cenię ludzi, którzy są kreatywni i mają swoje zdanie.",
    "D": "Zauważyłem, że kiedy się stresuję, to gorzej wykonuję swoje obowiązki i mam problem z koncentracją. Dlatego w pracy staram się unikać konfliktów, a projekty realizować na czas.",
    "E": "W ciągu ostatniego roku współpracowałem z ważnymi klientami i zrealizowałem kilka dużych projektów – dzięki temu moja firma otrzymała prestiżową nagrodę.",
    "F": "Zawsze chciałem być ekspertem w swojej dziedzinie. Mam zamiar dowiedzieć się, jak kierować zespołem, ponieważ marzę o stanowisku menadżera.",
    "G": "Jestem bardzo sumienny i szybko się uczę. Koledzy z pracy uważają, że moje największe zalety to odpowiedzialność i łatwość w nawiązywaniu kontaktów. Na pewno będę dobrym pracownikiem.",
    "H": "Moje obecne miejsce pracy nie oferuje już możliwości awansu. Ponadto chciałbym pracować w firmie, która korzysta z najnowszych technologii.",
}
r4_titles = ["Dlaczego powinniśmy cię zatrudnić?", "Jak układała się współpraca z innymi szefami?", "Gdzie widzisz siebie za pięć lat?",
             "Z jakiego powodu chcesz zmienić pracę?", "Co uważasz za swój największy zawodowy sukces?", "Jakie są twoje słabe strony?", "Z kim lubisz pracować?"]
r4_key = "G A F H E D C".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 14,
    "source": "Na podstawie: https://al.edu.pl/biuro-karier/student-absolwent/twoja-kariera/20-pytania-na-rozmowie-kwalifikacyjnej",
    "heading": "8 pytań z rozmowy o pracę",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Co wiesz o naszej firmie?", "answer": "B", "shown": True},   # printed in the answer table
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
}

# ---- r5: inline choice, title + 10 gaps (example 'różne' bold-underlined on PDF p.15)
r5_lines = nb(after_points(between(test, r"V\. Proszę – zgodnie z przykładem – podkreślić najlepszą", r"Na podstawie: https://poradnikpracownika")))
r5_title = r5_lines[0].strip()
r5_pass, r5_bl = cloze_choice("\n\n".join(paras_by_indent(r5_lines[1:])))
set_answers(r5_bl, "wybieramy przeglądają świeżym zapominamy energii wpływa spotkania sposobów każdego daje".split(), {"ex": "różne"})
r5 = {
    "id": "r5", "number": "V", "type": "clozeChoice", "grading": "auto",
    "instruction": "V. Proszę – zgodnie z przykładem – podkreślić najlepszą spośród możliwości podanych w nawiasach.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 15,
    "title": r5_title,
    "source": "Na podstawie: https://poradnikpracownika.pl/-czas-wolny-jak-go-nie-zmarnowac-i-efektywnie-wykorzystac",
    "passage": r5_pass, "blanks": r5_bl,
}
reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [10, 15], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
# ---- g1: declension (3 examples underlined on PDF p.17: dziecka / ważna / cię)
g1_pass, g1_bl = cloze_choice("\n\n".join(paras_by_indent(nb(after_points(between(test, r"^\s*I\. Proszę – zgodnie z przykładami", r"^\s*II\. Proszę"))))))
set_answers(g1_bl, "głodne nim pracy godzin powrocie spacer ukochanej nią twoim silni".split(), {"ex1": "dziecka", "ex2": "ważna", "ex3": "cię"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17,
    "passage": g1_pass, "blanks": g1_bl,
}

# ---- g2: 'wskaźniki zespolenia' from a box (same box-cloze type as 'spójniki'); example 'czy' sits in the heading line
g2_lines = nb(after_points(between(test, r"^\s*II\. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki", r"Na podstawie: https://tuwartomieszkac")))
assert join(g2_lines[:1]) == "które czy niż więc jeśli lub a", g2_lines[:1]
g2_pass = "\n\n".join(paras_by_indent(g2_lines[1:]))
g2_pass = re.sub(r"\S+\s*PRZYKŁAD", "{{ex}}", g2_pass)
g2_pass = re.sub(r"[….]{3,}\s*(\d)", r"{{\1}}", g2_pass)
g2 = {
    "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
    "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (wskaźniki zespolenia). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "source": "Na podstawie: https://tuwartomieszkac.pl/miasto-czy-wies-gdzie-lepiej-mieszkac/",
    "wordBox": "które czy niż więc jeśli lub a".split(), "distractors": ["więc"],
    "passage": g2_pass,
    "blanks": [{"id": "ex", "example": True, "answer": "czy"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("które a jeśli lub niż".split())],
    "pdfNotes": ["Task header says '(wskaźniki zespolenia)' instead of '(spójniki)'; same box-cloze mechanics (clozeBox).",
                 "Key prints 'Jeśli' (sentence start); stored with the box casing 'jeśli'.",
                 "The heading line ('Gdzie lepiej mieszkać: w mieście czy PRZYKŁAD na wsi?') contains the example gap; kept as the first paragraph of the passage."],
}

# ---- g3: comparison (examples: małą / bardziej, PDF p.18)
g3_raw = join(nb(after_points(between(test, r"^\s*III\. Proszę – zgodnie z przykładami", r"^\s*IV\. Proszę"))))
g3_pass, g3_bl = cloze_choice(g3_raw)
set_answers(g3_bl, "najgorszym smaczniejsze uważnie wyjątkowy chętniej".split(), {"ex1": "małą", "ex2": "bardziej"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "passage": g3_pass, "blanks": g3_bl,
}

# ---- g4: verb forms, present & past; examples printed filled in (marzyłam / mogę)
g4_raw = "\n\n".join(paras_by_indent(nb(after_points(between(test, r"^\s*IV\. Proszę – zgodnie z przykładami", r"^\s*V\. Proszę")))))
g4_pass, g4_bl = cloze_form(g4_raw)
g4_key = ["jedziemy", "zorganizowałyśmy", "było", "widziałam", "planowali", "siadamy", "znajdujemy", "opublikowali", "muszę", "oblicza"]
for b in g4_bl:
    if not b.get("example"):
        b["answer"] = g4_key[int(b["id"]) - 1]
        b["accept"] = []
g4 = {
    "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
    "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przeszły).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 18,
    "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
    "passage": g4_pass, "blanks": g4_bl,
    "pdfNotes": ["Hint of item 2 is printed '(my – Zorganizować)' with a capital Z (kept verbatim in `given`)."],
}

# ---- g5: ask about the underlined part (underlines from PDF p.19)
g5_q = [  # (sentence, underlined, stem, short answer, key, accept)
    ("Córka wysłała swojej matce życzenia urodzinowe.", "swojej matce", "…………… córka wysłała życzenia urodzinowe?", "Swojej matce.", "Komu", []),
    ("Marta pięknie udekorowała swoje mieszkanie.", "pięknie", "…………… Marta udekorowała swoje mieszkanie?", "Pięknie.", "Jak", []),
    ("Rano poszłam do przedszkola po siostrę.", "po siostrę", "…………… poszłaś rano do przedszkola?", "Po siostrę.", "Po kogo", []),
    ("Dyrektor pije kawę tylko w tym kubku.", "w tym", "…………… kubku dyrektor pije kawę?", "W tym.", "W którym", ["W jakim"]),
    ("Wojciech przez 5 lat kierował firmą.", "firmą", "…………… Wojciech kierował przez 5 lat?", "Firmą.", "Czym", []),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 19,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Adam uczy się grać na gitarze od pół roku.", "underlined": "od pół roku",
                "stem": "…………… Adam uczy się grać na gitarze?", "shortAnswer": "Od pół roku.", "answer": "Od kiedy", "shown": True},
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": ac}
              for i, (s, u, st, sa, a, ac) in enumerate(g5_q)],
    "pdfNotes": ["Official key prints the question word with decoration (Komu…?, Jak…?); stored without it, match.stripChars ignores the decoration.",
                 "Item 4 key: 'W którym…? / W jakim…? (0,25 p.)' - first alternative stored as answer, 'W jakim' in accept (the key marks it as worth only 0,25 p.)."],
}

# ---- g6: transformation (rubric strings from the key)
g6_items = [
    ("Magda dopiero wczoraj dowiedziała się o nowym terminie egzaminu.", "poznała", "Magda dopiero wczoraj poznała nowy termin egzaminu.",
     "usunięcie przyimka (0,5) + 2 transformacje (2 x 0,25)", [("usunięcie przyimka", 0.5), ("2 transformacje", 0.5)]),
    ("Ile lat ma ich córka?", "wieku", "W jakim wieku jest ich córka?",
     "zastąpienie ile lat przez w jakim (0,5) + usunięcie ma (0,25) + wstawienie jest (0,25)",
     [("zastąpienie ile lat przez w jakim", 0.5), ("usunięcie ma", 0.25), ("wstawienie jest", 0.25)]),
    ("Mała dziewczynka przyglądała się kolorowemu zegarowi.", "patrzyła", "Mała dziewczynka patrzyła na kolorowy zegar.",
     "dodanie przyimka 0,5 + 2 transformacje (2 x 0,25)", [("dodanie przyimka", 0.5), ("2 transformacje", 0.5)]),
    ("Sąsiad sprzedał mi używany samochód.", "Kupiłem", "Kupiłem od sąsiada używany samochód.",
     "dodanie przyimka (0,25) + transformacja (0,25) + brak transformacji (2 x 0,25)",
     [("dodanie przyimka", 0.25), ("transformacja", 0.25), ("brak transformacji", 0.5)]),
    ("Zimą brakuje nam słońca.", "tęsknimy", "Zimą tęsknimy za słońcem.",
     "dodanie przyimka (0,5) + usunięcie zaimka (0,25) + transformacja (0,25)",
     [("dodanie przyimka", 0.5), ("usunięcie zaimka", 0.25), ("transformacja", 0.25)]),
]
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 20,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Michał bardzo chciał pojechać na egzotyczne wakacje.", "hint": "marzył",
                "answer": "Michał marzył o egzotycznych wakacjach.", "shown": True},
    "items": [{"id": f"g6.{i+1}", "number": i + 1, "source": s, "hint": h, "answer": a, "rubric": r,
               "rubricParts": [{"what": w_, "points": p_} for w_, p_ in rp]}
              for i, (s, h, a, r, rp) in enumerate(g6_items)],
}

# ---- g7: aspect & mood (examples Chciałabym / Pomóż on PDF p.21), dialogue Anna / Bartosz
g7_lines = nb(after_points(between(test, r"^\s*VII\. Proszę – zgodnie z przykładami", r"^\s*VIII\.")))
g7_turns, cur = [], []
for l in g7_lines:
    if re.match(r"^(Anna|Bartosz):", l.strip()) and cur:
        g7_turns.append(join(cur)); cur = []
    cur.append(l)
g7_turns.append(join(cur))
g7_turns = [re.sub(r"\)\s+(\d+)", r")\1", t) for t in g7_turns]
g7_pass, g7_bl = cloze_choice("\n\n".join(g7_turns))
set_answers(g7_bl, ["miałbym", "przygotowałbyś", "żartuj", "Zamówmy", "zróbmy", "wolałabym", "moglibyśmy", "wzięłyby", "poradzi", "zajmijcie się"],
            {"ex1": "Chciałabym", "ex2": "Pomóż"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 21,
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: prepositions from a box (example 'dla' printed in the text, PDF p.22)
g8_lines = nb(after_points(between(test, r"^\s*VIII\. Proszę – zgodnie z przykładem", r"Państwowa Komisja")))
assert join(g8_lines[:1]) == "z przez dla ze w na koło", g8_lines[:1]
g8_raw = join(g8_lines[1:])
g8_raw = re.sub(r"\S+\s*PRZYKŁAD", "{{ex}}", g8_raw)
g8_raw = re.sub(r"[….]{3,}\s*(\d)", r"{{\1}}", g8_raw)
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeBox", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (przyimki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 22,
    "wordBox": "z przez dla ze w na koło".split(), "distractors": ["na"],
    "passage": g8_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "dla"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("koło ze w przez z".split())],
}

grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [17, 22], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING (no key exists; prompts from test.txt p.24)
sets = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "pozdrowienia", "wordTarget": 30, "prompt": "Wyjechała Pani / Wyjechał Pan za granicę na kurs językowy. Proszę napisać pozdrowienia do profesora, który uczył Panią/Pana języka polskiego. Pozdrowienia wyśle Pani/Pan pocztą tradycyjną."},
        {"id": "b", "genre": "e-mail", "wordTarget": 170, "prompt": "Chce Pani/Pan zrobić remont pokoju dla dziecka / pokoju do pracy. Proszę napisać e-mail do biura architektonicznego z prośbą o przygotowanie projektu i opisać, jak ma wyglądać ten pokój po remoncie."}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 40, "prompt": "Chce Pani/Pan sprzedać rower swojego dziecka. Proszę napisać ogłoszenie, które opublikuje Pani/Pan na stronie internetowej „Kupno i Sprzedaż”."},
        {"id": "b", "genre": "e-mail", "wordTarget": 160, "prompt": "Wróciła Pani / Wrócił Pan z wakacji. Proszę napisać e-mail do kuzynki z Polski, w którym opisze Pani/Pan, gdzie Pani była / Pan był i jak Pani spędzała / Pan spędzał czas."}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "zaproszenie", "wordTarget": 40, "prompt": "Proszę zaprosić polskich znajomych na imprezę, którą Pani/Pan organizuje w następny weekend w swoim nowym mieszkaniu."},
        {"id": "b", "genre": "esej", "wordTarget": 160, "prompt": "Szkoła języka polskiego, do której chodzi Pani/Pan na zajęcia, ogłosiła konkurs na najlepszy esej z okazji Dnia Rodziny. Proszę napisać esej (wypracowanie szkolne) pt. „Rodzice to najlepsi nauczyciele”.", "title": "Rodzice to najlepsi nauczyciele"}]},
]
w = writing_task(sets, [24, 30])
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [23, 30], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "czerwiec 2024", "examDates": "22-23.06.2024",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear.",
                       "Grammar II is headed '(wskaźniki zespolenia)' instead of '(spójniki)'; modelled as clozeBox (word box, 1 unused word).",
                       "Listening V has 5 persons and 4 statements A–D (printed prompt says '(A-E)'); key row-per-statement: A 5 | B* 2,4 | C* 1,3 | D 1.",
                       "Listening II example: both lines tagged (K) in the official transcript; kept.",
                       "Reading III and IV have a title/heading line; all 8 fragments/paragraphs A–H are used (example + 7).",
                       "Grammar II/VIII example words are part of the printed word box (struck through in the PDF); Grammar IV example forms (marzyłam, mogę) are printed filled in."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
