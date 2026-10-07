#!/usr/bin/env python3
"""Builds data/2024-02.js. Run from anywhere: python3 tools/build_2024_02.py
Content = verbatim from sources/2024-02/test.txt (+ PDF images for underlined/bold PRZYKŁAD answers),
keys = official 'Klucz do zadań' in transcript.txt. Template for other sessions (docs/conversion-recipe.md)."""
import copy, json, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2024-02"
test = clean_lines(read(SID, "test.txt"))
EX = json.load(open(f"{ROOT}/docs/example-2024-02.json"))   # worked examples (hand-verified) reused for l1,l4,l5,r5,g2,g4,g6,w
ex = {t["id"]: t for t in EX["tasks"]}
OPT = lambda *texts: [{"id": "abc"[i], "text": t} for i, t in enumerate(texts)]


def mc_item(tid, n, prompt, opts, ans, **kw):
    return {"id": f"{tid}.{n}", "number": n, "prompt": prompt, "options": OPT(*opts), "answer": ans, **kw}


# =============================================================== LISTENING
# ---- l1: reuse (14 single utterances), refresh audio from audio_segments.json
l1 = copy.deepcopy(ex["l1"])
a1 = task_audio(SID, "I", ["l1.ex"] + [f"l1.{i}" for i in range(1, 15)])
assert a1 == ex["l1"]["audio"], "audio drift vs example"
l1["audio"] = a1

# ---- l2: 6 dialogues, MC
l2_tr = [  # transcript.txt TRANSKRYPCJA II (official typo: item 6 both lines tagged (M))
    [("K", "Czy problem jest poważny?"), ("M", "To płyta główna. Powinna pani zostawić komputer w serwisie.")],
    [("M", "Co myślisz o tym nowym sklepie ze zdrową żywnością?"), ("K", "Nie polecam ci. Tam jest bardzo drogo.")],
    [("K", "O nie, znowu wszystkie miejsca parkingowe przed sklepem są zajęte."), ("M", "Mówiłem ci, że trzeba wychodzić wcześniej z domu.")],
    [("K", "Czy autobus do centrum już odjechał?"), ("M", "Tak, 5 minut temu.")],
    [("M", "Co kupiłaś Basi na imieniny?"), ("K", "Nie mogę powiedzieć, to niespodzianka.")],
    [("M", "Czy wszystko panu smakowało?"), ("M", "Tak, ale zupa mogłaby być trochę cieplejsza.")],
]
tr2 = lambda d: {"lines": [{"sp": s, "t": t} for s, t in d]}
l2_key = "a b c c b a".split()
l2_items = [
    ("Z tego dialogu wynika, że komputer", ["należy naprawić.", "jest sprawny.", "trzeba sprzedać."]),
    ("Z tego dialogu wynika, że kobieta", ["zachęca do kupowania w tym sklepie.", "informuje o wysokich cenach w sklepie.", "poleca pracę w sklepie."]),
    ("Z tego dialogu wynika, że", ["para wyszła za wcześnie z domu.", "kobieta bardzo się spieszy na zakupy.", "na parkingu nie ma wolnych miejsc."]),
    ("Z tego dialogu dowiadujemy się, że", ["autobus przyjedzie za kilka minut.", "mężczyzna nie wie, o której był autobus.", "kobieta przyszła za późno na przystanek."]),
    ("Z tego dialogu dowiadujemy się, że", ["kobieta jeszcze nic nie kupiła.", "prezent dla Basi to sekret.", "Basia nie chce prezentu na urodziny."]),
    ("Z tego dialogu dowiadujemy się, że", ["potrawa była trochę za zimna.", "klient jest bardzo niezadowolony.", "mężczyzna chwali potrawę."]),
]
l2 = {
    "id": "l2", "number": "II", "type": "mc", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać dialogów i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "plays": 2, "pdfPage": 4,
    "audio": task_audio(SID, "II", ["l2.ex"] + [f"l2.{i}" for i in range(1, 7)]),
    "example": {"id": "l2.ex", "prompt": "Z tego dialogu wynika, że",
                "options": OPT("oni pójdą do teatru dziś wieczorem.", "ona proponuje pójść do kina na film.", "on teraz nie chce iść do teatru."),
                "answer": "c", "shown": True,   # PDF p.4: option c bold-underlined
                "transcript": tr2([("K", "Masz ochotę pójść na jakieś przedstawienie?"), ("M", "Może innym razem.")])},
    "items": [mc_item("l2", i + 1, p, o, l2_key[i], transcript=tr2(l2_tr[i])) for i, (p, o) in enumerate(l2_items)],
}

