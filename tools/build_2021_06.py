#!/usr/bin/env python3
"""Builds data/2021-06.js. Run from anywhere: python3 tools/build_2021_06.py
Content = verbatim from sources/2021-06/test.txt (+ PDF page images for underlined/bold PRZYKŁAD answers),
keys = official 'Klucz do zadań' in transcript.txt. Adapted from build_2024_02.py (docs/conversion-recipe.md).
Does NOT touch data/manifest.js (done by the coordinator)."""
import json, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2021-06"
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


def dialogues(sid, roman):
    """TRANSKRYPCJA II (dialogue per item, '- ' turns tagged (K)/(M)) -> {label: [{sp,t}]}."""
    txt = re.sub(r"\s+", " ", " ".join(l.strip() for l in transcript_block(sid, roman)))
    chunks = re.split(r"(?<=\)) (?=\d+\. -)", txt)
    out = {}
    for c in chunks:
        m = re.match(r"^(Przykład:|\d+\.) (.*)$", c)
        lab = "ex" if m[1].startswith("Przykład") else m[1].rstrip(".")
        out[lab] = [{"sp": sp, "t": t.strip()} for t, sp in re.findall(r"-\s*(.*?)\s*\(([KM])\)", m[2])]
    return out


# =============================================================== LISTENING
# ---- l1: 14 single utterances MC, 1 play
l1_tr = numbered_block(SID, "I")
assert list(l1_tr) == ["ex"] + [str(i) for i in range(1, 15)], list(l1_tr)
l1_key = "a c a b a b c a c a b b b c".split()
l1_items = [
    ("Ta wypowiedź ma miejsce", ["po meczu.", "na granicy.", "u weterynarza."]),
    ("Ta wypowiedź oznacza", ["propozycję.", "radę.", "odmowę."]),
    ("Ta wypowiedź jest typowa", ["w księgarni.", "w biurze podróży.", "w muzeum."]),
    ("Ta wypowiedź to", ["zawiadomienie.", "zaproszenie.", "rozkaz."]),
    ("Ta wypowiedź jest typowa", ["w pubie.", "w aptece.", "w serwisie samochodowym."]),
    ("Ta wypowiedź oznacza, że ona jest", ["zachwycona.", "rozczarowana.", "szczęśliwa."]),
    ("Ta wypowiedź oznacza, że on zadzwonił", ["do lekarza.", "do sąsiada.", "do hydraulika."]),
    ("To wypowiedź", ["szefa.", "pracownika.", "klienta."]),
    ("Ta wypowiedź oznacza", ["radę.", "podziękowanie.", "pochwałę."]),
    ("Ta wypowiedź jest typowa", ["w szpitalu.", "w kuchni.", "u fryzjera."]),
    ("Ta wypowiedź to", ["rozkaz.", "komplement.", "krytyka."]),
    ("Ta wypowiedź jest typowa", ["w szkole.", "u dentysty.", "w serwisie samochodowym."]),
    ("Ta wypowiedź oznacza, że ona", ["jest zdenerwowana.", "ma wątpliwości.", "prosi o życzenia."]),
    ("Ta wypowiedź jest typowa", ["w kinie.", "w sklepie.", "na poczcie."]),
]
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
    "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 3,
    "audio": task_audio(SID, "I"),   # whole play only: per-item times not used for 2021 sessions
    "example": {"id": "l1.ex", "prompt": "Ta wypowiedź jest typowa", "options": OPT("u fryzjera.", "u krawca.", "u mechanika."),
                "answer": "b", "shown": True,   # PDF p.3: option b bold-underlined
                "transcript": tr1(l1_tr["ex"][1], l1_tr["ex"][0])},
    "items": [mc_item("l1", i + 1, p, o, l1_key[i], transcript=tr1(l1_tr[str(i + 1)][1], l1_tr[str(i + 1)][0]))
              for i, (p, o) in enumerate(l1_items)],
}

