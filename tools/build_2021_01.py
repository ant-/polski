#!/usr/bin/env python3
"""Builds data/2021-01.js. Run from anywhere: python3 tools/build_2021_01.py
Content = verbatim from sources/2021-01/test.txt (+ PDF page images for underlined/bold PRZYKŁAD answers and the underlined
parts of grammar V), keys = official 'Klucz do zadań' in transcript.txt. Adapted from tools/build_2024_02.py (docs/conversion-recipe.md).
2021 specifics: listening II = matching table, IV = persons->opinions (4 persons, 5 slots), V = picture matching (photos A-K);
reading V = box cloze; audio: whole plays only (per-item times are not reliable in 2021 sessions)."""
import json, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2021-01"
test = clean_lines(read(SID, "test.txt"))
OPT = lambda *texts: [{"id": "abc"[i], "text": t} for i, t in enumerate(texts)]


def mc_item(tid, n, prompt, opts, ans, **kw):
    return {"id": f"{tid}.{n}", "number": n, "prompt": prompt, "options": OPT(*opts), "answer": ans, **kw}


def sp_text(line):
    """'1. Przepraszam ... (K)' -> ('K', 'Przepraszam ...')"""
    m = re.match(r"^(?:\d+\.|Przykład:)?\s*(.*?)\s*\(([A-Z])\)\s*$", line.strip())
    assert m, line
    return m[2], m[1]


# =============================================================== LISTENING
# ---- l1: 14 single utterances (MC), 1 play
tr1 = transcript_block(SID, "I")
assert len(tr1) == 15
tr1 = [sp_text(l) for l in tr1]
l1_items = [
    ("Ta wypowiedź jest typowa", ["na przystanku.", "na dworcu kolejowym.", "na lotnisku."], "a"),
    ("Ta wypowiedź to", ["krytyka.", "wspomnienie.", "życzenie."], "b"),
    ("Ta wypowiedź jest typowa", ["w samolocie.", "w teatrze.", "w hotelu."], "a"),
    ("Ta wypowiedź to", ["rozkaz.", "komplement.", "krytyka."], "c"),
    ("Ta wypowiedź jest typowa", ["przy bankomacie.", "w domu.", "w supermarkecie."], "c"),
    ("Ta wypowiedź to", ["propozycja.", "prośba.", "zgoda."], "b"),
    ("Ta wypowiedź jest typowa", ["w aptece.", "w gabinecie kosmetycznym.", "u dentysty."], "a"),
    ("Ta wypowiedź to", ["rozkaz.", "życzenie.", "rada."], "c"),
    ("Ta wypowiedź jest typowa", ["w szatni.", "w sklepie obuwniczym.", "w metrze."], "b"),
    ("Ta wypowiedź to fragment", ["reklamy.", "serialu.", "reportażu."], "a"),
    ("Ta wypowiedź oznacza", ["radość.", "nadzieję.", "wątpliwość."], "c"),
    ("Ta wypowiedź jest typowa", ["w autobusie.", "na statku.", "w samolocie."], "a"),
    ("Ta wypowiedź to", ["prośba.", "zakaz.", "propozycja."], "b"),
    ("Ta wypowiedź jest typowa", ["w lesie.", "w sklepie.", "na ulicy."], "b"),
]
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
    "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 3,
    "audio": task_audio(SID, "I"),   # whole play only (2021: per-item times not reliable)
    "example": {"id": "l1.ex", "prompt": "Ta wypowiedź jest typowa", "options": OPT("w taksówce.", "w autobusie.", "w pociągu."),
                "answer": "a", "shown": True,   # PDF p.3: option a bold-underlined
                "transcript": {"sp": tr1[0][0], "t": tr1[0][1]}},
    "items": [mc_item("l1", i + 1, p, o, a, transcript={"sp": tr1[i + 1][0], "t": tr1[i + 1][1]}) for i, (p, o, a) in enumerate(l1_items)],
}

# ---- l2: matching table (column I -> column II), 5 x 1, 2 plays
l2_opts = {"A": "posiada ponad połowa polskich rodzin.", "B": "Polacy wybierają na podróże w czasie wakacji.",
           "C": "wybierają chętniej panie.", "D": "jest pojazdem, który nie powoduje korków w mieście.",
           "E": "Polacy lubią, ponieważ jest wygodny.", "F": "służy głównie do dalszych podróży krajowych."}