# ---- l3: interview MC (transcript parsed from transcript.txt)
l3_tr = speaker_lines(transcript_block(SID, "III"))
assert [x["sp"] for x in l3_tr] == list("MKMKMKMKMK")
l3_key = "c b b b c".split()
l3_items = [
    ("Kontenery na ubrania znajdują się", ["przy każdej większej szkole w Polsce.", "w największych miastach w Polsce.", "zarówno w małych, jak i dużych miastach w Polsce."]),
    ("Firma Wtórpol", ["produkuje ubrania z odpadów.", "zajmuje się recyklingiem polskich ubrań.", "importuje ubrania z Zachodu i sprzedaje w Polsce."]),
    ("Najlepsze ubrania, które ma firma Wtórpol, są", ["wysyłane za granicę do biedniejszych krajów.", "sprzedawane w sklepach w Polsce.", "oddawane do miejsc dla bezdomnych psów lub kotów."]),
    ("Podczas akcji „Zrób porządek w szafie” uczniowie", ["zajmują się w firmie Wtórpol sortowaniem ubrań.", "robią prezentacje i uczą się o recyclingu.", "pomagają sprzątać w schroniskach."]),
    ("Ubrania, których uczniowie już nie potrzebują,", ["powinny być oddane firmie Wtórpol.", "muszą zostać wrzucone do specjalnego kontenera.", "mogą być przekazane biedniejszym."]),
]
l3 = {
    "id": "l3", "number": "III", "type": "mc", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wywiadu na temat firmy zajmującej się niepotrzebnymi ubraniami i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 5,
    "source": "Na podstawie: https://casbeg.com/pl/blog/nietypowe-branze-wtorpol/",
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_tr},
    "example": {"id": "l3.ex", "prompt": "Firma Wtórpol zbiera ubrania",
                "options": OPT("z pomocą wolontariuszy.", "do specjalnych kontenerów.", "dzięki podróżowaniu po Polsce."),
                "answer": "b", "shown": True},   # PDF p.5: option b bold-underlined
    "items": [mc_item("l3", i + 1, p, o, l3_key[i]) for i, (p, o) in enumerate(l3_items)],
}

# ---- l4, l5: reuse
l4 = copy.deepcopy(ex["l4"]); l4["audio"] = task_audio(SID, "IV")
assert l4["audio"] == ex["l4"]["audio"]
l4_tr = speaker_lines(transcript_block(SID, "IV"), {"Dz": "Dziennikarka", "P": "Programista"})
assert l4_tr == l4["transcript"]["lines"], "l4 transcript differs from parser"
l4["source"] = l4.get("source")
l5 = copy.deepcopy(ex["l5"]); l5["audio"] = task_audio(SID, "V", [f"p{i}" for i in range(1, 6)])
assert l5["audio"] == ex["l5"]["audio"]

listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [3, 7], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
src_ = lambda s: "Na podstawie: " + s
r1_ex = {"id": "r1.ex",
         "passage": {"text": "Sardynia jest atrakcją turystyczną na Morzu Śródziemnym. Niewielka wieś, Ollolai, która znajduje się na wyspie, ma jednak problem z małą populacją mieszkańców. Aby to zmienić, wymyślono specjalny program dla osób pracujących zdalnie: mogą wynająć w Ollolai dom za 1 euro. Celem projektu jest zwiększenie liczby mieszkańców wsi.",
                     "source": src_("https://geekweek.interia.pl/podroze/news-pracujesz-zdalnie-zamieszkaj-na-sardynii-za-1-euro,nId,7040797")},
         "prompt": "Z tego tekstu wynika, że w Ollolai",
         "options": OPT("odbędzie się szkolenie dla osób aktywnych zawodowo.", "można tanio kupić dom i pracować on-line.", "powstał innowacyjny projekt."),
         "answer": "c", "shown": True}   # PDF p.9: option c bold-underlined
