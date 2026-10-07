#!/usr/bin/env python3
"""Builds data/2024-04.js. Run from anywhere: python3 tools/build_2024_04.py
Content = verbatim from sources/2024-04/test.txt (+ PDF page images for underlined/bold PRZYKŁAD answers),
keys = official 'Klucz do zadań' in transcript.txt. Adapted from tools/build_2024_02.py (docs/conversion-recipe.md).
NOTE: data/manifest.js is intentionally NOT touched by this builder (merged by the coordinator)."""
import json, sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2024-04"
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
    ("Ta wypowiedź jest typowa", ["w kwiaciarni.", "w piekarni.", "w sklepie mięsnym."]),
    ("Ta wypowiedź oznacza", ["złość.", "radość.", "strach."]),
    ("Ta wypowiedź to fragment", ["porady lekarskiej.", "reklamy radiowej.", "prognozy pogody."]),
    ("Ta wypowiedź jest typowa", ["u optyka.", "u ortopedy.", "u informatyka."]),
    ("Ta wypowiedź oznacza", ["zainteresowanie.", "zadowolenie.", "niezadowolenie."]),
    ("Ta wypowiedź oznacza, że osoba", ["nie jest pewna.", "ma problemy z mówieniem.", "ogląda ciekawy film."]),
    ("Ta wypowiedź oznacza, że osoba", ["obudziła się za wcześnie.", "wstała za późno.", "zapomniała o budziku."]),
    ("Ta wypowiedź jest typowa", ["w szatni.", "w przychodni.", "w przedszkolu."]),
    ("Ta wypowiedź komentuje", ["wyścig rowerowy.", "skoki narciarskie.", "mecz piłki nożnej."]),
    ("Ta wypowiedź oznacza, że basen jest", ["zamknięty.", "otwarty w tygodniu.", "nieczynny przez tydzień."]),
    ("Ta wypowiedź oznacza, że osoba", ["podjęła decyzję.", "potrzebuje rady.", "szuka swojego miejsca."]),
    ("Ta wypowiedź jest typowa", ["u kosmetyczki.", "na siłowni.", "w restauracji."]),
    ("Ta wypowiedź to", ["polecenie.", "zakaz.", "pytanie."]),
    ("Ta wypowiedź oznacza", ["krytykę.", "komplement.", "poradę."]),
]
l1_key = "b c c a c a b b c a b c a b".split()
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
    "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 4,
    "audio": task_audio(SID, "I", ["l1.ex"] + [f"l1.{i}" for i in range(1, 15)]),
    "example": {"id": "l1.ex", "prompt": "Ta wypowiedź oznacza, że ona", "options": OPT("robi makijaż.", "robi remont.", "jest gotowa."),
                "answer": "a", "shown": True, "transcript": l1_tr["ex"]},   # PDF p.4: option a bold-underlined
    "items": [mc_item("l1", i + 1, p, o, l1_key[i], transcript=l1_tr[i + 1]) for i, (p, o) in enumerate(l1_items)],
}

# ---- l2: 6 dialogues (transcript.txt: example + 6 pairs; official typo: item 4 both lines tagged (K))
l2_lines = [re.match(r"^\s*(?:Przykład:|\d+\.)?\s*–\s*(.*?)\s*\(([KM])\)\s*$", l) for l in tr_block("II") if "–" in l]
assert len(l2_lines) == 14 and all(l2_lines)
l2_pairs = [[{"sp": m[2], "t": m[1]} for m in l2_lines[i:i + 2]] for i in range(0, 14, 2)]
l2_key = "c b a c b c".split()
l2_items = [
    ("Z tego dialogu dowiadujemy się, że klient", ["ma tylko gotówkę.", "chciałby zapłacić gotówką.", "chce zapłacić kartą."]),
    ("Z tego dialogu dowiadujemy się, że", ["wszystkie posiłki są gratis.", "za jedzenie trzeba dodatkowo zapłacić.", "jeden posiłek jest za darmo."]),
    ("Z tego dialogu dowiadujemy się, że", ["para planuje egzotyczną podróż.", "kobieta od zawsze marzyła o egzotycznej podróży.", "mężczyzna pierwszy raz będzie leciał samolotem."]),
    ("Z tego dialogu dowiadujemy się, że kobieta", ["jest zadowolona z usług salonu.", "poleca wizytę w tym salonie.", "jest niezadowolona z wizyty."]),
    ("Z tego dialogu dowiadujemy się, że mężczyzna", ["chce wkrótce wziąć udział w zawodach.", "jest za stary na udział w zawodach.", "nie jest pewien, czy weźmie udział w zawodach."]),
    ("Z tego dialogu dowiadujemy się, że kobieta", ["gra na skrzypcach razem z dzieckiem.", "dała swoje skrzypce dziecku.", "grała na skrzypcach już w młodym wieku."]),
]
l2 = {
    "id": "l2", "number": "II", "type": "mc", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać dialogów i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "plays": 2, "pdfPage": 5,
    "audio": task_audio(SID, "II", ["l2.ex"] + [f"l2.{i}" for i in range(1, 7)]),
    "example": {"id": "l2.ex", "prompt": "Z tego dialogu dowiadujemy się, że mężczyzna",
                "options": OPT("będzie jadł posiłek w lokalu.", "nie będzie jadł w restauracji.", "zamawia jedzenie dla dwóch osób."),
                "answer": "b", "shown": True,   # PDF p.5: option b bold-underlined
                "transcript": {"lines": l2_pairs[0]}},
    "items": [mc_item("l2", i + 1, p, o, l2_key[i], transcript={"lines": l2_pairs[i + 1]}) for i, (p, o) in enumerate(l2_items)],
}

