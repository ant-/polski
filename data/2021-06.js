window.EXAMS = window.EXAMS || {};
window.EXAMS["2021-06"] = {
 "schemaVersion": 1,
 "id": "2021-06",
 "meta": {
  "level": "B1",
  "labelPdf": "czerwiec 2021",
  "examDates": "19-20.06.2021",
  "sources": {
   "test": "sources/2021-06/test.pdf",
   "transcript": "sources/2021-06/transcript.pdf",
   "audio": "sources/2021-06/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY). Writing set III b is a photo prompt (cruise ship, data/img/2021-06/w-III-b.jpg).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear; for this 2021 session only whole plays are offered (per-item times unreliable).",
   "Listening II is 8 dialogues MC (8 x 1 p.); III is TAK/NIE on one text (5 items); IV is a column I -> II match table (A-F, all used incl. the example); V is picture matching (10 texts <-> photos B-K, A = example).",
   "Reading III has fragments A-H (all used incl. example G); reading V is inline choice with 8 gaps (8 x 0,5 p.).",
   "Grammar IV is present & future tense; grammar VIII is inline choice of a preposition (not a word box).",
   "Reading IV: the printed answer table shows F for the example although the shaded example paragraph is C (official typo, see task pdfNotes)."
  ]
 },
 "audio": {
  "src": "sources/2021-06/audio.mp3",
  "duration": 1677.2,
  "intro": [
   0,
   51.1
  ],
  "readingTime": [
   51.1,
   111.7
  ],
  "tail": [
   1614.2,
   1677.2
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
       111.7,
       127.8
      ],
      "plays": [
       {
        "start": 138.1,
        "end": 342.5
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
        "text": "u fryzjera."
       },
       {
        "id": "b",
        "text": "u krawca."
       },
       {
        "id": "c",
        "text": "u mechanika."
       }
      ],
      "answer": "b",
      "shown": true,
      "transcript": {
       "sp": "K",
       "t": "Proszę skrócić nogawki i wymienić zamek."
      }
     },
     "items": [
      {
       "id": "l1.1",
       "number": 1,
       "prompt": "Ta wypowiedź ma miejsce",
       "options": [
        {
         "id": "a",
         "text": "po meczu."
        },
        {
         "id": "b",
         "text": "na granicy."
        },
        {
         "id": "c",
         "text": "u weterynarza."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Brawo, dostaliśmy się do finału!"
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "propozycję."
        },
        {
         "id": "b",
         "text": "radę."
        },
        {
         "id": "c",
         "text": "odmowę."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "W żadnym wypadku nie pojadę w góry."
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w księgarni."
        },
        {
         "id": "b",
         "text": "w biurze podróży."
        },
        {
         "id": "c",
         "text": "w muzeum."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Czy jest jakiś niedrogi kieszonkowy przewodnik po Barcelonie?"
       }
      },
      {
       "id": "l1.4",
       "number": 4,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "zawiadomienie."
        },
        {
         "id": "b",
         "text": "zaproszenie."
        },
        {
         "id": "c",
         "text": "rozkaz."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Wpadnij na moją imprezę urodzinową!"
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w pubie."
        },
        {
         "id": "b",
         "text": "w aptece."
        },
        {
         "id": "c",
         "text": "w serwisie samochodowym."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Osobom nieletnim alkoholu nie serwujemy."
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź oznacza, że ona jest",
       "options": [
        {
         "id": "a",
         "text": "zachwycona."
        },
        {
         "id": "b",
         "text": "rozczarowana."
        },
        {
         "id": "c",
         "text": "szczęśliwa."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Fatalna gra aktorska, nie podobała mi się scenografia, stracony czas!"
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź oznacza, że on zadzwonił",
       "options": [
        {
         "id": "a",
         "text": "do lekarza."
        },
        {
         "id": "b",
         "text": "do sąsiada."
        },
        {
         "id": "c",
         "text": "do hydraulika."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Halo, słyszy mnie pan? Pytałem, kiedy może pan do mnie przyjść? Sąsiad zalał mi mieszkanie."
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "To wypowiedź",
       "options": [
        {
         "id": "a",
         "text": "szefa."
        },
        {
         "id": "b",
         "text": "pracownika."
        },
        {
         "id": "c",
         "text": "klienta."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Niestety nie damy panu podwyżki."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "radę."
        },
        {
         "id": "b",
         "text": "podziękowanie."
        },
        {
         "id": "c",
         "text": "pochwałę."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Punktualność to pani mocna strona."
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w szpitalu."
        },
        {
         "id": "b",
         "text": "w kuchni."
        },
        {
         "id": "c",
         "text": "u fryzjera."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "On jest gorący, musimy obniżyć temperaturę i podawać dużo wody."
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "rozkaz."
        },
        {
         "id": "b",
         "text": "komplement."
        },
        {
         "id": "c",
         "text": "krytyka."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Palce lizać! Małgosiu, jak ty to robisz?"
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w szkole."
        },
        {
         "id": "b",
         "text": "u dentysty."
        },
        {
         "id": "c",
         "text": "w serwisie samochodowym."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Szóstka do leczenia, piątka zdrowa."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź oznacza, że ona",
       "options": [
        {
         "id": "a",
         "text": "jest zdenerwowana."
        },
        {
         "id": "b",
         "text": "ma wątpliwości."
        },
        {
         "id": "c",
         "text": "prosi o życzenia."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Czy ja wiem? Magda nigdy do nas nie wysyła życzeń."
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w kinie."
        },
        {
         "id": "b",
         "text": "w sklepie."
        },
        {
         "id": "c",
         "text": "na poczcie."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Zwykły czy polecony?"
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
       352.7,
       368.7
      ],
      "plays": [
       {
        "start": 379.1,
        "end": 505.7
       },
       {
        "start": 553.0,
        "end": 679.6
       }
      ],
      "pauseBetweenPlays": 47.3,
      "source": "auto-silencedetect",
      "verified": false
     },
     "example": {
      "id": "l2.ex",
      "prompt": "Z tego dialogu dowiadujemy się, że ona",
      "options": [
       {
        "id": "a",
        "text": "chce zatankować cały bak."
       },
       {
        "id": "b",
        "text": "nie przyjmuje pomocy."
       },
       {
        "id": "c",
        "text": "tankuje pół baku."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "lines": [
        {
         "sp": "M",
         "t": "Dzień dobry, którą pani wybiera? Normalną czy premium?"
        },
        {
         "sp": "K",
         "t": "Premium, poproszę. Do pełna."
        }
       ]
      }
     },
     "items": [
      {
       "id": "l2.1",
       "number": 1,
       "prompt": "Z tego dialogu dowiadujemy się, że autobus przyjedzie",
       "options": [
        {
         "id": "a",
         "text": "dokładnie za 15 minut."
        },
        {
         "id": "b",
         "text": "za około 15 minut."
        },
        {
         "id": "c",
         "text": "15 minut później."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Czy autobus już odjechał?"
         },
         {
          "sp": "K",
          "t": "Nie, będzie za mniej więcej 15 minut."
         }
        ]
       }
      },
      {
       "id": "l2.2",
       "number": 2,
       "prompt": "Z tego dialogu dowiadujemy się, że",
       "options": [
        {
         "id": "a",
         "text": "koszty mediów są wysokie."
        },
        {
         "id": "b",
         "text": "nie trzeba płacić dodatkowo za media."
        },
        {
         "id": "c",
         "text": "za media płaci się dodatkowo."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "A czynsz obejmuje opłaty za media?"
         },
         {
          "sp": "M",
          "t": "Niestety, za wodę, ogrzewanie i prąd są oddzielne rachunki."
         }
        ]
       }
      },
      {
       "id": "l2.3",
       "number": 3,
       "prompt": "Z tego dialogu dowiadujemy się, że ona",
       "options": [
        {
         "id": "a",
         "text": "jest niezdecydowana."
        },
        {
         "id": "b",
         "text": "rezygnuje z zamówienia."
        },
        {
         "id": "c",
         "text": "nie ma wyboru."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Czy mogę przyjąć zamówienie?"
         },
         {
          "sp": "K",
          "t": "Jeszcze się zastanawiam."
         }
        ]
       }
      },
      {
       "id": "l2.4",
       "number": 4,
       "prompt": "Z tego dialogu dowiadujemy się, że on",
       "options": [
        {
         "id": "a",
         "text": "dzwoni do szpitala."
        },
        {
         "id": "b",
         "text": "nie może długo czekać na poradę lekarską."
        },
        {
         "id": "c",
         "text": "zapomniał, kiedy umówił się na wizytę."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Przychodnia, w czym mogę pomóc?"
         },
         {
          "sp": "M",
          "t": "Chciałbym umówić się na wizytę. Im szybciej, tym lepiej."
         }
        ]
       }
      },
      {
       "id": "l2.5",
       "number": 5,
       "prompt": "Z tego dialogu dowiadujemy się, że on",
       "options": [
        {
         "id": "a",
         "text": "proponuje wspólny wyjazd."
        },
        {
         "id": "b",
         "text": "musi naprawić swój rower."
        },
        {
         "id": "c",
         "text": "zgadza się na wspólną wycieczkę."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Może pojechalibyśmy na wycieczkę rowerową za miasto?"
         },
         {
          "sp": "K",
          "t": "Z przyjemnością, ale mój rower jest w naprawie."
         }
        ]
       }
      },
      {
       "id": "l2.6",
       "number": 6,
       "prompt": "Z tego dialogu dowiadujemy się, że sukienka",
       "options": [
        {
         "id": "a",
         "text": "ma za duży rozmiar."
        },
        {
         "id": "b",
         "text": "dobrze pasuje."
        },
        {
         "id": "c",
         "text": "jest zbyt mała."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Myślisz, że sukienka jest za ciasna?"
         },
         {
          "sp": "M",
          "t": "Chyba jednak musisz mieć większy rozmiar."
         }
        ]
       }
      },
      {
       "id": "l2.7",
       "number": 7,
       "prompt": "Z tego dialogu dowiadujemy się, że",
       "options": [
        {
         "id": "a",
         "text": "ona wychodzi za mąż."
        },
        {
         "id": "b",
         "text": "ona jest zdziwiona."
        },
        {
         "id": "c",
         "text": "on jest synem kobiety."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Babciu, w lipcu się żenię."
         },
         {
          "sp": "K",
          "t": "Naprawdę? Moje dziecko, przecież jesteś jeszcze taki młody."
         }
        ]
       }
      },
      {
       "id": "l2.8",
       "number": 8,
       "prompt": "Z tego dialogu dowiadujemy się, że ona",
       "options": [
        {
         "id": "a",
         "text": "następnego dnia pracuje."
        },
        {
         "id": "b",
         "text": "pyta o plany na kolejny dzień."
        },
        {
         "id": "c",
         "text": "zwykle długo pracuje."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Jutro wyjątkowo mam wolne."
         },
         {
          "sp": "K",
          "t": "Co zamierzasz robić?"
         }
        ]
       }
      }
     ]
    },
    {
     "id": "l3",
     "number": "III",
     "type": "tf",
     "grading": "auto",
     "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać informacji na temat wyprzedaży garażowych. Proszę zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: https://warszawa.tvp.pl/49848099/trwa-sezon-na-warszawskie-garazowki-tam-znajdziesz-prawdziwe-perelki",
     "audio": {
      "announce": [
       690.6,
       706.3
      ],
      "plays": [
       {
        "start": 716.5,
        "end": 795.3
       },
       {
        "start": 841.8,
        "end": 920.6
       }
      ],
      "pauseBetweenPlays": 46.5,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "text": "Masz w domu rzeczy, których już nie używasz, a które ktoś inny mógłby wykorzystać? Szukasz niespotykanych przedmiotów? Zapraszamy wszystkich mieszkańców stolicy na kolejne wyprzedaże garażowe. Wydarzenie odbywa się regularnie w kilku dzielnicach miasta i przyciąga coraz więcej zainteresowanych. Akcja ta skierowana jest głównie do tych mieszkańców Warszawy, którzy chcą sprzedać używane przedmioty oraz tych, którzy chcą coś tanio kupić z drugiej ręki. Na takich wyprzedażach można znaleźć między innymi zabawki, sprzęty gospodarstwa domowego, książki, biżuterię i wiele innych cennych rzeczy, których nie ma w sklepach. Wyprzedaże odbywają się głównie w znanych i łatwo dostępnych dla wszystkich miejscach – w parkach, na parkingach przy urzędach miasta. Mieszkańcy każdej z dzielnic na pewno znajdą je w swojej okolicy. Warto dodać, że wstęp jest darmowy. Takie inicjatywy propagują styl życia, w którym nic się nie marnuje i uczą najmłodsze pokolenia, że nie wszystko od razu trzeba wyrzucać."
     },
     "example": {
      "id": "l3.ex",
      "statement": "Wyprzedaże garażowe odbywają się w Warszawie.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "statement": "Wyprzedaże garażowe to akcja zorganizowana po raz pierwszy.",
       "answer": "NIE"
      },
      {
       "id": "l3.2",
       "number": 2,
       "statement": "Sklepy oferują tu towary w promocyjnych cenach.",
       "answer": "NIE"
      },
      {
       "id": "l3.3",
       "number": 3,
       "statement": "Mieszkańcy organizują wyprzedaże w swoich garażach.",
       "answer": "NIE"
      },
      {
       "id": "l3.4",
       "number": 4,
       "statement": "Żeby wziąć udział w wydarzeniu, nie trzeba kupować biletu wstępu.",
       "answer": "TAK"
      },
      {
       "id": "l3.5",
       "number": 5,
       "statement": "Wyprzedaże garażowe mają wartość edukacyjną.",
       "answer": "TAK"
      }
     ]
    },
    {
     "id": "l4",
     "number": "IV",
     "type": "match",
     "grading": "auto",
     "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać tekstu na temat atrakcji turystycznych Lęborka oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://www.polskieradio.pl/10/4893/Artykul/1630370,Wyjatkowa-trasa-na-lato-Odwiedz-Pomorze-i-Opolszczyzne",
     "audio": {
      "announce": [
       931.8,
       947.7
      ],
      "plays": [
       {
        "start": 957.9,
        "end": 1047.7
       },
       {
        "start": 1094.2,
        "end": 1183.9
       }
      ],
      "pauseBetweenPlays": 46.5,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "text": "Naprawdę warto pojechać do Lęborka. Ogromną popularnością wśród turystów cieszy się ulica Staromiejska – prowadzi ona pomiędzy kamieniczkami, które tworzą specyficzną atmosferę. Ulica ta biegnie wzdłuż starych murów miejskich, nad którymi widać dwie wieże. Jedna z nich ma wspaniały taras, z którego można podziwiać panoramę Lęborka. Istnieje legenda, że była tam zamknięta córka burmistrza, gdy nie chciała poślubić narzeczonego, którego wybrał jej ojciec. W mieście znajdują się dwie informacje turystyczne. Pierwsza jest przy urzędzie miasta, druga od niedawna mieści się w odrestaurowanym budynku starego dworca kolejowego. Turysta może tu dostać ulotki, mapy i informatory potrzebne podczas zwiedzania. Urząd miasta wybudowano ponad sto lat temu. Każdy, kto przyjedzie do Lęborka, powinien też wejść do muzeum, które słynie z bardzo ciekawej ekspozycji. W tym miejscu turyści mogą wypożyczyć za darmo słuchawki i w wybranym języku dowiedzieć się czegoś o mieście. W słuchawkach można także pójść na półgodzinny spacer po Lęborku."
     },
     "options": [
      {
       "id": "A",
       "text": "jest koło urzędu miasta."
      },
      {
       "id": "B",
       "text": "jest po remoncie."
      },
      {
       "id": "C",
       "text": "oferuje bezpłatne audio przewodniki."
      },
      {
       "id": "D",
       "text": "ma wspaniały widok na miasto."
      },
      {
       "id": "E",
       "text": "ma niepowtarzalny klimat."
      },
      {
       "id": "F",
       "text": "ma więcej niż sto lat."
      }
     ],
     "example": {
      "id": "l4.ex",
      "prompt": "Ulica Staromiejska",
      "answer": "E",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "prompt": "Wieża",
       "answer": "D"
      },
      {
       "id": "l4.2",
       "number": 2,
       "prompt": "Informacja turystyczna",
       "answer": "A"
      },
      {
       "id": "l4.3",
       "number": 3,
       "prompt": "Urząd miasta",
       "answer": "F"
      },
      {
       "id": "l4.4",
       "number": 4,
       "prompt": "Dworzec kolejowy",
       "answer": "B"
      },
      {
       "id": "l4.5",
       "number": 5,
       "prompt": "Muzeum",
       "answer": "C"
      }
     ]
    },
    {
     "id": "l5",
     "number": "V",
     "type": "match",
     "grading": "auto",
     "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać tekstów dotyczących przygotowania do pracy zdalnej i dopasować numer tekstu do ilustracji.",
     "pointsFormula": "10 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 7,
     "audio": {
      "announce": [
       1194.9,
       1210.9
      ],
      "plays": [
       {
        "start": 1221.1,
        "end": 1386.2
       },
       {
        "start": 1432.2,
        "end": 1597.2
       }
      ],
      "pauseBetweenPlays": 46.0,
      "source": "auto-silencedetect",
      "verified": false
     },
     "options": [
      {
       "id": "PRZYKŁAD",
       "text": "PRZYKŁAD"
      },
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
      }
     ],
     "example": {
      "id": "l5.ex",
      "label": "A",
      "image": "data/img/2021-06/l5-A.jpg",
      "answer": "PRZYKŁAD",
      "shown": true
     },
     "items": [
      {
       "id": "l5.1",
       "number": 1,
       "label": "B",
       "image": "data/img/2021-06/l5-B.jpg",
       "answer": "6"
      },
      {
       "id": "l5.2",
       "number": 2,
       "label": "C",
       "image": "data/img/2021-06/l5-C.jpg",
       "answer": "7"
      },
      {
       "id": "l5.3",
       "number": 3,
       "label": "D",
       "image": "data/img/2021-06/l5-D.jpg",
       "answer": "9"
      },
      {
       "id": "l5.4",
       "number": 4,
       "label": "E",
       "image": "data/img/2021-06/l5-E.jpg",
       "answer": "10"
      },
      {
       "id": "l5.5",
       "number": 5,
       "label": "F",
       "image": "data/img/2021-06/l5-F.jpg",
       "answer": "5"
      },
      {
       "id": "l5.6",
       "number": 6,
       "label": "G",
       "image": "data/img/2021-06/l5-G.jpg",
       "answer": "1"
      },
      {
       "id": "l5.7",
       "number": 7,
       "label": "H",
       "image": "data/img/2021-06/l5-H.jpg",
       "answer": "4"
      },
      {
       "id": "l5.8",
       "number": 8,
       "label": "I",
       "image": "data/img/2021-06/l5-I.jpg",
       "answer": "2"
      },
      {
       "id": "l5.9",
       "number": 9,
       "label": "J",
       "image": "data/img/2021-06/l5-J.jpg",
       "answer": "3"
      },
      {
       "id": "l5.10",
       "number": 10,
       "label": "K",
       "image": "data/img/2021-06/l5-K.jpg",
       "answer": "8"
      }
     ],
     "transcript": {
      "lines": [
       {
        "sp": "Przykład (M)",
        "t": "Zdecyduj, gdzie będzie twoje miejsce pracy i odpowiednio je przygotuj."
       },
       {
        "sp": "Tekst 1 (K)",
        "t": "Upewnij się, że masz dobre łącze internetowe. Lepszym rozwiązaniem jest skorzystanie z kabla sieciowego, a nie WiFi."
       },
       {
        "sp": "Tekst 2 (M)",
        "t": "Zadbaj o dobre relacje z innymi pracownikami. Rozmawiaj z nimi online podczas przerw nie tylko na tematy związane z pracą."
       },
       {
        "sp": "Tekst 3 (K)",
        "t": "Miej porządek w dokumentach. Dzięki temu niczego nie zgubisz i szybciej odnajdziesz to, czego potrzebujesz."
       },
       {
        "sp": "Tekst 4 (M)",
        "t": "Nie pracuj w piżamie lub dresach. Ubierz się tak jak do pracy w biurze albo załóż przynajmniej dżinsy i koszulę."
       },
       {
        "sp": "Tekst 5 (K)",
        "t": "Stwórz plan dnia i listę zadań. Zadbaj o to, by zaplanować też czas na odpoczynek."
       },
       {
        "sp": "Tekst 6 (M)",
        "t": "Wyłącz telewizor, tablet, nie sprawdzaj Facebooka. W najbliższej przestrzeni nie powinno być sprzętów, które mogą przeszkadzać w pracy."
       },
       {
        "sp": "Tekst 7 (K)",
        "t": "Rób częste przerwy, wstań od biurka, wyjrzyj przez okno. Wykonaj kilka ćwiczeń fizycznych."
       },
       {
        "sp": "Tekst 8 (M)",
        "t": "Ustal, o której godzinie kończysz pracę i wyłącz komputer."
       },
       {
        "sp": "Tekst 9 (K)",
        "t": "Zmieniaj otoczenie, odpocznij na świeżym powietrzu, idź na spacer na przykład do lasu."
       },
       {
        "sp": "Tekst 10 (M)",
        "t": "Raz na jakiś czas zaproś kogoś do siebie. Spotkania ze znajomymi to świetny sposób na relaks, a zbyt długa praca w samotności nie jest dobra."
       }
      ]
     },
     "pdfNotes": [
      "The test booklet prints only „Źródło zdjęć: www.freepik.com” for this task; the text source („Na podstawie: https://nofluffjobs.com/blog/10-wskazowek-ktore-pomoga-ci-przygotowac-sie-do-pracy-zdalnej/”) is given only in the transcript.",
      "Photos extracted from test.pdf p.7 into data/img/2021-06/ (tools/extract_images.sh drops picture G because its placement matrix has a negative width, so all 11 were copied from the pdftohtml output o-7_1..11.jpg directly); A..K order verified against a page render (A desk, B devices, C man in office, D hiker in forest, E friends, F notebook, G network cable, H man with ties, I video call, J binders, K laptop „DO WIDZENIA”)."
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
       "text": "Używanie plastikowych przedmiotów spowodowało, że jest ich wszędzie pełno, a to z kolei wpływa na zanieczyszczenie środowiska naturalnego. Naukowcy twierdzą, że jeśli do roku 2050 nic się nie zmieni, to ilość plastiku w oceanach przewyższy liczbę ryb.",
       "source": "Na podstawie: https://babaryba.pl/Plastik-fantastik-edukacyjna-ksiazka-ekologiczna-dla-dzieci-o-plastiku-smieciach-i-recyklingu"
      },
      "prompt": "Z tego tekstu wynika, że w przyszłości",
      "options": [
       {
        "id": "a",
        "text": "w oceanach może pływać więcej ryb niż teraz."
       },
       {
        "id": "b",
        "text": "plastik będzie coraz bardziej popularny."
       },
       {
        "id": "c",
        "text": "w oceanach może być mniej ryb niż plastiku."
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
        "text": "Zawsze przed nowym sezonem wyrzucam wszystkie ubrania z szafy i układam zestawy, które do siebie pasują. Robię im zdjęcia telefonem i zapisuję swoje kolekcje. Rano zazwyczaj mam za mało czasu, żeby myśleć o stroju. Korzystam wtedy z tych zdjęć i już wiem, w co się ubrać.",
        "source": "Na podstawie: https://www.nebule.pl/stylizacje-na-jesien-zime-10-ciekawych-propozycji-i-poradnik-jak-kupuje-ubrania-taniej/"
       },
       "prompt": "Z tego tekstu wynika, że autorka",
       "options": [
        {
         "id": "a",
         "text": "przygotowuje wcześniej zestawy na cały sezon."
        },
        {
         "id": "b",
         "text": "wyrzuca wszystkie ubrania przed nowym sezonem."
        },
        {
         "id": "c",
         "text": "korzysta ze zdjęć strojów znalezionych w internecie."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "Studia dla ambitnych\n\nStudia w języku angielskim przygotowują do pracy na całym świecie w dynamicznie rozwijających się branżach. Kierunki: zarządzanie, informatyka, ekonomia. Zapisz się już dziś i dołącz do najlepszych. Rekrutacja: www.rzeszow.pl/anglojezyczne."
       },
       "prompt": "Z tego tekstu wynika, że można",
       "options": [
        {
         "id": "a",
         "text": "studiować online."
        },
        {
         "id": "b",
         "text": "zapisać się online."
        },
        {
         "id": "c",
         "text": "studiować za granicą."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Zanim pożyczysz pieniądze z banku, aby kupić mieszkanie, warto sprawdzić, ile będzie kosztować cały kredyt w różnych instytucjach, a następnie wybrać najtańszą ofertę. Kalkulator dostępny w internecie policzy za nas miesięczną ratę, a rankingi pokażą najlepsze oferty banków działających na rynku.",
        "source": "Na podstawie: https://www.bankier.pl/smart/kredyty-hipoteczne"
       },
       "prompt": "Tekst mówi o",
       "options": [
        {
         "id": "a",
         "text": "wyborze najlepszej oferty kredytu."
        },
        {
         "id": "b",
         "text": "instytucjach, które dają kredyty."
        },
        {
         "id": "c",
         "text": "szukaniu najtańszych mieszkań."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Lata szkolne to był wspaniały czas – odkrywanie świata i wielkie przyjaźnie. Nigdy nie zapomnę listu od pewnego chłopaka. To była moja pierwsza szkolna miłość. W szkole średniej poznałam przyjaciółkę, z którą utrzymuję kontakt do dziś."
       },
       "prompt": "Autorka tekstu wspomina",
       "options": [
        {
         "id": "a",
         "text": "czasy szkoły wyższej."
        },
        {
         "id": "b",
         "text": "koleżankę, której dawno nie widziała."
        },
        {
         "id": "c",
         "text": "uczucie do kolegi ze szkoły."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "Sztuczna inteligencja działa podobnie do człowieka. „Mądre” maszyny mogą pomagać ludziom w codziennych pracach i w ten sposób ułatwiać im życie. Pozwalają oszczędzać czas i pieniądze. Czy powinniśmy się bać, że roboty będą chciały zniszczyć ludzkość?",
        "source": "Na podstawie: https://www.sztucznainteligencja.org.pl/kurs/sztuczna-inteligencja-dla-poczatkujacych/czym-jest-sztuczna-inteligencja/"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "sztuczna inteligencja jest mądrzejsza niż człowiek."
        },
        {
         "id": "b",
         "text": "nie wiemy, jak rozwinie się sztuczna inteligencja."
        },
        {
         "id": "c",
         "text": "sztuczna inteligencja niedługo zastąpi człowieka."
        }
       ],
       "answer": "b"
      }
     ],
     "pdfNotes": [
      "Items 2 and 4 are printed without a source line; item 2 is an advertisement whose headline „Studia dla ambitnych” is kept as the first paragraph of the passage."
     ]
    },
    {
     "id": "r2",
     "number": "II",
     "type": "tf",
     "grading": "auto",
     "instruction": "II. Proszę przeczytać tekst, a następnie – jak w przykładzie – zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "7 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 7,
     "pdfPage": 11,
     "title": "Nigel Slater – kucharz, który pisze",
     "source": "Na podstawie: https://zwierciadlo.pl/przepisy/nigel-slater-kucharz-ktory-pisze",
     "passage": "Podobno notuje pan wszystko, co zje.\n\nLata temu wymyśliłem sobie, że przez rok będę dokładnie zapisywał wszystko, co zjem, a potem opiszę mój eksperyment. I tak się stało, swoje doświadczenia przedstawiłem w książce. Co jakiś czas wracam do tych zapisków, dzięki temu widzę, jak zmieniała się moja dieta.\n\nI jaka jest dzisiaj?\n\nMniej w niej czerwonego mięsa, za to więcej warzyw. Na różne sposoby łączę ryż, warzywa, mięso i pierogi. Inspiracja do zmiany sposobu odżywiania się przyszła podczas jednej z moich licznych podróży do Japonii.\n\nSkąd jeszcze bierze pan pomysły do gotowania i pisania felietonów?\n\nSzukam ich wszędzie, w sklepach, na bazarach, a także w przeszłości. Do wspomnień z dzieciństwa wracam z uśmiechem. Do dziś gotuję to samo, co smakowało mi jako dziecku. Myślę o potrawach, które jadłem dawno temu i nagle mam na nie ochotę. W dzieciństwie uwielbiałem chleb z masłem i cukrem, a najlepszym deserem było ciasto cytrynowe. Nigdy nie zrobiłem naprawdę dobrego ciasta cytrynowego. Za to ciasto mojej macochy było wspaniałe. Dania, które gościły w moim rodzinnym domu, były raczej proste, wydaje mi się, że wtedy wszyscy jedli to samo. Wiedziałem, że gdzieś można dostać inne, niezwykłe jedzenie i miałem taką silną potrzebę, żeby poznawać smaki z całego świata. Dlatego właśnie podróże są moim źródłem inspiracji w pracy pisarza i kucharza.",
     "example": {
      "id": "r2.ex",
      "statement": "Nigel Slater wpadł na pomysł prowadzenia notatek o tym, co je.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Kucharz często zagląda do książki, którą napisał.",
       "answer": "NIE"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Nigel Slater ograniczył niektóre produkty w swojej diecie.",
       "answer": "TAK"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Kucharz odwiedził Japonię jeden raz.",
       "answer": "NIE"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Potrawy z dzieciństwa znudziły się kucharzowi.",
       "answer": "NIE"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Nigel wymienia potrawy, za którymi nie przepada.",
       "answer": "NIE"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Macocha Nigela robiła lepsze ciasto cytrynowe niż on.",
       "answer": "TAK"
      },
      {
       "id": "r2.7",
       "number": 7,
       "statement": "Jedzenie, które kucharz pamięta z dzieciństwa, było nietypowe.",
       "answer": "NIE"
      }
     ],
     "pdfNotes": [
      "The interview's three questions (bold in the PDF) are separate paragraphs of the passage."
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
     "title": "A może Roztocze?",
     "source": "Na podstawie: https://zyciewpodrozy.pl/roztocze/",
     "passage": "Roztocze jest bardzo dużym regionem geograficznym, który {{ex}}. Na jego terenie znajdują się dwa parki narodowe. To najbardziej nasłoneczniony rejon Polski. Jest tam dużo lasów, panuje cisza i spokój, ale najważniejsze, że nie ma tu fabryk, dlatego {{1}}. Czy można wyobrazić sobie lepszą zachętę do wyprawy w to miejsce? Jako podróżnik chciałbym wszystkim turystom polecić Roztocze. Warto odwiedzić szczególnie mniejsze miejscowości i wsie, bo w nich {{2}}, którą tworzą przyjaźni mieszkańcy, a wspaniała przyroda dostarczy niezapomnianych wrażeń. Wiem, że {{3}}, aby okolica była pełna różnych atrakcji. Zapewniam, że znajdziecie tu wiele okazji do aktywności fizycznej, m.in. wycieczek rowerowych, spływów kajakowych czy jazdy konnej lub {{4}} wśród pięknych roślin. Do najczęściej odwiedzanych miejscowości na Roztoczu należy Zwierzyniec. Zwiedzicie tu kościół, o którym mówi się, że stoi „na wyspie” albo „na wodzie” i {{5}}. Innym znanym budynkiem w mieście jest Browar Zwierzyniec, gdzie produkuje się piwo Perła. Na dużym placu przy ulicy znajduje się obecnie pijalnia piwa, w której {{6}} i się zrelaksować. Mam nadzieję, że moje rady pomogą wam {{7}} i wybierzecie się na Roztocze, czego wam serdecznie życzę.",
     "options": [
      {
       "id": "A",
       "text": "możecie spróbować złotego napoju"
      },
      {
       "id": "B",
       "text": "dla turysty ważne jest również to"
      },
      {
       "id": "C",
       "text": "podjąć decyzję o podróży"
      },
      {
       "id": "D",
       "text": "jest charakterystycznym zabytkiem regionu"
      },
      {
       "id": "E",
       "text": "powietrze jest tu czyste"
      },
      {
       "id": "F",
       "text": "odkryjecie radość spacerowania"
      },
      {
       "id": "G",
       "text": "na wschodzie kończy się aż we Lwowie na Ukrainie"
      },
      {
       "id": "H",
       "text": "poczujecie ciepłą atmosferę"
      }
     ],
     "example": {
      "gap": "ex",
      "answer": "G",
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
       "answer": "H"
      },
      {
       "id": "r3.3",
       "number": 3,
       "gap": "3",
       "answer": "B"
      },
      {
       "id": "r3.4",
       "number": 4,
       "gap": "4",
       "answer": "F"
      },
      {
       "id": "r3.5",
       "number": 5,
       "gap": "5",
       "answer": "D"
      },
      {
       "id": "r3.6",
       "number": 6,
       "gap": "6",
       "answer": "A"
      },
      {
       "id": "r3.7",
       "number": 7,
       "gap": "7",
       "answer": "C"
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
     "source": "Na podstawie: https://www.edziecko.pl/rodzice/1,79360,18461512,zabawy-z-przyroda.html",
     "heading": "Jak bawić się z dzieckiem na świeżym powietrzu?",
     "options": [
      {
       "id": "A",
       "text": "Znajdźcie w lesie miejsce, które wam się podoba, gdzie łatwo będzie wam razem przyjechać zawsze tego samego dnia raz w roku. Róbcie tam zdjęcia do wspólnego albumu."
      },
      {
       "id": "B",
       "text": "Kiedy latem pada deszcz, nie siedź z dziećmi w domu. Załóżcie kalosze i zorganizujcie wyścigi w skakaniu przez kałuże."
      },
      {
       "id": "C",
       "text": "Na spacerze można znaleźć piękne liście, kamienie, gałęzie. Pozwól dziecku je dotknąć, pobawić się nimi, a nawet coś z nich zbudować."
      },
      {
       "id": "D",
       "text": "Rozwiązujcie zagadki podczas spacerów. Daj dziecku liść. Niech spróbuje w ciągu godziny znaleźć drzewo, z którego on pochodzi."
      },
      {
       "id": "E",
       "text": "Róbcie pikniki z okazji pierwszego dnia wiosny czy lata. Usiądźcie na trawie z koszem pełnym smacznych dań, świeżych warzyw i owoców."
      },
      {
       "id": "F",
       "text": "Kupcie razem nasiona i uprawiajcie kawałek ziemi przy domu. Pozwól dziecku zjeść marchewkę, o którą samo dbało – podlewało ją i obserwowało, jak rośnie."
      },
      {
       "id": "G",
       "text": "Obserwujcie różne owady – motyle, pszczoły czy mrówki. Zobaczcie, gdzie mieszkają, jak pracowicie budują i sprzątają swoje domy, opiekują się dziećmi, szukają jedzenia."
      },
      {
       "id": "H",
       "text": "Dzieci potrzebują snu, ale czasem warto zmienić plan dnia i pokazać im wschód słońca, popatrzeć na gwiazdy, posiedzieć do późna przy ognisku podczas wspólnych wycieczek."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Naturalne zabawki",
      "answer": "C",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Zadanie na czas",
       "answer": "D"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Mały ogrodnik",
       "answer": "F"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Mokry sport",
       "answer": "B"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Nocne wyprawy",
       "answer": "H"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Rodzinna tradycja",
       "answer": "A"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Posiłek na świeżym powietrzu",
       "answer": "E"
      },
      {
       "id": "r4.7",
       "number": 7,
       "prompt": "Mały wspaniały świat",
       "answer": "G"
      }
     ],
     "pdfNotes": [
      "PRINTED INCONSISTENCY: the example paragraph (shaded, bold italic) in the table is C, which also fits the title „Naturalne zabawki”, but the small answer table below the task prints „F” as the example answer. F is the official key of item 2 („Mały ogrodnik”), so the answer table's „F” is an official typo; example stored as C."
     ]
    },
    {
     "id": "r5",
     "number": "V",
     "type": "clozeChoice",
     "grading": "auto",
     "instruction": "V. Proszę – zgodnie z przykładem – podkreślić najlepszą spośród możliwości podanych w nawiasach.",
     "pointsFormula": "8 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 4,
     "pdfPage": 14,
     "title": "Inteligentny dom XXI wieku",
     "source": "Na podstawie: https://www.morele.net/wiadomosc/smart-home-w-mieszkaniu-z-jakich-inteligentnych-rozwiazan-warto-skorzystac/16857/",
     "passage": "Wyobraź sobie, że jest ci za gorąco, więc bierzesz do ręki smartfon, {{ex}} aplikację i klikasz. Temperatura w pokoju automatycznie {{1}} o 2 stopnie. Dotykasz ekranu telefonu jeszcze raz i światło lampy staje się jaśniejsze, bo właśnie masz {{2}} poczytać książkę. To już nie jest {{3}} filmu o przyszłości – to nasze codzienne życie w XXI wieku.\n\nInteligentny dom jest przede wszystkim bardzo {{4}}, bo masz nad nim kontrolę, nawet jeśli nie ma cię w domu. Przykładowo za pomocą telefonu możesz włączać wieczorem światło, kiedy {{5}} wakacje za granicą, daleko od swojego miejsca zamieszkania. Dzięki specjalnym kamerom masz możliwość, by w każdej chwili sprawdzić na ekranie smartfona, co {{6}} w twoim mieszkaniu. Inteligentne urządzenia domowe to także wygoda. Nie musisz już wstawać z kanapy, żeby włączyć pralkę, zasłonić okna albo {{7}} dywan. Smartfon pomoże ci w takich codziennych domowych {{8}}.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "otwierasz",
        "wchodzisz",
        "zaczynasz"
       ],
       "answer": "otwierasz"
      },
      {
       "id": "1",
       "options": [
        "zmniejsza się",
        "znika",
        "jest"
       ],
       "answer": "zmniejsza się"
      },
      {
       "id": "2",
       "options": [
        "przyjemność",
        "humor",
        "ochotę"
       ],
       "answer": "ochotę"
      },
      {
       "id": "3",
       "options": [
        "scenariusz",
        "tekst",
        "historia"
       ],
       "answer": "scenariusz"
      },
      {
       "id": "4",
       "options": [
        "spokojny",
        "bezpieczny",
        "zamknięty"
       ],
       "answer": "bezpieczny"
      },
      {
       "id": "5",
       "options": [
        "spędzasz",
        "prowadzisz",
        "chcesz"
       ],
       "answer": "spędzasz"
      },
      {
       "id": "6",
       "options": [
        "robi",
        "idzie",
        "dzieje się"
       ],
       "answer": "dzieje się"
      },
      {
       "id": "7",
       "options": [
        "odkurzyć",
        "umyć",
        "pozmywać"
       ],
       "answer": "odkurzyć"
      },
      {
       "id": "8",
       "options": [
        "problemach",
        "ćwiczeniach",
        "obowiązkach"
       ],
       "answer": "obowiązkach"
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
     "source": "Na podstawie: https://www.muzeumczekolady.edu.pl/ferie-z-muzeum-czekolady-poznan-wroclawska-12-grupa-szkola-polkolonie/",
     "passage": "Matylda od dzieciństwa uwielbia {{ex1}} {{ex2}} i wie o {{ex3}} wszystko. Dlatego niedawno postanowiła pojechać z {{1}} do Poznania, gdzie znajduje się {{2}} muzeum czekolady. Powstało kilka lat temu, ale Matylda nigdy wcześniej nie zwiedzała tak {{3}} miejsca. Nie wiedziała, że przyjeżdżają tam {{4}} z całej Polski, a nawet z zagranicy. W {{5}} muzeum rodzeństwo spędziło kilka godzin i poznało długą historię kakaowego {{6}} oraz zobaczyło, jak powstają ich ulubione czekoladki. Po {{7}} wszyscy byli już bardzo zmęczeni, ale dostali zaproszenie na {{8}}, o której marzyli od samego rana. Najbardziej spodobał {{9}} się moment, kiedy mogli przygotować własne kakaowe słodycze, a następnie {{10}} zjeść.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "mleczną",
        "mlecznej",
        "mleczne"
       ],
       "answer": "mleczną"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "czekoladę",
        "czekoladą",
        "czekoladzie"
       ],
       "answer": "czekoladę"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "nią",
        "niej",
        "jej"
       ],
       "answer": "niej"
      },
      {
       "id": "1",
       "options": [
        "braci",
        "braćmi",
        "braciach"
       ],
       "answer": "braćmi"
      },
      {
       "id": "2",
       "options": [
        "znanego",
        "znane",
        "znany"
       ],
       "answer": "znane"
      },
      {
       "id": "3",
       "options": [
        "popularne",
        "popularnym",
        "popularnego"
       ],
       "answer": "popularnego"
      },
      {
       "id": "4",
       "options": [
        "turysty",
        "turyści",
        "turystów"
       ],
       "answer": "turyści"
      },
      {
       "id": "5",
       "options": [
        "tej",
        "to",
        "tym"
       ],
       "answer": "tym"
      },
      {
       "id": "6",
       "options": [
        "przysmaku",
        "przysmakiem",
        "przysmaków"
       ],
       "answer": "przysmaku"
      },
      {
       "id": "7",
       "options": [
        "wycieczki",
        "wycieczkę",
        "wycieczce"
       ],
       "answer": "wycieczce"
      },
      {
       "id": "8",
       "options": [
        "degustacją",
        "degustację",
        "degustacji"
       ],
       "answer": "degustację"
      },
      {
       "id": "9",
       "options": [
        "ich",
        "nim",
        "im"
       ],
       "answer": "im"
      },
      {
       "id": "10",
       "options": [
        "ich",
        "je",
        "nich"
       ],
       "answer": "je"
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
      "albo",
      "żeby",
      "dlatego",
      "czy",
      "i",
      "jeżeli"
     ],
     "distractors": [
      "albo"
     ],
     "passage": "Moja przyjaciółka Anna kocha filmy {{ex}} każdą wolną chwilę spędza w kinie. Czasami proszę ją, {{1}} poleciła mi jakąś ciekawą i zabawną komedię. Anna jest studentką, {{2}} może kupować bilety ulgowe. {{3}} jakiś film bardzo ją zainteresuje, to ogląda go nawet kilka razy. Kupiłem mojej przyjaciółce Annie karnet na dziesięć seansów filmowych, {{4}} niedługo ma urodziny. Zastanawiam się, {{5}} ucieszy się z mojego prezentu.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "i"
      },
      {
       "id": "1",
       "answer": "żeby"
      },
      {
       "id": "2",
       "answer": "dlatego"
      },
      {
       "id": "3",
       "answer": "jeżeli"
      },
      {
       "id": "4",
       "answer": "ponieważ"
      },
      {
       "id": "5",
       "answer": "czy"
      }
     ],
     "pdfNotes": [
      "Key item 3 prints „Jeżeli” (sentence start); stored with the box casing „jeżeli”. No source line is printed for this task."
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
     "source": "Na podstawie: https://finanse.wp.pl/ceny-owocow-rosna-jablka-drozsze-o-130-proc-6541966238713985a",
     "passage": "Pandemia, zamknięte granice i letnia susza spowodowały wzrost cen – owoce to jedne z {{ex1}} towarów. Rekordowe są ceny jabłek, za które trzeba zapłacić {{ex2}} niż w ubiegłym roku. W specjalnym badaniu eksperci porównali oferty {{1}} producentów żywności i wybrali 10 produktów, których ceny gwałtownie wzrosły w ostatnim czasie. {{2}} ze wszystkich owoców drożały jabłka, ich koszt jest {{3}} o 130% w porównaniu z poprzednim rokiem. Sprzedawcy podnieśli również ceny cytryn i nektarynek. Są jednak owoce, za które zapłacimy mniej niż rok temu, na przykład grejpfruty są {{4}} o ponad 18%, a arbuz kosztuje {{5}} ze wszystkich owoców.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "najdroższych",
        "najdroższym",
        "najdrożej"
       ],
       "answer": "najdroższych"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "większy",
        "najwięcej",
        "więcej"
       ],
       "answer": "więcej"
      },
      {
       "id": "1",
       "options": [
        "bardziej znani",
        "najbardziej znanych",
        "bardziej znanymi"
       ],
       "answer": "najbardziej znanych"
      },
      {
       "id": "2",
       "options": [
        "Szybciej",
        "Najszybsze",
        "Najszybciej"
       ],
       "answer": "Najszybciej"
      },
      {
       "id": "3",
       "options": [
        "wyżej",
        "wyższy",
        "najwyższy"
       ],
       "answer": "wyższy"
      },
      {
       "id": "4",
       "options": [
        "tańsze",
        "taniej",
        "tańszymi"
       ],
       "answer": "tańsze"
      },
      {
       "id": "5",
       "options": [
        "mniej",
        "najmniej",
        "mało"
       ],
       "answer": "najmniej"
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
     "pdfPages": [
      17,
      18
     ],
     "source": "Na podstawie: https://www.forbes.pl/kariera/zawody-przyszlosci-zobacz-gdzie-bedzie-praca/5mvx4ts",
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "Do 2025 roku znacznie {{ex1}} popularność pięciu zawodów. Jak {{ex2}}, gdzie ty {{ex3}} za dziesięć lat?\n\nJak wygląda sytuacja na rynku pracy obecnie? Zdaniem badaczy osoby związane z branżą informatyczną nie {{1}} teraz żadnych problemów z zatrudnieniem. Na stronach internetowych i na tablicach ogłoszeń w biurach i urzędach cały czas {{2}} liczne oferty dla programistów i informatyków. Jednak rynek pracy jest niezwykle dynamiczny i ciągle {{3}}. Dlatego należy przypuszczać, że niedługo pracodawcy {{4}} poszukiwać pracowników o innych kwalifikacjach. Wielu naukowców już teraz {{5}}, jakie zawody {{6}} w przyszłości. Specjaliści od spraw zatrudnienia {{7}}, że za kilka lat pielęgniarki i rehabilitanci oraz opiekunowie osób starszych najłatwiej {{8}} pracę, bo nasze społeczeństwo się starzeje. Wydaje się też, że za jakiś czas pracodawcy {{9}} specjalistów od spraw reklamy i sprzedaży w internecie, ponieważ zakupy przez komputer są coraz bardziej popularne. Zobaczymy, czy te przewidywania {{10}}.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "zmniejszyć się",
       "answer": "zmniejszy się"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "ty – myśleć",
       "answer": "myślisz"
      },
      {
       "id": "ex3",
       "example": true,
       "given": "pracować",
       "answer": "będziesz pracować"
      },
      {
       "id": "1",
       "given": "mieć",
       "answer": "mają",
       "accept": []
      },
      {
       "id": "2",
       "given": "pojawiać się",
       "answer": "pojawiają się",
       "accept": []
      },
      {
       "id": "3",
       "given": "zmieniać się",
       "answer": "się zmienia",
       "accept": [
        "zmienia się"
       ]
      },
      {
       "id": "4",
       "given": "zacząć",
       "answer": "zaczną",
       "accept": []
      },
      {
       "id": "5",
       "given": "zastanawiać się",
       "answer": "zastanawia się",
       "accept": []
      },
      {
       "id": "6",
       "given": "my – wykonywać",
       "answer": "będziemy wykonywać",
       "accept": [
        "będziemy wykonywali"
       ]
      },
      {
       "id": "7",
       "given": "uważać",
       "answer": "uważają",
       "accept": []
      },
      {
       "id": "8",
       "given": "znaleźć",
       "answer": "znajdą",
       "accept": []
      },
      {
       "id": "9",
       "given": "potrzebować",
       "answer": "będą potrzebować",
       "accept": [
        "będą potrzebowali"
       ]
      },
      {
       "id": "10",
       "given": "spełnić się",
       "answer": "się spełnią",
       "accept": [
        "spełnią się"
       ]
      }
     ],
     "pdfNotes": [
      "Printed example answers (zmniejszy się, myślisz, będziesz pracować) are shown bold-underlined inside the text; the passage continues on the next page. Key alternatives with „/” are stored in accept."
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
      "sentence": "Ten komputer należy do nauczyciela.",
      "underlined": "do nauczyciela",
      "stem": "…………… należy ten komputer?",
      "shortAnswer": "Do nauczyciela.",
      "answer": "Do kogo",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Anna kieruje firmą od pięciu lat.",
       "underlined": "firmą",
       "stem": "…………… Anna kieruje od pięciu lat.",
       "shortAnswer": "Firmą.",
       "answer": "Czym",
       "accept": []
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Książka Marcina spadła z biurka.",
       "underlined": "Marcina",
       "stem": "…………… książka spadła z biurka?",
       "shortAnswer": "Marcina.",
       "answer": "Czyja",
       "accept": []
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Irena otrzymała ważną wiadomość od Pawła.",
       "underlined": "od Pawła",
       "stem": "…………… Irena otrzymała ważną wiadomość?",
       "shortAnswer": "Od Pawła.",
       "answer": "Od kogo",
       "accept": []
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "W przyszłym tygodniu mama odwiedzi Marka w nowym mieszkaniu.",
       "underlined": "W przyszłym tygodniu",
       "stem": "…………… mama odwiedzi Marka w nowym mieszkaniu?",
       "shortAnswer": "W przyszłym tygodniu.",
       "answer": "Kiedy",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "To zadanie jest wyjątkowo trudne.",
       "underlined": "wyjątkowo trudne",
       "stem": "…………… jest to zadanie?",
       "shortAnswer": "Wyjątkowo trudne.",
       "answer": "Jakie",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Item 1's stem is printed ending in a full stop („… Anna kieruje od pięciu lat.”), kept as printed. The printed example shows the full question „Do kogo należy ten komputer?”; stored with the question word replaced by the gap. Official key prints the question word with decoration (Czym…?); stored without it, match.stripChars ignores the decoration."
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
      "source": "Poprosiła go, żeby zrobił zakupy.",
      "hint": "o",
      "answer": "Poprosiła go o zrobienie zakupów.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "Jan usłyszał od Joli ciekawą historię.",
       "hint": "opowiedziała",
       "answer": "Jola opowiedziała Janowi ciekawą historię.",
       "rubric": "4 transformacje (4 x 0,25)",
       "rubricParts": [
        {
         "what": "4 transformacje",
         "points": 1
        }
       ]
      },
      {
       "id": "g6.2",
       "number": 2,
       "source": "Nie pamiętam, jak nazywa się to miasto.",
       "hint": "nazwy",
       "answer": "Nie pamiętam nazwy tego miasta.",
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
      },
      {
       "id": "g6.3",
       "number": 3,
       "source": "Krzysiek przepada za długimi spacerami.",
       "hint": "uwielbia",
       "answer": "Krzysiek uwielbia długie spacery.",
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
       "source": "Ola przygotowała prezenty młodszemu rodzeństwu.",
       "hint": "dla",
       "answer": "Ola przygotowała prezenty dla młodszego rodzeństwa.",
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
       "source": "Spodziewamy się ważnego telefonu.",
       "hint": "czekamy",
       "answer": "Czekamy na ważny telefon.",
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
     "source": "Na podstawie: https://wyborcza.pl/7,75400,23621998,gdybanie-ma-wiecej-sensu-niz-myslicie.html?disableRedirects=true",
     "passage": "{{ex1}}, jak wyglądałoby twoje życie teraz, gdybyś kiedyś podjął inne decyzje. Jeśli nie wszedłbyś tamtego dnia do klubu, to nie {{ex2}} tej dziewczyny, która dziś jest twoją żoną. Gdybyś {{1}} inną pracę, nie miałbyś dziś własnego mieszkania i samochodu. Albo myślisz: „Gdybym o tym nie powiedziała w czasie rozmowy rekrutacyjnej, pewnie nie {{2}} dzisiaj w tej firmie.\n\nNasz mózg ciągle wymyśla nowe scenariusze, ale jak daleko możemy fantazjować? {{3}} to sobie szczerze – nasza wyobraźnia nie zna granic. Czasami tworzymy w głowie tysiące wariantów jednej sytuacji. Niektóre z nich nas cieszą, inne – przerażają, ale to zupełnie normalne, nie {{4}} tym. Prawdopodobnie każdy z nas {{5}} na takich rozmyślaniach całe godziny, gdyby nie znajomi, którzy mówią: „Nie {{6}} o tym! Nieważne, co by {{7}} wtedy! Lepiej {{8}} myśleć o swojej przyszłości i nie {{9}} do tego, co było. Nasz mózg ciągle pracuje, chociaż my {{10}}, żeby się w końcu zatrzymał i pozwolił nam cieszyć się tym, co jest „tu i teraz”.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "Zastanów się",
        "zastanawiaj się",
        "zastanowiłbyś się"
       ],
       "answer": "Zastanów się"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "spotkał",
        "spotkałbyś",
        "spotkałby"
       ],
       "answer": "spotkałbyś"
      },
      {
       "id": "1",
       "options": [
        "wybrał",
        "wybierał",
        "wybrałbyś"
       ],
       "answer": "wybrał"
      },
      {
       "id": "2",
       "options": [
        "pracowała",
        "pracuj",
        "pracowałabym"
       ],
       "answer": "pracowałabym"
      },
      {
       "id": "3",
       "options": [
        "Mówilibyśmy",
        "Powiedzmy",
        "Powiedzielibyśmy"
       ],
       "answer": "Powiedzmy"
      },
      {
       "id": "4",
       "options": [
        "zmartwcie się",
        "martwilibyście się",
        "martwcie się"
       ],
       "answer": "martwcie się"
      },
      {
       "id": "5",
       "options": [
        "niech spędza",
        "spędzałby",
        "spędziliby"
       ],
       "answer": "spędzałby"
      },
      {
       "id": "6",
       "options": [
        "myśl",
        "pomyśl",
        "myślałbyś"
       ],
       "answer": "myśl"
      },
      {
       "id": "7",
       "options": [
        "byłoby",
        "było",
        "był"
       ],
       "answer": "było"
      },
      {
       "id": "8",
       "options": [
        "zaczęliby",
        "zaczynałbyś",
        "zacznij"
       ],
       "answer": "zacznij"
      },
      {
       "id": "9",
       "options": [
        "wracałbyś",
        "wracaj",
        "wróć"
       ],
       "answer": "wracaj"
      },
      {
       "id": "10",
       "options": [
        "chcielibyśmy",
        "chciejmy",
        "chciałyby"
       ],
       "answer": "chcielibyśmy"
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
     "source": "Na podstawie: http://wielki-czlowiek.pl/10-powodow-dla-ktorych-warto-chodzic-do-biblioteki/",
     "passage": "Współczesne biblioteki to nie tylko miejsca, {{ex}} których na półkach stoi mnóstwo różnych książek. Dzisiaj, {{1}} książek, można tam znaleźć także czasopisma, filmy, płyty z muzyką, a także gry planszowe i komputerowe. Można {{2}} nich korzystać w czytelni lub wypożyczyć je do domu, ale oczywiście trzeba mieć kartę biblioteczną. Do niektórych bibliotek można przyjść również {{3}} różne wydarzenia kulturalne, na przykład spotkania {{4}} pisarzami, ciekawe wystawy, wykłady, pokazy filmów, rozmaite warsztaty {{5}} dzieci i dorosłych.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "na",
        "w",
        "przy"
       ],
       "answer": "w"
      },
      {
       "id": "1",
       "options": [
        "oprócz",
        "bez",
        "do"
       ],
       "answer": "oprócz"
      },
      {
       "id": "2",
       "options": [
        "na",
        "o",
        "z"
       ],
       "answer": "z"
      },
      {
       "id": "3",
       "options": [
        "na",
        "do",
        "w"
       ],
       "answer": "na"
      },
      {
       "id": "4",
       "options": [
        "u",
        "z",
        "dla"
       ],
       "answer": "z"
      },
      {
       "id": "5",
       "options": [
        "z",
        "do",
        "dla"
       ],
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
         "genre": "pozdrowienia",
         "wordTarget": 40,
         "prompt": "Jest Pani/Pan na wakacjach w górach. Proszę napisać pozdrowienia do swojego nauczyciela języka polskiego."
        },
        {
         "id": "b",
         "genre": "recenzja",
         "wordTarget": 160,
         "prompt": "Stowarzyszenie Przyjaciół Języka Polskiego organizuje konkurs dla obcokrajowców na najciekawszą recenzję książki. Postanawia Pani/Pan wziąć w nim udział i wysłać swoją opinię na temat książki, którą Pani/Pan poleca."
        }
       ]
      },
      {
       "id": "II",
       "parts": [
        {
         "id": "a",
         "genre": "zaproszenie",
         "wordTarget": 50,
         "prompt": "Organizuje Pani/Pan wycieczkę rowerową dla członków klubu sportowego. Proszę napisać zaproszenie i poinformować o szczegółach programu."
        },
        {
         "id": "b",
         "genre": "opinia",
         "wordTarget": 150,
         "prompt": "Ma Pani/Pan przyjaciółkę Polkę lub przyjaciela Polaka, która dostała / który dostał propozycję pracy za granicą, ale nie może się zdecydować, co robić. Proszę jej/mu pomóc podjąć decyzję i – na podstawie własnych doświadczeń – przedstawić swoją opinię."
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
         "prompt": "Na spacerze w parku zaginął Pani/Panu młody pies. Proszę napisać ogłoszenie, które rozwiesi Pani/Pan w okolicy."
        },
        {
         "id": "b",
         "genre": "opowiadanie",
         "wordTarget": 175,
         "prompt": "Proszę napisać opowiadanie pt. „Nigdy nie zapomnę tej podróży”. Proszę wykorzystać tę fotografię.",
         "title": "Nigdy nie zapomnę tej podróży",
         "image": "data/img/2021-06/w-III-b.jpg"
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