# ---- l2: 8 dialogues MC, 2 plays
l2_tr = dialogues(SID, "II")
assert list(l2_tr) == ["ex"] + [str(i) for i in range(1, 9)], list(l2_tr)
tr2 = lambda lab: {"lines": l2_tr[lab]}
l2_key = "b c a b a c b b".split()
l2_items = [
    ("Z tego dialogu dowiadujemy się, że autobus przyjedzie", ["dokładnie za 15 minut.", "za około 15 minut.", "15 minut później."]),
    ("Z tego dialogu dowiadujemy się, że", ["koszty mediów są wysokie.", "nie trzeba płacić dodatkowo za media.", "za media płaci się dodatkowo."]),
    ("Z tego dialogu dowiadujemy się, że ona", ["jest niezdecydowana.", "rezygnuje z zamówienia.", "nie ma wyboru."]),
    ("Z tego dialogu dowiadujemy się, że on", ["dzwoni do szpitala.", "nie może długo czekać na poradę lekarską.", "zapomniał, kiedy umówił się na wizytę."]),
    ("Z tego dialogu dowiadujemy się, że on", ["proponuje wspólny wyjazd.", "musi naprawić swój rower.", "zgadza się na wspólną wycieczkę."]),
    ("Z tego dialogu dowiadujemy się, że sukienka", ["ma za duży rozmiar.", "dobrze pasuje.", "jest zbyt mała."]),
    ("Z tego dialogu dowiadujemy się, że", ["ona wychodzi za mąż.", "ona jest zdziwiona.", "on jest synem kobiety."]),
    ("Z tego dialogu dowiadujemy się, że ona", ["następnego dnia pracuje.", "pyta o plany na kolejny dzień.", "zwykle długo pracuje."]),
]
l2 = {
    "id": "l2", "number": "II", "type": "mc", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać dialogów i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "8 x 1 p.", "pointsPerItem": 1, "maxPoints": 8, "plays": 2, "pdfPage": 4, "pdfPages": [4, 5],
    "audio": task_audio(SID, "II"),
    "example": {"id": "l2.ex", "prompt": "Z tego dialogu dowiadujemy się, że ona",
                "options": OPT("chce zatankować cały bak.", "nie przyjmuje pomocy.", "tankuje pół baku."),
                "answer": "a", "shown": True,   # PDF p.4: option a bold-underlined
                "transcript": tr2("ex")},
    "items": [mc_item("l2", i + 1, p, o, l2_key[i], transcript=tr2(str(i + 1))) for i, (p, o) in enumerate(l2_items)],
}

# ---- l3: informational text TAK/NIE, 5 x 1
l3_txt = re.sub(r"\s+", " ", " ".join(transcript_block(SID, "III"))).strip()
l3_stm = ["Wyprzedaże garażowe to akcja zorganizowana po raz pierwszy.", "Sklepy oferują tu towary w promocyjnych cenach.",
          "Mieszkańcy organizują wyprzedaże w swoich garażach.", "Żeby wziąć udział w wydarzeniu, nie trzeba kupować biletu wstępu.",
          "Wyprzedaże garażowe mają wartość edukacyjną."]
l3_key = "NIE NIE NIE TAK TAK".split()
l3 = {
    "id": "l3", "number": "III", "type": "tf", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać informacji na temat wyprzedaży garażowych. Proszę zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 5,
    "source": "Na podstawie: https://warszawa.tvp.pl/49848099/trwa-sezon-na-warszawskie-garazowki-tam-znajdziesz-prawdziwe-perelki",
    "audio": task_audio(SID, "III"),
    "transcript": {"text": l3_txt},
    "example": {"id": "l3.ex", "statement": "Wyprzedaże garażowe odbywają się w Warszawie.", "answer": "TAK", "shown": True},   # X in TAK column (PDF p.5)
    "items": [{"id": f"l3.{i+1}", "number": i + 1, "statement": s, "answer": l3_key[i]} for i, s in enumerate(l3_stm)],
}

# ---- l4: match table I -> II (A-F), 5 x 1
l4_txt = re.sub(r"\s+", " ", " ".join(l for l in transcript_block(SID, "IV") if not re.fullmatch(r"\s{20,}\S+", l))).strip()   # drop the wrapped-URL tail line
l4_opts = {"A": "jest koło urzędu miasta.", "B": "jest po remoncie.", "C": "oferuje bezpłatne audio przewodniki.",
           "D": "ma wspaniały widok na miasto.", "E": "ma niepowtarzalny klimat.", "F": "ma więcej niż sto lat."}
l4_titles = ["Wieża", "Informacja turystyczna", "Urząd miasta", "Dworzec kolejowy", "Muzeum"]
l4_key = "D A F B C".split()
l4 = {
    "id": "l4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać tekstu na temat atrakcji turystycznych Lęborka oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 6,
    "source": "Na podstawie: https://www.polskieradio.pl/10/4893/Artykul/1630370,Wyjatkowa-trasa-na-lato-Odwiedz-Pomorze-i-Opolszczyzne",
    "audio": task_audio(SID, "IV"),
    "transcript": {"text": l4_txt},
    "options": [{"id": k, "text": v} for k, v in l4_opts.items()],
    "example": {"id": "l4.ex", "prompt": "Ulica Staromiejska", "answer": "E", "shown": True},
    "items": [{"id": f"l4.{i+1}", "number": i + 1, "prompt": t, "answer": l4_key[i]} for i, t in enumerate(l4_titles)],
}