# ---- l3: interview MC (Dziennikarz / Stewardessa, later D: / S:)
l3_tr = speaker_lines(tr_block("III"), {"D": "Dziennikarz", "S": "Stewardessa"})
assert [x["sp"] for x in l3_tr] == ["Dziennikarz", "Stewardessa"] * 5, [x["sp"] for x in l3_tr]
l3_key = "a c a b b".split()
l3_items = [
    ("Choroba matki", ["pomogła podjąć decyzję o pracy.", "przeszkodziła w podpisaniu umowy.", "opóźniła rekrutację o trzy dni."]),
    ("Żeby pracować jako stewardessa, trzeba", ["znać minimum 3 języki obce.", "mieć lotnicze wykształcenie.", "umieć radzić sobie w stresujących sytuacjach."]),
    ("Podczas rekrutacji kobieta", ["miała test językowy.", "leciała samolotem.", "rozmawiała z pilotem."]),
    ("Jedną z zalet pracy stewardessy są", ["stabilność i rutyna.", "darmowe noclegi i przejazdy.", "ciekawe szkolenia zawodowe."]),
    ("Wady pracy stewardessy to", ["długie oczekiwanie na lot powrotny.", "nieregularny tryb życia.", "brak czasu na zwiedzanie."]),
]
l3 = {
    "id": "l3", "number": "III", "type": "mc", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wywiadu na temat pracy stewardessy i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 6,
    "source": "Na podstawie: https://noizz.pl/lifestyle/stewardessa-opowiada-o-kulisach-swojego-zawodu/9n0lez8",
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_tr},
    "example": {"id": "l3.ex", "prompt": "Kobieta została stewardessą, bo",
                "options": OPT("lubi latać samolotami.", "interesuje się podróżami.", "chce zarabiać dużo pieniędzy."),
                "answer": "b", "shown": True},   # PDF p.6: option b bold-underlined
    "items": [mc_item("l3", i + 1, p, o, l3_key[i]) for i, (p, o) in enumerate(l3_items)],
}

# ---- l4: TAK/NIE on a monologue (transcript is continuous speech, no speaker labels -> {"text": …})
l4_text = join(tr_block("IV"))
l4_stm = ["Firmy zwalniają pracowników, którzy nie potrafią pracować z robotami.",
          "W ostatnim roku wszystkie badane firmy zamieniły pracownika na robota.",
          "Zastąpienie hydraulika czy elektryka robotem będzie za drogie.",
          "Sztuczna inteligencja to duża konkurencja dla lekarzy.",
          "Artyści będą grać coraz mniej koncertów.",
          "Sztuczna inteligencja jest zagrożeniem dla kompozytorów."]
l4_key = "NIE NIE TAK NIE NIE TAK".split()   # key table: X column per row
l4 = {
    "id": "l4", "number": "IV", "type": "tf", "grading": "auto",
    "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę posłuchać informacji na temat sztucznej inteligencji oraz rynku pracy i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "plays": 2, "pdfPage": 7,
    "source": "Na podstawie: https://www.polskieradio.pl/10/5566/Artykul/3291592,lekarz-hydraulik-artysta-dla-nich-ai-nie-jest-zagrozeniem",
    "audio": task_audio(SID, "IV"),
    "transcript": {"text": l4_text},
    "example": {"id": "l4.ex", "statement": "Z powodu sztucznej inteligencji niedługo zniknie 25% zawodów.", "answer": "TAK", "shown": True},   # PDF p.7: X in TAK
    "items": [{"id": f"l4.{i+1}", "number": i + 1, "statement": s, "answer": l4_key[i]} for i, s in enumerate(l4_stm)],
}