r1_data = [
    ("Dzień kuriera zaczyna się wcześnie rano w magazynie, gdzie odbiera przesyłki, sprawdza je i aktualizuje ich dane w systemie informatycznym. Praca jest dynamiczna, a każdy dzień inny. Osoby zatrudnione na tym stanowisku powinny być przede wszystkim punktualne. Dodatkowo kurierzy muszą mieć dobrą orientację w terenie i nie bać się pracy fizycznej.",
     "https://polki.pl/praca-i-finanse/praca,praca-jako-kurier-z-czym-musi-sie-mierzyc-na-co-dzien,10446655,artykul.html",
     "Z tego tekstu wynika, że", ["kurierzy rano przywożą paczki do magazynu.", "kurierzy muszą obsługiwać programy komputerowe.", "praca kuriera jest stresująca i niebezpieczna."], "b"),
    ("W tureckiej Kapadocji można oglądać piękne krajobrazy. To także najpopularniejsze miejsce na lot balonem, a samo doświadczenie jest niezwykłe. Tysiące balonów lata tam co rano przez około 250 dni w roku – również zimą. Bilety należy zarezerwować wcześniej, ponieważ chętnych jest dużo.",
     "https://www.travelplanet.pl/blog/loty-balonem-w-turcji-zbior-informacji/",
     "Z tego tekstu wynika, że", ["Kapadocję można oglądać również z powietrza.", "od grudnia do marca loty balonem się nie odbywają.", "zainteresowanie atrakcją jest niewielkie."], "a"),
    ("Rodzice często zastanawiają się, kiedy przychodzi najlepszy moment, żeby pójść z dzieckiem do teatru. Odpowiedź jest prosta: jak najwcześniej. Repertuar powinien być jednak dostosowany do wieku. W ofercie współczesnych instytucji są spektakle nawet dla dzieci, które mają dopiero kilka miesięcy.",
     "https://endo.pl/blog/dlaczego-warto-chodzic-z-dzieckiem-do-teatru/",
     "Z tego tekstu wynika, że", ["rodzice rzadko szukają przedstawień dla dzieci.", "dzieci najlepiej bawią się na spektaklach porannych.", "teatry proponują przedstawienia dla różnych grup wiekowych."], "c"),
    ("Od września do szkoły podstawowej w Kętach codziennie przychodzi pies o imieniu Wally. Zwierzę towarzyszy uczniom na lekcjach. Inicjatorką akcji jest nauczycielka przyrody i biologii, specjalistka dogoterapii, Monika Kojder. Uczniowie byli bardziej zainteresowani tematyką zajęć, kreatywni, spokojniejsi i szybciej pracowali, gdy Wally był w klasie.",
     "https://stylzycia.radiozet.pl/zwierzeta/pies-wally-pomaga-uczniom-szkoly-w-ketach-w-nauce-nie-moga-doczekac-sie-kolejnych-zajec",
     "Z tego tekstu wynika, że", ["Wally bawi się z uczniami między lekcjami.", "pomysł nauczycielki daje dobre efekty.", "pies Wally przeszkadza dzieciom w nauce."], "b"),
    ("Najbardziej depresyjny dzień w roku to trzeci poniedziałek stycznia. Termin Blue Monday w 2004 roku wymyślił Cliff Arnall, brytyjski psycholog. Przeanalizował trzy czynniki: niezbyt dobrą pogodę o tej porze roku, złą kondycję finansową po świętach i niską motywację do pracy. Wielu naukowców nie akceptuje jednak wyników jego analiz.",
     "https://stylzycia.polki.pl/psychologia,blue-monday-2020-co-to-za-dzien-i-kiedy-przypada-w-tym-roku,10432220,artykul.html",
     "Z tego tekstu wynika, że", ["Blue Monday przypada pod koniec roku.", "stan konta nie decyduje o naszym samopoczuciu.", "część badaczy nie zgadza się z teorią Arnalla."], "c"),
]
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 9, "pdfPages": [9, 10],
    "example": r1_ex,
    "items": [{"id": f"r1.{i+1}", "number": i + 1, "passage": {"text": t, "source": src_(u)}, "prompt": p, "options": OPT(*o), "answer": a}
              for i, (t, u, p, o, a) in enumerate(r1_data)],
}

# ---- r2: TAK/NIE on one text (paragraphs parsed from test.txt)
r2_lines = between(test, r"II\. Proszę przeczytać tekst", r"Na podstawie: https://teleskop")
r2_lines = after_points(r2_lines)
r2_text = paras_by_indent(r2_lines)
assert len(r2_text) == 3, r2_text
r2_stm = ["Dzień Nauki Polskiej świętujemy już od dawna.", "W tym dniu mówi się o naukowcach z całego świata.",
          "Głównym celem święta jest promocja nauki wśród dzieci i młodzieży.",
          "Data Dnia Polskiej Nauki jest wyrazem szacunku dla osiągnieć wielkiego Polaka.",   # sic: "osiągnieć" is printed so in the booklet
          "Nieskomplikowaną aparaturę do badań można łatwo kupić.", "Dzień Nauki Polskiej jest okazją do współpracy szkół z biznesem."]
r2_key = "NIE NIE TAK TAK TAK TAK".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 11,
    "source": "Na podstawie: https://teleskop.pl/pl/blog/dzien-nauki-polskiej-1676644166.html",
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "Tekst dotyczy święta religijnego.", "answer": "NIE", "shown": True},
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
    "pdfNotes": ["Statement 4 prints „osiągnieć” (sic) in the booklet; kept verbatim."],
}