# ---- l5: picture matching, 10 texts <-> photos B-K (A = example)
l5_tr = numbered_block(SID, "V")
assert list(l5_tr) == ["ex"] + [str(i) for i in range(1, 11)], list(l5_tr)
l5_labels = list("BCDEFGHIJK")
l5_key = "6 7 9 10 5 1 4 2 3 8".split()   # key row B..K
IMG = f"data/img/{SID}"
l5 = {
    "id": "l5", "number": "V", "type": "match", "grading": "auto",
    "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać tekstów dotyczących przygotowania do pracy zdalnej i dopasować numer tekstu do ilustracji.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "plays": 2, "pdfPage": 7,
    "audio": task_audio(SID, "V"),   # whole plays only
    # options = text numbers 1..10; 'PRZYKŁAD' is the printed answer of example picture A (A – [PRZYKŁAD]) and must exist as an option id
    "options": [{"id": "PRZYKŁAD", "text": "PRZYKŁAD"}] + [{"id": str(i), "text": str(i)} for i in range(1, 11)],
    "example": {"id": "l5.ex", "label": "A", "image": f"{IMG}/l5-A.jpg", "answer": "PRZYKŁAD", "shown": True},
    "items": [{"id": f"l5.{i+1}", "number": i + 1, "label": lab, "image": f"{IMG}/l5-{lab}.jpg", "answer": l5_key[i]} for i, lab in enumerate(l5_labels)],
    "transcript": {"lines": [{"sp": f"Przykład ({l5_tr['ex'][1]})", "t": l5_tr["ex"][0]}] +
                            [{"sp": f"Tekst {i} ({l5_tr[str(i)][1]})", "t": l5_tr[str(i)][0]} for i in range(1, 11)]},
    "pdfNotes": ["The test booklet prints only „Źródło zdjęć: www.freepik.com” for this task; the text source („Na podstawie: https://nofluffjobs.com/blog/10-wskazowek-ktore-pomoga-ci-przygotowac-sie-do-pracy-zdalnej/”) is given only in the transcript.", "Photos extracted from test.pdf p.7 into data/img/2021-06/ (tools/extract_images.sh drops picture G because its placement matrix has a negative width, so all 11 were copied from the pdftohtml output o-7_1..11.jpg directly); A..K order verified against a page render (A desk, B devices, C man in office, D hiker in forest, E friends, F notebook, G network cable, H man with ties, I video call, J binders, K laptop „DO WIDZENIA”)."],
}

listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [3, 7], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
src_ = lambda s: "Na podstawie: " + s
r1_ex = {"id": "r1.ex",
         "passage": {"text": "Używanie plastikowych przedmiotów spowodowało, że jest ich wszędzie pełno, a to z kolei wpływa na zanieczyszczenie środowiska naturalnego. Naukowcy twierdzą, że jeśli do roku 2050 nic się nie zmieni, to ilość plastiku w oceanach przewyższy liczbę ryb.",
                     "source": src_("https://babaryba.pl/Plastik-fantastik-edukacyjna-ksiazka-ekologiczna-dla-dzieci-o-plastiku-smieciach-i-recyklingu")},
         "prompt": "Z tego tekstu wynika, że w przyszłości",
         "options": OPT("w oceanach może pływać więcej ryb niż teraz.", "plastik będzie coraz bardziej popularny.", "w oceanach może być mniej ryb niż plastiku."),
         "answer": "c", "shown": True}   # PDF p.9: option c bold-underlined
