#!/usr/bin/env python3
"""Builds data/2021-05.js. Run from anywhere: python3 tools/build_2021_05.py
NOTE: the PDFs of this session (test + transcript) are headed "marzec 2021" although the directory/README date it 8-9.05.2021;
id stays 2021-05, labelPdf = "marzec 2021" (see meta.notes).
Content = verbatim from sources/2021-05/test.txt (+ PDF page images for underlined/bold PRZYKŁAD answers and the underlined
parts of grammar V), keys = official 'Klucz do zadań' in transcript.txt. Adapted from tools/build_2024_02.py (docs/conversion-recipe.md).
2021 specifics: listening II = matching table, IV = MC (reportaż), V = picture matching (photos A-K); reading III has A-I,
reading V = box cloze, grammar VIII = choose-and-underline preposition (clozeChoice); audio: whole plays only."""
import json, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2021-05"
test = clean_lines(read(SID, "test.txt"))
OPT = lambda *texts: [{"id": "abc"[i], "text": t} for i, t in enumerate(texts)]


def mc_item(tid, n, prompt, opts, ans, **kw):
    return {"id": f"{tid}.{n}", "number": n, "prompt": prompt, "options": OPT(*opts), "answer": ans, **kw}


def sp_text(line):
    """'1. Przepraszam ... (K)' -> ('K', 'Przepraszam ...')"""
    m = re.match(r"^(?:\d+\.|Przykład:)?\s*(.*?)\s*\(([A-Z])\)\s*$", line.strip())
    assert m, line
    return m[2], m[1]


def labelled_lines(block, abbrev):
    """Dialogue with speaker labels from a closed set (Dziennikarka/Dz, Ekspertka/E, ...): a line starts a new turn only if it begins with a known label."""
    out = []
    pat = re.compile(r"^(%s):\s*(.*)$" % "|".join(map(re.escape, abbrev)))
    for l in block:
        m = pat.match(l.strip())
        if m:
            out.append({"sp": abbrev[m[1]], "t": m[2]})
        else:
            out[-1]["t"] += " " + l.strip()
    for o in out:
        o["t"] = re.sub(r"\s+", " ", o["t"]).strip()
    return out


# =============================================================== LISTENING
# ---- l1: 14 single utterances (MC), 1 play
tr1 = [sp_text(l) for l in transcript_block(SID, "I")]
assert len(tr1) == 15
l1_items = [
    ("Ta wypowiedź oznacza", ["współczucie.", "strach.", "złość."], "a"),
    ("Ta wypowiedź jest typowa", ["u fotografa.", "u kosmetyczki.", "u fryzjera."], "c"),
    ("Ta wypowiedź to pytanie", ["o miejsce.", "o czas.", "o drogę."], "a"),
    ("Ta wypowiedź oznacza", ["gratulacje.", "komplement.", "krytykę."], "b"),
    ("Ta wypowiedź jest typowa", ["w autobusie.", "w pociągu.", "w taksówce."], "c"),
    ("Ta wypowiedź to", ["zakaz.", "prośba.", "sugestia."], "a"),
    ("Ta wypowiedź jest typowa", ["na dworcu kolejowym.", "na dworcu autobusowym.", "w kasie teatru."], "a"),
    ("Ta wypowiedź to", ["życzenia.", "pozdrowienia.", "powitanie."], "c"),
    ("Ta wypowiedź jest typowa", ["w kawiarni.", "w bibliotece.", "w księgarni."], "b"),
    ("Ta wypowiedź oznacza", ["pewność.", "przypuszczenie.", "konieczność."], "b"),
    ("Ta wypowiedź oznacza", ["toast.", "życzenia.", "radę."], "a"),
    ("Ta wypowiedź jest typowa", ["w bibliotece.", "w sklepie.", "w banku."], "c"),
    ("Ta wypowiedź oznacza", ["przypuszczenie.", "prośbę.", "radę."], "b"),
    ("Ta wypowiedź jest typowa", ["przed egzaminem.", "przed wizytą u fryzjera.", "przed imprezą urodzinową."], "c"),
]
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
    "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 3,
    "audio": task_audio(SID, "I"),   # whole play only (2021: per-item times not reliable)
    "example": {"id": "l1.ex", "prompt": "Ta wypowiedź jest typowa", "options": OPT("w restauracji.", "na stacji benzynowej.", "u fryzjera."),
                "answer": "b", "shown": True,   # PDF p.3: option b bold-underlined
                "transcript": {"sp": tr1[0][0], "t": tr1[0][1]}},
    "items": [mc_item("l1", i + 1, p, o, a, transcript={"sp": tr1[i + 1][0], "t": tr1[i + 1][1]}) for i, (p, o, a) in enumerate(l1_items)],
}

