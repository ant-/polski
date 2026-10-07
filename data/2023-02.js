window.EXAMS = window.EXAMS || {};
window.EXAMS["2023-02"] = {
 "schemaVersion": 1,
 "id": "2023-02",
 "meta": {
  "level": "B1",
  "labelPdf": "luty 2023",
  "examDates": "5-6.02.2023",
  "sources": {
   "test": "sources/2023-02/test.pdf",
   "transcript": "sources/2023-02/transcript.pdf",
   "audio": "sources/2023-02/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear.",
   "Listening II has 8 dialogues (8 x 1 p.); listening V has 4 persons and 5 answer boxes (A 1, B 2, C 1, D 1; 5 x 1 p.).",
   "Transcript III has no speaker names, only (M)/(K) tags: interviewer = M, volunteer Anna = K.",
   "Reading II key table is headed T / N (not TAK / NIE); reading and listening texts of this session contain no images.",
   "Grammar IV is 'czas teraźniejszy i przeszły'; its two PRZYKŁAD answers (pracuje, marzyła) are printed in the text."
  ]
 },
 "audio": {
  "src": "sources/2023-02/audio.mp3",
  "duration": 1544.7,
  "intro": [
   0,
   47.2
  ],
  "readingTime": [
   47.2,
   107.8
  ],
  "tail": [
   1481.2,
   1544.7
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
       123.8
      ],
      "plays": [
       {
        "start": 134.2,
        "end": 315.6
       }
      ],
      "items": [
       {
        "ref": "l1.ex",
        "start": 134.2,
        "end": 143.5
       },
       {
        "ref": "l1.1",
        "start": 149.9,
        "end": 155.2
       },
       {
        "ref": "l1.2",
        "start": 161.7,
        "end": 167.2
       },
       {
        "ref": "l1.3",
        "start": 173.9,
        "end": 181.1
       },
       {
        "ref": "l1.4",
        "start": 187.6,
        "end": 193.1
       },
       {
        "ref": "l1.5",
        "start": 199.8,
        "end": 205.5
       },
       {
        "ref": "l1.6",
        "start": 212.2,
        "end": 218.4
       },
       {
        "ref": "l1.7",
        "start": 224.9,
        "end": 230.0
       },
       {
        "ref": "l1.8",
        "start": 236.4,
        "end": 243.0
       },
       {
        "ref": "l1.9",
        "start": 249.7,
        "end": 255.9
       },
       {
        "ref": "l1.10",
        "start": 262.2,
        "end": 267.7
       },
       {
        "ref": "l1.11",
        "start": 274.0,
        "end": 279.2
       },
       {
        "ref": "l1.12",
        "start": 285.6,
        "end": 291.3
       },
       {
        "ref": "l1.13",
        "start": 297.7,
        "end": 303.4
       },
       {
        "ref": "l1.14",
        "start": 309.9,
        "end": 315.6
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
        "text": "w aptece."
       },
       {
        "id": "b",
        "text": "u dentysty."
       },
       {
        "id": "c",
        "text": "w cukierni."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "sp": "M",
       "t": "Poproszę syrop na kaszel."
      }
     },
     "items": [
      {
       "id": "l1.1",
       "number": 1,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w czasie egzaminu."
        },
        {
         "id": "b",
         "text": "po egzaminie."
        },
        {
         "id": "c",
         "text": "przed egzaminem."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Aniu, życzę ci powodzenia na egzaminie!"
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w piekarni."
        },
        {
         "id": "b",
         "text": "w supermarkecie."
        },
        {
         "id": "c",
         "text": "u dietetyka."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "W tym tygodniu wołowina pięćdziesiąt procent taniej."
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź to fragment",
       "options": [
        {
         "id": "a",
         "text": "ogłoszenia."
        },
        {
         "id": "b",
         "text": "reklamy."
        },
        {
         "id": "c",
         "text": "prośby."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Uwaga! Zaginął pies, mały, czarny, z białym ogonem."
       }
      },
      {
       "id": "l1.4",
       "number": 4,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w sklepie warzywnym."
        },
        {
         "id": "b",
         "text": "na bazarze."
        },
        {
         "id": "c",
         "text": "w barze mlecznym."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Poproszę pomidorową i zapiekane brokuły."
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "radość."
        },
        {
         "id": "b",
         "text": "zazdrość."
        },
        {
         "id": "c",
         "text": "znudzenie."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Ale mam widok z okna! Nie mogę się napatrzeć!"
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź oznacza, że osoba",
       "options": [
        {
         "id": "a",
         "text": "czeka na propozycję."
        },
        {
         "id": "b",
         "text": "chce oglądać filmy o podróżach."
        },
        {
         "id": "c",
         "text": "chce dziś decydować."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Ostatnio ty wybierałaś film, teraz moja kolej."
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź oznacza, że osoba",
       "options": [
        {
         "id": "a",
         "text": "jeździła rowerem."
        },
        {
         "id": "b",
         "text": "brała udział w rejsie."
        },
        {
         "id": "c",
         "text": "była ostatnia na mecie."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Wczoraj znowu wygrałam wyścig kolarski."
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź jest typowa dla",
       "options": [
        {
         "id": "a",
         "text": "pacjenta."
        },
        {
         "id": "b",
         "text": "ucznia."
        },
        {
         "id": "c",
         "text": "kierowcy."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Miałem dziś test z matematyki. Dostałem piątkę."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "na lotnisku."
        },
        {
         "id": "b",
         "text": "w tramwaju."
        },
        {
         "id": "c",
         "text": "na peronie."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Następny przystanek: Gdańsk Główny."
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź oznacza, że",
       "options": [
        {
         "id": "a",
         "text": "można zmienić buty."
        },
        {
         "id": "b",
         "text": "nie wolno mieć butów."
        },
        {
         "id": "c",
         "text": "trzeba włożyć inne buty."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Przed wejściem konieczna jest zmiana obuwia."
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź oznacza, że osoba",
       "options": [
        {
         "id": "a",
         "text": "lubi włoskie dania."
        },
        {
         "id": "b",
         "text": "lubi włoskie meble."
        },
        {
         "id": "c",
         "text": "mówi o podróżach."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Wprost uwielbiam włoską kuchnię."
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "komplement."
        },
        {
         "id": "b",
         "text": "krytyka."
        },
        {
         "id": "c",
         "text": "porada."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Kasiu, do twarzy ci w tej fryzurze."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź oznacza, że osoba",
       "options": [
        {
         "id": "a",
         "text": "prosi o cukier do kawy."
        },
        {
         "id": "b",
         "text": "ma ochotę na deser."
        },
        {
         "id": "c",
         "text": "jest bardzo głodna."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Chętnie zjadłabym coś słodkiego do kawy."
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź oznacza, że osoba",
       "options": [
        {
         "id": "a",
         "text": "jest obojętna."
        },
        {
         "id": "b",
         "text": "zgadza się."
        },
        {
         "id": "c",
         "text": "jest zdziwiona."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Mam iść z tobą do opery? Naprawdę?"
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
       325.9,
       341.9
      ],
      "plays": [
       {
        "start": 352.3,
        "end": 488.7
       },
       {
        "start": 534.6,
        "end": 671.0
       }
      ],
      "pauseBetweenPlays": 45.9,
      "items": [
       {
        "ref": "l2.ex",
        "start": 352.3,
        "end": 365.7
       },
       {
        "ref": "l2.1",
        "start": 372.5,
        "end": 380.8
       },
       {
        "ref": "l2.2",
        "start": 387.7,
        "end": 396.9
       },
       {
        "ref": "l2.3",
        "start": 404.1,
        "end": 410.9
       },
       {
        "ref": "l2.4",
        "start": 417.4,
        "end": 429.3
       },
       {
        "ref": "l2.5",
        "start": 435.8,
        "end": 442.8
       },
       {
        "ref": "l2.6",
        "start": 449.1,
        "end": 456.8
       },
       {
        "ref": "l2.7",
        "start": 463.2,
        "end": 471.9
       },
       {
        "ref": "l2.8",
        "start": 478.6,
        "end": 488.7
       }
      ],
      "source": "auto-silencedetect",
      "verified": false
     },
     "example": {
      "id": "l2.ex",
      "prompt": "Z tego dialogu wynika, że polska drużyna",
      "options": [
       {
        "id": "a",
        "text": "wygrała mecz."
       },
       {
        "id": "b",
        "text": "bardzo źle grała."
       },
       {
        "id": "c",
        "text": "przegrała mecz."
       }
      ],
      "answer": "c",
      "shown": true,
      "transcript": {
       "lines": [
        {
         "sp": "K",
         "t": "Oglądałeś finał? Jak polscy siatkarze?"
        },
        {
         "sp": "M",
         "t": "Brazylijczycy mają złoty medal."
        }
       ]
      }
     },
     "items": [
      {
       "id": "l2.1",
       "number": 1,
       "prompt": "Z tego dialogu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "ona pyta o plany wakacyjne."
        },
        {
         "id": "b",
         "text": "on odpowiada dokładnie."
        },
        {
         "id": "c",
         "text": "on nie podaje szczegółów."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Wyjeżdżałeś ostatnio na wakacje, gdzie byłeś?"
         },
         {
          "sp": "M",
          "t": "Jeździłem trochę tu i tam."
         }
        ]
       }
      },
      {
       "id": "l2.2",
       "number": 2,
       "prompt": "Z tego dialogu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "ona rezygnuje z zakupu."
        },
        {
         "id": "b",
         "text": "ona kupuje tylko lodówkę."
        },
        {
         "id": "c",
         "text": "ona kupuje lodówkę i pralkę."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Przy zakupie lodówki pralkę można kupić 30 procent taniej."
         },
         {
          "sp": "K",
          "t": "Biorę obydwa urządzenia!"
         }
        ]
       }
      },
      {
       "id": "l2.3",
       "number": 3,
       "prompt": "Z tego dialogu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "ona potrafi zrobić zadanie."
        },
        {
         "id": "b",
         "text": "on nie rozumie zadania."
        },
        {
         "id": "c",
         "text": "on wyjaśnia polecenie."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "O co chodzi w tym zadaniu z fizyki?"
         },
         {
          "sp": "M",
          "t": "Też się zastanawiam."
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
         "text": "coś ją zatrzymało."
        },
        {
         "id": "b",
         "text": "ona wróci za kwadrans."
        },
        {
         "id": "c",
         "text": "ona będzie punktualnie."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Robię kolację, o której będziesz w domu?"
         },
         {
          "sp": "K",
          "t": "Myślę, że trochę się spóźnię, będę za około 45 minut. Muszę jeszcze skończyć raport."
         }
        ]
       }
      },
      {
       "id": "l2.5",
       "number": 5,
       "prompt": "Z tego dialogu wynika, że kobieta",
       "options": [
        {
         "id": "a",
         "text": "może już wyjść."
        },
        {
         "id": "b",
         "text": "potrzebuje kilku minut."
        },
        {
         "id": "c",
         "text": "właśnie gotuje obiad."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Ile jeszcze mam na ciebie czekać?"
         },
         {
          "sp": "K",
          "t": "Jestem już gotowa."
         }
        ]
       }
      },
      {
       "id": "l2.6",
       "number": 6,
       "prompt": "Z tego dialogu wynika, że kobieta",
       "options": [
        {
         "id": "a",
         "text": "od kilku dni ma złe samopoczucie."
        },
        {
         "id": "b",
         "text": "informuje o wizycie u lekarza."
        },
        {
         "id": "c",
         "text": "dzisiaj wyjątkowo źle się czuje."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Od tygodnia ciągle jest mi niedobrze."
         },
         {
          "sp": "M",
          "t": "Może masz osłabienie wiosenne?"
         }
        ]
       }
      },
      {
       "id": "l2.7",
       "number": 7,
       "prompt": "Z tego dialogu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "on sam naprawi samochód."
        },
        {
         "id": "b",
         "text": "samochód jest u mechanika."
        },
        {
         "id": "c",
         "text": "ona nie widzi sensu w naprawie."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Muszę oddać samochód do naprawy."
         },
         {
          "sp": "K",
          "t": "Nie lepiej kupić nowy? Ten ma już tyle lat."
         }
        ]
       }
      },
      {
       "id": "l2.8",
       "number": 8,
       "prompt": "Z tego dialogu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "ona już umówiła się z dziadkami."
        },
        {
         "id": "b",
         "text": "on chce zaprosić rodziców."
        },
        {
         "id": "c",
         "text": "ona zgadza się na propozycję."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Chciałbym, żebyśmy w tym roku spędzili święta u moich rodziców."
         },
         {
          "sp": "K",
          "t": "Obiecałam babci i dziadkowi, że przyjdziemy do nich."
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
     "prompt": "Proszę wysłuchać wywiadu na temat pracy wolontariuszy w Tatrzańskim Parku Narodowym i zaznaczyć właściwe odpowiedzi.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: https://travelovelove.pl/wolontariat-w-tatrach-jak-wyglada-i-co-warto-wiedziec/",
     "audio": {
      "announce": [
       681.5,
       697.1
      ],
      "plays": [
       {
        "start": 707.4,
        "end": 796.5
       },
       {
        "start": 842.4,
        "end": 931.5
       }
      ],
      "pauseBetweenPlays": 45.9,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "M",
        "t": "Co roku Tatrzański Park Narodowy w ramach programu „Wolontariat dla Tatr” angażuje młodych ludzi, którzy pomagają w edukowaniu turystów. Jedną z uczestniczek wolontariatu jest Anna Nowicka. Aniu, jak można dostać się do programu?"
       },
       {
        "sp": "K",
        "t": "Najpierw trzeba odwiedzić stronę Tatrzańskiego Parku Narodowego i wypełnić formularz zgłoszeniowy online. Następnie trzeba wybrać z listy zadanie, którym chcielibyśmy się zająć. Do wyboru jest kilka form aktywności."
       },
       {
        "sp": "M",
        "t": "Co musi umieć przyszły wolontariusz?"
       },
       {
        "sp": "K",
        "t": "Najważniejsze są: dobra kondycja fizyczna, podstawowa znajomość Tatr i regulaminu Tatrzańskiego Parku Narodowego, a poza tym chęci i wolny czas. Według mnie nie jest trudno zostać wolontariuszem."
       },
       {
        "sp": "M",
        "t": "Co należało do twoich obowiązków?"
       },
       {
        "sp": "K",
        "t": "Przeprowadzałam ankiety wśród turystów, którzy byli na wycieczce z przewodnikiem. Zachęcałam ich, by zabierali ze sobą to, co przynieśli, a więc: puste opakowania po jedzeniu, chusteczki, papierki."
       },
       {
        "sp": "M",
        "t": "Jak długo trwa wolontariat?"
       },
       {
        "sp": "K",
        "t": "Programy są tygodniowe, ale są też wolontariusze, którzy chcą spędzić w Tatrach więcej czasu. Warto dodać, że na każde siedem dni pracy mamy dwa wolne dni, które można wykorzystać na wędrowanie po górach."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "prompt": "Tatrzański Park Narodowy",
      "options": [
       {
        "id": "a",
        "text": "po raz pierwszy szuka wolontariuszy do współpracy."
       },
       {
        "id": "b",
        "text": "kontroluje wolontariuszy w ramach programu „Wolontariat dla Tatr”."
       },
       {
        "id": "c",
        "text": "regularnie prowadzi program „Wolontariat dla Tatr”."
       }
      ],
      "answer": "c",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "prompt": "Żeby zostać wolontariuszem, należy",
       "options": [
        {
         "id": "a",
         "text": "zarejestrować się przez internet."
        },
        {
         "id": "b",
         "text": "wysłać swoje zgłoszenie pocztą tradycyjną."
        },
        {
         "id": "c",
         "text": "wypełnić deklarację w biurze organizacji."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l3.2",
       "number": 2,
       "prompt": "Wolontariusze wybierają rodzaj pracy",
       "options": [
        {
         "id": "a",
         "text": "po rozmowie z dyrektorem."
        },
        {
         "id": "b",
         "text": "zgodnie ze swoimi preferencjami."
        },
        {
         "id": "c",
         "text": "zgodnie z wykształceniem."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.3",
       "number": 3,
       "prompt": "Każdy wolontariusz powinien",
       "options": [
        {
         "id": "a",
         "text": "przynajmniej raz w życiu być w górach."
        },
        {
         "id": "b",
         "text": "bardzo dobrze mówić po angielsku."
        },
        {
         "id": "c",
         "text": "być wysportowany i dyspozycyjny."
        }
       ],
       "answer": "c"
      },
      {
       "id": "l3.4",
       "number": 4,
       "prompt": "Ania jako wolontariuszka",
       "options": [
        {
         "id": "a",
         "text": "informowała turystów, co robić ze śmieciami."
        },
        {
         "id": "b",
         "text": "oprowadzała grupy turystów po górach."
        },
        {
         "id": "c",
         "text": "zbierała śmieci w górach."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l3.5",
       "number": 5,
       "prompt": "Wolontariusze mają",
       "options": [
        {
         "id": "a",
         "text": "zajęty każdy dzień w tygodniu."
        },
        {
         "id": "b",
         "text": "trochę czasu wolnego dla siebie."
        },
        {
         "id": "c",
         "text": "wolny weekend co dwa tygodnie."
        }
       ],
       "answer": "b"
      }
     ]
    },
    {
     "id": "l4",
     "number": "IV",
     "type": "tf",
     "grading": "auto",
     "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę posłuchać tekstu o produktach bio i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://eko.wprost.pl/zywnosc/zdrowa-zywnosc/10380298/raport-wprost-bio-w-polsce-ma-sie-dobrze.html",
     "audio": {
      "announce": [
       942.0,
       957.9
      ],
      "plays": [
       {
        "start": 968.1,
        "end": 1048.8
       },
       {
        "start": 1094.7,
        "end": 1175.5
       }
      ],
      "pauseBetweenPlays": 45.9,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "text": "Moda na zdrowy styl życia rozwija się w Polsce już od kilku lat, a produkty bio cieszą się coraz większą popularnością. Już prawie 40 procent Polaków wybiera produkty z certyfikatem ekologicznym, a regularnie kupuje je 19 procent. Jednak w porównaniu do innych krajów Europy Zachodniej Polska wypada gorzej. We Francji czy w Niemczech ekologiczne restauracje i supermarkety to standard. W Polsce jest ich dużo mniej. Główną przeszkodą w kupowaniu ekologicznego jedzenia okazuje się wysoka cena. Kilka lat temu ekologicznej żywności szukali głównie ludzie młodzi, ale w ostatnim czasie swoje nawyki zmienili również starsi konsumenci. Teraz i oni wybierają zdrowe produkty. Tę zmianę spowodowała izolacja podczas pandemii koronawirusa. Polacy zaczęli kupować wtedy więcej ekologicznego jedzenia. Częściej odwiedzali lokalne bazary, na których rolnicy sprzedają swoje towary. Wiele osób wróciło do gotowania w domu, dzięki czemu mają kontrolę nad tym, co jedzą. Na talerzu przeciętnego Polaka jest teraz więcej warzyw i owoców. Chętniej też jemy i gotujemy tradycyjne potrawy."
     },
     "example": {
      "id": "l4.ex",
      "statement": "Ekologiczne jedzenie było popularne w Polsce już w XIX wieku.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "statement": "Ponad połowa Polaków systematycznie kupuje jedzenie bio.",
       "answer": "NIE"
      },
      {
       "id": "l4.2",
       "number": 2,
       "statement": "We Francji i w Niemczech jest więcej restauracji z ekologicznym jedzeniem niż w Polsce.",
       "answer": "TAK"
      },
      {
       "id": "l4.3",
       "number": 3,
       "statement": "Seniorzy jako pierwsi zainteresowali się produktami bio.",
       "answer": "NIE"
      },
      {
       "id": "l4.4",
       "number": 4,
       "statement": "W czasie pandemii Polacy zmienili swoje preferencje zakupowe.",
       "answer": "TAK"
      },
      {
       "id": "l4.5",
       "number": 5,
       "statement": "Polacy obecnie jedzą coraz więcej mięsa.",
       "answer": "NIE"
      }
     ]
    },
    {
     "id": "l5",
     "number": "V",
     "type": "matchMulti",
     "grading": "auto",
     "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać tekstów na temat sposobów poznawania nowych ludzi i dopasować osoby (1-4) do ich opinii (A-D). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerSlot": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 7,
     "source": "Na podstawie: https://www.exitdoor.pl/rozwoj-osobisty/urozmaicenie-zycia-towarzyskiego/",
     "audio": {
      "announce": [
       1186.0,
       1202.0
      ],
      "plays": [
       {
        "start": 1212.2,
        "end": 1315.5
       },
       {
        "start": 1361.1,
        "end": 1464.4
       }
      ],
      "pauseBetweenPlays": 45.6,
      "items": [
       {
        "ref": "p1",
        "start": 1212.2,
        "end": 1242.1
       },
       {
        "ref": "p2",
        "start": 1246.8,
        "end": 1263.9
       },
       {
        "ref": "p3",
        "start": 1268.8,
        "end": 1289.9
       },
       {
        "ref": "p4",
        "start": 1294.7,
        "end": 1315.5
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
      "statement": "Według niej sport pomaga spotkać nowych ludzi.",
      "answer": [
       "1"
      ],
      "shown": true
     },
     "statements": [
      {
       "id": "l5.A",
       "letter": "A",
       "text": "Uważa, że wyjazdy grupowe zbliżają ludzi.",
       "slots": 1,
       "answer": [
        "3"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.B",
       "letter": "B",
       "text": "Sugeruje, że wspólne jedzenie pomaga w kontaktach międzyludzkich.",
       "slots": 2,
       "answer": [
        "1",
        "3"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.C",
       "letter": "C",
       "text": "Zwraca uwagę, że szukanie znajomych można łączyć z uczeniem się.",
       "slots": 1,
       "answer": [
        "4"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.D",
       "letter": "D",
       "text": "W spotkaniach towarzyskich widzi szansę na zmianę rutyny.",
       "slots": 1,
       "answer": [
        "2"
       ],
       "anyOrder": true,
       "starred": false
      }
     ],
     "transcript": {
      "lines": [
       {
        "sp": "Osoba 1 (K)",
        "t": "Jeżeli szukasz sposobu, żeby poznać nowych znajomych, powinieneś zdecydować się na aktywność fizyczną. Nie musisz od razu uprawiać wspinaczki wysokogórskiej czy innych sportów ekstremalnych. Na początku zapisz się na trening na siłowni. Poznasz aktywnych ludzi, z którymi po ćwiczeniach usiądziecie w barze i zjecie coś smacznego."
       },
       {
        "sp": "Osoba 2 (M)",
        "t": "Możesz zapisać się do klubu dyskusyjnego lub literackiego, żeby brać udział w interesujących wydarzeniach. Dzięki temu twoje życie nie będzie szare i monotonne. Znajdziesz się wśród ciekawych ludzi, z którymi podyskutujesz na różne tematy."
       },
       {
        "sp": "Osoba 3 (K)",
        "t": "Obecnie ludzie nie mają czasu na dbanie o stare przyjaźnie. Warto zadzwonić do kolegów ze szkoły i razem wyjść na obiad czy drinka. Świetnym pomysłem będzie wycieczka z przyjaciółmi w jakieś piękne miejsce. Z całą pewnością będziecie mogli porozmawiać i powspominać stare dobre czasy."
       },
       {
        "sp": "Osoba 4 (M)",
        "t": "Jeśli chcesz poznać znajomych, to powinieneś zapisać się na jakiś kurs. Może to być kurs językowy, programowania albo szycia. Łatwiej jest nawiązać nowe znajomości z ludźmi, którzy mają podobne zainteresowania. Przy okazji możesz nauczyć się czegoś praktycznego."
       }
      ]
     }
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
       "text": "Pacjenci bardzo nisko ocenili jakość jedzenia w szpitalach. Pełne zadowolenie zadeklarowało 48,6% ankietowanych, 23,9% badanych było średnio zadowolonych, a pozostali wyraźnie skrytykowali szpitalne posiłki.",
       "source": "Na podstawie: https://www.rynekzdrowia.pl/Uslugi-medyczne/NFZ-zbadal-poziom-zadowolenia-pacjentow-szpitali-Jak-wypadly-wyniki-ankiety,228565,8.html"
      },
      "prompt": "Z tego tekstu wynika, że",
      "options": [
       {
        "id": "a",
        "text": "w ankiecie wzięli udział chorzy, a także lekarze i personel."
       },
       {
        "id": "b",
        "text": "mniej niż połowie pacjentów bardzo smakuje szpitalne jedzenie."
       },
       {
        "id": "c",
        "text": "ankietowani nie czują się dobrze na szpitalnej diecie."
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
        "text": "Sędzia przerwał mecz piłki nożnej po 26 minutach gry, ponieważ kibice byli bardzo agresywni. Interweniowała policja, więc sytuacja została szybko opanowana. Sędzia nie zdecydował się jednak na kontynuowanie rywalizacji między drużynami. Oba kluby mogą spodziewać się wysokich kar.",
        "source": "Na podstawie: https://sport.fakt.pl/pilka-nozna/przerwany-mecz-moto-jelcz-olawa-gornik-walbrzych-interweniowala-policja/ypzygx0"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "piłkarze z przeciwnych drużyn pokłócili się podczas gry."
        },
        {
         "id": "b",
         "text": "kibice zachowywali się podczas meczu nieodpowiednio."
        },
        {
         "id": "c",
         "text": "po interwencji policji drużyny dokończyły spotkanie."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "Dentysty boją się zarówno dzieci, jak i dorośli. Jest to najczęstszy powód rezygnacji z regularnych wizyt u stomatologa, a to wpływa na stan zębów. Według badań główną przyczyną tego strachu są złe wspomnienia związane z bólem, który kiedyś odczuwaliśmy w gabinecie dentystycznym.",
        "source": "Na podstawie: https://medicus-stomatologia.com/poradnik/jak-przygotowac-sie-do-wizyty-u-dentysty/"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "dzieci boją się dentysty bardziej niż dorośli."
        },
        {
         "id": "b",
         "text": "nie chodzimy do dentysty, bo nie bolą nas zęby."
        },
        {
         "id": "c",
         "text": "boimy się dentysty, ponieważ pamiętamy ból z wcześniejszych wizyt."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "W Polsce niezadowoleni klienci najczęściej oddają do sklepu buty i zegarki. Jednak nie zawsze wiedzą, jakiego dokumentu potrzebują, aby zareklamować produkt. Często nie odróżniają reklamacji od zwrotu lub paragonu od faktury. Konsumenci nadal nie znają dobrze swoich praw.",
        "source": "Na podstawie https://tueuropa.pl/blog/2102/5-rzeczy-ktorych-nie-wiedziales-o-prawie-do-reklamacji"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "Polacy niechętnie zwracają kupione obuwie."
        },
        {
         "id": "b",
         "text": "w Polsce klienci słabo orientują się w prawach konsumenta."
        },
        {
         "id": "c",
         "text": "reklamy produktów powinny informować o prawach konsumentów."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Najnowszą produkcję serwisu Netflix pod tytułem Broad Pick w reżyserii Leszka Dawida mogliśmy obejrzeć po raz pierwszy w niektórych kinach 9 września. To film o miłości do gór, pasji, determinacji. W roli głównej występuje Ireneusz Czop.",
        "source": "Na podstawie: https://www.wroclaw.pl/kultura/broad-peak-netflix-premiera-wroclaw-nowe-horyzonty"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "Leszek Dawid wystąpił w filmie o górach."
        },
        {
         "id": "b",
         "text": "premiera Broad Peak odbyła się dziewiątego września."
        },
        {
         "id": "c",
         "text": "film można obejrzeć tylko na platformie Netflix."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "Opakowania różnych produktów i ich transport są coraz droższe. Z tego powodu restauracje muszą jednorazowo kupować na przykład dziesięć beczek piwa zamiast czterech, ale brakuje im na to pieniędzy. Właściciele lokali nie podnoszą jednak cen, ponieważ boją się, że coraz biedniejsi klienci przestaną odwiedzać restauracje.",
        "source": "Na podstawie: https://www.onet.pl/kultura/lukasz-orbitowski/placcie-gotowka-w-pubach-i-restauracjach-felieton/h6vyexy,30bc1058"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "restauracje utrzymują stałe ceny, bo chcą zatrzymać klientów."
        },
        {
         "id": "b",
         "text": "właściciele zarabiają coraz mniej na sprzedaży piwa"
        },
        {
         "id": "c",
         "text": "klienci nie kupują piwa w restauracjach, ponieważ jego ceny są zbyt wysokie."
        }
       ],
       "answer": "a"
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
     "title": "Poszukiwacz skarbów",
     "source": "Na podstawie: https://wydarzenia.interia.pl/zagranica/news-znalazl-pierscionek-z-diamentem-na-plazy-niewiarygodne-co-z-,nId,6424896",
     "passage": "Joseph Cook, 37 lat, mieszkaniec Florydy jest poszukiwaczem skarbów – to jego hobby. Często chodzi po plaży ze swoim wykrywaczem metalu i szuka przedmiotów zakopanych w piasku. Mężczyzna podczas ostatniego spaceru nad brzegiem oceanu zauważył niezwykłą rzecz. Okazało się, że to pierścionek z diamentem. Nie chciał jednak zostawić go dla siebie. Postanowił jak najszybciej opublikować w mediach społecznościowych wideo, w którym poinformował o swoim odkryciu. Odwiedził też lokalnych jubilerów, aby sprawdzić, czy ktoś w ostatnim czasie nie zgłosił zgubienia cennego przedmiotu. W jednym ze sklepów z biżuterią dowiedział się, że pierścionek jest wart 40 tys. dolarów.\n\nW pierwszych dniach po ogłoszeniach w internecie nikt nie skontaktował się z Josephem. Po kilku dniach zaczął jednak otrzymywać połączenia z nieznanego numeru. Początkowo ignorował je, lecz w końcu zdał sobie sprawę, że być może to właściciel pierścionka chce z nim rozmawiać i odebrał telefon. Joseph umówił się ostatecznie na wideorozmowę z małżeństwem, które spędzało wakacje na Florydzie. Kobieta opisała pierścionek – wszystkie szczegóły się zgadzały. 37-latek spotkał się z właścicielami trzy tygodnie później i zwrócił im za darmo zgubę.\n\nMężczyzna przyznał, że jest szczęśliwy, kiedy może komuś oddać jego rzecz. Zdradził też, że nadal ma około 30 pierścionków, które czekają na swoich właścicieli.",
     "example": {
      "id": "r2.ex",
      "statement": "Joseph Cook jest zawodowym poszukiwaczem skarbów.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Joseph Cook znalazł na plaży pierścionek z drogim kamieniem.",
       "answer": "TAK"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Znalazca postanowił sprzedać pierścionek jednemu z jubilerów.",
       "answer": "NIE"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Właściciele pierścionka zadzwonili do Cooka.",
       "answer": "TAK"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Po wideorozmowie z kobietą Cook był pewien, że pierścionek należy do niej.",
       "answer": "TAK"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Małżeństwo zapłaciło Cookowi 40 tys. dolarów za pierścionek.",
       "answer": "NIE"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Na ostatnim spacerze Cook znalazł jeszcze 30 pierścionków.",
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
     "title": "Staruszkowo",
     "source": "Na podstawie: https://przekroj.pl/spoleczenstwo/staruszkowo-marta-mikita",
     "passage": "Jeden nie widzi i nie słyszy, drugi prawie nie chodzi, {{ex}}. Każdy, kto zajmował się kiedyś starym psem, wie, {{1}}. Teraz wystarczy pomnożyć to przez czterdzieści sześć, bo tyle właśnie zwierząt znajduje się pod opieką Krystyny Seemayer, która od ponad pięciu lat prowadzi fundację Staruszkowo.\n\nZ założenia jest to hospicjum, {{2}}. Nie ma tygodnia bez telefonów i e-maili z prośbami o przyjęcie kolejnych staruszków. Właścicielka nie lubi odmawiać, ale czasem to robi. Nie rozumie ludzi, którzy zamierzają oddać swojego przyjaciela, {{3}}.\n\nW Staruszkowie niektóre zwierzęta czekają na adopcję, lecz zdecydowana większość zamieszkała w tym miejscu już na stałe. Na każdym kroku widać, {{4}}. Może nie ma luksusów, ale zawsze w magazynie jest duży zapas karmy, a w apteczce nie brakuje leków na różne psie choroby. Staruszkowo może się też pochwalić profesjonalnym sprzętem medycznym, {{5}}.\n\nKrystyna Seemayer cały czas rozwija swoje hospicjum i ma nadzieję, {{6}} nawet wtedy, kiedy ona sama nie będzie miała siły opiekować się psami. Staruszkowo jest prawie całkowicie utrzymywane przez prywatnych sponsorów i podobnie {{7}} bardzo liczy na 1% dotacji przekazywanych z naszych podatków.",
     "options": [
      {
       "id": "A",
       "text": "że tu każdą złotówkę należy mądrze wydawać"
      },
      {
       "id": "B",
       "text": "ile takie stworzenie wymaga czasu i pieniędzy"
      },
      {
       "id": "C",
       "text": "że dzięki tym zmianom schronisko przetrwa"
      },
      {
       "id": "D",
       "text": "jak wiele innych fundacji w Polsce"
      },
      {
       "id": "E",
       "text": "ponieważ nie chcą się nim dłużej opiekować"
      },
      {
       "id": "F",
       "text": "a jeszcze innemu nie został ani jeden ząb"
      },
      {
       "id": "G",
       "text": "w którym psy spędzają swoją starość"
      },
      {
       "id": "H",
       "text": "którego nie mają zazwyczaj małe kliniki weterynaryjne"
      }
     ],
     "example": {
      "gap": "ex",
      "answer": "F",
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
       "answer": "G"
      },
      {
       "id": "r3.3",
       "number": 3,
       "gap": "3",
       "answer": "E"
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
       "answer": "C"
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
     "source": "Na podstawie: https://jaktodaleko.pl/jak-kupic-tani-bilet-na-samolot-10-wskazowek/",
     "heading": "Tani bilet na samolot, czyli 8 wskazówek, jak zaoszczędzić duże pieniądze",
     "options": [
      {
       "id": "A",
       "text": "Jeśli zgodzisz się, by regularnie otrzymywać e-maile od linii lotniczych, możesz skorzystać z wielu dodatkowych zniżek. Jest jeden warunek - trzeba te wiadomości czytać."
      },
      {
       "id": "B",
       "text": "Nie podawaj swoich danych, a system nie będzie wiedział, że interesuje cię ten kierunek i nie podniesie ceny biletu."
      },
      {
       "id": "C",
       "text": "Nie zawsze to, co początkowo wydaje się tanie, jest faktycznie niedrogie. Czasem warto oglądać strony różnych najpopularniejszych firm transportowych, choć wiemy, że zwykle mają wysokie ceny."
      },
      {
       "id": "D",
       "text": "Podczas rezerwacji biletu system może nam zaproponować różne drogie usługi, które nie są wliczone do ceny początkowej (na przykład wybór miejsca czy wynajem samochodu). Zwracajmy więc uwagę, co wybieramy."
      },
      {
       "id": "E",
       "text": "Stolice i wielkie aglomeracje są dla turystów jak magnes, dlatego takie kierunki obsługuje dużo firm lotniczych. Dzięki temu, że konkurencja między nimi jest duża, można liczyć na promocje."
      },
      {
       "id": "F",
       "text": "Dla większości osób to jedyne wolne chwile w tygodniu, aby usiąść przy komputerze i znaleźć interesujące miejsce na urlop. Wiedzą o tym także marketingowcy – ceny będą znacznie wyższe."
      },
      {
       "id": "G",
       "text": "Jeśli masz konto w złotówkach i kupujesz bilet w euro, to bank najpierw przeliczy cenę na dolary, a dopiero potem zamieni ją na euro."
      },
      {
       "id": "H",
       "text": "Szczyt sezonu oznacza dużo większe zainteresowanie podróżami. Linie lotnicze zwykle podnoszą ceny, gdy mają pewność, że na droższe bilety i tak znajdą się chętni."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Szukaj anonimowo",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Unikaj okresu wakacyjnego",
       "answer": "H"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Nie kupuj w weekend",
       "answer": "F"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Zapisz się do newslettera",
       "answer": "A"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Uważaj na dodatkowe opłaty",
       "answer": "D"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Wybieraj wielkie miasta",
       "answer": "E"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Porównuj oferty, nie myśl stereotypami",
       "answer": "C"
      },
      {
       "id": "r4.7",
       "number": 7,
       "prompt": "Sprawdź walutę przelewu",
       "answer": "G"
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
     "title": "Dlaczego warto robić listę zakupów?",
     "source": "Na podstawie: https://akademiasmaku.pl/artykul/lista-zakupow-co-warto-zawsze-miec-w-lodowce,161",
     "passage": "Chodzisz do sklepu z gotową {{ex}}, czy może spontanicznie i bez zastanowienia kupujesz to, na co masz ochotę? Jeśli należysz do drugiej grupy {{1}} koniecznie przemyśl, jak możesz skuteczniej robić zakupy.\n\nLista pomaga w {{2}} organizacji wizyty: nie biegasz między regałami i nie zastanawiasz się, czy masz wszystko, czego potrzebujesz. Nie wracasz {{3}} raz do tej samej półki, przy której już byłeś, nie prosisz o pomoc sprzedawców. W ten sposób {{4}} czas i kupujesz tylko to, co jest naprawdę potrzebne i nic więcej. Ignorujesz też promocje i obniżki, którymi firmy chcą przekonać nas do wyboru swojego towaru. Po {{5}} ze sklepu nie musisz się {{6}} tym, że kupiłeś zbyt wiele niepotrzebnych rzeczy.\n\nNajlepszą metodą na zrobienie przemyślanych zakupów {{7}} jest zaplanowanie posiłków na kilka dni. Jeśli {{8}}, co będziesz jeść, wystarczy, że kupisz to, czego potrzebujesz, czego nie masz w kuchni albo właśnie ci się {{9}}.\n\nDo koszyka możesz włożyć również inne produkty, które co prawda nie przydadzą się w {{10}} czasie, ale być może są w niższej cenie. Jeśli masz miejsce do przechowania jedzenia i nie ma ryzyka, że się przeterminuje, warto zrobić takie zapasy.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "książką",
        "kartką",
        "listą"
       ],
       "answer": "listą"
      },
      {
       "id": "1",
       "options": [
        "sprzedawców",
        "klientów",
        "producentów"
       ],
       "answer": "klientów"
      },
      {
       "id": "2",
       "options": [
        "gorszej",
        "lepszej",
        "tańszej"
       ],
       "answer": "lepszej"
      },
      {
       "id": "3",
       "options": [
        "następny",
        "kolejny",
        "ostatni"
       ],
       "answer": "kolejny"
      },
      {
       "id": "4",
       "options": [
        "oszczędzasz",
        "spędzasz",
        "tracisz"
       ],
       "answer": "oszczędzasz"
      },
      {
       "id": "5",
       "options": [
        "wejściu",
        "wyjściu",
        "przejściu"
       ],
       "answer": "wyjściu"
      },
      {
       "id": "6",
       "options": [
        "cieszyć",
        "męczyć",
        "martwić"
       ],
       "answer": "martwić"
      },
      {
       "id": "7",
       "options": [
        "elektronicznych",
        "spożywczych",
        "odzieżowych"
       ],
       "answer": "spożywczych"
      },
      {
       "id": "8",
       "options": [
        "znasz",
        "wiesz",
        "umiesz"
       ],
       "answer": "wiesz"
      },
      {
       "id": "9",
       "options": [
        "kończy",
        "zaczyna",
        "otwiera"
       ],
       "answer": "kończy"
      },
      {
       "id": "10",
       "options": [
        "przyszłym",
        "najbliższym",
        "najdłuższym"
       ],
       "answer": "najbliższym"
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
     "source": "Na podstawie: https://forsal.pl/artykuly/1026638,najwieksze-marzenie-polaka-budowa-wlasnego-domu-na-wsi-przed-40-tka.html",
     "passage": "Wielu z {{ex1}} myśli o tym, aby zamieszkać daleko od ruchliwego {{ex2}}, w {{ex3}} miejscu, wśród łąk, lasów czy jezior.\n\nWłasny dom jest marzeniem, które {{1}} spełniają zwykle przed czterdziestym rokiem życia. Niektórzy twierdzą, że {{2}} domu bardziej się opłaca niż kupienie mieszkania. Wiele osób decyduje się na {{3}} krok, kiedy ma już stałą pracę i rodzinę. Jaki jest {{4}} powód budowy domu? Ludzie chcą mieszkać w ciszy i spokoju, odpoczywać we {{5}} ogrodzie. Dlatego to właśnie na {{6}} powstaje najwięcej {{7}} domów. Budowa trwa kilka {{8}} i dużo kosztuje, często więcej niż {{9}} inwestorzy planowali na początku. Z tego powodu nie zawsze udaje się zakończyć prace budowlane bez {{10}}.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "nasz",
        "nas",
        "nam"
       ],
       "answer": "nas"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "miasta",
        "mieście",
        "miastem"
       ],
       "answer": "miasta"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "ciche",
        "cichemu",
        "cichym"
       ],
       "answer": "cichym"
      },
      {
       "id": "1",
       "options": [
        "Polakom",
        "Polacy",
        "Polaków"
       ],
       "answer": "Polacy"
      },
      {
       "id": "2",
       "options": [
        "budowie",
        "budowy",
        "budowa"
       ],
       "answer": "budowa"
      },
      {
       "id": "3",
       "options": [
        "tego",
        "ten",
        "tę"
       ],
       "answer": "ten"
      },
      {
       "id": "4",
       "options": [
        "najczęstszego",
        "najczęstszy",
        "najczęstszym"
       ],
       "answer": "najczęstszy"
      },
      {
       "id": "5",
       "options": [
        "własnego",
        "własnym",
        "własny"
       ],
       "answer": "własnym"
      },
      {
       "id": "6",
       "options": [
        "wieś",
        "wsi",
        "wsią"
       ],
       "answer": "wsi"
      },
      {
       "id": "7",
       "options": [
        "nowym",
        "nowymi",
        "nowych"
       ],
       "answer": "nowych"
      },
      {
       "id": "8",
       "options": [
        "lat",
        "lata",
        "latami"
       ],
       "answer": "lat"
      },
      {
       "id": "9",
       "options": [
        "jej",
        "niej",
        "nią"
       ],
       "answer": "jej"
      },
      {
       "id": "10",
       "options": [
        "kredytem",
        "kredycie",
        "kredytu"
       ],
       "answer": "kredytu"
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
     "source": "Na podstawie: https://niestatystyczny.pl/2018/04/28/ile-czasu-dziennie-spedza-sie-w-europie-na-czytaniu-ksiazek/",
     "wordBox": [
      "żeby",
      "lecz",
      "ponieważ",
      "więc",
      "dlatego",
      "bo",
      "oraz"
     ],
     "distractors": [
      "dlatego"
     ],
     "passage": "Źle się dzieje w Europie, {{ex}} Europejczycy nie czytają! Eurostat przeprowadził badania, {{1}} się dowiedzieć, ile czasu spędzają na czytaniu mieszkańcy różnych krajów. Okazało się, że średnio w Europie czyta się nie dłużej niż 13 minut dziennie, {{2}} to naprawdę niewiele. Najlepszy wynik ma Estonia, Polacy {{3}} Finowie są na drugim miejscu (czytają 12 minut). W Hiszpanii i Wielkiej Brytanii czyta się około 5 minut w ciągu dnia. Najgorzej w tym zestawieniu wypada Francja, {{4}} tam na czytanie poświęca się tylko 2 minuty dziennie. Może jednak Anglicy, Niemcy, Holendrzy i Włosi wcale nie czytają mniej, {{5}} robią to po prostu szybciej?",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "ponieważ"
      },
      {
       "id": "1",
       "answer": "żeby"
      },
      {
       "id": "2",
       "answer": "więc"
      },
      {
       "id": "3",
       "answer": "oraz"
      },
      {
       "id": "4",
       "answer": "bo"
      },
      {
       "id": "5",
       "answer": "lecz"
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
     "source": "Na podstawie: https://przelambariere.pl/nauka-jezyka-obcego-a-wiek-czy-dzieci-ucza-sie-szybciej-niz-dorosli",
     "passage": "{{ex1}} odbieram telefony od ludzi, którzy mają ponad 50 lat i chcą nauczyć się angielskiego. Pytają, w jaki sposób wybrać jak {{ex2}} metodę. Boją się, że są już za {{1}} na naukę. Uważają, że dzieci uczą się języków {{2}} niż dorośli, bo ich mózg bardzo dobrze zapamiętuje wiedzę. Jednak badania naukowców pokazują, że stwierdzenie: „naukę języka obcego {{3}} zacząć w dzieciństwie” to tylko stereotyp. {{4}} od wieku ucznia jest silna motywacja i systematyczna praca. Ponadto dorośli mają dużo {{5}} zdolność rozumienia reguł gramatycznych.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "Często",
        "częściej",
        "częsty"
       ],
       "answer": "Często"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "skuteczniej",
        "skuteczna",
        "najskuteczniejszą"
       ],
       "answer": "najskuteczniejszą"
      },
      {
       "id": "1",
       "options": [
        "stare",
        "starzy",
        "starsi"
       ],
       "answer": "starzy"
      },
      {
       "id": "2",
       "options": [
        "szybko",
        "szybciej",
        "najszybciej"
       ],
       "answer": "szybciej"
      },
      {
       "id": "3",
       "options": [
        "najlepszy",
        "najlepsi",
        "najlepiej"
       ],
       "answer": "najlepiej"
      },
      {
       "id": "4",
       "options": [
        "Ważniejsza",
        "Najważniejsza",
        "Ważniej"
       ],
       "answer": "Ważniejsza"
      },
      {
       "id": "5",
       "options": [
        "więcej",
        "większą",
        "wielką"
       ],
       "answer": "większą"
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
     "passage": "Moja sąsiadka Ania od kilku miesięcy {{ex1}} w znanej firmie kosmetycznej, choć w dzieciństwie {{ex2}} o zawodzie weterynarza. Po skończeniu liceum brat {{1}} jej, żeby poszła na studia na Wydziale Zarządzania. Na uczelni Ania bardzo {{2}} marketingiem. Dwa razy {{3}} praktykę studencką w dziale sprzedaży u znanego producenta szamponów i odżywek do włosów. Ania {{4}} tam życzliwych ludzi, którzy {{5}} jej, jak przygotować dobrą kampanię marketingową. Teraz sama {{6}} badania konsumenckie i {{7}} promocję produktów. Chętnie {{8}} swoje umiejętności na dodatkowych kursach i szkoleniach. {{9}}, że ona i wszystkie osoby z jej działu {{10}} swoją pracę.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "pracować",
       "answer": "pracuje"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "marzyć",
       "answer": "marzyła"
      },
      {
       "id": "1",
       "given": "poradzić",
       "answer": "poradził"
      },
      {
       "id": "2",
       "given": "zainteresować się",
       "answer": "zainteresowała się"
      },
      {
       "id": "3",
       "given": "ona – mieć",
       "answer": "miała"
      },
      {
       "id": "4",
       "given": "spotkać",
       "answer": "spotkała"
      },
      {
       "id": "5",
       "given": "pokazać",
       "answer": "pokazali"
      },
      {
       "id": "6",
       "given": "prowadzić",
       "answer": "prowadzi"
      },
      {
       "id": "7",
       "given": "planować",
       "answer": "planuje"
      },
      {
       "id": "8",
       "given": "rozwijać",
       "answer": "rozwija"
      },
      {
       "id": "9",
       "given": "ja – Wiedzieć",
       "answer": "wiem"
      },
      {
       "id": "10",
       "given": "uwielbiać",
       "answer": "uwielbiają"
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
      "sentence": "Lubili rozmawiać o podróżach.",
      "underlined": "o podróżach",
      "stem": "…………… lubili rozmawiać?",
      "shortAnswer": "O podróżach.",
      "answer": "O czym",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Jego ulubiony piórnik jest z metalu.",
       "underlined": "z metalu",
       "stem": "…………… jest jego ulubiony piórnik?",
       "shortAnswer": "Z metalu.",
       "answer": "Z czego",
       "accept": [
        "Z jakiego materiału"
       ]
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Jej brat nigdy nie słuchał muzyki klasycznej.",
       "underlined": "klasycznej",
       "stem": "…………… muzyki jej brat nigdy nie słuchał?",
       "shortAnswer": "Klasycznej.",
       "answer": "Jakiej",
       "accept": []
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Dom rodziców Zenka stoi na wzgórzu.",
       "underlined": "rodziców Zenka",
       "stem": "…………… dom stoi na wzgórzu?",
       "shortAnswer": "Rodziców Zenka.",
       "answer": "Czyj",
       "accept": []
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Adam dobrze zna rodzinę Kowalskich.",
       "underlined": "rodzinę Kowalskich",
       "stem": "…………… Adam dobrze zna?",
       "shortAnswer": "Rodzinę Kowalskich.",
       "answer": "Kogo",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Jan mieszka na pierwszym piętrze.",
       "underlined": "pierwszym",
       "stem": "…………… piętrze mieszka Jan?",
       "shortAnswer": "Na pierwszym.",
       "answer": "Na którym",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Official key prints the question word with decoration (Kogo…?); stored without it, match.stripChars ignores the decoration.",
      "Key 1 lists two variants (Z czego…? / Z jakiego materiału…?): first is the answer, the other in accept."
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
      "source": "Marta zwykle ma na sobie ten płaszcz.",
      "hint": "ubrana",
      "answer": "Marta zwykle jest ubrana w ten płaszcz.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "Pani Basia jest dzisiaj piękna i elegancka.",
       "hint": "wygląda",
       "answer": "Pani Basia wygląda dzisiaj pięknie i elegancko.",
       "rubric": "2 transformacje (2 x 0,5)",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 1
        }
       ]
      },
      {
       "id": "g6.2",
       "number": 2,
       "source": "Wczoraj byliśmy z wizytą u naszej cioci.",
       "hint": "odwiedziliśmy",
       "answer": "Wczoraj odwiedziliśmy naszą ciocię.",
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
       "source": "Adam jest wyższy niż mój brat.",
       "hint": "od",
       "answer": "Adam jest wyższy od mojego brata.",
       "rubric": "2 transformacje (2 x 0,5)",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 1
        }
       ]
      },
      {
       "id": "g6.4",
       "number": 4,
       "source": "Rodzice dali Janowi rower.",
       "hint": "dostał",
       "answer": "Jan dostał od rodziców rower.",
       "rubric": "odpowiedni przyimek 0,25 + 2 transformacje (2 x 0,25) + brak transformacji 0,25",
       "rubricParts": [
        {
         "what": "odpowiedni przyimek",
         "points": 0.25
        },
        {
         "what": "2 transformacje",
         "points": 0.5
        },
        {
         "what": "brak transformacji",
         "points": 0.25
        }
       ]
      },
      {
       "id": "g6.5",
       "number": 5,
       "source": "Ani nie było na urodzinowej kolacji.",
       "hint": "nie przyszła",
       "answer": "Ania nie przyszła na urodzinową kolację.",
       "rubric": "zmiana podmiotu na M. 0,5 p. + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "zmiana podmiotu na M.",
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
     "passage": "Andrzej: Wiesz, że 22 kwietnia jest Światowy Dzień Ziemi? {{ex1}} z tej okazji konkurs plastyczny dla uczniów naszej szkoły: „Co dzieci {{ex2}} zrobić dla swojej planety?”.\n\nJoanna: To świetny pomysł! Bardzo {{1}} ci w tym pomóc. {{2}}, co mogę zrobić.\n\nAndrzej: Pięknie rysujesz, więc może {{3}} plakat informacyjny o konkursie?\n\nJoanna: Oczywiście! Gdybyśmy zaraz {{4}}, co powinno się na nim znaleźć, to nawet jeszcze dziś wieczorem zrobię wstępny projekt.\n\nAndrzej: Jeśli masz czas, to {{5}} wspólnie, kogo zaprosić do jury konkursowego.\n\nJoanna: Moim zdaniem to nauczyciele plastyki najbardziej profesjonalnie {{6}} prace dzieci.\n\nAndrzej: Myślę, że {{7}} współpracę również nauczycielowi biologii? Co tym sądzisz?\n\nJoanna: {{8}} go do komitetu organizacyjnego! Wiem, że jest bardzo zaangażowany w ochronę środowiska, więc myślę, że się zgodzi.\n\nAndrzej: Trzeba też przygotować jakieś nagrody dla zwycięzców…\n\nJoanna: Najlepiej {{9}} o tym z panią dyrektor. {{10}} ci znaleźć jakiegoś sponsora.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "Zorganizujmy",
        "zorganizowałaby",
        "organizujmy"
       ],
       "answer": "Zorganizujmy"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "mogliby",
        "mogłyby",
        "niech mogą"
       ],
       "answer": "mogłyby"
      },
      {
       "id": "1",
       "options": [
        "chciałabym",
        "chciałbyś",
        "chcieliby"
       ],
       "answer": "chciałabym"
      },
      {
       "id": "2",
       "options": [
        "Niech powie",
        "Powiedz",
        "Mówiłbyś"
       ],
       "answer": "Powiedz"
      },
      {
       "id": "3",
       "options": [
        "malowałabyś",
        "namalowałabyś",
        "maluj"
       ],
       "answer": "namalowałabyś"
      },
      {
       "id": "4",
       "options": [
        "omówiliśmy",
        "omawiamy",
        "omówili"
       ],
       "answer": "omówili"
      },
      {
       "id": "5",
       "options": [
        "zastanówmy się",
        "zastanów się",
        "zastanowiłabyś się"
       ],
       "answer": "zastanówmy się"
      },
      {
       "id": "6",
       "options": [
        "niech ocenią",
        "oceniliby",
        "oceniałyby"
       ],
       "answer": "oceniliby"
      },
      {
       "id": "7",
       "options": [
        "zaproponowałby",
        "proponuj",
        "zaproponowałbym"
       ],
       "answer": "zaproponowałbym"
      },
      {
       "id": "8",
       "options": [
        "Zaprosiłby",
        "Zaprośmy",
        "Zaprosiliby"
       ],
       "answer": "Zaprośmy"
      },
      {
       "id": "9",
       "options": [
        "porozmawialiby",
        "rozmawiałbyś",
        "porozmawiaj"
       ],
       "answer": "porozmawiaj"
      },
      {
       "id": "10",
       "options": [
        "Pomógłby",
        "Niech pomoże",
        "Pomóż"
       ],
       "answer": "Niech pomoże"
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
     "source": "Na podstawie: https://kobieta.dziennik.pl/twoje-emocje/artykuly/607905,jak-poprawic-sobie-nastroj-jesienia.html",
     "wordBox": [
      "po",
      "z",
      "od",
      "dla",
      "za",
      "o",
      "na"
     ],
     "distractors": [
      "od"
     ],
     "passage": "Jesienią często mamy gorszy nastrój. Marzymy {{ex}} słońcu, ale {{1}} oknem pada deszcz, jest szaro i smutno. Co możemy zrobić, aby poczuć się lepiej? {{2}} pierwsze warto udekorować dom kwiatami i wesołymi poduszkami. Kolory takie jak żółty, zielony czy pomarańczowy to dobre lekarstwo {{3}} zmęczenie i stres. Jeśli nie mamy energii, powinniśmy pić soki, jeść dużo ryb, owoców i różne sałatki {{4}} warzyw. Ruch również jest ważny {{5}} dobrego samopoczucia, na przykład krótki, poranny jogging.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "o"
      },
      {
       "id": "1",
       "answer": "za"
      },
      {
       "id": "2",
       "answer": "po"
      },
      {
       "id": "3",
       "answer": "na"
      },
      {
       "id": "4",
       "answer": "z"
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
         "genre": "ogłoszenie",
         "wordTarget": 35,
         "prompt": "Wyprowadza się Pani/Pan z mieszkania i chce sprzedać meble. Proszę napisać ogłoszenie, które zamieści Pani/Pan na stronie internetowej „Na Sprzedaż“."
        },
        {
         "id": "b",
         "genre": "charakterystyka",
         "wordTarget": 165,
         "prompt": "Proszę napisać charakterystykę członka rodziny, który zajmuje ważne miejsce w Pani/Pana życiu. Tekst ukaże się w lokalnej gazecie w dziale: „Ludzie ważni w moim życiu“."
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
         "prompt": "Jest Pani/Pan na wycieczce integracyjnej, w której uczestniczą osoby z kilku krajów. Proszę napisać pozdrowienia do swojej nauczycielki / swojego nauczyciela języka polskiego."
        },
        {
         "id": "b",
         "genre": "e-mail",
         "wordTarget": 170,
         "prompt": "W e-mailu do koleżanki/kolegi z Polski proszę opisać swoją imprezę urodzinową oraz oryginalny prezent, który Pani otrzymała / Pan otrzymał."
        }
       ]
      },
      {
       "id": "III",
       "parts": [
        {
         "id": "a",
         "genre": "życzenia",
         "wordTarget": 30,
         "prompt": "Dyrektor polskiej firmy, w której Pani/Pan pracuje, obchodzi jubileusz – 10 lat pracy. Proszę napisać dla niego życzenia z tej okazji."
        },
        {
         "id": "b",
         "genre": "opowiadanie",
         "wordTarget": 170,
         "prompt": "Na kursie języka polskiego, w którym bierze Pani/Pan udział, ogłoszono konkurs na najciekawsze opowiadanie. Proszę napisać opowiadanie, które zacznie się od zdania „Tego dnia obudziłam się/obudziłem się z bólem głowy“.",
         "startsWith": "Tego dnia obudziłam się/obudziłem się z bólem głowy"
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