# ---- r3: fragments -> gaps
r3_lines = between(test, r"III\. Proszę przeczytać tekst i", r"Na podstawie: https://rynekpierwotny")
r3_lines = after_points(r3_lines)
r3_text = "\n\n".join(paras_by_indent(r3_lines))
r3_text = re.sub(r"\[_{2}C_{2}\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\](\d)", r"{{\1}}", r3_text).replace(" m2", " m²")
r3_frag = {"A": "na przykład przy uniwersytetach", "B": "a konkretnie z Nowego Jorku", "C": "czyli małe lokale z aneksem kuchennym",
           "D": "które planowały kupić mieszkanie", "E": "które aktualnie mają młodzi Polacy", "F": "gdzie metr kwadratowy kosztuje",
           "G": "a pierwsze mikrokawalerki powstały", "H": "więc zawsze będą zainteresowani"}
r3_key = "E A H B G D F".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–H).",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 12,
    "source": "Na podstawie: https://rynekpierwotny.pl/wiadomosci-mieszkaniowe/mikroapartamenty-w-modzie/10423/",
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "C", "shown": True},    # printed in the text: [__C__]PRZYKŁAD
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs
r4_par = {
    "A": "Dorosłe zwierzę może zostać w mieszkaniu bez opiekuna pod warunkiem, że będziemy go tego systematycznie uczyć.",
    "B": "Adopcja wiąże się z wzięciem odpowiedzialności za zwierzę na długo. Duże psy żyją średnio dwanaście lat, a małe jeszcze dłużej.",
    "C": "Opiekunowie psów są często zaskoczeni, że od czasu gdy zwierzę mieszka z nimi, muszą poświęcić więcej czasu na sprzątanie.",
    "D": "„Taki mały piesek nie zje zbyt wiele! To nie może dużo kosztować” – myślą niektórzy. Jednak opieka nad zwierzęciem, to nie tylko cena karmy, ale i wizyty u weterynarza czy regularne szczepienia.",
    "E": "Jeśli nie zgadzamy się na spanie w łóżku czy proszenie o jedzenie przy stole, już na samym początku powinniśmy ustalić pewne reguły. Ważne jest, aby cała rodzina konsekwentnie wychowywała zwierzę.",
    "F": "Coraz więcej jest hoteli i pensjonatów, do których można przyjechać ze zwierzęciem i razem z nim spędzić wakacje.",
    "G": "Wyjście na zewnątrz, gdy świeci słońce, to czysta przyjemność. Jednak przyszły członek rodziny nie może zostać w domu tylko dlatego, że jest zimno lub pada deszcz.",
    "H": "Należy przemyśleć, jaki typ psa będzie pasował do rodziny i jej stylu życia. Jeśli większość wolnego czasu spędzacie w domu, wybierzcie spokojniejsze zwierzę.",
}
r4_titles = ["Obowiązki i wydatki", "Dopasowanie charakterów", "Samotne chwile", "Spacer również w niepogodę", "Porządek musi być",
             "Wspólny wypoczynek", "Szkolenie od pierwszych dni"]
r4_key = "D H A G C F E".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 13,
    "source": "Na podstawie: https://www.zooplus.pl/magazyn/psy/adopcja-psa/10-rzeczy-o-ktorych-musisz-wiedziec-przed-adopcja-psa#przed-adopcj%C4%85-psa-nie-ka%C5%BCdy-pies-pasuje-do-ka%C5%BCdego",
    "heading": "Co trzeba wiedzieć przed adopcją psa",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Decyzja na wiele lat", "answer": "B", "shown": True},
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
}

