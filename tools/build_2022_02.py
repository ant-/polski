#!/usr/bin/env python3
"""Builds data/2022-02.js. Run from anywhere: python3 tools/build_2022_02.py
Content = verbatim from sources/2022-02/test.txt (+ PDF page images for underlined/bold PRZYKŁAD answers),
keys = official 'Klucz do zadań' in transcript.txt. Adapted from tools/build_2024_02.py (docs/conversion-recipe.md).
Reading V is the word-box variant (clozeBox, 10 gaps + example word in the box, no distractor)."""
import json, sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2022-02"
test = clean_lines(read(SID, "test.txt"))
OPT = lambda *texts: [{"id": "abc"[i], "text": t} for i, t in enumerate(texts)]


def mc_item(tid, n, prompt, opts, ans, **kw):
    return {"id": f"{tid}.{n}", "number": n, "prompt": prompt, "options": OPT(*opts), "answer": ans, **kw}


def sp_tag(t):
    m = re.match(r"^(.*?)\s*\(([KM])\)\s*$", t.strip())
    return m[2], m[1].strip()


# =============================================================== LISTENING
# ---- l1: 14 single utterances, MC (example a, bold-underlined on PDF p.3)
l1_tr = []
for l in transcript_block(SID, "I"):
    m = re.match(r"^\s*(?:Przykład:|\d+\.)\s*(.*)$", l)
    sp, t = sp_tag(m[1])
    l1_tr.append({"sp": sp, "t": t})
assert len(l1_tr) == 15
l1_key = "b b c a c b c b a b c a c a".split()
l1_items = [
    ("Ta wypowiedź oznacza, że ona", ["pracuje za wolno.", "straciła pracę.", "szuka pracy."]),
    ("Ta wypowiedź oznacza", ["zainteresowanie.", "niezadowolenie.", "radość."]),
    ("Ta wypowiedź jest typowa", ["w restauracji.", "w sklepie.", "w pociągu."]),
    ("Ta wypowiedź jest typowa", ["w bibliotece.", "w księgarni.", "w kiosku."]),
    ("Ta wypowiedź oznacza", ["uspokojenie.", "zainteresowanie.", "irytację."]),
    ("Ta wypowiedź oznacza, że klient", ["poleca innym ten zakup.", "nie jest zadowolony z zakupu.", "musi się zastanowić."]),
    ("Ta wypowiedź jest typowa", ["na przystanku autobusowym.", "na ścieżce rowerowej.", "na dworcu kolejowym."]),
    ("Ta wypowiedź oznacza, że on", ["jest silny.", "jest zmęczony.", "jest biedny."]),
    ("Ta wypowiedź jest typowa", ["w przychodni.", "w barze.", "w cukierni."]),
    ("Ta wypowiedź oznacza", ["ciekawość.", "krytykę.", "niepewność."]),
    ("Ta wypowiedź oznacza, że on", ["sprzedał wszystkie meble.", "kupił dom z meblami.", "ma w domu nowe meble."]),
    ("Ta wypowiedź to", ["pochwała.", "krytyka.", "zakaz."]),
    ("Ta wypowiedź jest typowa", ["w pociągu.", "w samolocie.", "w biurze podróży."]),
    ("Ta wypowiedź oznacza, że ona", ["płaci teraz wyższy czynsz.", "zmieniła mieszkanie.", "będzie płacić 70 zł."]),
]
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
    "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 3,
    "audio": task_audio(SID, "I", ["l1.ex"] + [f"l1.{i}" for i in range(1, 15)]),
    "example": {"id": "l1.ex", "prompt": "Ta wypowiedź jest typowa",
                "options": OPT("w kwiaciarni.", "u fryzjera.", "na poczcie."),
                "answer": "a", "shown": True, "transcript": l1_tr[0]},   # PDF p.3: option a bold-underlined
    "items": [mc_item("l1", i + 1, p, o, l1_key[i], transcript=l1_tr[i + 1]) for i, (p, o) in enumerate(l1_items)],
}

# ---- l2: 8 dialogues, MC (example b, PDF p.4)
l2_lines = []
for l in transcript_block(SID, "II"):
    m = re.search(r"-\s+(.*\(([KM])\))\s*$", l)
    if m:
        sp, t = sp_tag(m[1])
        l2_lines.append({"sp": sp, "t": t})
