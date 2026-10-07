#!/usr/bin/env python3
"""Builds data/2022-03.js. Run from anywhere: python3 tools/build_2022_03.py
Content = verbatim from sources/2022-03/test.txt (+ PDF page images for underlined/bold PRZYKŁAD answers),
keys = official 'Klucz do zadań' in transcript.txt. Adapted from tools/build_2024_02.py (docs/conversion-recipe.md)."""
import json, sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from buildlib import *

SID = "2022-03"
test = clean_lines(read(SID, "test.txt"))
OPT = lambda *texts: [{"id": "abc"[i], "text": t} for i, t in enumerate(texts)]


def mc_item(tid, n, prompt, opts, ans, **kw):
    return {"id": f"{tid}.{n}", "number": n, "prompt": prompt, "options": OPT(*opts), "answer": ans, **kw}


def sp_tag(t):
    m = re.match(r"^(.*?)\s*\(([KM])\)\s*$", t.strip())
    return m[2], m[1].strip()


# =============================================================== LISTENING
# ---- l1: 14 single utterances, MC (example: a, bold-underlined on PDF p.3)
l1_tr_src = [l for l in transcript_block(SID, "I")]
l1_tr = []
for l in l1_tr_src:
    m = re.match(r"^\s*(?:Przykład:|\d+\.)\s*(.*)$", l)
    sp, t = sp_tag(m[1])
    l1_tr.append({"sp": sp, "t": t})
assert len(l1_tr) == 15
l1_key = "c b a a b c b c a c c b a b".split()
l1_items = [
    ("Ta wypowiedź jest typowa", ["w barze.", "w kwiaciarni.", "na targu."]),
    ("Ta wypowiedź jest typowa", ["w muzeum.", "w teatrze.", "w kinie."]),
    ("Ta wypowiedź oznacza", ["zdenerwowanie.", "radość.", "strach."]),
    ("Ta wypowiedź jest typowa", ["w sklepie obuwniczym.", "w księgarni.", "w restauracji."]),
    ("Ta wypowiedź jest typowa", ["u optyka.", "w aptece.", "u okulisty."]),
    ("Ta wypowiedź jest typowa podczas", ["kontroli biletów.", "odprawy na lotnisku.", "kontroli drogowej."]),
    ("Ta wypowiedź oznacza", ["krytykę.", "polecenie.", "sympatię."]),
    ("Ta wypowiedź jest typowa", ["w galerii handlowej.", "w księgarni.", "w muzeum."]),
    ("Ta wypowiedź oznacza", ["rekomendację.", "prośbę.", "rezygnację."]),
    ("Ta wypowiedź oznacza problemy", ["z wydaniem reszty.", "z płatnością gotówką.", "z płatnością kartą."]),
    ("Ta wypowiedź oznacza, że osoba jest", ["przed czasem.", "na czas.", "po czasie."]),
    ("Ta osoba jest", ["zadowolona.", "smutna.", "zmęczona."]),
    ("Ta wypowiedź jest typowa dla", ["pracownika.", "studenta.", "bezrobotnego."]),
    ("Ta wypowiedź jest typowa", ["w sklepie mięsnym.", "w cukierni.", "w barze."]),
]
l1 = {
    "id": "l1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
    "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "14 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 7, "plays": 1, "pdfPage": 3,
    "audio": task_audio(SID, "I", ["l1.ex"] + [f"l1.{i}" for i in range(1, 15)]),
    "example": {"id": "l1.ex", "prompt": "Ta wypowiedź jest typowa",
                "options": OPT("na przystanku.", "na stacji benzynowej.", "na dworcu PKP."),
                "answer": "a", "shown": True, "transcript": l1_tr[0]},   # PDF p.3: option a bold-underlined
    "items": [mc_item("l1", i + 1, p, o, l1_key[i], transcript=l1_tr[i + 1]) for i, (p, o) in enumerate(l1_items)],
}

# ---- l2: 8 dialogues, MC (example: b, PDF p.4)
l2_lines = []
for l in transcript_block(SID, "II"):
    m = re.search(r"-\s+(.*\(([KM])\))\s*$", l)
    if m:
        sp, t = sp_tag(m[1])
        l2_lines.append({"sp": sp, "t": t})