# ---- l5: persons -> statements (4 persons, 5 statements A-E)
l5_lines = []
for l in tr_block("V"):
    m = re.match(r"^(Osoba \d)\s*\(\s*([KM])\)\s*$", l.strip())
    if m:
        l5_lines.append({"sp": f"{m[1]} ({m[2]})", "t": ""})
    else:
        l5_lines[-1]["t"] += " " + l.strip()
for o in l5_lines:
    o["t"] = o["t"].strip()
assert len(l5_lines) == 4
l5_st = [("A", "nie je śniadań w domu.", ["2", "4"], True), ("B", "bardzo lubi jeść na śniadanie pieczywo.", ["3"], False),
         ("C", "ma różnorodne menu.", ["1"], False), ("D", "je wegetariańskie śniadania.", ["4"], False),
         ("E", "zwykle śniadanie robi w kilka minut.", ["3"], False)]
l5 = {
    "id": "l5", "number": "V", "type": "matchMulti", "grading": "auto",
    "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać tekstu na temat zwyczajów śniadaniowych i dopasować osoby (1-4) do ich opinii (A-E). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
    "pointsFormula": "6 x 1 p.", "pointsPerSlot": 1, "maxPoints": 6, "plays": 2, "pdfPage": 8,
    "source": "Na podstawie: https://www.brw.pl/blog/sniadania-od-kuchni-sprawdzamy-poranne-zwyczaje-zywieniowe-polakow/",
    "audio": task_audio(SID, "V", [f"p{i}" for i in range(1, 5)]),
    "persons": [{"id": str(i), "label": f"osoba {i}"} for i in range(1, 5)],
    "example": {"id": "l5.ex", "statement": "codziennie je śniadanie.", "answer": ["1"], "shown": True},   # PDF p.8: [___1___]
    "statements": [{"id": f"l5.{k}", "letter": k, "text": t, "slots": len(a), "answer": a, "anyOrder": True, "starred": s} for k, t, a, s in l5_st],
    "keyNote": "*kolejność odpowiedzi dowolna",
    "transcript": {"lines": l5_lines},
}

listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [4, 8], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
src_ = lambda s: "Na podstawie: " + s
r1_ex = {"id": "r1.ex",
         "passage": {"text": "Kameralny koncert chopinowski w Warszawie to wyjątkowe wydarzenie. Można tam usłyszeć interpretacje dzieł Fryderyka Chopina. Koncert zaczyna się krótką prezentacją życia kompozytora, a występ każdego artysty trwa 50 minut. Pianistami są utalentowani muzycy, którzy zwykle koncertują w Polsce i za granicą.",
                     "source": src_("https://biletserwis.pl/e/chopin-point-warsaw/")},
         "prompt": "Z tego tekstu wynika, że",
         "options": OPT("wydarzenie odbywa się w Polsce i innych europejskich stolicach.", "na koncercie występują zagraniczni i polscy muzycy.", "podczas koncertu można poznać twórczość tylko jednego kompozytora."),
         "answer": "c", "shown": True}   # PDF p.10: option c bold-underlined