assert len(l2_lines) == 18, len(l2_lines)
l2_dlg = [{"lines": l2_lines[2 * i:2 * i + 2]} for i in range(9)]
l2_key = "a c a c b b a c".split()
l2_items = [
    ("Z tego dialogu wynika, że mężczyzna", ["umawia się na wizytę w poradni.", "organizuje spotkanie biznesowe.", "pyta o koszt badań."]),
    ("Z tego dialogu wynika, że kobiety", ["spóźniły się na autobus.", "jadą autobusem.", "czekają na autobus."]),
    ("Z tego dialogu wynika, że kobieta", ["woli gorzką herbatę.", "prosi o cukier.", "nie chce herbaty."]),
    ("Z tego dialogu wynika, że", ["potrawy były smaczne.", "dania były drogie.", "ona nie jest zadowolona z kolacji."]),
    ("Z tego dialogu wynika, że", ["zaczął padać deszcz.", "może zacząć padać deszcz.", "podczas deszczu łatwo o wypadek."]),
    ("Z tego dialogu wynika, że mężczyzna", ["odbierze paczkę w domu.", "odbierze paczkę w innym miejscu.", "zwraca paczkę."]),
    ("Z tego dialogu wynika, że oni", ["sami znajdą drogę.", "zmienią plany.", "nie dojadą na miejsce."]),
    ("Z tego dialogu wynika, że samochód", ["jest sprawny.", "należy sprzedać.", "trzeba naprawić."]),
]
l2 = {
    "id": "l2", "number": "II", "type": "mc", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać dialogów i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "8 x 1 p.", "pointsPerItem": 1, "maxPoints": 8, "plays": 2, "pdfPage": 4, "pdfPages": [4, 5],
    "audio": task_audio(SID, "II", ["l2.ex"] + [f"l2.{i}" for i in range(1, 9)]),
    "example": {"id": "l2.ex", "prompt": "Z tego dialogu wynika, że Adam",
                "options": OPT("słucha głośnej muzyki.", "nie wykonuje poleceń.", "ma kłopoty ze słuchem."),
                "answer": "b", "shown": True, "transcript": l2_dlg[0]},   # PDF p.4: option b bold-underlined
    "items": [mc_item("l2", i + 1, p, o, l2_key[i], transcript=l2_dlg[i + 1]) for i, (p, o) in enumerate(l2_items)],
}

# ---- l3: interview MC (example a, PDF p.5)
l3_tr = speaker_lines(transcript_block(SID, "III"), {"Dz": "Dziennikarka", "M": "Mężczyzna"})
for _x in l3_tr:   # wrapped source-URL tail ("…trakto-\nwany-wywiad-…") is not part of the speech
    _x["t"] = re.sub(r"\s*wany-wywiad-z-najlepszym-pracodawca-w-polsce$", "", _x["t"])
assert [x["sp"] for x in l3_tr] == ["Dziennikarka", "Mężczyzna"] * 5, [x["sp"] for x in l3_tr]
l3_key = "b c a b c".split()
l3_items = [
    ("Według pracodawcy jego pracownicy", ["za bardzo go kontrolują.", "decydują, gdzie chcą pracować.", "mają za dużo czasu."]),
    ("Dane o wysokości pensji kolegów", ["są dostępne dla wszystkich.", "są omawiane na zebraniach.", "nie są znane pracownikom."]),
    ("Pracownicy firmy", ["mogą brać udział w szkoleniach.", "sami płacą za różne szkolenia.", "prowadzą kursy dla innych."]),
    ("Pracodawca szuka projektów, które", ["będą łatwe dla pracowników.", "będą interesujące dla pracowników.", "pozwolą mu więcej zarobić."]),
    ("Pracownicy co jakiś czas", ["organizują konferencje.", "odwiedzają szefa w domu.", "wspólnie wyjeżdżają."]),
]
l3 = {
    "id": "l3", "number": "III", "type": "mc", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wywiadu ze zdobywcą tytułu Najlepszy Pracodawca w Polsce i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 5,
    "source": "Na podstawie: https://innpoland.pl/122713,traktuje-swoich-pracownikow",
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_tr},
    "example": {"id": "l3.ex", "prompt": "Tytuł Najlepszego Pracodawcy w Polsce",
                "options": OPT("otrzymała jedna osoba.", "nie został przyznany.", "otrzymało stu pracodawców."),
                "answer": "a", "shown": True},   # PDF p.5: option a bold-underlined
    "items": [mc_item("l3", i + 1, p, o, l3_key[i]) for i, (p, o) in enumerate(l3_items)],
    "pdfNotes": ["Printed source is shortened in the booklet; the transcript prints the full URL."],
}

# ---- l4: TAK/NIE (example TAK printed on PDF p.6)
l4_tr = speaker_lines(transcript_block(SID, "IV"), {"M": "Mężczyzna", "K": "Kobieta"})
assert [x["sp"] for x in l4_tr] == ["Kobieta", "Mężczyzna", "Kobieta"], [x["sp"] for x in l4_tr]
l4_stm = ["Królowa zwykle je bezmięsne śniadanie.", "Sekretarki pomagają królowej w biurowych obowiązkach.",
          "Królowa podczas spotkań co 20 min kontroluje czas.", "Wieczorami Elżbieta II czyta literaturę kryminalną.",
          "Królowa regularnie spotyka się z premierem Wielkiej Brytanii."]