# ---- l2: matching table (column I -> column II), 5 x 1, 2 plays
l2_opts = {"A": "Ta gra powstała z myślą o młodzieży szkolnej.", "B": "Amatorzy tej gry używali warzyw lub drewna.",
           "C": "Gra, która miała charakter religijny.", "D": "W tę grę grali chińscy żołnierze.",
           "E": "Gra, która miała swój początek na wsi.", "F": "Europejska gra drewnianą piłką."}
l2_key = "D F E B A".split()
l2_items = ["Piłka nożna", "Tenis", "Krykiet", "Hokej", "Koszykówka"]
l2 = {
    "id": "l2", "number": "II", "type": "match", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać nagrania na temat historii dyscyplin sportowych oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 4,
    "source": "Na podstawie: https://wpolityce.pl/sport/189566-pasjonujaca-historia-dyscyplin-sportowych-warto-zrozumiec-ich-idee",
    "audio": task_audio(SID, "II"),
    "transcript": {"text": join(transcript_block(SID, "II"))},
    "options": [{"id": k, "text": v} for k, v in l2_opts.items()],
    "example": {"id": "l2.ex", "prompt": "Ulama", "answer": "C", "shown": True},   # PDF p.4: row C shaded
    "items": [{"id": f"l2.{i+1}", "number": i + 1, "prompt": p, "answer": l2_key[i]} for i, p in enumerate(l2_items)],
}

# ---- l3: TAK/NIE on an interview, 8 x 1
l3_blk = [l for l in transcript_block(SID, "III") if "socjolog-odpowiada" not in l]   # drop wrapped URL tail + page title glued to it
l3_lines = labelled_lines(l3_blk, {"Dziennikarka": "Dziennikarka", "Ekspertka": "Ekspertka", "Dz": "Dziennikarka", "E": "Ekspertka"})
assert len(l3_lines) == 16, len(l3_lines)
l3_st = ["Większość Polaków je śniadanie przed wyjściem do pracy.", "Pochodzenie ma wpływ na to, co i gdzie jemy.",
         "W czasie pobytu za granicą unikamy dań kuchni regionalnej.", "Telewizja inspiruje nas do przygotowywania egzotycznych dań.",
         "Dla kobiet ważne jest, by potrawy były zdrowe.", "Mężczyźni coraz częściej interesują się kuchnią.",
         "Młodzi ludzie najchętniej wybierają dania, które znają z domu.", "Polacy nie zmieniają tradycyjnego stylu jedzenia."]
l3_key = "NIE TAK NIE TAK TAK TAK NIE NIE".split()
l3 = {
    "id": "l3", "number": "III", "type": "tf", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wywiadu o tym, kto, co i gdzie lubi jeść. Proszę zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "8 x 1 p.", "pointsPerItem": 1, "maxPoints": 8, "plays": 2, "pdfPage": 5,
    "source": "Na podstawie: https://www.polityka.pl/tygodnikpolityka/spoleczenstwo/1626615,1,co-twoje-sniadanie-mowi-o-tobie-socjolog-odpowiada.",
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_lines},
    "example": {"id": "l3.ex", "statement": "Polacy najczęściej jedzą posiłki poza domem.", "answer": "NIE", "shown": True},   # PDF p.5: X in NIE
    "items": [{"id": f"l3.{i+1}", "number": i + 1, "statement": s, "answer": l3_key[i]} for i, s in enumerate(l3_st)],
}