l2_key = "C F B A D".split()
l2_items = ["Samochód", "Pociąg", "Samolot", "Rower", "Hulajnoga elektryczna"]
l2_tr = join(transcript_block(SID, "II"))
l2 = {
    "id": "l2", "number": "II", "type": "match", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać tekstu na temat środków transportu w Polsce oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 4,
    "source": "Na podstawie: https://www.transport-publiczny.pl/wiadomosci/polacy-lubia-transport-publiczny-ale-kochaja-auta-badanie-60862.html https://mskip.pl/polacy-na-rowery-kto-jezdzi-najwiecej-i-dlaczego,a1499 https://www.tabletowo.pl/badanie-nastawienia-spolecznego-do-uto-hulajnog/",
    "audio": task_audio(SID, "II"),
    "transcript": {"text": l2_tr},
    "options": [{"id": k, "text": v} for k, v in l2_opts.items()],
    "example": {"id": "l2.ex", "prompt": "Transport publiczny", "answer": "E", "shown": True},   # PDF p.4: row E shaded
    "items": [{"id": f"l2.{i+1}", "number": i + 1, "prompt": p, "answer": l2_key[i]} for i, p in enumerate(l2_items)],
}

# ---- l3: TAK/NIE on an interview, 8 x 1
l3_blk = transcript_block(SID, "III")
l3_turns = []
for l in l3_blk:
    if l.strip().startswith("−"):
        l3_turns.append([l.strip()[1:].strip()])
    else:
        l3_turns[-1].append(l.strip())
l3_lines = [{"t": join(t)} for t in l3_turns]     # unlabelled Q/A dialogue (no speaker tags in the official transcript)
assert len(l3_lines) == 10
l3_st = ["Grażyna ma takie samo imię jak bohaterka literacka.", "Mała Grażyna była zadowolona z prezentu pod choinkę.",
         "Pierwszą książkę Grażyna przeczytała sama.", "Grażyna uważa, że szkoła zniechęca uczniów do czytania.",
         "Grażyna łączyła studia z pracą w domu kultury.", "Grażyna poznała swojego męża dzięki wyjazdom do ciotki.",
         "Grażyna obecnie nie mieszka w Polsce.", "Po przyjeździe do Niemiec Grażyna pracowała w bibliotece na pełny etat."]
l3_key = "TAK NIE NIE NIE NIE TAK TAK NIE".split()
l3 = {
    "id": "l3", "number": "III", "type": "tf", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wywiadu z panią Grażyną na temat literatury. Proszę zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "8 x 1 p.", "pointsPerItem": 1, "maxPoints": 8, "plays": 2, "pdfPage": 5,
    "source": "Na podstawie: Pożegnanie z królową książek, w: „Angora”, nr 29 (1570), 19 lipca 2020, s.76.",
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_lines},
    "example": {"id": "l3.ex", "statement": "Grażyna od dziecka interesuje się literaturą.", "answer": "TAK", "shown": True},   # PDF p.5: X in TAK
    "items": [{"id": f"l3.{i+1}", "number": i + 1, "statement": s, "answer": l3_key[i]} for i, s in enumerate(l3_st)],
}

# ---- l4: persons (1-4) -> opinions (A-D), 5 slots x 1
l4_blk = transcript_block(SID, "IV")
l4_turns = []
for l in l4_blk:
    if re.match(r"^\d\. ", l.strip()):
        l4_turns.append([l.strip()])
    else:
        l4_turns[-1].append(l.strip())
l4_lines = []
for i, t in enumerate(l4_turns, 1):
    sp, tx = sp_text(re.sub(r"^\d\.\s*", "", join(t)))
    l4_lines.append({"sp": f"Osoba {i} ({sp})", "t": tx})
assert len(l4_lines) == 4
l4 = {
    "id": "l4", "number": "IV", "type": "matchMulti", "grading": "auto",
    "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać tekstu na temat nadwagi u dzieci i dopasować osoby (1-4) do ich opinii (A-D). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
    "pointsFormula": "5 x 1 p.", "pointsPerSlot": 1, "maxPoints": 5, "plays": 2, "pdfPage": 6,
    "source": "Na podstawie: https://www.youtube.com/watch?v=2efcF44jJSU&list=PL-pfVXx0PQqeEKLrXSITvmwDCK0ZxX1e3&index=25",
    "audio": task_audio(SID, "IV"),
    "persons": [{"id": str(i), "label": f"osoba {i}"} for i in range(1, 5)],
    "example": {"id": "l4.ex", "statement": "myśli, że dzieci mają za mało ruchu.", "answer": ["2"], "shown": True},
    "statements": [
        {"id": "l4.A", "letter": "A", "text": "uważa, że jedzenie domowe jest lepsze niż gotowe posiłki.", "slots": 1, "answer": ["3"], "anyOrder": True, "starred": False},
        {"id": "l4.B", "letter": "B", "text": "wspomina o liczbie dzieci z nadwagą w Polsce.", "slots": 1, "answer": ["1"], "anyOrder": True, "starred": False},
        {"id": "l4.C", "letter": "C", "text": "wymienia podstawowe zasady dobrego żywienia.", "slots": 1, "answer": ["4"], "anyOrder": True, "starred": False},
        {"id": "l4.D", "letter": "D", "text": "sądzi, że ludzie są za mało cierpliwi.", "slots": 2, "answer": ["2", "3"], "anyOrder": True, "starred": False},
    ],
    "transcript": {"lines": l4_lines},
}