r1_data = [
    ("W kursie surfowania mogą uczestniczyć dorośli, młodzież, a nawet dzieci zainteresowane aktywnym spędzaniem wolnego czasu. Najpierw jednak trzeba poznać teorię związaną między innymi z bezpieczeństwem w wodzie. Nie jest prawdą, że to sport dla bogatych. Na początku można u nas wypożyczyć deskę surfingową i sprawdzić, jak się czujemy w nowej sytuacji.",
     "https://www.ciekawyartykul.pl/czy-warto-nauczyc-sie-surfowania/",
     "Z tego tekstu wynika, że", ["trzeba zainwestować dużo pieniędzy, żeby uprawiać surfing.", "na kursie dowiemy się również, jak chronić swoje życie i zdrowie.", "osoby zainteresowane tym sportem muszą najpierw kupić specjalny sprzęt."], "b"),
    ("Trnawa to jedno z najważniejszych miast w Słowacji, które jest zlokalizowane w zachodniej części kraju, ok. 56 km od Bratysławy. Znajduje się tam wiele zabytków przyrodniczych oraz kulturowych. Jej największą atrakcją jest park Dolna Krupa. Według legendy w okolicy Trnawy w latach 1800–1806 mieszkał Ludwig van Beethoven. Prawdopodobnie kompozytor właśnie tam napisał sonatę Księżycową.",
     "https://kobieta.interia.pl/podroze/news-maly-rzym-tuz-za-polska-granica-turystow-urzeka-w-pierwszej-,nId,7136233",
     "Z tego tekstu wynika, że", ["Trnawa jest największym – po Bratysławie – słowackim miastem.", "turyści, którzy lubią naturę, nie będą się nudzili w Trnawie.", "słynna sonata Beethovena powstała w Bratysławie."], "b"),
    ("Dzieła Banksy’ego będzie można zobaczyć od 14 grudnia na krakowskim Kazimierzu, gdzie Hazis Vardar, dyrektor europejskich teatrów, otworzył właśnie muzeum najbardziej tajemniczego współczesnego artysty. Mówi się, że słynny grafficiarz jest z Wielkiej Brytanii, bo właśnie tam w latach 90. XX wieku zaczęły pojawiać się jego charakterystyczne prace.",
     "https://lovekrakow.pl/galeria/dziela-banksyego-zna-caly-swiat-teraz-mozna-zobaczyc-je-w-krakowie-zdjecia_6989.html",
     "Z tego tekstu wynika, że", ["pierwsze graffiti Banksy’ego powstały w Krakowie.", "nową wystawę artysty można oglądać w Anglii.", "Hazis Vardar kieruje instytucjami kulturalnymi w Europie."], "c"),
    ("Sprzedam willę pod Warszawą, która przypomina rezydencje popularne w Hollywood. Ma dwa baseny, lądowisko dla helikopterów oraz prywatną ścieżkę do biegania. Znajduje się tam też duży taras z pięknym widokiem. Dom jest komfortowy i wyposażony w najnowsze technologie.",
     "https://warszawa.naszemiasto.pl/willa-jak-z-hollywood-pod-warszawa-baseny-ladowisko-dla/ar/c9-9219721",
     "Z tego tekstu wynika, że", ["rezydencja jest zlokalizowana w centrum Hollywood.", "do willi można dostać się tylko helikopterem.", "dom znajduje się niedaleko Warszawy."], "c"),
    ("Andrea Camastra z wykształcenia jest muzykiem, ale wybrał zawód kucharza. Urodził się we Włoszech i pracował w popularnych lokalach gastronomicznych w całej Europie. Prawdziwą karierę zrobił jednak w Polsce. Nuta, jego pierwsza restauracja, dostała prestiżową gwiazdkę Michelin. To potwierdza, że jest jedną z lepszych w Warszawie.",
     "https://www.vogue.pl/a/szef-kuchni-gwiazdkowej-restauracji-nuta-andrea-camastra",
     "Z tego tekstu wynika, że", ["Andrea Camastra został kucharzem, gdy przyjechał do Polski.", "kucharz największy sukces odniósł w znanej włoskiej restauracji.", "lokal Camastry w Warszawie otrzymał gastronomiczne wyróżnienie."], "c"),
]
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 10, "pdfPages": [10, 11],
    "example": r1_ex,
    "items": [{"id": f"r1.{i+1}", "number": i + 1, "passage": {"text": t, "source": src_(u)}, "prompt": p, "options": OPT(*o), "answer": a}
              for i, (t, u, p, o, a) in enumerate(r1_data)],
}

# ---- r2: TAK/NIE on one text
r2_text = paras_by_indent(after_points(between(test, r"II\. Proszę przeczytać tekst", r"Na podstawie: https://kobietaipieniadze")))
assert len(r2_text) == 3, r2_text
r2_stm = ["Pan Paragon ma pomóc w zarządzaniu domowym budżetem.", "W aplikacji trzeba wpisać, kiedy i gdzie robiliśmy zakupy.",
          "Użytkownik może samodzielnie zmieniać kategorie zakupów.", "Gdy klient chce złożyć reklamację, musi pokazać w sklepie tradycyjny paragon.",
          "Pan Paragon umożliwia przeglądanie ofert promocyjnych w wielu różnych sklepach.", "Aplikacja samodzielnie wybiera w internecie najlepsze przepisy."]