l4_key = "TAK NIE NIE NIE TAK".split()
l4 = {
    "id": "l4", "number": "IV", "type": "tf", "grading": "auto",
    "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę posłuchać rozmowy na temat rutyny dnia królowej Elżbiety II i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 6,
    "source": "Na podstawie: https://styl.interia.pl/gwiazdy/slawni/news-z-zegarkiem-w-reku,nId,594906",
    "audio": task_audio(SID, "IV"),
    "transcript": {"lines": l4_tr},
    "example": {"id": "l4.ex", "statement": "Królową budzi jej ulubiony instrument.", "answer": "TAK", "shown": True},
    "items": [{"id": f"l4.{i+1}", "number": i + 1, "statement": s, "answer": l4_key[i]} for i, s in enumerate(l4_stm)],
}

# ---- l5: national parks (match table column I -> II, 5 x 1; example B printed in the answer table)
l5_tr = speaker_lines(transcript_block(SID, "V"), {"M": "Mężczyzna", "K": "Kobieta"})
assert [x["sp"] for x in l5_tr] == ["Redaktor", "Mężczyzna", "Kobieta", "Mężczyzna", "Kobieta", "Mężczyzna"], [x["sp"] for x in l5_tr]
l5_opts = {"A": "jest dopiero planowany.", "B": "jest jednym z pierwszych parków narodowych w Polsce.", "C": "oferuje turystom różne zabytki.",
           "D": "to miejsce, w którym są nietypowe kształty skał.", "E": "ma dobrą ofertę dla osób aktywnych fizycznie.",
           "F": "to miejsce, w którym woda zajmuje największy teren."}
l5_key = "F E C A D".split()
l5_names = ["Park Narodowy Bory Tucholskie", "Kampinoski Park Narodowy", "Ojcowski Park Narodowy", "Jurajski Park Narodowy", "Park Narodowy Gór Stołowych"]
l5 = {
    "id": "l5", "number": "V", "type": "match", "grading": "auto",
    "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać rozmowy o parkach narodowych w Polsce oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 7,
    "source": "Na podstawie: https://hasajacezajace.com/parki-narodowe-w-polsce/",
    "audio": task_audio(SID, "V"),
    "transcript": {"lines": l5_tr},
    "options": [{"id": k, "text": v} for k, v in l5_opts.items()],
    "example": {"id": "l5.ex", "prompt": "Białowieski Park Narodowy", "answer": "B", "shown": True},   # printed in the answer table
    "items": [{"id": f"l5.{i+1}", "number": i + 1, "prompt": n, "answer": l5_key[i]} for i, n in enumerate(l5_names)],
}
listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [3, 7], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
src_ = lambda s: "Na podstawie: " + s
r1_ex = {"id": "r1.ex",
         "passage": {"text": "„Od najmłodszych lat chciałam zostać nauczycielką. I tak się stało. Do tego zawodu zachęciła mnie moja polonistka ze szkoły podstawowej, która była bardzo kreatywną osobą” – tymi słowami rozpoczyna się wywiad z najlepszą nauczycielką roku.",
                     "source": src_("https://tygodnik.interia.pl/news-nauczyciel-roku-2019-pracujemy-40-godzin-tygodniowo-tak-jak-,nId,5569451#utm_source=paste&utm_medium=paste&utm_campaign=chrome")},
         "prompt": "Z tego tekstu wynika, że kobieta, z którą był wywiad,",
         "options": OPT("nie wybrała zawodu nauczyciela.", "już w dzieciństwie chciała zostać nauczycielką.", "pracuje w szkole podstawowej."),
         "answer": "b", "shown": True}   # PDF p.9: option b bold-underlined