# ---- l5: picture matching, 10 texts <-> photos A-K (A = example), 10 x 0.5
l5_blk = transcript_block(SID, "V")
l5_turns = []
for l in l5_blk:
    if not l5_turns or re.match(r"^(Przykład:|\d+\. )", l.strip()):
        l5_turns.append([l.strip()])
    else:
        l5_turns[-1].append(l.strip())
assert len(l5_turns) == 12
intro_t = join(l5_turns[0]); m_ = re.match(r"^(.*?)\s*\(N\)\.?$", intro_t); assert m_
l5_lines = [{"sp": "N", "t": m_[1]}]
l5_ex_sp, l5_ex_t = sp_text(re.sub(r"^Przykład:\s*", "", join(l5_turns[1])))
l5_lines.append({"sp": f"Przykład ({l5_ex_sp})", "t": l5_ex_t})
for i, t in enumerate(l5_turns[2:], 1):
    sp, tx = sp_text(re.sub(r"^\d+\.\s*", "", join(t)))
    l5_lines.append({"sp": f"Tekst {i} ({sp})", "t": tx})
l5_key = {"B": "3", "C": "7", "D": "1", "E": "9", "F": "5", "G": "10", "H": "4", "I": "8", "J": "2", "K": "6"}
IMG = lambda L: f"data/img/{SID}/l5-{L}.jpg"
l5 = {
    "id": "l5", "number": "V", "type": "match", "grading": "auto",
    "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać tekstów o różnych sposobach spędzania wolnego czasu i dopasować numer tekstu do ilustracji.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "plays": 2, "pdfPage": 7,
    "source": "Źródło zdjęć: https://pixabay.com/pl/photos",
    "audio": task_audio(SID, "V"),
    "transcript": {"lines": l5_lines},
    # options = text numbers 1-10 + "PRZYKŁAD" (the example text, needed so the example answer is a valid option id)
    "options": [{"id": str(i), "text": str(i)} for i in range(1, 11)] + [{"id": "PRZYKŁAD", "text": "PRZYKŁAD"}],
    "example": {"id": "l5.ex", "label": "A", "image": IMG("A"), "answer": "PRZYKŁAD", "shown": True,
                "transcript": {"sp": l5_ex_sp, "t": l5_ex_t}},
    "items": [{"id": f"l5.{i+1}", "number": i + 1, "label": L, "image": IMG(L), "answer": a} for i, (L, a) in enumerate(l5_key.items())],
    "images": [{"id": L, "src": IMG(L), "alt": f"zdjęcie {L}"} for L in "ABCDEFGHIJK"],
    "pdfNotes": ["Photos A-K as on PDF p.7 (A = example); answer table is row per picture B-K -> text number (official key)."],
}

listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [3, 7], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
src_ = lambda s: "Na podstawie: " + s
r1_ex = {"id": "r1.ex",
         "passage": {"text": "Duże zachmurzenie czeka nas w drugiej części dnia na południowym wschodzie Polski. Przelotne opady deszczu pojawią się w województwach zachodniopomorskim i wielkopolskim, a na Podkarpaciu i w Małopolsce – burze.",
                     "source": src_("https://wiadomosci.gazeta.pl/wiadomosci/7,114883,25974170,pogoda-na-dzis-sroda-27-maja-rano-duzo-slonca-pozniej-wiecej.html")},
         "prompt": "Z tego tekstu wynika, że",
         "options": OPT("w całej Polsce będzie deszczowo.", "w niektórych regionach wystąpią burze.", "w godzinach porannych będzie pochmurno."),
         "answer": "b", "shown": True}   # PDF p.9: option b bold-underlined