r2_key = "TAK NIE TAK NIE TAK NIE".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 12,
    "source": "Na podstawie: https://kobietaipieniadze.pl/p/pan-paragon/",
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "Tekst jest o programie komputerowym.", "answer": "NIE", "shown": True},   # PDF p.12: X in NIE
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
}

# ---- r3: fragments -> gaps (all 8 fragments A-H used: example C + 7 answers)
r3_lines = after_points(between(test, r"III\. Proszę przeczytać tekst i", r"Na podstawie: https://www.polskieradio.pl/10/10335"))
r3_text = "\n\n".join(paras_by_indent(r3_lines))
r3_text = re.sub(r"\[_{2}C_{2}\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\](\d)", r"{{\1}}", r3_text)
r3_frag = {"A": "gdzie poznawał kulturę kraju i język mandaryński", "B": "żeby zbudować jego precyzyjny profil",
           "C": "a potem studiował w Glasgow i Cambridge", "D": "że im wcześniej zaplanujemy studia za granicą",
           "E": "która chce pomagać przyszłym studentom", "F": "który zrobił na nim ogromne wrażenie",
           "G": "lecz ważniejsze są rzeczy pozaakademickie", "H": "ale studia magisterskie odbył już na uniwersytecie"}
r3_key = "A H F E D B G".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–H).",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 13,
    "source": "Na podstawie: https://www.polskieradio.pl/10/10335/artykul/3306567,studia-za-granica-tworz-swoj-profil-jak-najwczesniej",
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "C", "shown": True},    # printed in the text: [__C__]PRZYKŁAD
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs (all 8 paragraphs used: example B + 7 answers)
r4_par = {
    "A": "Kiedy musisz skoncentrować się na obowiązkach, wyłącz dźwięk w telefonie. To samo zrób z serwisami społecznościowymi – zadbaj, by alerty ci nie przeszkadzały.",
    "B": "Na początek zacznij sprawdzać, jak długo korzystasz z sieci w ciągu dnia. Zastanów się również, w jakim celu sięgasz po telefon.",
    "C": "Kontakty przez internet to nie to samo, co spotkanie ze znajomymi. Pamiętaj o tym, ponieważ dobre relacje z innymi ludźmi naturalnie chronią przed uzależnieniem od telefonu.",
    "D": "Minimum godzinę przed zaśnięciem nie sprawdzaj już telefonu. Najlepiej byłoby nie brać sprzętów elektronicznych do łóżka i zainwestować w najzwyklejszy budzik.",
    "E": "Jeśli pracujesz, skup się właśnie na tym, a nie na innych aktywnościach. Nie sprawdzaj Facebooka, nie oglądaj filmików na YouTubie.",
    "F": "Nie noś telefonu przez cały czas przy sobie. W trakcie pracy lub nauki specjalnie zostaw go w miejscu, w którym nie będziesz go widział.",
    "G": "Naukowcy udowodnili, że ludzie, którzy nie mają hobby, łatwiej uzależniają się od internetu. Zastanów się, co sprawia ci przyjemność i zacznij to robić!",
    "H": "Co jakiś czas zrób sobie cyfrowy detoks. Świadomie spędzaj jak najwięcej chwil poza siecią – idź do kawiarni, pospaceruj w parku lub spędź dzień z bliskimi.",
}
r4_titles = ["Odłóż czasem swój smartfon", "Zaprzyjaźnij się z ciszą", "Nie rób wielu rzeczy na raz", "Poszukaj pasji poza internetem",
             "Dbaj o jakość snu", "Dbaj o przyjaźnie", "Planuj przerwy od internetu"]
r4_key = "F A E G D C H".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 14,
    "source": "Na podstawie: https://dbamomojzasieg.pl/higiena-cyfrowa/",
    "heading": "Osiem zasad higieny cyfrowej, czyli jak nie uzależnić się od smartfona?",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Kontroluj czas przed ekranem", "answer": "B", "shown": True},   # printed in the answer table
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
}