# ---- l4: MC on a reportage (morsowanie), 5 x 1
l4_lines = labelled_lines(transcript_block(SID, "IV"), {"Dziennikarka": "Dziennikarka", "Adam": "Adam", "Dz": "Dziennikarka", "A": "Adam"})
assert len(l4_lines) == 6, len(l4_lines)
l4_items = [
    ("Kąpać się w zimnej wodzie mogą osoby, które", ["miały atak serca.", "nigdy nie chorują.", "mają problem z płucami."], "a"),
    ("Adam zaczął morsować, bo", ["to ostatnio modny sposób na zdrowie.", "spodobała mu się fotografia wujka.", "dostał zaproszenie od wujka."], "b"),
    ("Adam był najbardziej zaskoczony, że zimą", ["cienkim lodem można się skaleczyć.", "woda w morzu jest dość ciepła.", "lód jest bardzo gruby."], "a"),
    ("Adam pierwszy raz morsował", ["sam.", "w grupie.", "z jedną znajomą."], "b"),
    ("Adam podczas pierwszego morsowania", ["zdecydował, że to powtórzy.", "zrobił dużo zdjęć.", "odczuwał ból."], "c"),
]
l4 = {
    "id": "l4", "number": "IV", "type": "mc", "grading": "auto",
    "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę posłuchać reportażu na temat morsowania, czyli wchodzenia do zimnej wody podczas niskich temperatur i zaznaczyć właściwe odpowiedzi.\n\nMORSY to osoby, które kąpią się zimą w morzu, rzece lub jeziorze.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 6,
    "source": "Na podstawie: https://www.youtube.com/watch?v=L6A8Ib2lBjg",
    "audio": task_audio(SID, "IV"),
    "transcript": {"lines": l4_lines},
    "example": {"id": "l4.ex", "prompt": "Sezon na morsowanie zaczyna się", "options": OPT("nad morzem.", "w święto narodowe.", "późną wiosną."),
                "answer": "b", "shown": True},   # PDF p.6: option b bold-underlined
    "items": [mc_item("l4", i + 1, p, o, a) for i, (p, o, a) in enumerate(l4_items)],
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
l5_key = {"B": "6", "C": "8", "D": "7", "E": "3", "F": "10", "G": "4", "H": "9", "I": "2", "J": "1", "K": "5"}
IMG = lambda L: f"data/img/{SID}/l5-{L}.jpg"
l5 = {
    "id": "l5", "number": "V", "type": "match", "grading": "auto",
    "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać tekstów o przyczynach wyboru zawodu lub zajęcia i dopasować numer tekstu do ilustracji.",
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
         "passage": {"text": "Uwaga! Informujemy, że rejestracja internetowa na kurs jogi zakończyła się 31 sierpnia. Wszystkie osoby, które nie mogły zarejestrować się w systemie, prosimy o kontakt mailowy lub osobisty do 10 września. Po tym terminie zamykamy listę uczestników.",
                     "source": src_("https://ttc.sivananda.eu/pl/kurs-dla-nauczycieli-jogi-polska/rejestracja-online/")},
         "prompt": "Z tego tekstu wynika, że",
         "options": OPT("zajęcia z jogi zaczną się we wrześniu.", "na zajęcia nie można zapisać się po 10 września.", "rejestracja na zajęcia zacznie się 10 września."),
         "answer": "b", "shown": True}   # PDF p.9: option b bold-underlined
r1_data = [
    ("Pierwsza na świecie zupa pojawiła się na długo przed wynalezieniem garnka. Ludzie gotowali ją w ziemi, gdzie kładli skóry zwierząt, mięso, a następnie polewali to wszystko gorącą wodą. Żeby zupa była ciepła, dodawali do niej kamienie, które wcześniej ogrzewali w ogniu.",
     "https://wiadomosci.onet.pl/kiosk/postep-w-garnku/01j80",
     "Z tego tekstu wynika, że ludzie", ["dobrze przemyśleli konstrukcję garnka.", "wymyślili garnek później niż zupę.", "pierwsze zupy gotowali na ogniu."], "b"),
    ("Światowe media chwalą polską nastolatkę, która zmienia liście w dzieła sztuki. O Joannie zrobiło się głośno w ubiegłym roku, kiedy zorganizowała autorską wystawę swoich obrazów. W tym roku prace artystki można kupić w jej sklepie internetowym.",
     "http://metro.gazeta.pl/metro/7,50144,20762672,swiatowe-media-chwala-polska-nastolatke-ktorazamienia-liscie.html",
     "Z tego tekstu wynika, że Joanna", ["nie ma jeszcze 20 lat.", "tworzy z liści wspaniałe bukiety.", "w zeszłym roku otworzyła sklep."], "a"),
    ("Dzięki aplikacji HauHau właściciele psów mogą się dowiedzieć, kto w danym momencie spaceruje ze swoim zwierzęciem lub poinformować, że sami wychodzą do parku, a następnie umówić się na spotkanie. Część pieniędzy ze sprzedaży aplikacji przeznaczono na pomoc bezdomnym zwierzętom.",
     "https://panwybierak.pl/blog/najciekawsze-aplikacje-internetowe-dla-wlascicieli-psow",
     "Z tego tekstu wynika, że aplikacja HauHau pomaga", ["nawiązywać kontakty z innymi opiekunami psów.", "znaleźć dom dla bezdomnych zwierząt.", "szukać psów, które zgubiły się podczas spacerów."], "a"),
    ("Tradycyjne lalki japońskie wyglądają jak zwykłe zabawki, ale nimi nie są. Żeby nauczyć się sztuki tworzenia takich lalek, trzeba czasem nawet 10 lat. Artysta sam decyduje o wszystkim – najpierw wybiera drewno, a na końcu maluje gotową figurkę. Zwyczaj robienia lalek przechodzi z ojca na syna.",
     "https://www.zpap.pl/zpap/index.php?option=com_content&view=article&id=1891:zaproszenie-na-otwarcie-wystawy-lalki-japoskie-magia-obyczaje-legendy&catid=41:wystawy&Itemid=112&lang=en",
     "Ten tekst informuje o tym, że", ["w Japonii produkuje się najlepsze lalki.", "zrobienie jednej lalki zajmuje 10 lat.", "robienie lalek to rodzinna tradycja."], "c"),
    ("Jesteś studentem i chciałbyś zacząć zarabiać pieniądze, ale nie wyobrażasz sobie pracy w sklepie czy restauracji? Obserwujesz sukcesy ludzi, którzy swoją aktywność w internecie zmienili w biznes? Masz wielką pasję, którą chciałbyś się podzielić? Jeśli tak – to szkolenie jest dla ciebie!",
     None,   # no "Na podstawie" line printed for this passage
     "Ten tekst informuje o szkoleniu dla studentów, którzy", ["pracują obecnie jako sprzedawcy lub kelnerzy.", "chcą zarabiać na pokazywaniu swoich zainteresowań w internecie.", "odnieśli już sukces dzięki reklamie w internecie."], "b"),
]
def r1_passage(t, u):
    d = {"text": t}
    if u:
        d["source"] = src_(u)
    return d
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 9, "pdfPages": [9, 10],
    "example": r1_ex,
    "items": [{"id": f"r1.{i+1}", "number": i + 1, "passage": r1_passage(t, u), "prompt": p, "options": OPT(*o), "answer": a}
              for i, (t, u, p, o, a) in enumerate(r1_data)],
}