r1_data = [
    ("Zapraszamy rodziców z dziećmi w wieku szkolnym do Muzeum Narodowego w Krakowie. Specjalnie przygotowane informacje o dziełach sztuki i artystach oraz towarzyszące im zadania pomogą rodzicom zainteresować dzieci kolekcją muzeum oraz sztuką.",
     "https://mnk.pl/artykul/rodzinne-sciezki-do-samodzielnego-zwiedzania-i-materialy-do-pobrania",
     "Z tego tekstu wynika, że", ["do muzeum uczniowie mogą przychodzić samodzielnie.", "muzeum przygotowało program zwiedzania dla rodzin.", "pracownicy muzeum chcą zainteresować rodziców sztuką."], "b"),
    ("Znany portal turystyczny opublikował listę trendów na nadchodzący sezon wakacyjny. Z danych wynika, że w tym roku zamiast pobytu w luksusowym hotelu i relaksu nad basenem, który zawsze zajmował pierwsze miejsce, Polacy wybiorą nocleg w namiocie lub w domku letniskowym.",
     "https://www.msn.com/pl-pl/podroze/news/wyjazdy-pod-namiot-to-jeden-z-trend%C3%B3w-na-wakacje-2020-piszemy-co-zabra%C4%87/ar-BB14FOLX?ocid=msedgdhp",
     "Z tego tekstu wynika, że w wakacje", ["największym zainteresowaniem będą się cieszyły kempingi.", "najwięcej turystów będzie w miejscowościach górskich.", "turyści najchętniej pojadą do dobrego hotelu."], "a"),
    ("Naukowcy udowodnili, że osoby, które w przedszkolu codziennie piły około 1,5 szklanki 100% soku owocowego, a w okresie dojrzewania jadły dużo owoców, nie mają nadwagi. Ponadto takie osoby w dorosłym życiu mają tendencję do utrzymywania zdrowszej diety.",
     "https://www.msn.com/pl-pl/zdrowie/nasze-zdrowie/picie-soku-owocowego-we-wczesnych-latach-ma-wp%c5%82yw-na-p%c3%b3%c5%baniejsze-wybory-%c5%bcywieniowe/ar-BB15hgxV?ocid=msedgdhp",
     "Z tego tekstu wynika, że dzieci, które piją soki owocowe,", ["zdrowiej się odżywiają w późniejszych latach życia.", "w dorosłym życiu rzadko jedzą owoce.", "z czasem zmieniają dietę na wegetariańską."], "a"),
    ("Na aukcji pojawiły się 93 prace najwybitniejszych polskich twórców z ostatnich 150 lat. Największym zainteresowaniem cieszył się wystawiony na sprzedaż obraz Jana Matejki „Portret Profesora Karola Gilewskiego”, który zaginął wiele lat temu.",
     "https://tvn24.pl/kultura-i-styl/obraz-jana-matejki-na-aukcji-portret-profesora-karola-gilewskiego-sprzedany-za-niemal-siedem-milionow-zlotych-4599911",
     "Z tego tekstu wynika, że na aukcji", ["kolekcjonerzy kupili 93 dzieła polskich artystów.", "zgubił się jeden z obrazów Jana Matejki.", "można było kupić obraz Jana Matejki."], "c"),
    ("Konkurs filmowy #63PL jest dla młodych ludzi w wieku od 15 do 22 lat, którzy chcą opowiedzieć o tym, co jest według nich najważniejsze w życiu. Aby wziąć udział w inicjatywie, należy nagrać filmik. Może być on nakręcony smartfonem, kamerą lub aparatem fotograficznym.",
     "https://pik.prawodlapraktykow.pl/nagraj-63-sekundowe-wideo-i-wez-udzial-w-konkursie-muzeum-powstania-warszawskiego/",
     "Z tego tekstu wynika, że", ["w konkursie mogą wziąć udział tylko profesjonalni filmowcy.", "na konkurs można przysłać film nagrany dowolnym urządzeniem.", "uczestnicy konkursu muszą nakręcić film o swoim codziennym życiu."], "b"),
]
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 9, "pdfPages": [9, 10],
    "example": r1_ex,
    "items": [{"id": f"r1.{i+1}", "number": i + 1, "passage": {"text": t, "source": src_(u)}, "prompt": p, "options": OPT(*o), "answer": a}
              for i, (t, u, p, o, a) in enumerate(r1_data)],
}

# ---- r2: TAK/NIE on one text
r2_lines = after_points(between(test, r"II\. Proszę przeczytać tekst", r"Na podstawie: https://wroclaw"))
r2_text = paras_by_indent(r2_lines)
assert len(r2_text) == 5, r2_text
r2_stm = ["We Wrocławiu jest kilka firm, które czyszczą i naprawiają buty.", "Pierwsze pary butów dla bezdomnych przynieśli pracownicy zakładu.",
          "Firma Pucybuty pomogła już wielu dzieciom z domu dziecka.", "Przekazywanie odnowionych butów bezdomnym to pomysł internautów.",
          "Obuwie można dostarczyć do firmy na kilka sposobów.", "Coraz więcej osób spoza Wrocławia chce pomóc bezdomnym.",
          "Firma Pucybuty zajmuje się teraz przede wszystkim pomocą ludziom potrzebującym."]