assert len(l2_lines) == 18, len(l2_lines)
l2_dlg = [{"lines": l2_lines[2 * i:2 * i + 2]} for i in range(9)]
l2_key = "c b c a b b a b".split()
l2_items = [
    ("Z tego dialogu dowiadujemy się, że", ["klient jest zadowolony z projektu.", "projekt sypialni jest za drogi.", "projekt sypialni nie odpowiada klientowi."]),
    ("Z tego dialogu dowiadujemy się, że ona", ["planuje spotkanie z przyjaciółmi.", "jest w sobotę i niedzielę zajęta.", "jeszcze nie wie, czy może się spotkać."]),
    ("Z tego dialogu dowiadujemy się, że mężczyzna", ["dostał urlop.", "dostał podwyżkę.", "nie ma już pracy."]),
    ("Z tego dialogu dowiadujemy się, że mężczyzna", ["nie jest punktualny.", "zwykle jest punktualny.", "obiecuje poprawę."]),
    ("Z tego dialogu dowiadujemy się, że matka", ["uważa, że syn ma dobry pomysł.", "jeszcze nie zdecydowała, co zrobi.", "chce zajmować się psem."]),
    ("Z tego dialogu dowiadujemy się, że", ["mężczyzna sprzedaje drukarki.", "drukarka nie działa.", "kobieta pomaga mężczyźnie."]),
    ("Z tego dialogu dowiadujemy się, że on", ["szuka produktu.", "szuka swojej ładowarki.", "reklamuje produkt."]),
    ("Z tego dialogu dowiadujemy się, że", ["kobieta już miała imieniny.", "mężczyzna się pomylił.", "kobieta ma urodziny."]),
]
l2 = {
    "id": "l2", "number": "II", "type": "mc", "grading": "auto",
    "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać dialogów i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "8 x 1 p.", "pointsPerItem": 1, "maxPoints": 8, "plays": 2, "pdfPage": 4, "pdfPages": [4, 5],
    "audio": task_audio(SID, "II", ["l2.ex"] + [f"l2.{i}" for i in range(1, 9)]),
    "example": {"id": "l2.ex", "prompt": "Z tego dialogu dowiadujemy się, że ona",
                "options": OPT("zamawia herbatę.", "nie pije alkoholu.", "chce wino lub piwo."),
                "answer": "b", "shown": True, "transcript": l2_dlg[0]},   # PDF p.4: option b bold-underlined
    "items": [mc_item("l2", i + 1, p, o, l2_key[i], transcript=l2_dlg[i + 1]) for i, (p, o) in enumerate(l2_items)],
}

# ---- l3: interview MC (example: b, PDF p.5)
l3_tr = speaker_lines(transcript_block(SID, "III"), {"Dz": "Dziennikarka", "D": "Dyrektor"})
assert [x["sp"] for x in l3_tr] == ["Dziennikarka", "Dyrektor"] * 6, [x["sp"] for x in l3_tr]
l3_key = "b c a b c".split()
l3_items = [
    ("W Islandii można było zaobserwować,", ["jak zaoszczędzić pieniądze.", "jakie są minusy i plusy pracy przez 4 dni w tygodniu", "jak pracownicy będą odpoczywać w tygodniu."]),
    ("Pracodawcy obserwowali zachowanie", ["dyrektorów instytucji państwowych.", "studentów prywatnych uczelni.", "przedstawicieli różnych zawodów."]),
    ("Pracownicy", ["czuli się lepiej.", "czuli się zmęczeni.", "zarobili więcej."]),
    ("Osoby, które pracowały krócej,", ["nie miały ochoty pracować.", "miały lepsze rezultaty niż wcześniej.", "miały problem z organizacją czasu."]),
    ("Podczas krótszego tygodnia pracy", ["wynagrodzenie było niższe.", "przerwy na obiad były dłuższe.", "warunki finansowe nie zmieniły się."]),
]
l3 = {
    "id": "l3", "number": "III", "type": "mc", "grading": "auto",
    "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę wysłuchać wywiadu na temat krótszego tygodnia pracy i zaznaczyć właściwe odpowiedzi.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 5,
    "source": "Na podstawie: https://www.money.pl/gospodarka/czterodniowy-tydzien-pracy-to-sie-moze-udac-6658641225959968a.html",
    "audio": task_audio(SID, "III"),
    "transcript": {"lines": l3_tr},
    "example": {"id": "l3.ex", "prompt": "Dyrektor dwa lata temu",
                "options": OPT("zatrudnił nowych pracowników.", "zmienił system pracy.", "otworzył firmę."),
                "answer": "b", "shown": True},   # PDF p.5: option b bold-underlined
    "items": [mc_item("l3", i + 1, p, o, l3_key[i]) for i, (p, o) in enumerate(l3_items)],
}

# ---- l4: TAK/NIE (example TAK printed on PDF p.6)
l4_tr = speaker_lines(transcript_block(SID, "IV"), {"M": "Mężczyzna", "K": "Kobieta"})
for _x in l4_tr:   # wrapped source-URL tail ("…jak-sie-\nzmienial.bhtml") is not part of the speech
    _x["t"] = re.sub(r"\s*zmienial\.bhtml$", "", _x["t"])
assert [x["sp"] for x in l4_tr] == ["Mężczyzna", "Kobieta", "Mężczyzna"], [x["sp"] for x in l4_tr]
l4_stm = ["Mężczyzna przeczytał artykuł w gazecie na temat historii telefonu.",
          "Pierwszym nieoficjalnym twórcą telefonu był Amerykanin.",
          "Włoch skonstruował swoje urządzenie, żeby komunikować się z bliską osobą.",
          "Pierwszy telefon łączył ze sobą kilka domów.",
          "Rejestracja urządzenia była dla Włocha za droga."]