r1_data = [
    ("Firma Apple pracuje nad nowymi funkcjami smartfona. Jedną z nich będzie aplikacja, która pomoże zdiagnozować różne problemy psychiczne, m.in. depresję. Jeśli aplikacja rozpozna objawy choroby, to system wygeneruje skierowanie do lekarza specjalisty.",
     "https://www.polsatnews.pl/wiadomosc/2021-09-22/usa-apple-pracuje-nad-algorytmem-ktory-ma-wykryc-m-in-depresje-ma-to-byc-funkcja-iphona/?ref=slider_1491578",
     "Z tego tekstu wynika, że", ["w przyszłości smartfony będą rozpoznawać choroby.", "nowe smartfony już diagnozują choroby.", "nowa aplikacja poinformuje, jak wyleczyć depresję."], "a"),
    ("Wśród uczestników castingu do kolejnej edycji programu sportowego znalazło się wiele wysportowanych pań. Były one bardzo silne i sprawne fizycznie, dlatego wzięły udział w półfinale programu, ale do finału dostali się tylko mężczyźni.",
     "https://www.polsat.pl/news/2021-10-08/prowadzacy-o-finale-czwartej-edycji-ninja-warrior-polska/",
     "Z tego tekstu wynika, że", ["kobiety pokazały, że mają większą siłę niż mężczyźni.", "kobiety nie wzięły udziału w finale programu sportowego.", "w finale programu są mężczyźni i kobiety."], "b"),
    ("Grupa polskich turystów miała problem z powrotem do domu. Ich wylot do Polski był zaplanowany w południe, ale samolot nie przyleciał na lotnisko. Dzięki interwencji biura podróży wszyscy turyści około 23.00 wrócili do kraju.",
     "https://www.polsatnews.pl/wiadomosc/2021-10-08/grecja-polscy-turysci-utkneli-na-lotnisku-w-zakynthos-nie-wiemy-czy-dolecimy-do-polski/?ref=1491574.",
     "Z tego tekstu wynika, że", ["biuro podróży nie pomogło w organizacji powrotu turystów do domu.", "turyści wrócili do Polski następnego dnia o 12:00.", "samolot nie wystartował o godzinie 12.00."], "c"),
    ("Jazda samochodem po drogach szybkiego ruchu nie jest elementem kursu na prawo jazdy. Z tego powodu ci, którzy niedawno zdobyli uprawnienia do kierowania samochodem, nie potrafią jeździć po autostradach. Dla takich osób powstał w Poznaniu kurs jazdy autostradą.",
     "https://www.polsatnews.pl/wiadomosc/2021-09-23/poznan-rusza-kurs-jazdy-po-autostradzie-pierwszy-taki-w-polsce/?ref=1494004.",
     "Z tego tekstu wynika, że", ["kurs jazdy po autostradzie jest dla osób, które już mają prawo jazdy.", "w wielu szkołach można uczyć się jeździć autostradą.", "autostradą nie umieją jeździć doświadczeni kierowcy."], "a"),
    ("Jeśli kolejny raz zostanę wybrany na prezesa Narodowego Banku Polskiego, będę chciał wprowadzić nowy banknot o nominale 1000 złotych – powiedział Adam Glapiński w wywiadzie dla jednej z polskich gazet.",
     "https://www.polsatnews.pl/wiadomosc/2021-10-05/banknot-1000-zl-pierwszy-z-wizerunkiem-kobiety/?ref=1491575",
     "Z tego tekstu wynika, że", ["niedługo w Polsce zostanie wprowadzony banknot 1000 złotych.", "obecnie w Polsce nie ma banknotu 1000 złotych.", "Adam Glapiński ponownie zostanie prezesem Narodowego Banku Polskiego."], "b"),
]
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 9, "pdfPages": [9, 10],
    "example": r1_ex,
    "items": [{"id": f"r1.{i+1}", "number": i + 1, "passage": {"text": t, "source": src_(u)}, "prompt": p, "options": OPT(*o), "answer": a}
              for i, (t, u, p, o, a) in enumerate(r1_data)],
    "pdfNotes": ["Source URLs wrap over two lines in the booklet and are re-joined without a space; items 3 and 4 print a trailing '.' after the URL."],
}

# ---- r2: TAK/NIE on one text (key table headed T / N)
r2_lines = [l for l in after_points(between(test, r"II\. Proszę przeczytać tekst", r"Na podstawie: https://www.medonet")) if l.strip()]
assert r2_lines[0].strip() == "Zrezygnujcie czasami z prysznica!"
r2_text = paras_by_indent(r2_lines[1:])
assert len(r2_text) == 4, [t[:30] for t in r2_text]
r2_stm = ["Tekst informuje o negatywnych skutkach częstych kąpieli.", "Kąpiemy się często, ponieważ jesteśmy brudni.",
          "Autorzy artykułu uważają, że powinniśmy brać przykład ze Świętej Agnieszki i Świętej Olimpii.",
          "Jeśli będziemy myć się rzadziej, to będziemy zdrowsi.", "Według specjalistów należy zrezygnować z kosmetyków do kąpieli.",
          "Warto mniej czasu spędzać w wannie."]
r2_key = "TAK NIE NIE TAK NIE TAK".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 11,
    "title": "Zrezygnujcie czasami z prysznica!",
    "source": "Na podstawie: https://www.medonet.pl/zdrowie/zdrowie-dla-kazdego",
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "W tytule artykułu autor proponuje, żeby ludzie myli się rzadziej.", "answer": "TAK", "shown": True},
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
}

