window.EXAMS = window.EXAMS || {};
window.EXAMS["2021-05"] = {
 "schemaVersion": 1,
 "id": "2021-05",
 "meta": {
  "level": "B1",
  "labelPdf": "marzec 2021",
  "examDates": "8-9.05.2021",
  "sources": {
   "test": "sources/2021-05/test.pdf",
   "transcript": "sources/2021-05/transcript.pdf",
   "audio": "sources/2021-05/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Discrepancy: directory/README date this session 8-9.05.2021 (id 2021-05), but both PDFs (test and transcript) are headed \"marzec 2021\"; labelPdf keeps the printed label.",
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear; 2021 sessions: only whole plays are offered (per-item times unreliable).",
   "Listening II = matching table (column I -> A-F), IV = MC on a reportage (5 items), V = picture matching: 10 texts <-> photos A-K (A = example, key row per photo).",
   "Reading III has fragments A-I (8 gaps + example, all used), IV has paragraphs A-G; reading V is a word-box cloze (10 answers + example word 'lata', no spare word).",
   "Grammar II box lists 'i' twice (one is the example, the other is the spare word); grammar VIII is a choose-and-underline task (clozeChoice) rather than a word box.",
   "Listening V options: texts 1-10 plus a 'PRZYKŁAD' option so that the example (photo A) has a valid answer id."
  ]
 },
 "audio": {
  "src": "sources/2021-05/audio.mp3",
  "duration": 1689.8,
  "intro": [
   0,
   47.2
  ],
  "readingTime": [
   47.2,
   107.7
  ],
  "tail": [
   1626.8,
   1689.8
  ],
  "segmentation": {
   "method": "silencedetect -35dB 3s; see docs/tools/audio_segments.py",
   "verified": false
  }
 },
 "sections": [
  {
   "id": "listening",
   "title": "Rozumienie ze słuchu",
   "maxPoints": 30,
   "timeMinutes": 30,
   "taskCount": 5,
   "pdfPages": [
    3,
    7
   ],
   "tasks": [
    {
     "id": "l1",
     "number": "I",
     "type": "mc",
     "grading": "auto",
     "instruction": "I. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone tylko jeden raz.",
     "prompt": "Proszę zaznaczyć właściwe odpowiedzi.",
     "pointsFormula": "14 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 7,
     "plays": 1,
     "pdfPage": 3,
     "audio": {
      "announce": [
       107.7,
       123.8
      ],
      "plays": [
       {
        "start": 134.1,
        "end": 327.8
       }
      ],
      "source": "auto-silencedetect",
      "verified": false
     },
     "example": {
      "id": "l1.ex",
      "prompt": "Ta wypowiedź jest typowa",
      "options": [
       {
        "id": "a",
        "text": "w restauracji."
       },
       {
        "id": "b",
        "text": "na stacji benzynowej."
       },
       {
        "id": "c",
        "text": "u fryzjera."
       }
      ],
      "answer": "b",
      "shown": true,
      "transcript": {
       "sp": "M",
       "t": "Do pełna proszę."
      }
     },
     "items": [
      {
       "id": "l1.1",
       "number": 1,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "współczucie."
        },
        {
         "id": "b",
         "text": "strach."
        },
        {
         "id": "c",
         "text": "złość."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Basiu, przykro mi z powodu twojego brata."
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "u fotografa."
        },
        {
         "id": "b",
         "text": "u kosmetyczki."
        },
        {
         "id": "c",
         "text": "u fryzjera."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Tylko bez grzywki, proszę."
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź to pytanie",
       "options": [
        {
         "id": "a",
         "text": "o miejsce."
        },
        {
         "id": "b",
         "text": "o czas."
        },
        {
         "id": "c",
         "text": "o drogę."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Przepraszam, w której sali będzie wykład?"
       }
      },
      {
       "id": "l1.4",
       "number": 4,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "gratulacje."
        },
        {
         "id": "b",
         "text": "komplement."
        },
        {
         "id": "c",
         "text": "krytykę."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Do twarzy ci w tej sukience!"
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w autobusie."
        },
        {
         "id": "b",
         "text": "w pociągu."
        },
        {
         "id": "c",
         "text": "w taksówce."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Na ulicę Wileńską proszę, wysiądę przy przystanku."
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "zakaz."
        },
        {
         "id": "b",
         "text": "prośba."
        },
        {
         "id": "c",
         "text": "sugestia."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Nie wolno się tu zatrzymywać!"
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "na dworcu kolejowym."
        },
        {
         "id": "b",
         "text": "na dworcu autobusowym."
        },
        {
         "id": "c",
         "text": "w kasie teatru."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Zostały tylko miejsca w wagonie bez przedziałów."
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "życzenia."
        },
        {
         "id": "b",
         "text": "pozdrowienia."
        },
        {
         "id": "c",
         "text": "powitanie."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Cześć! Sto lat się nie widzieliśmy!"
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w kawiarni."
        },
        {
         "id": "b",
         "text": "w bibliotece."
        },
        {
         "id": "c",
         "text": "w księgarni."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Po miesiącu proszę zwrócić książkę albo przedłużyć termin telefonicznie."
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "pewność."
        },
        {
         "id": "b",
         "text": "przypuszczenie."
        },
        {
         "id": "c",
         "text": "konieczność."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Wydaje mi się, że Magda studiowała ekonomię…"
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "toast."
        },
        {
         "id": "b",
         "text": "życzenia."
        },
        {
         "id": "c",
         "text": "radę."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Za was i za waszą nową rodzinę!"
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w bibliotece."
        },
        {
         "id": "b",
         "text": "w sklepie."
        },
        {
         "id": "c",
         "text": "w banku."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Chciałbym przelać tę kwotę na inne konto."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "przypuszczenie."
        },
        {
         "id": "b",
         "text": "prośbę."
        },
        {
         "id": "c",
         "text": "radę."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Mógłbyś to powtórzyć jeszcze raz, ale wolniej i wyraźniej?"
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "przed egzaminem."
        },
        {
         "id": "b",
         "text": "przed wizytą u fryzjera."
        },
        {
         "id": "c",
         "text": "przed imprezą urodzinową."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Baw się dobrze!"
       }
      }
     ]
    },
    {
     "id": "l2",
     "number": "II",
     "type": "match",
     "grading": "auto",
     "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać nagrania na temat historii dyscyplin sportowych oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 4,
     "source": "Na podstawie: https://wpolityce.pl/sport/189566-pasjonujaca-historia-dyscyplin-sportowych-warto-zrozumiec-ich-idee",
     "audio": {
      "announce": [
       343.2,
       359.1
      ],
      "plays": [
       {
        "start": 374.8,
        "end": 473.8
       },
       {
        "start": 511.5,
        "end": 610.5
       }
      ],
      "pauseBetweenPlays": 37.7,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "text": "Mało kto wie, że najstarszą grą sportową na świecie jest ulama, która powstała w Meksyku i jest tam popularna do dziś. W starożytności była związana z rytuałami religijnymi, dlatego boiska do tej gry znajdowały się blisko świątyń. Z kolei uwielbiana w Europie piłka nożna pochodzi z Chin. Jeden z tamtejszych władców zdecydował, że gra będzie częścią treningu chińskiej armii. Grano w nią też podczas obchodów urodzin chińskiego cesarza. W średniowiecznej Europie powstał tenis. Początkowo piłeczkę uderzano dłonią, z czasem zaczęto wkładać skórzane rękawiczki. Pierwsze piłki były z drewna, a pierwsze rakiety powstały dopiero w XVI wieku. Zapomnianego dziś krykieta wymyśliły wiejskie dzieci, ale już wkrótce zainteresowali się nim królewscy synowie. Ostatecznie gra stała się narodowym sportem Anglików. Hokej pochodzi z Kanady. Pierwszymi krążkami hokejowymi były ziemniaki lub kawałki węgla. Potem zawodnicy zaczęli używać drewnianych krążków. Gumowe pojawiły się dopiero w XIX wieku. Z kolei koszykówka powstała w Stanach Zjednoczonych, gdzie pewien nauczyciel opracował dla swoich uczniów nową grę zespołową, której uczestnicy musieli dużo biegać i skakać."
     },
     "options": [
      {
       "id": "A",
       "text": "Ta gra powstała z myślą o młodzieży szkolnej."
      },
      {
       "id": "B",
       "text": "Amatorzy tej gry używali warzyw lub drewna."
      },
      {
       "id": "C",
       "text": "Gra, która miała charakter religijny."
      },
      {
       "id": "D",
       "text": "W tę grę grali chińscy żołnierze."
      },
      {
       "id": "E",
       "text": "Gra, która miała swój początek na wsi."
      },
      {
       "id": "F",
       "text": "Europejska gra drewnianą piłką."
      }
     ],
     "example": {
      "id": "l2.ex",
      "prompt": "Ulama",
      "answer": "C",
      "shown": true
     },
     "items": [
      {
       "id": "l2.1",
       "number": 1,
       "prompt": "Piłka nożna",
       "answer": "D"
      },
      {
       "id": "l2.2",
       "number": 2,
       "prompt": "Tenis",
       "answer": "F"
      },
      {
       "id": "l2.3",
       "number": 3,
       "prompt": "Krykiet",
       "answer": "E"
      },
      {
       "id": "l2.4",
       "number": 4,
       "prompt": "Hokej",
       "answer": "B"
      },
      {
       "id": "l2.5",
       "number": 5,
       "prompt": "Koszykówka",
       "answer": "A"
      }
     ]
    },
    {
     "id": "l3",
     "number": "III",
     "type": "tf",
     "grading": "auto",
     "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać wywiadu o tym, kto, co i gdzie lubi jeść. Proszę zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "8 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 8,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: https://www.polityka.pl/tygodnikpolityka/spoleczenstwo/1626615,1,co-twoje-sniadanie-mowi-o-tobie-socjolog-odpowiada.",
     "audio": {
      "announce": [
       620.9,
       636.5
      ],
      "plays": [
       {
        "start": 646.8,
        "end": 754.9
       },
       {
        "start": 802.6,
        "end": 910.8
       }
      ],
      "pauseBetweenPlays": 47.7,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Dziennikarka",
        "t": "Gdzie najczęściej jedzą Polacy?"
       },
       {
        "sp": "Ekspertka",
        "t": "Zwykle w domu. Jednak może nas zaskoczyć fakt, że najrzadziej w domu jedzą śniadanie – spieszą się do pracy."
       },
       {
        "sp": "Dziennikarka",
        "t": "Mimo popularności różnego rodzaju restauracji nadal jemy w domu?"
       },
       {
        "sp": "Ekspertka",
        "t": "Poza domem najczęściej jada inteligencja. Styl jedzenia zależy od wykonywanego zawodu, od rodziny, z jakiej pochodzimy."
       },
       {
        "sp": "Dziennikarka",
        "t": "Wakacje spędzamy za granicą, tam jemy regionalne potrawy."
       },
       {
        "sp": "Ekspertka",
        "t": "To prawda. Zagraniczne wakacje stały się popularne, a próbowanie regionalnych potraw jest jedną z wakacyjnych atrakcji."
       },
       {
        "sp": "Dziennikarka",
        "t": "Co jeszcze zwiększa naszą otwartość na nowe smaki?"
       },
       {
        "sp": "Ekspertka",
        "t": "Potrawy obecne w programach telewizyjnych czy czasopismach pokazują, że nasze menu można rozszerzyć o dania innych narodów."
       },
       {
        "sp": "Dziennikarka",
        "t": "Pomimo to jesteśmy tradycyjni."
       },
       {
        "sp": "Ekspertka",
        "t": "Nie myślimy o tradycji. Po prostu jemy to, co znamy od dziecka."
       },
       {
        "sp": "Dziennikarka",
        "t": "Czy kobiety i mężczyźni różnią się stylem konsumpcji?"
       },
       {
        "sp": "Ekspertka",
        "t": "Kobiety są bardziej prozdrowotne, dbają o organiczne produkty, z których przyrządzają potrawy. Ale jednocześnie rośnie odsetek mężczyzn, którzy przygotowują posiłki, czytają książki o tematyce kulinarnej."
       },
       {
        "sp": "Dziennikarka",
        "t": "Czy wiek ma związek z upodobaniami kulinarnymi?"
       },
       {
        "sp": "Ekspertka",
        "t": "O tak! Młodzież jest bardziej innowacyjna i otwarta na nowe potrawy."
       },
       {
        "sp": "Dziennikarka",
        "t": "Zachodnie wzorce stają się naszą codziennością. Czy będą miały wpływ na nasze jedzenie?"
       },
       {
        "sp": "Ekspertka",
        "t": "Zaczynamy odchodzić od rodzinnych spotkań przy stole. Coraz częściej jemy poza domem, a czasem nawet sami."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "statement": "Polacy najczęściej jedzą posiłki poza domem.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "statement": "Większość Polaków je śniadanie przed wyjściem do pracy.",
       "answer": "NIE"
      },
      {
       "id": "l3.2",
       "number": 2,
       "statement": "Pochodzenie ma wpływ na to, co i gdzie jemy.",
       "answer": "TAK"
      },
      {
       "id": "l3.3",
       "number": 3,
       "statement": "W czasie pobytu za granicą unikamy dań kuchni regionalnej.",
       "answer": "NIE"
      },
      {
       "id": "l3.4",
       "number": 4,
       "statement": "Telewizja inspiruje nas do przygotowywania egzotycznych dań.",
       "answer": "TAK"
      },
      {
       "id": "l3.5",
       "number": 5,
       "statement": "Dla kobiet ważne jest, by potrawy były zdrowe.",
       "answer": "TAK"
      },
      {
       "id": "l3.6",
       "number": 6,
       "statement": "Mężczyźni coraz częściej interesują się kuchnią.",
       "answer": "TAK"
      },
      {
       "id": "l3.7",
       "number": 7,
       "statement": "Młodzi ludzie najchętniej wybierają dania, które znają z domu.",
       "answer": "NIE"
      },
      {
       "id": "l3.8",
       "number": 8,
       "statement": "Polacy nie zmieniają tradycyjnego stylu jedzenia.",
       "answer": "NIE"
      }
     ]
    },
    {
     "id": "l4",
     "number": "IV",
     "type": "mc",
     "grading": "auto",
     "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę posłuchać reportażu na temat morsowania, czyli wchodzenia do zimnej wody podczas niskich temperatur i zaznaczyć właściwe odpowiedzi.\n\nMORSY to osoby, które kąpią się zimą w morzu, rzece lub jeziorze.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://www.youtube.com/watch?v=L6A8Ib2lBjg",
     "audio": {
      "announce": [
       924.3,
       940.1
      ],
      "plays": [
       {
        "start": 950.3,
        "end": 1046.7
       },
       {
        "start": 1092.6,
        "end": 1188.9
       }
      ],
      "pauseBetweenPlays": 45.9,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Dziennikarka",
        "t": "Sezon na morsowanie zaczyna się w listopadzie, kiedy podczas Narodowego Święta Niepodległości ludzie ubrani w biało-czerwone stroje kąpią się w jeziorach, rzekach lub w morzu. Wśród nich jest pan Adam, który opowie nam o swojej przygodzie z morsowaniem. - Kto może zostać morsem oraz o czym należy pamiętać przed kąpielą w zimnej wodzie?"
       },
       {
        "sp": "Adam",
        "t": "Zostać morsem może prawie każdy, ale zanim wejdziemy do zimnej wody, sprawdźmy, czy na pewno mamy zdrowe nerki i płuca. Co ciekawe, morsować można nawet po ataku serca, oczywiście po konsultacji lekarskiej."
       },
       {
        "sp": "Dziennikarka",
        "t": "Kiedy zaczęła się pana przygoda z morsowaniem?"
       },
       {
        "sp": "Adam",
        "t": "Dwa lata temu zobaczyłem w internecie zdjęcie mojego wujka, jak morsował. Pomyślałem: „Super, ja też chcę” i tydzień później wchodziłem do lodowatej wody po raz pierwszy w życiu! Na niską temperaturę byłem przygotowany. Zaskoczyła mnie trochę grubość lodu, ale bardziej to, że ten cienki lód jest ostry jak nóż."
       },
       {
        "sp": "Dziennikarka",
        "t": "A jak pan wspomina pierwsze morsowanie?"
       },
       {
        "sp": "Adam",
        "t": "Na szczęście koleżanka zrobiła mi kilka zdjęć, bo inaczej niewiele bym pamiętał. Ludzie, z którymi morsowałem, byli mili, atmosfera – świetna, ale bolały mnie uszy. Nie byłem pewien, czy po tym doświadczeniu wejdę jeszcze raz do morza zimą."
       }
      ]
     },
     "example": {
      "id": "l4.ex",
      "prompt": "Sezon na morsowanie zaczyna się",
      "options": [
       {
        "id": "a",
        "text": "nad morzem."
       },
       {
        "id": "b",
        "text": "w święto narodowe."
       },
       {
        "id": "c",
        "text": "późną wiosną."
       }
      ],
      "answer": "b",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "prompt": "Kąpać się w zimnej wodzie mogą osoby, które",
       "options": [
        {
         "id": "a",
         "text": "miały atak serca."
        },
        {
         "id": "b",
         "text": "nigdy nie chorują."
        },
        {
         "id": "c",
         "text": "mają problem z płucami."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l4.2",
       "number": 2,
       "prompt": "Adam zaczął morsować, bo",
       "options": [
        {
         "id": "a",
         "text": "to ostatnio modny sposób na zdrowie."
        },
        {
         "id": "b",
         "text": "spodobała mu się fotografia wujka."
        },
        {
         "id": "c",
         "text": "dostał zaproszenie od wujka."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l4.3",
       "number": 3,
       "prompt": "Adam był najbardziej zaskoczony, że zimą",
       "options": [
        {
         "id": "a",
         "text": "cienkim lodem można się skaleczyć."
        },
        {
         "id": "b",
         "text": "woda w morzu jest dość ciepła."
        },
        {
         "id": "c",
         "text": "lód jest bardzo gruby."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l4.4",
       "number": 4,
       "prompt": "Adam pierwszy raz morsował",
       "options": [
        {
         "id": "a",
         "text": "sam."
        },
        {
         "id": "b",
         "text": "w grupie."
        },
        {
         "id": "c",
         "text": "z jedną znajomą."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l4.5",
       "number": 5,
       "prompt": "Adam podczas pierwszego morsowania",
       "options": [
        {
         "id": "a",
         "text": "zdecydował, że to powtórzy."
        },
        {
         "id": "b",
         "text": "zrobił dużo zdjęć."
        },
        {
         "id": "c",
         "text": "odczuwał ból."
        }
       ],
       "answer": "c"
      }
     ]
    },
    {
     "id": "l5",
     "number": "V",
     "type": "match",
     "grading": "auto",
     "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać tekstów o przyczynach wyboru zawodu lub zajęcia i dopasować numer tekstu do ilustracji.",
     "pointsFormula": "10 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 7,
     "source": "Źródło zdjęć: https://pixabay.com/pl/photos",
     "audio": {
      "announce": [
       1199.5,
       1215.4
      ],
      "plays": [
       {
        "start": 1225.6,
        "end": 1407.3
       },
       {
        "start": 1428.1,
        "end": 1609.8
       }
      ],
      "pauseBetweenPlays": 20.8,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "N",
        "t": "Zapytaliśmy grupę ludzi, czym kierowali się oni przy wyborze zawodu."
       },
       {
        "sp": "Przykład (M)",
        "t": "Zawód, który wybrałem, daje szansę na pewną pracę. Zapotrzebowanie na usługi fryzjerskie nigdy nie zniknie."
       },
       {
        "sp": "Tekst 1 (M)",
        "t": "Interesowała mnie anatomia, więc wybrałem rehabilitację w Akademii Medycznej i teraz pomagam ludziom wracać do zdrowia."
       },
       {
        "sp": "Tekst 2 (M)",
        "t": "Programiści bardzo dobrze zarabiają. Stąd mój wybór."
       },
       {
        "sp": "Tekst 3 (K)",
        "t": "Kiedyś chciałam być nauczycielką, ale mój ojciec jest ogrodnikiem. Zaczęłam mu pomagać w sprzedaży i dziś robię piękne bukiety."
       },
       {
        "sp": "Tekst 4 (M)",
        "t": "Zawsze interesowałem się motoryzacją i szybko zrobiłem prawo jazdy. Dziś jeżdżę po całej Europie."
       },
       {
        "sp": "Tekst 5 (M)",
        "t": "Nie boję się ciężkiej pracy. Lubię kontakt z naturą. Niechętnie jeżdżę do miasta. Pracuję na wsi jak mój ojciec."
       },
       {
        "sp": "Tekst 6 (K)",
        "t": "Nie było mnie stać na piękne ubrania, więc zaczęłam sama je projektować i szyć."
       },
       {
        "sp": "Tekst 7 (M)",
        "t": "Lubię rysować, posiadam też zmysł artystyczny. Wykorzystuję te talenty, by projektować budynki i upiększać otoczenie."
       },
       {
        "sp": "Tekst 8 (M)",
        "t": "Uwielbiam robić zdjęcia dzieciom, naturze, zwierzętom. Pasja stała się moim zawodem."
       },
       {
        "sp": "Tekst 9 (K)",
        "t": "W dzieciństwie uczyłam lalki i młodsze rodzeństwo. Dziś praca w przedszkolu jest moją pasją."
       },
       {
        "sp": "Tekst 10 (K)",
        "t": "Żeby zarobić na studia prawnicze, zdecydowałam się na pracę w gastronomii."
       }
      ]
     },
     "options": [
      {
       "id": "1",
       "text": "1"
      },
      {
       "id": "2",
       "text": "2"
      },
      {
       "id": "3",
       "text": "3"
      },
      {
       "id": "4",
       "text": "4"
      },
      {
       "id": "5",
       "text": "5"
      },
      {
       "id": "6",
       "text": "6"
      },
      {
       "id": "7",
       "text": "7"
      },
      {
       "id": "8",
       "text": "8"
      },
      {
       "id": "9",
       "text": "9"
      },
      {
       "id": "10",
       "text": "10"
      },
      {
       "id": "PRZYKŁAD",
       "text": "PRZYKŁAD"
      }
     ],
     "example": {
      "id": "l5.ex",
      "label": "A",
      "image": "data/img/2021-05/l5-A.jpg",
      "answer": "PRZYKŁAD",
      "shown": true,
      "transcript": {
       "sp": "M",
       "t": "Zawód, który wybrałem, daje szansę na pewną pracę. Zapotrzebowanie na usługi fryzjerskie nigdy nie zniknie."
      }
     },
     "items": [
      {
       "id": "l5.1",
       "number": 1,
       "label": "B",
       "image": "data/img/2021-05/l5-B.jpg",
       "answer": "6"
      },
      {
       "id": "l5.2",
       "number": 2,
       "label": "C",
       "image": "data/img/2021-05/l5-C.jpg",
       "answer": "8"
      },
      {
       "id": "l5.3",
       "number": 3,
       "label": "D",
       "image": "data/img/2021-05/l5-D.jpg",
       "answer": "7"
      },
      {
       "id": "l5.4",
       "number": 4,
       "label": "E",
       "image": "data/img/2021-05/l5-E.jpg",
       "answer": "3"
      },
      {
       "id": "l5.5",
       "number": 5,
       "label": "F",
       "image": "data/img/2021-05/l5-F.jpg",
       "answer": "10"
      },
      {
       "id": "l5.6",
       "number": 6,
       "label": "G",
       "image": "data/img/2021-05/l5-G.jpg",
       "answer": "4"
      },
      {
       "id": "l5.7",
       "number": 7,
       "label": "H",
       "image": "data/img/2021-05/l5-H.jpg",
       "answer": "9"
      },
      {
       "id": "l5.8",
       "number": 8,
       "label": "I",
       "image": "data/img/2021-05/l5-I.jpg",
       "answer": "2"
      },
      {
       "id": "l5.9",
       "number": 9,
       "label": "J",
       "image": "data/img/2021-05/l5-J.jpg",
       "answer": "1"
      },
      {
       "id": "l5.10",
       "number": 10,
       "label": "K",
       "image": "data/img/2021-05/l5-K.jpg",
       "answer": "5"
      }
     ],
     "images": [
      {
       "id": "A",
       "src": "data/img/2021-05/l5-A.jpg",
       "alt": "zdjęcie A"
      },
      {
       "id": "B",
       "src": "data/img/2021-05/l5-B.jpg",
       "alt": "zdjęcie B"
      },
      {
       "id": "C",
       "src": "data/img/2021-05/l5-C.jpg",
       "alt": "zdjęcie C"
      },
      {
       "id": "D",
       "src": "data/img/2021-05/l5-D.jpg",
       "alt": "zdjęcie D"
      },
      {
       "id": "E",
       "src": "data/img/2021-05/l5-E.jpg",
       "alt": "zdjęcie E"
      },
      {
       "id": "F",
       "src": "data/img/2021-05/l5-F.jpg",
       "alt": "zdjęcie F"
      },
      {
       "id": "G",
       "src": "data/img/2021-05/l5-G.jpg",
       "alt": "zdjęcie G"
      },
      {
       "id": "H",
       "src": "data/img/2021-05/l5-H.jpg",
       "alt": "zdjęcie H"
      },
      {
       "id": "I",
       "src": "data/img/2021-05/l5-I.jpg",
       "alt": "zdjęcie I"
      },
      {
       "id": "J",
       "src": "data/img/2021-05/l5-J.jpg",
       "alt": "zdjęcie J"
      },
      {
       "id": "K",
       "src": "data/img/2021-05/l5-K.jpg",
       "alt": "zdjęcie K"
      }
     ],
     "pdfNotes": [
      "Photos A-K as on PDF p.7 (A = example); answer table is row per picture B-K -> text number (official key)."
     ]
    }
   ]
  },
  {
   "id": "reading",
   "title": "Rozumienie tekstów pisanych",
   "maxPoints": 30,
   "timeMinutes": 40,
   "taskCount": 5,
   "pdfPages": [
    9,
    14
   ],
   "tasks": [
    {
     "id": "r1",
     "number": "I",
     "type": "mc",
     "grading": "auto",
     "instruction": "I. Proszę przeczytać fragmenty tekstów i – zgodnie z przykładem – zaznaczyć właściwą odpowiedź.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "pdfPage": 9,
     "pdfPages": [
      9,
      10
     ],
     "example": {
      "id": "r1.ex",
      "passage": {
       "text": "Uwaga! Informujemy, że rejestracja internetowa na kurs jogi zakończyła się 31 sierpnia. Wszystkie osoby, które nie mogły zarejestrować się w systemie, prosimy o kontakt mailowy lub osobisty do 10 września. Po tym terminie zamykamy listę uczestników.",
       "source": "Na podstawie: https://ttc.sivananda.eu/pl/kurs-dla-nauczycieli-jogi-polska/rejestracja-online/"
      },
      "prompt": "Z tego tekstu wynika, że",
      "options": [
       {
        "id": "a",
        "text": "zajęcia z jogi zaczną się we wrześniu."
       },
       {
        "id": "b",
        "text": "na zajęcia nie można zapisać się po 10 września."
       },
       {
        "id": "c",
        "text": "rejestracja na zajęcia zacznie się 10 września."
       }
      ],
      "answer": "b",
      "shown": true
     },
     "items": [
      {
       "id": "r1.1",
       "number": 1,
       "passage": {
        "text": "Pierwsza na świecie zupa pojawiła się na długo przed wynalezieniem garnka. Ludzie gotowali ją w ziemi, gdzie kładli skóry zwierząt, mięso, a następnie polewali to wszystko gorącą wodą. Żeby zupa była ciepła, dodawali do niej kamienie, które wcześniej ogrzewali w ogniu.",
        "source": "Na podstawie: https://wiadomosci.onet.pl/kiosk/postep-w-garnku/01j80"
       },
       "prompt": "Z tego tekstu wynika, że ludzie",
       "options": [
        {
         "id": "a",
         "text": "dobrze przemyśleli konstrukcję garnka."
        },
        {
         "id": "b",
         "text": "wymyślili garnek później niż zupę."
        },
        {
         "id": "c",
         "text": "pierwsze zupy gotowali na ogniu."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "Światowe media chwalą polską nastolatkę, która zmienia liście w dzieła sztuki. O Joannie zrobiło się głośno w ubiegłym roku, kiedy zorganizowała autorską wystawę swoich obrazów. W tym roku prace artystki można kupić w jej sklepie internetowym.",
        "source": "Na podstawie: http://metro.gazeta.pl/metro/7,50144,20762672,swiatowe-media-chwala-polska-nastolatke-ktorazamienia-liscie.html"
       },
       "prompt": "Z tego tekstu wynika, że Joanna",
       "options": [
        {
         "id": "a",
         "text": "nie ma jeszcze 20 lat."
        },
        {
         "id": "b",
         "text": "tworzy z liści wspaniałe bukiety."
        },
        {
         "id": "c",
         "text": "w zeszłym roku otworzyła sklep."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Dzięki aplikacji HauHau właściciele psów mogą się dowiedzieć, kto w danym momencie spaceruje ze swoim zwierzęciem lub poinformować, że sami wychodzą do parku, a następnie umówić się na spotkanie. Część pieniędzy ze sprzedaży aplikacji przeznaczono na pomoc bezdomnym zwierzętom.",
        "source": "Na podstawie: https://panwybierak.pl/blog/najciekawsze-aplikacje-internetowe-dla-wlascicieli-psow"
       },
       "prompt": "Z tego tekstu wynika, że aplikacja HauHau pomaga",
       "options": [
        {
         "id": "a",
         "text": "nawiązywać kontakty z innymi opiekunami psów."
        },
        {
         "id": "b",
         "text": "znaleźć dom dla bezdomnych zwierząt."
        },
        {
         "id": "c",
         "text": "szukać psów, które zgubiły się podczas spacerów."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Tradycyjne lalki japońskie wyglądają jak zwykłe zabawki, ale nimi nie są. Żeby nauczyć się sztuki tworzenia takich lalek, trzeba czasem nawet 10 lat. Artysta sam decyduje o wszystkim – najpierw wybiera drewno, a na końcu maluje gotową figurkę. Zwyczaj robienia lalek przechodzi z ojca na syna.",
        "source": "Na podstawie: https://www.zpap.pl/zpap/index.php?option=com_content&view=article&id=1891:zaproszenie-na-otwarcie-wystawy-lalki-japoskie-magia-obyczaje-legendy&catid=41:wystawy&Itemid=112&lang=en"
       },
       "prompt": "Ten tekst informuje o tym, że",
       "options": [
        {
         "id": "a",
         "text": "w Japonii produkuje się najlepsze lalki."
        },
        {
         "id": "b",
         "text": "zrobienie jednej lalki zajmuje 10 lat."
        },
        {
         "id": "c",
         "text": "robienie lalek to rodzinna tradycja."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "Jesteś studentem i chciałbyś zacząć zarabiać pieniądze, ale nie wyobrażasz sobie pracy w sklepie czy restauracji? Obserwujesz sukcesy ludzi, którzy swoją aktywność w internecie zmienili w biznes? Masz wielką pasję, którą chciałbyś się podzielić? Jeśli tak – to szkolenie jest dla ciebie!"
       },
       "prompt": "Ten tekst informuje o szkoleniu dla studentów, którzy",
       "options": [
        {
         "id": "a",
         "text": "pracują obecnie jako sprzedawcy lub kelnerzy."
        },
        {
         "id": "b",
         "text": "chcą zarabiać na pokazywaniu swoich zainteresowań w internecie."
        },
        {
         "id": "c",
         "text": "odnieśli już sukces dzięki reklamie w internecie."
        }
       ],
       "answer": "b"
      }
     ]
    },
    {
     "id": "r2",
     "number": "II",
     "type": "tf",
     "grading": "auto",
     "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "6 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 6,
     "pdfPage": 11,
     "title": "Ucieczka z pokoju",
     "source": "Na podstawie: https://www.polityka.pl/tygodnikpolityka/ludzieistyle/1617357,1,moda-na-zabawe-w-escape-roomach.read",
     "passage": "Grupa ludzi zostaje zamknięta w pokoju i od tej chwili członkowie tej grupy mogą liczyć tylko na siebie. Chcą się uwolnić, a czasu jest niewiele, bo 60 minut. Jedynym sposobem, aby wyjść na zewnątrz, jest rozwiązanie kolejnych zagadek. Liczy się logiczne myślenie, wiedza o świecie oraz umiejętność współpracy w grupie. To nie fabuła filmu, lecz opis zabawy „Ucieczka z pokoju” (ang. escape room).\n\nPokój, w którym znajdują się uczestnicy, jest pełen szafek, tajnych skrytek, mebli i różnych potrzebnych przedmiotów, ale znaleźć tam można również rzeczy zupełnie nieprzydatne, dekoracyjne. Niektórzy wychodzą z zamknięcia przed planowanym czasem, jednak są też tacy gracze, którym się to nie udaje. Co ciekawe, właśnie te osoby, które nie odniosły sukcesu, mówią, że kiedyś jeszcze raz spróbują rozwiązać zadania w tym samym pokoju.\n\nTaka forma rozrywki jest usługą, która może być dobrym biznesem, szczególnie dla osób początkujących, bez wielkiego doświadczenia w prowadzeniu firmy. Założenie escape roomu z pewnością wymaga od właścicieli pomysłowości, ale nie ogromnych środków finansowych, ponieważ wiele można zrobić samemu lub przy pomocy znajomych. Pieniądze na reklamę również nie są konieczne, bo osoby, które lubią odwiedzać takie miejsca, wymieniają się informacjami na ich temat.\n\nEscape roomy cieszą się dużą popularnością wśród graczy w różnym wieku, a w ostatnich latach przekształciły się w formy gier miejskich, które odbywają się na świeżym powietrzu.",
     "example": {
      "id": "r2.ex",
      "statement": "Do pokoju z zagadkami wchodzi jeden człowiek.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Czas przeznaczony na grę to jedna godzina.",
       "answer": "TAK"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Aby wyjść w pokoju, trzeba użyć wszystkich przedmiotów, które są w środku.",
       "answer": "NIE"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Przegrani zwykle nie chcą już wracać do gry.",
       "answer": "NIE"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Właściciele escape roomów powinni być kreatywni.",
       "answer": "TAK"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Zabawę w ucieczkę z pokoju najczęściej lubią osoby młode.",
       "answer": "NIE"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Gra miejska jest akcją podobną do zabawy w escape roomie.",
       "answer": "TAK"
      }
     ]
    },
    {
     "id": "r3",
     "number": "III",
     "type": "gapMatch",
     "grading": "auto",
     "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–I).",
     "pointsFormula": "8 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 8,
     "pdfPage": 12,
     "title": "Niedźwiedź Wojtek",
     "source": "Na podstawie: https://kurierhistoryczny.pl/artykul/wojna-piwo-i-niedzwiedz-czyli-historia-kaprala-wojtka,630",
     "passage": "W czasie II wojny światowej polscy żołnierze, którzy przebywali w Iranie, kupili małego niedźwiedzia od pewnego chłopca, {{ex}}. Opiekowali się nim troskliwie, musieli go karmić, ponieważ {{1}}. Niedźwiedź Wojtek – bo tak nazwali go Polacy – szybko zmienił dietę na taką, która {{2}}, a było ono jego ulubionym napojem.\n\nNie raz i nie dwa zwierzę sprawiało, że {{3}}. Gdy zmęczeni wracali do obozu, Wojtek witał ich radośnie, co wszystkim bardzo poprawiało nastrój. Podobnie było, kiedy niedźwiedź uprawiał judo z żołnierzami, bo po zakończonej {{4}}. Czasami Wojtkowi brakowało ciepła i czułości, nawet jako już dorosły niedźwiedź {{5}}, którzy spali w namiocie.\n\nJednak niedźwiadek {{6}}, żywą maskotką. Pomagał swoim opiekunom, np. nosił ciężkie przedmioty. Był to tak nietypowy widok, że ktoś narysował Wojtka w takiej sytuacji. Rysunek szybko stał się symbolem i pojawiał się na wojskowych ciężarówkach oraz ubraniach. Po wojnie żołnierze byli zmuszeni {{7}}, ponieważ nikt nie miał warunków, żeby zabrać go do domu. Nie zapomnieli jednak o swoim przyjacielu – {{8}} i mimo zakazów pracowników wchodzili do Wojtka na wybieg, żeby się z nim pobawić i napić piwa.",
     "options": [
      {
       "id": "A",
       "text": "który znalazł zwierzę w lesie."
      },
      {
       "id": "B",
       "text": "walce „całował” przeciwnika po twarzy"
      },
      {
       "id": "C",
       "text": "nie był w armii tylko zabawką"
      },
      {
       "id": "D",
       "text": "bardzo często go odwiedzali"
      },
      {
       "id": "E",
       "text": "kładł się w nocy blisko żołnierzy"
      },
      {
       "id": "F",
       "text": "składała się z owoców, miodu oraz… piwa"
      },
      {
       "id": "G",
       "text": "nie umiał jeszcze sam jeść"
      },
      {
       "id": "H",
       "text": "oddać niedźwiedzia do zoo"
      },
      {
       "id": "I",
       "text": "żołnierze często zapominali o wojnie"
      }
     ],
     "example": {
      "gap": "ex",
      "answer": "A",
      "shown": true
     },
     "items": [
      {
       "id": "r3.1",
       "number": 1,
       "gap": "1",
       "answer": "G"
      },
      {
       "id": "r3.2",
       "number": 2,
       "gap": "2",
       "answer": "F"
      },
      {
       "id": "r3.3",
       "number": 3,
       "gap": "3",
       "answer": "I"
      },
      {
       "id": "r3.4",
       "number": 4,
       "gap": "4",
       "answer": "B"
      },
      {
       "id": "r3.5",
       "number": 5,
       "gap": "5",
       "answer": "E"
      },
      {
       "id": "r3.6",
       "number": 6,
       "gap": "6",
       "answer": "C"
      },
      {
       "id": "r3.7",
       "number": 7,
       "gap": "7",
       "answer": "H"
      },
      {
       "id": "r3.8",
       "number": 8,
       "gap": "8",
       "answer": "D"
      }
     ]
    },
    {
     "id": "r4",
     "number": "IV",
     "type": "match",
     "grading": "auto",
     "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
     "pointsFormula": "6 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 6,
     "pdfPage": 13,
     "source": "Na podstawie: https://www.focus.pl/artykul/10-najgorszych-nawykw-ktre-niszcz-nasz-mzg?page=2",
     "heading": "Czy wiesz, jak dbać o swój mózg i dlaczego?",
     "options": [
      {
       "id": "A",
       "text": "Tematów i mądrych osób wokół nas nie brakuje. Ciekawe rozmowy pozytywnie wpływają na pracę mózgu, dlatego należy prowadzić je jak najczęściej."
      },
      {
       "id": "B",
       "text": "Myślenie to najlepszy trening dla mózgu. Im mniej myślimy, tym szybciej nasz mózg się zmniejsza. Warto mieć głowę pełną pomysłów i planów na przyszłość."
      },
      {
       "id": "C",
       "text": "Życie z dala od świata przyrody, przebywanie wśród głośnych dźwięków negatywnie wpływają na mózg. Cisza łagodzi stres i zdenerwowanie, a mózg ma możliwość regeneracji."
      },
      {
       "id": "D",
       "text": "Warto zadbać o lepszą koncentrację i energię na cały dzień. Zapominanie o pierwszym posiłku prowadzi do niebezpiecznego obniżenia poziomu cukru we krwi."
      },
      {
       "id": "E",
       "text": "Zbyt duża ilość cukru powoduje, że organizm ma problem z przyjmowaniem potrzebnych mu składników odżywczych, a to osłabia procesy uczenia się i zapamiętywania."
      },
      {
       "id": "F",
       "text": "Nikotyna zmienia funkcjonowanie organizmu. Uzależnienie od tej substancji może prowadzić do zmniejszenia się mózgu i choroby Alzheimera."
      },
      {
       "id": "G",
       "text": "Zdrowy sen pozwala mózgowi przestać intensywnie pracować i zregenerować siły. Jego brak może prowadzić do śmierci komórek mózgowych."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Rzuć palenie!",
      "answer": "F",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Daj odpocząć!",
       "answer": "G"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Nie jedz słodyczy!",
       "answer": "E"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Uciekaj od hałasu!",
       "answer": "C"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Dyskutuj!",
       "answer": "A"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Bądź kreatywny!",
       "answer": "B"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Nie unikaj śniadań!",
       "answer": "D"
      }
     ]
    },
    {
     "id": "r5",
     "number": "V",
     "type": "clozeBox",
     "grading": "auto",
     "instruction": "V. Proszę – zgodnie z przykładem – uzupełnić tekst wyrazami z ramki.",
     "pointsFormula": "10 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 5,
     "pdfPage": 14,
     "title": "Noc świętojańska",
     "source": "Na podstawie: https://www.polskatradycja.pl/folklor/swieta/letnie/noc-swietojanska.html",
     "wordBox": [
      "ludzkie",
      "słońca",
      "kwiatami",
      "rywalizowali",
      "najkrótszej",
      "witali",
      "lata",
      "przyłączały się",
      "informacje",
      "miłosne",
      "para"
     ],
     "distractors": [],
     "passage": "Dawniej początek {{ex}} był okazją do wielkiego świętowania. Odbywało się ono w noc świętojańską, podczas której ludzie z radością {{1}} nową porę roku.\n\nŚwięto obchodzono w czasie {{2}} nocy w roku, czyli z 23 na 24 czerwca. Dzień 24 czerwca jest dłuższy niż inne, ponieważ okres między wschodem a zachodem {{3}} trwa około 16 godzin.\n\nNoc świętojańska miała również inne zadanie. Łączyła {{4}} serca, które właśnie wtedy chętniej szukały miłości. Młodzi chłopcy {{5}} między sobą o uczucia pięknych panien, a te z kolei śpiewały {{6}} piosenki i tańczyły wokół ognisk w białych strojach udekorowanych {{7}}. Kawalerowie skakali przez ogniska, czym pokazywali swoją sprawność fizyczną. Dziewczyny chętnie {{8}} do tej niebezpiecznej, ale emocjonującej zabawy. Jeśli jakaś {{9}} razem przeskoczyła ogień, miała zapewnione szczęście w przyszłości. Pierwsze {{10}} o takich zwyczajach pochodzą z XIII wieku.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "lata"
      },
      {
       "id": "1",
       "answer": "witali"
      },
      {
       "id": "2",
       "answer": "najkrótszej"
      },
      {
       "id": "3",
       "answer": "słońca"
      },
      {
       "id": "4",
       "answer": "ludzkie"
      },
      {
       "id": "5",
       "answer": "rywalizowali"
      },
      {
       "id": "6",
       "answer": "miłosne"
      },
      {
       "id": "7",
       "answer": "kwiatami"
      },
      {
       "id": "8",
       "answer": "przyłączały się"
      },
      {
       "id": "9",
       "answer": "para"
      },
      {
       "id": "10",
       "answer": "informacje"
      }
     ]
    }
   ]
  },
  {
   "id": "grammar",
   "title": "Poprawność gramatyczna",
   "maxPoints": 30,
   "timeMinutes": 45,
   "taskCount": 8,
   "pdfPages": [
    16,
    20
   ],
   "tasks": [
    {
     "id": "g1",
     "number": "I",
     "type": "clozeChoice",
     "grading": "auto",
     "instruction": "I. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (odmiana rzeczowników, przymiotników i zaimków).",
     "pointsFormula": "10 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 5,
     "pdfPage": 16,
     "passage": "Aneta i Robert jadą w tym {{ex1}} na {{ex2}} wakacje. Mają dwoje dzieci, ale będą wypoczywać bez {{ex3}}. Od dawna marzyli o {{1}} wycieczce, ale brakowało im pieniędzy. Jednak niedawno Robert zmienił {{2}}, więc teraz będą mogli podróżować po {{3}}. Ich przyjaciele – Dorota i Karol – być może też pojadą z {{4}}, dlatego wspólnie planują podróż. Czy wszyscy wrócą zadowoleni z {{5}}? Aneta podczas wakacji najchętniej ogląda zabytki i odwiedza {{6}}. Robert natomiast {{7}} nie znosi, woli góry. Dorota i Karol to {{8}} {{9}}. Kochają naturę i chcą odkrywać nowe miejsca. Na szczęście wszyscy uwielbiają dobre jedzenie i na pewno będą chodzić do {{10}} restauracji na wspaniałe lokalne posiłki.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "roku",
        "rokiem",
        "latach"
       ],
       "answer": "roku"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "wyjątkowe",
        "wyjątkowymi",
        "wyjątkowych"
       ],
       "answer": "wyjątkowe"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "im",
        "ich",
        "nich"
       ],
       "answer": "nich"
      },
      {
       "id": "1",
       "options": [
        "zagranicznych",
        "zagranicznej",
        "zagraniczną"
       ],
       "answer": "zagranicznej"
      },
      {
       "id": "2",
       "options": [
        "pracy",
        "pracą",
        "pracę"
       ],
       "answer": "pracę"
      },
      {
       "id": "3",
       "options": [
        "świecie",
        "światem",
        "świata"
       ],
       "answer": "świecie"
      },
      {
       "id": "4",
       "options": [
        "nich",
        "ich",
        "nimi"
       ],
       "answer": "nimi"
      },
      {
       "id": "5",
       "options": [
        "urlopem",
        "urlopu",
        "urlop"
       ],
       "answer": "urlopu"
      },
      {
       "id": "6",
       "options": [
        "muzeów",
        "muzea",
        "muzeach"
       ],
       "answer": "muzea"
      },
      {
       "id": "7",
       "options": [
        "ich",
        "go",
        "nich"
       ],
       "answer": "ich"
      },
      {
       "id": "8",
       "options": [
        "doświadczone",
        "doświadczeni",
        "doświadczonymi"
       ],
       "answer": "doświadczeni"
      },
      {
       "id": "9",
       "options": [
        "turyści",
        "turystami",
        "turystów"
       ],
       "answer": "turyści"
      },
      {
       "id": "10",
       "options": [
        "regionalnych",
        "regionalne",
        "regionalnym"
       ],
       "answer": "regionalnych"
      }
     ]
    },
    {
     "id": "g2",
     "number": "II",
     "type": "clozeBox",
     "grading": "auto",
     "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
     "pointsFormula": "5 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 2.5,
     "pdfPage": 16,
     "wordBox": [
      "ponieważ",
      "dlatego",
      "ale",
      "czy",
      "i",
      "i",
      "że"
     ],
     "distractors": [
      "i"
     ],
     "passage": "W wielu miastach Polski ogromną popularnością cieszą się lody naturalne {{ex}} je się je nawet zimą. Właściciele punktów z lodami mówią, {{1}} Polacy lubią wracać do smaków z dzieciństwa, {{2}} w każdej kawiarni można kupić tradycyjne smaki: truskawkowy czy śmietankowy.\n\nHanna Derkacz, właścicielka lodziarni: „Czasem klienci pytają też, {{3}} mamy lody piwne albo szynkowe, {{4}} na razie takich eksperymentalnych smaków nie oferujemy, {{5}} nie opracowaliśmy jeszcze dobrej receptury”.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "i"
      },
      {
       "id": "1",
       "answer": "że"
      },
      {
       "id": "2",
       "answer": "dlatego"
      },
      {
       "id": "3",
       "answer": "czy"
      },
      {
       "id": "4",
       "answer": "ale"
      },
      {
       "id": "5",
       "answer": "ponieważ"
      }
     ]
    },
    {
     "id": "g3",
     "number": "III",
     "type": "clozeChoice",
     "grading": "auto",
     "instruction": "III. Proszę – zgodnie z przykładami – podkreślić poprawne formy wyrazów podanych w nawiasach (stopniowanie przymiotników i przysłówków).",
     "pointsFormula": "5 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 2.5,
     "pdfPage": 17,
     "passage": "Dla osób, które się odchudzają, święta są okresem {{ex1}} niż inne. Dlatego też dobrze jest pomyśleć o świątecznej diecie trochę {{ex2}}. Trzeba jednak być realistą – w święta na pewno twoje odchudzanie nie będzie szczególnie {{1}}. To przecież czas spędzony z rodziną przy stole pełnym jedzenia. Jednak nie musisz rezygnować z tego, by twoja sylwetka była coraz {{2}}. Po prostu zaakceptuj fakt, że w okresie świątecznym zjesz {{3}} niż zwykle, ale zaraz po świętach wrócisz do mniejszych porcji i będziesz trenować jeszcze {{4}}, żeby mieć {{5}} na świecie figurę. O tym przecież marzysz!",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "trudno",
        "trudniej",
        "trudniejszym"
       ],
       "answer": "trudniejszym"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "wcześnie",
        "wcześniej",
        "wczesne"
       ],
       "answer": "wcześniej"
      },
      {
       "id": "1",
       "options": [
        "efektywne",
        "efektywnie",
        "bardziej efektywnym"
       ],
       "answer": "efektywne"
      },
      {
       "id": "2",
       "options": [
        "lepsza",
        "lepiej",
        "lepszą"
       ],
       "answer": "lepsza"
      },
      {
       "id": "3",
       "options": [
        "dużo",
        "więcej",
        "większe"
       ],
       "answer": "więcej"
      },
      {
       "id": "4",
       "options": [
        "intensywniejsze",
        "intensywnie",
        "intensywniej"
       ],
       "answer": "intensywniej"
      },
      {
       "id": "5",
       "options": [
        "doskonale",
        "doskonalszą",
        "najdoskonalszą"
       ],
       "answer": "najdoskonalszą"
      }
     ]
    },
    {
     "id": "g4",
     "number": "IV",
     "type": "clozeForm",
     "grading": "auto+review",
     "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przyszły).",
     "pointsFormula": "10 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 5,
     "pdfPage": 17,
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "Od kilku miesięcy {{ex1}} nowego mieszkania, bo niedługo {{ex2}} nasze pierwsze dziecko. Moja żona codziennie {{1}} w internecie ogłoszenia, a ja wieczorami {{2}} do właścicieli i pytam, kiedy {{3}} się z nami spotkać. Nasi rodzice {{4}} nam szukać, ale mimo wszystko {{5}} to już dosyć długo.\n\nKiedy wreszcie {{6}} wymarzone mieszkanie, szybko {{7}} kredyt w banku. Potem moja żona {{8}} meble dla dziecka, ja {{9}} nasze rzeczy, a mój brat {{10}} po nie swoim dużym samochodem.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "szukać",
       "answer": "szukamy"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "urodzić się",
       "answer": "urodzi się"
      },
      {
       "id": "1",
       "given": "przeszukiwać",
       "answer": "przeszukuje"
      },
      {
       "id": "2",
       "given": "dzwonić",
       "answer": "dzwonię"
      },
      {
       "id": "3",
       "given": "móc",
       "answer": "mogą/będą mogli",
       "accept": [
        "mogą",
        "będą mogli"
       ]
      },
      {
       "id": "4",
       "given": "pomagać",
       "answer": "pomagają"
      },
      {
       "id": "5",
       "given": "trwać",
       "answer": "trwa"
      },
      {
       "id": "6",
       "given": "my – znaleźć",
       "answer": "znajdziemy"
      },
      {
       "id": "7",
       "given": "my – wziąć",
       "answer": "weźmiemy"
      },
      {
       "id": "8",
       "given": "wybrać",
       "answer": "wybierze"
      },
      {
       "id": "9",
       "given": "spakować",
       "answer": "spakuję"
      },
      {
       "id": "10",
       "given": "przyjechać",
       "answer": "przyjedzie"
      }
     ],
     "pdfNotes": [
      "Examples are printed in the text before their cue ('szukamy (szukać)', 'urodzi się (urodzić się)'); the superscript number repeated after each cue is ignored.",
      "Key 3 prints 'mogą/będą mogli' (alternatives without spaces): answer stored as printed, both variants also in accept."
     ]
    },
    {
     "id": "g5",
     "number": "V",
     "type": "question",
     "grading": "auto+review",
     "instruction": "V. Proszę – zgodnie z przykładem – zapytać o podkreśloną część zdania.",
     "pointsFormula": "5 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 2.5,
     "pdfPage": 18,
     "match": {
      "stripChars": "…?.!",
      "ignoreCase": true,
      "collapseSpace": true
     },
     "example": {
      "id": "g5.ex",
      "sentence": "Jan idzie do kiosku po gazetę.",
      "underlined": "po gazetę",
      "stem": "…………… Jan idzie do kiosku?",
      "shortAnswer": "Po gazetę.",
      "answer": "Po co",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Obie lampy są ładne, ale wolę tę większą.",
       "underlined": "tę większą",
       "stem": "…………… lampę wolisz?",
       "shortAnswer": "Tę większą.",
       "answer": "Którą",
       "accept": []
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Jerzy świetnie wygląda w garniturze.",
       "underlined": "w garniturze",
       "stem": "…………… Jerzy świetnie wygląda?",
       "shortAnswer": "W garniturze.",
       "answer": "W czym",
       "accept": [
        "W jakim ubraniu",
        "W którym ubraniu"
       ]
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Rodzice kupili te ciastka dzieciom.",
       "underlined": "dzieciom",
       "stem": "…………… rodzice kupili te ciastka?",
       "shortAnswer": "Dzieciom.",
       "answer": "Komu",
       "accept": []
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Do wyjścia dojdziemy tym korytarzem.",
       "underlined": "tym korytarzem",
       "stem": "…………… dojdziemy do wyjścia?",
       "shortAnswer": "Tym korytarzem.",
       "answer": "Którędy",
       "accept": [
        "Jak",
        "Którym korytarzem"
       ]
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Adam wrócił z gór, spędzał tam wakacje.",
       "underlined": "z gór",
       "stem": "…………… wrócił Adam?",
       "shortAnswer": "Z gór.",
       "answer": "Skąd",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Official key prints the question word with decoration (Którą…?, W czym…? / W jakim ubraniu…?); stored without it, match.stripChars ignores the decoration."
     ]
    },
    {
     "id": "g6",
     "number": "VI",
     "type": "transform",
     "grading": "review",
     "instruction": "VI. Proszę – zgodnie z przykładem – użyć wyrazu w nawiasie i przekształcić zdanie tak, by miało ten sam sens.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "pdfPage": 19,
     "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
     "example": {
      "id": "g6.ex",
      "source": "Robert prowadzi duże przedsiębiorstwo.",
      "hint": "kieruje",
      "answer": "Robert kieruje dużym przedsiębiorstwem.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "Mam ochotę na mocną kawę.",
       "hint": "Napiłbym się",
       "answer": "Napiłbym się mocnej kawy.",
       "rubric": "2 transformacje (2 x 0,25) + usunięcie zbędnego przyimka 0,5",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 0.5
        },
        {
         "what": "usunięcie zbędnego przyimka",
         "points": 0.5
        }
       ]
      },
      {
       "id": "g6.2",
       "number": 2,
       "source": "Turyści zwiedzają Stare Miasto.",
       "hint": "spacerują",
       "answer": "Turyści spacerują po Starym Mieście.",
       "rubric": "dodanie przyimka 0,5 + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "dodanie przyimka",
         "points": 0.5
        },
        {
         "what": "2 transformacje",
         "points": 0.5
        }
       ]
      },
      {
       "id": "g6.3",
       "number": 3,
       "source": "Dziecko za często siedzi przy komputerze.",
       "hint": "używa",
       "answer": "Dziecko za często używa komputera.",
       "rubric": "usunięcie zbędnego przyimka 0,5 + transformacja 0,5",
       "rubricParts": [
        {
         "what": "usunięcie zbędnego przyimka",
         "points": 0.5
        },
        {
         "what": "transformacja",
         "points": 0.5
        }
       ]
      },
      {
       "id": "g6.4",
       "number": 4,
       "source": "Marcin pracuje w tej restauracji dłużej niż inni kelnerzy.",
       "hint": "od",
       "answer": "Marcin pracuje w tej restauracji dłużej od innych kelnerów.",
       "rubric": "2 transformacje (2 x 0,5)",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 1
        }
       ]
      },
      {
       "id": "g6.5",
       "number": 5,
       "source": "Nie wiem, jak napisać to słowo.",
       "hint": "nie umiem",
       "answer": "Nie umiem napisać tego słowa.",
       "rubric": "usunięcie zbędnego spójnika 0,5 + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "usunięcie zbędnego spójnika",
         "points": 0.5
        },
        {
         "what": "2 transformacje",
         "points": 0.5
        }
       ]
      }
     ]
    },
    {
     "id": "g7",
     "number": "VII",
     "type": "clozeChoice",
     "grading": "auto",
     "instruction": "VII. Proszę – zgodnie z przykładami – podkreślić poprawną formę wyrazów podanych w nawiasach (aspekt i tryby).",
     "pointsFormula": "10 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 5,
     "pdfPage": 20,
     "passage": "Gdybym {{ex1}}, chętnie {{ex2}} na studia za granicę. Jakiś głos podpowiada mi: {{ex3}} koniecznie.\n\nZ zagranicznym dyplomem na pewno łatwiej {{1}} mi potem znaleźć pracę. Niestety wybór miejsca i kierunku studiów nie jest rzeczą prostą.\n\nMój brat radzi mi:\n\n- Najpierw {{2}} uniwersytetu, na którym {{3}} studiować. Następnie dokładnie {{4}} ofertę wybranego kierunku studiów. {{5}} swoimi zainteresowaniami, a nie opiniami kolegów! Na twoim miejscu {{6}} dobry uniwersytet w niezbyt odległym kraju w Europie.\n\nMoi znajomi natomiast mówią:\n\n- Najlepiej {{7}} gdzieś daleko! Nie {{8}}, że będziesz czuć się osamotniona. Jeśli dasz nam znać, {{9}} cię na pewno.\n\nObawiam się jednak, że za kilka miesięcy mogę od nich usłyszeć:\n\n- Gdybyśmy nie {{10}} tylu zajęć na studiach, przyjechalibyśmy do ciebie, ale teraz nie możemy. Kto ma rację?",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "mogła",
        "mogłabym",
        "mogę"
       ],
       "answer": "mogła"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "pojechałabym",
        "pojechałby",
        "pojechała"
       ],
       "answer": "pojechałabym"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "wyjedź",
        "niech wyjeżdża",
        "wyjechałbym"
       ],
       "answer": "wyjedź"
      },
      {
       "id": "1",
       "options": [
        "byłabym",
        "byłoby",
        "niech będzie"
       ],
       "answer": "byłoby"
      },
      {
       "id": "2",
       "options": [
        "niech poszuka",
        "szukałabym",
        "poszukaj"
       ],
       "answer": "poszukaj"
      },
      {
       "id": "3",
       "options": [
        "chciałby",
        "chciej",
        "chciałabyś"
       ],
       "answer": "chciałabyś"
      },
      {
       "id": "4",
       "options": [
        "przeglądałabyś",
        "przejrzyj",
        "przejrzałabym"
       ],
       "answer": "przejrzyj"
      },
      {
       "id": "5",
       "options": [
        "Niech się kieruje",
        "Kieruj się",
        "Kierowałbyś się"
       ],
       "answer": "Kieruj się"
      },
      {
       "id": "6",
       "options": [
        "wybrałabyś",
        "wybrałbym",
        "wybierz"
       ],
       "answer": "wybrałbym"
      },
      {
       "id": "7",
       "options": [
        "studiuj",
        "studiowałabyś",
        "niech studiują"
       ],
       "answer": "studiuj"
      },
      {
       "id": "8",
       "options": [
        "martwcie się",
        "martw się",
        "martwiłabyś się"
       ],
       "answer": "martw się"
      },
      {
       "id": "9",
       "options": [
        "odwiedzimy",
        "odwiedźmy",
        "odwiedzilibyśmy"
       ],
       "answer": "odwiedzimy"
      },
      {
       "id": "10",
       "options": [
        "mieliśmy",
        "mieli",
        "miałyśmy"
       ],
       "answer": "mieli"
      }
     ]
    },
    {
     "id": "g8",
     "number": "VIII",
     "type": "clozeChoice",
     "grading": "auto",
     "instruction": "VIII. Proszę – zgodnie z przykładem – wybrać i podkreślić poprawny wyraz spośród podanych w nawiasach (przyimki).",
     "pointsFormula": "5 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 2.5,
     "pdfPage": 20,
     "passage": "Popularną ostatnio aktywnością {{ex}} Polsce są loty balonem {{1}} Tatrami. Podróżnicy opowiadają, że widok {{2}} balonu jest niesamowity, można na przykład zobaczyć ludzi, którzy właśnie wchodzą {{3}} szczyt góry. Do wylotu baloniarze przygotowują się {{4}} kilka godzin. Ważne, żeby {{5}} startem dokładnie sprawdzić prognozę pogody.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "w",
        "na",
        "po"
       ],
       "answer": "w"
      },
      {
       "id": "1",
       "options": [
        "pod",
        "nad",
        "za"
       ],
       "answer": "nad"
      },
      {
       "id": "2",
       "options": [
        "z",
        "do",
        "od"
       ],
       "answer": "z"
      },
      {
       "id": "3",
       "options": [
        "w",
        "na",
        "po"
       ],
       "answer": "na"
      },
      {
       "id": "4",
       "options": [
        "za",
        "na",
        "przez"
       ],
       "answer": "przez"
      },
      {
       "id": "5",
       "options": [
        "przy",
        "ze",
        "przed"
       ],
       "answer": "przed"
      }
     ]
    }
   ]
  },
  {
   "id": "writing",
   "title": "Pisanie",
   "maxPoints": 30,
   "timeMinutes": 75,
   "taskCount": 1,
   "pdfPages": [
    21,
    28
   ],
   "tasks": [
    {
     "id": "w",
     "number": null,
     "type": "writing",
     "grading": "review",
     "pdfPages": [
      22,
      28
     ],
     "instruction": "Uwaga! Proszę wybrać tylko jeden z zestawów i wykonać obydwa zadania (a i b) z tego samego zestawu.",
     "timeMinutes": 75,
     "maxPoints": 30,
     "choose": {
      "sets": 1,
      "of": 3,
      "doBoth": [
       "a",
       "b"
      ]
     },
     "sets": [
      {
       "id": "I",
       "parts": [
        {
         "id": "a",
         "genre": "zaproszenie",
         "wordTarget": 30,
         "prompt": "Organizuje Pani/Pan swoje przyjęcie urodzinowe w eleganckiej restauracji. Proszę napisać zaproszenie dla swoich kolegów i koleżanek na tę uroczystość."
        },
        {
         "id": "b",
         "genre": "esej",
         "wordTarget": 170,
         "prompt": "Proszę napisać esej szkolny (wypracowanie) pod tytułem: „Mój sposób na dobre zdrowie”.",
         "title": "Mój sposób na dobre zdrowie"
        }
       ]
      },
      {
       "id": "II",
       "parts": [
        {
         "id": "a",
         "genre": "e-mail",
         "wordTarget": 50,
         "prompt": "Przeczytała Pani / Przeczytał Pan w internecie ogłoszenie, które Panią/Pana zainteresowało: Fundacja „Pomagamy Zwierzętom” potrzebuje pracowników w schronisku dla psów i kotów. Kontakt: pomagamy@o2.pl Proszę napisać e-mail, zapytać w nim o szczegóły (adres, godziny pracy, zadania) i umówić się na spotkanie."
        },
        {
         "id": "b",
         "genre": "sprawozdanie",
         "wordTarget": 150,
         "prompt": "Szkoła języka polskiego dla cudzoziemców organizuje konkurs na najciekawsze wspomnienia z wycieczki po Polsce. Decyduje się Pani/Pan wziąć w nim udział. Proszę napisać sprawozdanie (relację) z takiej podróży."
        }
       ]
      },
      {
       "id": "III",
       "parts": [
        {
         "id": "a",
         "genre": "ogłoszenie",
         "wordTarget": 30,
         "prompt": "Chce Pani/Pan sprzedać swoje podręczniki do nauki języka polskiego. Proszę napisać ogłoszenie, które zamieści Pani/Pan na portalu internetowym."
        },
        {
         "id": "b",
         "genre": "charakterystyka",
         "wordTarget": 170,
         "prompt": "Proszę napisać charakterystykę sportowca, którego Pani/Pan podziwia."
        }
       ]
      }
     ],
     "wordCount": {
      "targetKind": "approx",
      "warnBelowRatio": 0.8,
      "note": "Source gives only the target and a '% of required words' field; 0.8 is an app convention, not official."
     },
     "rubric": {
      "source": "KARTA OCENY WYPOWIEDZI PISEMNEJ (test.pdf p.29)",
      "perPartMax": 15,
      "totalMax": 30,
      "criteria": [
       {
        "id": "task",
        "name": "wykonanie zadania (treść, forma, objętość)",
        "max": 5,
        "sub": [
         {
          "id": "t",
          "name": "treść",
          "max": 2.5
         },
         {
          "id": "f",
          "name": "forma",
          "max": 1.5
         },
         {
          "id": "o",
          "name": "objętość",
          "max": 1
         }
        ]
       },
       {
        "id": "means",
        "name": "środki językowe (leksyka i frazeologia, składnia, styl)",
        "max": 5,
        "sub": [
         {
          "id": "l",
          "name": "leksyka i frazeologia",
          "max": 2
         },
         {
          "id": "s",
          "name": "składnia",
          "max": 2
         },
         {
          "id": "st",
          "name": "styl",
          "max": 1
         }
        ]
       },
       {
        "id": "correct",
        "name": "poprawność językowa (gramatyka, ortografia i interpunkcja)",
        "max": 5,
        "sub": [
         {
          "id": "g",
          "name": "gramatyka",
          "max": 3.5
         },
         {
          "id": "or",
          "name": "ortografia i interpunkcja",
          "max": 1.5
         }
        ]
       }
      ],
      "errorCounts": [
       "gramatyczne",
       "leksykalne",
       "stylistyczne",
       "ortograficzne+interpunkcyjne",
       "inne"
      ],
      "extraFields": [
       "recenzja"
      ]
     }
    }
   ]
  }
 ]
};