l4_key = "NIE NIE TAK NIE TAK".split()
l4 = {
    "id": "l4", "number": "IV", "type": "tf", "grading": "auto",
    "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę posłuchać rozmowy o historii telefonu i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 6,
    "source": "Na podstawie: https://www.euro.com.pl/artykuly/wszystkie/artykul-historia-telefonu-kto-i-kiedy-go-wynalazl-jak-sie-zmienial.bhtml",
    "audio": task_audio(SID, "IV"),
    "transcript": {"lines": l4_tr},
    "example": {"id": "l4.ex", "statement": "Ludzie uważają, że Aleksander Bell stworzył telefon.", "answer": "TAK", "shown": True},
    "items": [{"id": f"l4.{i+1}", "number": i + 1, "statement": s, "answer": l4_key[i]} for i, s in enumerate(l4_stm)],
}

# ---- l5: students -> housing (match table column I -> II, 5 x 1)
l5_block = transcript_block(SID, "V")
l5_entries, cur = [], None
for l in l5_block:
    if re.match(r"^\s*(Przykład:|\d+\.)\s", l):
        cur = [re.sub(r"^\s*(Przykład:|\d+\.)\s*", "", l).strip()]
        l5_entries.append(cur)
    elif cur is not None:
        cur.append(l.strip())
l5_lines = []
for (name, e) in zip(["Ania", "Piotr", "Magda", "Damian", "Ula", "Kamil"], l5_entries):
    sp, t = sp_tag(re.sub(r"\s+", " ", " ".join(e)))
    l5_lines.append({"sp": f"{name} ({sp})", "t": t})
assert len(l5_lines) == 6
l5_opts = {"A": "mieszka w akademiku.", "B": "mieszka z rodzicami.", "C": "ma własne mieszkanie.",
           "D": "wynajmuje mieszkanie z kolegą.", "E": "mieszka z bliskimi.", "F": "samodzielnie wynajmuje mieszkanie."}
l5_key = "A C D F E".split()
l5_names = ["Piotr", "Magda", "Damian", "Ula", "Kamil"]
l5 = {
    "id": "l5", "number": "V", "type": "match", "grading": "auto",
    "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
    "prompt": "Proszę posłuchać wypowiedzi studentów na temat miejsc, w których mieszkają oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "plays": 2, "pdfPage": 7,
    "source": "Na podstawie: https://www.bankier.pl/wiadomosc/Jak-mieszkaja-polscy-studenci-1973067.html http://zdrowystudent.pl/gdzie-mieszkac-na-studiach/",
    "audio": task_audio(SID, "V"),
    "transcript": {"lines": l5_lines},
    "options": [{"id": k, "text": v} for k, v in l5_opts.items()],
    "example": {"id": "l5.ex", "prompt": "Ania", "answer": "B", "shown": True},   # printed in the answer table
    "items": [{"id": f"l5.{i+1}", "number": i + 1, "prompt": n, "answer": l5_key[i]} for i, n in enumerate(l5_names)],
    "pdfNotes": ["Transcript speakers are unlabelled in transcript.pdf (Przykład, 1.-5., gender in brackets); the names are those of the booklet's column I in the same order."],
}
listening = {"id": "listening", "title": "Rozumienie ze słuchu", "maxPoints": 30, "timeMinutes": 30, "taskCount": 5,
             "pdfPages": [3, 7], "tasks": [l1, l2, l3, l4, l5]}

# =============================================================== READING
src_ = lambda s: "Na podstawie: " + s
r1_ex = {"id": "r1.ex",
         "passage": {"text": "W 2021 roku kobiety założyły co trzecią polską firmę usługową. Polki prowadziły aż 75% małych biznesów branży kosmetycznej. W dużych korporacjach tylko 26% pań to menedżerowie czy dyrektorzy, ale rok wcześniej było ich o kilka procent mniej.",
                     "source": src_("https://nysa.naszemiasto.pl/co-trzecia-firme-w-polsce-zalozyla-kobieta-startuje-xiii/ar/c3-8538905")},
         "prompt": "Z tego tekstu wynika, że w Polsce w 2021 roku kobiety",
         "options": OPT("prowadziły większość firm usługowych.", "były właścicielkami ponad połowy firm kosmetycznych.", "miały słabszą pozycję w dużych firmach niż rok temu."),
         "answer": "b", "shown": True}   # PDF p.9: option b bold-underlined