# ---- r5: inline choice, title + 10 gaps (example 'główną' bold-underlined on PDF p.15)
r5_lines = after_points(between(test, r"V\. Proszę – zgodnie z przykładem – podkreślić najlepszą", r"Na podstawie: https://www.polskieradio.pl/10/482"))
r5_title = r5_lines[0].strip()
r5_pass, r5_bl = cloze_choice("\n\n".join(paras_by_indent(r5_lines[1:])))
set_answers(r5_bl, ["łączy się", "przedstawiciele", "uczyła", "zaczęła", "wreszcie", "aktywna", "odbywa się", "publicznym", "pomysł", "widzów"], {"ex": "główną"})
r5 = {
    "id": "r5", "number": "V", "type": "clozeChoice", "grading": "auto",
    "instruction": "V. Proszę – zgodnie z przykładem – podkreślić najlepszą spośród możliwości podanych w nawiasach.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 15,
    "title": r5_title,
    "source": "Na podstawie: https://www.polskieradio.pl/10/482/artykul/3194353,vika-dokument-o-didzejce-ktora-oswaja-lek-przed-staroscia",
    "passage": r5_pass, "blanks": r5_bl,
}
reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [10, 15], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
# ---- g1: declension (3 examples underlined on PDF p.17: naturalną / medycyny / ją)
g1_pass, g1_bl = cloze_choice("\n\n".join(paras_by_indent(after_points(between(test, r"^\s*I\. Proszę – zgodnie z przykładami", r"Na podstawie: https://portal.abczdrowie")))))
set_answers(g1_bl, "pacjentom snem ziołowe przeziębienia młodych których leczenie tego nam komplikacji".split(), {"ex1": "naturalną", "ex2": "medycyny", "ex3": "ją"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17,
    "source": "Na podstawie: https://portal.abczdrowie.pl/medycyna-naturalna-wady-i-zalety",
    "passage": g1_pass, "blanks": g1_bl,
}

# ---- g2: conjunctions from a box (example 'żeby' sits in the heading line, which is the first paragraph of the passage)
g2_lines = nb(after_points(between(test, r"^\s*II\. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki \(spójniki\)", r"Na podstawie: https://zywieniemaznaczenie")))
assert join(g2_lines[:1]) == "a żeby że więc ale lub bo", g2_lines[:1]
g2_pass = "\n\n".join(paras_by_indent(g2_lines[1:]))
g2_pass = re.sub(r"\S+\s*PRZYKŁAD", "{{ex}}", g2_pass)
g2_pass = re.sub(r"[….]{3,}\s*(\d)", r"{{\1}}", g2_pass)
g2 = {
    "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
    "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "source": "Na podstawie: https://zywieniemaznaczenie.pl/nawyki-zywieniowe-jak-je-zmienic-aby-czuc-sie-dobrze-i-dostarczyc-niezbednych-skladnikow-w-trakcie-diety/",
    "wordBox": "a żeby że więc ale lub bo".split(), "distractors": ["lub"],
    "passage": g2_pass,
    "blanks": [{"id": "ex", "example": True, "answer": "żeby"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("że a ale więc bo".split())],
    "pdfNotes": ["The heading line of the task ('Nawyki żywieniowe – co i jak najlepiej jeść, żeby PRZYKŁAD być zdrowym') contains the example gap; it is kept as the first paragraph of the passage."],
}

# ---- g3: comparison (examples: najważniejsze / mądrze, PDF p.18)
g3_raw = join(after_points(between(test, r"^\s*III\. Proszę – zgodnie z przykładami", r"Na podstawie: https://www.hillspet")))
g3_raw = g3_raw.replace("(najmądrzejszy mądrze,", "(najmądrzejszy, mądrze,")   # test.txt lost this comma (grey highlight); the PDF page shows it
g3_pass, g3_bl = cloze_choice(g3_raw)
set_answers(g3_bl, ["łatwiej", "bardziej niezależne", "droższe", "mniej kosztowne", "najdłużej"], {"ex1": "najważniejsze", "ex2": "mądrze"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "source": "Na podstawie: https://www.hillspet.pl/pet-care/new-pet-parent/choosing-between-dogs-and-cats",
    "passage": g3_pass, "blanks": g3_bl,
}

# ---- g4: verb forms, present & past; examples are printed filled in (widzą / osiągnęli)
g4_raw = "\n\n".join(paras_by_indent(after_points(between(test, r"^\s*IV\. Proszę – zgodnie z przykładami", r"Na podstawie: https://portalyogi"))))
g4_pass, g4_bl = cloze_form(g4_raw)
g4_key = ["możemy", "podjąłeś", "zastanawiasz się", "uważają", "nauczyliśmy się", "zdobyły", "zrealizowałeś", "dbam", "kontroluję", "chce"]
for b in g4_bl:
    if not b.get("example"):
        b["answer"] = g4_key[int(b["id"]) - 1]
        b["accept"] = []
g4 = {
    "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
    "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przeszły).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 18, "pdfPages": [18, 19],
    "source": "Na podstawie: https://portalyogi.pl/blog/25-pytan-aby-podsumowac-rok/",
    "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
    "passage": g4_pass, "blanks": g4_bl,
}

# ---- g5: ask about the underlined part (underlines from PDF p.19)
g5_q = [  # (sentence, underlined, stem, short answer, key)
    ("Wczoraj Anna była w teatrze z mężem i z dziećmi.", "z mężem i z dziećmi", "…………… Anna była wczoraj w teatrze?", "Z mężem i z dziećmi.", "Z kim"),
    ("Nauczyciel zapytał uczniów o ich plany wakacyjne.", "o ich plany wakacyjne", "…………… nauczyciel zapytał uczniów?", "O ich plany wakacyjne.", "O co"),
    ("Uczniowie byli w kinie na filmie przyrodniczym.", "przyrodniczym", "…………… filmie uczniowie byli w kinie?", "Na przyrodniczym.", "Na jakim"),
    ("Panna młoda pięknie wyglądała w białej sukni.", "pięknie", "…………… panna młoda wyglądała w białej sukni?", "Pięknie.", "Jak"),
    ("Najważniejsze zdanie na kartce Paweł podkreślił długopisem.", "długopisem", "…………… Paweł podkreślił najważniejsze zdanie na kartce?", "Długopisem.", "Czym"),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 19,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Prawniczka długo czekała na list z urzędu.", "underlined": "na list z urzędu",
                "stem": "…………… długo czekała prawniczka?", "shortAnswer": "Na list z urzędu.", "answer": "Na co", "shown": True},
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": []}
              for i, (s, u, st, sa, a) in enumerate(g5_q)],
    "pdfNotes": ["Official key prints the question word with decoration (Z kim...?, Na jakim…?); stored without it, match.stripChars ignores the decoration."],
}

# ---- g6: transformation (rubric strings from the key; official typo in item 4)
def parts(*ps):
    return [{"what": w, "points": p} for w, p in ps]
g6_items = [
    ("Mój brat lubi zupę pomidorową.", "smakuje", "Mojemu bratu smakuje zupa pomidorowa.", "4 transformacje (4 x 0,25)", parts(("4 transformacje", 1))),
    ("Wujek mojej żony jest bardzo dobrym pianistą.", "gra na", "Wujek mojej żony bardzo dobrze gra na pianinie.", "2 transformacje (2 x 0,5)", parts(("2 transformacje", 1))),
    ("Naukowców zaciekawiło nagłe ocieplenie klimatu.", "zainteresowali się", "Naukowcy zainteresowali się nagłym ociepleniem klimatu.",
     "1 transformacja „naukowcy” 0,5 p. + 2 transformacje (2 x 0,25)", parts(("transformacja „naukowcy”", 0.5), ("2 transformacje", 0.5))),
    ("Lampę postaw obok tamtego niskiego stolika nocnego.", "przy", "Lampę postaw przy tamtym niskim stoliku nocnym.", "4 transformacje (2 x 0,25)", parts(("4 transformacje", 1))),
    ("Dorotka cieszy się, że dostała tort urodzinowy.", "cieszy się z", "Dorotka cieszy się z tortu urodzinowego.", "2 transformacje (2 x 0,5)", parts(("2 transformacje", 1))),
]
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 20,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Na jutro muszę kupić pieczywo bezglutenowe dla Marka.", "hint": "potrzebuję",
                "answer": "Na jutro potrzebuję pieczywa bezglutenowego dla Marka.", "shown": True},
    "items": [{"id": f"g6.{i+1}", "number": i + 1, "source": s, "hint": h, "answer": a, "rubric": r, "rubricParts": rp,
               **({"accept": ["Wujek mojej żony bardzo dobrze gra na fortepianie."]} if i == 1 else {})}
              for i, (s, h, a, r, rp) in enumerate(g6_items)],
    "pdfNotes": ["Key item 2 prints 'pianinie/fortepianie' (alternatives; the second is stored in accept).",
                 "Key item 4 rubric prints '4 transformacje (2 x 0,25)' (sic; 4 x 0,25 = 1 p. is meant); stored verbatim, parts sum to 1 p."],
}