r1_data = [
    ("Zawsze przed nowym sezonem wyrzucam wszystkie ubrania z szafy i układam zestawy, które do siebie pasują. Robię im zdjęcia telefonem i zapisuję swoje kolekcje. Rano zazwyczaj mam za mało czasu, żeby myśleć o stroju. Korzystam wtedy z tych zdjęć i już wiem, w co się ubrać.",
     src_("https://www.nebule.pl/stylizacje-na-jesien-zime-10-ciekawych-propozycji-i-poradnik-jak-kupuje-ubrania-taniej/"), "Z tego tekstu wynika, że autorka",
     ["przygotowuje wcześniej zestawy na cały sezon.", "wyrzuca wszystkie ubrania przed nowym sezonem.", "korzysta ze zdjęć strojów znalezionych w internecie."], "a"),
    ("Studia dla ambitnych\n\nStudia w języku angielskim przygotowują do pracy na całym świecie w dynamicznie rozwijających się branżach. Kierunki: zarządzanie, informatyka, ekonomia. Zapisz się już dziś i dołącz do najlepszych. Rekrutacja: www.rzeszow.pl/anglojezyczne.",
     None, "Z tego tekstu wynika, że można",
     ["studiować online.", "zapisać się online.", "studiować za granicą."], "b"),
    ("Zanim pożyczysz pieniądze z banku, aby kupić mieszkanie, warto sprawdzić, ile będzie kosztować cały kredyt w różnych instytucjach, a następnie wybrać najtańszą ofertę. Kalkulator dostępny w internecie policzy za nas miesięczną ratę, a rankingi pokażą najlepsze oferty banków działających na rynku.",
     src_("https://www.bankier.pl/smart/kredyty-hipoteczne"), "Tekst mówi o",
     ["wyborze najlepszej oferty kredytu.", "instytucjach, które dają kredyty.", "szukaniu najtańszych mieszkań."], "a"),
    ("Lata szkolne to był wspaniały czas – odkrywanie świata i wielkie przyjaźnie. Nigdy nie zapomnę listu od pewnego chłopaka. To była moja pierwsza szkolna miłość. W szkole średniej poznałam przyjaciółkę, z którą utrzymuję kontakt do dziś.",
     None, "Autorka tekstu wspomina",
     ["czasy szkoły wyższej.", "koleżankę, której dawno nie widziała.", "uczucie do kolegi ze szkoły."], "c"),
    ("Sztuczna inteligencja działa podobnie do człowieka. „Mądre” maszyny mogą pomagać ludziom w codziennych pracach i w ten sposób ułatwiać im życie. Pozwalają oszczędzać czas i pieniądze. Czy powinniśmy się bać, że roboty będą chciały zniszczyć ludzkość?",
     src_("https://www.sztucznainteligencja.org.pl/kurs/sztuczna-inteligencja-dla-poczatkujacych/czym-jest-sztuczna-inteligencja/"), "Z tego tekstu wynika, że",
     ["sztuczna inteligencja jest mądrzejsza niż człowiek.", "nie wiemy, jak rozwinie się sztuczna inteligencja.", "sztuczna inteligencja niedługo zastąpi człowieka."], "b"),
]
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 9, "pdfPages": [9, 10],
    "example": r1_ex,
    "items": [{"id": f"r1.{i+1}", "number": i + 1, "passage": ({"text": t, "source": u} if u else {"text": t}), "prompt": p, "options": OPT(*o), "answer": a}
              for i, (t, u, p, o, a) in enumerate(r1_data)],
    "pdfNotes": ["Items 2 and 4 are printed without a source line; item 2 is an advertisement whose headline „Studia dla ambitnych” is kept as the first paragraph of the passage."],
}

# ---- r2: interview, TAK/NIE; questions of the interview are printed bold, answers as plain paragraphs
r2_lines = after_points(between(test, r"II\. Proszę przeczytać tekst", r"Na podstawie: https://zwierciadlo"))
r2_title = next(l.strip() for l in r2_lines if l.strip())
r2_body = [l for l in r2_lines if l.strip() and l.strip() != r2_title]
Q = ["Podobno notuje pan wszystko, co zje.", "I jaka jest dzisiaj?", "Skąd jeszcze bierze pan pomysły do gotowania i pisania felietonów?"]
r2_text, cur = [], []
for l in r2_body:
    if l.strip() in Q:
        if cur:
            r2_text.append(join(cur)); cur = []
        r2_text.append(l.strip())
    else:
        cur.append(l)
r2_text.append(join(cur))
assert len(r2_text) == 6, r2_text
r2_stm = ["Kucharz często zagląda do książki, którą napisał.", "Nigel Slater ograniczył niektóre produkty w swojej diecie.", "Kucharz odwiedził Japonię jeden raz.",
          "Potrawy z dzieciństwa znudziły się kucharzowi.", "Nigel wymienia potrawy, za którymi nie przepada.", "Macocha Nigela robiła lepsze ciasto cytrynowe niż on.",
          "Jedzenie, które kucharz pamięta z dzieciństwa, było nietypowe."]
r2_key = "NIE TAK NIE NIE NIE TAK NIE".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 11,
    "title": r2_title,
    "source": "Na podstawie: https://zwierciadlo.pl/przepisy/nigel-slater-kucharz-ktory-pisze",
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "Nigel Slater wpadł na pomysł prowadzenia notatek o tym, co je.", "answer": "TAK", "shown": True},
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
    "pdfNotes": ["The interview's three questions (bold in the PDF) are separate paragraphs of the passage."],
}