r1_data = [
    ("Mieszkańcy Krakowa już po raz dziesiąty sadzą rośliny przy największych ulicach. Wiosną będziemy mogli podziwiać pierwsze kompozycje kwiatów i krzewów, które zostały wybrane tak, aby były atrakcyjne o każdej porze roku.",
     src_("https://krakow.naszemiasto.pl/niemal-400-tys-nowych-kwiatow-w-krakowie-wiosna-miasto/ar/c1-8539389"),
     "Z tego tekstu wynika, że", ["jest to pierwsza akcja sadzenia kwiatów.", "kwiaty będzie można zobaczyć w parkach.", "rośliny będą wyglądały ładnie przez cały rok."], "c"),
    ("Jak szybko można jeździć samochodem po mieście? Od czerwca tego roku maksymalna prędkość to 50 km/h niezależnie od pory dnia. Wcześniej w nocy można było jechać autem do 60 km/h. Zgodnie z nowym prawem piesi nie mogą używać telefonów komórkowych na pasach.",
     src_("https://www.autobaza.pl/page/portal/news/uwaga-od-dzis-wchodza-w-zycie-nowe-przepisy-ruchu-drogowego/"),
     "Z tego tekstu wynika, że obecnie", ["maksymalna prędkość jazdy nocą to 60 km/h.", "limit prędkości dla samochodów nie zależy od pory dnia.", "w pobliżu pasów kierowcy nie mogą jechać szybko."], "b"),
    ("Młodzi artyści namalowali obraz, który przedstawia Kazimierza Górskiego oraz jego słynny cytat: „Piłka jest okrągła, a bramki są dwie”. Dzieło powstało w 100. rocznicę urodzin znanego Polaka. Znajduje się ono na ścianie bloku w Warszawie, gdzie przez wiele lat mieszkał legendarny polski trener.",
     src_("https://www.money.pl/galerie/artykul/najslynniejsi-polacy-w-usa,138,8,2210698.html"),
     "Z tego tekstu wynika, że Kazimierz Górski", ["urodził się sto lat przed powstaniem obrazu.", "był autorem książki o piłce nożnej.", "był popularnym polskim piłkarzem."], "a"),
    ("Małe mieszkanie to prawdziwy test dla projektanta wnętrz. Lustra są idealnym elementem dekoracji, bo dają wrażenie większej przestrzeni. W sklepach nie znajdziemy jednak wielu kształtów i rozmiarów luster, dlatego czasem trzeba przygotowywać je na zamówienie.",
     src_("https://ladnydom.pl/lustra-dekoracyjne-ktore-odmieniaja-wnetrza"),
     "Z tego tekstu wynika, że", ["łatwo zaprojektować wnętrza małych mieszkań.", "niektóre kształty luster trzeba wcześniej zamówić.", "w sklepach jest bardzo duży wybór luster."], "b"),
    ("Dzisiaj rano doszło do pożaru zabytkowego pałacu w Korczewie. W akcji ratunkowej brało udział trzydziestu strażaków. Ogień zajął cały dach budynku, dostał się też na pierwsze piętro. W pałacu byli pracownicy, którzy remontowali budynek, ale nie ma jeszcze informacji o rannych osobach.",
     "https://wiadomosci.radiozet.pl/Polska/Pozar-palacu-w-Korczewie.-Splonal-caly-dach-runal-strop",
     "Z tego tekstu wynika, że po pożarze", ["nie wiadomo, czy są ranne osoby.", "było rannych wielu strażaków.", "jest niewiele osób rannych."], "a"),
]
r1 = {
    "id": "r1", "number": "I", "type": "mc", "grading": "auto",
    "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 9, "pdfPages": [9, 10],
    "example": r1_ex,
    "items": [{"id": f"r1.{i+1}", "number": i + 1, "passage": {"text": t, "source": u}, "prompt": p, "options": OPT(*o), "answer": a}
              for i, (t, u, p, o, a) in enumerate(r1_data)],
    "pdfNotes": ["Item 3 source URL is printed with a trailing ' /' in the booklet (dropped); item 5 source is printed without the 'Na podstawie:' prefix (kept as printed)."],
}

# ---- r2: TAK/NIE on one text
r2_lines = between(test, r"II\. Proszę przeczytać tekst", r"Na podstawie: https://kobieta")
r2_lines = [l for l in after_points(r2_lines) if l.strip()]
assert r2_lines[0].strip() == "Połączyła ich miłość do zwierząt"
r2_text = paras_by_indent(r2_lines[1:])
assert len(r2_text) == 5, [t[:30] for t in r2_text]
r2_stm = ["Pierwsze małżeństwo pomogło Hannie uratować rodzinny dom.", "Bernard zabierał Hannę w podróże zagraniczne.",
          "Antoni to drugi mąż Hanny.", "Antoni był sąsiadem Hanny i jej kolegą z pracy.",
          "W 1971 roku Antoni i Hanna zostali małżeństwem.", "W programie państwa Gucwińskich występowały zwierzęta z ogrodów zoologicznych z całego świata."]
r2_key = "TAK NIE NIE TAK NIE NIE".split()
r2 = {
    "id": "r2", "number": "II", "type": "tf", "grading": "auto",
    "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
    "pointsFormula": "6 x 1 p.", "pointsPerItem": 1, "maxPoints": 6, "pdfPage": 11,
    "title": "Połączyła ich miłość do zwierząt",
    "source": "Na podstawie: https://kobieta.onet.pl/wiadomosci/nie-byl-jej-pierwszym-mezem-sekrety-hanny-gucwinskiej/dgn09f9",
    "passage": "\n\n".join(r2_text),
    "example": {"id": "r2.ex", "statement": "Małżeństwo przez ponad 30 lat prowadziło program o zwierzętach.", "answer": "TAK", "shown": True},
    "items": [{"id": f"r2.{i+1}", "number": i + 1, "statement": s, "answer": r2_key[i]} for i, s in enumerate(r2_stm)],
}