r5 = copy.deepcopy(ex["r5"])
reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [9, 14], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
# ---- g1: declension (clozeChoice, 3 examples; underlined in PDF p.16: najciekawszych / roku / nas)
g1_raw = paras_by_blank(after_points(between(test, r"I\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych", r"Na podstawie: Malowani")))
g1_pass, g1_bl = cloze_choice("\n\n".join(g1_raw))
g1_key = "malarskiej typowym jego aktorzy kadrem fascynujących tej ojcu im wsi".split()
set_answers(g1_bl, g1_key, {"ex1": "najciekawszych", "ex2": "roku", "ex3": "nas"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 16,
    "source": "Na podstawie: Malowani „Chłopi” zapowiadają się na hit. Polski film na pełnym zwiastunie | Eurogamer.pl",
    "passage": g1_pass, "blanks": g1_bl,
}

g2 = copy.deepcopy(ex["g2"])

# ---- g3: comparison (clozeChoice, 2 examples: gorsza / zdecydowanie)
g3_raw = " ".join(after_points(between(test, r"III\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów", r"Na podstawie: 10 nietypowych")))
g3_raw = re.sub(r"\s+", " ", g3_raw)
g3_pass, g3_bl = cloze_choice(g3_raw)
set_answers(g3_bl, "najtrudniejsza rzadziej szybciej więcej popularnym".split(), {"ex1": "gorsza", "ex2": "zdecydowanie"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "source": "Na podstawie: 10 nietypowych sportów zimowych, w których warto się sprawdzić | activeManiaK - portal dla aktywnych",
    "passage": g3_pass, "blanks": g3_bl,
}

g4 = copy.deepcopy(ex["g4"]); g4["pdfPages"] = [17, 18]

# ---- g5: ask about the underlined part
g5_q = [  # (sentence, underlined, stem, short answer, key)
    ("Robert zaraził się grypą od Stefana.", "grypą", "…………… zaraził się Robert od Stefana?", "Grypą.", "Czym"),
    ("Długo czekałem pod szkołą na mamę.", "na mamę", "…………… długo czekałeś pod szkołą?", "Na mamę.", "Na kogo"),
    ("Basia studiuje medycynę piąty rok.", "piąty", "…………… rok Basia studiuje medycynę?", "Piąty.", "Który"),
    ("Babcia cieszy się z wizyty wnuków.", "z wizyty wnuków", "…………… cieszy się babcia?", "Z wizyty wnuków.", "Z czego"),
    ("Nauczyciel sprawdzi testy na początku przyszłego tygodnia.", "na początku przyszłego tygodnia", "…………… nauczyciel sprawdzi testy?", "Na początku przyszłego tygodnia.", "Kiedy"),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Staś był wczoraj z wizytą u brata.", "underlined": "u brata",
                "stem": "…………… wczoraj Staś był z wizytą?", "shortAnswer": "U brata.", "answer": "U kogo", "shown": True},
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": []}
              for i, (s, u, st, sa, a) in enumerate(g5_q)],
    "pdfNotes": ["Official key prints the question word with decoration (Czym…?, Na kogo…?); stored without it, match.stripChars ignores the decoration."],
}

g6 = copy.deepcopy(ex["g6"])

# ---- g7: aspect & mood (2 examples: Posłuchaj / mógłbym), dialogue
g7_lines = after_points(between(test, r"VII\. Proszę – zgodnie z przykładami", r"^VIII\."))
g7_turns, cur = [], []
for l in g7_lines:
    if re.match(r"^(Mąż|Żona):", l.strip()) and cur:
        g7_turns.append(join(cur)); cur = []
    if l.strip():
        cur.append(l)
g7_turns.append(join(cur))
g7_turns = [re.sub(r"\)\s+(\d+)", r")\1", t) for t in g7_turns]
g7_pass, g7_bl = cloze_choice("\n\n".join(g7_turns))
set_answers(g7_bl, "zapytaj chciałaby przydały przeprowadziłbyś żartuj tęskniłbym spędzalibyśmy pojedźmy da Porozmawiaj".split(),
            {"ex1": "Posłuchaj", "ex2": "mógłbym"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 20,
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: prepositions from a box
g8_raw = join(after_points(between(test, r"VIII\. Proszę – zgodnie z przykładem", r"Na podstawie: Projekt ogrodu")))
g8_raw = re.sub(r"(?<=\S)\s*…{3,}\s*(\d)", r" {{\1}}", g8_raw)
g8_raw = re.sub(r"przezPRZYKŁAD", "{{ex}}", g8_raw)
g8_raw = re.sub(r"\s+", " ", g8_raw)
assert g8_raw.startswith("z w przez na bez na wokół "), g8_raw[:40]   # the word box is printed as the first body line
g8_raw = g8_raw[len("z w przez na bez na wokół "):]
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeBox", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (przyimki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 20, "pdfPages": [20, 21],
    "source": "Na podstawie: Projekt ogrodu - najważniejsze zasady planowania ogrodu - murator.pl (muratordom.pl)",
    "wordBox": ["z", "w", "przez", "na", "bez", "na", "wokół"], "distractors": ["bez"],
    "passage": g8_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "przez"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("wokół z na w na".split())],
}

grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [16, 21], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING
w = writing_task(ex["w"]["sets"], [23, 29])   # prompts: verify against test.txt (see validate.py --verbatim)
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [22, 29], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "luty 2024", "examDates": "4-5.02.2024",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
    print(update_manifest([{"id": SID, "label": "luty 2024"}]))