# ---- r3: fragments -> gaps (A-H, example G, all 8 used)
r3_lines = after_points(between(test, r"III\. Proszę przeczytać tekst i", r"Na podstawie: https://zyciewpodrozy"))
r3_title = next(l.strip() for l in r3_lines if l.strip())
r3_text = "\n\n".join(paras_by_indent([l for l in r3_lines if l.strip() and l.strip() != r3_title])).strip()
r3_text = re.sub(r"\[\s*G\s*\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\]\s*(\d)", r"{{\1}}", r3_text)
r3_frag = {"A": "możecie spróbować złotego napoju", "B": "dla turysty ważne jest również to", "C": "podjąć decyzję o podróży",
           "D": "jest charakterystycznym zabytkiem regionu", "E": "powietrze jest tu czyste", "F": "odkryjecie radość spacerowania",
           "G": "na wschodzie kończy się aż we Lwowie na Ukrainie", "H": "poczujecie ciepłą atmosferę"}
r3_key = "E H B F D A C".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–H).",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 12,
    "title": r3_title,
    "source": "Na podstawie: https://zyciewpodrozy.pl/roztocze/",
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "G", "shown": True},
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs (A-H, example C, all 8 used)
r4_par = {
    "A": "Znajdźcie w lesie miejsce, które wam się podoba, gdzie łatwo będzie wam razem przyjechać zawsze tego samego dnia raz w roku. Róbcie tam zdjęcia do wspólnego albumu.",
    "B": "Kiedy latem pada deszcz, nie siedź z dziećmi w domu. Załóżcie kalosze i zorganizujcie wyścigi w skakaniu przez kałuże.",
    "C": "Na spacerze można znaleźć piękne liście, kamienie, gałęzie. Pozwól dziecku je dotknąć, pobawić się nimi, a nawet coś z nich zbudować.",
    "D": "Rozwiązujcie zagadki podczas spacerów. Daj dziecku liść. Niech spróbuje w ciągu godziny znaleźć drzewo, z którego on pochodzi.",
    "E": "Róbcie pikniki z okazji pierwszego dnia wiosny czy lata. Usiądźcie na trawie z koszem pełnym smacznych dań, świeżych warzyw i owoców.",
    "F": "Kupcie razem nasiona i uprawiajcie kawałek ziemi przy domu. Pozwól dziecku zjeść marchewkę, o którą samo dbało – podlewało ją i obserwowało, jak rośnie.",
    "G": "Obserwujcie różne owady – motyle, pszczoły czy mrówki. Zobaczcie, gdzie mieszkają, jak pracowicie budują i sprzątają swoje domy, opiekują się dziećmi, szukają jedzenia.",
    "H": "Dzieci potrzebują snu, ale czasem warto zmienić plan dnia i pokazać im wschód słońca, popatrzeć na gwiazdy, posiedzieć do późna przy ognisku podczas wspólnych wycieczek.",
}
r4_titles = ["Zadanie na czas", "Mały ogrodnik", "Mokry sport", "Nocne wyprawy", "Rodzinna tradycja", "Posiłek na świeżym powietrzu", "Mały wspaniały świat"]
r4_key = "D F B H A E G".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 13,
    "source": "Na podstawie: https://www.edziecko.pl/rodzice/1,79360,18461512,zabawy-z-przyroda.html",
    "heading": "Jak bawić się z dzieckiem na świeżym powietrzu?",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Naturalne zabawki", "answer": "C", "shown": True},   # PDF p.13: paragraph C is shaded/bold-italic in the table
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
    "pdfNotes": ["PRINTED INCONSISTENCY: the example paragraph (shaded, bold italic) in the table is C, which also fits the title „Naturalne zabawki”, but the small answer table below the task prints „F” as the example answer. F is the official key of item 2 („Mały ogrodnik”), so the answer table's „F” is an official typo; example stored as C."],
}