r2_key = "NIE TAK NIE NIE TAK TAK NIE".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 11,
    "source": "Na podstawie: https://wroclaw.onet.pl/wroclawska-firma-za-darmo-odnawia-buty-dla-bezdomnych/g52c5tl?srcc=ucs",
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "Pucybuty to firma z Wrocławia.", "answer": "TAK", "shown": True},   # PDF p.11: X in TAK
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
}

# ---- r3: fragments -> gaps
r3_lines = after_points(between(test, r"III\. Proszę przeczytać tekst i", r"Na podstawie: https://businessinsider.com.pl/media"))
r3_text = "\n\n".join(paras_by_indent(r3_lines))
r3_text = re.sub(r"\[_{2}D_{2}\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\](\d)", r"{{\1}}", r3_text)
r3_frag = {"A": "od razu może rozpocząć maraton", "B": "przyszła era kanałów tematycznych", "C": "postanowił udostępnić od razu",
           "D": "w ostatnich latach stał się bardzo popularny", "E": "składały się z kilku odcinków filmu", "F": "można w ten sposób wypełnić",
           "G": "od trzech do czterech odcinków na raz", "H": "wcześniej nagrywa na twarde dyski swoich dekoderów"}
r3_key = "B E C A G H F".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–H).",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 12,
    "source": "Na podstawie: https://businessinsider.com.pl/media/tv-radio/co-to-jest-binge-watching/822g6p",
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "D", "shown": True},    # printed in the text: [__D__]PRZYKŁAD
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs (A-G, example B)
r4_par = {
    "A": "Przeważnie w codziennym życiu zapominamy o tym, co już osiągnęliśmy. Nie powinno tak być! Jeżeli uda mi się coś, na czym mi zależało, to organizuję sobie nagrodę.",
    "B": "Nie planuję dokładnie swojego życia, ale określiłem sobie kilka celów, które chcę zrealizować. Równocześnie wiem, że pewnie nie wszystko uda się zrobić.",
    "C": "Przeczytałem, że większość problemów ludzi wynika z tego, że nie wiedzą, co lubią robić. Zrobiłem sobie listę 5 aktywności, które sprawiają mi przyjemność.",
    "D": "Nawet za nią tęsknię – za kawą przy komputerze czy za radiem w samochodzie. Trzeba doceniać małe rzeczy, bo jeśli ktoś nie potrafi się z nich cieszyć, to nie będzie się cieszyć z tych większych.",
    "E": "Długo nie wiedziałem, co chcę robić w życiu. Jednak kiedy w końcu wybrałem kierunek, realizuję marzenia i mogę wyobrazić sobie swoje dalsze życie.",
    "F": "Dbam o to, żeby życie było różnorodne. Czasami gotuję coś, czego nie jadłem albo zajmuję się czymś, czego do tej pory nie robiłem.",
    "G": "Bardzo ważna rzecz, dla mnie najtrudniejsza. Mam bardzo dużo różnych obowiązków i dlatego pilnuję, żeby mieć też czas na odpoczynek i kontakty z ludźmi.",
}
r4_titles = ["Zauważaj codzienność", "Zachowaj równowagę w życiu prywatnym i w pracy", "Świętuj sukcesy", "Próbuj nowych rzeczy",
             "Miej plan na przyszłość", "Poszukaj pomysłów na spędzanie wolnego czasu"]
r4_key = "D G A F E C".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 13,
    "source": "Na podstawie: https://zyciejestpiekne.eu/jak-nie-dac-sie-codziennej-monotonii/",
    "heading": "Jak nie dać się codziennej monotonii?",
    "prompt": "Autor bloga „Życie jest piękne” dzieli się doświadczeniami",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Miej jakieś cele", "answer": "B", "shown": True},
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
}