# ---- r3: fragments -> gaps (example C printed in text)
r3_lines = [l for l in after_points(between(test, r"III\. Proszę przeczytać tekst i", r"Na podstawie: https://www.c-and-a")) if l.strip()]
assert r3_lines[0].strip() == "Sport i ćwiczenia dla seniorów"
r3_text = "\n\n".join(paras_by_indent(r3_lines[1:]))
r3_text = re.sub(r"\[_{2}C_{2}\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\](\d)", r"{{\1}}", r3_text)
r3_frag = {"A": "czyli popularne spacery z kijami", "B": "a inne można dla nich trochę zmodyfikować",
           "C": "ponieważ pomaga utrzymać dobrą kondycję fizyczną", "D": "że to też jest rodzaj sportu",
           "E": "żeby osoby nie mogły dotykać stopami dna basenu", "F": "czyli na świeżym powietrzu",
           "G": "każda z osób ma specjalne ubranie", "H": "dlatego warto zapisać się do klubu seniora"}
r3_key = "B E G A F D H".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–H).",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 12,
    "title": "Sport i ćwiczenia dla seniorów",
    "source": "Na podstawie: https://www.c-and-a.com/pl/pl/shop/sport-i-cwiczenia-dla-seniorow",
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "C", "shown": True},    # printed in the text: [__C__]PRZYKŁAD
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs (two-column table; example C, shaded on the PDF)
r4_par = {
    "A": "Nie warto kierować się rankingami i popularnością. Wysokie wyniki uczniów w nauce i prestiż szkoły mogą informować o tym, że panuje w niej rywalizacja. Szkoła powinna przede wszystkim pomóc ci się rozwinąć, a nie zmuszać do otrzymywania wysokich ocen.",
    "B": "Zastanów się, co ma dla ciebie największe znaczenie w edukacji. Czy chcesz chodzić do dużej szkoły? Czy masz zainteresowania, które chcesz rozwijać? Czy zależy ci na ocenach? A może najważniejsze jest, by chodzić do jednej szkoły z kolegami?",
    "C": "Jeśli lubisz zajęcia praktyczne, chcesz uczyć się czegoś więcej i inaczej, weź pod uwagę technika. Po takiej szkole będziesz mógł szybko zacząć pracę.",
    "D": "Wygodnie jest mieć szkołę blisko. Długie i dalekie dojazdy nie tylko więcej kosztują, lecz także wypływają na jakość życia, np. na to, czy się wyśpisz.",
    "E": "Wielu uczniów szuka nowej szkoły dopiero pod koniec ósmej klasy. Koniecznie trzeba wtedy wiedzieć, że szkoły średnie dzielimy na: licea, technika i szkoły branżowe. Warto sprawdzić, jak wygląda nauka w każdej z nich.",
    "F": "Szkoła średnia to ważny i potrzebny etap w życiu, ponieważ otwiera drogę do kariery i dorosłości. Tam spędzisz kilka ważnych lat, poznasz nowych ludzi, a niektóre sytuacje zapamiętasz do końca życia.",
    "G": "Twój temperament jest bardzo ważny. Może wolisz uczyć się w skupieniu, z książek, z internetu, lubisz czytać? Pamiętaj, wybór szkoły średniej to twój wybór, należy do ciebie, nie do twoich rodziców.",
    "H": "Warto zainteresować się tym, co szkoła oferuje poza realizacją obowiązkowego programu. Czy są w niej organizowane kursy, warsztaty, akcje społeczne i charytatywne, zawody sportowe czy konkursy.",
}
# independent re-read of the right-hand column of the two-column table (guards the hand-typed paragraphs above)
_s4 = next(i for i, l in enumerate(test) if "Jak wybrać szkołę średnią" in l)
_e4 = next(i for i in range(_s4, len(test)) if "mamadu" in test[i])
_col, _cur = {}, None
for l in test[_s4 + 1:_e4]:
    m = re.match(r"^(.{0,45}?)\s+([A-H])\s{3,}(\S.*)$", l)
    if m:
        _cur = m[2]; _col[_cur] = [m[3]]
    elif _cur and len(l) > 46 and l[:46].strip() == "":
        _col[_cur].append(l[46:].strip())
    elif _cur and l.strip() and len(l) > 46:
        _col[_cur].append(re.split(r"\s{3,}", l.strip())[-1])
assert {k: join(v) for k, v in _col.items()} == r4_par, "r4 paragraphs differ from the txt right column"
r4_titles = ["Po co szkoła średnia?", "To nie decyzja mamy czy taty", "Po lekcjach", "Czy opinia o szkole jest ważna?",
             "Najważniejsze w edukacji", "Jaki typ szkoły wybrać?", "Droga do szkoły"]
