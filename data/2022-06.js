window.EXAMS = window.EXAMS || {};
window.EXAMS["2022-06"] = {
 "schemaVersion": 1,
 "id": "2022-06",
 "meta": {
  "level": "B1",
  "labelPdf": "czerwiec 2022",
  "examDates": "25-26.06.2022",
  "sources": {
   "test": "sources/2022-06/test.pdf",
   "transcript": "sources/2022-06/transcript.pdf",
   "audio": "sources/2022-06/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear.",
   "Listening: III = TAK/NIE on an interview (5), IV = interview MC (5), V = match column I (milk kinds) -> II (A-F), 5 x 1 p.",
   "Reading: I has 6 items; V is the word-box variant (clozeBox, 11 box words = 10 answers + example, no distractor).",
   "Grammar IV is present & past (czas teraźniejszy i przeszły); II and VIII are word-box tasks with one distractor each (czyli / między)."
  ]
 },
 "audio": {
  "src": "sources/2022-06/audio.mp3",
  "duration": 1545.5,
  "intro": [
   0,
   46.9
  ],
  "readingTime": [
   46.9,
   107.5
  ],
  "tail": [
   1482.4,
   1545.5
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
        "end": 323.6
       }
      ],
      "items": [
       {
        "ref": "l1.ex",
        "start": 133.9,
        "end": 149.0
       },
       {
        "ref": "l1.1",
        "start": 155.6,
        "end": 160.5
       },
       {
        "ref": "l1.2",
        "start": 167.3,
        "end": 172.9
       },
       {
        "ref": "l1.3",
        "start": 179.4,
        "end": 184.9
       },
       {
        "ref": "l1.4",
        "start": 191.4,
        "end": 196.8
       },
       {
        "ref": "l1.5",
        "start": 203.3,
        "end": 208.0
       },
       {
        "ref": "l1.6",
        "start": 214.6,
        "end": 223.6
       },
       {
        "ref": "l1.7",
        "start": 230.0,
        "end": 236.6
       },
       {
        "ref": "l1.8",
        "start": 243.0,
        "end": 249.1
       },
       {
        "ref": "l1.9",
        "start": 255.7,
        "end": 261.0
       },
       {
        "ref": "l1.10",
        "start": 267.4,
        "end": 274.8
       },
       {
        "ref": "l1.11",
        "start": 281.3,
        "end": 287.1
       },
       {
        "ref": "l1.12",
        "start": 293.6,
        "end": 299.9
       },
       {
        "ref": "l1.13",
        "start": 306.4,
        "end": 311.7
       },
       {
        "ref": "l1.14",
        "start": 318.3,
        "end": 323.6
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
        "text": "w salonie urody."
       },
       {
        "id": "b",
        "text": "na siłowni."
       },
       {
        "id": "c",
        "text": "na komisariacie."
       }
      ],
      "answer": "b",
      "shown": true,
      "transcript": {
       "sp": "M",
       "t": "Stopy szeroko, ręce na biodrach, plecy proste i dziesięć przysiadów!"
      }
     },
     "items": [
      {
       "id": "l1.1",
       "number": 1,
       "prompt": "Ta wypowiedź jest typowa dla",
       "options": [
        {
         "id": "a",
         "text": "kelnerki."
        },
        {
         "id": "b",
         "text": "nauczycielki."
        },
        {
         "id": "c",
         "text": "sprzątaczki."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Znowu nie odrobiłeś pracy domowej."
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
         "text": "przeprosiny."
        },
        {
         "id": "c",
         "text": "odmowę."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Aniu, czy poszłabyś ze mną na kolację?"
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź oznacza, że",
       "options": [
        {
         "id": "a",
         "text": "można siadać wszędzie."
        },
        {
         "id": "b",
         "text": "wszystkie miejsca są zajęte."
        },
        {
         "id": "c",
         "text": "połowa miejsc musi być wolna."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Na widowni proszę zajmować co drugie miejsce."
       }
      },
      {
       "id": "l1.4",
       "number": 4,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w kawiarni."
        },
        {
         "id": "b",
         "text": "w piekarni."
        },
        {
         "id": "c",
         "text": "w sklepie mięsnym."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Poproszę bułkę i razowy krojony."
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "złość."
        },
        {
         "id": "b",
         "text": "zadowolenie."
        },
        {
         "id": "c",
         "text": "smutek."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Jaka szkoda, że nie przyjedziesz."
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź oznacza, że ta osoba",
       "options": [
        {
         "id": "a",
         "text": "płaci za wszystkich."
        },
        {
         "id": "b",
         "text": "płaci tylko za siebie."
        },
        {
         "id": "c",
         "text": "inni płacą za niego."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Kochani, dzisiaj świętujemy mój awans, więc ja płacę rachunek za obiad."
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź oznacza, że sportowcy",
       "options": [
        {
         "id": "a",
         "text": "zdobyli pierwsze miejsce."
        },
        {
         "id": "b",
         "text": "nie zdobyli medalu."
        },
        {
         "id": "c",
         "text": "przegrali zawody."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Wczoraj nasi skoczkowie narciarscy wywalczyli złoto."
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź oznacza, że w firmie",
       "options": [
        {
         "id": "a",
         "text": "jest świeże powietrze."
        },
        {
         "id": "b",
         "text": "miło się pracuje."
        },
        {
         "id": "c",
         "text": "są ładne kolory ścian."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "W naszej firmie panuje naprawdę dobra atmosfera."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w autobusie."
        },
        {
         "id": "b",
         "text": "w kinie."
        },
        {
         "id": "c",
         "text": "w teatrze."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Poproszę dwa bilety na spektakl o 20.00."
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź oznacza, że",
       "options": [
        {
         "id": "a",
         "text": "można się zaszczepić."
        },
        {
         "id": "b",
         "text": "nie trzeba się szczepić."
        },
        {
         "id": "c",
         "text": "trzeba przyjąć szczepionkę."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Proszę pani, to szczepienie jest obowiązkowe przed operacją."
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź oznacza, że ubranie",
       "options": [
        {
         "id": "a",
         "text": "pasuje."
        },
        {
         "id": "b",
         "text": "jest za duże."
        },
        {
         "id": "c",
         "text": "jest za małe."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Ten zielony płaszcz jest dla mnie w sam raz."
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź oznacza, że",
       "options": [
        {
         "id": "a",
         "text": "za dojazd płaci się dodatkowo."
        },
        {
         "id": "b",
         "text": "w ofercie jest wyżywienie."
        },
        {
         "id": "c",
         "text": "trzeba kupić osobno obiady."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Jedzenie i transport są wliczone w cenę wycieczki."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź jest typowa dla",
       "options": [
        {
         "id": "a",
         "text": "lekarza."
        },
        {
         "id": "b",
         "text": "klienta."
        },
        {
         "id": "c",
         "text": "kelnera."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Dziś polecamy ogórkową na żeberkach."
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "złość."
        },
        {
         "id": "b",
         "text": "radość."
        },
        {
         "id": "c",
         "text": "zainteresowanie."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Jak mogłaś pokazać jej te zdjęcia?!"
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
       333.9,
       349.9
      ],
      "plays": [
       {
        "start": 360.3,
        "end": 491.3
       },
       {
        "start": 537.1,
        "end": 668.1
       }
      ],
      "pauseBetweenPlays": 45.8,
      "items": [
       {
        "ref": "l2.ex",
        "start": 360.3,
        "end": 372.5
       },
       {
        "ref": "l2.1",
        "start": 376.9,
        "end": 385.7
       },
       {
        "ref": "l2.2",
        "start": 390.2,
        "end": 401.9
       },
       {
        "ref": "l2.3",
        "start": 406.5,
        "end": 416.2
       },
       {
        "ref": "l2.4",
        "start": 420.8,
        "end": 431.5
       },
       {
        "ref": "l2.5",
        "start": 436.6,
        "end": 444.0
       },
       {
        "ref": "l2.6",
        "start": 448.2,
        "end": 458.9
       },
       {
        "ref": "l2.7",
        "start": 463.5,
        "end": 475.9
       },
       {
        "ref": "l2.8",
        "start": 480.4,
        "end": 491.3
       }
      ],
      "source": "auto-silencedetect",
      "verified": false
     },
     "example": {
      "id": "l2.ex",
      "prompt": "Z tego dialogu dowiadujemy się, że",
      "options": [
       {
        "id": "a",
        "text": "ona zaczęła nową pracę."
       },
       {
        "id": "b",
        "text": "ona chce zrezygnować z pracy."
       },
       {
        "id": "c",
        "text": "on pyta o jej plany zawodowe."
       }
      ],
      "answer": "c",
      "shown": true,
      "transcript": {
       "lines": [
        {
         "sp": "K",
         "t": "Wczoraj rzuciłam pracę."
        },
        {
         "sp": "M",
         "t": "I co teraz zamierzasz robić?"
        }
       ]
      }
     },
     "items": [
      {
       "id": "l2.1",
       "number": 1,
       "prompt": "Z tego dialogu dowiadujemy się, że",
       "options": [
        {
         "id": "a",
         "text": "remont kosztował zgodnie z planem."
        },
        {
         "id": "b",
         "text": "jej zdaniem remont kosztował zbyt dużo."
        },
        {
         "id": "c",
         "text": "udało się zaoszczędzić trochę pieniędzy."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Ile kosztował cię remont łazienki?"
         },
         {
          "sp": "K",
          "t": "Już przestałam liczyć, żeby się nie denerwować."
         }
        ]
       }
      },
      {
       "id": "l2.2",
       "number": 2,
       "prompt": "Z tego dialogu wynika, że kobieta",
       "options": [
        {
         "id": "a",
         "text": "jechała za wolno."
        },
        {
         "id": "b",
         "text": "jechała zgodnie z przepisami."
        },
        {
         "id": "c",
         "text": "nie zgadza się z policjantem."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Przekroczyła pani dozwoloną prędkość o 30 km."
         },
         {
          "sp": "K",
          "t": "To niemożliwe, wydawało mi się, że jechałam wolniej."
         }
        ]
       }
      },
      {
       "id": "l2.3",
       "number": 3,
       "prompt": "Z tego dialogu wynika, że ona",
       "options": [
        {
         "id": "a",
         "text": "lubi miejski rytm życia."
        },
        {
         "id": "b",
         "text": "nie lubi korków."
        },
        {
         "id": "c",
         "text": "ceni ciszę i spokój."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Co ci przeszkadza w tym mieście?"
         },
         {
          "sp": "K",
          "t": "Głównie hałas, ale też zbyt szybkie tempo życia."
         }
        ]
       }
      },
      {
       "id": "l2.4",
       "number": 4,
       "prompt": "Z tego dialogu dowiadujemy się, że on proponuje",
       "options": [
        {
         "id": "a",
         "text": "wakacje podobne do poprzednich."
        },
        {
         "id": "b",
         "text": "nowy sposób spędzenia urlopu."
        },
        {
         "id": "c",
         "text": "aktywne wakacje nad wodą."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Co powiesz na urlop nad morzem? Słońce, plaża, leniuchowanie…"
         },
         {
          "sp": "K",
          "t": "Czyli to samo co rok temu?"
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
         "text": "zdała egzamin."
        },
        {
         "id": "b",
         "text": "pierwszy raz podeszła do egzaminu."
        },
        {
         "id": "c",
         "text": "ponownie zdawała egzamin."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "I jak egzamin?"
         },
         {
          "sp": "K",
          "t": "Znowu źle napisałam część teoretyczną."
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
         "text": "wizyta jest możliwa pod koniec tygodnia."
        },
        {
         "id": "b",
         "text": "wolne terminy są w przyszłym tygodniu."
        },
        {
         "id": "c",
         "text": "ona planuje wizytę w myjni."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Chciałabym się umówić na mycie i strzyżenie."
         },
         {
          "sp": "M",
          "t": "Najbliższy wolny termin mamy w następnym tygodniu w środę."
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
         "text": "on narzeka na transport publiczny."
        },
        {
         "id": "b",
         "text": "ona radzi mu dojazd transportem publicznym."
        },
        {
         "id": "c",
         "text": "tramwaj jest tańszy niż samochód."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Codziennie tracę mnóstwo czasu na dojazd do pracy."
         },
         {
          "sp": "K",
          "t": "Gdybyś jeździł tramwajem zamiast samochodem, nie stałbyś w korkach."
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
         "text": "oni mieli odebrać ciocię ze szpitala."
        },
        {
         "id": "b",
         "text": "ona przypomina mu o wizycie u cioci."
        },
        {
         "id": "c",
         "text": "oni powinni zawieźć ciocię do lekarza."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Kochanie, dzisiaj wrócę później z pracy."
         },
         {
          "sp": "K",
          "t": "Jak to? Przecież obiecaliśmy pojechać po ciocię do szpitala."
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
     "prompt": "Proszę posłuchać rozmowy na temat edukacji domowej i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: https://www.polskieradio.pl/7/163/Artykul/2674049,Homeschooling-Czy-edukacja-domowa-jest-dla-kazdego",
     "audio": {
      "announce": [
       678.5,
       694.2
      ],
      "plays": [
       {
        "start": 704.4,
        "end": 786.6
       },
       {
        "start": 832.7,
        "end": 914.9
       }
      ],
      "pauseBetweenPlays": 46.1,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Dziennikarz",
        "t": "Jak rozpocząć edukację domową?"
       },
       {
        "sp": "Ekspert",
        "t": "To bardzo proste. Wystarczy zgłosić się do dyrektora szkoły i po prostu powiedzieć mu, że chcielibyśmy przejść na edukację pozaszkolną. Wówczas trzeba wypełnić wniosek z prośbą o zezwolenie, dodatkowo należy dołączyć oświadczenie, że mamy warunki w domu, by realizować edukację pozaszkolną i zobowiązanie, że dziecko przystąpi do egzaminów klasyfikacyjnych, czyli takie trzy dokumenty. Podczas egzaminów nie wszystkie przedmioty będą brane pod uwagę, na przykład WF czy przedmioty artystyczne."
       },
       {
        "sp": "Dziennikarz",
        "t": "Taką edukację można realizować w dowolnej placówce?"
       },
       {
        "sp": "Ekspert",
        "t": "Doradzałbym poszukanie szkoły, która jest przyjaźnie nastawiona do edukacji domowej, bo nie każda szkoła publiczna ma dobre doświadczenia i dyrektorzy czasem niechętnie się jej podejmują. Dodam, że edukacja pozaszkolna jest bezpłatna, ponieważ są dotacje, które idą za dzieckiem i z tych dotacji oświatowych my możemy realizować taki sposób nauczania. Ale… edukacja domowa nie jest dla każdego. Osoby, które decydują się na edukację domową dla swoich pociech, muszą się naprawdę zaangażować. Nikt ich nie zastąpi w tej pracy."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "statement": "Rozpoczęcie edukacji domowej jest procesem skomplikowanym.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "statement": "Rodzice sami deklarują, że dzieci mogą uczyć się w domu.",
       "answer": "TAK"
      },
      {
       "id": "l3.2",
       "number": 2,
       "statement": "Egzaminy klasyfikacyjne nie obejmują plastyki czy muzyki.",
       "answer": "TAK"
      },
      {
       "id": "l3.3",
       "number": 3,
       "statement": "Podczas edukacji domowej warto wybrać najbliższą szkołę.",
       "answer": "NIE"
      },
      {
       "id": "l3.4",
       "number": 4,
       "statement": "Rodzice nie płacą za nauczanie domowe.",
       "answer": "TAK"
      },
      {
       "id": "l3.5",
       "number": 5,
       "statement": "Rodzice mogą liczyć na pomoc nauczycieli.",
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
     "prompt": "Proszę wysłuchać wywiadu z lekarką na temat domowych sposobów leczenia i zaznaczyć właściwe odpowiedzi.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://radioklinika.pl/zdrowotne-rady-naszych-dziadkow-i-babc-na-wzmocnienie-organizmu-w-chorobie/",
     "audio": {
      "announce": [
       925.6,
       941.5
      ],
      "plays": [
       {
        "start": 951.7,
        "end": 1036.3
       },
       {
        "start": 1082.4,
        "end": 1167.0
       }
      ],
      "pauseBetweenPlays": 46.1,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Dziennikarka",
        "t": "Kiedy dziecko gorączkuje, zimne okłady pomagają?"
       },
       {
        "sp": "Lekarka",
        "t": "Jak najbardziej, zimny okład robimy, ale jeśli mały pacjent ma 39-40 stopni, najpierw podajemy lek przeciwgorączkowy, a po jakimś czasie stosujemy okłady, które kładziemy na kark lub szyję."
       },
       {
        "sp": "Dziennikarka",
        "t": "Z czego najlepiej je zrobić?"
       },
       {
        "sp": "Lekarka",
        "t": "Po prostu z zimnej wody. Lepiej nie przykładać kostek lodu, bo to będzie nieprzyjemne. Każdy z nas jest po trochu lekarzem dla siebie. Potrafimy powiedzieć, co nam służy, a co nie. Są tacy, którzy nie lubią okładów, a są tacy, którzy wręcz przeciwnie, jak tylko temperatura jest wyższa, od razu kładą ręcznik na głowie. Są dzieci, które w gorączce domagają się zimnych płynów, a rodzice odmawiają, bo boją się, by im nie zaszkodzić, ale to jest bardzo dobra metoda, żeby tę temperaturę obniżyć."
       },
       {
        "sp": "Dziennikarka",
        "t": "A kąpiele?"
       },
       {
        "sp": "Lekarka",
        "t": "Jest bardzo ważne, żeby kąpiel chłodząca dla dziecka, które ma 40 stopni gorączki, odbywała się w wodzie o temperaturze 39 stopni, czyli o stopień niżej. Nie wrzucamy chorego do zimnej wody, trzydziestostopniowej, bo można spowodować wstrząs termiczny i mu zaszkodzić."
       }
      ]
     },
     "example": {
      "id": "l4.ex",
      "prompt": "Zdaniem lekarki zimny okład na zwalczenie temperatury",
      "options": [
       {
        "id": "a",
        "text": "to dobry pomysł w każdej sytuacji."
       },
       {
        "id": "b",
        "text": "należy umieć stosować."
       },
       {
        "id": "c",
        "text": "to raczej nieskuteczna metoda."
       }
      ],
      "answer": "b",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "prompt": "Kiedy dziecko ma około 40 stopni, należy",
       "options": [
        {
         "id": "a",
         "text": "podać środek na obniżenie temperatury."
        },
        {
         "id": "b",
         "text": "natychmiast zrobić zimny okład."
        },
        {
         "id": "c",
         "text": "od razu zastosować obie metody."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l4.2",
       "number": 2,
       "prompt": "Najlepiej stosować okłady",
       "options": [
        {
         "id": "a",
         "text": "z lodu."
        },
        {
         "id": "b",
         "text": "z chłodnej wody."
        },
        {
         "id": "c",
         "text": "na brzuch."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l4.3",
       "number": 3,
       "prompt": "Lekarka uważa, że pacjenci",
       "options": [
        {
         "id": "a",
         "text": "najlepiej leczą się sami."
        },
        {
         "id": "b",
         "text": "mają swoje preferencje."
        },
        {
         "id": "c",
         "text": "rzadko mówią, co im dolega."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l4.4",
       "number": 4,
       "prompt": "Według lekarki chłodne napoje",
       "options": [
        {
         "id": "a",
         "text": "mogą pomagać małym pacjentom."
        },
        {
         "id": "b",
         "text": "nie powinny być podawane chorym dzieciom."
        },
        {
         "id": "c",
         "text": "są podawane chorym dzieciom przez rodziców."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l4.5",
       "number": 5,
       "prompt": "Dla dziecka z wysoką gorączką temperatura kąpieli chłodzącej powinna",
       "options": [
        {
         "id": "a",
         "text": "wynosić maksymalnie 30 stopni."
        },
        {
         "id": "b",
         "text": "wynosić tyle stopni, ile temperatura ciała."
        },
        {
         "id": "c",
         "text": "być niewiele niższa niż temperatura ciała."
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
     "instruction": "V. Proszę uważnie słuchać nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać tekstu na temat różnych rodzajów mlek oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 7,
     "audio": {
      "announce": [
       1177.7,
       1193.7
      ],
      "plays": [
       {
        "start": 1208.9,
        "end": 1314.0
       },
       {
        "start": 1360.2,
        "end": 1465.1
       }
      ],
      "pauseBetweenPlays": 46.2,
      "source": "auto-silencedetect",
      "verified": false
     },
     "options": [
      {
       "id": "A",
       "text": "nie jest dobre dla osób na diecie."
      },
      {
       "id": "B",
       "text": "jest odpowiednie dla alergików."
      },
      {
       "id": "C",
       "text": "dobrze pasuje do różnych rodzajów kaw."
      },
      {
       "id": "D",
       "text": "jest chętnie kupowane przez Polaków."
      },
      {
       "id": "E",
       "text": "może powodować alergię."
      },
      {
       "id": "F",
       "text": "można zrobić samodzielnie."
      }
     ],
     "transcript": {
      "text": "Cześć, to ja - Ania Witamina. Witajcie na moim kanale. Dzisiaj opowiem wam o różnych rodzajach mlek. Dlaczego? Zawsze kupowałam mleko krowie, dopóki nie okazało się, że mam na nie uczulenie i znalazłam się w grupie alergików. Długo nie zastanawiałam się nad tym, jakie mleko piję. Wiedziałam, że istnieje na przykład popularne w polskich domach mleko kozie, jednak ono nigdy mi nie smakowało. Uwielbiam białą kawę, więc zaczęłam szukać alternatywy i wiecie co? Okazało się, że w sklepach można znaleźć wiele typów mojego ulubionego napoju. Nie są to tylko mleka pochodzące od zwierząt. Specjaliści od robienia dobrej kawy nawet bardziej polecają odmiany roślinne do cappuccino lub latte. Wszędzie można kupić mleko ryżowe. Jest ono idealne dla wegetarian i dla osób, które nie mogą jeść wszystkich pokarmów, bo ich nie tolerują, czyli dla mnie! Domowymi sposobami łatwo można przygotować mleko migdałowe. Wystarczą: woda, migdały, blender i trochę czasu. Efekt jest rewelacyjny. Przeczytałam, że z kolei mleko kokosowe jest bardzo tłuste i kaloryczne. Powinnam więc go unikać, bo się odchudzam. A wy jakie mleko polecacie? Czekam na wasze opinie."
     },
     "example": {
      "id": "l5.ex",
      "prompt": "Mleko krowie",
      "answer": "E",
      "shown": true
     },
     "items": [
      {
       "id": "l5.1",
       "number": 1,
       "prompt": "Mleko kozie",
       "answer": "D"
      },
      {
       "id": "l5.2",
       "number": 2,
       "prompt": "Mleko roślinne",
       "answer": "C"
      },
      {
       "id": "l5.3",
       "number": 3,
       "prompt": "Mleko ryżowe",
       "answer": "B"
      },
      {
       "id": "l5.4",
       "number": 4,
       "prompt": "Mleko migdałowe",
       "answer": "F"
      },
      {
       "id": "l5.5",
       "number": 5,
       "prompt": "Mleko kokosowe",
       "answer": "A"
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
     "pointsFormula": "6 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 6,
     "pdfPage": 9,
     "pdfPages": [
      9,
      10
     ],
     "example": {
      "id": "r1.ex",
      "passage": {
       "text": "„Dziękuję najlepszym kibicom na świecie, którzy zawsze ze mną byli” – napisał na Facebooku polski biegacz, który w tym roku zakończył karierę sportową. Następnie podziękował za pomoc swoim bliskim oraz trenerom, a za wsparcie finansowe sponsorom.",
       "source": "Na podstawie: https://www.tvp.info/58496717/adam-kszczot-zakonczyl-kariere"
      },
      "prompt": "Z tego tekstu wynika, że",
      "options": [
       {
        "id": "a",
        "text": "biegacz osobiście podziękował wszystkim sportowcom."
       },
       {
        "id": "b",
        "text": "sportowiec najpierw podziękował osobom, z którymi pracował."
       },
       {
        "id": "c",
        "text": "sportowiec podziękował osobom, które finansowały jego udział w zawodach."
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
        "text": "„Farma” będzie nowym programem telewizyjnym. Wezmą w nim udział osoby, które nigdy nie mieszkały i nie pracowały na wsi. Spędzą razem sześć tygodni i w tym czasie będą musiały wykonać różne zadania, a wygra ten uczestnik, który najbardziej spodoba się widzom.",
        "source": "Na podstawie: https://www.polsat.pl/news/2022-01-05/farma-poznaj-zasady-nowego-reality-show-polsatu/"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "uczestnikami programu „Farma” będą rolnicy."
        },
        {
         "id": "b",
         "text": "o wygranej będą decydować osoby, które oglądają program."
        },
        {
         "id": "c",
         "text": "program będzie trwał ponad dwa miesiące."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "Polski film Sukienka, którego reżyserem jest Tadeusz Łysiak, miał szansę na Oscara. Jednak w tym roku tę prestiżową nagrodę otrzymał inny film. Głównym tematem polskiej produkcji jest opowieść o pracownicy hotelu, która z powodu niskiego wzrostu nie może znaleźć partnera.",
        "source": "Na podstawie: https://www.tvp.info/58396994/oscary-2022-polski-film-nominowany-to-sukienka-tadeusza-lysiaka-nominowany-takze-janusz-kaminski-west-side-story"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "reżyser filmu dostał Oscara."
        },
        {
         "id": "b",
         "text": "film Sukienka otrzymał wiele nagród."
        },
        {
         "id": "c",
         "text": "bohaterka filmu nie jest wysoka."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Naukowcy z uniwersytetu w Bergen udowodnili, że dorosła osoba może wydłużyć swoje życie o ponad 10 lat. Musi jedynie zmienić dietę na taką, która zawiera więcej roślin i orzechów, a mniej mięsa. Wyniki badań zostały opublikowane w czasopiśmie akademickim „PLOS One\".",
        "source": "Na podstawie: https://tvn24.pl/tvnmeteo/ciekawostki/dieta-wiecej-orzechow-mniej-czerwonego-miesa-zmiana-diety-moze-wydluzyc-nasze-zycie-o-ponad-dekade-5595549"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "dzięki diecie można wydłużyć życie o niecałe dziesięć lat."
        },
        {
         "id": "b",
         "text": "rezultaty badań na temat diety zostały opisane w prasie."
        },
        {
         "id": "c",
         "text": "w diecie dorosłego człowieka nie powinno być posiłków z mięsem."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Słowacka telewizja właśnie poinformowała, że latający samochód AirCar przeszedł wszystkie testy i otrzymał certyfikat bezpieczeństwa. Maszyna potrafi zmieniać się z samochodu w samolot, a zajmuje jej to dwie minuty i piętnaście sekund. Do latania AirCarem trzeba mieć licencję pilota.",
        "source": "Na podstawie: https://www.tvp.info/58153821/slowacki-latajacy-samochod-przeszedl-testy-i-otrzymal-certyfikat"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "AirCarem może latać każda osoba."
        },
        {
         "id": "b",
         "text": "AirCar zamienia się w samolot w kilka sekund."
        },
        {
         "id": "c",
         "text": "informacje o AirCarze przekazały media."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "„Naprawdę nie rozumiem, jak można do gry dodać język polski, a zapomnieć o włoskim?” – to tylko jeden z komentarzy, który w internecie napisali gracze z Włoch. W grze „Dying Light 2” jest siedemnaście języków, w tym np. czeski czy arabski, ale brakuje włoskiego.",
        "source": "Na podstawie: https://www.tvp.info/58424065/techland-producent-gry-dying-light-2-nie-umiescil-wloskiej-wersji-jezykowej-wlosi-ostro-krytykuja-polska-firme"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "niedługo w grze będzie można wybrać język polski."
        },
        {
         "id": "b",
         "text": "w grze już teraz można wybrać język polski."
        },
        {
         "id": "c",
         "text": "gracze przetłumaczyli grę na język czeski i arabski."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.6",
       "number": 6,
       "passage": {
        "text": "Zaplanowana na poniedziałek 20 września konferencja pod tytułem „Komunikacja międzynarodowa” obędzie się w piątek 24 września. Za zmianę bardzo przepraszamy. Lokalizacja konferencji pozostaje bez zmian, czyli spotykamy się w głównej auli, która znajduje się na pierwszym piętrze biurowca naszej firmy."
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "zmienił się termin konferencji."
        },
        {
         "id": "b",
         "text": "planowana jest inna lokalizacja konferencji."
        },
        {
         "id": "c",
         "text": "konferencja ma zmieniony temat."
        }
       ],
       "answer": "a"
      }
     ],
     "pdfNotes": [
      "Item 6 (a notice) has no 'Na podstawie' source line.",
      "Item 3 passage ends with „PLOS One\" - the closing quote is a straight quote in the booklet, kept verbatim."
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
     "source": "https://www.polskieradio.pl/13/53/Artykul/1769097,Gwiezdne-wojny-w-Polsce",
     "passage": "Po raz pierwszy Gwiezdne wojny można było obejrzeć w polskich kinach 30 marca 1979, czyli dwa lata po światowej premierze. W tej sytuacji nie było niczego wyjątkowego, bo w tamtych czasach długo czekało się także na inne produkcje z Zachodu.\n\nFilm od razu wzbudził zainteresowanie polskich fanów fantastyki i science-fiction. Na pierwszym Polconie – najstarszym krajowym spotkaniu wielbicieli fantastyki – był to temat numer jeden. Jednak społeczność fanów Gwiezdnych wojen zaczęła się powiększać dopiero w latach 90. XX wieku, gdy można było kupić kasetę VHS z filmem i oglądać go po kilka razy. W tym samym czasie w Polsce zaczynała się era internetu i pojawiały się pierwsze strony internetowe prowadzone przez osoby, które znały na pamięć każdą scenę z filmu. Po jakimś czasie twórcy stron internetowych dowiedzieli się wzajemnie o swoim istnieniu, nawiązali kontakt i zaczęli zakładać pierwsze lokalne fankluby. Wiele z nich bardzo się rozwinęło, zwłaszcza po premierach kolejnych części Gwiezdnych wojen.\n\nGdy w 2005 roku wszyscy czekali na ostatni film z serii, Leszek Budkiewicz z Grabowca niedaleko Torunia poprosił władze swojej wsi, by nową ulicę nazwano imieniem najsławniejszego rycerza Jedi. Dzięki temu Grabowiec stał się wkrótce jedyną w Polsce (a prawdopodobnie także na świecie) miejscowością, w której można było pospacerować ulicą Obi-Wana Kenobiego. Do dzisiaj korzystają z tego turyści oraz wielbiciele serii filmów Star Wars. Dla wielu atrakcją jest już samo zrobienie zdjęcia przy tabliczce z nazwą ulicy, niektórzy na tę okazję przywożą stroje ulubionych bohaterów Gwiezdnych wojen i się w nich fotografują.",
     "example": {
      "id": "r2.ex",
      "statement": "Gwiezdne wojny pokazano w polskich kinach w dniu światowej premiery filmu.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Polscy widzowie mogli obejrzeć pierwszy raz ten film w latach 90. XX wieku.",
       "answer": "NIE"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Podczas pierwszego Polconu dużo rozmawiano o Gwiezdnych wojnach.",
       "answer": "TAK"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Dzięki pierwszym polskim fanom Gwiezdnych wojen film był sprzedawany na kasetach VHS.",
       "answer": "NIE"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Lokalne fankluby zakładały osoby, które poznały się przez internet.",
       "answer": "TAK"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Władze Grabowca zaproponowały, aby jedną z ulic nazwać imieniem Obi-Wana Kenobiego.",
       "answer": "NIE"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Część fanów Gwiezdnych wojen przyjeżdża do Grabowca z kostiumami postaci z filmu.",
       "answer": "TAK"
      }
     ],
     "pdfNotes": [
      "The source line is printed as a bare URL without the 'Na podstawie:' prefix; stored as printed."
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
     "source": "Na podstawie: https://blog.beactivetv.pl/jak-zaczac-trenowac/",
     "passage": "Twoja przygoda z aktywnością fizyczną zaczęła się niedawno? Jeśli tak, to upewnij się, że robisz wszystko, jak należy. Wśród wielu pytań zadawanych przez osoby początkujące ciągle powtarzają się te same wątpliwości: {{ex}}? Jak często należy uprawiać sport? Jaką dyscyplinę wybrać i w jaki sposób mierzyć efekty?\n\nJeśli naprawdę chcesz zmienić swoje przyzwyczajenia, trening powinien być stałą częścią twojego planu dnia. Dzięki temu, że potraktujesz go {{1}}, trudniej będzie ci z niego zrezygnować. Skuteczny trening nie musi zajmować więcej niż 30 minut dziennie, a tyle trwa odcinek dobrego serialu. Pamiętaj, że ten czas warto zaplanować {{2}}.\n\nJeżeli dopiero zaczynasz przygodę z aktywnością fizyczną, {{3}} – takie rozwiązanie jest optymalne. Czy rzadszy trening ma sens? Tak, bo jakikolwiek ruch jest lepszy niż jego brak. Jednak gdy na uprawianie sportu poświęcasz czas raz na siedem dni, {{4}}. Aby twoje ciało zaczęło się zmieniać, musisz ruszać się regularnie. Minimum zalecane przez ekspertów to treningi całego ciała 3–4 razy w tygodniu.\n\nRób to, co sprawia ci radość i nie powoduje całkowitego zmęczenia. Zbyt intensywne ćwiczenia nie są dobrym wyborem na początek, ponieważ prawdopodobnie {{5}}. Mogą też niepotrzebnie przetrenować ciało. Zdarza się też, że intensywne ćwiczenia prowadzą do kontuzji, {{6}}, które wymagają precyzji i spokojnych ruchów. Nie oznacza to wcale, że nie osiągniesz wymarzonych rezultatów. Wręcz przeciwnie. Takie ćwiczenia {{7}} i będą doskonałą bazą do dalszej aktywności.",
     "options": [
      {
       "id": "A",
       "text": "i zapisać w tradycyjnym lub elektronicznym kalendarzu"
      },
      {
       "id": "B",
       "text": "szybko ci się znudzą i przestaniesz je lubić"
      },
      {
       "id": "C",
       "text": "Co ćwiczyć i jak znaleźć czas na trening"
      },
      {
       "id": "D",
       "text": "dlatego lepiej zacznij od zestawów ćwiczeń"
      },
      {
       "id": "E",
       "text": "staraj się ćwiczyć regularnie, najlepiej co drugi dzień"
      },
      {
       "id": "F",
       "text": "pomogą wzmocnić całe ciało"
      },
      {
       "id": "G",
       "text": "jak inne obowiązki i aktywności"
      },
      {
       "id": "H",
       "text": "to nie oczekuj spektakularnych efektów"
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
       "answer": "A"
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
     "pointsFormula": "6 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 6,
     "pdfPage": 13,
     "source": "Na podstawie: https://zuch.media/12-praktycznych-porad-jak-nauczyc-dzieci-oszczedzac-i-gospodarowac-pieniedzmi-czesc-1/",
     "heading": "Jak nauczyć dzieci oszczędzania?",
     "options": [
      {
       "id": "A",
       "text": "Ile musimy miesięcznie zapłacić za prąd, a ile możemy wydać na jedzenie, paliwo czy ubrania? Rodzice zwykle nie informują o tym dzieci, bo uważają, że to są sprawy dorosłych. To błąd, już małym dzieciom można tłumaczyć, jak wygląda budżet rodzinny."
      },
      {
       "id": "B",
       "text": "Jesteś wzorem dla swojego dziecka i twoja postawa pomoże lub przeszkodzi mu w osiągnięciu celu. Jeśli to konieczne, powinieneś zmienić swoje zwyczaje związane z wydawaniem pieniędzy."
      },
      {
       "id": "C",
       "text": "Warto organizować raz w miesiącu rodzinne rozmowy, podczas których dziecko dowie się, jaki mamy budżet i jakie rachunki, raty kredytu oraz faktury do zapłacenia."
      },
      {
       "id": "D",
       "text": "Rysujemy tabelę i wpisujemy obowiązki oraz kwoty, np. wyrzucanie śmieci – 3 złote. Decydujemy, ile razy w miesiącu dziecko będzie mogło w ten sposób zarobić. Na końcu obliczamy kwotę, którą dziecko może otrzymać po wykonaniu wszystkich zaplanowanych zadań."
      },
      {
       "id": "E",
       "text": "Część zaoszczędzonych pieniędzy warto przekazać na cel charytatywny. To bardzo ważna lekcja. Niech dziecko samo wybierze, czy kupi karmę dla zwierząt ze schroniska, czy pomoże osobie, która tego potrzebuje."
      },
      {
       "id": "F",
       "text": "Wybierz razem z dzieckiem naczynia, np. słoiki, do których będzie zbierać pieniądze. Warto je podpisać, np. każdy słoik to inny cel: bilet na koncert idola – 150 zł, gra komputerowa – 85 zł, kieszonkowe na wakacje – 300 zł."
      },
      {
       "id": "G",
       "text": "Młodsze dzieci, które jeszcze nie potrafią liczyć, za dobrze wykonane czynności można nagradzać kuponami. Takim kuponem dzieci mogą „zapłacić” za obejrzenie bajki, zabawkę lub inną dodatkową przyjemność."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Domowe wydatki",
      "answer": "C",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Miesięczne wynagrodzenie",
       "answer": "D"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Nie tylko pieniądze za pracę",
       "answer": "G"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Naucz, jak się dzielić",
       "answer": "E"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Zacznij od pracy nad sobą",
       "answer": "B"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Rozmawiaj o wydatkach",
       "answer": "A"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Naucz oszczędzania na przyjemności",
       "answer": "F"
      }
     ],
     "pdfNotes": [
      "Instruction is printed with stray combining marks (Proszę̨, połączyć́, wpisać́) in the booklet; stored with normal letters."
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
     "title": "Mechaniczny kelner",
     "source": "Na podstawie: https://www.koty.pl/kot-robot-obsluguje-gosci-restauracji/",
     "wordBox": [
      "zajmie",
      "przyszłości",
      "kelnerom",
      "szklanki",
      "film",
      "robot",
      "potrafi",
      "wie",
      "suficie",
      "drogi",
      "obiekt"
     ],
     "distractors": [],
     "passage": "Maszyny zamiast kelnerów? To już nie jest {{ex}} science fiction, ale rzeczywistość. Jedna z restauracji w Łodzi testuje nowy sposób obsługi klientów. Jedzenie może przywieźć do stolika {{1}}, który wyglądem przypomina kota. Ma on cztery półki na naczynia, dotykowy ekran i mechaniczne uszy. Dodatkowo {{2}} zaśpiewać kilka piosenek, np. „Sto lat\". Maszyna {{3}} też, dla kogo przygotowane jest danie, dlatego każdy na pewno dostanie to, co zamówił. Dzięki kamerom i specjalnym punktom, które znajdują się na {{4}} restauracji, robot wie, gdzie jest. Gdy jego trasę zablokuje jakiś klient, ten powie mu – „Proszę się przesunąć”, a jeśli to będzie jakiś statyczny {{5}}, robot poszuka innej {{6}} do celu.\n\nNie wszyscy są zadowoleni z nowego typu kelnera. Część osób, które są pracownikami restauracji, boi się, że {{7}} on miejsce ludzi. Jeśli maszyna spodoba się gościom, w innych lokalach też pojawią się roboty, a przez to wiele osób straci pracę. Niektórzy mówią, że w {{8}}, gdy w każdym punkcie gastronomicznym będą tylko maszyny, goście restauracji będą chcieli, żeby znów obsługiwali ich ludzie.\n\nMenadżer restauracji wyjaśnia, że robot tylko pomaga {{9}} i nie może sam przyjąć zamówienia, umyć {{10}}, nalać piwa czy innego napoju. Jeszcze przez długi czas zawód ten będzie potrzebny, a maszyny nie zastąpią ludzi.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "film"
      },
      {
       "id": "1",
       "answer": "robot"
      },
      {
       "id": "2",
       "answer": "potrafi"
      },
      {
       "id": "3",
       "answer": "wie"
      },
      {
       "id": "4",
       "answer": "suficie"
      },
      {
       "id": "5",
       "answer": "obiekt"
      },
      {
       "id": "6",
       "answer": "drogi"
      },
      {
       "id": "7",
       "answer": "zajmie"
      },
      {
       "id": "8",
       "answer": "przyszłości"
      },
      {
       "id": "9",
       "answer": "kelnerom"
      },
      {
       "id": "10",
       "answer": "szklanki"
      }
     ],
     "pdfNotes": [
      "Word-box variant of reading V: box = 10 answers + the example word (film), no unneeded word. Gaps are numbered 1-10 (dotted)."
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
     "source": "Na podstawie: https://www.publio.pl/wiedza-i-zycie,p661692.html",
     "passage": "„Wiedza i Życie” to {{ex1}} polski miesięcznik popularnonaukowy. Łączy {{ex2}} długą {{ex3}} z {{1}}. Prostym językiem pisze o {{2}}, co dzieje się w ważnych laboratoriach w Polsce i poza jej granicami, przygląda się {{3}} rezultatom badań. W każdym numerze jest wiele {{4}} i tabel, {{5}} ułatwiają lepsze zrozumienie prezentowanych problemów. W {{6}} publikują swoje prace {{7}} {{8}} z różnych stron {{9}}. „Wiedza i Życie” omawia również {{10}} książki o tematyce związanej z nauką.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "najstarszy",
        "najstarszym",
        "najstarsze"
       ],
       "answer": "najstarszy"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "go",
        "nim",
        "on"
       ],
       "answer": "on"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "tradycją",
        "tradycję",
        "tradycja"
       ],
       "answer": "tradycję"
      },
      {
       "id": "1",
       "options": [
        "nowoczesnością",
        "nowoczesność",
        "nowoczesności"
       ],
       "answer": "nowoczesnością"
      },
      {
       "id": "2",
       "options": [
        "tego",
        "tych",
        "tym"
       ],
       "answer": "tym"
      },
      {
       "id": "3",
       "options": [
        "najnowszym",
        "najnowszą",
        "najnowszymi"
       ],
       "answer": "najnowszym"
      },
      {
       "id": "4",
       "options": [
        "ilustracje",
        "ilustracji",
        "ilustracjach"
       ],
       "answer": "ilustracji"
      },
      {
       "id": "5",
       "options": [
        "które",
        "którzy",
        "którymi"
       ],
       "answer": "które"
      },
      {
       "id": "6",
       "options": [
        "miesięcznika",
        "miesięczniku",
        "miesięcznikiem"
       ],
       "answer": "miesięczniku"
      },
      {
       "id": "7",
       "options": [
        "znane",
        "znani",
        "znany"
       ],
       "answer": "znani"
      },
      {
       "id": "8",
       "options": [
        "badaczy",
        "badaczom",
        "badacze"
       ],
       "answer": "badacze"
      },
      {
       "id": "9",
       "options": [
        "światów",
        "światu",
        "świata"
       ],
       "answer": "świata"
      },
      {
       "id": "10",
       "options": [
        "ciekawy",
        "ciekawe",
        "ciekawi"
       ],
       "answer": "ciekawe"
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
     "source": "Na podstawie: Wegetariański raj, Twój Styl, numer 3, marzec 2022",
     "wordBox": [
      "czyli",
      "żeby",
      "dlatego",
      "bo",
      "że",
      "i",
      "ale"
     ],
     "distractors": [
      "czyli"
     ],
     "passage": "Tel Awiw nazywany jest centrum kulinarnym, {{ex}} ludzie przyjeżdżają tu nie tylko po to, {{1}} opalać się na plaży {{2}} kąpać w morzu, {{3}} także dla wspaniałej kuchni. Większość lokalnych restauracji podaje potrawy warzywne, {{4}} wielu turystów uważa Tel Awiw za stolicę bezmięsnych posiłków. Działa tu ponad 400 restauracji i barów, które są miejscami przyjaznymi dla wegan, co oznacza, {{5}} przynajmniej 25 procent dań jest przygotowywanych z produktów roślinnych.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "bo"
      },
      {
       "id": "1",
       "answer": "żeby"
      },
      {
       "id": "2",
       "answer": "i"
      },
      {
       "id": "3",
       "answer": "ale"
      },
      {
       "id": "4",
       "answer": "dlatego"
      },
      {
       "id": "5",
       "answer": "że"
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
     "source": "Na podstawie: https://wyborcza.pl/7,177851,28072976,tylko-jedna-fala-upalow-spowodowala-smierc-okolo-80-tys-europejczykow.html",
     "passage": "Zdaniem {{ex1}} klimatologa występowanie intensywnych suszy i pożarów lasów można {{ex2}} wyjaśnić zmianami klimatu. Jeżeli temperatura na Ziemi będzie rosła, takie katastrofy zapewne będą jeszcze {{1}}. Na przykład na Syberii w ubiegłym roku upały trwały przez kilka tygodni. Nigdy wcześniej nie występowały tu tak {{2}} temperatury – blisko 40 stopni Celsjusza. Kilka miesięcy {{3}} w Ameryce Południowej susze stały się przyczyną pożarów. Światowa Organizacja Meteorologiczna informuje, że w ciągu ostatnich 50 lat kataklizmy związane z pogodą spowodowały {{4}} strat materialnych od początku zbierania tych danych. Ważne jest jednak to, że liczba ofiar śmiertelnych jest znacznie {{5}}.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "sławniejszego",
        "sławnego",
        "sławniejszym"
       ],
       "answer": "sławnego"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "lepiej",
        "lepsze",
        "lepszy"
       ],
       "answer": "lepiej"
      },
      {
       "id": "1",
       "options": [
        "najczęściej",
        "częstsze",
        "najczęstsze"
       ],
       "answer": "częstsze"
      },
      {
       "id": "2",
       "options": [
        "wysokie",
        "wyższe",
        "najwyższe"
       ],
       "answer": "wysokie"
      },
      {
       "id": "3",
       "options": [
        "późno",
        "najpóźniej",
        "później"
       ],
       "answer": "później"
      },
      {
       "id": "4",
       "options": [
        "więcej",
        "najwięcej",
        "dużo"
       ],
       "answer": "najwięcej"
      },
      {
       "id": "5",
       "options": [
        "mniejsza",
        "mniej",
        "mało"
       ],
       "answer": "mniejsza"
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
     "pdfPages": [
      17,
      18
     ],
     "source": "Na podstawie: Dobrze znów być razem, Twój Styl, numer 3, marzec 2022",
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "Teraz Anna jest już starszą panią i często {{ex1}} dom rodzinny. Kiedy {{ex2}} małą dziewczynką, jej rodzice {{1}} w szkole, a nią i siostrą {{2}} kochana babcia Wanda. W tamtym czasie dom {{3}} Annie poczucie bezpieczeństwa i rodzinnej bliskości.\n\nNiestety, córka Anny, Magdalena mówi, że z dzieciństwa {{4}} tylko samotne wieczory, zapracowaną mamę i ojca, który ciągle potrzebował ciszy i spokoju – zwłaszcza gdy Magda {{5}} się z nim pobawić. Może dlatego dziewczyna bardzo szybko, bo jeszcze na studiach, {{6}} za mąż i wyprowadziła się z domu.\n\n„Obecnie jednak, po wielu latach spędzonych poza domem rodzinnym, mąż i ja {{7}} za dużą, wielopokoleniową rodziną i właśnie {{8}} za miejscem, w którym moglibyśmy zamieszkać razem z moją mamą” – opowiada Magdalena.\n\n„Ten pomysł bardzo mi się {{9}} – mówi Anna – bo ja nadal {{10}} o domu dla całej rodziny: babci, rodziców i wnuków.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "wspominać",
       "answer": "wspomina"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "być",
       "answer": "była"
      },
      {
       "id": "1",
       "given": "uczyć",
       "answer": "uczyli",
       "accept": []
      },
      {
       "id": "2",
       "given": "opiekować się",
       "answer": "opiekowała się",
       "accept": []
      },
      {
       "id": "3",
       "given": "dawać",
       "answer": "dawał",
       "accept": []
      },
      {
       "id": "4",
       "given": "pamiętać",
       "answer": "pamięta",
       "accept": []
      },
      {
       "id": "5",
       "given": "chcieć",
       "answer": "chciała",
       "accept": []
      },
      {
       "id": "6",
       "given": "wyjść",
       "answer": "wyszła",
       "accept": []
      },
      {
       "id": "7",
       "given": "tęsknić",
       "answer": "tęsknimy",
       "accept": []
      },
      {
       "id": "8",
       "given": "rozglądać się",
       "answer": "rozglądamy się",
       "accept": []
      },
      {
       "id": "9",
       "given": "podobać",
       "answer": "podoba",
       "accept": []
      },
      {
       "id": "10",
       "given": "marzyć",
       "answer": "marzę",
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
      "sentence": "Teresa obejrzała program o podróżach.",
      "underlined": "o podróżach",
      "stem": "…………… Teresa obejrzała program?",
      "shortAnswer": "O podróżach.",
      "answer": "O czym",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Michał smaruje chleb dżemem.",
       "underlined": "dżemem",
       "stem": "…………… Michał smaruje chleb?",
       "shortAnswer": "Dżemem.",
       "answer": "Czym",
       "accept": []
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Weronika zapytała starszego pana o drogę.",
       "underlined": "o drogę",
       "stem": "…………… Weronika zapytała starszego pana?",
       "shortAnswer": "O drogę.",
       "answer": "O co",
       "accept": []
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Marcin codziennie używa laptopa.",
       "underlined": "codziennie",
       "stem": "…………… Marcin używa laptopa?",
       "shortAnswer": "Codziennie.",
       "answer": "Jak często",
       "accept": []
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Karol zabrał dzieci siostry do muzeum.",
       "underlined": "siostry",
       "stem": "…………… dzieci Karol zabrał do muzeum?",
       "shortAnswer": "Siostry.",
       "answer": "Czyje",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Monika mieszkała w Australii dwa lata.",
       "underlined": "dwa lata",
       "stem": "…………… Monika mieszkała w Australii?",
       "shortAnswer": "Dwa lata.",
       "answer": "Jak długo",
       "accept": [
        "Ile czasu",
        "Ile lat"
       ]
      }
     ],
     "pdfNotes": [
      "Printed example shows the full question ('O czym Teresa obejrzała program?', O czym bold-underlined); stored as stem with the question words removed, like the items.",
      "Official key lists three alternatives for item 5 (Jak długo…? Ile czasu…? Ile lat……?); first stored as answer, rest in accept.",
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
      "source": "Michalina dała jeść swoim kotom.",
      "hint": "nakarmiła",
      "answer": "Michalina nakarmiła swoje koty.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "W lipcu planujemy wyjazd do Hiszpanii.",
       "hint": "zamiar",
       "answer": "W lipcu mamy zamiar wyjechać do Hiszpanii.",
       "rubric": "odpowiedni czasownik 0,5 + transformacja rzeczownika na bezokolicznik 0,5",
       "rubricParts": [
        {
         "what": "odpowiedni czasownik",
         "points": 0.5
        },
        {
         "what": "transformacja rzeczownika na bezokolicznik",
         "points": 0.5
        }
       ]
      },
      {
       "id": "g6.2",
       "number": 2,
       "source": "Mojej koleżance ładnie jest w kolorze zielonym.",
       "hint": "wygląda",
       "answer": "Moja koleżanka ładnie wygląda w kolorze zielonym.",
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
       "source": "Dorota przeprowadziła się do Krakowa już rok temu.",
       "hint": "mieszka",
       "answer": "Dorota mieszka w Krakowie już rok.",
       "accept": [
        "Dorota mieszka w Krakowie od roku."
       ],
       "rubric": "2 transformacje (2 x 0,25) + brak transformacji lub transformacja 0,25 + usunięcie przyimka temu 0,25",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 0.5
        },
        {
         "what": "brak transformacji lub transformacja",
         "points": 0.25
        },
        {
         "what": "usunięcie przyimka temu",
         "points": 0.25
        }
       ]
      },
      {
       "id": "g6.4",
       "number": 4,
       "source": "W jakim wieku jest ich córka?",
       "hint": "lat",
       "answer": "Ile lat ma ich córka?",
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
       "source": "Wczoraj był słoneczny, ale chłodny dzień.",
       "hint": "było",
       "answer": "Wczoraj było słonecznie, ale chłodno.",
       "rubric": "2 transformacje (2 x 0,5)",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 1
        }
       ]
      }
     ],
     "pdfNotes": [
      "Key item 3 prints the model as 'Dorota mieszka w Krakowie już rok / od roku.'; stored as first variant + accept (the printed 'od roku' variant)."
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
     "source": "Na podstawie: https://katalogmarzen.pl/pl/artykul/czy-polacy-maja-marzenia",
     "passage": "Przeprowadziliśmy badania wśród polskich internautów i zapytaliśmy, co najbardziej {{ex1}} dostać w prezencie, gdyby mogli go sobie wybrać. Pytaliśmy też, czy Polacy tworzą listy wymarzonych przedmiotów. Drodzy internauci, przeczytaliśmy odpowiedzi i już wiemy, czego oczekujecie, dlatego gorąco was zachęcamy: {{ex2}} swoje marzenia i {{1}} o nich otwarcie. Na przykład gdybyście {{2}} ze znajomymi, że każdy z was zrobi swoją listę prezentów i udostępni ją innym, wtedy wybieranie podarunku {{3}} zdecydowanie łatwiejsze! Prawie wszyscy słyszeli o voucherach na udział w ciekawych wydarzeniach, które różne osoby z przyjemnością {{4}} od bliskich. Okazało się, że badani internauci często {{5}} dostać taki voucher niż jakąś konkretną rzecz. Dlatego, jeśli właśnie masz kupić prezent przyjacielowi, {{6}} lot balonem lub skok ze spadochronem i nie {{7}} o to, że taki prezent nie spodoba się ważnej dla ciebie osobie. Zapewniamy cię, że znajomy znacznie bardziej {{8}} z takiej niespodzianki niż z kolejnej pary skarpetek. Dobra rada dla nas wszystkich brzmi: {{9}} podarować komuś spełnienie chociaż jednego marzenia. Niech nasz przyjaciel {{10}} szczęśliwy!",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "pragnęliby",
        "pragnęłyby",
        "pragnęli"
       ],
       "answer": "pragnęliby"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "Spełnialibyście",
        "Spełnilibyście",
        "Spełniajcie"
       ],
       "answer": "Spełniajcie"
      },
      {
       "id": "1",
       "options": [
        "powiedzielibyście",
        "mówcie",
        "mówilibyście"
       ],
       "answer": "mówcie"
      },
      {
       "id": "2",
       "options": [
        "umówili się",
        "umawialibyście się",
        "umówilibyście się"
       ],
       "answer": "umówili się"
      },
      {
       "id": "3",
       "options": [
        "byłby",
        "byłoby",
        "bądź"
       ],
       "answer": "byłoby"
      },
      {
       "id": "4",
       "options": [
        "otrzymaliby",
        "otrzymywałoby",
        "otrzymałyby"
       ],
       "answer": "otrzymałyby"
      },
      {
       "id": "5",
       "options": [
        "wolałaby",
        "woleliby",
        "wolałyby"
       ],
       "answer": "woleliby"
      },
      {
       "id": "6",
       "options": [
        "niech wybiera",
        "wybierałbyś",
        "wybierz"
       ],
       "answer": "wybierz"
      },
      {
       "id": "7",
       "options": [
        "martwiłbyś się",
        "martw się",
        "zmartwiłbyś się"
       ],
       "answer": "martw się"
      },
      {
       "id": "8",
       "options": [
        "ucieszyłby się",
        "ucieszyłaby się",
        "niech się cieszy"
       ],
       "answer": "ucieszyłby się"
      },
      {
       "id": "9",
       "options": [
        "Próbowalibyśmy",
        "Spróbowalibyśmy",
        "Spróbujmy"
       ],
       "answer": "Spróbujmy"
      },
      {
       "id": "10",
       "options": [
        "poczuje się",
        "poczułby się",
        "czułby się"
       ],
       "answer": "poczuje się"
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
     "source": "Na podstawie: https://www.wysokieobcasy.pl/wysokie-obcasy/7,168673,28065746,facynacje-z-drugiej-reki-aleksandra-koperda-w-swojej-ksiazce.html",
     "wordBox": [
      "dla",
      "w",
      "na",
      "przed",
      "z",
      "do",
      "między"
     ],
     "distractors": [
      "między"
     ],
     "passage": "Ostatnio wielu moich kolegów zdecydowało się {{ex}} kupno mieszkania {{1}} kamienicy. Często są to lokale {{2}} ciekawą historią. Prawie każdy z nowych gospodarzy próbuje wrócić {{3}} dawnego stylu mieszkania. Chce, żeby mieszkanie wyglądało tak jak dawniej. Najczęściej zaczyna remont od odnowienia podłóg czy zlikwidowania plastikowych okien. To wyraz szacunku {{4}} ludzi, którzy żyli tu wiele lat {{5}} nimi.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "na"
      },
      {
       "id": "1",
       "answer": "w"
      },
      {
       "id": "2",
       "answer": "z"
      },
      {
       "id": "3",
       "answer": "do"
      },
      {
       "id": "4",
       "answer": "dla"
      },
      {
       "id": "5",
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
         "prompt": "Jest Pani właścicielką / Jest Pan właścicielem klubu „Zabawa dla Całej Rodziny” i z okazji Dnia Dziecka organizuje Pani/Pan piknik. Proszę napisać zaproszenie, które zamieści Pani/Pan przed wejściem do klubu."
        },
        {
         "id": "b",
         "genre": "list",
         "wordTarget": 170,
         "prompt": "Zakończyła Pani / Zakończył Pan remont mieszkania. Proszę napisać list do przyjaciółki/przyjaciela z Polski i opisać, jak teraz wyglądają pokoje, kuchnia i łazienka."
        }
       ]
      },
      {
       "id": "II",
       "parts": [
        {
         "id": "a",
         "genre": "życzenia",
         "wordTarget": 20,
         "prompt": "Pani/Pana polski kolega żeni się w następną sobotę. Proszę napisać życzenia dla młodej pary."
        },
        {
         "id": "b",
         "genre": "relacja",
         "wordTarget": 180,
         "prompt": "Polskie czasopismo „Poznajemy Świat” czeka na teksty od czytelników o ich najciekawszych wyjazdach. Proszę napisać relację ze szczególnie interesującej podróży."
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
         "prompt": "Chce Pani/Pan sprzedać lodówkę. Proszę napisać ogłoszenie, które powiesi Pani/Pan na tablicy z ofertami w supermarkecie."
        },
        {
         "id": "b",
         "genre": "charakterystyka",
         "wordTarget": 175,
         "prompt": "Internetowy portal edukacyjny ogłosił konkurs na najlepszą nauczycielkę / najlepszego nauczyciela roku. Zgłasza Pani/Pan osobę, którą Pani/Pan lubi i szanuje. Proszę napisać jej charakterystykę i uzasadnić, dlaczego powinna dostać nagrodę."
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