# ---- r5: box cloze, 10 x 0.5 (box = 10 answers + example word, no distractor)
r5_raw = after_points(between(test, r"V\. Proszę – zgodnie z przykładem – uzupełnić tekst wyrazami z ramki", r"Na podstawie: https://www.rmf24"))
r5_raw = join(r5_raw)
r5_box_txt = "warunki oprócz oferty urlopu obowiązkiem chwalić marzyć wypłaty w ciągu wyżywienie starać się"
assert r5_raw.startswith(r5_box_txt), r5_raw[:120]
r5_raw = r5_raw[len(r5_box_txt):].strip()
r5_raw = re.sub(r"ofertyPRZYKŁAD", "{{ex}}", r5_raw)
r5_raw = re.sub(r"\s*…[….\s]*?(\d+)(?=[\s,.])", r" {{\1}}", r5_raw)
r5_raw = re.sub(r"\s+", " ", r5_raw).replace(" ,", ",").replace(" .", ".")
r5_ans = "urlopu warunki obowiązkiem wyżywienie starać się chwalić w ciągu marzyć oprócz wypłaty".split()
r5_ans = ["urlopu", "warunki", "obowiązkiem", "wyżywienie", "starać się", "chwalić", "w ciągu", "marzyć", "oprócz", "wypłaty"]   # key 9 prints "Oprócz" (sentence start); box casing stored
r5 = {
    "id": "r5", "number": "V", "type": "clozeBox", "grading": "auto",
    "instruction": "V. Proszę – zgodnie z przykładem – uzupełnić tekst wyrazami z ramki.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 14,
    "source": "Na podstawie: https://www.rmf24.pl/ciekawostki/news-jest-praca-u-krolowej-elzbiety-ii-poszukiwana-jest-sprzatacz,nId,2260784",
    "wordBox": ["warunki", "oprócz", "oferty", "urlopu", "obowiązkiem", "chwalić", "marzyć", "wypłaty", "w ciągu", "wyżywienie", "starać się"],
    "distractors": [],
    "passage": r5_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "oferty"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate(r5_ans)],
}

reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [9, 14], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
# ---- g1: declension (3 examples; underlined in PDF p.16: olimpiadą / przepiękne / nim)
g1_raw = paras_by_blank(after_points(between(test, r"I\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych", r"Na podstawie: https://sport.onet")))
g1_pass, g1_bl = cloze_choice("\n\n".join(g1_raw))
set_answers(g1_bl, "dni budynku wysoka mi złe formę Włoscy trenerzy nich tych".split(), {"ex1": "olimpiadą", "ex2": "przepiękne", "ex3": "nim"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 16,
    "source": "Na podstawie: https://sport.onet.pl/lekkoatletyka/lekkoatletyka-jacek-wszola-historia/7ecej22",
    "passage": g1_pass, "blanks": g1_bl,
}

# ---- g2: conjunctions from a box (example: ponieważ), distractor ale
g2_raw = join(after_points(between(test, r"II\. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki \(spójniki\)", r"Na podstawie: https://noizz.pl/ekologia")))
g2_box = "bo żeby dlatego ponieważ że ale albo"
assert g2_raw.startswith(g2_box), g2_raw[:60]
g2_raw = g2_raw[len(g2_box):].strip()
g2_raw = re.sub(r"ponieważ\s+PRZYKŁAD", "{{ex}}", g2_raw)
g2_raw = re.sub(r"\s*[…\.]{3,}\s*(\d+)", r" {{\1}}", g2_raw)
g2_raw = re.sub(r"\s+", " ", g2_raw)
g2 = {
    "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
    "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 16,
    "source": "Na podstawie: https://noizz.pl/ekologia/5-tys-zl-dotacji-na-oczko-wodne-ekspert-komentuje-pomysl-dudy-moja-woda/de88hse",
    "wordBox": g2_box.split(), "distractors": ["ale"],
    "passage": g2_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "ponieważ"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("dlatego żeby że bo albo".split())],
}