r4_key = "F G H A B E D".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 13,
    "source": "Na podstawie: https://mamadu.pl/153783,jaka-wybrac-szkole-srednia-wybor-szkoly-po-8-klasie",
    "heading": "Jak wybrać szkołę średnią?",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Może szkoła branżowa lub technikum", "answer": "C", "shown": True},
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
    "pdfNotes": ["The booklet instruction prints stray combining marks on 'Proszę', 'połączyć' and 'wpisać' (font artefact); stored in plain NFC."],
}

# ---- r5: WORD-BOX variant (clozeBox): 11 words in the box = 10 answers + example "serwujemy"; no distractor
r5_body = [l for l in after_points(between(test, r"V\. Proszę – zgodnie z przykładem – uzupełnić tekst wyrazami z ramki", r"Na podstawie: https://manna68")) if l.strip()]
r5_box = join(r5_body[:2]).split()
assert r5_box == "wino zmieniamy owocowe dań serwujemy wracają smaku próbują słodko-kwaśnym przepis potrawy".split(), r5_box
assert r5_body[2].strip() == "Roślinne jedzenie, które cię zachwyci!"
r5_text = "\n\n".join(paras_by_indent(r5_body[3:]))
r5_text = r5_text.replace("serwujemy PRZYKŁAD", "{{ex}}")
r5_text = re.sub(r"\s*[….]{3,}\s*(\d+)", r" {{\1}}", r5_text)
r5_key = "dań owocowe smaku potrawy zmieniamy próbują przepis słodko-kwaśnym wino wracają".split()
r5 = {
    "id": "r5", "number": "V", "type": "clozeBox", "grading": "auto",
    "instruction": "V. Proszę – zgodnie z przykładem – uzupełnić tekst wyrazami z ramki.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 14,
    "title": "Roślinne jedzenie, które cię zachwyci!",
    "source": "Na podstawie: https://manna68.pl",
    "wordBox": r5_box, "distractors": [],
    "passage": r5_text,
    "blanks": [{"id": "ex", "example": True, "answer": "serwujemy"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate(r5_key)],
}
reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [9, 14], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
# ---- g1: declension, 3 examples (PDF p.16: plecak / nią / dalekiego)
g1_raw = paras_by_blank(after_points(between(test, r"I\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych", r"Na podstawie: Twój Styl, nr 10/2021/Nie potrafię")))
g1_pass, g1_bl = cloze_choice("\n\n".join(g1_raw))
g1_key = "babci ostatni miejsc odważna podwórku ją politologię wolontariusz nikogo dumni".split()
set_answers(g1_bl, g1_key, {"ex1": "plecak", "ex2": "nią", "ex3": "dalekiego"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 16,
    "source": "Na podstawie: Twój Styl, nr 10/2021/Nie potrafię się odwrócić",
    "passage": g1_pass, "blanks": g1_bl,
}

# ---- g2: conjunctions from a box (example "kiedy" printed in text, struck through in the box)
g2_raw = join(after_points(between(test, r"II\. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki \(spójniki\)", r"^\s*POZIOM B1|III\. Proszę")))
g2_box = "żeby że więc chociaż bo i kiedy"
assert g2_raw.startswith(g2_box + " "), g2_raw[:50]
g2_raw = g2_raw[len(g2_box) + 1:]
g2_raw = g2_raw.replace("Magda, kiedy PRZYKŁAD była", "Magda, {{ex}} była")
g2_raw = re.sub(r"\s*[….]{5,}\s*(\d)", r" {{\1}}", g2_raw)
g2 = {
    "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
    "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 16,
    "wordBox": g2_box.split(), "distractors": ["więc"],
    "passage": g2_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "kiedy"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("bo że i żeby chociaż".split())],
}

# ---- g3: comparison, 2 examples (Najbardziej / dobry; PDF p.17)
g3_raw = " ".join(after_points(between(test, r"III\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów", r"Na podstawie: Twój Styl, nr 10/2021/Cała prawda")))
g3_raw = re.sub(r"\s+", " ", g3_raw).strip()
g3_pass, g3_bl = cloze_choice(g3_raw)
set_answers(g3_bl, "złe wcześniej delikatniejszy najzdrowszym korzystnie".split(), {"ex1": "Najbardziej", "ex2": "dobry"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "source": "Na podstawie: Twój Styl, nr 10/2021/Cała prawda o herbacie",
    "passage": g3_pass, "blanks": g3_bl,
}

# ---- g4: verb forms, present & past; examples "planowałam" / "mówi" (bold-underlined in the text, PDF p.17)
g4_lines = [l for l in after_points(between(test, r"IV\. Proszę – zgodnie z przykładami – uzupełnić tekst", r"Na podstawie: Twój Styl, nr 10/2021/Dom")) if l.strip()]
g4_paras = paras_by_indent(g4_lines)
assert len(g4_paras) == 4, [p[:20] for p in g4_paras]
g4_raw = "\n\n".join(g4_paras)
g4_raw = g4_raw.replace("nie planowałam (planować)PRZYKŁAD tu zostać", "nie {{ex1}} tu zostać").replace("mówi (mówić)PRZYKŁAD Sara", "{{ex2}} Sara")
g4_given = {}


def _g4(m):
    g4_given[m[1]] = m[2]
    return "{{%s}}" % m[1]


g4_raw = re.sub(r"[….]{3,}\s*(\d+)\s*\(([^()]*)\)\s*\1", _g4, g4_raw)
assert sorted(g4_given, key=int) == [str(i) for i in range(1, 11)], g4_given
g4_key = "przyleciałam spodobał przypominały poznałam zdecydowaliśmy się kochają kupujemy urządzili wynajmują wiszą".replace("zdecydowaliśmy się", "zdecydowaliśmy_się").split()
g4_key = [k.replace("_", " ") for k in g4_key]
g4 = {
    "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
    "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przeszły).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17,
    "source": "Na podstawie: Twój Styl, nr 10/2021/Dom ze skrawków świata",
    "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
    "passage": g4_raw,
    "blanks": [{"id": "ex1", "example": True, "given": "planować", "answer": "planowałam"},
               {"id": "ex2", "example": True, "given": "mówić", "answer": "mówi"}] +
              [{"id": str(i + 1), "given": g4_given[str(i + 1)], "answer": g4_key[i]} for i in range(10)],
    "pdfNotes": ["Examples keep the printed 'nie' before the example blank ('nie planowałam'): only the verb form is the answer."],
}

# ---- g5: question about the underlined part (underlined span = short answer line; PDF p.18)
g5_q = [
    ("Przez cały miesiąc dyrektor szukał dobrego pracownika.", "dobrego pracownika", "……………… dyrektor szukał przez cały miesiąc?", "Dobrego pracownika.", "Kogo", ["Jakiego pracownika"]),
    ("Przez pomyłkę zjadłam frytki Filipa.", "Filipa", "……………… frytki zjadłaś przez pomyłkę?", "Filipa.", "Czyje", []),
    ("Poprosiliśmy o potrzebne dokumenty.", "o potrzebne dokumenty", "……………… poprosiliście?", "O potrzebne dokumenty.", "O co", []),
    ("Polski tenisista po długiej walce wygrał z hiszpańskim zawodnikiem.", "z hiszpańskim zawodnikiem", "……………… po długiej walce wygrał polski tenisista?", "Z hiszpańskim zawodnikiem.", "Z kim", []),
    ("Ola planuje piąty wyjazd do Chorwacji.", "piąty", "……………… wyjazd planuje Ola?", "Piąty.", "Który", []),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Alicja przyglądała się zdjęciom.", "underlined": "zdjęciom",
                "stem": "Czemu przyglądała się Alicja?", "shortAnswer": "Zdjęciom.", "answer": "Czemu", "shown": True},
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": acc}
              for i, (s, u, st, sa, a, acc) in enumerate(g5_q)],
    "pdfNotes": ["Official key prints the question word with decoration (Kogo…?, Z kim ….?); stored without it, match.stripChars ignores the decoration.",
                 "Key item 1 gives two accepted forms: 'Kogo…? / Jakiego pracownika…?' (second one in accept).",
                 "The worked example prints the complete question ('Czemu przyglądała się Alicja?'), so its stem has no gap."],
}