# ---- r3: fragments -> gaps (example B printed in text)
r3_lines = between(test, r"III\. Proszę przeczytać tekst i", r"Na podstawie: https://www.ican")
r3_lines = [l for l in after_points(r3_lines) if l.strip()]
assert r3_lines[0].strip() == "Spacer zamiast spotkania w biurze"
r3_text = "\n\n".join(paras_by_indent(r3_lines[1:]))
r3_text = re.sub(r"\[_{2}B_{2}\]PRZYKŁAD", "{{ex}}", r3_text)
r3_text = re.sub(r"\[_+\](\d)", r"{{\1}}", r3_text)
r3_frag = {"A": "pierwszych partnerów biznesowych poznawał", "B": "podczas którego nie siedzimy, a spacerujemy",
           "C": "jest bardzo szkodliwy dla naszego organizmu", "D": "ponieważ możemy łatwiej się skoncentrować",
           "E": "która pracuje w biurze", "F": "która jest już popularna w Stanach Zjednoczonych",
           "G": "oraz dbamy o zdrowie", "H": "pozytywny wpływ chodzenia na myślenie"}
r3_key = "G H F A D C E".split()
r3 = {
    "id": "r3", "number": "III", "type": "gapMatch", "grading": "auto",
    "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–H).",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 12,
    "title": "Spacer zamiast spotkania w biurze",
    "source": "Na podstawie: https://www.ican.pl/b/zamiast-siedziec-lepiej-chodzic-o-efektywnosci-spotkan-biznesowych/11wV02V8j",
    "passage": r3_text,
    "options": [{"id": k, "text": v} for k, v in r3_frag.items()],
    "example": {"gap": "ex", "answer": "B", "shown": True},    # printed in the text: [__B__]PRZYKŁAD
    "items": [{"id": f"r3.{i+1}", "number": i + 1, "gap": str(i + 1), "answer": a} for i, a in enumerate(r3_key)],
}

# ---- r4: titles -> paragraphs (example B printed)
r4_par = {
    "A": "Od razu wie, że ten produkt nie jest dla niego. Za kilka dni znowu odwiedzi sklep, żeby oddać towar.",
    "B": "Pyta o najmniejsze szczegóły produktu, jednak ostatecznie rzadko decyduje się na zakup.",
    "C": "Interesuje go tylko to, czy zakupiona rzecz jest najlepsza. Cena nie jest ważna – im wyższa, tym jest bardziej zadowolony.",
    "D": "Zadaje wiele pytań, ale na każde i tak zna odpowiedź. Przeczytał już prawie wszystko w internecie, a instrukcje obsługi umie na pamięć.",
    "E": "Najchętniej pojawia się w centrum handlowym podczas wyprzedaży. Według niego nie warto wchodzić do sklepu, który nie oferuje promocji.",
    "F": "Zwykle długo dyskutuje ze sprzedawcami, np. na temat ceny, która zawsze jest za wysoka, koloru, który jest nieładny czy niepraktycznych funkcji towaru.",
    "G": "Kupuje mało, wydaje niewiele. Chętnie chodzi do sklepów, gdzie można dostać darmowe próbki produktów, bo uwielbia je zbierać.",
    "H": "Spędza minimum 20 minut na powolnym chodzeniu po jednym sklepie, ale zazwyczaj wraca do domu z pustą torbą.",
}
r4_titles = ["Klient, który szuka wad", "Klient, który jest kolekcjonerem", "Klient, który uwielbia zwroty", "Klient, który wie wszystko",
             "Klient, który lubi spacerować", "Klient, który ma dużo pieniędzy", "Klient, który szuka rabatów"]
r4_key = "F G A D H C E".split()
r4 = {
    "id": "r4", "number": "IV", "type": "match", "grading": "auto",
    "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
    "pointsFormula": "7 x 1 p.", "pointsPerItem": 1, "maxPoints": 7, "pdfPage": 13,
    "source": "Na podstawie: https://zrabatowani.pl/blog/top-10-typow-klientow-czyli-jak-powinien-zachowac-sie-sprzedawca/",
    "heading": "Jakim typem klienta jesteś?",
    "options": [{"id": k, "text": v} for k, v in r4_par.items()],
    "example": {"id": "r4.ex", "prompt": "Klient, który nie umie się zdecydować", "answer": "B", "shown": True},
    "items": [{"id": f"r4.{i+1}", "number": i + 1, "prompt": t, "answer": r4_key[i]} for i, t in enumerate(r4_titles)],
}

# ---- r5: inline choice, 10 x 0.5 (example "spełniać": PDF p.14)
r5_lines = [l for l in after_points(between(test, r"V\. Proszę – zgodnie z przykładem – podkreślić najlepszą", r"Na podstawie: https://ochotnicy")) if l.strip()]
assert r5_lines[0].strip() == "Dołącz do Akademii Przyszłości!"
r5_raw = "\n\n".join(paras_by_indent(r5_lines[1:]))
r5_pass, r5_bl = cloze_choice(r5_raw)
set_answers(r5_bl, "Najpierw lepsze zaczyna lokalnymi umówić się adres odbywasz test otwarty programu".split() if False else
            ["Najpierw", "lepsze", "zaczyna", "lokalnymi", "umówić się", "adres", "odbywasz", "test", "otwarty", "programu"], {"ex": "spełniać"})
