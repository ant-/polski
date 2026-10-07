window.EXAMS = window.EXAMS || {};
window.EXAMS["2023-06"] = {
 "schemaVersion": 1,
 "id": "2023-06",
 "meta": {
  "level": "B1",
  "labelPdf": "czerwiec 2023",
  "examDates": "24-25.06.2023",
  "sources": {
   "test": "sources/2023-06/test.pdf",
   "transcript": "sources/2023-06/transcript.pdf",
   "audio": "sources/2023-06/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear; listening II (8 pauses) and V (3 pauses = 4 persons) item chunks match the expected counts.",
   "Listening II has 8 items (8 x 1 p.), listening III interview, IV TAK/NIE with 5 items, V has 4 persons and 4 opinions (A-D, 5 slots; row A = two persons, no asterisk printed).",
   "Grammar II heading is worded differently ('Proszę uzupełnić tekst wyrazami z ramki zgodnie z podanym przykładem (spójniki)'); grammar IV is present & past tense.",
   "Reading IV: option letters sit in the middle column of the table; listening V and reading III printed source lines may lack the 'Na podstawie:' prefix."
  ]
 },
 "audio": {
  "src": "sources/2023-06/audio.mp3",
  "duration": 1604.6,
  "intro": [
   0,
   47.3
  ],
  "readingTime": [
   47.3,
   107.8
  ],
  "tail": [
   1541.1,
   1604.6
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
       107.8,
       123.9
      ],
      "plays": [
       {
        "start": 134.3,
        "end": 303.2
       }
      ],
      "items": [
       {
        "ref": "l1.ex",
        "start": 134.3,
        "end": 145.1
       },
       {
        "ref": "l1.1",
        "start": 149.6,
        "end": 157.9
       },
       {
        "ref": "l1.2",
        "start": 162.4,
        "end": 167.6
       },
       {
        "ref": "l1.3",
        "start": 172.1,
        "end": 179.9
       },
       {
        "ref": "l1.4",
        "start": 184.3,
        "end": 190.6
       },
       {
        "ref": "l1.5",
        "start": 195.0,
        "end": 203.5
       },
       {
        "ref": "l1.6",
        "start": 207.9,
        "end": 214.0
       },
       {
        "ref": "l1.7",
        "start": 218.3,
        "end": 225.3
       },
       {
        "ref": "l1.8",
        "start": 229.8,
        "end": 236.0
       },
       {
        "ref": "l1.9",
        "start": 240.6,
        "end": 247.2
       },
       {
        "ref": "l1.10",
        "start": 251.6,
        "end": 257.1
       },
       {
        "ref": "l1.11",
        "start": 261.5,
        "end": 269.3
       },
       {
        "ref": "l1.12",
        "start": 273.6,
        "end": 280.0
       },
       {
        "ref": "l1.13",
        "start": 284.2,
        "end": 291.7
       },
       {
        "ref": "l1.14",
        "start": 296.0,
        "end": 303.2
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
        "text": "w warzywniaku."
       },
       {
        "id": "b",
        "text": "w kiosku."
       },
       {
        "id": "c",
        "text": "w piekarni."
       }
      ],
      "answer": "c",
      "shown": true,
      "transcript": {
       "sp": "M",
       "t": "Poproszę dwie bułki i mały krojony chleb."
      }
     },
     "items": [
      {
       "id": "l1.1",
       "number": 1,
       "prompt": "To wypowiedź",
       "options": [
        {
         "id": "a",
         "text": "nauczyciela."
        },
        {
         "id": "b",
         "text": "ucznia."
        },
        {
         "id": "c",
         "text": "rodzica."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Tomku, dostajesz jedynkę, znowu się nie nauczyłeś."
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w biurze podróży."
        },
        {
         "id": "b",
         "text": "na dworcu PKP."
        },
        {
         "id": "c",
         "text": "w księgarni."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Przepraszam, chciałbym kupić przewodnik po Austrii."
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź to fragment",
       "options": [
        {
         "id": "a",
         "text": "prognozy pogody."
        },
        {
         "id": "b",
         "text": "porady lekarskiej."
        },
        {
         "id": "c",
         "text": "audycji kulinarnej."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Jutro można spodziewać się silnego wiatru i opadów deszczu."
       }
      },
      {
       "id": "l1.4",
       "number": 4,
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
         "text": "w sklepie motoryzacyjnym."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Tankowałem paliwo przy czwórce. Poproszę jeszcze małą kawę."
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź oznacza, że osoba",
       "options": [
        {
         "id": "a",
         "text": "długo szukała mieszkania."
        },
        {
         "id": "b",
         "text": "wynajęła mieszkanie kawalerowi."
        },
        {
         "id": "c",
         "text": "kupiła trzypokojowy apartament."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Po wielu miesiącach wreszcie znalazłam wymarzoną kawalerkę."
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "zdenerwowanie."
        },
        {
         "id": "b",
         "text": "rozczarowanie."
        },
        {
         "id": "c",
         "text": "zaskoczenie."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Dostałem awans i podwyżkę. Nie spodziewałem się tego."
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź oznacza, że osoba pyta o dania",
       "options": [
        {
         "id": "a",
         "text": "dla alergików."
        },
        {
         "id": "b",
         "text": "bez mięsa."
        },
        {
         "id": "c",
         "text": "niskokaloryczne."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Czy mają państwo w karcie coś dla wegetarian?"
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w kasie biletowej."
        },
        {
         "id": "b",
         "text": "na poczcie."
        },
        {
         "id": "c",
         "text": "w przychodni."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Dzień dobry, poproszę dwa ulgowe i jeden normalny."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź oznacza, że",
       "options": [
        {
         "id": "a",
         "text": "jest upalny dzień."
        },
        {
         "id": "b",
         "text": "ona czuje się dobrze."
        },
        {
         "id": "c",
         "text": "ona ma gorączkę."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Mam trzydzieści dziewięć stopni i dreszcze."
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w autobusie."
        },
        {
         "id": "b",
         "text": "w taksówce."
        },
        {
         "id": "c",
         "text": "w pociągu."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Ile mniej więcej będzie kosztował kurs na dworzec?"
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź oznacza, że ciepłe ubrania",
       "options": [
        {
         "id": "a",
         "text": "należy włożyć na siebie."
        },
        {
         "id": "b",
         "text": "trzeba zostawić poza salą."
        },
        {
         "id": "c",
         "text": "trzeba mieć przy sobie."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Przed wejściem do sali proszę zostawić kurtki w szatni."
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź oznacza, że osoby",
       "options": [
        {
         "id": "a",
         "text": "niedawno wróciły do domu."
        },
        {
         "id": "b",
         "text": "za kilka minut wychodzą."
        },
        {
         "id": "c",
         "text": "do wyjścia mają 30 minut."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Czy możesz się pospieszyć? Za pół godziny musimy wyjść."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "prośba."
        },
        {
         "id": "b",
         "text": "rada."
        },
        {
         "id": "c",
         "text": "odmowa."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Będziemy mieli dzisiaj gości, posprzątałbyś w domu?"
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "To wypowiedź",
       "options": [
        {
         "id": "a",
         "text": "kibica piłki nożnej."
        },
        {
         "id": "b",
         "text": "fana przegranej drużyny."
        },
        {
         "id": "c",
         "text": "fana wygranej drużyny."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Nasi siatkarze zagrali dobry mecz, ale złoty medal mają rywale."
       }
      }
     ]
    },
    {
     "id": "l2",
     "number": "II",
     "type": "mc",
     "grading": "auto",
     "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać dialogów i zaznaczyć właściwe odpowiedzi.",
     "pointsFormula": "8 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 8,
     "plays": 2,
     "pdfPage": 4,
     "audio": {
      "announce": [
       313.6,
       329.6
      ],
      "plays": [
       {
        "start": 339.9,
        "end": 487.7
       },
       {
        "start": 533.4,
        "end": 681.2
       }
      ],
      "pauseBetweenPlays": 45.7,
      "items": [
       {
        "ref": "l2.ex",
        "start": 339.9,
        "end": 354.7
       },
       {
        "ref": "l2.1",
        "start": 361.2,
        "end": 373.6
       },
       {
        "ref": "l2.2",
        "start": 380.5,
        "end": 389.9
       },
       {
        "ref": "l2.3",
        "start": 397.0,
        "end": 406.4
       },
       {
        "ref": "l2.4",
        "start": 413.2,
        "end": 421.7
       },
       {
        "ref": "l2.5",
        "start": 428.3,
        "end": 438.9
       },
       {
        "ref": "l2.6",
        "start": 445.5,
        "end": 455.6
       },
       {
        "ref": "l2.7",
        "start": 462.2,
        "end": 471.7
       },
       {
        "ref": "l2.8",
        "start": 478.4,
        "end": 487.7
       }
      ],
      "source": "auto-silencedetect",
      "verified": false
     },
     "example": {
      "id": "l2.ex",
      "prompt": "Z tego dialogu wynika, że",
      "options": [
       {
        "id": "a",
        "text": "pacjent nie spotka się dziś z lekarzem."
       },
       {
        "id": "b",
        "text": "wizyta będzie później niż planowano."
       },
       {
        "id": "c",
        "text": "pacjent wszedł do gabinetu lekarza."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "lines": [
        {
         "sp": "M",
         "t": "Gdzie znajdę gabinet doktora Kowalskiego?"
        },
        {
         "sp": "K",
         "t": "Przykro mi, ale doktor już wyszedł."
        }
       ]
      }
     },
     "items": [
      {
       "id": "l2.1",
       "number": 1,
       "prompt": "Ta wypowiedź oznacza, że kobieta",
       "options": [
        {
         "id": "a",
         "text": "przeprowadziła się."
        },
        {
         "id": "b",
         "text": "zrobiła w domu remont."
        },
        {
         "id": "c",
         "text": "wzięła kredyt na mieszkanie."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Wiesz, że pani Ela nie jest już naszą sąsiadką? Zamieszkała na Ochocie."
         },
         {
          "sp": "M",
          "t": "Nie wiedziałem, jesteś pierwszą osobą, która mi to mówi."
         }
        ]
       }
      },
      {
       "id": "l2.2",
       "number": 2,
       "prompt": "Z tego dialogu dowiadujemy się, że klient",
       "options": [
        {
         "id": "a",
         "text": "ma pieniądze w portfelu."
        },
        {
         "id": "b",
         "text": "ma pieniądze na koncie."
        },
        {
         "id": "c",
         "text": "negocjuje cenę produktu."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Niestety, nie może pan zapłacić kartą, nasz terminal jest zepsuty."
         },
         {
          "sp": "M",
          "t": "Ale ja nie mam gotówki!"
         }
        ]
       }
      },
      {
       "id": "l2.3",
       "number": 3,
       "prompt": "Z tego dialogu dowiadujemy się, że",
       "options": [
        {
         "id": "a",
         "text": "mężczyzna chwali potrawę."
        },
        {
         "id": "b",
         "text": "kobieta zrobiła pyszne danie."
        },
        {
         "id": "c",
         "text": "kobieta zgadza się z mężczyzną."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Kochanie, tym razem zapiekanka nie wyszła ci zbyt dobrze."
         },
         {
          "sp": "K",
          "t": "Masz rację, dodałam za dużo soli."
         }
        ]
       }
      },
      {
       "id": "l2.4",
       "number": 4,
       "prompt": "Z tego dialogu dowiadujemy się, że",
       "options": [
        {
         "id": "a",
         "text": "za śniadanie trzeba dodatkowo zapłacić."
        },
        {
         "id": "b",
         "text": "wszystkie posiłki są gratis."
        },
        {
         "id": "c",
         "text": "cena zawiera jeden posiłek."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Czy posiłki są wliczone w cenę pokoju?"
         },
         {
          "sp": "K",
          "t": "W tej ofercie jest tylko śniadanie."
         }
        ]
       }
      },
      {
       "id": "l2.5",
       "number": 5,
       "prompt": "Z tego dialogu dowiadujemy się, że",
       "options": [
        {
         "id": "a",
         "text": "syn marzy o własnym zwierzątku."
        },
        {
         "id": "b",
         "text": "kolega kupił sobie zwierzątko."
        },
        {
         "id": "c",
         "text": "mama nie zgadza się na zwierzątko."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Mamo, Kamil dostał na urodziny chomika, ja też chcę!"
         },
         {
          "sp": "K",
          "t": "No nie wiem, muszę porozmawiać o tym z ojcem."
         }
        ]
       }
      },
      {
       "id": "l2.6",
       "number": 6,
       "prompt": "Z tego dialogu dowiadujemy się, że",
       "options": [
        {
         "id": "a",
         "text": "kobieta umawia znajomego na wizytę."
        },
        {
         "id": "b",
         "text": "mężczyzna nie chce iść do dentysty."
        },
        {
         "id": "c",
         "text": "mężczyzna kolejny raz czuje ból."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Znowu boli mnie ząb."
         },
         {
          "sp": "K",
          "t": "Mogę ci polecić mojego dentystę, to bardzo dobry specjalista."
         }
        ]
       }
      },
      {
       "id": "l2.7",
       "number": 7,
       "prompt": "Z tego dialogu dowiadujemy się, że mężczyzna",
       "options": [
        {
         "id": "a",
         "text": "szedł w złą stronę."
        },
        {
         "id": "b",
         "text": "jedzie taksówką do muzeum."
        },
        {
         "id": "c",
         "text": "pyta taksówkarza o drogę."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Przepraszam, jak dojść do muzeum narodowego?"
         },
         {
          "sp": "M",
          "t": "To nie ten kierunek, radzę wziąć taksówkę."
         }
        ]
       }
      },
      {
       "id": "l2.8",
       "number": 8,
       "prompt": "Z tego dialogu dowiadujemy się, że mężczyzna",
       "options": [
        {
         "id": "a",
         "text": "nie zdążył na spektakl."
        },
        {
         "id": "b",
         "text": "przyszedł na czas."
        },
        {
         "id": "c",
         "text": "przyszedł za wcześnie."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Proszę zająć miejsce, spektakl rozpocznie się za kilka minut."
         },
         {
          "sp": "M",
          "t": "Całe szczęście, że się nie spóźniłem."
         }
        ]
       }
      }
     ]
    },
    {
     "id": "l3",
     "number": "III",
     "type": "mc",
     "grading": "auto",
     "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać wywiadu na temat relacji Roberta Lewandowskiego z rodzicami i zaznaczyć właściwe odpowiedzi.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: https://viva.pl/ludzie/newsy/robert-lewandowski-w-szczerym-wywiadzie-o-ojcu-32646-r3/",
     "audio": {
      "announce": [
       691.5,
       707.2
      ],
      "plays": [
       {
        "start": 717.5,
        "end": 796.1
       },
       {
        "start": 841.8,
        "end": 920.5
       }
      ],
      "pauseBetweenPlays": 45.7,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Dziennikarka",
        "t": "O swoim dzieciństwie i młodości opowie nam znany piłkarz – Robert Lewandowski. Robercie, powiedz, jak pamiętasz swoich rodziców? Czy sport był dla nich ważny?"
       },
       {
        "sp": "Robert Lewandowski",
        "t": "Rodzice całe życie byli związani ze sportem. Podczas studiów na Akademii Wychowania Fizycznego w Warszawie mój ojciec trenował judo, tam też poznał moją mamę – siatkarkę. Potem przeprowadzili się do Leszna i oboje uczyli WF-u w tej samej szkole podstawowej. Tata był również dyrektorem lokalnego ośrodka sportu."
       },
       {
        "sp": "Dziennikarka",
        "t": "Jaką rolę odegrał ojciec w twoim życiu?"
       },
       {
        "sp": "Robert Lewandowski",
        "t": "Był dla mnie wsparciem, a także moim pierwszym trenerem i to dzięki niemu wybrałem piłkę nożną. Mama też zachęcała mnie do sportu, ale ona widziała we mnie siatkarza."
       },
       {
        "sp": "Dziennikarka",
        "t": "Co zawdzięczasz rodzicom?"
       },
       {
        "sp": "Robert Lewandowski",
        "t": "Pokazali mi, jaki powinien być sportowiec: uczciwy, lojalny, taki, który dzieli się swoim sukcesem z innymi."
       },
       {
        "sp": "Dziennikarka",
        "t": "Twój tata zachorował, gdy byłeś nastolatkiem?"
       },
       {
        "sp": "Robert Lewandowski",
        "t": "Tak, miał problemy z sercem i zdiagnozowano u niego nowotwór. Odszedł, kiedy miałem 16 lat. Zaczynałem wtedy grać w profesjonalnych klubach. Zawsze będę żałował, że nigdy nie widział moich meczów w reprezentacji Polski na żywo."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "prompt": "Dla rodziców Roberta sport był",
      "options": [
       {
        "id": "a",
        "text": "częścią życia."
       },
       {
        "id": "b",
        "text": "rozrywką."
       },
       {
        "id": "c",
        "text": "mało ważny."
       }
      ],
      "answer": "a",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "prompt": "Rodzice Roberta Lewandowskiego",
       "options": [
        {
         "id": "a",
         "text": "uprawiali ten sam sport."
        },
        {
         "id": "b",
         "text": "pracowali na uniwersytecie."
        },
        {
         "id": "c",
         "text": "razem studiowali i pracowali."
        }
       ],
       "answer": "c"
      },
      {
       "id": "l3.2",
       "number": 2,
       "prompt": "Ojciec Roberta był",
       "options": [
        {
         "id": "a",
         "text": "instruktorem judo."
        },
        {
         "id": "b",
         "text": "kierownikiem instytucji sportowej."
        },
        {
         "id": "c",
         "text": "kierownikiem szkoły."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.3",
       "number": 3,
       "prompt": "Ojciec Roberta",
       "options": [
        {
         "id": "a",
         "text": "pomógł synowi zdecydować o przyszłości."
        },
        {
         "id": "b",
         "text": "odradzał synowi karierę sportową."
        },
        {
         "id": "c",
         "text": "trenował syna na siatkarza."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l3.4",
       "number": 4,
       "prompt": "Rodzice uczyli Roberta,",
       "options": [
        {
         "id": "a",
         "text": "jak szybko wygrywać."
        },
        {
         "id": "b",
         "text": "jak zachowywać się po zwycięstwie."
        },
        {
         "id": "c",
         "text": "gdzie inwestować pieniądze."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.5",
       "number": 5,
       "prompt": "Ojciec Roberta zmarł",
       "options": [
        {
         "id": "a",
         "text": "nagle po intensywnym treningu."
        },
        {
         "id": "b",
         "text": "przed ważnym meczem syna."
        },
        {
         "id": "c",
         "text": "w wyniku poważnej choroby."
        }
       ],
       "answer": "c"
      }
     ]
    },
    {
     "id": "l4",
     "number": "IV",
     "type": "tf",
     "grading": "auto",
     "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę posłuchać rozmowy turysty z przewodnikiem po Fromborku – mieście, w którym żył Mikołaj Kopernik – i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://jedynka.polskieradio.pl/artykul/1726187,Frombork-miasto-z-efektem-wow",
     "audio": {
      "announce": [
       930.8,
       946.7
      ],
      "plays": [
       {
        "start": 956.9,
        "end": 1049.8
       },
       {
        "start": 1096.0,
        "end": 1188.9
       }
      ],
      "pauseBetweenPlays": 46.2,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Turysta",
        "t": "Frombork to niezwykłe miasto, a wieża wodna jest bardzo interesująca."
       },
       {
        "sp": "Przewodnik",
        "t": "Tak. Naprzeciwko wieży jest pomnik Mikołaja Kopernika, stoimy właśnie przy głównej ulicy, w sercu miasta. Potem pójdziemy w stronę katedry. Aby do niej dojść, można przejść przez drewniany most lub wybrać inną drogę – przez bramę od strony zachodniej. Kościół katedralny jest bardzo piękny, ma prawie 100 metrów długości."
       },
       {
        "sp": "Turysta",
        "t": "Czy Mikołaj Kopernik mieszkał gdzieś w pobliżu?"
       },
       {
        "sp": "Przewodnik",
        "t": "Można powiedzieć, że miał dwa domy. Jednym była wieża katedralna, w której bywał od czasu do czasu, tam pracował i miał swoje najpotrzebniejsze sprzęty astronomiczne. Ale na co dzień mieszkał dosyć daleko od katedry. Niestety, ten budynek dziś już nie istnieje."
       },
       {
        "sp": "Turysta",
        "t": "A jak powstał Frombork?"
       },
       {
        "sp": "Przewodnik",
        "t": "Przez prawie 700 lat katedrę z kilkoma budynkami nazywaliśmy miastem, a pobliskie domy znajdowały się we wsi obok. Te osobne części stały się jednym miastem na początku dwudziestego wieku."
       },
       {
        "sp": "Turysta",
        "t": "Dlaczego katedrę zbudowano daleko od innych miejscowości?"
       },
       {
        "sp": "Przewodnik",
        "t": "Kościół znajduje się na górze, na wysokości 20 metrów, to taka naturalna obrona tego miejsca."
       }
      ]
     },
     "example": {
      "id": "l4.ex",
      "statement": "Wieża wodna znajduje się w centrum miasta.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "statement": "Do katedry można dojść tylko jedną trasą.",
       "answer": "NIE"
      },
      {
       "id": "l4.2",
       "number": 2,
       "statement": "Kopernik częściej mieszkał w pracowni niż w swoim domu.",
       "answer": "NIE"
      },
      {
       "id": "l4.3",
       "number": 3,
       "statement": "We Fromborku już nie ma domu Mikołaja Kopernika.",
       "answer": "TAK"
      },
      {
       "id": "l4.4",
       "number": 4,
       "statement": "Frombork powstał z połączenia dwóch różnych miast.",
       "answer": "NIE"
      },
      {
       "id": "l4.5",
       "number": 5,
       "statement": "Na lokalizację katedry wybrano szczególnie bezpieczne miejsce.",
       "answer": "TAK"
      }
     ]
    },
    {
     "id": "l5",
     "number": "V",
     "type": "matchMulti",
     "grading": "auto",
     "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać tekstu na temat poszukiwania pracy i dopasować osoby (1-4) do ich opinii (A-D). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerSlot": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 7,
     "source": "https://www.livecareer.pl/porady-zawodowe/jak-znalezc-prace/",
     "audio": {
      "announce": [
       1199.8,
       1215.7
      ],
      "plays": [
       {
        "start": 1226.0,
        "end": 1351.9
       },
       {
        "start": 1398.0,
        "end": 1523.9
       }
      ],
      "pauseBetweenPlays": 46.1,
      "items": [
       {
        "ref": "p1",
        "start": 1226.0,
        "end": 1256.3
       },
       {
        "ref": "p2",
        "start": 1263.1,
        "end": 1287.4
       },
       {
        "ref": "p3",
        "start": 1294.2,
        "end": 1323.2
       },
       {
        "ref": "p4",
        "start": 1329.7,
        "end": 1351.9
       }
      ],
      "source": "auto-silencedetect",
      "verified": false
     },
     "persons": [
      {
       "id": "1",
       "label": "osoba 1"
      },
      {
       "id": "2",
       "label": "osoba 2"
      },
      {
       "id": "3",
       "label": "osoba 3"
      },
      {
       "id": "4",
       "label": "osoba 4"
      }
     ],
     "example": {
      "id": "l5.ex",
      "statement": "poleca szukać pracy lokalnie.",
      "answer": [
       "1"
      ],
      "shown": true
     },
     "statements": [
      {
       "id": "l5.A",
       "letter": "A",
       "text": "proponuje, żeby dbać o swoją edukację.",
       "slots": 2,
       "answer": [
        "3",
        "4"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.B",
       "letter": "B",
       "text": "radzi, żeby być aktywnym w mediach społecznościowych.",
       "slots": 1,
       "answer": [
        "4"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.C",
       "letter": "C",
       "text": "poleca dobrze przygotować się do rozmowy kwalifikacyjnej.",
       "slots": 1,
       "answer": [
        "2"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.D",
       "letter": "D",
       "text": "radzi przeanalizować swoje wady i zalety.",
       "slots": 1,
       "answer": [
        "1"
       ],
       "anyOrder": true,
       "starred": false
      }
     ],
     "transcript": {
      "lines": [
       {
        "sp": "Osoba 1 (K)",
        "t": "Jeśli zastanawiasz się, jak znaleźć nową pracę, zacznij od sprawdzenia sytuacji na rynku pracy w twoim mieście. Będziesz wiedział, czy masz dużą konkurencję i jakie są szanse na zatrudnienie. Kluczem do sukcesu jest również poznanie swoich mocnych i słabych stron, warto wiedzieć, w czym jesteśmy dobrzy, a co nam nie wychodzi."
       },
       {
        "sp": "Osoba 2 (M)",
        "t": "Przed spotkaniem z rekruterem przeczytaj ofertę pracy, spróbuj odpowiedzieć na najczęściej zadawane podczas tego typu rozmowy pytania. Dowiedz się więcej o firmie, do której aplikujesz. Dzień wcześniej przygotuj sobie ubranie, sprawdź prognozę pogody i trasę dojazdu, żeby być na miejscu 15 minut przed czasem."
       },
       {
        "sp": "Osoba 3 (K)",
        "t": "Rozwijaj się! Czytaj książki specjalistyczne, chodź na szkolenia, rób to, co pomoże ci być specjalistą i zdobyć potrzebne kompetencje zawodowe, napisz o tym w swoim CV. Przyszły pracodawca to zauważy i doceni. Rozwój osobisty jest zresztą ważny zawsze, nie tylko wtedy, gdy szukasz pracy."
       },
       {
        "sp": "Osoba 4 (M)",
        "t": "Dbaj o swój profil w sieci. Załóż i prowadź konto na Facebooku czy Instagramie. Dodawaj informacje o swoich umiejętnościach, obowiązkach i ukończonych szkołach. Publikuj wartościowe i edukacyjne treści na konkretne tematy. Niech twoi obserwatorzy widzą, że jesteś profesjonalistą."
       }
      ]
     },
     "pdfNotes": [
      "Key row A has two persons (3, 4) without an asterisk in this session; stored as an unordered set like every multi-slot row. The printed source line has no 'Na podstawie:' prefix."
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
       "text": "Baza najpopularniejszych imion zainteresuje wszystkich przyszłych rodziców. Może być także cenną wskazówką np. dla przedsiębiorców produkujących pamiątki czy akcesoria dla najmłodszych. Z danych wynika, że tradycyjne imiona dla dzieci cieszą się bardzo dużą popularnością. Obecnie są chętniej wybierane niż dawniej.",
       "source": "Na podstawie: https://www.gov.pl/web/cyfryzacja/zosia-i-antek-najpopularniejszymi-imionami-2022-roku"
      },
      "prompt": "Z tekstu wynika, że",
      "options": [
       {
        "id": "a",
        "text": "baza imion przeznaczona jest przede wszystkim dla producentów gadżetów dla dzieci."
       },
       {
        "id": "b",
        "text": "w bazie imion można zamówić spersonalizowane gadżety dla dzieci."
       },
       {
        "id": "c",
        "text": "Polacy wracają do tradycyjnych imion dla dzieci."
       }
      ],
      "answer": "c",
      "shown": true
     },
     "items": [
      {
       "id": "r1.1",
       "number": 1,
       "passage": {
        "text": "Ta popularna linia lotnicza zarabia głównie na dodatkowych opcjach dla pasażerów. Przed podróżą można zapłacić za możliwość szybszego wejścia na pokład samolotu, rezerwację konkretnego miejsca, a nawet za posiłek, który zjemy w czasie lotu. Jeśli jednak chcemy podróżować ekonomicznie, powinniśmy przemyśleć nasze potrzeby, aby nie wydawać niepotrzebnie pieniędzy.",
        "source": "Na podstawie: https://zbiorowy.info/2022/10/tanie-podrozowanie-jak-maksymalnie-obnizyc-koszt-podrozy/"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "dodatkowe usługi to dla linii lotniczej sposób na promocję."
        },
        {
         "id": "b",
         "text": "cena biletu lotniczego nie zawiera usługi gastronomicznej."
        },
        {
         "id": "c",
         "text": "pasażerowie najwięcej pieniędzy wydają w czasie lotu."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "Ponad 8 tysięcy osób z 60 krajów wzięło udział w Maratonie Warszawskim. Jako pierwszy na mecie pojawił się Kenijczyk. Rywalizację kobiet wygrała Etiopka, która jednocześnie ustanowiła rekord tej międzynarodowej imprezy sportowej. Najszybszy z Polaków – Dariusz Nożyński – zajął 8. miejsce.",
        "source": "Na podstawie: https://tvn24.pl/tvnwarszawa/najnowsze/warszawa-44-maraton-warszawski-wyniki-zwyciezcami-sa-kenijczyk-i-etiopka"
       },
       "prompt": "Z tego tekstu możemy się dowiedzieć, że",
       "options": [
        {
         "id": "a",
         "text": "zawodnikami byli przede wszystkim warszawiacy."
        },
        {
         "id": "b",
         "text": "żadna kobieta nie wygrała warszawskiego biegu"
        },
        {
         "id": "c",
         "text": "żaden z Polaków nie zdobył w tych zawodach medalu."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "„Żywioły” to nietypowa piekarnia – miejsce idealne zarówno na śniadanie, jak i na wieczornego drinka czy posiłek z bliską osobą. To pierwszy w Warszawie punkt, który z sukcesem łączy piekarnię z rozbudowaną częścią bistro. Amatorzy dobrej jakości pieczywa znajdą tam pyszne chleby i bułki, a także kanapki, ciasta i przekąski, które można zjeść na miejscu lub wziąć na wynos.",
        "source": "Na podstawie: https://warszawa.naszemiasto.pl/bistro-zywioly-nietypowa-piekarnia-to-miejsce-zarowno-n"
       },
       "prompt": "Z tego tekstu wynika, że w piekarni „Żywioły” można",
       "options": [
        {
         "id": "a",
         "text": "spróbować lokalnych i nietypowych deserów."
        },
        {
         "id": "b",
         "text": "zarezerwować stolik na romantyczne spotkanie."
        },
        {
         "id": "c",
         "text": "zjeść posiłek w bistro lub zabrać jedzenie ze sobą."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "POLIN Music Festival wraca do Warszawy po ponad dwóch latach. Już w najbliższy piątek rozpocznie się jeden z największych organizowanych w mieście koncertów, który potrwa aż trzy dni. Wysłuchać będzie można pięciu znakomitych występów polskich i zagranicznych artystów. Uczestnicy poznają także kilka zupełnie nowych utworów.",
        "source": "Na podstawie: https://tvn24.pl/tvnwarszawa/najnowsze/warszawa-polin-music-festival-rozpoczyna-sie-w-piatek-potrwa-trzy-dni-6770572"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "POLIN Music Festival odbędzie się pierwszy raz po przerwie."
        },
        {
         "id": "b",
         "text": "podczas imprezy można kupić płyty znanych zespołów."
        },
        {
         "id": "c",
         "text": "tym razem na festiwalu wystąpią tylko polskie zespoły."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "Czy kawa jest dobra na wszystko? Oczywiście, że tak. Ponad połowa Polaków nie wyobraża sobie początku dnia bez filiżanki tego czarnego napoju. Pijemy ją, bo lubimy, bo dodaje nam energii, bo to miły zwyczaj. Ma również pozytywny wpływ na zdrowie – tak uważają naukowcy, którzy mówią: „Pijcie kawę na zdrowie!”.",
        "source": "Na podstawie: https://beszamel.se.pl/porady/jak-zrobic/kawa-dobra-na-wszystko-zdrowotne-wlasciwosci-kawy"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "prawie 50% Polaków pije kawę każdego dnia rano."
        },
        {
         "id": "b",
         "text": "picie tego napoju pomaga ludziom dbać o zdrowie."
        },
        {
         "id": "c",
         "text": "badacze uważają, że kawa jest lepsza niż lekarstwa."
        }
       ],
       "answer": "b"
      }
     ],
     "pdfNotes": [
      "Item 3's printed source URL is cut off in the booklet ('…zarowno-n'); item 2 option b has no final full stop. Both kept verbatim."
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
     "title": "Ekspres Lodowcowy",
     "source": "Na podstawie: https://www.mamasaidbecool.pl/glacier-express-ekspres-lodowcowy/",
     "passage": "Podróż na pokładzie Glacier Express, czyli Ekspresu Lodowcowego, to niezwykła przygoda. Jest to jedna z najciekawszych atrakcji Szwajcarii. Ekspres łączy dwa znane ośrodki narciarskie - Zermatt i Sankt Moritz.\n\nPociąg z oknami od podłogi do sufitu pozwala zachwycać się niesamowitymi górskimi krajobrazami. Ekspres Lodowcowy nazywany jest najwolniejszym ekspresem świata, bo przez 8 godzin przejeżdża tylko 291 km. Choć początkowo wydaje się, że tak długa podróż będzie nudna, okazuje się, że to sama przyjemność. Przedziały są bardzo komfortowe, jest w nich dużo miejsca, a wygodne fotele zostały przygotowane na dłuższą trasę.\n\nNiedługo po opuszczeniu stacji początkowej zaczyna się jeden z najbardziej spektakularnych fragmentów podróży. Sześć ogromnych mostów pozwala bezpiecznie pokonać różnicę wysokości. Ta część trasy wpisana jest na listę Światowego Dziedzictwa UNESCO.\n\nEkspres Lodowcowy odjeżdża tylko raz dziennie – za to bardzo punktualnie. Wagony stoją na stacji już 15 minut przed odjazdem, więc można przyjść wcześniej. Przejechanie całego dystansu kosztuje dość dużo, ale można wysiąść na wcześniejszej stacji, wtedy cena będzie odpowiednio niższa. Natomiast każdy, niezależnie od tego, czy ma kartę Swiss Travel Pass, czy kupuje bilet jednorazowy, musi dokonać dodatkowej opłaty za rezerwację miejsca.",
     "example": {
      "id": "r2.ex",
      "statement": "Glacier Express to najbardziej interesująca atrakcja w szwajcarskich górach.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Pojazd ma ogromne okna i dach ze szkła.",
       "answer": "NIE"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Dobre warunki w Ekspresie Lodowcowym ułatwiają turystom długą podróż.",
       "answer": "TAK"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Cała trasa Ekspresu Lodowcowego znajduje się na liście UNESCO.",
       "answer": "NIE"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Ekspres rusza ze stacji początkowej zawsze zgodnie z rozkładem.",
       "answer": "TAK"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Wszystkie bilety na Ekspres Lodowcowy są w jednej cenie.",
       "answer": "NIE"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Posiadacze karty Swiss Travel Pass mają zagwarantowane miejsca siedzące.",
       "answer": "NIE"
      }
     ]
    },
    {
     "id": "r3",
     "number": "III",
     "type": "gapMatch",
     "grading": "auto",
     "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–H).",
     "pointsFormula": "7 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 7,
     "pdfPage": 12,
     "title": "Funkcjonalna kuchnia",
     "source": "Na podstawie: https://wnetrza-mieszkan.pl/kuchnia/funkcjonalna-kuchnia",
     "passage": "Kuchnia to jedno z intensywniej użytkowanych pomieszczeń w domu. To tutaj spędzamy bardzo dużo czasu, przygotowujemy {{ex}} i zmywamy naczynia. Warto zatem zadbać o jej funkcjonalność, aby wykonywanie codziennych czynności było łatwiejsze i przyjemniejsze. Gdy powierzchnia kuchni jest mała i wynosi {{1}}, dobre zaplanowanie przestrzeni jest szczególnie ważne.\n\nNajbardziej istotny podczas aranżacji tego pomieszczenia jest odpowiedni układ {{2}}: lodówki, zlewu i kuchenki. Powinny one być ustawione blisko siebie, tak by przestrzeń między nimi miała kształt trójkąta, w którym będziemy mogli łatwo robić posiłki. Najlepsza odległość między głównymi urządzeniami to {{3}}.\n\nReguła „trójkąta roboczego” pozwoli nam także wyróżnić podstawowe strefy: {{4}}. Należy pamiętać, aby naczynia czy garnki trzymać w wyznaczonych miejscach, bo wtedy łatwiej utrzymamy porządek. Dzięki takiej aranżacji nie będziemy {{5}}, a tym samym zaoszczędzimy czas.\n\nSzczególną rolę w kuchni odgrywa stół, który z jednej strony {{6}}, a z drugiej musi być funkcjonalny i wygodny, żeby znalazło się przy nim miejsce dla wszystkich domowników. Według wielu osób jest to {{7}} i nie wyobrażają sobie, aby mogło go zabraknąć. To przy nim spotyka się cała rodzina i wspólnie je posiłki.",
     "options": [
      {
       "id": "A",
       "text": "krojenia, zmywania, gotowania i pieczenia"
      },
      {
       "id": "B",
       "text": "najważniejszych sprzętów"
      },
      {
       "id": "C",
       "text": "rodzinne posiłki, w pośpiechu jemy śniadania"
      },
      {
       "id": "D",
       "text": "powinien stanowić element dekoracyjny"
      },
      {
       "id": "E",
       "text": "mniej niż 10 metrów kwadratowych"
      },
      {
       "id": "F",
       "text": "najważniejszy mebel w całym domu"
      },
      {
       "id": "G",
       "text": "od półtora do dwóch i pół metra"
      },
      {
       "id": "H",
       "text": "wykonywać niepotrzebnych ruchów"
      }
     ],
     "example": {
      "gap": "ex",
      "answer": "C",
      "shown": true
     },
     "items": [
      {
       "id": "r3.1",
       "number": 1,
       "gap": "1",
       "answer": "E"
      },
      {
       "id": "r3.2",
       "number": 2,
       "gap": "2",
       "answer": "B"
      },
      {
       "id": "r3.3",
       "number": 3,
       "gap": "3",
       "answer": "G"
      },
      {
       "id": "r3.4",
       "number": 4,
       "gap": "4",
       "answer": "A"
      },
      {
       "id": "r3.5",
       "number": 5,
       "gap": "5",
       "answer": "H"
      },
      {
       "id": "r3.6",
       "number": 6,
       "gap": "6",
       "answer": "D"
      },
      {
       "id": "r3.7",
       "number": 7,
       "gap": "7",
       "answer": "F"
      }
     ]
    },
    {
     "id": "r4",
     "number": "IV",
     "type": "match",
     "grading": "auto",
     "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z fragmentami tekstów z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
     "pointsFormula": "7 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 7,
     "pdfPage": 13,
     "source": "Na podstawie: https://tueuropa.pl/blog/2266/jak-oszcz-dzac-pieniadze-12-praktycznych-wskazowek",
     "heading": "Jak oszczędzać na zakupach?",
     "options": [
      {
       "id": "A",
       "text": "Są produkty, których ceny potrafią się zmienić z tygodnia na tydzień. Jeśli to możliwe, zrób zapasy tych, które mają długi termin ważności."
      },
      {
       "id": "B",
       "text": "Nieważne, czy robisz duże zakupy, czy tylko kupujesz chleb w piekarni – zapisuj wszystko, by mieć pełną kontrolę nad tym, ile i na co wydajesz."
      },
      {
       "id": "C",
       "text": "Kupuj z głową! Na przykład kup kurczaka, bo możesz zrobić z niego kotlety, rosół i pieczone udka."
      },
      {
       "id": "D",
       "text": "Otwórz lodówkę i sprawdź, co może być smacznym dodatkiem do zupy, pasztetu lub omleta. Czasem wystarczy odrobina kreatywności, by powstało zupełnie nowe danie."
      },
      {
       "id": "E",
       "text": "Nawet kiedy już zapiszesz wszystkie produkty, które planujesz kupić – zastanów się, czy na pewno są to niezbędne rzeczy. W sklepie bądź konsekwentny, nie kupuj niczego dodatkowego."
      },
      {
       "id": "F",
       "text": "Sposobów na wykorzystanie pieczywa jest wiele. Możesz z niego zrobić tosty, bułkę tartą, a nawet zupę. W internecie na pewno znajdziesz mnóstwo przepisów."
      },
      {
       "id": "G",
       "text": "Możesz zainstalować aplikacje Foodsi lub Too Good To Go, dzięki którym zamówisz smaczne potrawy w dużo niższych cenach."
      },
      {
       "id": "H",
       "text": "Określ tygodniowy budżet na posiłki oraz produkty spożywcze i zawsze płać za nie gotówką – w ten sposób nie wydasz więcej niż zaplanowałeś."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Notuj wszystkie wydatki",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Zrób dokładną listę zakupów",
       "answer": "E"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Nie płać kartą, jeśli chcesz kontrolować wydatki",
       "answer": "H"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Czasami więcej oznacza też taniej",
       "answer": "A"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Nowe technologie – korzystne promocje",
       "answer": "G"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Postaw na produkty, z których przygotujesz kilka obiadów",
       "answer": "C"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Zrób użytek ze starego chleba",
       "answer": "F"
      },
      {
       "id": "r4.7",
       "number": 7,
       "prompt": "Wykorzystaj resztki",
       "answer": "D"
      }
     ]
    },
    {
     "id": "r5",
     "number": "V",
     "type": "clozeChoice",
     "grading": "auto",
     "instruction": "V. Proszę – zgodnie z przykładem – podkreślić najlepszą spośród możliwości podanych w nawiasach.",
     "pointsFormula": "10 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 5,
     "pdfPage": 14,
     "title": "Zrozumieć pokolenie Alfa – kim są współcześni uczniowie?",
     "source": "Na podstawie: https://www.nowaera.pl/eduone/zrozumiec-pokolenie-alfa",
     "passage": "To najprawdopodobniej najbogatsze pokolenie, {{ex}} zróżnicowane kulturowo, z pełnym dostępem do informacji, czego nie doświadczyły wcześniejsze generacje.\n\nSpecjaliści od dawna poszukują wzorców zachowania młodzieży i próbują je {{1}}, a wszystko po to, aby lepiej zrozumieć społeczeństwo. Teraz do szkoły podstawowej chodzą młodzi reprezentanci generacji Alfa, którzy urodzili się już w erze cyfrowej. Co jeszcze warto {{2}} o dzisiejszych uczniach?\n\n{{3}} „pokolenie Alfa” wymyślił badacz Mark McCrindle w 2005 roku. Charakteryzuje w ten sposób osoby żyjące w XXI wieku, których zachowanie nadal stanowi tajemnicę dla naukowców: wychowują się w otoczeniu tabletów i smartfonów, czas {{4}} głównie w portalach społecznościowych, za swoje autorytety uznają influencerów z YouTube’a – świetnie poruszają się w internecie i nie {{5}} nudy. Jak uczą się dzieci z pokolenia Alfa? Oto kilka {{6}}, które je wyróżnia: nie potrafią się długo koncentrować, w zabawie i edukacji chętnie bazują na aplikacjach, kontakt za pośrednictwem techniki uważają za oczywisty.\n\nDlatego tak {{7}} jest komunikacja między pokoleniami połączona z wzajemnym uczeniem się. Starsi mogą {{8}} dzieciom świat bez technologii, kreatywne sposoby rozwoju i radość z {{9}} spędzania czasu na świeżym powietrzu. Od młodszego pokolenia na pewno dowiedzą się, jak być ludźmi {{10}} tolerancyjnymi i otwartymi na nowości.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "dużo",
        "wiele",
        "bardzo"
       ],
       "answer": "bardzo"
      },
      {
       "id": "1",
       "options": [
        "opisywać",
        "opowiadać",
        "odmieniać"
       ],
       "answer": "opisywać"
      },
      {
       "id": "2",
       "options": [
        "znać",
        "wiedzieć",
        "myśleć"
       ],
       "answer": "wiedzieć"
      },
      {
       "id": "3",
       "options": [
        "Imię",
        "Nazwę",
        "Tytuł"
       ],
       "answer": "Nazwę"
      },
      {
       "id": "4",
       "options": [
        "wykorzystują",
        "prowadzą",
        "spędzają"
       ],
       "answer": "spędzają"
      },
      {
       "id": "5",
       "options": [
        "czują",
        "mają",
        "trzymają"
       ],
       "answer": "czują"
      },
      {
       "id": "6",
       "options": [
        "wad",
        "zalet",
        "cech"
       ],
       "answer": "cech"
      },
      {
       "id": "7",
       "options": [
        "poważna",
        "ważna",
        "miła"
       ],
       "answer": "ważna"
      },
      {
       "id": "8",
       "options": [
        "podawać",
        "poznawać",
        "pokazywać"
       ],
       "answer": "pokazywać"
      },
      {
       "id": "9",
       "options": [
        "mobilnego",
        "aktywnego",
        "energicznego"
       ],
       "answer": "aktywnego"
      },
      {
       "id": "10",
       "options": [
        "bardziej",
        "więcej",
        "lepiej"
       ],
       "answer": "bardziej"
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
     "source": "Na podstawie: Organizacja przestrzeni. Czy krajobraz ma wpływ na nasze życie? (polskieradio.pl)",
     "passage": "Co roku, w {{ex1}}, obchodzimy {{ex2}} Dzień Krajobrazu. Jest {{ex3}} okazja, by pomyśleć, w jakich {{1}} czujemy się dobrze. Niektóre okolice działają na {{2}} pozytywnie, podczas gdy innych zdecydowanie nie lubimy. Z pewnością wszyscy chcemy, aby w {{3}} miejscowości było dużo terenów, gdzie czujemy się komfortowo.\n\nJak mówi Piotr Otrębski, rzecznik Generalnej Dyrekcji Ochrony Środowiska, warto rozmawiać z {{4}} o tym, że każdy może zmieniać {{5}}, w którym żyje na co dzień. Wystarczy uwierzyć w {{6}} kreatywność i nie bać się {{7}}. Planowanie nie jest tylko zadaniem dla architektów lub instytucji państwowych. Mieszkańcy powinni tworzyć {{8}} projekty i na szczęście dostajemy ich coraz więcej. Konsultacje społeczne pozwalają każdemu {{9}} wypowiedzieć się na temat jego {{10}} okolicy. Naprawdę warto zabrać głos w tej sprawie.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "października",
        "październiku",
        "październik"
       ],
       "answer": "październiku"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "Międzynarodowy",
        "Międzynarodowego",
        "Międzynarodowe"
       ],
       "answer": "Międzynarodowy"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "tego",
        "temu",
        "to"
       ],
       "answer": "to"
      },
      {
       "id": "1",
       "options": [
        "miejsca",
        "miejscach",
        "miejscu"
       ],
       "answer": "miejscach"
      },
      {
       "id": "2",
       "options": [
        "nas",
        "nam",
        "nami"
       ],
       "answer": "nas"
      },
      {
       "id": "3",
       "options": [
        "naszą",
        "nasza",
        "naszej"
       ],
       "answer": "naszej"
      },
      {
       "id": "4",
       "options": [
        "ludzie",
        "ludzi",
        "ludźmi"
       ],
       "answer": "ludźmi"
      },
      {
       "id": "5",
       "options": [
        "miastu",
        "miasto",
        "mieście"
       ],
       "answer": "miasto"
      },
      {
       "id": "6",
       "options": [
        "swojego",
        "swojej",
        "swoją"
       ],
       "answer": "swoją"
      },
      {
       "id": "7",
       "options": [
        "pomysłami",
        "pomysłów",
        "pomysły"
       ],
       "answer": "pomysłów"
      },
      {
       "id": "8",
       "options": [
        "nowi",
        "nowy",
        "nowe"
       ],
       "answer": "nowe"
      },
      {
       "id": "9",
       "options": [
        "mieszkańcu",
        "mieszkańcowi",
        "mieszkańcem"
       ],
       "answer": "mieszkańcowi"
      },
      {
       "id": "10",
       "options": [
        "najbliższej",
        "najbliższych",
        "najbliższą"
       ],
       "answer": "najbliższej"
      }
     ]
    },
    {
     "id": "g2",
     "number": "II",
     "type": "clozeBox",
     "grading": "auto",
     "instruction": "II. Proszę uzupełnić tekst wyrazami z ramki zgodnie z podanym przykładem (spójniki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
     "pointsFormula": "5 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 2.5,
     "pdfPage": 16,
     "source": "Na podstawie: https://www.gov.pl/web/edukacja-ekologiczna/miedzynarodowy-dzien-ziemi-fakty-o-naszej-planecie",
     "wordBox": [
      "lub",
      "jeśli",
      "ale",
      "ponieważ",
      "więc",
      "a",
      "żeby"
     ],
     "distractors": [
      "więc"
     ],
     "passage": "O ochronę środowiska naturalnego powinny dbać nie tylko wielkie firmy przemysłowe, {{ex}} także każdy z nas. O czym warto pamiętać?\n\n1) Nie wyrzucajmy jedzenia. Nie kupujmy produktów spożywczych w promocji, {{1}} ich aktualnie nie potrzebujemy.\n\n2) Do pracy możemy jeździć komunikacją miejską {{2}} rowerem. Rower nie emituje spalin, {{3}} jednocześnie zapewni nam codzienną porcję ruchu.\n\n3) Wyłączajmy światło oraz urządzenia elektryczne (komputer, radio, telewizor), z których w danej chwili nie korzystamy, {{4}} zaoszczędzić prąd.\n\n4) Zamiast kąpieli w wannie wybierajmy prysznic, {{5}} wtedy zużywamy zdecydowanie mniej wody.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "ale"
      },
      {
       "id": "1",
       "answer": "jeśli"
      },
      {
       "id": "2",
       "answer": "lub"
      },
      {
       "id": "3",
       "answer": "a"
      },
      {
       "id": "4",
       "answer": "żeby"
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
     "source": "Na podstawie: https://czytio.pl/blog/tablet-a-czytnik-ebook-na-czym-czytac-ebooki/",
     "passage": "Dlaczego warto mieć czytnik e-booków? Czy jest on {{ex1}} niż tablet? Czy wersje elektroniczne książek czyta się {{ex2}} niż papierowe? Na pytanie odpowiadają autorzy blogu Czytio.pl. Oto zalety posiadania e-booka, o których mówią.\n\nDla osób, które lubią spędzać czas z książką w podróży istotne jest to, że bateria e-booka funkcjonuje {{1}} od baterii tabletu. Czytanie jest też bardziej naturalne, ponieważ ekran e-ink okazuje się {{2}} tradycyjnej książce niż ekran cyfrowy. Ponadto z każdym rokiem e-book oferuje coraz {{3}} opcji czytania. Jeśli czytasz na słońcu, to e-book powinien być twoim wyborem – jakość jego ekranu jest {{4}} w jasnym świetle. Dodatkowo czytniki e-booków zazwyczaj ważą {{5}} od tabletów i mają niewielkie rozmiary, a więc są wygodne w użyciu.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "dobry",
        "lepszy",
        "najlepszy"
       ],
       "answer": "lepszy"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "szybko",
        "szybciej",
        "najszybciej"
       ],
       "answer": "szybciej"
      },
      {
       "id": "1",
       "options": [
        "dłużej",
        "dłuższa",
        "najdłużej"
       ],
       "answer": "dłużej"
      },
      {
       "id": "2",
       "options": [
        "najbliższy",
        "bliższy",
        "bliski"
       ],
       "answer": "bliższy"
      },
      {
       "id": "3",
       "options": [
        "większą",
        "najwięcej",
        "więcej"
       ],
       "answer": "więcej"
      },
      {
       "id": "4",
       "options": [
        "najwyższa",
        "wyżej",
        "najwyżej"
       ],
       "answer": "najwyższa"
      },
      {
       "id": "5",
       "options": [
        "mniejsze",
        "mniej",
        "najmniejsze"
       ],
       "answer": "mniej"
      }
     ]
    },
    {
     "id": "g4",
     "number": "IV",
     "type": "clozeForm",
     "grading": "auto+review",
     "instruction": "IV. Proszę – zgodnie z przykładami – uzupełnić tekst poprawnymi formami wyrazów podanych w nawiasach (czas teraźniejszy i przeszły).",
     "pointsFormula": "10 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 5,
     "pdfPage": 17,
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "Dwa lata temu nasza rodzina {{ex1}} z dużego miasta na wieś. Dziś {{ex2}} – mówią Agnieszka i jej mąż – że {{1}} najlepszą decyzję w naszym życiu. Dawniej, gdy {{2}} w mieście – wspomina kobieta – to bardzo {{3}} mi hałas uliczny. Dzieci {{4}} czekać na nas w przedszkolu do późna, bo mąż i ja często {{5}} w ogromnych korkach w drodze z pracy. Teraz oboje {{6}} ciszą, spokojem oraz czasem dla siebie i bliskich. Obecnie mąż {{7}} gospodarstwo, a ja {{8}} na pół etatu w domu kultury. Dzieci do przedszkola {{9}} tylko 5 minut spacerem. Jesteśmy bardzo szczęśliwi, że {{10}} w zgodzie z naturą. Za nic na świecie nie wrócilibyśmy do miasta!",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "przeprowadzić się",
       "answer": "przeprowadziła się"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "uważać",
       "answer": "uważamy"
      },
      {
       "id": "1",
       "given": "my – podjąć",
       "answer": "podjęliśmy"
      },
      {
       "id": "2",
       "given": "ja – mieszkać",
       "answer": "mieszkałam"
      },
      {
       "id": "3",
       "given": "przeszkadzać",
       "answer": "przeszkadzał"
      },
      {
       "id": "4",
       "given": "musieć",
       "answer": "musiały"
      },
      {
       "id": "5",
       "given": "stać",
       "answer": "staliśmy"
      },
      {
       "id": "6",
       "given": "cieszyć się",
       "answer": "cieszymy się"
      },
      {
       "id": "7",
       "given": "prowadzić",
       "answer": "prowadzi"
      },
      {
       "id": "8",
       "given": "pracować",
       "answer": "pracuję"
      },
      {
       "id": "9",
       "given": "iść",
       "answer": "idą"
      },
      {
       "id": "10",
       "given": "żyć",
       "answer": "żyjemy"
      }
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
      "sentence": "Basia czekała na męża na przystanku autobusowym.",
      "underlined": "na przystanku autobusowym",
      "stem": "…………… Basia czekała na męża?",
      "shortAnswer": "Na przystanku autobusowym.",
      "answer": "Gdzie",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Adam poszedł na niedzielny spacer z całą swoją rodziną.",
       "underlined": "z całą swoją rodziną",
       "stem": "…………… Adam poszedł na niedzielny spacer?",
       "shortAnswer": "Z całą swoją rodziną.",
       "answer": "Z kim",
       "accept": []
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "W tym roku państwo Sikorscy obchodzą dziesiątą rocznicę ślubu.",
       "underlined": "dziesiątą",
       "stem": "…………… rocznicę ślubu obchodzą w tym roku państwo Sikorscy?",
       "shortAnswer": "Dziesiątą.",
       "answer": "Którą",
       "accept": []
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Igor mieszka w Warszawie już prawie dwa lata.",
       "underlined": "już prawie dwa lata",
       "stem": "…………… Igor mieszka w Warszawie?",
       "shortAnswer": "Już prawie dwa lata.",
       "answer": "Jak długo",
       "accept": [
        "Ile czasu",
        "Ile lat"
       ]
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Przed domem stoi samochód mojego brata.",
       "underlined": "mojego brata",
       "stem": "…………… samochód stoi przed domem?",
       "shortAnswer": "Mojego brata.",
       "answer": "Czyj",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Michał podarował kwiaty swojej nauczycielce matematyki.",
       "underlined": "swojej nauczycielce matematyki",
       "stem": "…………… Michał podarował kwiaty?",
       "shortAnswer": "Swojej nauczycielce matematyki.",
       "answer": "Komu",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Official key prints the question word with decoration (Z kim...?, Którą…?); stored without it, match.stripChars ignores the decoration. Item 3 key lists three alternatives: Jak długo / Ile czasu / Ile lat."
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
      "source": "Już od miesiąca planujemy nasz letni urlop.",
      "hint": "myślimy",
      "answer": "Już od miesiąca myślimy o naszym letnim urlopie.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "Mąż Anny jest technikiem dentystycznym.",
       "hint": "pracuje jako",
       "answer": "Mąż Anny pracuje jako technik dentystyczny.",
       "rubric": "2 transformacje (2 x 0,5)",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 1.0
        }
       ]
      },
      {
       "id": "g6.2",
       "number": 2,
       "source": "Brak mi długich rozmów z przyjaciółką.",
       "hint": "Tęsknię za",
       "answer": "Tęsknię za długimi rozmowami z przyjaciółką.",
       "rubric": "2 transformacje (2 x 0,5)",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 1.0
        }
       ]
      },
      {
       "id": "g6.3",
       "number": 3,
       "source": "Jerzy często wspomina swoją pierwszą wycieczkę rowerową.",
       "hint": "opowiada o",
       "answer": "Jerzy często opowiada o swojej pierwszej wycieczce rowerowej.",
       "rubric": "4 transformacje (4 x 0,25)",
       "rubricParts": [
        {
         "what": "4 transformacje",
         "points": 1.0
        }
       ]
      },
      {
       "id": "g6.4",
       "number": 4,
       "source": "Jestem trochę wyższa niż moja siostra.",
       "hint": "od",
       "answer": "Jestem trochę wyższa od mojej siostry.",
       "rubric": "2 transformacje (2 x 0,5)",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 1.0
        }
       ]
      },
      {
       "id": "g6.5",
       "number": 5,
       "source": "W grupie astronautów są kobiety i mężczyźni.",
       "hint": "składa się z",
       "answer": "Grupa astronautów składa się z kobiet i mężczyzn.",
       "rubric": "usunięcie przyimka 0,25 p. + 3 transformacje (3 x 0,25)",
       "rubricParts": [
        {
         "what": "usunięcie przyimka",
         "points": 0.25
        },
        {
         "what": "3 transformacje",
         "points": 0.75
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
     "passage": "Adam: Hej! Przygotowaliście się do testu z gramatyki?\n\nPaweł: Niestety nie… Gdyby Hiszpanie nie {{ex1}} wczoraj z Polską meczu, byłaby szansa na naukę… Ale tak...\n\nAnia: {{ex2}} profesora o zmianę terminu! Co o tym myślicie?\n\nBasia: Dobry pomysł! Janku, {{1}} z profesorem – on bardzo cię lubi.\n\nJanek: Znowu ja? Dobrze, ale {{2}} potem, jeśli się nie uda!\n\nBasia: Zgoda, nie będziemy narzekać! A teraz {{3}}, bo zaczyna się lekcja!\n\nProfesor: Drodzy uczniowie! Czy {{4}} nie rozmawiać? {{5}} już zacząć lekcję.\n\nJanek: Przepraszamy bardzo! Panie profesorze, czy możemy nie pisać dzisiaj testu z gramatyki?\n\nProfesor: Dlaczego {{6}} go dzisiaj nie pisać, Janku?\n\nJanek: Niestety wczoraj zupełnie o nim zapomniałem, moi koledzy chyba też. Czy {{7}} pan przełożyć go na przyszły tydzień? {{8}} panu bardzo wdzięczni!\n\nProfesor: Dobrze, osoby nieprzygotowane {{9}} test za tydzień. Za chwilę odpytam tych, którzy jednak się na dziś nauczyli. A teraz niech Paweł {{10}} nam, o czym ostatnio mówiliśmy na lekcji...",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "grali",
        "graliby",
        "grają"
       ],
       "answer": "grali"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "Prośmy",
        "Prosiliby",
        "Poprośmy"
       ],
       "answer": "Poprośmy"
      },
      {
       "id": "1",
       "options": [
        "porozmawiałby",
        "porozmawiaj",
        "niech rozmawia"
       ],
       "answer": "porozmawiaj"
      },
      {
       "id": "2",
       "options": [
        "nie narzekaliby",
        "niech nie narzeka",
        "nie narzekajcie"
       ],
       "answer": "nie narzekajcie"
      },
      {
       "id": "3",
       "options": [
        "chodźmy",
        "niech chodzą",
        "chodzilibyście"
       ],
       "answer": "chodźmy"
      },
      {
       "id": "4",
       "options": [
        "mogliby",
        "moglibyście",
        "mogłybyście"
       ],
       "answer": "moglibyście"
      },
      {
       "id": "5",
       "options": [
        "Chciałbym",
        "Chciałby",
        "Chciej"
       ],
       "answer": "Chciałbym"
      },
      {
       "id": "6",
       "options": [
        "wolałby",
        "wolałybyście",
        "wolałbyś"
       ],
       "answer": "wolałbyś"
      },
      {
       "id": "7",
       "options": [
        "zgodziłby się",
        "zgadzałby się",
        "niech się zgodzi"
       ],
       "answer": "zgodziłby się"
      },
      {
       "id": "8",
       "options": [
        "Byliby",
        "Byłyby",
        "Bylibyśmy"
       ],
       "answer": "Bylibyśmy"
      },
      {
       "id": "9",
       "options": [
        "napisałby",
        "pisaliby",
        "niech napiszą"
       ],
       "answer": "niech napiszą"
      },
      {
       "id": "10",
       "options": [
        "przypomniałby",
        "przypomina",
        "przypomni"
       ],
       "answer": "przypomni"
      }
     ]
    },
    {
     "id": "g8",
     "number": "VIII",
     "type": "clozeBox",
     "grading": "auto",
     "instruction": "VIII. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (przyimki). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
     "pointsFormula": "5 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 2.5,
     "pdfPage": 20,
     "source": "Na podstawie: https://www.kawacaffe.pl/wloskie-miejsca-w-polsce/",
     "wordBox": [
      "dla",
      "z",
      "za",
      "przez",
      "u",
      "o",
      "na"
     ],
     "distractors": [
      "przez"
     ],
     "passage": "Planowałam, że {{ex}} tydzień będę {{1}} rodziny w Neapolu. Niestety okazało się, że nie mogę wziąć urlopu i muszę zostać w Polsce. Słucham więc włoskiej muzyki i spędzam czas {{2}} książką. Poprosiłam też koleżanki {{3}} polecenie mi miejsc, w których można poczuć się trochę jak na wakacjach we Włoszech. Marta powiedziała, że kiedy ma ochotę {{4}} włoski klimat, idzie do restauracji Ti Amo. Dlaczego akurat tam? Bo oprócz pysznej pizzy właściciele oferują gościom to, co typowe {{5}} Włoch – miłą atmosferę i piękną muzykę.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "za"
      },
      {
       "id": "1",
       "answer": "u"
      },
      {
       "id": "2",
       "answer": "z"
      },
      {
       "id": "3",
       "answer": "o"
      },
      {
       "id": "4",
       "answer": "na"
      },
      {
       "id": "5",
       "answer": "dla"
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
         "genre": "ogłoszenie",
         "wordTarget": 25,
         "prompt": "Chce Pani/Pan doskonalić swój język polski i w zamian uczyć w Polsce swojego języka. Proszę napisać ogłoszenie na tablicę w szkole językowej."
        },
        {
         "id": "b",
         "genre": "e-mail",
         "wordTarget": 175,
         "prompt": "W tym roku postanowiła Pani / postanowił Pan dbać o swoje zdrowie. W e-mailu do polskiej koleżanki / polskiego kolegi proszę napisać, co Pani/Pan robi, by dobrze się czuć i lepiej wyglądać."
        }
       ]
      },
      {
       "id": "II",
       "parts": [
        {
         "id": "a",
         "genre": "pozdrowienia",
         "wordTarget": 30,
         "prompt": "Proszę napisać pozdrowienia z zagranicznej podróży służbowej do polskiego kolegi lub polskiej koleżanki z pracy."
        },
        {
         "id": "b",
         "genre": "opis",
         "wordTarget": 170,
         "prompt": "Polski portal budowlany „Zmieniamy i Remontujemy“ ogłosił konkurs na najciekawszy opis domu lub mieszkania pt. „Mój dom wygląda teraz jak nowy“. Chce Pani/Pan wziąć w nim udział. Proszę napisać tekst, w którym opisze Pani/Pan swoje mieszkanie / swój dom po remoncie.",
         "title": "Mój dom wygląda teraz jak nowy"
        }
       ]
      },
      {
       "id": "III",
       "parts": [
        {
         "id": "a",
         "genre": "zaproszenie",
         "wordTarget": 30,
         "prompt": "Wyprowadza się Pani/Pan z Polski. Proszę napisać zaproszenie dla swoich polskich znajomych na kolację z tej okazji."
        },
        {
         "id": "b",
         "genre": "opowiadanie",
         "wordTarget": 170,
         "prompt": "Proszę napisać opowiadanie pod tytułem: „Prawdziwy przyjaciel zawsze ci pomoże”.",
         "title": "Prawdziwy przyjaciel zawsze ci pomoże"
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