# ---- r5: inline choice, 8 x 0.5 (example: otwierasz, PDF p.14)
r5_lines = after_points(between(test, r"V\. Proszę – zgodnie z przykładem – podkreślić najlepszą", r"Na podstawie: https://www.morele"))
r5_title = next(l.strip() for l in r5_lines if l.strip())
r5_raw = "\n\n".join(paras_by_indent([l for l in r5_lines if l.strip() and l.strip() != r5_title]))
r5_pass, r5_bl = cloze_choice(r5_raw)
set_answers(r5_bl, "zmniejsza się|ochotę|scenariusz|bezpieczny|spędzasz|dzieje się|odkurzyć|obowiązkach".split("|"), {"ex": "otwierasz"})
r5 = {
    "id": "r5", "number": "V", "type": "clozeChoice", "grading": "auto",
    "instruction": "V. Proszę – zgodnie z przykładem – podkreślić najlepszą spośród możliwości podanych w nawiasach.",
    "pointsFormula": "8 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 4, "pdfPage": 14,
    "title": r5_title,
    "source": "Na podstawie: https://www.morele.net/wiadomosc/smart-home-w-mieszkaniu-z-jakich-inteligentnych-rozwiazan-warto-skorzystac/16857/",
    "passage": r5_pass, "blanks": r5_bl,
}
reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [9, 14], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
# ---- g1: declension (3 examples: mleczną / czekoladę / niej, PDF p.16)
g1_raw = " ".join(after_points(between(test, r"I\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych", r"Na podstawie: https://www.muzeumczekolady")))
g1_pass, g1_bl = cloze_choice(re.sub(r"\s+", " ", g1_raw).strip())
g1_key = "braćmi znane popularnego turyści tym przysmaku wycieczce degustację im je".split()
set_answers(g1_bl, g1_key, {"ex1": "mleczną", "ex2": "czekoladę", "ex3": "niej"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 16,
    "source": "Na podstawie: https://www.muzeumczekolady.edu.pl/ferie-z-muzeum-czekolady-poznan-wroclawska-12-grupa-szkola-polkolonie/",
    "passage": g1_pass, "blanks": g1_bl,
}

# ---- g2: conjunctions from box (example: i)
g2_raw = join(after_points(between(test, r"II\. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki \(spójniki\)", r"^III\.")))
g2_raw = re.sub(r"\bi PRZYKŁAD", "{{ex}}", g2_raw)
g2_raw = re.sub(r"\s*[….]{3,}\s*(\d)", r" {{\1}}", g2_raw)
g2_raw = re.sub(r"\s+", " ", g2_raw)
assert g2_raw.startswith("ponieważ albo żeby dlatego czy i jeżeli "), g2_raw[:60]
g2_raw = g2_raw[len("ponieważ albo żeby dlatego czy i jeżeli "):]
g2 = {
    "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
    "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 16,
    "wordBox": ["ponieważ", "albo", "żeby", "dlatego", "czy", "i", "jeżeli"], "distractors": ["albo"],
    "passage": g2_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "i"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("żeby dlatego jeżeli ponieważ czy".split())],
    "pdfNotes": ["Key item 3 prints „Jeżeli” (sentence start); stored with the box casing „jeżeli”. No source line is printed for this task."],
}