# ---- r2: TAK/NIE on one text (title "Ucieczka z pokoju" printed above it)
r2_lines = after_points(between(test, r"II\. Proszę przeczytać tekst", r"Na podstawie: https://www.polityka.pl/tygodnikpolityka/ludzieistyle"))
r2_lines = [l for l in r2_lines if l.strip() != "Ucieczka z pokoju"]
r2_text = paras_by_indent(r2_lines)
assert len(r2_text) == 4, r2_text
r2_stm = ["Czas przeznaczony na grę to jedna godzina.", "Aby wyjść w pokoju, trzeba użyć wszystkich przedmiotów, które są w środku.",
          "Przegrani zwykle nie chcą już wracać do gry.", "Właściciele escape roomów powinni być kreatywni.",
          "Zabawę w ucieczkę z pokoju najczęściej lubią osoby młode.", "Gra miejska jest akcją podobną do zabawy w escape roomie."]
r2_key = "TAK NIE NIE TAK NIE TAK".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 11,
    "title": "Ucieczka z pokoju",
    "source": "Na podstawie: https://www.polityka.pl/tygodnikpolityka/ludzieistyle/1617357,1,moda-na-zabawe-w-escape-roomach.read",
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "Do pokoju z zagadkami wchodzi jeden człowiek.", "answer": "NIE", "shown": True},   # PDF p.11: X in NIE
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
}

# ---- r3: fragments -> gaps (A-I, example A)
r3_lines = after_points(between(test, r"III\. Proszę przeczytać tekst i", r"Na podstawie: https://kurierhistoryczny"))
r3_lines = [l for l in r3_lines if l.strip() != "Niedźwiedź Wojtek"]
r3_text = "\n\n".join(paras_by_indent(r3_lines))
r3_text = re.sub(r"\[_{2}A_{2}\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\]\s*(\d)", r"{{\1}}", r3_text)
r3_frag = {"A": "który znalazł zwierzę w lesie.", "B": "walce „całował” przeciwnika po twarzy", "C": "nie był w armii tylko zabawką",
           "D": "bardzo często go odwiedzali", "E": "kładł się w nocy blisko żołnierzy", "F": "składała się z owoców, miodu oraz… piwa",
           "G": "nie umiał jeszcze sam jeść", "H": "oddać niedźwiedzia do zoo", "I": "żołnierze często zapominali o wojnie"}