# ---- g3: comparison (2 examples: najlepiej / najsilniejsze)
g3_raw = re.sub(r"\s+", " ", " ".join(after_points(between(test, r"III\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów", r"Na podstawie: https://kobieta.onet"))))
g3_pass, g3_bl = cloze_choice(g3_raw.strip())
set_answers(g3_bl, "Najgroźniejszymi Najzdrowsze droższe szybko dłużej".split(), {"ex1": "najlepiej", "ex2": "najsilniejsze"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "source": "Na podstawie: https://kobieta.onet.pl/zdrowie/zycie-i-zdrowie/kiedy-truskawki-szkodza/c3e13d3l",
    "passage": g3_pass, "blanks": g3_bl,
}

# ---- g4: verb forms (present & future), 2 examples printed in the text ("cieszą się (cieszyć się)PRZYKŁAD")
g4_paras = paras_by_indent(after_points(between(test, r"IV\. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami", r"Na podstawie: https://noizz.pl/podroze")))
assert len(g4_paras) == 4, len(g4_paras)
g4_raw = "\n\n".join(g4_paras)
g4_raw = g4_raw.replace("cieszą się (cieszyć się)PRZYKŁAD", "{{ex1}}").replace("będą wybierali (wybierać)PRZYKŁAD", "{{ex2}}")
g4_given = {}
def g4_rep(m):
    g4_given[m[1]] = m[2].strip()
    return " {{%s}}" % m[1]
g4_raw = re.sub(r"\s*\.{3,}\s*(\d+)\s*\(([^()]*)\)\d*", g4_rep, g4_raw)
g4_raw = re.sub(r"[ \t]+", " ", g4_raw).replace(" ,", ",").replace(" .", ".")
assert sorted(g4_given, key=int) == [str(i) for i in range(1, 11)], g4_given
g4_ans = [("powodują", []), ("szuka", []), ("wyjadą", []), ("Zacznie", []), ("weźmie", []), ("będą radzić", ["będą radzili"]),
          ("rozłoży", []), ("staną się", []), ("okaże się", []), ("będziemy chcieli", [])]
g4_bl = [{"id": "ex1", "example": True, "given": "cieszyć się", "answer": "cieszą się"},
         {"id": "ex2", "example": True, "given": "wybierać", "answer": "będą wybierali"}]
for i, (a, acc) in enumerate(g4_ans, 1):
    b = {"id": str(i), "given": g4_given[str(i)], "answer": a}
    if acc:
        b["accept"] = acc
    g4_bl.append(b)
g4 = {
    "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
    "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przyszły).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17, "pdfPages": [17, 18],
    "source": "Na podstawie: https://noizz.pl/podroze/jak-dzialaja-namioty-dmuchane-to-prosty-i-szybki-sposob-na-camping/6jrff5d",
    "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
    "passage": g4_raw, "blanks": g4_bl,
    "pdfNotes": ["Examples are printed in the text before their cue: 'cieszą się (cieszyć się)', 'będą wybierali (wybierać)'; item 3 and others repeat the superscript number after the cue (ignored)."],
}

# ---- g5: ask about the underlined part (underlines read from PDF p.18)
g5_q = [  # (sentence, underlined, stem, short answer, key, accept)
    ("Lubimy rozmawiać o samochodach.", "o samochodach", "…………… lubicie rozmawiać?", "O samochodach.", "O czym", []),
    ("Chodzę na basen dwa razy w tygodniu.", "dwa razy w tygodniu", "…………… chodzisz na basen?", "Dwa razy w tygodniu.", "Jak często", ["Ile razy w tygodniu"]),
    ("Powiedziałam jej o tym, bo musi znać prawdę.", "bo musi znać prawdę", "…………… jej o tym powiedziałaś?", "Bo musi znać prawdę.", "Po co", ["Dlaczego"]),
    ("Nie lubię lodów truskawkowych.", "truskawkowych", "…………… lodów nie lubisz?", "Truskawkowych.", "Jakich", []),
    ("Turyści spędzają wakacje nad morzem.", "nad morzem", "…………… turyści spędzają wakacje?", "Nad morzem.", "Gdzie", []),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Tomek idzie na spacer z Olą.", "underlined": "z Olą",
                "stem": "…………… Tomek idzie na spacer?", "shortAnswer": "Z Olą.", "answer": "Z kim", "shown": True},
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": acc}
              for i, (s, u, st, sa, a, acc) in enumerate(g5_q)],
    "pdfNotes": ["Official key prints the question word with decoration (O czym...?, Jak często...? / Ile razy w tygodniu…?); stored without it, match.stripChars ignores the decoration."],
}

# ---- g6: transformation (key = model sentences only, no partial-credit rubric printed in 2021-01)
g6_data = [
    ("Cieszę się, że dostałam tę nową pracę.", "z", "Cieszę się z tej nowej pracy.", []),
    ("Te dziewczyny mają tyle samo lat.", "wieku", "Te dziewczyny są w tym samym wieku.", ["Te dziewczyny są w takim samym wieku."]),
    ("Mojemu bratu smakuje pizza.", "lubi", "Mój brat lubi pizzę.", []),
    ("Studenci nie wiedzą, jak napisać to zadanie.", "nie umieją", "Studenci nie umieją napisać tego zadania.", ["Studenci nie umieją zrobić tego zadania."]),
    ("Często mam bóle pleców.", "bolą", "Często bolą mnie plecy.", []),
]
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 19,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Filip lubi matematykę.", "hint": "przedmiot", "answer": "Matematyka to ulubiony przedmiot Filipa.", "shown": True},
    "items": [{"id": f"g6.{i+1}", "number": i + 1, "source": s, "hint": h, "answer": a, **({"accept": acc} if acc else {})}
              for i, (s, h, a, acc) in enumerate(g6_data)],
    "pdfNotes": ["The 2021-01 key lists model sentences only (no partial-credit rubric text), so items carry no rubricParts."],
}

# ---- g7: aspect & mood (2 examples: opowiedziałbyś / zróbmy), dialogue
g7_lines = after_points(between(test, r"VII\. Proszę – zgodnie z przykładami", r"Na podstawie: https://kultura.onet"))
g7_turns, cur = [], []
for l in g7_lines:
    if re.match(r"^(Dziennikarka|Piotr Wolny):", l.strip()) and cur:
        g7_turns.append(join(cur)); cur = []
    if l.strip():
        cur.append(l)