r5 = {
    "id": "r5", "number": "V", "type": "clozeChoice", "grading": "auto",
    "instruction": "V. Proszę – zgodnie z przykładem – podkreślić najlepszą spośród możliwości podanych w nawiasach.",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 14,
    "title": "Dołącz do Akademii Przyszłości!",
    "source": "Na podstawie: https://ochotnicy.waw.pl/profile/profil/3541 http://mammarzenie.org/katowice/",
    "passage": r5_pass, "blanks": r5_bl,
}
reading = {"id": "reading", "title": "Rozumienie tekstów pisanych", "maxPoints": 30, "timeMinutes": 40, "taskCount": 5,
           "pdfPages": [9, 14], "tasks": [r1, r2, r3, r4, r5]}

# =============================================================== GRAMMAR
# ---- g1: declension, 3 examples (PDF p.16: naukowcy / wielkiej / ich)
g1_raw = paras_by_blank(after_points(between(test, r"I\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych", r"Na podstawie: „Świat Wiedzy")))
g1_pass, g1_bl = cloze_choice("\n\n".join(g1_raw))
g1_key = "tą całej wysoka lądowych organizmy takie warunki wodzie nich braku".split()
set_answers(g1_bl, g1_key, {"ex1": "naukowcy", "ex2": "wielkiej", "ex3": "ich"})
g1 = {
    "id": "g1", "number": "I", "type": "clozeChoice", "grading": "auto",
    "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 16,
    "source": "Na podstawie: „Świat Wiedzy. Kosmos”, wydanie specjalne, nr 3/2021",
    "passage": g1_pass, "blanks": g1_bl,
}

# ---- g2: conjunctions from a box (example "i" printed in text)
g2_raw = join(after_points(between(test, r"II\. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki \(spójniki\)", r"Na podstawie: https://jarmark")))
g2_box = "a i ponieważ żeby jednak lub więc"
assert g2_raw.startswith(g2_box + " "), g2_raw[:50]
g2_raw = g2_raw[len(g2_box) + 1:]
g2_raw = re.sub(r"kupują i PRZYKŁAD", "kupują {{ex}}", g2_raw)
g2_raw = re.sub(r"\s*[….]{5,}\s*(\d)", r" {{\1}}", g2_raw)
g2 = {
    "id": "g2", "number": "II", "type": "clozeBox", "grading": "auto",
    "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 16,
    "source": "Na podstawie: https://jarmarkswdominika.pl/o-jarmarku.qbpage",
    "wordBox": g2_box.split(), "distractors": ["więc"],
    "passage": g2_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "i"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("ponieważ jednak a żeby lub".split())],
}

# ---- g3: comparison, 2 examples (najpiękniejszych / bardzo; PDF p.17)
g3_raw = " ".join(after_points(between(test, r"III\. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów", r"Na podstawie: https://www.nocowanie")))
g3_raw = re.sub(r"\s+", " ", g3_raw)
g3_pass, g3_bl = cloze_choice(g3_raw.strip())
set_answers(g3_bl, "lepszym największą najczęściej najstarszy więcej".split(), {"ex1": "najpiękniejszych", "ex2": "bardzo"})
g3 = {
    "id": "g3", "number": "III", "type": "clozeChoice", "grading": "auto",
    "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 17,
    "source": "Na podstawie: https://www.nocowanie.pl/top-10-miejsc-ktore-warto-zobaczyc-na-kaszubach.html",
    "passage": g3_pass, "blanks": g3_bl,
}

# ---- g4: verb forms, present & past; examples "odbył się" / "jest" printed bold-underlined in the text (PDF p.17)
g4_raw = join(after_points(between(test, r"IV\. Proszę – zgodnie z przykładami – uzupełnić tekst", r"Na podstawie: https://odkryjpomorze")))
g4_raw = g4_raw.replace("odbył się (odbyć się)PRZYKŁAD", "{{ex1}}").replace("jest (być)PRZYKŁAD", "{{ex2}}")
g4_given = {}


def _g4(m):
    g4_given[m[1]] = m[2]
    return "{{%s}}" % m[1]


g4_raw = re.sub(r"[….]{3,}\s*(\d+)\s*\(([^()]*)\)\s*\1", _g4, g4_raw)
g4_raw = re.sub(r"(?<=\.) (?=W zeszłym roku)", "\n\n", g4_raw)
g4_raw = re.sub(r"(?<=Polsce\.) (?=W wydarzeniu tym)", "\n\n", g4_raw)
assert sorted(g4_given, key=int) == [str(i) for i in range(1, 11)], g4_given
g4_key = "prezentują zwracają uczą bawią może obchodził przygotowali powiesiły zdobył przyjeżdżali".split()
g4 = {
    "id": "g4", "number": "IV", "type": "clozeForm", "grading": "auto+review",
    "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przeszły).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 17, "pdfPages": [17, 18],
    "source": "Na podstawie: https://odkryjpomorze.pl/pokaz_obiekt-1947-FETA_24_Festiwal_Teatrow_Plenerowych_i_Ulicznych_impreza_przeniesiona_na_2022_rok.html",
    "match": {"ignoreCase": True, "collapseSpace": True, "stripChars": ".,;:!?…"},
    "passage": g4_raw,
    "blanks": [{"id": "ex1", "example": True, "given": "odbyć się", "answer": "odbył się"},
               {"id": "ex2", "example": True, "given": "być", "answer": "jest"}] +
              [{"id": str(i + 1), "given": g4_given[str(i + 1)], "answer": g4_key[i]} for i in range(10)],
}