r3_key = "G F I B E C H D".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–I).",
    "pointsFormula": "8 x 1 p.", "pointsPerItem": 1, "maxPoints": 8, "pdfPage": 12,
    "title": "Niedźwiedź Wojtek",
    "source": "Na podstawie: https://kurierhistoryczny.pl/artykul/wojna-piwo-i-niedzwiedz-czyli-historia-kaprala-wojtka,630",
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "A", "shown": True},    # printed in the text: [__A__]PRZYKŁAD
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs (A-G, example F)
r4_par = {
    "A": "Tematów i mądrych osób wokół nas nie brakuje. Ciekawe rozmowy pozytywnie wpływają na pracę mózgu, dlatego należy prowadzić je jak najczęściej.",
    "B": "Myślenie to najlepszy trening dla mózgu. Im mniej myślimy, tym szybciej nasz mózg się zmniejsza. Warto mieć głowę pełną pomysłów i planów na przyszłość.",
    "C": "Życie z dala od świata przyrody, przebywanie wśród głośnych dźwięków negatywnie wpływają na mózg. Cisza łagodzi stres i zdenerwowanie, a mózg ma możliwość regeneracji.",
    "D": "Warto zadbać o lepszą koncentrację i energię na cały dzień. Zapominanie o pierwszym posiłku prowadzi do niebezpiecznego obniżenia poziomu cukru we krwi.",
    "E": "Zbyt duża ilość cukru powoduje, że organizm ma problem z przyjmowaniem potrzebnych mu składników odżywczych, a to osłabia procesy uczenia się i zapamiętywania.",
    "F": "Nikotyna zmienia funkcjonowanie organizmu. Uzależnienie od tej substancji może prowadzić do zmniejszenia się mózgu i choroby Alzheimera.",
    "G": "Zdrowy sen pozwala mózgowi przestać intensywnie pracować i zregenerować siły. Jego brak może prowadzić do śmierci komórek mózgowych.",
}
r4_titles = ["Daj odpocząć!", "Nie jedz słodyczy!", "Uciekaj od hałasu!", "Dyskutuj!", "Bądź kreatywny!", "Nie unikaj śniadań!"]
r4_key = "G E C A B D".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 13,
    "source": "Na podstawie: https://www.focus.pl/artykul/10-najgorszych-nawykw-ktre-niszcz-nasz-mzg?page=2",
    "heading": "Czy wiesz, jak dbać o swój mózg i dlaczego?",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Rzuć palenie!", "answer": "F", "shown": True},
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
}

# ---- r5: box cloze, 10 x 0.5 (box = 10 answers + example word "lata", no distractor)
r5_raw = join(after_points(between(test, r"V\. Proszę – zgodnie z przykładem – uzupełnić tekst wyrazami z ramki", r"Na podstawie: https://www.polskatradycja")))
r5_box_txt = "ludzkie słońca kwiatami rywalizowali najkrótszej witali lata przyłączały się informacje miłosne para"
assert r5_raw.startswith(r5_box_txt), r5_raw[:120]
r5_raw = r5_raw[len(r5_box_txt):].strip()
assert r5_raw.startswith("Noc świętojańska "), r5_raw[:40]
r5_raw = r5_raw[len("Noc świętojańska "):]
r5_raw = re.sub(r"latPRZYKŁAD|lataPRZYKŁAD", "{{ex}}", r5_raw)
r5_raw = re.sub(r"\s*[…\.]{3,}\s*(\d+)", r" {{\1}}", r5_raw)
r5_raw = re.sub(r"\s+", " ", r5_raw).replace(" ,", ",").replace(" .", ".")
r5_parts = r5_raw.split(" Święto obchodzono")   # paragraph breaks as printed
r5_ans = ["witali", "najkrótszej", "słońca", "ludzkie", "rywalizowali", "miłosne", "kwiatami", "przyłączały się", "para", "informacje"]
r5 = {
    "id": "r5", "number": "V", "type": "clozeBox", "grading": "auto",
    "instruction": "V. Proszę – zgodnie z przykładem – uzupełnić tekst wyrazami z ramki.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 14,
    "title": "Noc świętojańska",
    "source": "Na podstawie: https://www.polskatradycja.pl/folklor/swieta/letnie/noc-swietojanska.html",
    "wordBox": r5_box_txt.replace("przyłączały się", "przyłączały_się").split(), "distractors": [],
    "passage": r5_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "lata"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate(r5_ans)],
}
r5["wordBox"] = [w.replace("_", " ") for w in r5["wordBox"]]
r5["passage"] = r5_raw.replace(" Święto obchodzono", "\n\nŚwięto obchodzono").replace(" Noc świętojańska miała", "\n\nNoc świętojańska miała")

reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [9, 14], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
# ---- g1: declension (3 examples; underlined in PDF p.16: roku / wyjątkowe / nich)
g1_raw = paras_by_blank(after_points(between(test, r"I\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych", r"^II\. Proszę")))
g1_pass, g1_bl = cloze_choice("\n\n".join(g1_raw))
set_answers(g1_bl, "zagranicznej pracę świecie nimi urlopu muzea ich doświadczeni turyści regionalnych".split(), {"ex1": "roku", "ex2": "wyjątkowe", "ex3": "nich"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 16,
    "passage": g1_pass, "blanks": g1_bl,
}

# ---- g2: conjunctions from a box (example: i), distractor i (box lists "i" twice)
g2_raw = join(after_points(between(test, r"II\. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki \(spójniki\)", r"^III\. Proszę")))
g2_box = "ponieważ dlatego ale czy i i że"
assert g2_raw.startswith(g2_box), g2_raw[:60]
g2_raw = g2_raw[len(g2_box):].strip()
g2_raw = re.sub(r"\bi\s+PRZYKŁAD", "{{ex}}", g2_raw)
g2_raw = re.sub(r"\s*[…\.]{3,}\s*(\d+)", r" {{\1}}", g2_raw)
g2_raw = re.sub(r"\s+", " ", g2_raw).replace(" Hanna Derkacz,", "\n\nHanna Derkacz,")
g2 = {
    "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
    "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 16,
    "wordBox": g2_box.split(), "distractors": ["i"],
    "passage": g2_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "i"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("że dlatego czy ale ponieważ".split())],
}