g7_turns.append(join(cur))
g7_turns = [re.sub(r"\)\s+(\d+)", r")\1", t) for t in g7_turns]
g7_pass, g7_bl = cloze_choice("\n\n".join(g7_turns))
set_answers(g7_bl, "wzięli się|udałoby się|Myślmy|bądźcie|się spodobały|mów|stałoby się|miał|Napiszcie|poznają".split("|"),
            {"ex1": "opowiedziałbyś", "ex2": "zróbmy"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 20,
    "source": "Na podstawie: https://kultura.onet.pl/wywiady-i-artykuly/alek-rokosz-jestesmy-odpowiedzialni-za-nasz-swiat/qbrm1rf",
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: prepositions from a box (example: od), distractor między
g8_raw = join(after_points(between(test, r"VIII\. Proszę – zgodnie z przykładem", r"Na podstawie: https://businessinsider.com.pl/technologie")))
g8_box = "o na od z między po przed"
assert g8_raw.startswith(g8_box), g8_raw[:60]
g8_raw = g8_raw[len(g8_box):].strip()
g8_raw = re.sub(r"\bod\s+PRZYKŁAD", "{{ex}}", g8_raw)
g8_raw = re.sub(r"\s*[…\.]{3,}\s*(\d+)", r" {{\1}}", g8_raw)
g8_raw = re.sub(r"\s+", " ", g8_raw)
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeBox", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (przyimki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 21,
    "source": "Na podstawie: https://businessinsider.com.pl/technologie/nowe-technologie/paula-januszkiewicz-o-cyberbezpieczenstwie-polka-z-dostepem-do-kodu-zrodlowego/xgyg66e",
    "wordBox": g8_box.split(), "distractors": ["między"],
    "passage": g8_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "od"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("na po z przed o".split())],
}

grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [16, 21], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING
w_sets = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "zaproszenie", "wordTarget": 30, "prompt": "Pracuje Pani/Pan w polskiej firmie. Na prośbę dyrektora organizuje Pani/Pan przyjęcie powitalne dla nowych pracowników. Proszę napisać zaproszenie do koleżanek/kolegów z pracy na to spotkanie."},
        {"id": "b", "genre": "opowiadanie", "wordTarget": 170, "prompt": "Proszę napisać opowiadanie pod tytułem „To był mój pierwszy dzień w Polsce”, które wyśle Pani/Pan na konkurs dla cudzoziemców organizowany przez szkołę językową, w której uczy się Pani/Pan języka polskiego.", "title": "To był mój pierwszy dzień w Polsce"}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "e-mail", "wordTarget": 60, "prompt": "Szuka Pani/Pan miejsca na wakacje dla swojej rodziny. Przeczytała Pani / Przeczytał Pan ogłoszenie: Do wynajęcia domki na lato nad morzem. Kontakt domki@morze.pl Proszę napisać e-mail, w którym przedstawi Pani/Pan swoje oczekiwania oraz zapyta o szczegóły oferty: cena, termin, lokalizacja, wyposażenie."},
        {"id": "b", "genre": "opinia", "wordTarget": 140, "prompt": "Oglądała Pani / Oglądał Pan ostatnio dobry film. Proszę napisać o nim opinię, którą zamieści Pani/Pan na polskim portalu internetowym Dobre-Kino.pl. Proszę podać tytuł filmu, krótko opisać jego treść i przedstawić swoją ocenę."}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 30, "prompt": "Chce Pani/Pan sprzedać używane biurko komputerowe. Proszę napisać ogłoszenie do gazety."},
        {"id": "b", "genre": "esej", "wordTarget": 170, "prompt": "Proszę napisać esej szkolny (wypracowanie) na temat: „Przyjaciel ze szkoły to przyjaciel na całe życie”.", "title": "Przyjaciel ze szkoły to przyjaciel na całe życie"}]},
]
w = writing_task(w_sets, [23, 29])
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [22, 29], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "styczeń 2021", "examDates": "30-31.01.2021",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear; 2021 sessions: only whole plays are offered (per-item times unreliable).",
                       "Listening II = matching table (column I -> A-F), IV = persons 1-4 -> opinions A-D (5 slots), V = picture matching: 10 texts <-> photos A-K (A = example, key row per photo).",
                       "Reading V is a word-box cloze (10 answers + example word, no spare word); reading III has A-H, IV has A-G (all used incl. the example).",
                       "Listening V options: texts 1-10 plus a 'PRZYKŁAD' option so that the example (photo A) has a valid answer id.",
                       "Listening III transcript is an unlabelled Q/A dialogue (the official transcript has no speaker tags)."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
    # manifest.js is merged by the coordinator: {"id": "2021-01", "label": "styczeń 2021"}
