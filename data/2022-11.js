window.EXAMS = window.EXAMS || {};
window.EXAMS["2022-11"] = {
 "schemaVersion": 1,
 "id": "2022-11",
 "meta": {
  "level": "B1",
  "labelPdf": "listopad 2022",
  "examDates": "5-6.11.2022",
  "sources": {
   "test": "sources/2022-11/test.pdf",
   "transcript": "sources/2022-11/transcript.pdf",
   "audio": "sources/2022-11/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear; listening V has no per-person chunks (in-play pause count deviates).",
   "Listening V has only 4 persons and 5 slots (row B has two boxes, no asterisk); rows are unordered sets.",
   "Grammar VIII is an inline choice (not a word box); grammar II has a word box with one distractor ('ani')."
  ]
 },
 "audio": {
  "src": "sources/2022-11/audio.mp3",
  "duration": 1604.7,
  "intro": [
   0,
   46.9
  ],
  "readingTime": [
   46.9,
   107.5
  ],
  "tail": [
   1541.1,
   1604.7
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
       107.5,
       123.6
      ],
      "plays": [
       {
        "start": 133.9,
        "end": 316.0
       }
      ],
      "items": [
       {
        "ref": "l1.ex",
        "start": 133.9,
        "end": 143.3
       },
       {
        "ref": "l1.1",
        "start": 149.6,
        "end": 155.4
       },
       {
        "ref": "l1.2",
        "start": 161.8,
        "end": 168.6
       },
       {
        "ref": "l1.3",
        "start": 174.9,
        "end": 179.9
       },
       {
        "ref": "l1.4",
        "start": 186.2,
        "end": 191.6
       },
       {
        "ref": "l1.5",
        "start": 197.9,
        "end": 203.9
       },
       {
        "ref": "l1.6",
        "start": 210.2,
        "end": 215.8
       },
       {
        "ref": "l1.7",
        "start": 222.1,
        "end": 228.6
       },
       {
        "ref": "l1.8",
        "start": 235.0,
        "end": 242.0
       },
       {
        "ref": "l1.9",
        "start": 248.3,
        "end": 254.5
       },
       {
        "ref": "l1.10",
        "start": 260.9,
        "end": 265.7
       },
       {
        "ref": "l1.11",
        "start": 272.0,
        "end": 277.8
       },
       {
        "ref": "l1.12",
        "start": 284.1,
        "end": 290.7
       },
       {
        "ref": "l1.13",
        "start": 297.1,
        "end": 303.4
       },
       {
        "ref": "l1.14",
        "start": 309.8,
        "end": 316.0
       }
      ],
      "source": "auto-silencedetect",
      "verified": false
     },
     "example": {
      "id": "l1.ex",
      "prompt": "Ta wypowiedź oznacza",
      "options": [
       {
        "id": "a",
        "text": "propozycję."
       },
       {
        "id": "b",
        "text": "polecenie."
       },
       {
        "id": "c",
        "text": "radę."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "sp": "M",
       "t": "Idziemy w sobotę na wystawę?"
      }
     },
     "items": [
      {
       "id": "l1.1",
       "number": 1,
       "prompt": "Tę wypowiedź można usłyszeć przed",
       "options": [
        {
         "id": "a",
         "text": "egzaminem."
        },
        {
         "id": "b",
         "text": "rozmową o pracę."
        },
        {
         "id": "c",
         "text": "spektaklem."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Na pewno zdasz! Jesteś świetnie przygotowana."
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź jest typowa z okazji",
       "options": [
        {
         "id": "a",
         "text": "urodzin."
        },
        {
         "id": "b",
         "text": "ślubu."
        },
        {
         "id": "c",
         "text": "awansu."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "100 lat młodej parze i szczęścia na nowej drodze życia!"
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź oznacza, że kobieta",
       "options": [
        {
         "id": "a",
         "text": "jutro zapłaci za lekcje."
        },
        {
         "id": "b",
         "text": "jutro zacznie lekcje."
        },
        {
         "id": "c",
         "text": "będzie prowadzić lekcje."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Jutro zrobię przelew za cały kurs."
       }
      },
      {
       "id": "l1.4",
       "number": 4,
       "prompt": "Tę wypowiedź można usłyszeć",
       "options": [
        {
         "id": "a",
         "text": "w punkcie informacji."
        },
        {
         "id": "b",
         "text": "w przebieralni."
        },
        {
         "id": "c",
         "text": "przy kasie."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Czy doliczyć do tych podręczników reklamówkę?"
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Tę wypowiedź można usłyszeć",
       "options": [
        {
         "id": "a",
         "text": "w lodziarni."
        },
        {
         "id": "b",
         "text": "w sklepie rybnym."
        },
        {
         "id": "c",
         "text": "w barze."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Jakie jest danie dnia i jak długo będę czekać?"
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź jest typowa dla",
       "options": [
        {
         "id": "a",
         "text": "kelnera."
        },
        {
         "id": "b",
         "text": "klienta."
        },
        {
         "id": "c",
         "text": "sprzedawcy."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Nie mam drobnych, ale reszty nie trzeba."
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Tę wypowiedź można usłyszeć",
       "options": [
        {
         "id": "a",
         "text": "na dworcu PKP."
        },
        {
         "id": "b",
         "text": "na dworcu autobusowym."
        },
        {
         "id": "c",
         "text": "na przystanku tramwajowym."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Pociąg do Warszawy Centralnej wjedzie na tor pierwszy przy peronie drugim."
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "obawę."
        },
        {
         "id": "b",
         "text": "radę."
        },
        {
         "id": "c",
         "text": "krytykę."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Ciągle spóźnia się na spotkania. Denerwuje mnie jego zachowanie."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "przed posiłkiem."
        },
        {
         "id": "b",
         "text": "po posiłku."
        },
        {
         "id": "c",
         "text": "przy wyjściu."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Czy wszystko panu smakowało? Podać coś jeszcze?"
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "na poczcie."
        },
        {
         "id": "b",
         "text": "w biurze podróży."
        },
        {
         "id": "c",
         "text": "w urzędzie."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Gdzie mogę odebrać prawo jazdy?"
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź to pytanie o",
       "options": [
        {
         "id": "a",
         "text": "datę ważności."
        },
        {
         "id": "b",
         "text": "możliwe rabaty."
        },
        {
         "id": "c",
         "text": "dostępność produktu."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Czy dostanę zniżkę przy zakupie drugiego produktu?"
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "zaproszenie."
        },
        {
         "id": "b",
         "text": "rekomendację."
        },
        {
         "id": "c",
         "text": "rezygnację."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Mam dwa bilety na piątkowy koncert. Pójdziesz ze mną?"
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w firmie cateringowej."
        },
        {
         "id": "b",
         "text": "w biurze tłumaczeń."
        },
        {
         "id": "c",
         "text": "w szkole językowej."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "W cenie kursu otrzyma pan również wszystkie materiały."
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w banku."
        },
        {
         "id": "b",
         "text": "na poczcie."
        },
        {
         "id": "c",
         "text": "w kantorze."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Czy z tego rachunku mogę robić przelewy w dolarach?"
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
       326.7,
       342.7
      ],
      "plays": [
       {
        "start": 353.0,
        "end": 513.3
       },
       {
        "start": 559.2,
        "end": 719.5
       }
      ],
      "pauseBetweenPlays": 45.9,
      "items": [
       {
        "ref": "l2.ex",
        "start": 353.0,
        "end": 365.8
       },
       {
        "ref": "l2.1",
        "start": 374.2,
        "end": 382.7
       },
       {
        "ref": "l2.2",
        "start": 391.5,
        "end": 402.0
       },
       {
        "ref": "l2.3",
        "start": 411.0,
        "end": 421.2
       },
       {
        "ref": "l2.4",
        "start": 430.2,
        "end": 442.0
       },
       {
        "ref": "l2.5",
        "start": 450.6,
        "end": 460.5
       },
       {
        "ref": "l2.6",
        "start": 468.9,
        "end": 478.9
       },
       {
        "ref": "l2.7",
        "start": 487.3,
        "end": 497.7
       },
       {
        "ref": "l2.8",
        "start": 506.1,
        "end": 513.3
       }
      ],
      "source": "auto-silencedetect",
      "verified": false
     },
     "example": {
      "id": "l2.ex",
      "prompt": "Z tego dialogu dowiadujemy się, że ona",
      "options": [
       {
        "id": "a",
        "text": "będzie piła kawę w kawiarni."
       },
       {
        "id": "b",
        "text": "nie będzie piła kawy w kawiarni."
       },
       {
        "id": "c",
        "text": "chce zarezerwować stolik w kawiarni."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "lines": [
        {
         "sp": "M",
         "t": "Kawa na miejscu czy na wynos?"
        },
        {
         "sp": "K",
         "t": "Na miejscu poproszę."
        }
       ]
      }
     },
     "items": [
      {
       "id": "l2.1",
       "number": 1,
       "prompt": "Z tego dialogu dowiadujemy się, że Anka",
       "options": [
        {
         "id": "a",
         "text": "planuje mieszkać za granicą."
        },
        {
         "id": "b",
         "text": "chce spędzić wakacje we Francji."
        },
        {
         "id": "c",
         "text": "za miesiąc będzie w Polsce."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Słyszałeś, że Anka przeprowadza się z Polski do Francji?"
         },
         {
          "sp": "M",
          "t": "Tak, już nawet wynajęła mieszkanie."
         }
        ]
       }
      },
      {
       "id": "l2.2",
       "number": 2,
       "prompt": "Z tego dialogu dowiadujemy się, że wnuczka",
       "options": [
        {
         "id": "a",
         "text": "nie umie grać w szachy."
        },
        {
         "id": "b",
         "text": "jest niezdecydowana."
        },
        {
         "id": "c",
         "text": "ma inne obowiązki."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "To co Kasiu, zagramy w szachy?"
         },
         {
          "sp": "K",
          "t": "Przepraszam dziadku, ale nie tym razem. Muszę odrobić lekcje."
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
         "text": "kobieta bardzo lubi kuchnię tajską."
        },
        {
         "id": "b",
         "text": "kobieta nigdy nie próbowała tej potrawy."
        },
        {
         "id": "c",
         "text": "mężczyzna nie umie gotować."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Na obiad zrobiłem kurczaka po tajsku."
         },
         {
          "sp": "K",
          "t": "O, brzmi dobrze, lubię poznawać nowe smaki."
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
         "text": "eksponaty niedługo będzie można zobaczyć za darmo."
        },
        {
         "id": "b",
         "text": "wejście do muzeum jest zamknięte."
        },
        {
         "id": "c",
         "text": "eksponaty będzie można zobaczyć od jutra."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Ile kosztuje bilet na wystawę sztuki średniowiecznej?"
         },
         {
          "sp": "K",
          "t": "30 złotych, ale od jutra wstęp do muzeum jest bezpłatny."
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
         "text": "para zaplanowała daleką podróż."
        },
        {
         "id": "b",
         "text": "kobieta marzy o dalekiej podróży."
        },
        {
         "id": "c",
         "text": "mężczyzna pierwszy raz poleci samolotem."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Może polecimy na wakacje na jakąś egzotyczną wyspę?"
         },
         {
          "sp": "M",
          "t": "Przecież wiesz, że boję się latać samolotem."
         }
        ]
       }
      },
      {
       "id": "l2.6",
       "number": 6,
       "prompt": "Z tego dialogu dowiadujemy się, że mężczyzna",
       "options": [
        {
         "id": "a",
         "text": "zdał kurs na prawo jazdy."
        },
        {
         "id": "b",
         "text": "dostał podwyżkę w pracy."
        },
        {
         "id": "c",
         "text": "planuje otworzyć własny biznes."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Gratuluję odważnej decyzji."
         },
         {
          "sp": "M",
          "t": "A skąd wiesz, że chcę zrezygnować z pracy i założyć szkołę jazdy?"
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
         "text": "pomylił dwa biura."
        },
        {
         "id": "b",
         "text": "zmienił zdanie."
        },
        {
         "id": "c",
         "text": "zgubił rachunek."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "I jak oceniasz to biuro rachunkowe?"
         },
         {
          "sp": "M",
          "t": "Myślałem, że to nie jest dobre biuro, ale myliłem się."
         }
        ]
       }
      },
      {
       "id": "l2.8",
       "number": 8,
       "prompt": "Z tego dialogu dowiadujemy się, że",
       "options": [
        {
         "id": "a",
         "text": "kobieta już kupiła prezent."
        },
        {
         "id": "b",
         "text": "mężczyzna nie chce prezentu."
        },
        {
         "id": "c",
         "text": "kobieta jeszcze nie zdecydowała, co kupić."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Co chciałbyś dostać na urodziny?"
         },
         {
          "sp": "M",
          "t": "Przecież wiesz, że lubię niespodzianki."
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
     "prompt": "Proszę wysłuchać wywiadu z Januszem Profusem – maestro czekolady w firmie Wedel.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: https://haps.pl/Haps/7,167709,24589241,janusz-profus-maestro-czekolady-e-wedel-dla-cukiernika-czekolada.html",
     "audio": {
      "announce": [
       730.0,
       745.7
      ],
      "plays": [
       {
        "start": 756.0,
        "end": 848.1
       },
       {
        "start": 893.8,
        "end": 986.0
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
        "t": "Jak się zaczęła pana współpraca z firmą Wedel?"
       },
       {
        "sp": "Maestro",
        "t": "W 2004 roku pracowałem w cukierni w Bydgoszczy. Zespół, którym kierowałem, dostał zadanie wykonania czekoladowego serca dla Wielkiej Orkiestry Świątecznej Pomocy. Firma Wedel była sponsorem czekolady. Po jakimś czasie prezes Wedla postanowił sprawdzić, kto zrobił tę rzeźbę. Właśnie tak się poznaliśmy i zaproszono mnie na rozmowę w sprawie współpracy."
       },
       {
        "sp": "Dziennikarka",
        "t": "Co trzeba zrobić, żeby zostać maestro czekolady?"
       },
       {
        "sp": "Maestro",
        "t": "Mieć dobrych nauczycieli i zdobyć doświadczenie. Ja miałem szczęście uczyć się za granicą, w Szwajcarii, Francji czy Niemczech. Jednak poza wykształceniem ważniejsza jest motywacja, maestro czekolady powinien kochać to, co robi, a praca musi sprawiać mu przyjemność."
       },
       {
        "sp": "Dziennikarka",
        "t": "Co jest najtrudniejsze w pana pracy?"
       },
       {
        "sp": "Maestro",
        "t": "Najgorszy w mojej pracy jest wyścig z czasem. Zdarza się, że duże zlecenia przychodzą w ostatniej chwili, a takie rzeczy trzeba zaplanować. Na przykład zdobyć plany budynku, którego rzeźbę mam zrobić."
       },
       {
        "sp": "Dziennikarka",
        "t": "Skąd bierze pan inspiracje do tworzenia smaków czekoladek?"
       },
       {
        "sp": "Maestro",
        "t": "Często biorę udział w międzynarodowych targach poza Polską. Tam szukam inspiracji do komponowania nowych smaków. Trendy światowe są dla mnie bardzo ważne."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "prompt": "Janusz Profus na początku swojej kariery pracował",
      "options": [
       {
        "id": "a",
        "text": "w zespole muzycznym."
       },
       {
        "id": "b",
        "text": "w biurze Wielkiej Orkiestry Świątecznej Pomocy."
       },
       {
        "id": "c",
        "text": "w cukierni."
       }
      ],
      "answer": "c",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "prompt": "Prezes firmy Wedel",
       "options": [
        {
         "id": "a",
         "text": "kupił czekoladową rzeźbę."
        },
        {
         "id": "b",
         "text": "chciał spotkać się z twórcą rzeźby."
        },
        {
         "id": "c",
         "text": "zaproponował Januszowi praktykę w firmie."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.2",
       "number": 2,
       "prompt": "Janusz Profus za granicą",
       "options": [
        {
         "id": "a",
         "text": "zdobywał kwalifikacje."
        },
        {
         "id": "b",
         "text": "prowadził warsztaty cukiernicze."
        },
        {
         "id": "c",
         "text": "pracował w fabryce czekolady."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l3.3",
       "number": 3,
       "prompt": "Według Janusza Profusa maestro czekolady powinien",
       "options": [
        {
         "id": "a",
         "text": "mieć własną cukiernię."
        },
        {
         "id": "b",
         "text": "uwielbiać smak czekolady."
        },
        {
         "id": "c",
         "text": "pracować z pasją."
        }
       ],
       "answer": "c"
      },
      {
       "id": "l3.4",
       "number": 4,
       "prompt": "Dla Janusza Profusa problemem jest",
       "options": [
        {
         "id": "a",
         "text": "brak zamówień."
        },
        {
         "id": "b",
         "text": "pośpiech."
        },
        {
         "id": "c",
         "text": "praca w nocy."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.5",
       "number": 5,
       "prompt": "Cukiernik wymyśla nowe produkty",
       "options": [
        {
         "id": "a",
         "text": "sam w swojej pracowni."
        },
        {
         "id": "b",
         "text": "podczas wizyt w innych fabrykach."
        },
        {
         "id": "c",
         "text": "dzięki wyjazdom zagranicznym."
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
     "prompt": "Proszę wysłuchać nagrania dotyczącego stylu prowansalskiego w architekturze. Proszę zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://czasnawnetrze.pl/wnetrza/pomieszczenia/salon/25821-styl-prowansalski-we-wnetrzach-czy-francuska-moda-sprawdzi-sie-w-2021-roku",
     "audio": {
      "announce": [
       996.9,
       1012.8
      ],
      "plays": [
       {
        "start": 1023.0,
        "end": 1102.2
       },
       {
        "start": 1148.3,
        "end": 1227.4
       }
      ],
      "pauseBetweenPlays": 46.1,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "text": "Domy w stylu prowansalskim, który oddaje klimat południowo-wschodniej części Francji, są przytulne i jasne. Wykorzystuje się w nich przede wszystkim naturalne materiały, takie jak kamień i drewno, oraz tradycyjne meble. Znajdziemy tu kolory typowe dla krajobrazu Prowansji – beżowy, żółty, lawendowy i błękitny. Pasują one świetnie do drewna. Stare i nawet trochę zniszczone meble mają swój charakter. W tradycyjnych francuskich domach nikt takich mebli nie wyrzucał, lecz korzystały z nich następne pokolenia.\n\nW stylu prowansalskim nie ma miejsca na sztuczne materiały. Tu dominują len i bawełna, a na poduszkach i kocach zwykle pojawiają się motywy roślinne. Najczęściej jest to lawenda, którą uważa się za symbol regionu. Styl prowansalski, choć nie jest obecnie tak popularny jak trendy minimalistyczne czy skandynawskie, podoba się wielu osobom. Oprócz domów prywatnych spotyka się go w pensjonatach i hotelach, szczególnie tych położonych na wsi, w otoczeniu natury."
     },
     "example": {
      "id": "l4.ex",
      "statement": "Styl prowansalski pochodzi z regionu Francji.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "statement": "Cechą prowansalskich budynków jest naturalność.",
       "answer": "TAK"
      },
      {
       "id": "l4.2",
       "number": 2,
       "statement": "Meble w stylu prowansalskim powinny być nowoczesne.",
       "answer": "NIE"
      },
      {
       "id": "l4.3",
       "number": 3,
       "statement": "Na materiałach w stylu prowansalskim są wzory kwiatowe.",
       "answer": "TAK"
      },
      {
       "id": "l4.4",
       "number": 4,
       "statement": "Dziś styl prowansalski jest tak samo modny jak minimalistyczny.",
       "answer": "NIE"
      },
      {
       "id": "l4.5",
       "number": 5,
       "statement": "Domy w stylu prowansalskim najczęściej spotyka się w dużych miastach.",
       "answer": "NIE"
      }
     ]
    },
    {
     "id": "l5",
     "number": "V",
     "type": "matchMulti",
     "grading": "auto",
     "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać tekstów na temat podróżowania komunikacją miejską i dopasować osoby (1-4) do ich opinii (A-D). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerSlot": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 7,
     "source": "Na podstawie: http://infosa.pl/zalety-komunikacji-miejskiej",
     "audio": {
      "announce": [
       1238.2,
       1254.2
      ],
      "plays": [
       {
        "start": 1264.4,
        "end": 1371.0
       },
       {
        "start": 1417.2,
        "end": 1523.8
       }
      ],
      "pauseBetweenPlays": 46.2,
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
      "statement": "kiedy wybiera transport publiczny, myśli o ekologii.",
      "answer": [
       "1"
      ],
      "shown": true
     },
     "statements": [
      {
       "id": "l5.A",
       "letter": "A",
       "text": "korzysta z aplikacji mobilnych, kiedy porusza się po mieście.",
       "slots": 1,
       "answer": [
        "4"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.B",
       "letter": "B",
       "text": "może zaoszczędzić czas i szybciej dotrzeć do celu.",
       "slots": 2,
       "answer": [
        "2",
        "3"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.C",
       "letter": "C",
       "text": "dzięki zmianie transportu oszczędza pieniądze.",
       "slots": 1,
       "answer": [
        "1"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.D",
       "letter": "D",
       "text": "przejazd komunikacją miejską wykorzystuje na czytanie lub odpoczynek.",
       "slots": 1,
       "answer": [
        "3"
       ],
       "anyOrder": true,
       "starred": false
      }
     ],
     "transcript": {
      "lines": [
       {
        "sp": "Osoba 1 (M)",
        "t": "Kiedy przesiadam się z samochodu na autobus bądź tramwaj, nie tylko wydaję mniej pieniędzy na paliwo, ale również dbam o środowisko. Mniej spalin to zdecydowanie czystsze powietrze i ograniczenie smogu w mieście."
       },
       {
        "sp": "Osoba 2 (M)",
        "t": "Kiedy jadę tramwajem lub metrem, nie tracę cennych minut na stanie w korkach i szukanie miejsca parkingowego. Dzięki temu jestem wcześniej w biurze, a przystanek mam bardzo blisko."
       },
       {
        "sp": "Osoba 3 (K)",
        "t": "Jazda komunikacją miejską jest krótsza niż samochodem, szczególnie o 8.00 rano, kiedy muszę dostać się na uniwersytet. To również czas na jakąś książkę, rozmowę ze znajomymi czy po prostu chwilę relaksu w trakcie pracowitego dnia."
       },
       {
        "sp": "Osoba 4 (K)",
        "t": "Nie muszę mieć prawa jazdy, by dostać się tam, gdzie chcę. Z łatwością można zmieniać tramwaje, autobusy i metro. A dzięki różnym programom w telefonie w każdej chwili mogę sprawdzić, o której godzinie będzie mój autobus i gdzie muszę się przesiąść. W internecie mogę nawet kupić bilet."
       }
      ]
     },
     "pdfNotes": [
      "Row B has two boxes and no asterisk in this session; stored as an unordered set like every multi-box row."
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
       "text": "Ruszamy z kolejnym cyklem rodzinnych treningów biegowych, które przygotowaliśmy dla państwa w ramach programu „Bliżej siebie – radość życia”. Będą one doskonałą okazją do rozpoczęcia przygody z bieganiem i włączenia w tę aktywność dzieci w różnym wieku.",
       "source": "Na podstawie: http://facebook.com"
      },
      "prompt": "Z tego tekstu wynika, że program",
      "options": [
       {
        "id": "a",
        "text": "jest przeznaczony tylko dla dzieci."
       },
       {
        "id": "b",
        "text": "odbywa się po raz pierwszy."
       },
       {
        "id": "c",
        "text": "angażuje całe rodziny."
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
        "text": "Festiwal Letnie Brzmienia to cykl ponad 100 koncertów na świeżym powietrzu w 13 miastach Polski. Na scenie pojawią się najpopularniejsi polscy artyści. Występy będą trwać całe wakacje i zakończą się dwudniowym koncertem finałowym.",
        "source": "Na podstawie: https://ec1lodz.pl/aktualnosci/letnie-brzmienia-2022"
       },
       "prompt": "Z tego tekstu wynika, że festiwal Letnie Brzmienia",
       "options": [
        {
         "id": "a",
         "text": "to seria koncertów wakacyjnych."
        },
        {
         "id": "b",
         "text": "odbędzie się w stu polskich miastach."
        },
        {
         "id": "c",
         "text": "to imprezy w 13 dużych salach koncertowych."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "Obecnie Europejczycy kupują w sieci częściej niż kiedykolwiek wcześniej. W grudniu około 80% mieszkańców Wielkiej Brytanii zrobiło zakupy online. Spędzamy też więcej czasu w aplikacjach zakupowych – korzystamy z nich o 45% dłużej niż w ubiegłym roku.",
        "source": "Na podstawie: https://businessinsider.com.pl/technologie/nowe-technologie/jak-zmienily-sie-zachowania-konsumentow-online-i-jak-wplywa-to-na-firmy/ejqyjy1"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "internauci spędzają 45% wolnego czasu na zakupach online."
        },
        {
         "id": "b",
         "text": "w ostatnim roku 80% Europejczyków kupiło coś w internecie."
        },
        {
         "id": "c",
         "text": "aplikacje zakupowe są coraz popularniejsze."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Zapraszamy do odnowionego hotelu, który oferuje spokojny wypoczynek z dala od codziennych problemów. Posiadamy dwa baseny i luksusowe SPA, a nasze nowe wnętrza urządziliśmy w eleganckim stylu. 500 metrów od obiektu znajduje się prywatna plaża, do której dojeżdża darmowy bus hotelowy. Nasi goście nie płacą za parking.",
        "source": "Na podstawie: https://www.wakacje.pl/wczasy/riwiera-turecka/?firstminute"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "z plaży mogą korzystać wszyscy."
        },
        {
         "id": "b",
         "text": "bus na plażę jest bezpłatny."
        },
        {
         "id": "c",
         "text": "hotel jest nowym budynkiem."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Andy Warhol namalował obraz „Shot Sage Blue Marilyn” w 1964 roku, dwa lata po śmierci aktorki Marylin Monroe. Po 58 latach nowojorski dom aukcyjny sprzedał dzieło w niewiele ponad 3 minuty – znany amerykański biznesmen wylicytował je za 195 milionów dolarów.",
        "source": "Na podstawie: https://www.national-geographic.pl/artykul/slynny-obraz-andyego-warhola-sprzedany-za-rekordowa-kwote-ile-kosztowal-220510120854"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "klient kupił obraz w niecałe cztery minuty."
        },
        {
         "id": "b",
         "text": "obraz powstał za życia Marylin Monroe."
        },
        {
         "id": "c",
         "text": "zorganizowanie aukcji kosztowało 195 milionów dolarów."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "W samym środku Warszawy, obok najwyższego budynku w stolicy, powstanie nowoczesne osiedle. W siedmiopiętrowych blokach będzie więcej niż 200 mieszkań różnej wielkości, które można kupować już od stycznia przyszłego roku. Na dachach domów zaprojektowano zielone tarasy.",
        "source": "Na podstawie: https://www.se.pl/warszawa/postawia-bloki-w-cieniu-kolosa-nowe-osiedle-powstanie-w-samym-centrum-warszawy-aa-StLe-hXEw-VKCj.html"
       },
       "prompt": "Z tego tekstu wynika, że nowe osiedle w Warszawie będzie",
       "options": [
        {
         "id": "a",
         "text": "znajdować się poza centrum miasta."
        },
        {
         "id": "b",
         "text": "oferowało ponad 200 lokali."
        },
        {
         "id": "c",
         "text": "najwyższym osiedlem w stolicy."
        }
       ],
       "answer": "b"
      }
     ],
     "pdfNotes": [
      "Item 5 option c ('najwyższym osiedlem w stolicy.') is printed without a verb, verbatim."
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
     "title": "Green Velo – wschodni szlak rowerowy",
     "source": "Na podstawie: https://www.centrumrowerowe.pl/trasy-rowerowe/trasa-rowerowa-green-velo/",
     "passage": "Green Velo to najdłuższy system ścieżek rowerowych w Polsce, który liczy ponad 2000 km. Pomysł na taki projekt pojawił się w 2008 roku jako odpowiedź na ogromne zainteresowanie aktywnym wypoczynkiem oraz możliwość promowania wschodniej części Polski. Green Velo prowadzi przez pięć województw: świętokrzyskie, podkarpackie, lubelskie, podlaskie i warmińsko-mazurskie.\n\nTo turyści decydują, z którego miejsca chcą wystartować i gdzie zamierzają zakończyć swoją podróż. Trasa jest przygotowana tak, aby i początkujący rowerzyści, i ci bardziej zaawansowani mogli z niej korzystać. Z pewnością fanom jazdy na rowerze będzie łatwiej, ale niedoświadczone osoby bez problemów zaplanują krótsze wycieczki.\n\nJeżeli ktoś zdecyduje się przejechać cały wschodni szlak od województwa warmińsko-mazurskiego do województwa świętokrzyskiego, musi przeznaczyć na ten cel około 3 tygodni!\n\nTrasa rowerowa Green Velo jest jedną z najpiękniejszych w całej Polsce. Turyści mogą oglądać nie tylko wspaniałe krajobrazy, ale także zwiedzać ciekawe miejsca w okolicy. Oczywiście na całym szlaku jest ich mnóstwo – od architektonicznych atrakcji, takich jak katedra we Fromborku, aż do parków narodowych, gdzie możemy zobaczyć zwierzęta, które bardzo rzadko występują w innych regionach Polski.",
     "example": {
      "id": "r2.ex",
      "statement": "Green Velo to szlak rowerowy.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Szlak rowerowy promuje turystykę we wschodnich regionach Polski.",
       "answer": "TAK"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Jeśli zdecydyjemy się podróżować szlakiem Green Velo, zwiedzimy pięć najważniejszych zabytków Polski.",
       "answer": "NIE"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Każdy turysta samodzielnie wybiera punkt początkowy i końcowy swojej wycieczki.",
       "answer": "TAK"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Korzystanie ze szlaku Green Velo jest polecane tylko doświadczonym rowerzystom.",
       "answer": "NIE"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Przejechanie od początku do końca szlaku rowerowego Green Velo zajmuje ponad miesiąc.",
       "answer": "NIE"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "W parkach na trasie Green Velo można zobaczyć zwierzęta dobrze znane w całej Polsce.",
       "answer": "NIE"
      }
     ],
     "pdfNotes": [
      "Statement 2 prints „zdecydyjemy” (sic) in the booklet; kept verbatim."
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
     "title": "Aplikacja Booksy",
     "source": "Na podstawie: https://nano.komputronik.pl/n/booksy-aplikacja-czy-warto/",
     "passage": "Na pewno zdarzyło ci się kiedyś długo próbować umówić się na wizytę u fryzjera czy {{ex}}. Często okazuje się, że na samo umawianie poświęcamy znacznie więcej czasu, niż planowaliśmy, a przecież {{1}}, więc liczy się każda minuta. Z tego powodu warto korzystać z nowoczesnych technologii, które ułatwiają nam życie. Ciekawym rozwiązaniem jest aplikacja Booksy, dzięki której {{2}} umówisz się z fryzjerem, masażystą, kosmetyczką czy fizjoterapeutą.\n\nUsługa jest dostępna całodobowo, więc {{3}}, a termin będzie na ciebie czekał. Dzień przed umówionym spotkaniem {{4}}, dlatego nie musisz się już martwić, że o nim zapomnisz. W dowolnym momencie możesz także {{5}}, gdyby coś nagle skomplikowało twoje plany.\n\nAplikacja jest darmowa i łatwo ściągnąć ją na telefon. Aby korzystać z bogatej oferty usług Booksy, {{6}}. Rejestracja nie jest konieczna do przeglądania ofert, ale jest obowiązkowa, {{7}}.\n\nCzy to nie wspaniałe rozwiązanie dla ludzi, którym zawsze brakuje czasu?",
     "options": [
      {
       "id": "A",
       "text": "nawet w środku nocy możesz rezerwować wizytę"
      },
      {
       "id": "B",
       "text": "odwołać wizytę lub zmienić jej termin"
      },
      {
       "id": "C",
       "text": "innego rodzaju zabieg kosmetyczny"
      },
      {
       "id": "D",
       "text": "aby umówić się do wybranego specjalisty"
      },
      {
       "id": "E",
       "text": "w prosty i szybki sposób"
      },
      {
       "id": "F",
       "text": "na początku warto utworzyć konto w systemie"
      },
      {
       "id": "G",
       "text": "we współczesnym świecie czas to pieniądz"
      },
      {
       "id": "H",
       "text": "otrzymasz SMS z przypomnieniem"
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
       "answer": "G"
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
       "answer": "A"
      },
      {
       "id": "r3.4",
       "number": 4,
       "gap": "4",
       "answer": "H"
      },
      {
       "id": "r3.5",
       "number": 5,
       "gap": "5",
       "answer": "B"
      },
      {
       "id": "r3.6",
       "number": 6,
       "gap": "6",
       "answer": "F"
      },
      {
       "id": "r3.7",
       "number": 7,
       "gap": "7",
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
     "pointsFormula": "7 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 7,
     "pdfPage": 13,
     "source": "Na podstawie: https://gadulec.pl/zycie-zero-waste-codziennosc-podroz/",
     "heading": "Ekologia w życiu codziennym",
     "options": [
      {
       "id": "A",
       "text": "Rozmawiajmy ze znajomymi i rodziną o ekologii. Bądźmy cierpliwi i uświadamiajmy innych, nawet jeśli kolejny raz słyszymy: „ale co ja jeden mogę zmienić?”."
      },
      {
       "id": "B",
       "text": "Nie musimy od razu przechodzić na wegetarianizm, ale starajmy się jeść mniej mięsa. Podczas jego produkcji zużywa się bardzo dużo wody."
      },
      {
       "id": "C",
       "text": "Dbajmy o swoje najbliższe otoczenie i podnośmy śmieci, które leżą na ulicy, a świat stanie się piękniejszy! Co więcej – jeśli widzimy ludzi, którzy śmiecą, zwróćmy im uwagę."
      },
      {
       "id": "D",
       "text": "Zrezygnujmy z jednorazowych kubków, sztućców czy reklamówek foliowych. Koniecznie miejmy przy sobie materiałowe torby na zakupy czy kubek termiczny na kawę."
      },
      {
       "id": "E",
       "text": "Wybierzmy rower, ewentualnie komunikację miejską. Jeśli musimy jeździć samochodem, zdecydujmy się na wspólne przejazdy z kolegami z pracy. Tak będzie lepiej dla środowiska i naszego portfela!"
      },
      {
       "id": "F",
       "text": "Zepsuty telefon? Oddajmy go do serwisu, nie biegnijmy od razu po nowy model. To samo dotyczy np. mebli. Pamiętajmy, że ze starego krzesła można wyczarować cuda – wystarczy użyć narzędzi, farb i… fantazji!"
      },
      {
       "id": "G",
       "text": "Trudno w to uwierzyć, ale 40% ludzi nadal nie sortuje śmieci. Nie zapominajmy, że jest to jedna z najprostszych i najskuteczniejszych metod na poprawę stanu naszego środowiska."
      },
      {
       "id": "H",
       "text": "Codziennie reklamy próbują nas przekonać, że powinniśmy mieć coś, czego tak naprawdę nie potrzebujemy! Pomyślmy dwa razy, zanim kupimy następny gadżet, którego nie będziemy używać."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Ograniczmy jedzenie mięsa",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Naprawiajmy, nie wyrzucajmy",
       "answer": "F"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Kupujmy mniej i mądrzej",
       "answer": "H"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Dyskutujmy i edukujmy",
       "answer": "A"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Wielorazowy – niech to będzie nasze nowe ulubione słowo",
       "answer": "D"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Segregujmy odpady",
       "answer": "G"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Sprzątajmy",
       "answer": "C"
      },
      {
       "id": "r4.7",
       "number": 7,
       "prompt": "Zmieńmy myślenie o transporcie",
       "answer": "E"
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
     "title": "Chuseok – tradycja i nowe trendy",
     "source": "Na podstawie: https://polakwseulu.blogspot.com/2019/09/chuseok-koreanskie-swieto-dziekczynienia.html",
     "passage": "We wszystkich kulturach kultywuje się pamięć przodków. W Polsce pamiętamy o nich w listopadzie w dniu Święta Zmarłych, a przykładowo w Korei podobne zwyczaje mają miejsce w Chuseok. To jedno z najważniejszych świąt w tym {{ex}}. Chuseok jest świętem ruchomym, które {{1}} zgodnie z kalendarzem księżycowo-słonecznym. W ten dzień Koreańczycy wracają do swoich rodzinnych miejscowości, żeby {{2}} w uroczystościach, podczas których wspominają zmarłych przodków. Wcześniej bliscy odwiedzają i sprzątają rodzinne groby, co jest zazwyczaj skomplikowane, ponieważ grobowce znajdują się w okolicznych górach. W Korei nie ma cmentarzy {{3}} do tych europejskich.\n\nDzień przed Chuseok, jak i kolejny dzień po tym święcie, jest wolny od pracy – takie {{4}} ma ułatwić Koreańczykom przyjazd do ich domów. Nic więc dziwnego, że to okres masowych {{5}} – autostrady są zakorkowane, a bilety na pociąg czy autobus należy kupić o wiele wcześniej. Do domu rodzinnego nie wypada przyjeżdżać z {{6}} rękami, więc Chuseok to również czas, w którym ludzie dają sobie prezenty. Na spotkaniach z rodziną nie może {{7}} świątecznych dań, na przykład smażonej wołowiny czy makaronu z batatów. Chuseok to jeden z nielicznych dni w roku, kiedy wielu Koreańczyków {{8}} odświętny, tradycyjny strój, czyli hanbok, który jest w szafie prawie każdego Koreańczyka.\n\nNiestety, coraz więcej {{9}} związanych z tym świętem zanika. Niektórzy zamiast biletów kolejowych do rodzinnego miasta rezerwują bilety lotnicze do Bangkoku czy Singapuru, a wiele Koreanek wykorzystuje Chuseok na {{10}} swojej urody w klinikach chirurgii plastycznej.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "mieście",
        "narodzie",
        "kraju"
       ],
       "answer": "kraju"
      },
      {
       "id": "1",
       "options": [
        "urodzi się",
        "obchodzi się",
        "organizuje się"
       ],
       "answer": "obchodzi się"
      },
      {
       "id": "2",
       "options": [
        "uczestniczyć",
        "angażować się",
        "startować"
       ],
       "answer": "uczestniczyć"
      },
      {
       "id": "3",
       "options": [
        "zwykłych",
        "podobnych",
        "innych"
       ],
       "answer": "podobnych"
      },
      {
       "id": "4",
       "options": [
        "rozwiązanie",
        "wytłumaczenie",
        "konsekwencje"
       ],
       "answer": "rozwiązanie"
      },
      {
       "id": "5",
       "options": [
        "spacerów",
        "podróży",
        "dróg"
       ],
       "answer": "podróży"
      },
      {
       "id": "6",
       "options": [
        "pustymi",
        "pełnymi",
        "otwartymi"
       ],
       "answer": "pustymi"
      },
      {
       "id": "7",
       "options": [
        "zjeść",
        "zabraknąć",
        "ugotować"
       ],
       "answer": "zabraknąć"
      },
      {
       "id": "8",
       "options": [
        "kupuje",
        "prasuje",
        "zakłada"
       ],
       "answer": "zakłada"
      },
      {
       "id": "9",
       "options": [
        "kultur",
        "zwyczajów",
        "przepisów"
       ],
       "answer": "zwyczajów"
      },
      {
       "id": "10",
       "options": [
        "operację",
        "remont",
        "poprawę"
       ],
       "answer": "poprawę"
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
     "passage": "Pies to {{ex1}} przyjaciel {{ex2}} – takie powiedzenie jest znane nie od dziś. Zwierzęta {{ex3}} są bardzo {{1}} i potrafią poprawić nam humor nawet w {{2}} dniu tygodnia. Plusy posiadania psa można wymieniać bez {{3}}. Jednak musimy wspomnieć też o {{4}}, które są trudne. Jeśli zdecydujemy się na {{5}}, żeby mieć psa, powinniśmy najpierw przemyśleć zalety i wady {{6}} wyboru. Pies wnosi do życia radość, ale również wiele {{7}}: trzeba wychodzić z {{8}} na spacery kilka razy dziennie, dbać o regularne wizyty u {{9}} oraz zawsze brać pod uwagę, co zrobimy z psem w czasie {{10}}.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "najlepszy",
        "najlepszym",
        "najlepsi"
       ],
       "answer": "najlepszy"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "człowiek",
        "człowieka",
        "człowiekiem"
       ],
       "answer": "człowieka"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "ci",
        "ta",
        "te"
       ],
       "answer": "te"
      },
      {
       "id": "1",
       "options": [
        "towarzyscy",
        "towarzyskimi",
        "towarzyskie"
       ],
       "answer": "towarzyskie"
      },
      {
       "id": "2",
       "options": [
        "najgorszy",
        "najgorszym",
        "najgorszemu"
       ],
       "answer": "najgorszym"
      },
      {
       "id": "3",
       "options": [
        "końca",
        "końcem",
        "końce"
       ],
       "answer": "końca"
      },
      {
       "id": "4",
       "options": [
        "momenty",
        "momentach",
        "momentów"
       ],
       "answer": "momentach"
      },
      {
       "id": "5",
       "options": [
        "tym",
        "tego",
        "to"
       ],
       "answer": "to"
      },
      {
       "id": "6",
       "options": [
        "swojego",
        "swój",
        "swojemu"
       ],
       "answer": "swojego"
      },
      {
       "id": "7",
       "options": [
        "obowiązki",
        "obowiązków",
        "obowiązek"
       ],
       "answer": "obowiązków"
      },
      {
       "id": "8",
       "options": [
        "niego",
        "nich",
        "nim"
       ],
       "answer": "nim"
      },
      {
       "id": "9",
       "options": [
        "weterynarzom",
        "weterynarza",
        "weterynarzem"
       ],
       "answer": "weterynarza"
      },
      {
       "id": "10",
       "options": [
        "wakacji",
        "wakacjach",
        "wakacje"
       ],
       "answer": "wakacji"
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
     "source": "Na podstawie: Nowy wspaniały świat, Twój Styl, maj 2022",
     "wordBox": [
      "że",
      "ani",
      "lub",
      "i",
      "ponieważ",
      "kiedy",
      "a"
     ],
     "distractors": [
      "ani"
     ],
     "passage": "Zygmunt Miłoszewski to autor wielu książek kryminalnych i kilku świetnych thrillerów. Miłoszewski śmieje się, {{ex}} gdyby pisał tylko wtedy, {{1}} ma ochotę, nie stworzyłby nawet krótkiego tekstu. „Siedzę przy komputerze sześć {{2}} osiem godzin, piję dużo kawy {{3}} czasem napiszę dziesięć stron {{4}} czasem nic” – opowiada. „Zawód pisarza jest trudny, {{5}} wymaga bardzo dużo cierpliwości” – mówi Miłoszewski.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "że"
      },
      {
       "id": "1",
       "answer": "kiedy"
      },
      {
       "id": "2",
       "answer": "lub"
      },
      {
       "id": "3",
       "answer": "i"
      },
      {
       "id": "4",
       "answer": "a"
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
     "source": "Na podstawie: https://www.janpol.pl/porady/znaczenie-snu-dla-organizmu-czlowieka/",
     "passage": "Odpowiednia liczba godzin snu i jego jakość to podstawa {{ex1}} stylu życia. Dobry nocny odpoczynek sprawia, że w ciągu dnia pracujemy {{ex2}}. Sen gwarantuje nam też dobrą formę na {{1}} czas niż wypicie kilku filiżanek kawy. Ważnym elementem leczenia chorób i rehabilitacji jest właśnie {{2}} sen. Naukowcy potwierdzają, że osoby, które śpią krótko, czyli {{3}} niż 6 godzin na dobę, mają {{4}} ryzyko zawału serca od tych osób, które zawsze są wyspane. Sen jest absolutnie {{5}} czynnikiem prozdrowotnym, ponieważ umożliwia zachowanie równowagi psychicznej i fizycznej.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "zdrowego",
        "zdrowszego",
        "najzdrowszego"
       ],
       "answer": "zdrowego"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "bardzo efektywny",
        "bardziej efektywnie",
        "bardziej efektywni"
       ],
       "answer": "bardziej efektywnie"
      },
      {
       "id": "1",
       "options": [
        "długo",
        "dłuższy",
        "dłużej"
       ],
       "answer": "dłuższy"
      },
      {
       "id": "2",
       "options": [
        "dobrze",
        "dobry",
        "lepiej"
       ],
       "answer": "dobry"
      },
      {
       "id": "3",
       "options": [
        "najmniej",
        "mało",
        "mniej"
       ],
       "answer": "mniej"
      },
      {
       "id": "4",
       "options": [
        "najwyższe",
        "wyższe",
        "wysokie"
       ],
       "answer": "wyższe"
      },
      {
       "id": "5",
       "options": [
        "najważniejszym",
        "ważnym",
        "ważniejszym"
       ],
       "answer": "najważniejszym"
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
     "source": "Na podstawie: 10 sposobów na dobre prowadzenie, Twój Styl, maj 2022",
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "Ekonomiści {{ex1}}, że ceny paliw nie {{ex2}} w najbliższym czasie. Dlatego warto nauczyć się jeździć ekologicznie. Pozytywne efekty takiej jazdy każdy kierowca {{1}} w swoim portfelu już po kilku tygodniach. Co trzeba robić? Przede wszystkim {{2}} zmniejszyć prędkość, wtedy rzadziej {{3}} kupować benzynę. Wiem o tym dobrze, bo teraz codziennie {{4}} do pracy samochodem i {{5}} na benzynę bardzo dużo pieniędzy. To dlatego, że lubię szybką jazdę. Ponadto na weekendowe wycieczki zwykle {{6}} za dużo rzeczy do bagażnika. Samochody z dużym bagażem zawsze {{7}} więcej. Według ekologów najlepsze jest auto elektryczne. Postanowiłem, że wkrótce {{8}} kredyt i za jakiś czas {{9}} taki samochód. Za rok żona i ja {{10}} na ekologiczne wakacje nad czyste mazurskie jeziora!",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "mówić",
       "answer": "mówią"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "spaść",
       "answer": "spadną"
      },
      {
       "id": "1",
       "given": "zobaczyć",
       "answer": "zobaczy",
       "accept": []
      },
      {
       "id": "2",
       "given": "my – powinien",
       "answer": "powinniśmy",
       "accept": []
      },
      {
       "id": "3",
       "given": "my – musieć",
       "answer": "będziemy musieli",
       "accept": []
      },
      {
       "id": "4",
       "given": "jeździć",
       "answer": "jeżdżę",
       "accept": []
      },
      {
       "id": "5",
       "given": "wydawać",
       "answer": "wydaję",
       "accept": []
      },
      {
       "id": "6",
       "given": "pakować",
       "answer": "pakuję",
       "accept": []
      },
      {
       "id": "7",
       "given": "palić",
       "answer": "palą",
       "accept": []
      },
      {
       "id": "8",
       "given": "wziąć",
       "answer": "wezmę",
       "accept": []
      },
      {
       "id": "9",
       "given": "kupić",
       "answer": "kupię",
       "accept": []
      },
      {
       "id": "10",
       "given": "wybrać się",
       "answer": "wybierzemy się",
       "accept": []
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
      "sentence": "Dowiedzieliśmy o jego przyjeździe tydzień temu.",
      "underlined": "tydzień temu",
      "stem": "…………… dowiedzieliście się o jego przyjeździe?",
      "shortAnswer": "Tydzień temu.",
      "answer": "Kiedy",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Magda zapłaciła za zakupy kartą.",
       "underlined": "kartą",
       "stem": "…………… Magda zapłaciła za zakupy?",
       "shortAnswer": "Kartą.",
       "answer": "Czym",
       "accept": [
        "Jak"
       ]
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Dyskutowali o książce Doroty Masłowskiej.",
       "underlined": "Doroty Masłowskiej",
       "stem": "…………… książce dyskutowali?",
       "shortAnswer": "Doroty Masłowskiej.",
       "answer": "O czyjej",
       "accept": []
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Marek spędził całe wakacje u swojego kuzyna.",
       "underlined": "u swojego kuzyna",
       "stem": "…………… Marek spędził całe wakacje?",
       "shortAnswer": "U swojego kuzyna.",
       "answer": "U kogo",
       "accept": [
        "Gdzie"
       ]
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Kowalscy wrócili wczoraj znad morza.",
       "underlined": "znad morza",
       "stem": "…………… Kowalscy wrócili wczoraj?",
       "shortAnswer": "Znad morza.",
       "answer": "Skąd",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Kierowca jechał bardzo wolno po śliskiej drodze.",
       "underlined": "bardzo wolno",
       "stem": "…………… jechał kierowca?",
       "shortAnswer": "Bardzo wolno.",
       "answer": "Jak",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Printed example shows the full question ('Kiedy dowiedzieliście się o jego przyjeździe?', Kiedy bold-underlined); stored as stem with the question word removed, like the items.",
      "Official key lists alternatives for items 1 (Czym…? Jak…?) and 3 (U kogo…? Gdzie…?); first stored as answer, rest in accept.",
      "Official key prints the question word with decoration (Czym…?); stored without it, match.stripChars ignores the decoration."
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
      "source": "Nie wiem, kim jest ten pan.",
      "hint": "znam",
      "answer": "Nie znam tego pana.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "W lecie często noszę krótkie spodnie.",
       "hint": "chodzę",
       "answer": "W lecie często chodzę w krótkich spodniach.",
       "rubric": "odpowiedni przyimek 0,5 + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "odpowiedni przyimek",
         "points": 0.5
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
       "source": "Ludwik przepada za lodami czekoladowymi.",
       "hint": "uwielbia",
       "answer": "Ludwik uwielbia lody czekoladowe.",
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
       "source": "Krzysiek zawsze zapomina o moich urodzinach.",
       "hint": "pamięta",
       "answer": "Krzysiek nigdy nie pamięta o moich urodzinach.",
       "rubric": "zmiana przysłówka (0,5) + dodanie partykuły 0,5",
       "rubricParts": [
        {
         "what": "zmiana przysłówka",
         "points": 0.5
        },
        {
         "what": "dodanie partykuły",
         "points": 0.5
        }
       ]
      },
      {
       "id": "g6.4",
       "number": 4,
       "source": "Jakiego koloru jest twój samochód?",
       "hint": "kolor",
       "answer": "Jaki kolor ma twój samochód?",
       "rubric": "odpowiedni zaimek pytajny 0,5 + odpowiedni czasownik 0,5",
       "rubricParts": [
        {
         "what": "odpowiedni zaimek pytajny",
         "points": 0.5
        },
        {
         "what": "odpowiedni czasownik",
         "points": 0.5
        }
       ]
      },
      {
       "id": "g6.5",
       "number": 5,
       "source": "Niestety, nie było ich na tym koncercie.",
       "hint": "nie przyszli",
       "answer": "Niestety, nie przyszli na ten koncert.",
       "rubric": "2 transformacje (2 x 0,5)",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 1
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
     "source": "Na podstawie: https://portal.librus.pl/rodzina/artykuly/regiony-polskie-cz-1-polesie",
     "passage": "Nudzicie się podczas wakacji w górach lub nad morzem? Jeżeli {{ex1}} poznać różne ciekawe miejsca, {{ex2}} do nas. Jesteśmy miłośnikami mało znanego w Polsce regionu – Polesia. Najchętniej {{1}} tam każdą wolną chwilę, chociaż jeszcze niedawno nie wyobrażaliśmy sobie lata w innym miejscu niż nad Bałtykiem lub w Tatrach. Zapewniamy, że i wy {{2}} na Polesiu coś dla siebie, gdybyście tam {{3}}. Jest wśród was osoba, która kocha spacery? W takim razie niech idzie do lasu, a przy okazji {{4}} grzybów albo jagód na pierogi dla całej grupy. Lubicie pływać? {{5}} w jednym z dwudziestu jezior! Jeżeli kogoś {{6}} ptaki, na pewno w tym regionie {{7}} wiele różnych gatunków. A może ktoś inny {{8}} w tym czasie zwiedzać zabytki? Wspaniale! Drogi podróżniku, {{9}} przyjaciół i razem {{10}} Włodawę – urocze wielokulturowe miasteczko.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "chcielibyście",
        "chciejcie",
        "chcieliby"
       ],
       "answer": "chcielibyście"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "dołączylibyście",
        "dołączalibyście",
        "dołączcie"
       ],
       "answer": "dołączcie"
      },
      {
       "id": "1",
       "options": [
        "spędźmy",
        "spędzalibyśmy",
        "spędzaliby"
       ],
       "answer": "spędzalibyśmy"
      },
      {
       "id": "2",
       "options": [
        "znaleźlibyście",
        "znajdujcie",
        "znaleźliby"
       ],
       "answer": "znaleźlibyście"
      },
      {
       "id": "3",
       "options": [
        "pojechali",
        "pojechalibyście",
        "jechaliby"
       ],
       "answer": "pojechali"
      },
      {
       "id": "4",
       "options": [
        "nazbierałbyś",
        "niech nazbiera",
        "niech zbiera"
       ],
       "answer": "niech nazbiera"
      },
      {
       "id": "5",
       "options": [
        "Wykąpcie się",
        "Wykąp się",
        "Kąpalibyście się"
       ],
       "answer": "Wykąpcie się"
      },
      {
       "id": "6",
       "options": [
        "interesowaliby",
        "zainteresowaliby",
        "interesowałyby"
       ],
       "answer": "interesowałyby"
      },
      {
       "id": "7",
       "options": [
        "spotkałby",
        "spotkałyby",
        "niech spotka"
       ],
       "answer": "spotkałby"
      },
      {
       "id": "8",
       "options": [
        "wolałby",
        "wolałyby",
        "woleliby"
       ],
       "answer": "wolałby"
      },
      {
       "id": "9",
       "options": [
        "zabierz",
        "niech zabierze",
        "zabierałbyś"
       ],
       "answer": "zabierz"
      },
      {
       "id": "10",
       "options": [
        "odwiedzalibyście",
        "odwiedźcie",
        "odwiedziliby"
       ],
       "answer": "odwiedźcie"
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
     "source": "Na podstawie: Eko na moją miarę, Twój Styl, maj 2022",
     "passage": "Aneta {{ex}} kilku lat prowadzi „Starą Lodziarnię” {{1}} znanym warszawskim osiedlu. Zostawiła dobrze płatną pracę {{2}} innej branży, bo ważniejsza była {{3}} niej rodzinna tradycja. Kobieta wierzyła, że odniesie sukces i postanowiła robić ekologiczne lody. Jajka {{4}} produkcji mrożonych deserów pochodzą wyłącznie {{5}} lokalnych ferm. Klienci cenią smak i jakość tych wyrobów, a Aneta otwiera już kolejny punkt – tym razem w centrum stolicy.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "od",
        "przez",
        "w"
       ],
       "answer": "od"
      },
      {
       "id": "1",
       "options": [
        "na",
        "w",
        "o"
       ],
       "answer": "na"
      },
      {
       "id": "2",
       "options": [
        "na",
        "od",
        "w"
       ],
       "answer": "w"
      },
      {
       "id": "3",
       "options": [
        "do",
        "dla",
        "z"
       ],
       "answer": "dla"
      },
      {
       "id": "4",
       "options": [
        "do",
        "dla",
        "na"
       ],
       "answer": "do"
      },
      {
       "id": "5",
       "options": [
        "znad",
        "wśród",
        "z"
       ],
       "answer": "z"
      }
     ],
     "pdfNotes": [
      "In this session VIII is an inline choice (underline one of 3 prepositions), not a word-box task."
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
         "prompt": "Zdała Pani / Zdał Pan ważny egzamin i organizuje Pani/Pan kolację. Proszę zaprosić na nią polskich przyjaciół."
        },
        {
         "id": "b",
         "genre": "e-mail",
         "wordTarget": 170,
         "prompt": "Polska firma, w której Pani/Pan teraz pracuje, opłaciła Pani/Panu wyjazd na szkolenie. W e-mailu do dyrektora tej firmy proszę napisać relację z kursu."
        }
       ]
      },
      {
       "id": "II",
       "parts": [
        {
         "id": "a",
         "genre": "pozdrowienia",
         "wordTarget": 25,
         "prompt": "Wyjechała Pani / wyjechał Pan na zimowy odpoczynek w góry. Proszę napisać pozdrowienia do kolegi/koleżanki z Polski."
        },
        {
         "id": "b",
         "genre": "opinia",
         "wordTarget": 175,
         "prompt": "Szkoła językowa, w której uczy się Pani/Pan polskiego, przygotowuje gazetkę dla studentów. Współpracuje Pani/Pan z redakcją gazetki. O ciekawych spektaklach, filmach, serialach można przeczytać w dziale: „Każdy powinien to obejrzeć!”. Proszę napisać opinię o filmie, który Panią/Pana zainteresował."
        }
       ]
      },
      {
       "id": "III",
       "parts": [
        {
         "id": "a",
         "genre": "ogłoszenie",
         "wordTarget": 25,
         "prompt": "Szuka Pani/Pan nauczyciela języka polskiego. Proszę napisać ogłoszenie na stronę Naukapolskiego.pl"
        },
        {
         "id": "b",
         "genre": "opis",
         "wordTarget": 175,
         "prompt": "Pani/Pana nauczyciel języka polskiego ogłosił konkurs na najlepszy tekst pt. „Moje wymarzone miasto”. Bierze Pani/Pan udział w konkursie. Proszę opisać miasto, w którym chciałaby Pani / chciałby Pan mieszkać.",
         "title": "Moje wymarzone miasto"
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
     },
     "pdfNotes": [
      "The printed footer of the writing prompt page says „czerwiec 2022” (copy typo in the booklet)."
     ]
    }
   ]
  }
 ]
};