# ---- g6: transformation; key = model sentence(s) (underlined parts = transformations) + printed rubric strings
g6_items = [
    ("Mój przyjaciel sprzeda mi rower.", "kupię", "Kupię rower od mojego przyjaciela.", [],
     "brak transformacji 0,25 + odpowiedni przyimek 0,25 + 2 transformacje (2 x 0,25)",
     [("brak transformacji", 0.25), ("odpowiedni przyimek", 0.25), ("2 transformacje", 0.5)]),
    ("Kasia opiekowała się młodszą siostrą.", "dbała o", "Kasia dbała o młodszą siostrę.", [],
     "2 transformacje (2 x 0,5)", [("2 transformacje", 1)]),
    ("Ile kosztuje ta sukienka?", "cena", "Jaka jest cena tej sukienki?", ["Jaka cena tej sukienki?"],
     "odpowiedni zaimek 0,5 + 2 transformacje (2 x 0,25)", [("odpowiedni zaimek", 0.5), ("2 transformacje", 0.5)]),
    ("Nie smakuje mi sałatka jarzynowa.", "nie lubię", "Nie lubię sałatki jarzynowej.", [],
     "2 transformacje (2 x 0,5)", [("2 transformacje", 1)]),
    ("Tę znaną melodię skomponował polski muzyk.", "autorem", "Autorem znanej melodii jest polski muzyk.", ["Polski muzyk jest autorem znanej melodii."],
     "odpowiedni czasownik 0,5 + 2 transformacje (2 x 0,25)", [("odpowiedni czasownik", 0.5), ("2 transformacje", 0.5)]),
]
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 19,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Gosia doskonale zna angielski.", "hint": "mówi", "answer": "Gosia doskonale mówi po angielsku.", "shown": True},
    "items": [{"id": f"g6.{i+1}", "number": i + 1, "source": s, "hint": h, "answer": a, "accept": acc, "rubric": r,
               "rubricParts": [{"what": w_, "points": p} for w_, p in parts]} for i, (s, h, a, acc, r, parts) in enumerate(g6_items)],
}