# ---- g5: question about the part of the sentence (underlined = the short answer line; PDF p.18)
g5_q = [
    ("Ojciec poszedł z synem na spacer.", "z synem", "……………… ojciec poszedł na spacer?", "Z synem.", "Z kim"),
    ("Mali chłopcy bawią się wesoło.", "Mali", "……………… chłopcy bawią się wesoło?", "Mali.", "Jacy"),
    ("Małgosi nie było dziś na lekcjach.", "Małgosi", "……………… nie było dziś na lekcjach?", "Małgosi.", "Kogo"),
    ("Staś poprosił Zosię o pomarańczę.", "o pomarańczę", "……………… Staś poprosił Zosię?", "O pomarańczę.", "O co"),
    ("To jest pióro Janka.", "Janka", "……………… jest to pióro?", "Janka", "Czyje"),
]
g5 = {
    "id": "g5", "number": "V", "type": "question", "grading": "auto+review",
    "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 18,
    "match": {"stripChars": "…?.!", "ignoreCase": True, "collapseSpace": True},
    "example": {"id": "g5.ex", "sentence": "Antonina pojechała wczoraj do Krakowa.", "underlined": "wczoraj",
                "stem": "Kiedy Antonina pojechała do Krakowa?", "shortAnswer": "Wczoraj.", "answer": "Kiedy", "shown": True},
    "items": [{"id": f"g5.{i+1}", "number": i + 1, "sentence": s, "underlined": u, "stem": st, "shortAnswer": sa, "answer": a, "accept": []}
              for i, (s, u, st, sa, a) in enumerate(g5_q)],
    "pdfNotes": ["Official key prints the question word with a trailing '?' (Z kim?, Jacy?); stored without it, match.stripChars ignores the decoration.",
                 "The worked example prints the complete question ('Kiedy Antonina pojechała do Krakowa?'), so its stem has no gap."],
}

# ---- g6: transformation; key = model sentences (underlined parts = transformations) + printed rubric strings
g6_items = [
    ("Jakiego koloru jest twój nowy dywan?", "ma", "Jaki kolor ma twój nowy dywan?",
     "2 transformacje (2 x 0,5)", [("2 transformacje", 1)]),
    ("Mama narzeka, że cena jabłek jest wysoka.", "na", "Mama narzeka na wysoką cenę jabłek.",
     "odpowiednio użyty przyimek 0,25 + 2 transformacje (2 x 0,25) + brak transformacji 0,25",
     [("odpowiednio użyty przyimek", 0.25), ("2 transformacje", 0.5), ("brak transformacji", 0.25)]),
    ("Zosia przygląda się małym pieskom.", "patrzy", "Zosia patrzy na małe pieski.",
     "odpowiedni przyimek 0,5 + 2 transformacje (2 x 0,25)", [("odpowiedni przyimek", 0.5), ("2 transformacje", 0.5)]),
    ("Jakub dał mamie kwiaty.", "dostała", "Mama dostała od Jakuba kwiaty.",
     "3 transformacje (3 x 0,25) + odpowiedni przyimek 0,25", [("3 transformacje", 0.75), ("odpowiedni przyimek", 0.25)]),
    ("Nie znam tej kobiety.", "kim", "Nie wiem, kim jest ta kobieta.",
     "2 odpowiednie czasowniki (2 x 0,25) + 2 transformacje (2 x 0,25)", [("2 odpowiednie czasowniki", 0.5), ("2 transformacje", 0.5)]),
]
g6 = {
    "id": "g6", "number": "VI", "type": "transform", "grading": "review",
    "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
    "pointsFormula": "5 x 1 p.", "pointsPerItem": 1, "maxPoints": 5, "pdfPage": 19,
    "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
    "example": {"id": "g6.ex", "source": "Marek w czasie wakacji jeździ nad morze.", "hint": "spędza", "answer": "Marek spędza wakacje nad morzem.", "shown": True},
    "items": [{"id": f"g6.{i+1}", "number": i + 1, "source": s, "hint": h, "answer": a, "rubric": r,
               "rubricParts": [{"what": w_, "points": p} for w_, p in parts]} for i, (s, h, a, r, parts) in enumerate(g6_items)],
}

# ---- g7: aspect & mood in a letter (examples spróbuj / Chcielibyście; PDF p.20)
g7_lines = after_points(between(test, r"VII\. Proszę – zgodnie z przykładami", r"^VIII\."))
g7_paras = paras_by_indent([l for l in g7_lines])
# first paragraph starts with the salutation "Kochana Basiu," (same indent as its body)
assert g7_paras[0].startswith("Kochana Basiu, (spróbuj"), g7_paras[0][:30]
g7_paras[0] = g7_paras[0].replace("Kochana Basiu, ", "Kochana Basiu,\n\n", 1)
assert g7_paras[-2] == "Pozdrawiam Cię serdecznie" and g7_paras[-1] == "Ania", g7_paras[-3:]
g7_paras = g7_paras[:-2] + ["Pozdrawiam Cię serdecznie\nAnia"]
g7_paras = [re.sub(r"\)\s+(\d+)", r")\1", t) for t in g7_paras]
g7_pass, g7_bl = cloze_choice("\n\n".join(g7_paras))
set_answers(g7_bl, "wybierzcie zgadnij pasował przylecielibyśmy wolałabym mogłabyś poszlibyśmy powie napisz zarezerwuj".split(),
            {"ex1": "spróbuj", "ex2": "Chcielibyście"})