# ---- g3: comparison (2 examples: najdroższych / więcej, PDF p.17)
g3_raw = re.sub(r"\s+", " ", " ".join(after_points(between(test, r"III\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów", r"Na podstawie: https://finanse.wp.pl")))).strip()
g3_pass, g3_bl = cloze_choice(g3_raw)
set_answers(g3_bl, "najbardziej znanych|Najszybciej|wyższy|tańsze|najmniej".split("|"), {"ex1": "najdroższych", "ex2": "więcej"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "source": "Na podstawie: https://finanse.wp.pl/ceny-owocow-rosna-jablka-drozsze-o-130-proc-6541966238713985a",
    "passage": g3_pass, "blanks": g3_bl,
}

# ---- g4: verb forms (present & future), examples zmniejszy się / myślisz / będziesz pracować (PDF p.17)
g4_raw = join(after_points(between(test, r"IV\. Proszę – zgodnie z przykładami – uzupełnić tekst", r"Na podstawie: https://www.forbes")))
g4_raw = g4_raw.replace("zmniejszy się (zmniejszyć się)PRZYKŁAD", "{{ex1}}").replace("myślisz (ty – myśleć)PRZYKŁAD", "{{ex2}}").replace("będziesz pracować (pracować)PRZYKŁAD", "{{ex3}}")
g4_given = {}


def _g4(m):
    g4_given[m[1]] = re.sub(r"\s+", " ", m[2]).strip()
    return "{{%s}}" % m[1]


g4_raw = re.sub(r"[….]{3,}\s*(\d+)\s*\(([^()]*)\)\s*\d+", _g4, g4_raw)
g4_raw = g4_raw.replace(" Jak wygląda sytuacja", "\n\nJak wygląda sytuacja")
assert sorted(g4_given, key=int) == [str(i) for i in range(1, 11)], g4_given
g4_key = [("mają", []), ("pojawiają się", []), ("się zmienia", ["zmienia się"]), ("zaczną", []), ("zastanawia się", []),
          ("będziemy wykonywać", ["będziemy wykonywali"]), ("uważają", []), ("znajdą", []), ("będą potrzebować", ["będą potrzebowali"]),
          ("się spełnią", ["spełnią się"])]
g4 = {
    "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
    "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przyszły).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17, "pdfPages": [17, 18],
    "source": "Na podstawie: https://www.forbes.pl/kariera/zawody-przyszlosci-zobacz-gdzie-bedzie-praca/5mvx4ts",
    "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
    "passage": g4_raw,
    "blanks": [{"id": "ex1", "example": True, "given": "zmniejszyć się", "answer": "zmniejszy się"},
               {"id": "ex2", "example": True, "given": "ty – myśleć", "answer": "myślisz"},
               {"id": "ex3", "example": True, "given": "pracować", "answer": "będziesz pracować"}] +
              [{"id": str(i + 1), "given": g4_given[str(i + 1)], "answer": g4_key[i][0], "accept": g4_key[i][1]} for i in range(10)],
    "pdfNotes": ["Printed example answers (zmniejszy się, myślisz, będziesz pracować) are shown bold-underlined inside the text; the passage continues on the next page. Key alternatives with „/” are stored in accept."],
}

# ---- g5: ask about the underlined part (underlines verified on PDF p.18; the short answer line repeats the underlined part)
g5_q = [  # (sentence, underlined, stem, short answer, key)
    ("Anna kieruje firmą od pięciu lat.", "firmą", "…………… Anna kieruje od pięciu lat.", "Firmą.", "Czym"),
    ("Książka Marcina spadła z biurka.", "Marcina", "…………… książka spadła z biurka?", "Marcina.", "Czyja"),
    ("Irena otrzymała ważną wiadomość od Pawła.", "od Pawła", "…………… Irena otrzymała ważną wiadomość?", "Od Pawła.", "Od kogo"),
    ("W przyszłym tygodniu mama odwiedzi Marka w nowym mieszkaniu.", "W przyszłym tygodniu", "…………… mama odwiedzi Marka w nowym mieszkaniu?", "W przyszłym tygodniu.", "Kiedy"),
    ("To zadanie jest wyjątkowo trudne.", "wyjątkowo trudne", "…………… jest to zadanie?", "Wyjątkowo trudne.", "Jakie"),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Ten komputer należy do nauczyciela.", "underlined": "do nauczyciela",
                "stem": "…………… należy ten komputer?", "shortAnswer": "Do nauczyciela.", "answer": "Do kogo", "shown": True},
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": []}
              for i, (s, u, st, sa, a) in enumerate(g5_q)],
    "pdfNotes": ["Item 1's stem is printed ending in a full stop („… Anna kieruje od pięciu lat.”), kept as printed. The printed example shows the full question „Do kogo należy ten komputer?”; stored with the question word replaced by the gap. Official key prints the question word with decoration (Czym…?); stored without it, match.stripChars ignores the decoration."],
}

# ---- g6: transformation (rubric text from transcript.pdf p.7 key table, rows verified on the page image)
g6_data = [
    ("Jan usłyszał od Joli ciekawą historię.", "opowiedziała", "Jola opowiedziała Janowi ciekawą historię.", "4 transformacje (4 x 0,25)", [("4 transformacje", 1)]),
    ("Nie pamiętam, jak nazywa się to miasto.", "nazwy", "Nie pamiętam nazwy tego miasta.", "usunięcie zbędnego spójnika 0,5 + 2 transformacje (2 x 0,25)", [("usunięcie zbędnego spójnika", 0.5), ("2 transformacje", 0.5)]),
    ("Krzysiek przepada za długimi spacerami.", "uwielbia", "Krzysiek uwielbia długie spacery.", "2 transformacje (2 x 0,5)", [("2 transformacje", 1)]),
    ("Ola przygotowała prezenty młodszemu rodzeństwu.", "dla", "Ola przygotowała prezenty dla młodszego rodzeństwa.", "2 transformacje (2 x 0,5)", [("2 transformacje", 1)]),
    ("Spodziewamy się ważnego telefonu.", "czekamy", "Czekamy na ważny telefon.", "dodanie przyimka 0,5 + 2 transformacje (2 x 0,25)", [("dodanie przyimka", 0.5), ("2 transformacje", 0.5)]),
]
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 19,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Poprosiła go, żeby zrobił zakupy.", "hint": "o", "answer": "Poprosiła go o zrobienie zakupów.", "shown": True},
    "items": [{"id": f"g6.{i+1}", "number": i + 1, "source": s, "hint": h, "answer": a, "rubric": r, "rubricParts": [{"what": w_, "points": p} for w_, p in parts]}
              for i, (s, h, a, r, parts) in enumerate(g6_data)],
}