# ---- g7: aspect & mood (examples Chciałabym / Poradźcie on PDF p.21), dialogue
g7_lines = after_points(between(test, r"^\s*VII\. Proszę – zgodnie z przykładami", r"^\s*VIII\."))
g7_turns, cur = [], []
for l in g7_lines:
    if re.match(r"^(Ojciec|Matka|Joanna):", l.strip()) and cur:
        g7_turns.append(join(cur)); cur = []
    if l.strip():
        cur.append(l)
g7_turns.append(join(cur))
g7_turns = [re.sub(r"\)\s+(\d+)", r")\1", t) for t in g7_turns]
g7_pass, g7_bl = cloze_choice("\n\n".join(g7_turns))
set_answers(g7_bl, "mielibyśmy Powiedzcie Przyjdź wyłącz żartujcie opowiedzielibyście pomogło przedstawi dostał zadzwoniłabym".split(),
            {"ex1": "Chciałabym", "ex2": "Poradźcie"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 21,
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: prepositions from a box (example 'dla' printed in the text, PDF p.21)
g8_lines = nb(after_points(between(test, r"^\s*VIII\. Proszę – zgodnie z przykładem", r"Na podstawie: https://samorzad")))
assert join(g8_lines[:1]) == "przy do dla w przez na z", g8_lines[:1]
g8_raw = join(g8_lines[1:])
g8_raw = re.sub(r"\S+\s*PRZYKŁAD", "{{ex}}", g8_raw)
g8_raw = re.sub(r"[….]{3,}\s*(\d)", r"{{\1}}", g8_raw)
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeBox", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (przyimki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 21,
    "source": "Na podstawie: https://samorzad.gov.pl/web/powiat-pruszkowski/muzeum-motoryzacji-i-techniki-w-otrebusach2",
    "wordBox": "przy do dla w przez na z".split(), "distractors": ["przy"],
    "passage": g8_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "dla"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("w na do przez z".split())],
}

grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [17, 21], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING (no key exists; prompts from test.txt p.23)
sets = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "zaproszenie", "wordTarget": 50, "prompt": "Pracuje Pani/Pan w domu kultury. Organizuje Pani/Pan spotkanie ze znanym podróżnikiem. Proszę napisać zaproszenie, które opublikuje Pani/Pan na stronie internetowej instytucji."},
        {"id": "b", "genre": "e-mail", "wordTarget": 150, "prompt": "Nie jest Pani zadowolona / Nie jest Pan zadowolony z kursu językowego, na który Pani/Pan chodzi. Proszę o tym napisać w e-mailu do koleżanki/kolegi z Polski."}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "pozdrowienia", "wordTarget": 25, "prompt": "Pracuje Pani/Pan w małej polskiej firmie. Jest Pani/Pan na urlopie. Proszę napisać pozdrowienia do koleżanki/kolegi z pracy."},
        {"id": "b", "genre": "charakterystyka", "wordTarget": 175, "prompt": "Pani/Pana szkoła języka polskiego ogłosiła konkurs na najciekawszy tekst pt. „Lubię ją/go. Poznaliśmy się w Polsce”. Proszę napisać charakterystykę tej osoby.", "title": "Lubię ją/go. Poznaliśmy się w Polsce"}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 50, "prompt": "Szuka Pani/Pan współlokatora do trzypokojowego mieszkania. Proszę napisać ogłoszenie, które opublikuje Pani/Pan w mediach społecznościowych (proszę napisać, co Pani/Pan akceptuje, a na co się nie zgadza w swoim mieszkaniu)."},
        {"id": "b", "genre": "relacja", "wordTarget": 150, "prompt": "Współpracuje Pani/Pan ze znanym czasopismem „Muzyka”. Proszę napisać relację z koncertu, na którym ostatnio Pani była / Pan był."}]},
]
w = writing_task(sets, [23, 29])
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [22, 29], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "kwiecień 2024", "examDates": "20-21.04.2024",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear.",
                       "Listening V has 4 persons and 5 statements (A–E); the printed key is row-per-statement (A* 2,4 | B 3 | C 1 | D 4 | E 3).",
                       "Listening IV transcript is a continuous monologue (no speaker labels) -> transcript.text.",
                       "Listening II item 4: official transcript tags both lines (K); kept.",
                       "Reading III: all 8 fragments A–H are used (example C + 7). Reading IV: all 8 paragraphs A–H are used (example B + 7).",
                       "Grammar II/VIII heading/example gaps: the example word is part of the printed word box and is struck through in the PDF.",
                       "Grammar IV: example forms (widzą, osiągnęli) are printed filled in in the booklet."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