g7 = {
    "id": "g7", "number": "VII", "type": "clozeChoice", "grading": "auto",
    "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
    "pointsFormula": "10 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 5, "pdfPage": 20,
    "passage": g7_pass, "blanks": g7_bl,
}

# ---- g8: prepositions from a box (example "w" printed in text)
_i8 = next(i for i, l in enumerate(test) if re.match(r"^VIII\.", l))
_e8 = next(i for i in range(_i8, len(test)) if "© Państwowa" in test[i])
g8_raw = join(after_points(test[_i8:_e8]))
g8_box = "w na z przez do pod dla"
assert g8_raw.startswith(g8_box + " "), g8_raw[:40]
g8_raw = g8_raw[len(g8_box) + 1:]
g8_raw = re.sub(r"\(35m2\) w PRZYKŁAD", "(35m²) {{ex}}", g8_raw)
g8_raw = re.sub(r"\s*[….]{5,}\s*(\d)", r" {{\1}}", g8_raw)
g8 = {
    "id": "g8", "number": "VIII", "type": "clozeBox", "grading": "auto",
    "instruction": "VIII. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (przyimki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
    "pointsFormula": "5 x 0,5 p.", "pointsPerItem": 0.5, "maxPoints": 2.5, "pdfPage": 21,
    "wordBox": g8_box.split(), "distractors": ["do"],
    "passage": g8_raw,
    "blanks": [{"id": "ex", "example": True, "answer": "w"}] + [{"id": str(i + 1), "answer": a} for i, a in enumerate("z dla na przez pod".split())],
}
grammar = {"id": "grammar", "title": "Poprawność gramatyczna", "maxPoints": 30, "timeMinutes": 45, "taskCount": 8,
           "pdfPages": [16, 21], "tasks": [g1, g2, g3, g4, g5, g6, g7, g8]}

# =============================================================== WRITING
W_SETS = [
    {"id": "I", "parts": [
        {"id": "a", "genre": "ogłoszenie", "wordTarget": 30, "prompt": "Chce Pani/Pan sprzedać używany telefon. Proszę napisać ogłoszenie, które zamieści Pani/Pan na polskiej stronie internetowej."},
        {"id": "b", "genre": "sprawozdanie", "wordTarget": 170, "prompt": "Razem z koleżankami i kolegami z kursu języka polskiego była Pani / był Pan na spotkaniu ze znaną osobą / na koncercie. Proszę napisać sprawozdanie (relację) do gazetki „Cześć! Co Słychać?”, którą wydaje szkoła językowa."}]},
    {"id": "II", "parts": [
        {"id": "a", "genre": "życzenia", "wordTarget": 30, "prompt": "Wyjechała Pani / Wyjechał Pan na kilka miesięcy za granicę. Starsza sąsiadka, obok której mieszka Pani/Pan w Polsce, ma urodziny. Proszę napisać do niej życzenia z tej okazji."},
        {"id": "b", "genre": "charakterystyka", "wordTarget": 170, "prompt": "„Zawsze będę o niej/nim pamiętać”. Proszę napisać charakterystykę ważnej dla Pani/Pana osoby."}]},
    {"id": "III", "parts": [
        {"id": "a", "genre": "zaproszenie", "wordTarget": 30, "prompt": "Dawno nie widziała Pani / nie widział Pan swoich polskich znajomych. Chce Pani/Pan zorganizować dla nich spotkanie. Proszę napisać zaproszenie."},
        {"id": "b", "genre": "opowiadanie", "wordTarget": 170, "prompt": "Proszę napisać opowiadanie, które zacznie się od zdania: „To były bardzo ciekawe wakacje”.", "startsWith": "To były bardzo ciekawe wakacje."}]},
]
w = writing_task(W_SETS, [23, 29])
writing = {"id": "writing", "title": "Pisanie", "maxPoints": 30, "timeMinutes": 75, "taskCount": 1, "pdfPages": [22, 29], "tasks": [w]}

# =============================================================== EXAM
exam = {
    "schemaVersion": 1, "id": SID,
    "meta": {"level": "B1", "labelPdf": "marzec 2022", "examDates": "26-27.03.2022",
             "sources": {"test": f"sources/{SID}/test.pdf", "transcript": f"sources/{SID}/transcript.pdf", "audio": f"sources/{SID}/audio.mp3"},
             "maxPoints": 120,
             "notes": ["Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
                       "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
                       "Listening V is a match table (persons/names in column I -> statements A-F in column II, 5 x 1 p.); reading V is inline choice.",
                       "Official typo kept: listening V transcript (Damian) lacks a full stop before 'Wolę'.",
                       "Audio segmentation is automatic (silencedetect) and not yet verified by ear."]},
    "audio": audio_meta(SID),
    "sections": [listening, reading, grammar, writing],
}

if __name__ == "__main__":
    print(emit(SID, exam))