# ---- g7: aspect & mood (2 examples: Zastanów się / spotkałbyś, PDF p.20)
g7_raw = join(after_points(between(test, r"VII\. Proszę – zgodnie z przykładami", r"Na podstawie: https://wyborcza")))
g7_raw = g7_raw.replace(" Nasz mózg ciągle wymyśla", "\n\nNasz mózg ciągle wymyśla")
g7_pass, g7_bl = cloze_choice(g7_raw)
set_answers(g7_bl, ["wybrał", "pracowałabym", "Powiedzmy", "martwcie się", "spędzałby", "myśl", "było", "zacznij", "wracaj", "chcielibyśmy"],
            {"ex1": "Zastanów się", "ex2": "spotkałbyś"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 20,
    "source": "Na podstawie: https://wyborcza.pl/7,75400,23621998,gdybanie-ma-wiecej-sensu-niz-myslicie.html?disableRedirects=true",
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: prepositions as inline choice (NOT a word box in this session), example: w
g8_raw = join(after_points(between(test, r"VIII\. Proszę – zgodnie z przykładem", r"Na podstawie: http://wielki-czlowiek")))
g8_pass, g8_bl = cloze_choice(g8_raw)
set_answers(g8_bl, "oprócz z na z dla".split(), {"ex": "w"})
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – wybrać i podkreślić poprawny wyraz spośród podanych w nawiasach (przyimki).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 20,
    "source": "Na podstawie: http://wielki-czlowiek.pl/10-powodow-dla-ktorych-warto-chodzic-do-biblioteki/",
    "passage": g8_pass, "blanks": g8_bl,
}

grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [16, 20], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING
sets = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "pozdrowienia", "wordTarget": 40, "prompt": "Jest Pani/Pan na wakacjach w górach. Proszę napisać pozdrowienia do swojego nauczyciela języka polskiego."},
        {"id": "b", "genre": "recenzja", "wordTarget": 160, "prompt": "Stowarzyszenie Przyjaciół Języka Polskiego organizuje konkurs dla obcokrajowców na najciekawszą recenzję książki. Postanawia Pani/Pan wziąć w nim udział i wysłać swoją opinię na temat książki, którą Pani/Pan poleca."}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "zaproszenie", "wordTarget": 50, "prompt": "Organizuje Pani/Pan wycieczkę rowerową dla członków klubu sportowego. Proszę napisać zaproszenie i poinformować o szczegółach programu."},
        {"id": "b", "genre": "opinia", "wordTarget": 150, "prompt": "Ma Pani/Pan przyjaciółkę Polkę lub przyjaciela Polaka, która dostała / który dostał propozycję pracy za granicą, ale nie może się zdecydować, co robić. Proszę jej/mu pomóc podjąć decyzję i – na podstawie własnych doświadczeń – przedstawić swoją opinię."}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 25, "prompt": "Na spacerze w parku zaginął Pani/Panu młody pies. Proszę napisać ogłoszenie, które rozwiesi Pani/Pan w okolicy."},
        {"id": "b", "genre": "opowiadanie", "wordTarget": 175, "prompt": "Proszę napisać opowiadanie pt. „Nigdy nie zapomnę tej podróży”. Proszę wykorzystać tę fotografię.",
         "title": "Nigdy nie zapomnę tej podróży", "image": f"{IMG}/w-III-b.jpg"}]},
]
w = writing_task(sets, [22, 28])
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [22, 28], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "czerwiec 2021", "examDates": "19-20.06.2021",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY). Writing set III b is a photo prompt (cruise ship, data/img/2021-06/w-III-b.jpg).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear; for this 2021 session only whole plays are offered (per-item times unreliable).",
                       "Listening II is 8 dialogues MC (8 x 1 p.); III is TAK/NIE on one text (5 items); IV is a column I -> II match table (A-F, all used incl. the example); V is picture matching (10 texts <-> photos B-K, A = example).",
                       "Reading III has fragments A-H (all used incl. example G); reading V is inline choice with 8 gaps (8 x 0,5 p.).",
                       "Grammar IV is present & future tense; grammar VIII is inline choice of a preposition (not a word box).",
                       "Reading IV: the printed answer table shows F for the example although the shaded example paragraph is C (official typo, see task pdfNotes)."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
