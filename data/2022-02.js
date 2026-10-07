window.EXAMS = window.EXAMS || {};
window.EXAMS["2022-02"] = {
 "schemaVersion": 1,
 "id": "2022-02",
 "meta": {
  "level": "B1",
  "labelPdf": "luty 2022",
  "examDates": "6-7.02.2022",
  "sources": {
   "test": "sources/2022-02/test.pdf",
   "transcript": "sources/2022-02/transcript.pdf",
   "audio": "sources/2022-02/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY). Word targets: set III is 40 + 160, sets I/II are 30 + 170 (sum 200).",
   "Reading V is the word-box variant (clozeBox: 11 words in the box = 10 answers + the example word 'serwujemy', no distractor).",
   "Listening V is a match table (national parks in column I -> statements A-F in column II, 5 x 1 p.).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear."
  ]
 },
 "audio": {
  "src": "sources/2022-02/audio.mp3",
  "duration": 1606.2,
  "intro": [
   0,
   46.5
  ],
  "readingTime": [
   46.5,
   107.0
  ],
  "tail": [
   1542.7,
   1606.2
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
       107.0,
       123.1
      ],
      "plays": [
       {
        "start": 138.5,
        "end": 290.8
       }
      ],
      "items": [
       {
        "ref": "l1.ex",
        "start": 138.5,
        "end": 147.7
       },
       {
        "ref": "l1.1",
        "start": 152.2,
        "end": 156.8
       },
       {
        "ref": "l1.2",
        "start": 161.3,
        "end": 166.3
       },
       {
        "ref": "l1.3",
        "start": 170.9,
        "end": 176.8
       },
       {
        "ref": "l1.4",
        "start": 181.2,
        "end": 187.3
       },
       {
        "ref": "l1.5",
        "start": 191.8,
        "end": 196.3
       },
       {
        "ref": "l1.6",
        "start": 200.9,
        "end": 208.1
       },
       {
        "ref": "l1.7",
        "start": 212.4,
        "end": 218.1
       },
       {
        "ref": "l1.8",
        "start": 222.8,
        "end": 228.2
       },
       {
        "ref": "l1.9",
        "start": 232.8,
        "end": 238.5
       },
       {
        "ref": "l1.10",
        "start": 243.1,
        "end": 248.1
       },
       {
        "ref": "l1.11",
        "start": 252.7,
        "end": 258.0
       },
       {
        "ref": "l1.12",
        "start": 262.5,
        "end": 267.4
       },
       {
        "ref": "l1.13",
        "start": 272.0,
        "end": 279.0
       },
       {
        "ref": "l1.14",
        "start": 283.7,
        "end": 290.8
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
        "text": "w kwiaciarni."
       },
       {
        "id": "b",
        "text": "u fryzjera."
       },
       {
        "id": "c",
        "text": "na poczcie."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "sp": "K",
       "t": "Róże czy tulipany?"
      }
     },
     "items": [
      {
       "id": "l1.1",
       "number": 1,
       "prompt": "Ta wypowiedź oznacza, że ona",
       "options": [
        {
         "id": "a",
         "text": "pracuje za wolno."
        },
        {
         "id": "b",
         "text": "straciła pracę."
        },
        {
         "id": "c",
         "text": "szuka pracy."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Szef zwolnił mnie z pracy."
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "zainteresowanie."
        },
        {
         "id": "b",
         "text": "niezadowolenie."
        },
        {
         "id": "c",
         "text": "radość."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "W życiu się tak nie nudziłem w kinie!"
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w restauracji."
        },
        {
         "id": "b",
         "text": "w sklepie."
        },
        {
         "id": "c",
         "text": "w pociągu."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Miejsce przy oknie jest moje. Proszę się przesiąść."
       }
      },
      {
       "id": "l1.4",
       "number": 4,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w bibliotece."
        },
        {
         "id": "b",
         "text": "w księgarni."
        },
        {
         "id": "c",
         "text": "w kiosku."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Tę książkę może pan wypożyczyć na trzy tygodnie."
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "uspokojenie."
        },
        {
         "id": "b",
         "text": "zainteresowanie."
        },
        {
         "id": "c",
         "text": "irytację."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Ta piosenka mnie denerwuje."
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź oznacza, że klient",
       "options": [
        {
         "id": "a",
         "text": "poleca innym ten zakup."
        },
        {
         "id": "b",
         "text": "nie jest zadowolony z zakupu."
        },
        {
         "id": "c",
         "text": "musi się zastanowić."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Kupiłem w tym sklepie szafę, chciałbym złożyć reklamację."
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "na przystanku autobusowym."
        },
        {
         "id": "b",
         "text": "na ścieżce rowerowej."
        },
        {
         "id": "c",
         "text": "na dworcu kolejowym."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Rowery można przewozić w ostatnim wagonie."
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź oznacza, że on",
       "options": [
        {
         "id": "a",
         "text": "jest silny."
        },
        {
         "id": "b",
         "text": "jest zmęczony."
        },
        {
         "id": "c",
         "text": "jest biedny."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Nie mam już siły więcej pracować."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w przychodni."
        },
        {
         "id": "b",
         "text": "w barze."
        },
        {
         "id": "c",
         "text": "w cukierni."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Ten syrop należy pić codziennie po jedzeniu."
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "ciekawość."
        },
        {
         "id": "b",
         "text": "krytykę."
        },
        {
         "id": "c",
         "text": "niepewność."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Jak mogłaś powiedzieć coś takiego?"
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź oznacza, że on",
       "options": [
        {
         "id": "a",
         "text": "sprzedał wszystkie meble."
        },
        {
         "id": "b",
         "text": "kupił dom z meblami."
        },
        {
         "id": "c",
         "text": "ma w domu nowe meble."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Wreszcie umeblowałem swój dom!"
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "pochwała."
        },
        {
         "id": "b",
         "text": "krytyka."
        },
        {
         "id": "c",
         "text": "zakaz."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Nikt nie zrobiłby tego lepiej!"
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w pociągu."
        },
        {
         "id": "b",
         "text": "w samolocie."
        },
        {
         "id": "c",
         "text": "w biurze podróży."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Przed wylotem na wakacje chciałbym ubezpieczyć bagaż."
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź oznacza, że ona",
       "options": [
        {
         "id": "a",
         "text": "płaci teraz wyższy czynsz."
        },
        {
         "id": "b",
         "text": "zmieniła mieszkanie."
        },
        {
         "id": "c",
         "text": "będzie płacić 70 zł."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Opłaty za mieszkanie wzrosły o siedemdziesiąt złotych."
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
     "pdfPages": [
      4,
      5
     ],
     "audio": {
      "announce": [
       301.8,
       317.8
      ],
      "plays": [
       {
        "start": 328.1,
        "end": 468.6
       },
       {
        "start": 514.6,
        "end": 655.1
       }
      ],
      "pauseBetweenPlays": 46.0,
      "items": [
       {
        "ref": "l2.ex",
        "start": 328.1,
        "end": 341.4
       },
       {
        "ref": "l2.1",
        "start": 348.9,
        "end": 356.9
       },
       {
        "ref": "l2.2",
        "start": 363.7,
        "end": 373.1
       },
       {
        "ref": "l2.3",
        "start": 380.0,
        "end": 387.6
       },
       {
        "ref": "l2.4",
        "start": 394.0,
        "end": 402.1
       },
       {
        "ref": "l2.5",
        "start": 408.9,
        "end": 416.3
       },
       {
        "ref": "l2.6",
        "start": 423.1,
        "end": 434.3
       },
       {
        "ref": "l2.7",
        "start": 441.5,
        "end": 452.7
       },
       {
        "ref": "l2.8",
        "start": 459.6,
        "end": 468.6
       }
      ],
      "source": "auto-silencedetect",
      "verified": false
     },
     "example": {
      "id": "l2.ex",
      "prompt": "Z tego dialogu wynika, że Adam",
      "options": [
       {
        "id": "a",
        "text": "słucha głośnej muzyki."
       },
       {
        "id": "b",
        "text": "nie wykonuje poleceń."
       },
       {
        "id": "c",
        "text": "ma kłopoty ze słuchem."
       }
      ],
      "answer": "b",
      "shown": true,
      "transcript": {
       "lines": [
        {
         "sp": "K",
         "t": "Adam, wyłącz tę okropną muzykę!"
        },
        {
         "sp": "M",
         "t": "Ten chłopak nikogo nie słucha."
        }
       ]
      }
     },
     "items": [
      {
       "id": "l2.1",
       "number": 1,
       "prompt": "Z tego dialogu wynika, że mężczyzna",
       "options": [
        {
         "id": "a",
         "text": "umawia się na wizytę w poradni."
        },
        {
         "id": "b",
         "text": "organizuje spotkanie biznesowe."
        },
        {
         "id": "c",
         "text": "pyta o koszt badań."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Czy ma pan skierowanie na badania?"
         },
         {
          "sp": "M",
          "t": "Tak, na kiedy mogę się umówić?"
         }
        ]
       }
      },
      {
       "id": "l2.2",
       "number": 2,
       "prompt": "Z tego dialogu wynika, że kobiety",
       "options": [
        {
         "id": "a",
         "text": "spóźniły się na autobus."
        },
        {
         "id": "b",
         "text": "jadą autobusem."
        },
        {
         "id": "c",
         "text": "czekają na autobus."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Popatrz, autobus przyjedzie dopiero za osiem minut."
         },
         {
          "sp": "K",
          "t": "Niepotrzebnie tak się spieszyłyśmy."
         }
        ]
       }
      },
      {
       "id": "l2.3",
       "number": 3,
       "prompt": "Z tego dialogu wynika, że kobieta",
       "options": [
        {
         "id": "a",
         "text": "woli gorzką herbatę."
        },
        {
         "id": "b",
         "text": "prosi o cukier."
        },
        {
         "id": "c",
         "text": "nie chce herbaty."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Pije pani herbatę z cukrem czy bez?"
         },
         {
          "sp": "K",
          "t": "Dziękuję, cytryna wystarczy."
         }
        ]
       }
      },
      {
       "id": "l2.4",
       "number": 4,
       "prompt": "Z tego dialogu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "potrawy były smaczne."
        },
        {
         "id": "b",
         "text": "dania były drogie."
        },
        {
         "id": "c",
         "text": "ona nie jest zadowolona z kolacji."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Smakowała ci kolacja u Ani?"
         },
         {
          "sp": "K",
          "t": "Ania musi się jeszcze wiele nauczyć."
         }
        ]
       }
      },
      {
       "id": "l2.5",
       "number": 5,
       "prompt": "Z tego dialogu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "zaczął padać deszcz."
        },
        {
         "id": "b",
         "text": "może zacząć padać deszcz."
        },
        {
         "id": "c",
         "text": "podczas deszczu łatwo o wypadek."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Wychodzę z kolegami na rower."
         },
         {
          "sp": "K",
          "t": "Weź coś na wypadek deszczu."
         }
        ]
       }
      },
      {
       "id": "l2.6",
       "number": 6,
       "prompt": "Z tego dialogu wynika, że mężczyzna",
       "options": [
        {
         "id": "a",
         "text": "odbierze paczkę w domu."
        },
        {
         "id": "b",
         "text": "odbierze paczkę w innym miejscu."
        },
        {
         "id": "c",
         "text": "zwraca paczkę."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Jutro dostarczymy paczkę na pana adres domowy."
         },
         {
          "sp": "M",
          "t": "Będę cały dzień w pracy. Podaję nowy adres dostawy."
         }
        ]
       }
      },
      {
       "id": "l2.7",
       "number": 7,
       "prompt": "Z tego dialogu wynika, że oni",
       "options": [
        {
         "id": "a",
         "text": "sami znajdą drogę."
        },
        {
         "id": "b",
         "text": "zmienią plany."
        },
        {
         "id": "c",
         "text": "nie dojadą na miejsce."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Och, zobacz, nasza nawigacja w samochodzie nie działa."
         },
         {
          "sp": "K",
          "t": "Nie martw się, poradzimy sobie bez niej."
         }
        ]
       }
      },
      {
       "id": "l2.8",
       "number": 8,
       "prompt": "Z tego dialogu wynika, że samochód",
       "options": [
        {
         "id": "a",
         "text": "jest sprawny."
        },
        {
         "id": "b",
         "text": "należy sprzedać."
        },
        {
         "id": "c",
         "text": "trzeba naprawić."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Czy problem jest poważny?"
         },
         {
          "sp": "M",
          "t": "To hamulce. Musi pani zostawić samochód w warsztacie."
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
     "prompt": "Proszę wysłuchać wywiadu ze zdobywcą tytułu Najlepszy Pracodawca w Polsce i zaznaczyć właściwe odpowiedzi.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: https://innpoland.pl/122713,traktuje-swoich-pracownikow",
     "audio": {
      "announce": [
       670.3,
       686.0
      ],
      "plays": [
       {
        "start": 696.2,
        "end": 790.4
       },
       {
        "start": 836.2,
        "end": 930.3
       }
      ],
      "pauseBetweenPlays": 45.8,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Dziennikarka",
        "t": "Zdobył pan tytuł Najlepszego Pracodawcy w Polsce. Pokonał pan stu innych kandydatów. Jak powinien postępować szef, by jego pracownicy byli zadowoleni?"
       },
       {
        "sp": "Mężczyzna",
        "t": "Traktuję wszystkich tak, jak sam chciałbym być traktowany. Nie chciałbym, żeby praca mnie ograniczała, dlatego mój zespół może sam wybrać miejsce i czas pracy."
       },
       {
        "sp": "Dziennikarka",
        "t": "A jak stworzyć dobrą atmosferę w pracy?"
       },
       {
        "sp": "Mężczyzna",
        "t": "Chcę, żeby pracownicy dobrze znali swoją firmę i wiedzieli, jak ona funkcjonuje. Niczego nie ukrywam i daję im dostęp do wielu informacji."
       },
       {
        "sp": "Dziennikarka",
        "t": "Czy pracownicy wiedzą, ile kto zarabia?"
       },
       {
        "sp": "Mężczyzna",
        "t": "Zależy mi, żeby pracownicy dużo wiedzieli o firmie, ale nie dotyczy to wynagrodzenia. Tych informacji nie przekazuję innym."
       },
       {
        "sp": "Dziennikarka",
        "t": "Na co jeszcze mogą liczyć pana pracownicy?"
       },
       {
        "sp": "Mężczyzna",
        "t": "Chcę, by pracownicy cały czas się rozwijali, organizuję im różne warsztaty i seminaria. W mojej firmie nikt się nie nudzi. Wybieram też takie projekty, które wymagają od nich kreatywności i pomysłowości."
       },
       {
        "sp": "Dziennikarka",
        "t": "Czy relacje pomiędzy pracownikami są ważne?"
       },
       {
        "sp": "Mężczyzna",
        "t": "Bardzo. Dwa razy w roku organizuję wyjazdy integracyjne. Dzięki temu możemy się bliżej poznać w mniej formalnych sytuacjach."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "prompt": "Tytuł Najlepszego Pracodawcy w Polsce",
      "options": [
       {
        "id": "a",
        "text": "otrzymała jedna osoba."
       },
       {
        "id": "b",
        "text": "nie został przyznany."
       },
       {
        "id": "c",
        "text": "otrzymało stu pracodawców."
       }
      ],
      "answer": "a",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "prompt": "Według pracodawcy jego pracownicy",
       "options": [
        {
         "id": "a",
         "text": "za bardzo go kontrolują."
        },
        {
         "id": "b",
         "text": "decydują, gdzie chcą pracować."
        },
        {
         "id": "c",
         "text": "mają za dużo czasu."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.2",
       "number": 2,
       "prompt": "Dane o wysokości pensji kolegów",
       "options": [
        {
         "id": "a",
         "text": "są dostępne dla wszystkich."
        },
        {
         "id": "b",
         "text": "są omawiane na zebraniach."
        },
        {
         "id": "c",
         "text": "nie są znane pracownikom."
        }
       ],
       "answer": "c"
      },
      {
       "id": "l3.3",
       "number": 3,
       "prompt": "Pracownicy firmy",
       "options": [
        {
         "id": "a",
         "text": "mogą brać udział w szkoleniach."
        },
        {
         "id": "b",
         "text": "sami płacą za różne szkolenia."
        },
        {
         "id": "c",
         "text": "prowadzą kursy dla innych."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l3.4",
       "number": 4,
       "prompt": "Pracodawca szuka projektów, które",
       "options": [
        {
         "id": "a",
         "text": "będą łatwe dla pracowników."
        },
        {
         "id": "b",
         "text": "będą interesujące dla pracowników."
        },
        {
         "id": "c",
         "text": "pozwolą mu więcej zarobić."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.5",
       "number": 5,
       "prompt": "Pracownicy co jakiś czas",
       "options": [
        {
         "id": "a",
         "text": "organizują konferencje."
        },
        {
         "id": "b",
         "text": "odwiedzają szefa w domu."
        },
        {
         "id": "c",
         "text": "wspólnie wyjeżdżają."
        }
       ],
       "answer": "c"
      }
     ],
     "pdfNotes": [
      "Printed source is shortened in the booklet; the transcript prints the full URL."
     ]
    },
    {
     "id": "l4",
     "number": "IV",
     "type": "tf",
     "grading": "auto",
     "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę posłuchać rozmowy na temat rutyny dnia królowej Elżbiety II i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://styl.interia.pl/gwiazdy/slawni/news-z-zegarkiem-w-reku,nId,594906",
     "audio": {
      "announce": [
       946.1,
       962.0
      ],
      "plays": [
       {
        "start": 972.2,
        "end": 1061.7
       },
       {
        "start": 1108.3,
        "end": 1197.7
       }
      ],
      "pauseBetweenPlays": 46.6,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Kobieta",
        "t": "Wczoraj oglądałam ciekawy program o królowej Elżbiecie. Wiedziałeś, że zamiast zwykłego budzika królowa używa dźwięku tradycyjnego drewnianego instrumentu, który bardzo lubi?"
       },
       {
        "sp": "Mężczyzna",
        "t": "Naprawdę? Myślałem, że królowa śpi tak długo, aż się wyśpi i nikt ani nic jej nie budzi."
       },
       {
        "sp": "Kobieta",
        "t": "Królowa Elżbieta II zaczyna swój dzień o 7.30. Dowiedziałam się, że na śniadanie zazwyczaj wybiera płatki, owsiankę, tost z dżemem pomarańczowym lub jajecznicę, zwykle nie je rano mięsa. Po śniadaniu królowa zaczyna pracę. W swoim biurze czyta listy, odpowiada na korespondencję i podpisuje oficjalne dokumenty. Królowa nie korzysta z pomocy sekretarek, wszystko robi samodzielnie. Kolejnym bardzo ważnym elementem jej dnia są spotkania. Podobno królowa Elżbieta II jest bardzo zorganizowaną osobą i każde spotkanie z nią trwa około 20 minut. Co ciekawe wie, kiedy ten czas minął bez patrzenia na zegarek. Zwykle wieczorami królowa czyta raporty z dyskusji parlamentarnych, natomiast w każdą środę spotyka się z premierem Wielkiej Brytanii. Rozmawiają o aktualnych sprawach politycznych. Po pracy królowa uwielbia spacery z psami i jazdę konną."
       }
      ]
     },
     "example": {
      "id": "l4.ex",
      "statement": "Królową budzi jej ulubiony instrument.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "statement": "Królowa zwykle je bezmięsne śniadanie.",
       "answer": "TAK"
      },
      {
       "id": "l4.2",
       "number": 2,
       "statement": "Sekretarki pomagają królowej w biurowych obowiązkach.",
       "answer": "NIE"
      },
      {
       "id": "l4.3",
       "number": 3,
       "statement": "Królowa podczas spotkań co 20 min kontroluje czas.",
       "answer": "NIE"
      },
      {
       "id": "l4.4",
       "number": 4,
       "statement": "Wieczorami Elżbieta II czyta literaturę kryminalną.",
       "answer": "NIE"
      },
      {
       "id": "l4.5",
       "number": 5,
       "statement": "Królowa regularnie spotyka się z premierem Wielkiej Brytanii.",
       "answer": "TAK"
      }
     ]
    },
    {
     "id": "l5",
     "number": "V",
     "type": "match",
     "grading": "auto",
     "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać rozmowy o parkach narodowych w Polsce oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 7,
     "source": "Na podstawie: https://hasajacezajace.com/parki-narodowe-w-polsce/",
     "audio": {
      "announce": [
       1214.0,
       1230.0
      ],
      "plays": [
       {
        "start": 1240.2,
        "end": 1357.1
       },
       {
        "start": 1403.3,
        "end": 1520.2
       }
      ],
      "pauseBetweenPlays": 46.2,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Redaktor",
        "t": "Witam w programie „Polska na weekend”. Dziś moimi gośćmi są podróżnicy i blogerzy, z którymi porozmawiam o parkach narodowych. Proszę powiedzieć, które miejsca udało wam się odwiedzić i co jest w nich charakterystycznego."
       },
       {
        "sp": "Mężczyzna",
        "t": "W Polsce mamy 23 parki narodowe, a my byliśmy w sześciu z nich. Białowieski Park Narodowy położony jest tuż przy granicy z Białorusią. Jest drugim najstarszym parkiem narodowym w Polsce, a jego symbolem jest żubr."
       },
       {
        "sp": "Kobieta",
        "t": "W Parku Narodowym Bory Tucholskie znajduje się 21 jezior oraz kilka rzek, które tworzą unikatowe środowisko, a lasy i łąki zajmują niewielki obszar , bo tylko 2% całego parku. Kampinoski Park Narodowy jest bardzo blisko Warszawy. Są tam liczne szlaki piesze o długości około 360 km oraz trasa rowerowa o długości 145 km."
       },
       {
        "sp": "Mężczyzna",
        "t": "Ojcowski Park Narodowy warto zobaczyć przede wszystkim ze względu na wyjątkowy kolor skał. Są one niewysokie i białe. Na jego terenie znajdują się też ruiny zamku oraz pałac, które można zwiedzać przez cały rok."
       },
       {
        "sp": "Kobieta",
        "t": "Kiedy byliśmy na Śląsku naszą uwagę zwrócił piękny teren, na którym prawdopodobnie będzie Jurajski Park Narodowy. Jeśli powstanie w tym miejscu, to będzie jednym z najmniejszych parków w kraju."
       },
       {
        "sp": "Mężczyzna",
        "t": "W Parku Narodowym Gór Stołowych jest pięknie i tajemniczo. Są tutaj fantazyjne formy skalne, oryginalne struktury kamieni oraz naturalny labirynt."
       }
      ]
     },
     "options": [
      {
       "id": "A",
       "text": "jest dopiero planowany."
      },
      {
       "id": "B",
       "text": "jest jednym z pierwszych parków narodowych w Polsce."
      },
      {
       "id": "C",
       "text": "oferuje turystom różne zabytki."
      },
      {
       "id": "D",
       "text": "to miejsce, w którym są nietypowe kształty skał."
      },
      {
       "id": "E",
       "text": "ma dobrą ofertę dla osób aktywnych fizycznie."
      },
      {
       "id": "F",
       "text": "to miejsce, w którym woda zajmuje największy teren."
      }
     ],
     "example": {
      "id": "l5.ex",
      "prompt": "Białowieski Park Narodowy",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "l5.1",
       "number": 1,
       "prompt": "Park Narodowy Bory Tucholskie",
       "answer": "F"
      },
      {
       "id": "l5.2",
       "number": 2,
       "prompt": "Kampinoski Park Narodowy",
       "answer": "E"
      },
      {
       "id": "l5.3",
       "number": 3,
       "prompt": "Ojcowski Park Narodowy",
       "answer": "C"
      },
      {
       "id": "l5.4",
       "number": 4,
       "prompt": "Jurajski Park Narodowy",
       "answer": "A"
      },
      {
       "id": "l5.5",
       "number": 5,
       "prompt": "Park Narodowy Gór Stołowych",
       "answer": "D"
      }
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
       "text": "„Od najmłodszych lat chciałam zostać nauczycielką. I tak się stało. Do tego zawodu zachęciła mnie moja polonistka ze szkoły podstawowej, która była bardzo kreatywną osobą” – tymi słowami rozpoczyna się wywiad z najlepszą nauczycielką roku.",
       "source": "Na podstawie: https://tygodnik.interia.pl/news-nauczyciel-roku-2019-pracujemy-40-godzin-tygodniowo-tak-jak-,nId,5569451#utm_source=paste&utm_medium=paste&utm_campaign=chrome"
      },
      "prompt": "Z tego tekstu wynika, że kobieta, z którą był wywiad,",
      "options": [
       {
        "id": "a",
        "text": "nie wybrała zawodu nauczyciela."
       },
       {
        "id": "b",
        "text": "już w dzieciństwie chciała zostać nauczycielką."
       },
       {
        "id": "c",
        "text": "pracuje w szkole podstawowej."
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
        "text": "Firma Apple pracuje nad nowymi funkcjami smartfona. Jedną z nich będzie aplikacja, która pomoże zdiagnozować różne problemy psychiczne, m.in. depresję. Jeśli aplikacja rozpozna objawy choroby, to system wygeneruje skierowanie do lekarza specjalisty.",
        "source": "Na podstawie: https://www.polsatnews.pl/wiadomosc/2021-09-22/usa-apple-pracuje-nad-algorytmem-ktory-ma-wykryc-m-in-depresje-ma-to-byc-funkcja-iphona/?ref=slider_1491578"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "w przyszłości smartfony będą rozpoznawać choroby."
        },
        {
         "id": "b",
         "text": "nowe smartfony już diagnozują choroby."
        },
        {
         "id": "c",
         "text": "nowa aplikacja poinformuje, jak wyleczyć depresję."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "Wśród uczestników castingu do kolejnej edycji programu sportowego znalazło się wiele wysportowanych pań. Były one bardzo silne i sprawne fizycznie, dlatego wzięły udział w półfinale programu, ale do finału dostali się tylko mężczyźni.",
        "source": "Na podstawie: https://www.polsat.pl/news/2021-10-08/prowadzacy-o-finale-czwartej-edycji-ninja-warrior-polska/"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "kobiety pokazały, że mają większą siłę niż mężczyźni."
        },
        {
         "id": "b",
         "text": "kobiety nie wzięły udziału w finale programu sportowego."
        },
        {
         "id": "c",
         "text": "w finale programu są mężczyźni i kobiety."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Grupa polskich turystów miała problem z powrotem do domu. Ich wylot do Polski był zaplanowany w południe, ale samolot nie przyleciał na lotnisko. Dzięki interwencji biura podróży wszyscy turyści około 23.00 wrócili do kraju.",
        "source": "Na podstawie: https://www.polsatnews.pl/wiadomosc/2021-10-08/grecja-polscy-turysci-utkneli-na-lotnisku-w-zakynthos-nie-wiemy-czy-dolecimy-do-polski/?ref=1491574."
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "biuro podróży nie pomogło w organizacji powrotu turystów do domu."
        },
        {
         "id": "b",
         "text": "turyści wrócili do Polski następnego dnia o 12:00."
        },
        {
         "id": "c",
         "text": "samolot nie wystartował o godzinie 12.00."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Jazda samochodem po drogach szybkiego ruchu nie jest elementem kursu na prawo jazdy. Z tego powodu ci, którzy niedawno zdobyli uprawnienia do kierowania samochodem, nie potrafią jeździć po autostradach. Dla takich osób powstał w Poznaniu kurs jazdy autostradą.",
        "source": "Na podstawie: https://www.polsatnews.pl/wiadomosc/2021-09-23/poznan-rusza-kurs-jazdy-po-autostradzie-pierwszy-taki-w-polsce/?ref=1494004."
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "kurs jazdy po autostradzie jest dla osób, które już mają prawo jazdy."
        },
        {
         "id": "b",
         "text": "w wielu szkołach można uczyć się jeździć autostradą."
        },
        {
         "id": "c",
         "text": "autostradą nie umieją jeździć doświadczeni kierowcy."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "Jeśli kolejny raz zostanę wybrany na prezesa Narodowego Banku Polskiego, będę chciał wprowadzić nowy banknot o nominale 1000 złotych – powiedział Adam Glapiński w wywiadzie dla jednej z polskich gazet.",
        "source": "Na podstawie: https://www.polsatnews.pl/wiadomosc/2021-10-05/banknot-1000-zl-pierwszy-z-wizerunkiem-kobiety/?ref=1491575"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "niedługo w Polsce zostanie wprowadzony banknot 1000 złotych."
        },
        {
         "id": "b",
         "text": "obecnie w Polsce nie ma banknotu 1000 złotych."
        },
        {
         "id": "c",
         "text": "Adam Glapiński ponownie zostanie prezesem Narodowego Banku Polskiego."
        }
       ],
       "answer": "b"
      }
     ],
     "pdfNotes": [
      "Source URLs wrap over two lines in the booklet and are re-joined without a space; items 3 and 4 print a trailing '.' after the URL."
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
     "title": "Zrezygnujcie czasami z prysznica!",
     "source": "Na podstawie: https://www.medonet.pl/zdrowie/zdrowie-dla-kazdego",
     "passage": "Podobno każdy człowiek powinien myć się codziennie. Obecnie często robimy to dla przyjemności lub tylko dlatego, że tak trzeba. Nie jesteśmy brudni, ale każdego dnia musimy wziąć prysznic, bo tak zostaliśmy nauczeni. Czy to jest zdrowe?\n\nNie prosimy was, żebyście przestali się myć, tak jak np. Święta Agnieszka, która prawdopodobnie w całym życiu nie umyła się nigdy, czy Święta Olimpia, która myła się tylko, gdy była chora. Prosimy jedynie o refleksję na temat higieny osobistej.\n\nJeśli często bierzecie prysznic, to wasza skóra ma mniej czasu na regenerację i robi się sucha oraz czerwona. Zwiększa to niebezpieczeństwo, że pojawią się problemy zdrowotne. Choć trudno w to uwierzyć, ale brud jest dla naszego ciała ważny. Pomaga on skórze chronić organizm przed infekcjami. Gdy myjemy się za często, to nie mamy dobrych bakterii, które mają korzystny wpływ na nasz organizm. Ponadto naukowcy informują, że jeśli zbyt często się myjemy, możemy mieć problemy z żołądkiem lub sercem. Ratunkiem na to wszystko jest rzadsze kąpanie się. Eksperci radzą, żeby brać prysznic kilka razy w tygodniu i używać mniej mydła, które też źle wpływa na skórę.\n\nPamiętajcie, że jeśli bardzo nie chcecie rezygnować z codziennych kąpieli, to dobrze jest skrócić ich długość do 3 lub 4 minut i myć tylko niektóre części ciała. Dzięki temu pomożecie nie tylko sobie, ale zadbacie też o środowisko.",
     "example": {
      "id": "r2.ex",
      "statement": "W tytule artykułu autor proponuje, żeby ludzie myli się rzadziej.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Tekst informuje o negatywnych skutkach częstych kąpieli.",
       "answer": "TAK"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Kąpiemy się często, ponieważ jesteśmy brudni.",
       "answer": "NIE"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Autorzy artykułu uważają, że powinniśmy brać przykład ze Świętej Agnieszki i Świętej Olimpii.",
       "answer": "NIE"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Jeśli będziemy myć się rzadziej, to będziemy zdrowsi.",
       "answer": "TAK"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Według specjalistów należy zrezygnować z kosmetyków do kąpieli.",
       "answer": "NIE"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Warto mniej czasu spędzać w wannie.",
       "answer": "TAK"
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
     "title": "Sport i ćwiczenia dla seniorów",
     "source": "Na podstawie: https://www.c-and-a.com/pl/pl/shop/sport-i-cwiczenia-dla-seniorow",
     "passage": "Regularne uprawianie sportu jest bardzo ważne, {{ex}}. Po przejściu na emeryturę mamy więcej wolnego czasu, który można przeznaczyć na aktywność fizyczną. Niektóre dyscypliny są idealne dla seniorów, {{1}}. Jaki sport najlepiej uprawiać po 65. roku życia?\n\nPierwszą propozycją jest gimnastyka w wodzie. Są to po prostu ćwiczenia na pływalni. Odbywają się one w głębokim basenie po to, {{2}}. Jest to konieczne, aby dobrze wykonywać ćwiczenia. Dla bezpieczeństwa {{3}}. Jest ono potrzebne, aby się nie utopić.\n\nDrugi pomysł to nordic walking dla seniorów, {{4}}. Trening polega na tym, że trzymamy w rękach kije i szybkim tempem idziemy po wybranej drodze. Zazwyczaj ten sport jest uprawiany w lasach lub parkach, {{5}}.\n\nOstatnia propozycja to turystyka piesza. Prawie wszyscy lubią wycieczki, ale nie wszyscy wiedzą, {{6}}. Sami kontrolujemy tempo chodzenia oraz wybieramy trasę wędrówki. Najlepiej zwiedzać różne nowe miejsca z grupą, w której są osoby w naszym wieku, {{7}}. Przynajmniej jeden z nich jest w każdym dużym mieście, a dokładne informacje na ten temat można znaleźć w internecie.",
     "options": [
      {
       "id": "A",
       "text": "czyli popularne spacery z kijami"
      },
      {
       "id": "B",
       "text": "a inne można dla nich trochę zmodyfikować"
      },
      {
       "id": "C",
       "text": "ponieważ pomaga utrzymać dobrą kondycję fizyczną"
      },
      {
       "id": "D",
       "text": "że to też jest rodzaj sportu"
      },
      {
       "id": "E",
       "text": "żeby osoby nie mogły dotykać stopami dna basenu"
      },
      {
       "id": "F",
       "text": "czyli na świeżym powietrzu"
      },
      {
       "id": "G",
       "text": "każda z osób ma specjalne ubranie"
      },
      {
       "id": "H",
       "text": "dlatego warto zapisać się do klubu seniora"
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
       "answer": "B"
      },
      {
       "id": "r3.2",
       "number": 2,
       "gap": "2",
       "answer": "E"
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
       "answer": "F"
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
       "answer": "H"
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
     "source": "Na podstawie: https://mamadu.pl/153783,jaka-wybrac-szkole-srednia-wybor-szkoly-po-8-klasie",
     "heading": "Jak wybrać szkołę średnią?",
     "options": [
      {
       "id": "A",
       "text": "Nie warto kierować się rankingami i popularnością. Wysokie wyniki uczniów w nauce i prestiż szkoły mogą informować o tym, że panuje w niej rywalizacja. Szkoła powinna przede wszystkim pomóc ci się rozwinąć, a nie zmuszać do otrzymywania wysokich ocen."
      },
      {
       "id": "B",
       "text": "Zastanów się, co ma dla ciebie największe znaczenie w edukacji. Czy chcesz chodzić do dużej szkoły? Czy masz zainteresowania, które chcesz rozwijać? Czy zależy ci na ocenach? A może najważniejsze jest, by chodzić do jednej szkoły z kolegami?"
      },
      {
       "id": "C",
       "text": "Jeśli lubisz zajęcia praktyczne, chcesz uczyć się czegoś więcej i inaczej, weź pod uwagę technika. Po takiej szkole będziesz mógł szybko zacząć pracę."
      },
      {
       "id": "D",
       "text": "Wygodnie jest mieć szkołę blisko. Długie i dalekie dojazdy nie tylko więcej kosztują, lecz także wypływają na jakość życia, np. na to, czy się wyśpisz."
      },
      {
       "id": "E",
       "text": "Wielu uczniów szuka nowej szkoły dopiero pod koniec ósmej klasy. Koniecznie trzeba wtedy wiedzieć, że szkoły średnie dzielimy na: licea, technika i szkoły branżowe. Warto sprawdzić, jak wygląda nauka w każdej z nich."
      },
      {
       "id": "F",
       "text": "Szkoła średnia to ważny i potrzebny etap w życiu, ponieważ otwiera drogę do kariery i dorosłości. Tam spędzisz kilka ważnych lat, poznasz nowych ludzi, a niektóre sytuacje zapamiętasz do końca życia."
      },
      {
       "id": "G",
       "text": "Twój temperament jest bardzo ważny. Może wolisz uczyć się w skupieniu, z książek, z internetu, lubisz czytać? Pamiętaj, wybór szkoły średniej to twój wybór, należy do ciebie, nie do twoich rodziców."
      },
      {
       "id": "H",
       "text": "Warto zainteresować się tym, co szkoła oferuje poza realizacją obowiązkowego programu. Czy są w niej organizowane kursy, warsztaty, akcje społeczne i charytatywne, zawody sportowe czy konkursy."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Może szkoła branżowa lub technikum",
      "answer": "C",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Po co szkoła średnia?",
       "answer": "F"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "To nie decyzja mamy czy taty",
       "answer": "G"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Po lekcjach",
       "answer": "H"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Czy opinia o szkole jest ważna?",
       "answer": "A"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Najważniejsze w edukacji",
       "answer": "B"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Jaki typ szkoły wybrać?",
       "answer": "E"
      },
      {
       "id": "r4.7",
       "number": 7,
       "prompt": "Droga do szkoły",
       "answer": "D"
      }
     ],
     "pdfNotes": [
      "The booklet instruction prints stray combining marks on 'Proszę', 'połączyć' and 'wpisać' (font artefact); stored in plain NFC."
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
     "title": "Roślinne jedzenie, które cię zachwyci!",
     "source": "Na podstawie: https://manna68.pl",
     "wordBox": [
      "wino",
      "zmieniamy",
      "owocowe",
      "dań",
      "serwujemy",
      "wracają",
      "smaku",
      "próbują",
      "słodko-kwaśnym",
      "przepis",
      "potrawy"
     ],
     "distractors": [],
     "passage": "W naszej restauracji {{ex}} duży wybór {{1}} kuchni roślinnej oraz szeroki asortyment napojów: ekologiczne i wegańskie wina, piwa i {{2}} herbaty.\n\nWiele osób uważa kuchnię wegetariańską za nieciekawą i bez {{3}}. Stworzyliśmy miejsce, w którym {{4}} są nie tylko zdrowe, ale też pięknie wyglądają. Menu wegańskie {{5}} cztery razy w roku, aby klientom zagwarantować różnorodność. Jest ono niewielkie, dlatego możemy dopracować dania do perfekcji. Nową potrawę najpierw {{6}} pracownicy restauracji, kucharze, a następnie nasi goście. Bierzemy pod uwagę wszystkie sugestie i komentarze, a następnie modyfikujemy {{7}} na daną potrawę. Dopiero wtedy dania pojawiają się w karcie. Niektóre z nich, na przykład wegańska „kaczka” w sosie {{8}} czy tatar z buraka mieszkańcy Gdańska uważają za znakomite.\n\nGości obsługujemy z uśmiechem i uwagą. Chętnie doradzamy, sugerujemy, jakie {{9}} wybrać, by uzupełniło smak potrawy. Lubimy poznawać ludzi, słuchać ich opowieści i opinii. Naszą ambicją jest, by stać się restauracją, do której klienci {{10}} z radością i czują się u nas prawie jak w rodzinnym domu.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "serwujemy"
      },
      {
       "id": "1",
       "answer": "dań"
      },
      {
       "id": "2",
       "answer": "owocowe"
      },
      {
       "id": "3",
       "answer": "smaku"
      },
      {
       "id": "4",
       "answer": "potrawy"
      },
      {
       "id": "5",
       "answer": "zmieniamy"
      },
      {
       "id": "6",
       "answer": "próbują"
      },
      {
       "id": "7",
       "answer": "przepis"
      },
      {
       "id": "8",
       "answer": "słodko-kwaśnym"
      },
      {
       "id": "9",
       "answer": "wino"
      },
      {
       "id": "10",
       "answer": "wracają"
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
    21
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
     "source": "Na podstawie: Twój Styl, nr 10/2021/Nie potrafię się odwrócić",
     "passage": "Gdy Aleksandra pakuje {{ex1}}, rodzina już zaczyna się o {{ex2}} martwić. Wszyscy wiedzą, że wybiera się do {{ex3}} kraju, w którym jest wojna. Dziewczyna zawsze obiecuje {{1}}, że to będzie jej {{2}} wyjazd, jednak wciąż wraca do niebezpiecznych {{3}}. „Ola od dziecka była {{4}} – opowiada jej mama. W szkole i na {{5}} zawsze była liderem. Uczyła się dobrze, ale najbardziej interesowała {{6}} historia i polityka, dlatego ukończyła {{7}} na uniwersytecie. Jeszcze podczas studiów pracowała jako {{8}} w organizacjach międzynarodowych. Nigdy nie przeszła obojętnie obok {{9}}, kto potrzebował pomocy. Oboje z mężem jesteśmy z niej {{10}}”.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "plecaka",
        "plecak",
        "plecaków"
       ],
       "answer": "plecak"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "niej",
        "ją",
        "nią"
       ],
       "answer": "nią"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "dalekiego",
        "dalekim",
        "dalekich"
       ],
       "answer": "dalekiego"
      },
      {
       "id": "1",
       "options": [
        "babci",
        "babcię",
        "babcie"
       ],
       "answer": "babci"
      },
      {
       "id": "2",
       "options": [
        "ostatnim",
        "ostatni",
        "ostatniego"
       ],
       "answer": "ostatni"
      },
      {
       "id": "3",
       "options": [
        "miejsc",
        "miejsca",
        "miejscach"
       ],
       "answer": "miejsc"
      },
      {
       "id": "4",
       "options": [
        "odważna",
        "odważnej",
        "odważną"
       ],
       "answer": "odważna"
      },
      {
       "id": "5",
       "options": [
        "podwórko",
        "podwórku",
        "podwórka"
       ],
       "answer": "podwórku"
      },
      {
       "id": "6",
       "options": [
        "jej",
        "ją",
        "nią"
       ],
       "answer": "ją"
      },
      {
       "id": "7",
       "options": [
        "politologię",
        "politologią",
        "politologii"
       ],
       "answer": "politologię"
      },
      {
       "id": "8",
       "options": [
        "wolontariusz",
        "wolontariuszem",
        "wolontariuszu"
       ],
       "answer": "wolontariusz"
      },
      {
       "id": "9",
       "options": [
        "nikt",
        "nikogo",
        "nikim"
       ],
       "answer": "nikogo"
      },
      {
       "id": "10",
       "options": [
        "dumni",
        "dumne",
        "dumnymi"
       ],
       "answer": "dumni"
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
      "żeby",
      "że",
      "więc",
      "chociaż",
      "bo",
      "i",
      "kiedy"
     ],
     "distractors": [
      "więc"
     ],
     "passage": "W wieku 45 lat ludzie są już starzy – myślała Magda, {{ex}} była małą dziewczynką. Teraz zmieniła zdanie na ten temat, {{1}} sama ma już tyle lat. Obecnie kobieta uważa, {{2}} wiek biologiczny nie jest ważny. Najważniejsze jest zdrowie {{3}} aktywność fizyczna. Co trzeba robić, {{4}} czuć się młodo? – Mieć pracę, hobby, przyjaciół, dobrze się odżywiać i odpoczywać po pracy. Jej mama zawsze tak robiła, dlatego wygląda i czuje się świetnie, {{5}} ma już 70 lat.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "kiedy"
      },
      {
       "id": "1",
       "answer": "bo"
      },
      {
       "id": "2",
       "answer": "że"
      },
      {
       "id": "3",
       "answer": "i"
      },
      {
       "id": "4",
       "answer": "żeby"
      },
      {
       "id": "5",
       "answer": "chociaż"
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
     "source": "Na podstawie: Twój Styl, nr 10/2021/Cała prawda o herbacie",
     "passage": "Co drugi Polak nie wyobraża sobie dnia bez herbaty. {{ex1}} ze wszystkich gatunków smakuje nam czarna z cytryną, miodem lub cukrem. Czy jednak ten napój jest {{ex2}} dla zdrowia? Niestety herbata i posiłek to {{1}} połączenie. Powinno się ją pić nie {{2}} niż godzinę po jedzeniu. Biała herbata ma smak {{3}} od innych, ale to zielona nazywana jest {{4}} napojem świata. Z kolei czerwona {{5}} działa na osoby, które się odchudzają.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "Najbardziej",
        "bardziej",
        "bardzo"
       ],
       "answer": "Najbardziej"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "lepszy",
        "dobrze",
        "dobry"
       ],
       "answer": "dobry"
      },
      {
       "id": "1",
       "options": [
        "źle",
        "złe",
        "gorzej"
       ],
       "answer": "złe"
      },
      {
       "id": "2",
       "options": [
        "wcześniej",
        "wcześnie",
        "najwcześniej"
       ],
       "answer": "wcześniej"
      },
      {
       "id": "3",
       "options": [
        "delikatniejszy",
        "najdelikatniejszy",
        "delikatny"
       ],
       "answer": "delikatniejszy"
      },
      {
       "id": "4",
       "options": [
        "zdrowym",
        "zdrowszym",
        "najzdrowszym"
       ],
       "answer": "najzdrowszym"
      },
      {
       "id": "5",
       "options": [
        "korzystny",
        "korzystnie",
        "najkorzystniejsza"
       ],
       "answer": "korzystnie"
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
     "source": "Na podstawie: Twój Styl, nr 10/2021/Dom ze skrawków świata",
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "„W roku 1997 odwiedziłam Polskę po raz pierwszy i nie {{ex1}} tu zostać” – {{ex2}} Sara, inżynier z Anglii.\n\n„Kiedy, po sześciu latach pracy w Tajlandii, {{1}} do Polski, była zima i wasz kraj mi się nie {{2}} – opowiada. Jednak wiosną zielone krajobrazy Dolnego Śląska {{3}} mi już rodzinną Anglię. Kilka miesięcy później {{4}} tu swojego męża Witolda i razem {{5}} zamieszkać w Polsce na stałe” – dodaje.\n\nSara i Witold są aktywni, {{6}} podróże. „Mamy zwyczaj, że z każdego wyjazdu przywozimy ciekawe rzeczy: zwykle {{7}} tradycyjne pamiątki regionalne” – mówi małżeństwo.\n\nKilka lat temu w swoim domu {{8}} pensjonat i do dzisiaj {{9}} apartamenty dla gości. A w pokojach na ścianach {{10}} pamiątki z ich podróży.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "planować",
       "answer": "planowałam"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "mówić",
       "answer": "mówi"
      },
      {
       "id": "1",
       "given": "ja – przylecieć",
       "answer": "przyleciałam"
      },
      {
       "id": "2",
       "given": "spodobać",
       "answer": "spodobał"
      },
      {
       "id": "3",
       "given": "przypominać",
       "answer": "przypominały"
      },
      {
       "id": "4",
       "given": "ja – poznać",
       "answer": "poznałam"
      },
      {
       "id": "5",
       "given": "my – zdecydować się",
       "answer": "zdecydowaliśmy się"
      },
      {
       "id": "6",
       "given": "kochać",
       "answer": "kochają"
      },
      {
       "id": "7",
       "given": "my – kupować",
       "answer": "kupujemy"
      },
      {
       "id": "8",
       "given": "urządzić",
       "answer": "urządzili"
      },
      {
       "id": "9",
       "given": "wynajmować",
       "answer": "wynajmują"
      },
      {
       "id": "10",
       "given": "wisieć",
       "answer": "wiszą"
      }
     ],
     "pdfNotes": [
      "Examples keep the printed 'nie' before the example blank ('nie planowałam'): only the verb form is the answer."
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
      "sentence": "Alicja przyglądała się zdjęciom.",
      "underlined": "zdjęciom",
      "stem": "Czemu przyglądała się Alicja?",
      "shortAnswer": "Zdjęciom.",
      "answer": "Czemu",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Przez cały miesiąc dyrektor szukał dobrego pracownika.",
       "underlined": "dobrego pracownika",
       "stem": "……………… dyrektor szukał przez cały miesiąc?",
       "shortAnswer": "Dobrego pracownika.",
       "answer": "Kogo",
       "accept": [
        "Jakiego pracownika"
       ]
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Przez pomyłkę zjadłam frytki Filipa.",
       "underlined": "Filipa",
       "stem": "……………… frytki zjadłaś przez pomyłkę?",
       "shortAnswer": "Filipa.",
       "answer": "Czyje",
       "accept": []
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Poprosiliśmy o potrzebne dokumenty.",
       "underlined": "o potrzebne dokumenty",
       "stem": "……………… poprosiliście?",
       "shortAnswer": "O potrzebne dokumenty.",
       "answer": "O co",
       "accept": []
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Polski tenisista po długiej walce wygrał z hiszpańskim zawodnikiem.",
       "underlined": "z hiszpańskim zawodnikiem",
       "stem": "……………… po długiej walce wygrał polski tenisista?",
       "shortAnswer": "Z hiszpańskim zawodnikiem.",
       "answer": "Z kim",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Ola planuje piąty wyjazd do Chorwacji.",
       "underlined": "piąty",
       "stem": "……………… wyjazd planuje Ola?",
       "shortAnswer": "Piąty.",
       "answer": "Który",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Official key prints the question word with decoration (Kogo…?, Z kim ….?); stored without it, match.stripChars ignores the decoration.",
      "Key item 1 gives two accepted forms: 'Kogo…? / Jakiego pracownika…?' (second one in accept).",
      "The worked example prints the complete question ('Czemu przyglądała się Alicja?'), so its stem has no gap."
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
      "source": "Gosia doskonale zna angielski.",
      "hint": "mówi",
      "answer": "Gosia doskonale mówi po angielsku.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "Mój przyjaciel sprzeda mi rower.",
       "hint": "kupię",
       "answer": "Kupię rower od mojego przyjaciela.",
       "accept": [],
       "rubric": "brak transformacji 0,25 + odpowiedni przyimek 0,25 + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "brak transformacji",
         "points": 0.25
        },
        {
         "what": "odpowiedni przyimek",
         "points": 0.25
        },
        {
         "what": "2 transformacje",
         "points": 0.5
        }
       ]
      },
      {
       "id": "g6.2",
       "number": 2,
       "source": "Kasia opiekowała się młodszą siostrą.",
       "hint": "dbała o",
       "answer": "Kasia dbała o młodszą siostrę.",
       "accept": [],
       "rubric": "2 transformacje (2 x 0,5)",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 1
        }
       ]
      },
      {
       "id": "g6.3",
       "number": 3,
       "source": "Ile kosztuje ta sukienka?",
       "hint": "cena",
       "answer": "Jaka jest cena tej sukienki?",
       "accept": [
        "Jaka cena tej sukienki?"
       ],
       "rubric": "odpowiedni zaimek 0,5 + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "odpowiedni zaimek",
         "points": 0.5
        },
        {
         "what": "2 transformacje",
         "points": 0.5
        }
       ]
      },
      {
       "id": "g6.4",
       "number": 4,
       "source": "Nie smakuje mi sałatka jarzynowa.",
       "hint": "nie lubię",
       "answer": "Nie lubię sałatki jarzynowej.",
       "accept": [],
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
       "source": "Tę znaną melodię skomponował polski muzyk.",
       "hint": "autorem",
       "answer": "Autorem znanej melodii jest polski muzyk.",
       "accept": [
        "Polski muzyk jest autorem znanej melodii."
       ],
       "rubric": "odpowiedni czasownik 0,5 + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "odpowiedni czasownik",
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
     "source": "Na podstawie: https://beforewegetold.pl/austria-rowerem-trasy-rowerowe",
     "passage": "Dziennikarka: Dzień dobry. Moimi gośćmi są dzisiaj wyjątkowe osoby. Proszę, {{ex1}}! Co {{ex2}} o sobie powiedzieć?\n\nAgata: Dzień dobry! Mamy na imię Agata i Krzysiek. Jesteśmy małżeństwem i uwielbiamy podróżować. Wiemy, że gdybyśmy tego nie {{1}}, nasze życie nie {{2}} tak kolorowo. Prowadzimy także blog o podróżach, a przede wszystkim o wyprawach rowerowych. Zachęcamy: „{{3}}, tak jak my, miłośnikiem podróży i aktywnego spędzania czasu! Naprawdę warto!”.\n\nDziennikarka: Od czego zaczęła się wasza rowerowa pasja?\n\nKrzysiek: Od krótkiej rozmowy. Jeszcze kilka lat temu nie {{4}} wypraw rowerowych z Austrią, gdyby pewnego dnia nasz dobry znajomy nie powiedział: „Mam dla was ciekawą propozycję. {{5}} rowery i {{6}} ze mną w lipcu do Austrii”. I tak to się zaczęło.\n\nDziennikarka: Kto by {{7}}, że Austria wiosną i latem ma dużo do zaoferowania! Przede wszystkim kojarzy mi się z zimą i nartami.\n\nAgata: Są tam wspaniałe krajobrazy i przepiękne, wygodne ścieżki rowerowe. Czytelnicy naszego bloga często zadają pytanie, czy seniorzy, dzieci i nastolatki również by sobie na tych trasach {{8}}. Odpowiadamy im: oczywiście, że tak! Zachęcamy ich: „Nie {{9}} zbyt długo i {{10}} swoich bliskich na fantastyczne, aktywne wakacje”.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "przedstawcie się",
        "niech przedstawią się",
        "przedstawiajmy się"
       ],
       "answer": "przedstawcie się"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "chciejcie",
        "chcielibyście",
        "chcieliby"
       ],
       "answer": "chcielibyście"
      },
      {
       "id": "1",
       "options": [
        "robili",
        "robilibyśmy",
        "zrobilibyśmy"
       ],
       "answer": "robili"
      },
      {
       "id": "2",
       "options": [
        "wyglądajmy",
        "wyglądałoby",
        "wyglądaliby"
       ],
       "answer": "wyglądałoby"
      },
      {
       "id": "3",
       "options": [
        "Zostawałbyś",
        "Zostańmy",
        "Zostań"
       ],
       "answer": "Zostań"
      },
      {
       "id": "4",
       "options": [
        "połączylibyśmy",
        "połączmy",
        "łączmy"
       ],
       "answer": "połączylibyśmy"
      },
      {
       "id": "5",
       "options": [
        "Wzięłybyście",
        "Wzięliby",
        "Weźcie"
       ],
       "answer": "Weźcie"
      },
      {
       "id": "6",
       "options": [
        "jechalibyście",
        "jedźcie",
        "pojechaliby"
       ],
       "answer": "jedźcie"
      },
      {
       "id": "7",
       "options": [
        "uwierzył",
        "uwierzyłabym",
        "uwierzyła"
       ],
       "answer": "uwierzył"
      },
      {
       "id": "8",
       "options": [
        "poradzili",
        "poradziliby",
        "radziłyby"
       ],
       "answer": "poradzili"
      },
      {
       "id": "9",
       "options": [
        "myślelibyście",
        "myślcie",
        "pomyślcie"
       ],
       "answer": "myślcie"
      },
      {
       "id": "10",
       "options": [
        "zapraszalibyście",
        "zaprosilibyście",
        "zaproście"
       ],
       "answer": "zaproście"
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
     "pdfPage": 21,
     "source": "Na podstawie: Twój Styl, nr 10/2021/Wolna amerykanka",
     "wordBox": [
      "z",
      "w",
      "nad",
      "po",
      "przez",
      "na",
      "za"
     ],
     "distractors": [
      "na"
     ],
     "passage": "Małgorzata, aktorka i wokalistka, wkrótce {{ex}} przyjeździe do USA zamieszkała {{1}} Kalifornii. Najbardziej lubi Los Angeles, które leży {{2}} oceanem. Niedaleko {{3}} miastem są też niewysokie wzgórza i piękne widoki. To dlatego w mieście jest dużo turystów {{4}} cały rok. Małgosia unika jednak typowo turystycznych miejsc. Często odwiedza na przykład mały klub {{5}} muzyką na żywo, bo tam czuje się wspaniale.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "po"
      },
      {
       "id": "1",
       "answer": "w"
      },
      {
       "id": "2",
       "answer": "nad"
      },
      {
       "id": "3",
       "answer": "za"
      },
      {
       "id": "4",
       "answer": "przez"
      },
      {
       "id": "5",
       "answer": "z"
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
    22,
    29
   ],
   "tasks": [
    {
     "id": "w",
     "number": null,
     "type": "writing",
     "grading": "review",
     "pdfPages": [
      23,
      29
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
         "genre": "pozdrowienia",
         "wordTarget": 30,
         "prompt": "Jest Pani/Pan na zagranicznej wycieczce. Proszę napisać pozdrowienia do swojego nauczyciela języka polskiego."
        },
        {
         "id": "b",
         "genre": "sprawozdanie",
         "wordTarget": 170,
         "prompt": "Uczestniczyła Pani / Uczestniczył Pan w kursie gotowania „Obiady z całego świata”. Proszę napisać sprawozdanie (relację) dla polskiego portalu internetowego „Lubię Kuchnię”."
        }
       ]
      },
      {
       "id": "II",
       "parts": [
        {
         "id": "a",
         "genre": "ogłoszenie",
         "wordTarget": 30,
         "prompt": "Pani/Pana kot nie wrócił do domu. Proszę napisać ogłoszenie, które rozwiesi Pani/Pan w okolicy."
        },
        {
         "id": "b",
         "genre": "opinia",
         "wordTarget": 170,
         "prompt": "Spędziła Pani / Spędził Pan wakacje w gospodarstwie agroturystycznym. Proszę napisać opinię na temat tego miejsca, którą zamieści Pani/Pan na polskim portalu turystycznym wartotuprzyjechac.pl."
        }
       ]
      },
      {
       "id": "III",
       "parts": [
        {
         "id": "a",
         "genre": "zaproszenie",
         "wordTarget": 40,
         "prompt": "Pracuje Pani/Pan w polskiej bibliotece. Proszę napisać zaproszenie dla czytelników na spotkanie z autorem popularnych książek."
        },
        {
         "id": "b",
         "genre": "e-mail",
         "wordTarget": 160,
         "prompt": "Pani/Pana firma zmieniła lokalizację, teraz znajduje się w nowym budynku, w centrum miasta. Proszę napisać e-mail do kolegi z Polski i opisać swoje nowe biuro."
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