# ---- g3: comparison (2 examples: trudniejszym / wcześniej)
g3_raw = re.sub(r"\s+", " ", " ".join(after_points(between(test, r"III\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów", r"^IV\. Proszę")))).strip()
g3_pass, g3_bl = cloze_choice(g3_raw)
set_answers(g3_bl, "efektywne lepsza więcej intensywniej najdoskonalszą".split(), {"ex1": "trudniejszym", "ex2": "wcześniej"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "passage": g3_pass, "blanks": g3_bl,
}

# ---- g4: verb forms (present & future), 2 examples printed in the text ("szukamy (szukać)PRZYKŁAD")
g4_raw = " ".join(paras_by_indent(after_points(between(test, r"IV\. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami", r"^V\. Proszę"))))
g4_raw = re.sub(r"\s+", " ", g4_raw)
g4_raw = g4_raw.replace("szukamy (szukać)PRZYKŁAD", "{{ex1}}").replace("urodzi się (urodzić się)PRZYKŁAD", "{{ex2}}")
g4_given = {}
def g4_rep(m):
    g4_given[m[1]] = m[2].strip()
    return " {{%s}}" % m[1]
g4_raw = re.sub(r"\s*[…\.]{3,}\s*(\d+)\s*\(([^()]*)\)\d*", g4_rep, g4_raw)
g4_raw = re.sub(r"\s+", " ", g4_raw).replace(" ,", ",").replace(" .", ".").replace(" Kiedy wreszcie", "\n\nKiedy wreszcie")
assert sorted(g4_given, key=int) == [str(i) for i in range(1, 11)], g4_given
g4_ans = [("przeszukuje", []), ("dzwonię", []), ("mogą/będą mogli", ["mogą", "będą mogli"]), ("pomagają", []), ("trwa", []),
          ("znajdziemy", []), ("weźmiemy", []), ("wybierze", []), ("spakuję", []), ("przyjedzie", [])]   # key 3 prints "mogą/będą mogli"
g4_bl = [{"id": "ex1", "example": True, "given": "szukać", "answer": "szukamy"},
         {"id": "ex2", "example": True, "given": "urodzić się", "answer": "urodzi się"}]
for i, (a, acc) in enumerate(g4_ans, 1):
    b = {"id": str(i), "given": g4_given[str(i)], "answer": a}
    if acc:
        b["accept"] = acc
    g4_bl.append(b)
g4 = {
    "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
    "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przyszły).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17,
    "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
    "passage": g4_raw, "blanks": g4_bl,
    "pdfNotes": ["Examples are printed in the text before their cue ('szukamy (szukać)', 'urodzi się (urodzić się)'); the superscript number repeated after each cue is ignored.",
                 "Key 3 prints 'mogą/będą mogli' (alternatives without spaces): answer stored as printed, both variants also in accept."],
}

# ---- g5: ask about the underlined part (underlines read from PDF p.18)
g5_q = [  # (sentence, underlined, stem, short answer, key, accept)
    ("Obie lampy są ładne, ale wolę tę większą.", "tę większą", "…………… lampę wolisz?", "Tę większą.", "Którą", []),
    ("Jerzy świetnie wygląda w garniturze.", "w garniturze", "…………… Jerzy świetnie wygląda?", "W garniturze.", "W czym", ["W jakim ubraniu", "W którym ubraniu"]),
    ("Rodzice kupili te ciastka dzieciom.", "dzieciom", "…………… rodzice kupili te ciastka?", "Dzieciom.", "Komu", []),
    ("Do wyjścia dojdziemy tym korytarzem.", "tym korytarzem", "…………… dojdziemy do wyjścia?", "Tym korytarzem.", "Którędy", ["Jak", "Którym korytarzem"]),
    ("Adam wrócił z gór, spędzał tam wakacje.", "z gór", "…………… wrócił Adam?", "Z gór.", "Skąd", []),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Jan idzie do kiosku po gazetę.", "underlined": "po gazetę",
                "stem": "…………… Jan idzie do kiosku?", "shortAnswer": "Po gazetę.", "answer": "Po co", "shown": True},
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": acc}
              for i, (s, u, st, sa, a, acc) in enumerate(g5_q)],
    "pdfNotes": ["Official key prints the question word with decoration (Którą…?, W czym…? / W jakim ubraniu…?); stored without it, match.stripChars ignores the decoration."],
}

# ---- g6: transformation (key = model + partial-credit rubric per item, transcript.pdf p.7)
g6_data = [
    ("Mam ochotę na mocną kawę.", "Napiłbym się", "Napiłbym się mocnej kawy.", "2 transformacje (2 x 0,25) + usunięcie zbędnego przyimka 0,5",
     [("2 transformacje", 0.5), ("usunięcie zbędnego przyimka", 0.5)]),
    ("Turyści zwiedzają Stare Miasto.", "spacerują", "Turyści spacerują po Starym Mieście.", "dodanie przyimka 0,5 + 2 transformacje (2 x 0,25)",
     [("dodanie przyimka", 0.5), ("2 transformacje", 0.5)]),
    ("Dziecko za często siedzi przy komputerze.", "używa", "Dziecko za często używa komputera.", "usunięcie zbędnego przyimka 0,5 + transformacja 0,5",
     [("usunięcie zbędnego przyimka", 0.5), ("transformacja", 0.5)]),
    ("Marcin pracuje w tej restauracji dłużej niż inni kelnerzy.", "od", "Marcin pracuje w tej restauracji dłużej od innych kelnerów.", "2 transformacje (2 x 0,5)",
     [("2 transformacje", 1)]),
    ("Nie wiem, jak napisać to słowo.", "nie umiem", "Nie umiem napisać tego słowa.", "usunięcie zbędnego spójnika 0,5 + 2 transformacje (2 x 0,25)",
     [("usunięcie zbędnego spójnika", 0.5), ("2 transformacje", 0.5)]),
]
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 19,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Robert prowadzi duże przedsiębiorstwo.", "hint": "kieruje", "answer": "Robert kieruje dużym przedsiębiorstwem.", "shown": True},
    "items": [{"id": f"g6.{i+1}", "number": i + 1, "source": s, "hint": h, "answer": a, "rubric": r,
               "rubricParts": [{"what": w_, "points": p_} for w_, p_ in parts]}
              for i, (s, h, a, r, parts) in enumerate(g6_data)],
}