# ---- g7: aspect & mood in a dialogue (examples przedstawcie się / chcielibyście; PDF p.20)
g7_lines = after_points(between(test, r"VII\. Proszę – zgodnie z przykładami", r"Na podstawie: https://beforewegetold"))
g7_turns, cur = [], []
for l in g7_lines:
    if re.match(r"^(Dziennikarka|Agata|Krzysiek):", l.strip()) and cur:
        g7_turns.append(join(cur)); cur = []
    if l.strip():
        cur.append(l)
g7_turns.append(join(cur))
g7_turns = [re.sub(r"\)\s+(\d+)", r")\1", t) for t in g7_turns]
g7_pass, g7_bl = cloze_choice("\n\n".join(g7_turns))
set_answers(g7_bl, "robili wyglądałoby zostań połączylibyśmy weźcie jedźcie uwierzył poradzili myślcie zaproście".split(),
            {"ex1": "przedstawcie się", "ex2": "chcielibyście"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 20,
    "source": "Na podstawie: https://beforewegetold.pl/austria-rowerem-trasy-rowerowe",
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: prepositions from a box (example "po" printed in text)
_i8 = next(i for i, l in enumerate(test) if re.match(r"^VIII\.", l))
_e8 = next(i for i in range(_i8, len(test)) if "Na podstawie: Twój Styl, nr 10/2021/Wolna" in test[i])
g8_raw = join(after_points(test[_i8:_e8]))
g8_box = "z w nad po przez na za"
assert g8_raw.startswith(g8_box + " "), g8_raw[:40]
g8_raw = g8_raw[len(g8_box) + 1:]
g8_raw = g8_raw.replace("wkrótce po PRZYKŁAD przyjeździe", "wkrótce {{ex}} przyjeździe")
g8_raw = re.sub(r"\s*[….]{5,}\s*(\d)", r" {{\1}}", g8_raw)
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeBox", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (przyimki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 21,
    "source": "Na podstawie: Twój Styl, nr 10/2021/Wolna amerykanka",
    "wordBox": g8_box.split(), "distractors": ["na"],
    "passage": g8_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "po"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("w nad za przez z".split())],
}
grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [16, 21], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING
W_SETS = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "pozdrowienia", "wordTarget": 30, "prompt": "Jest Pani/Pan na zagranicznej wycieczce. Proszę napisać pozdrowienia do swojego nauczyciela języka polskiego."},
        {"id": "b", "genre": "sprawozdanie", "wordTarget": 170, "prompt": "Uczestniczyła Pani / Uczestniczył Pan w kursie gotowania „Obiady z całego świata”. Proszę napisać sprawozdanie (relację) dla polskiego portalu internetowego „Lubię Kuchnię”."}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 30, "prompt": "Pani/Pana kot nie wrócił do domu. Proszę napisać ogłoszenie, które rozwiesi Pani/Pan w okolicy."},
        {"id": "b", "genre": "opinia", "wordTarget": 170, "prompt": "Spędziła Pani / Spędził Pan wakacje w gospodarstwie agroturystycznym. Proszę napisać opinię na temat tego miejsca, którą zamieści Pani/Pan na polskim portalu turystycznym wartotuprzyjechac.pl."}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "zaproszenie", "wordTarget": 40, "prompt": "Pracuje Pani/Pan w polskiej bibliotece. Proszę napisać zaproszenie dla czytelników na spotkanie z autorem popularnych książek."},
        {"id": "b", "genre": "e-mail", "wordTarget": 160, "prompt": "Pani/Pana firma zmieniła lokalizację, teraz znajduje się w nowym budynku, w centrum miasta. Proszę napisać e-mail do kolegi z Polski i opisać swoje nowe biuro."}]},
]
w = writing_task(W_SETS, [23, 29])
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [22, 29], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "luty 2022", "examDates": "6-7.02.2022",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY). Word targets: set III is 40 + 160, sets I/II are 30 + 170 (sum 200).",
                       "Reading V is the word-box variant (clozeBox: 11 words in the box = 10 answers + the example word 'serwujemy', no distractor).",
                       "Listening V is a match table (national parks in column I -> statements A-F in column II, 5 x 1 p.).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