# ---- g7: aspect & mood (3 examples: mogła / pojechałabym / wyjedź), prose + dialogue
g7_lines = after_points(between(test, r"VII\. Proszę – zgodnie z przykładami", r"^VIII\. Proszę"))
g7_turns, cur = [], []
for l in g7_lines:
    if re.match(r"^(Gdybym |Z zagranicznym|Mój brat radzi|- |Moi znajomi|Obawiam się)", l.strip()) and cur:
        g7_turns.append(join(cur)); cur = []
    if l.strip():
        cur.append(l)
g7_turns.append(join(cur))
assert len(g7_turns) == 8, len(g7_turns)
g7_pass, g7_bl = cloze_choice("\n\n".join(g7_turns))
set_answers(g7_bl, "byłoby|poszukaj|chciałabyś|przejrzyj|Kieruj się|wybrałbym|studiuj|martw się|odwiedzimy|mieli".split("|"),
            {"ex1": "mogła", "ex2": "pojechałabym", "ex3": "wyjedź"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 20,
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: choose & underline the right preposition (clozeChoice; example: w)
g8_s = next(i for i, l in enumerate(test) if l.startswith("VIII. Proszę"))
g8_e = next(i for i in range(g8_s, len(test)) if "©" in test[i])
g8_raw = re.sub(r"\s+", " ", " ".join(after_points(test[g8_s:g8_e]))).strip()
g8_pass, g8_bl = cloze_choice(g8_raw)
set_answers(g8_bl, "nad z na przez przed".split(), {"ex": "w"})
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – wybrać i podkreślić poprawny wyraz spośród podanych w nawiasach (przyimki).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 20,
    "passage": g8_pass, "blanks": g8_bl,
}

grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [16, 20], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING
w_sets = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "zaproszenie", "wordTarget": 30, "prompt": "Organizuje Pani/Pan swoje przyjęcie urodzinowe w eleganckiej restauracji. Proszę napisać zaproszenie dla swoich kolegów i koleżanek na tę uroczystość."},
        {"id": "b", "genre": "esej", "wordTarget": 170, "prompt": "Proszę napisać esej szkolny (wypracowanie) pod tytułem: „Mój sposób na dobre zdrowie”.", "title": "Mój sposób na dobre zdrowie"}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "e-mail", "wordTarget": 50, "prompt": "Przeczytała Pani / Przeczytał Pan w internecie ogłoszenie, które Panią/Pana zainteresowało: Fundacja „Pomagamy Zwierzętom” potrzebuje pracowników w schronisku dla psów i kotów. Kontakt: pomagamy@o2.pl Proszę napisać e-mail, zapytać w nim o szczegóły (adres, godziny pracy, zadania) i umówić się na spotkanie."},
        {"id": "b", "genre": "sprawozdanie", "wordTarget": 150, "prompt": "Szkoła języka polskiego dla cudzoziemców organizuje konkurs na najciekawsze wspomnienia z wycieczki po Polsce. Decyduje się Pani/Pan wziąć w nim udział. Proszę napisać sprawozdanie (relację) z takiej podróży."}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 30, "prompt": "Chce Pani/Pan sprzedać swoje podręczniki do nauki języka polskiego. Proszę napisać ogłoszenie, które zamieści Pani/Pan na portalu internetowym."},
        {"id": "b", "genre": "charakterystyka", "wordTarget": 170, "prompt": "Proszę napisać charakterystykę sportowca, którego Pani/Pan podziwia."}]},
]
w = writing_task(w_sets, [22, 28])
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [21, 28], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "marzec 2021", "examDates": "8-9.05.2021",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Discrepancy: directory/README date this session 8-9.05.2021 (id 2021-05), but both PDFs (test and transcript) are headed \"marzec 2021\"; labelPdf keeps the printed label.",
                       "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear; 2021 sessions: only whole plays are offered (per-item times unreliable).",
                       "Listening II = matching table (column I -> A-F), IV = MC on a reportage (5 items), V = picture matching: 10 texts <-> photos A-K (A = example, key row per photo).",
                       "Reading III has fragments A-I (8 gaps + example, all used), IV has paragraphs A-G; reading V is a word-box cloze (10 answers + example word 'lata', no spare word).",
                       "Grammar II box lists 'i' twice (one is the example, the other is the spare word); grammar VIII is a choose-and-underline task (clozeChoice) rather than a word box.",
                       "Listening V options: texts 1-10 plus a 'PRZYKŁAD' option so that the example (photo A) has a valid answer id."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
    # manifest.js is merged by the coordinator: {"id": "2021-05", "label": "marzec 2021"}
