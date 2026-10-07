window.EXAMS = window.EXAMS || {};
window.EXAMS["2024-04"] = {
 "schemaVersion": 1,
 "id": "2024-04",
 "meta": {
  "level": "B1",
  "labelPdf": "kwiecień 2024",
  "examDates": "20-21.04.2024",
  "sources": {
   "test": "sources/2024-04/test.pdf",
   "transcript": "sources/2024-04/transcript.pdf",
   "audio": "sources/2024-04/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear.",
   "Listening V has 4 persons and 5 statements (A–E); the printed key is row-per-statement (A* 2,4 | B 3 | C 1 | D 4 | E 3).",
   "Listening IV transcript is a continuous monologue (no speaker labels) -> transcript.text.",
   "Listening II item 4: official transcript tags both lines (K); kept.",
   "Reading III: all 8 fragments A–H are used (example C + 7). Reading IV: all 8 paragraphs A–H are used (example B + 7).",
   "Grammar II/VIII heading/example gaps: the example word is part of the printed word box and is struck through in the PDF.",
   "Grammar IV: example forms (widzą, osiągnęli) are printed filled in in the booklet."
  ]
 },
 "audio": {
  "src": "sources/2024-04/audio.mp3",
  "duration": 1596.7,
  "intro": [
   0,
   47.3
  ],
  "readingTime": [
   47.3,
   107.8
  ],
  "tail": [
   1533.2,
   1596.7
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
    4,
    8
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
     "pdfPage": 4,
     "audio": {
      "announce": [
       107.8,
       123.9
      ],
      "plays": [
       {
        "start": 134.2,
        "end": 313.3
       }
      ],
      "items": [
       {
        "ref": "l1.ex",
        "start": 134.2,
        "end": 144.4
       },
       {
        "ref": "l1.1",
        "start": 150.8,
        "end": 156.1
       },
       {
        "ref": "l1.2",
        "start": 162.7,
        "end": 167.5
       },
       {
        "ref": "l1.3",
        "start": 174.0,
        "end": 179.2
       },
       {
        "ref": "l1.4",
        "start": 185.7,
        "end": 191.2
       },
       {
        "ref": "l1.5",
        "start": 197.6,
        "end": 203.6
       },
       {
        "ref": "l1.6",
        "start": 210.3,
        "end": 215.7
       },
       {
        "ref": "l1.7",
        "start": 222.0,
        "end": 227.5
       },
       {
        "ref": "l1.8",
        "start": 234.1,
        "end": 238.7
       },
       {
        "ref": "l1.9",
        "start": 245.1,
        "end": 251.6
       },
       {
        "ref": "l1.10",
        "start": 258.1,
        "end": 263.5
       },
       {
        "ref": "l1.11",
        "start": 270.0,
        "end": 276.5
       },
       {
        "ref": "l1.12",
        "start": 282.9,
        "end": 288.3
       },
       {
        "ref": "l1.13",
        "start": 294.7,
        "end": 300.5
       },
       {
        "ref": "l1.14",
        "start": 307.0,
        "end": 313.3
       }
      ],
      "source": "auto-silencedetect",
      "verified": false
     },
     "example": {
      "id": "l1.ex",
      "prompt": "Ta wypowiedź oznacza, że ona",
      "options": [
       {
        "id": "a",
        "text": "robi makijaż."
       },
       {
        "id": "b",
        "text": "robi remont."
       },
       {
        "id": "c",
        "text": "jest gotowa."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "sp": "K",
       "t": "Poczekaj, proszę, jeszcze się maluję."
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
         "text": "w kwiaciarni."
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
        "t": "Czy mają państwo chleb bezglutenowy?"
       }
      },
      {
       "id": "l1.2",
       "number": 2,
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
         "text": "strach."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Boję się jechać sama autostopem."
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź to fragment",
       "options": [
        {
         "id": "a",
         "text": "porady lekarskiej."
        },
        {
         "id": "b",
         "text": "reklamy radiowej."
        },
        {
         "id": "c",
         "text": "prognozy pogody."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Od jutra mocne ochłodzenie i spadek ciśnienia."
       }
      },
      {
       "id": "l1.4",
       "number": 4,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "u optyka."
        },
        {
         "id": "b",
         "text": "u ortopedy."
        },
        {
         "id": "c",
         "text": "u informatyka."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Zapraszamy na komputerowe badanie wzroku."
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "zainteresowanie."
        },
        {
         "id": "b",
         "text": "zadowolenie."
        },
        {
         "id": "c",
         "text": "niezadowolenie."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Znowu zapomniałaś, przecież byliśmy umówieni."
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź oznacza, że osoba",
       "options": [
        {
         "id": "a",
         "text": "nie jest pewna."
        },
        {
         "id": "b",
         "text": "ma problemy z mówieniem."
        },
        {
         "id": "c",
         "text": "ogląda ciekawy film."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Trudno powiedzieć, czy to dobry spektakl."
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź oznacza, że osoba",
       "options": [
        {
         "id": "a",
         "text": "obudziła się za wcześnie."
        },
        {
         "id": "b",
         "text": "wstała za późno."
        },
        {
         "id": "c",
         "text": "zapomniała o budziku."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Zaspałem, budzik chyba nie zadzwonił."
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w szatni."
        },
        {
         "id": "b",
         "text": "w przychodni."
        },
        {
         "id": "c",
         "text": "w przedszkolu."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Proszę czekać pod gabinetem."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź komentuje",
       "options": [
        {
         "id": "a",
         "text": "wyścig rowerowy."
        },
        {
         "id": "b",
         "text": "skoki narciarskie."
        },
        {
         "id": "c",
         "text": "mecz piłki nożnej."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Co za emocje! Gol! Bramkarz nie miał szans!"
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź oznacza, że basen jest",
       "options": [
        {
         "id": "a",
         "text": "zamknięty."
        },
        {
         "id": "b",
         "text": "otwarty w tygodniu."
        },
        {
         "id": "c",
         "text": "nieczynny przez tydzień."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Basen jest nieczynny do odwołania."
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź oznacza, że osoba",
       "options": [
        {
         "id": "a",
         "text": "podjęła decyzję."
        },
        {
         "id": "b",
         "text": "potrzebuje rady."
        },
        {
         "id": "c",
         "text": "szuka swojego miejsca."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Powiedz, co zrobiłabyś na moim miejscu?"
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "u kosmetyczki."
        },
        {
         "id": "b",
         "text": "na siłowni."
        },
        {
         "id": "c",
         "text": "w restauracji."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Dzisiaj polecamy szarlotkę na ciepło."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "polecenie."
        },
        {
         "id": "b",
         "text": "zakaz."
        },
        {
         "id": "c",
         "text": "pytanie."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Za centrum handlowym skręć w prawo."
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "krytykę."
        },
        {
         "id": "b",
         "text": "komplement."
        },
        {
         "id": "c",
         "text": "poradę."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Potrafisz zrobić naprawdę wyśmienite pierogi."
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
     "pointsFormula": "6 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 6,
     "plays": 2,
     "pdfPage": 5,
     "audio": {
      "announce": [
       328.7,
       344.8
      ],
      "plays": [
       {
        "start": 355.2,
        "end": 466.3
       },
       {
        "start": 512.6,
        "end": 623.7
       }
      ],
      "pauseBetweenPlays": 46.3,
      "items": [
       {
        "ref": "l2.ex",
        "start": 355.2,
        "end": 368.8
       },
       {
        "ref": "l2.1",
        "start": 375.2,
        "end": 384.5
       },
       {
        "ref": "l2.2",
        "start": 391.0,
        "end": 399.1
       },
       {
        "ref": "l2.3",
        "start": 405.6,
        "end": 416.6
       },
       {
        "ref": "l2.4",
        "start": 423.5,
        "end": 434.3
       },
       {
        "ref": "l2.5",
        "start": 440.8,
        "end": 451.6
       },
       {
        "ref": "l2.6",
        "start": 458.5,
        "end": 466.3
       }
      ],
      "source": "auto-silencedetect",
      "verified": false
     },
     "example": {
      "id": "l2.ex",
      "prompt": "Z tego dialogu dowiadujemy się, że mężczyzna",
      "options": [
       {
        "id": "a",
        "text": "będzie jadł posiłek w lokalu."
       },
       {
        "id": "b",
        "text": "nie będzie jadł w restauracji."
       },
       {
        "id": "c",
        "text": "zamawia jedzenie dla dwóch osób."
       }
      ],
      "answer": "b",
      "shown": true,
      "transcript": {
       "lines": [
        {
         "sp": "K",
         "t": "Co dla pana?"
        },
        {
         "sp": "M",
         "t": "Poproszę podwójnego cheeseburgera z frytkami na wynos."
        }
       ]
      }
     },
     "items": [
      {
       "id": "l2.1",
       "number": 1,
       "prompt": "Z tego dialogu dowiadujemy się, że klient",
       "options": [
        {
         "id": "a",
         "text": "ma tylko gotówkę."
        },
        {
         "id": "b",
         "text": "chciałby zapłacić gotówką."
        },
        {
         "id": "c",
         "text": "chce zapłacić kartą."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "W naszym sklepie płatność przyjmujemy jedynie w gotówce."
         },
         {
          "sp": "M",
          "t": "Ale ja mam przy sobie tylko kartę."
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
         "text": "wszystkie posiłki są gratis."
        },
        {
         "id": "b",
         "text": "za jedzenie trzeba dodatkowo zapłacić."
        },
        {
         "id": "c",
         "text": "jeden posiłek jest za darmo."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Czy śniadania są wliczone w cenę pokoju?"
         },
         {
          "sp": "K",
          "t": "Ta oferta nie zawiera posiłków."
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
         "text": "para planuje egzotyczną podróż."
        },
        {
         "id": "b",
         "text": "kobieta od zawsze marzyła o egzotycznej podróży."
        },
        {
         "id": "c",
         "text": "mężczyzna pierwszy raz będzie leciał samolotem."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Może polecimy w tym roku na jakieś egzotyczne wakacje?"
         },
         {
          "sp": "M",
          "t": "Ooo, brzmi bardzo dobrze, uwielbiam latać samolotem."
         }
        ]
       }
      },
      {
       "id": "l2.4",
       "number": 4,
       "prompt": "Z tego dialogu dowiadujemy się, że kobieta",
       "options": [
        {
         "id": "a",
         "text": "jest zadowolona z usług salonu."
        },
        {
         "id": "b",
         "text": "poleca wizytę w tym salonie."
        },
        {
         "id": "c",
         "text": "jest niezadowolona z wizyty."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "I jak oceniasz ten salon fryzjerski?"
         },
         {
          "sp": "K",
          "t": "Myślałam, że to jest dobry salon, ale myliłam się. Zobacz na moją fryzurę."
         }
        ]
       }
      },
      {
       "id": "l2.5",
       "number": 5,
       "prompt": "Z tego dialogu dowiadujemy się, że mężczyzna",
       "options": [
        {
         "id": "a",
         "text": "chce wkrótce wziąć udział w zawodach."
        },
        {
         "id": "b",
         "text": "jest za stary na udział w zawodach."
        },
        {
         "id": "c",
         "text": "nie jest pewien, czy weźmie udział w zawodach."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Kiedy planuje pan wziąć udział w zawodach pływackich?"
         },
         {
          "sp": "M",
          "t": "Niestety. Wiek mi już na to nie pozwala."
         }
        ]
       }
      },
      {
       "id": "l2.6",
       "number": 6,
       "prompt": "Z tego dialogu dowiadujemy się, że kobieta",
       "options": [
        {
         "id": "a",
         "text": "gra na skrzypcach razem z dzieckiem."
        },
        {
         "id": "b",
         "text": "dała swoje skrzypce dziecku."
        },
        {
         "id": "c",
         "text": "grała na skrzypcach już w młodym wieku."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Grasz na jakimś instrumencie?"
         },
         {
          "sp": "K",
          "t": "Od dziecka regularnie gram na skrzypcach."
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
     "prompt": "Proszę wysłuchać wywiadu na temat pracy stewardessy i zaznaczyć właściwe odpowiedzi.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://noizz.pl/lifestyle/stewardessa-opowiada-o-kulisach-swojego-zawodu/9n0lez8",
     "audio": {
      "announce": [
       637.7,
       655.4
      ],
      "plays": [
       {
        "start": 665.7,
        "end": 759.6
       },
       {
        "start": 805.6,
        "end": 899.6
       }
      ],
      "pauseBetweenPlays": 46.0,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Dziennikarz",
        "t": "Dlaczego zostałaś stewardessą?"
       },
       {
        "sp": "Stewardessa",
        "t": "Od zawsze marzyłam o ciekawych podróżach, już na studiach często podróżowałam autostopem po Polsce, żeby odkrywać nowe miejsca."
       },
       {
        "sp": "Dziennikarz",
        "t": "Co spowodowało, że wybrałaś tę ścieżkę zawodową?"
       },
       {
        "sp": "Stewardessa",
        "t": "Kiedy moja mama nagle zachorowała, zrozumiałam, że życie jest krótkie i trzeba spełniać swoje marzenia. To był impuls do działania. Gdy po jakimś czasie znalazłam ogłoszenie o pracy w liniach lotniczych, postanowiłam spróbować swoich sił. Poszłam na rozmowę kwalifikacyjną i trzy dni później podpisałam umowę."
       },
       {
        "sp": "Dziennikarz",
        "t": "Jak wyglądała rekrutacja? Co jest ważne w tej pracy?"
       },
       {
        "sp": "Stewardessa",
        "t": "Pracodawca nie wymagał wykształcenia lotniczego. Liczyła się biegła znajomość języka obcego, organizacja pracy, punktualność, komunikatywność oraz umiejętność opanowania stresu. Po rozmowach kwalifikacyjnych i teście z angielskiego, był egzamin praktyczny, czyli rozwiązywanie problemów na pokładzie samolotu."
       },
       {
        "sp": "Dziennikarz",
        "t": "Opowiedz nam o największych plusach tej pracy."
       },
       {
        "sp": "Stewardessa",
        "t": "To przede wszystkim możliwość zwiedzania świata, często z dłuższymi pobytami w ciekawych miejscach. Oczekiwanie na lot powrotny przez kilka dni to przyjemność. Moja firma wtedy płaci za transport i hotele."
       },
       {
        "sp": "Dziennikarz",
        "t": "Czy są jakieś minusy tej pracy?"
       },
       {
        "sp": "Stewardessa",
        "t": "Oczywiście, głównym problemem jest zmiana czasu i jet lag, który potrafi rozregulować rytm życia."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "prompt": "Kobieta została stewardessą, bo",
      "options": [
       {
        "id": "a",
        "text": "lubi latać samolotami."
       },
       {
        "id": "b",
        "text": "interesuje się podróżami."
       },
       {
        "id": "c",
        "text": "chce zarabiać dużo pieniędzy."
       }
      ],
      "answer": "b",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "prompt": "Choroba matki",
       "options": [
        {
         "id": "a",
         "text": "pomogła podjąć decyzję o pracy."
        },
        {
         "id": "b",
         "text": "przeszkodziła w podpisaniu umowy."
        },
        {
         "id": "c",
         "text": "opóźniła rekrutację o trzy dni."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l3.2",
       "number": 2,
       "prompt": "Żeby pracować jako stewardessa, trzeba",
       "options": [
        {
         "id": "a",
         "text": "znać minimum 3 języki obce."
        },
        {
         "id": "b",
         "text": "mieć lotnicze wykształcenie."
        },
        {
         "id": "c",
         "text": "umieć radzić sobie w stresujących sytuacjach."
        }
       ],
       "answer": "c"
      },
      {
       "id": "l3.3",
       "number": 3,
       "prompt": "Podczas rekrutacji kobieta",
       "options": [
        {
         "id": "a",
         "text": "miała test językowy."
        },
        {
         "id": "b",
         "text": "leciała samolotem."
        },
        {
         "id": "c",
         "text": "rozmawiała z pilotem."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l3.4",
       "number": 4,
       "prompt": "Jedną z zalet pracy stewardessy są",
       "options": [
        {
         "id": "a",
         "text": "stabilność i rutyna."
        },
        {
         "id": "b",
         "text": "darmowe noclegi i przejazdy."
        },
        {
         "id": "c",
         "text": "ciekawe szkolenia zawodowe."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.5",
       "number": 5,
       "prompt": "Wady pracy stewardessy to",
       "options": [
        {
         "id": "a",
         "text": "długie oczekiwanie na lot powrotny."
        },
        {
         "id": "b",
         "text": "nieregularny tryb życia."
        },
        {
         "id": "c",
         "text": "brak czasu na zwiedzanie."
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
     "prompt": "Proszę posłuchać informacji na temat sztucznej inteligencji oraz rynku pracy i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "6 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 6,
     "plays": 2,
     "pdfPage": 7,
     "source": "Na podstawie: https://www.polskieradio.pl/10/5566/Artykul/3291592,lekarz-hydraulik-artysta-dla-nich-ai-nie-jest-zagrozeniem",
     "audio": {
      "announce": [
       913.1,
       931.0
      ],
      "plays": [
       {
        "start": 941.3,
        "end": 1045.5
       },
       {
        "start": 1091.9,
        "end": 1196.2
       }
      ],
      "pauseBetweenPlays": 46.4,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "text": "Według analityków w najbliższych latach dwadzieścia pięć procent zawodów zastąpi sztuczna inteligencja. Firmy przyznają, że korzystają z jej pomocy i dlatego zrezygnowały z części pracowników, którzy okazali się mało efektywni w porównaniu do możliwości sztucznej inteligencji. Ludzie przegrali z robotami. Prawie co trzecia firma zwolniła w ostatnich dwunastu miesiącach pracownika – zastąpiły go maszyny. Oczywiście, roboty będą zastępować ludzi coraz częściej, ale są zawody, którym to nie grozi. Zdaniem ekspertów w przypadku hydraulików czy elektryków nie będzie się to opłacało, ponieważ koszty zatrudnienia człowieka są dużo niższe. Także architekci czy lekarze nie powinni bać się sztucznej inteligencji – będzie ona dla nich cenną pomocą. Już teraz pomaga we wczesnym diagnozowaniu chorób, ale w nietypowych przypadkach doświadczenie lekarza jest ważniejsze. Artyści też mogą być spokojni – sztuczna inteligencja ich nie zastąpi. Melomani nie wybiorą muzyki, którą tworzy algorytm, bo chcą zobaczyć człowieka i to, jak śpiewa, jak się ubiera. Wciąż lubimy chodzić na koncerty, żeby spotkać tam artystę. Z drugiej strony sztuczna inteligencja z łatwością napisze muzykę do filmu, dlatego kompozytorzy mogą mieć mniej pracy. Co innego muzycy, którzy świetnie grają na instrumentach – oni mogą czuć się bezpieczni."
     },
     "example": {
      "id": "l4.ex",
      "statement": "Z powodu sztucznej inteligencji niedługo zniknie 25% zawodów.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "statement": "Firmy zwalniają pracowników, którzy nie potrafią pracować z robotami.",
       "answer": "NIE"
      },
      {
       "id": "l4.2",
       "number": 2,
       "statement": "W ostatnim roku wszystkie badane firmy zamieniły pracownika na robota.",
       "answer": "NIE"
      },
      {
       "id": "l4.3",
       "number": 3,
       "statement": "Zastąpienie hydraulika czy elektryka robotem będzie za drogie.",
       "answer": "TAK"
      },
      {
       "id": "l4.4",
       "number": 4,
       "statement": "Sztuczna inteligencja to duża konkurencja dla lekarzy.",
       "answer": "NIE"
      },
      {
       "id": "l4.5",
       "number": 5,
       "statement": "Artyści będą grać coraz mniej koncertów.",
       "answer": "NIE"
      },
      {
       "id": "l4.6",
       "number": 6,
       "statement": "Sztuczna inteligencja jest zagrożeniem dla kompozytorów.",
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
     "prompt": "Proszę wysłuchać tekstu na temat zwyczajów śniadaniowych i dopasować osoby (1-4) do ich opinii (A-E). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
     "pointsFormula": "6 x 1 p.",
     "pointsPerSlot": 1,
     "maxPoints": 6,
     "plays": 2,
     "pdfPage": 8,
     "source": "Na podstawie: https://www.brw.pl/blog/sniadania-od-kuchni-sprawdzamy-poranne-zwyczaje-zywieniowe-polakow/",
     "audio": {
      "announce": [
       1210.1,
       1228.2
      ],
      "plays": [
       {
        "start": 1238.6,
        "end": 1351.7
       },
       {
        "start": 1397.8,
        "end": 1510.9
       }
      ],
      "pauseBetweenPlays": 46.1,
      "items": [
       {
        "ref": "p1",
        "start": 1238.6,
        "end": 1270.4
       },
       {
        "ref": "p2",
        "start": 1279.4,
        "end": 1298.2
       },
       {
        "ref": "p3",
        "start": 1306.8,
        "end": 1323.7
       },
       {
        "ref": "p4",
        "start": 1332.4,
        "end": 1351.7
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
      "statement": "codziennie je śniadanie.",
      "answer": [
       "1"
      ],
      "shown": true
     },
     "statements": [
      {
       "id": "l5.A",
       "letter": "A",
       "text": "nie je śniadań w domu.",
       "slots": 2,
       "answer": [
        "2",
        "4"
       ],
       "anyOrder": true,
       "starred": true
      },
      {
       "id": "l5.B",
       "letter": "B",
       "text": "bardzo lubi jeść na śniadanie pieczywo.",
       "slots": 1,
       "answer": [
        "3"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.C",
       "letter": "C",
       "text": "ma różnorodne menu.",
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
       "text": "je wegetariańskie śniadania.",
       "slots": 1,
       "answer": [
        "4"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.E",
       "letter": "E",
       "text": "zwykle śniadanie robi w kilka minut.",
       "slots": 1,
       "answer": [
        "3"
       ],
       "anyOrder": true,
       "starred": false
      }
     ],
     "keyNote": "*kolejność odpowiedzi dowolna",
     "transcript": {
      "lines": [
       {
        "sp": "Osoba 1 (K)",
        "t": "Śniadanie to dla mnie najważniejszy posiłek. Jem je każdego dnia bez wyjątku. Staram się komponować zdrowe, pełne witamin dania. Na moim stole często pojawiają się warzywa, musli, a czasem jajecznica z boczkiem. Jeśli mam ochotę, to przygotowuję śniadania kontynentalne, np. rogaliki z dżemem i owocami."
       },
       {
        "sp": "Osoba 2 (M)",
        "t": "Całkowicie zrezygnowałem ze śniadań, nie mam na to czasu. Lubię dłużej pospać, a potem szybko szykuję się do wyjścia. Pierwszy posiłek jem w pracy koło południa. Idę wtedy na lunch z kolegami albo kupuję coś w pobliskim sklepie."
       },
       {
        "sp": "Osoba 3 (M)",
        "t": "Nie bardzo lubię gotować, a rano przygotowuję jedzenie w prosty i szybki sposób, tak, żeby nie zajęło mi to więcej niż 10 minut. Zwykle są to kanapki lub tosty, bo nie wyobrażam sobie śniadań bez chleba lub bułek."
       },
       {
        "sp": "Osoba 4 (K)",
        "t": "Jestem na diecie i zrezygnowałam całkowicie z mięsa. Zamówiłam catering, który przywozi mi gotowe posiłki do pracy i w związku z tym nie przygotowuję śniadań w domu. To jest bardzo wygodne, bo nie muszę się martwić zakupami i gotowaniem."
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
    10,
    15
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
     "pdfPage": 10,
     "pdfPages": [
      10,
      11
     ],
     "example": {
      "id": "r1.ex",
      "passage": {
       "text": "Kameralny koncert chopinowski w Warszawie to wyjątkowe wydarzenie. Można tam usłyszeć interpretacje dzieł Fryderyka Chopina. Koncert zaczyna się krótką prezentacją życia kompozytora, a występ każdego artysty trwa 50 minut. Pianistami są utalentowani muzycy, którzy zwykle koncertują w Polsce i za granicą.",
       "source": "Na podstawie: https://biletserwis.pl/e/chopin-point-warsaw/"
      },
      "prompt": "Z tego tekstu wynika, że",
      "options": [
       {
        "id": "a",
        "text": "wydarzenie odbywa się w Polsce i innych europejskich stolicach."
       },
       {
        "id": "b",
        "text": "na koncercie występują zagraniczni i polscy muzycy."
       },
       {
        "id": "c",
        "text": "podczas koncertu można poznać twórczość tylko jednego kompozytora."
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
        "text": "W kursie surfowania mogą uczestniczyć dorośli, młodzież, a nawet dzieci zainteresowane aktywnym spędzaniem wolnego czasu. Najpierw jednak trzeba poznać teorię związaną między innymi z bezpieczeństwem w wodzie. Nie jest prawdą, że to sport dla bogatych. Na początku można u nas wypożyczyć deskę surfingową i sprawdzić, jak się czujemy w nowej sytuacji.",
        "source": "Na podstawie: https://www.ciekawyartykul.pl/czy-warto-nauczyc-sie-surfowania/"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "trzeba zainwestować dużo pieniędzy, żeby uprawiać surfing."
        },
        {
         "id": "b",
         "text": "na kursie dowiemy się również, jak chronić swoje życie i zdrowie."
        },
        {
         "id": "c",
         "text": "osoby zainteresowane tym sportem muszą najpierw kupić specjalny sprzęt."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "Trnawa to jedno z najważniejszych miast w Słowacji, które jest zlokalizowane w zachodniej części kraju, ok. 56 km od Bratysławy. Znajduje się tam wiele zabytków przyrodniczych oraz kulturowych. Jej największą atrakcją jest park Dolna Krupa. Według legendy w okolicy Trnawy w latach 1800–1806 mieszkał Ludwig van Beethoven. Prawdopodobnie kompozytor właśnie tam napisał sonatę Księżycową.",
        "source": "Na podstawie: https://kobieta.interia.pl/podroze/news-maly-rzym-tuz-za-polska-granica-turystow-urzeka-w-pierwszej-,nId,7136233"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "Trnawa jest największym – po Bratysławie – słowackim miastem."
        },
        {
         "id": "b",
         "text": "turyści, którzy lubią naturę, nie będą się nudzili w Trnawie."
        },
        {
         "id": "c",
         "text": "słynna sonata Beethovena powstała w Bratysławie."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Dzieła Banksy’ego będzie można zobaczyć od 14 grudnia na krakowskim Kazimierzu, gdzie Hazis Vardar, dyrektor europejskich teatrów, otworzył właśnie muzeum najbardziej tajemniczego współczesnego artysty. Mówi się, że słynny grafficiarz jest z Wielkiej Brytanii, bo właśnie tam w latach 90. XX wieku zaczęły pojawiać się jego charakterystyczne prace.",
        "source": "Na podstawie: https://lovekrakow.pl/galeria/dziela-banksyego-zna-caly-swiat-teraz-mozna-zobaczyc-je-w-krakowie-zdjecia_6989.html"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "pierwsze graffiti Banksy’ego powstały w Krakowie."
        },
        {
         "id": "b",
         "text": "nową wystawę artysty można oglądać w Anglii."
        },
        {
         "id": "c",
         "text": "Hazis Vardar kieruje instytucjami kulturalnymi w Europie."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Sprzedam willę pod Warszawą, która przypomina rezydencje popularne w Hollywood. Ma dwa baseny, lądowisko dla helikopterów oraz prywatną ścieżkę do biegania. Znajduje się tam też duży taras z pięknym widokiem. Dom jest komfortowy i wyposażony w najnowsze technologie.",
        "source": "Na podstawie: https://warszawa.naszemiasto.pl/willa-jak-z-hollywood-pod-warszawa-baseny-ladowisko-dla/ar/c9-9219721"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "rezydencja jest zlokalizowana w centrum Hollywood."
        },
        {
         "id": "b",
         "text": "do willi można dostać się tylko helikopterem."
        },
        {
         "id": "c",
         "text": "dom znajduje się niedaleko Warszawy."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "Andrea Camastra z wykształcenia jest muzykiem, ale wybrał zawód kucharza. Urodził się we Włoszech i pracował w popularnych lokalach gastronomicznych w całej Europie. Prawdziwą karierę zrobił jednak w Polsce. Nuta, jego pierwsza restauracja, dostała prestiżową gwiazdkę Michelin. To potwierdza, że jest jedną z lepszych w Warszawie.",
        "source": "Na podstawie: https://www.vogue.pl/a/szef-kuchni-gwiazdkowej-restauracji-nuta-andrea-camastra"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "Andrea Camastra został kucharzem, gdy przyjechał do Polski."
        },
        {
         "id": "b",
         "text": "kucharz największy sukces odniósł w znanej włoskiej restauracji."
        },
        {
         "id": "c",
         "text": "lokal Camastry w Warszawie otrzymał gastronomiczne wyróżnienie."
        }
       ],
       "answer": "c"
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
     "pdfPage": 12,
     "source": "Na podstawie: https://kobietaipieniadze.pl/p/pan-paragon/",
     "passage": "Bezpłatna aplikacja Pan Paragon pomaga kontrolować wydatki całej rodziny. Sposób jej działania jest prosty – robimy zdjęcie paragonu i program automatycznie rozpoznaje nazwę sklepu, datę i wydaną kwotę. Zakupy dodajemy do odpowiedniej kategorii: życie, edukacja, inwestycje, rozrywka. Istnieje możliwość, aby tworzyć własne grupy wydatków i w ten sposób sprawdzać, na co przeznaczamy najwięcej pieniędzy. Co ciekawe, dowiemy się również, jak wyglądają nasze finanse w porównaniu z innymi osobami w podobnym wieku.\n\nAplikacja przechowuje wszystkie zarejestrowane paragony. Nie musimy już się martwić, że dowód zakupu się zgubi, kiedy akurat będziemy chcieli coś zwrócić lub zareklamować. Dokument zapisany w systemie jest takim samym potwierdzeniem płatności jak ten papierowy.\n\nDodatkowo w aplikacji Pan Paragon przechowamy karty klienta do różnych sklepów. Program oferuje także dostęp do kuponów z rabatami. Ponadto sprawdzimy w nim aktualne gazetki z promocjami, a kiedy przeglądamy oferty supermarketów, możemy dodawać poszczególne produkty do automatycznej listy zakupów. Zrobimy również spis potrzebnych nam produktów na podstawie na przykład przepisów z internetu. Wystarczy wkleić link do konkretnej strony, a aplikacja odczyta, co powinniśmy włożyć do koszyka.",
     "example": {
      "id": "r2.ex",
      "statement": "Tekst jest o programie komputerowym.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Pan Paragon ma pomóc w zarządzaniu domowym budżetem.",
       "answer": "TAK"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "W aplikacji trzeba wpisać, kiedy i gdzie robiliśmy zakupy.",
       "answer": "NIE"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Użytkownik może samodzielnie zmieniać kategorie zakupów.",
       "answer": "TAK"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Gdy klient chce złożyć reklamację, musi pokazać w sklepie tradycyjny paragon.",
       "answer": "NIE"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Pan Paragon umożliwia przeglądanie ofert promocyjnych w wielu różnych sklepach.",
       "answer": "TAK"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Aplikacja samodzielnie wybiera w internecie najlepsze przepisy.",
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
     "pdfPage": 13,
     "source": "Na podstawie: https://www.polskieradio.pl/10/10335/artykul/3306567,studia-za-granica-tworz-swoj-profil-jak-najwczesniej",
     "passage": "O nauce za granicą marzy wiele osób. Michał Słowak uczył się w Chinach, {{ex}}. Po ukończeniu liceum nie poszedł na studia, ponieważ nie wiedział, że trzeba na nie aplikować. Wyjechał do Azji, {{1}} oraz zarabiał na rozpoczęcie edukacji w szkole wyższej. Naukę zaczął w Glasgow, {{2}} w Cambridge. Później realizował praktyki w Parlamencie Europejskim, {{3}}.\n\nRazem z innymi absolwentami światowych szkół wyższych otworzył firmę doradztwa akademickiego, {{4}} w wyborze kierunku studiów, rekrutacji i opłaceniu uczelni ich marzeń. Ważny jest czas podjęcia decyzji o aplikacji na popularne fakultety. Okazuje się, {{5}}, tym łatwiej będzie nam się na nie dostać. Jeśli myślimy o tym dopiero w szkole średniej, to może być za późno.\n\n- Pracujemy indywidualnie z każdym kandydatem, {{6}} i zasugerować wybór uczelni oraz kursów dodatkowych – wyjaśnia Michał Słowak. Wyniki z egzaminów lub matury mają znaczenie, {{7}}: staże, wolontariaty, sport, instrumenty muzyczne, wszystko, co może nas wyróżnić. Uczelnie szukają ludzi wszechstronnych.",
     "options": [
      {
       "id": "A",
       "text": "gdzie poznawał kulturę kraju i język mandaryński"
      },
      {
       "id": "B",
       "text": "żeby zbudować jego precyzyjny profil"
      },
      {
       "id": "C",
       "text": "a potem studiował w Glasgow i Cambridge"
      },
      {
       "id": "D",
       "text": "że im wcześniej zaplanujemy studia za granicą"
      },
      {
       "id": "E",
       "text": "która chce pomagać przyszłym studentom"
      },
      {
       "id": "F",
       "text": "który zrobił na nim ogromne wrażenie"
      },
      {
       "id": "G",
       "text": "lecz ważniejsze są rzeczy pozaakademickie"
      },
      {
       "id": "H",
       "text": "ale studia magisterskie odbył już na uniwersytecie"
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
       "answer": "A"
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
       "answer": "F"
      },
      {
       "id": "r3.4",
       "number": 4,
       "gap": "4",
       "answer": "E"
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
       "answer": "B"
      },
      {
       "id": "r3.7",
       "number": 7,
       "gap": "7",
       "answer": "G"
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
     "pdfPage": 14,
     "source": "Na podstawie: https://dbamomojzasieg.pl/higiena-cyfrowa/",
     "heading": "Osiem zasad higieny cyfrowej, czyli jak nie uzależnić się od smartfona?",
     "options": [
      {
       "id": "A",
       "text": "Kiedy musisz skoncentrować się na obowiązkach, wyłącz dźwięk w telefonie. To samo zrób z serwisami społecznościowymi – zadbaj, by alerty ci nie przeszkadzały."
      },
      {
       "id": "B",
       "text": "Na początek zacznij sprawdzać, jak długo korzystasz z sieci w ciągu dnia. Zastanów się również, w jakim celu sięgasz po telefon."
      },
      {
       "id": "C",
       "text": "Kontakty przez internet to nie to samo, co spotkanie ze znajomymi. Pamiętaj o tym, ponieważ dobre relacje z innymi ludźmi naturalnie chronią przed uzależnieniem od telefonu."
      },
      {
       "id": "D",
       "text": "Minimum godzinę przed zaśnięciem nie sprawdzaj już telefonu. Najlepiej byłoby nie brać sprzętów elektronicznych do łóżka i zainwestować w najzwyklejszy budzik."
      },
      {
       "id": "E",
       "text": "Jeśli pracujesz, skup się właśnie na tym, a nie na innych aktywnościach. Nie sprawdzaj Facebooka, nie oglądaj filmików na YouTubie."
      },
      {
       "id": "F",
       "text": "Nie noś telefonu przez cały czas przy sobie. W trakcie pracy lub nauki specjalnie zostaw go w miejscu, w którym nie będziesz go widział."
      },
      {
       "id": "G",
       "text": "Naukowcy udowodnili, że ludzie, którzy nie mają hobby, łatwiej uzależniają się od internetu. Zastanów się, co sprawia ci przyjemność i zacznij to robić!"
      },
      {
       "id": "H",
       "text": "Co jakiś czas zrób sobie cyfrowy detoks. Świadomie spędzaj jak najwięcej chwil poza siecią – idź do kawiarni, pospaceruj w parku lub spędź dzień z bliskimi."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Kontroluj czas przed ekranem",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Odłóż czasem swój smartfon",
       "answer": "F"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Zaprzyjaźnij się z ciszą",
       "answer": "A"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Nie rób wielu rzeczy na raz",
       "answer": "E"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Poszukaj pasji poza internetem",
       "answer": "G"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Dbaj o jakość snu",
       "answer": "D"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Dbaj o przyjaźnie",
       "answer": "C"
      },
      {
       "id": "r4.7",
       "number": 7,
       "prompt": "Planuj przerwy od internetu",
       "answer": "H"
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
     "pdfPage": 15,
     "title": "Najstarsza didżejka w Polsce",
     "source": "Na podstawie: https://www.polskieradio.pl/10/482/artykul/3194353,vika-dokument-o-didzejce-ktora-oswaja-lek-przed-staroscia",
     "passage": "„Vika” to musical dokumentalny, którego {{ex}} bohaterką jest znana didżejka-seniorka, ale również działaczka społeczna. W Polsce zwykle starość {{1}} z czymś smutnym, ale ta kobieta łamie stereotypy – energii mogą jej pozazdrościć {{2}} dużo młodszych pokoleń.\n\nDJ Wika, a właściwie Wirginia Szmyt, z wykształcenia jest pedagogiem i {{3}} dzieci z niepełnosprawnościami. Po przejściu na emeryturę {{4}} działać na rzecz seniorów. Wtedy też rozwinęła się jej kariera – najpierw grała dla starszych, poznawała sztukę miksowania utworów i {{5}} docenili ją nawet młodzi. Za konsolą muzyczną stoi już ponad 25 lat. Obecnie ma osiemdziesiąt sześć lat i cały czas jest {{6}} zawodowo.\n\nWika nie tylko jest didżejką, ale też aktywistką. Z jej inicjatywy od kilku lat {{7}} Parada Seniorów w Warszawie. Wirginia Szmyt mówi, że starsi powinni być widoczni w społeczeństwie i uczestniczyć w życiu {{8}}.\n\nDokument powstawał przez cztery lata, a {{9}} na film wziął się ze strachu reżyserki przed przemijaniem. Chciała przekonać {{10}} i samą siebie, że można się pięknie starzeć.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "podstawową",
        "pierwszą",
        "główną"
       ],
       "answer": "główną"
      },
      {
       "id": "1",
       "options": [
        "pamięta się",
        "zna się",
        "łączy się"
       ],
       "answer": "łączy się"
      },
      {
       "id": "2",
       "options": [
        "uczestnicy",
        "przedstawiciele",
        "prezenterzy"
       ],
       "answer": "przedstawiciele"
      },
      {
       "id": "3",
       "options": [
        "uczyła",
        "bawiła się",
        "uczyła się"
       ],
       "answer": "uczyła"
      },
      {
       "id": "4",
       "options": [
        "zaczęła",
        "skończyła",
        "kontynuowała"
       ],
       "answer": "zaczęła"
      },
      {
       "id": "5",
       "options": [
        "tylko",
        "wreszcie",
        "wolno"
       ],
       "answer": "wreszcie"
      },
      {
       "id": "6",
       "options": [
        "aktywna",
        "energiczna",
        "doświadczona"
       ],
       "answer": "aktywna"
      },
      {
       "id": "7",
       "options": [
        "prowadzi się",
        "odbywa się",
        "występuje"
       ],
       "answer": "odbywa się"
      },
      {
       "id": "8",
       "options": [
        "publicznym",
        "narodowym",
        "ogólnym"
       ],
       "answer": "publicznym"
      },
      {
       "id": "9",
       "options": [
        "cel",
        "program",
        "pomysł"
       ],
       "answer": "pomysł"
      },
      {
       "id": "10",
       "options": [
        "czytelników",
        "widzów",
        "obserwatorów"
       ],
       "answer": "widzów"
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
    17,
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
     "pdfPage": 17,
     "source": "Na podstawie: https://portal.abczdrowie.pl/medycyna-naturalna-wady-i-zalety",
     "passage": "Medycynę {{ex1}} można uważać za uzupełnienie {{ex2}} klasycznej. Obecnie stosujemy {{ex3}} coraz częściej. Muzykoterapia, medytacja, joga czy masaże często pomagają {{1}} w poprawie samopoczucia. Przy problemach ze {{2}} skuteczne są {{3}} herbatki – np. z melisy. Naturalne metody sprawdzają się też podczas {{4}}. Jeśli nasze dziecko boli gardło, to ratunkiem może być apiterapia – leczenie miodem. Ten sposób jest popularny zwłaszcza wśród {{5}} mam. Medycyna naturalna ma swoje zalety, ale też wady, o {{6}} powinniśmy wiedzieć. Niestety czasami takie {{7}} powoduje negatywne skutki. Z {{8}} powodu o stosowaniu metod naturalnych zawsze należy powiedzieć lekarzowi. Tylko jego wiedza i doświadczenie mogą {{9}} zagwarantować, że dobrze postępujemy. Konsultujmy się z lekarzami, aby unikać {{10}} i pobytów w szpitalu.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "naturalnej",
        "naturalną",
        "naturalna"
       ],
       "answer": "naturalną"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "medycynę",
        "medycynie",
        "medycyny"
       ],
       "answer": "medycyny"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "ją",
        "nią",
        "jej"
       ],
       "answer": "ją"
      },
      {
       "id": "1",
       "options": [
        "pacjentów",
        "pacjentami",
        "pacjentom"
       ],
       "answer": "pacjentom"
      },
      {
       "id": "2",
       "options": [
        "snem",
        "śnie",
        "snowi"
       ],
       "answer": "snem"
      },
      {
       "id": "3",
       "options": [
        "ziołowymi",
        "ziołowe",
        "ziołowych"
       ],
       "answer": "ziołowe"
      },
      {
       "id": "4",
       "options": [
        "przeziębieniu",
        "przeziębienia",
        "przeziębieniem"
       ],
       "answer": "przeziębienia"
      },
      {
       "id": "5",
       "options": [
        "młodych",
        "młodym",
        "młodymi"
       ],
       "answer": "młodych"
      },
      {
       "id": "6",
       "options": [
        "które",
        "której",
        "których"
       ],
       "answer": "których"
      },
      {
       "id": "7",
       "options": [
        "leczenia",
        "leczenie",
        "leczeniu"
       ],
       "answer": "leczenie"
      },
      {
       "id": "8",
       "options": [
        "tym",
        "temu",
        "tego"
       ],
       "answer": "tego"
      },
      {
       "id": "9",
       "options": [
        "nas",
        "nam",
        "nami"
       ],
       "answer": "nam"
      },
      {
       "id": "10",
       "options": [
        "komplikacje",
        "komplikację",
        "komplikacji"
       ],
       "answer": "komplikacji"
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
     "pdfPage": 17,
     "source": "Na podstawie: https://zywieniemaznaczenie.pl/nawyki-zywieniowe-jak-je-zmienic-aby-czuc-sie-dobrze-i-dostarczyc-niezbednych-skladnikow-w-trakcie-diety/",
     "wordBox": [
      "a",
      "żeby",
      "że",
      "więc",
      "ale",
      "lub",
      "bo"
     ],
     "distractors": [
      "lub"
     ],
     "passage": "Nawyki żywieniowe – co i jak najlepiej jeść, {{ex}} być zdrowym\n\nNaukowcy odkryli, {{1}} prawidłowe nawyki żywieniowe kształtują się od najmłodszych lat życia. To od matki i ojca dziecko uczy się tego, co jest zdrowe, {{2}} co nie. Rodzice powinni jednak nauczyć dziecko, że ważne jest nie tylko to, co je, {{3}} także jak je. Gdy człowiek je szybko, to zwykle zjada więcej niż potrzebuje, {{4}} tyje. Jeśli nie zje odpowiedniego śniadania, {{5}} „nie ma na to czasu”, to w ciągu dnia często podjada niezdrowe przekąski i szybko czuje się zmęczony.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "żeby"
      },
      {
       "id": "1",
       "answer": "że"
      },
      {
       "id": "2",
       "answer": "a"
      },
      {
       "id": "3",
       "answer": "ale"
      },
      {
       "id": "4",
       "answer": "więc"
      },
      {
       "id": "5",
       "answer": "bo"
      }
     ],
     "pdfNotes": [
      "The heading line of the task ('Nawyki żywieniowe – co i jak najlepiej jeść, żeby PRZYKŁAD być zdrowym') contains the example gap; it is kept as the first paragraph of the passage."
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
     "pdfPage": 18,
     "source": "Na podstawie: https://www.hillspet.pl/pet-care/new-pet-parent/choosing-between-dogs-and-cats",
     "passage": "Zastanawiasz się, jakie chciałbyś mieć zwierzę? Oto {{ex1}} informacje, które pomogą ci {{ex2}} wybrać – kot czy pies? Psy dużo {{1}} niż koty akceptują podróże czy przeprowadzki. Koty są natomiast {{2}} od psów. Jeśli chodzi o sprawy finansowe, to produkty dla zwierząt z każdym rokiem są coraz {{3}}. Okazuje się jednak, że utrzymanie kotów jest trochę {{4}}. Jeżeli interesuje cię temat wieku zwierząt domowych, musisz wiedzieć, że ze wszystkich {{5}} żyją papugi, żółwie i węże. Bez względu na to, jakie zwierzę wybierzesz do adopcji, możesz być pewny, że zyskasz w ten sposób wspaniałego przyjaciela.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "najważniejsze",
        "najważniejszych",
        "najważniejszymi"
       ],
       "answer": "najważniejsze"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "najmądrzejszy",
        "mądrze",
        "mądrzejsze"
       ],
       "answer": "mądrze"
      },
      {
       "id": "1",
       "options": [
        "najłatwiej",
        "łatwiej",
        "łatwo"
       ],
       "answer": "łatwiej"
      },
      {
       "id": "2",
       "options": [
        "niezależnej",
        "bardziej niezależne",
        "niezależnie"
       ],
       "answer": "bardziej niezależne"
      },
      {
       "id": "3",
       "options": [
        "droższe",
        "drożej",
        "najdroższe"
       ],
       "answer": "droższe"
      },
      {
       "id": "4",
       "options": [
        "mniejsze kosztowne",
        "kosztowne",
        "mniej kosztowne"
       ],
       "answer": "mniej kosztowne"
      },
      {
       "id": "5",
       "options": [
        "najdłuższe",
        "dłużej",
        "najdłużej"
       ],
       "answer": "najdłużej"
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
     "pdfPage": 18,
     "pdfPages": [
      18,
      19
     ],
     "source": "Na podstawie: https://portalyogi.pl/blog/25-pytan-aby-podsumowac-rok/",
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "Niektórzy ludzie bardzo lubią postanowienia noworoczne i podsumowanie roku. Dzięki nim {{ex1}}, jak wiele {{ex2}} w minionych miesiącach. Jednak nie zawsze trzeba z tym czekać aż do sylwestra. Już dziś {{1}} podsumować pierwszą część roku.\n\nJanku, wystarczy, że odpowiesz sobie na kilka pytań. Na przykład, jakie decyzje {{2}} w zeszłym miesiącu i dlaczego? Czy obecnie {{3}} czasami nad własnym rozwojem?\n\nWspółcześni mistrzowie jogi {{4}}, że warto zadać sobie pytanie, czego {{5}} w przeszłości. Nie trzeba się przy tym porównywać z innymi ludźmi. To nie jest ważne, jakie doświadczenia {{6}} ostatnio inne osoby. Bardziej istotne jest to, jakie projekty ty sam niedawno {{7}}. Kolejne pytania, które warto sobie zadać brzmią: „Jak dzisiaj {{8}} o swoje ciało i umysł?” oraz „Czy {{9}} czas spędzany w internecie?”. Po takiej analizie kolejne miesiące z pewnością będą lepsze od poprzednich. A przecież zazwyczaj każdy {{10}} widzieć w swoim życiu pozytywne zmiany.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "widzieć",
       "answer": "widzą"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "osiągnąć",
       "answer": "osiągnęli"
      },
      {
       "id": "1",
       "given": "my – móc",
       "answer": "możemy",
       "accept": []
      },
      {
       "id": "2",
       "given": "ty – podjąć",
       "answer": "podjąłeś",
       "accept": []
      },
      {
       "id": "3",
       "given": "ty – zastanawiać się",
       "answer": "zastanawiasz się",
       "accept": []
      },
      {
       "id": "4",
       "given": "uważać",
       "answer": "uważają",
       "accept": []
      },
      {
       "id": "5",
       "given": "my – nauczyć się",
       "answer": "nauczyliśmy się",
       "accept": []
      },
      {
       "id": "6",
       "given": "zdobyć",
       "answer": "zdobyły",
       "accept": []
      },
      {
       "id": "7",
       "given": "zrealizować",
       "answer": "zrealizowałeś",
       "accept": []
      },
      {
       "id": "8",
       "given": "ja – dbać",
       "answer": "dbam",
       "accept": []
      },
      {
       "id": "9",
       "given": "ja – kontrolować",
       "answer": "kontroluję",
       "accept": []
      },
      {
       "id": "10",
       "given": "chcieć",
       "answer": "chce",
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
     "pdfPage": 19,
     "match": {
      "stripChars": "…?.!",
      "ignoreCase": true,
      "collapseSpace": true
     },
     "example": {
      "id": "g5.ex",
      "sentence": "Prawniczka długo czekała na list z urzędu.",
      "underlined": "na list z urzędu",
      "stem": "…………… długo czekała prawniczka?",
      "shortAnswer": "Na list z urzędu.",
      "answer": "Na co",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Wczoraj Anna była w teatrze z mężem i z dziećmi.",
       "underlined": "z mężem i z dziećmi",
       "stem": "…………… Anna była wczoraj w teatrze?",
       "shortAnswer": "Z mężem i z dziećmi.",
       "answer": "Z kim",
       "accept": []
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Nauczyciel zapytał uczniów o ich plany wakacyjne.",
       "underlined": "o ich plany wakacyjne",
       "stem": "…………… nauczyciel zapytał uczniów?",
       "shortAnswer": "O ich plany wakacyjne.",
       "answer": "O co",
       "accept": []
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Uczniowie byli w kinie na filmie przyrodniczym.",
       "underlined": "przyrodniczym",
       "stem": "…………… filmie uczniowie byli w kinie?",
       "shortAnswer": "Na przyrodniczym.",
       "answer": "Na jakim",
       "accept": []
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Panna młoda pięknie wyglądała w białej sukni.",
       "underlined": "pięknie",
       "stem": "…………… panna młoda wyglądała w białej sukni?",
       "shortAnswer": "Pięknie.",
       "answer": "Jak",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Najważniejsze zdanie na kartce Paweł podkreślił długopisem.",
       "underlined": "długopisem",
       "stem": "…………… Paweł podkreślił najważniejsze zdanie na kartce?",
       "shortAnswer": "Długopisem.",
       "answer": "Czym",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Official key prints the question word with decoration (Z kim...?, Na jakim…?); stored without it, match.stripChars ignores the decoration."
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
     "pdfPage": 20,
     "note": "Należy uznać wszystkie inne poprawne rozwiązania zgodne z poleceniem.",
     "example": {
      "id": "g6.ex",
      "source": "Na jutro muszę kupić pieczywo bezglutenowe dla Marka.",
      "hint": "potrzebuję",
      "answer": "Na jutro potrzebuję pieczywa bezglutenowego dla Marka.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "Mój brat lubi zupę pomidorową.",
       "hint": "smakuje",
       "answer": "Mojemu bratu smakuje zupa pomidorowa.",
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
       "source": "Wujek mojej żony jest bardzo dobrym pianistą.",
       "hint": "gra na",
       "answer": "Wujek mojej żony bardzo dobrze gra na pianinie.",
       "rubric": "2 transformacje (2 x 0,5)",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 1
        }
       ],
       "accept": [
        "Wujek mojej żony bardzo dobrze gra na fortepianie."
       ]
      },
      {
       "id": "g6.3",
       "number": 3,
       "source": "Naukowców zaciekawiło nagłe ocieplenie klimatu.",
       "hint": "zainteresowali się",
       "answer": "Naukowcy zainteresowali się nagłym ociepleniem klimatu.",
       "rubric": "1 transformacja „naukowcy” 0,5 p. + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "transformacja „naukowcy”",
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
       "source": "Lampę postaw obok tamtego niskiego stolika nocnego.",
       "hint": "przy",
       "answer": "Lampę postaw przy tamtym niskim stoliku nocnym.",
       "rubric": "4 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "4 transformacje",
         "points": 1
        }
       ]
      },
      {
       "id": "g6.5",
       "number": 5,
       "source": "Dorotka cieszy się, że dostała tort urodzinowy.",
       "hint": "cieszy się z",
       "answer": "Dorotka cieszy się z tortu urodzinowego.",
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
      "Key item 2 prints 'pianinie/fortepianie' (alternatives; the second is stored in accept).",
      "Key item 4 rubric prints '4 transformacje (2 x 0,25)' (sic; 4 x 0,25 = 1 p. is meant); stored verbatim, parts sum to 1 p."
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
     "pdfPage": 21,
     "passage": "Joanna poprosiła rodziców o radę: Idę jutro na moją pierwszą rozmowę o pracę. {{ex1}} się jak najlepiej przygotować. {{ex2}} mi, proszę.\n\nOjciec: My? Jak {{1}} ci poradzić?\n\nJoanna: {{2}}, o czym powinnam przede wszystkim pamiętać. Co waszym zdaniem jest najważniejsze?\n\nOjciec: {{3}} punktualnie, odpowiednio ubrana…\n\nMatka: …i {{4}} telefon komórkowy.\n\nJoanna: Oj, nie {{5}} sobie ze mnie! To każdy wie. Jeśli nie możecie mi poradzić nic innego, to może lepiej {{6}} mi o waszych pierwszych rozmowach o pracę.\n\nOjciec: Nic by ci to nie {{7}}. To były zupełnie inne czasy. Może niech Bartek ci {{8}} swoje doświadczenia. On przechodził przez to niedawno.\n\nJoanna: To prawda, ale przecież wiecie, że mu się nie udało. Gdyby {{9}} tę pracę, na pewno {{10}} do niego i poprosiła o pomoc.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "Chciałabym",
        "chciałbym",
        "chcielibyście"
       ],
       "answer": "Chciałabym"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "Poradź",
        "Poradźcie",
        "Radzilibyście"
       ],
       "answer": "Poradźcie"
      },
      {
       "id": "1",
       "options": [
        "miałby",
        "miejmy",
        "mielibyśmy"
       ],
       "answer": "mielibyśmy"
      },
      {
       "id": "2",
       "options": [
        "Powiedzieliby",
        "Powiedzcie",
        "Mówmy"
       ],
       "answer": "Powiedzcie"
      },
      {
       "id": "3",
       "options": [
        "Przyjdź",
        "Przychodź",
        "Przyszłabyś"
       ],
       "answer": "Przyjdź"
      },
      {
       "id": "4",
       "options": [
        "wyłączaj",
        "włączyliby",
        "wyłącz"
       ],
       "answer": "wyłącz"
      },
      {
       "id": "5",
       "options": [
        "żartowałbyś",
        "żartujcie",
        "żartujmy"
       ],
       "answer": "żartujcie"
      },
      {
       "id": "6",
       "options": [
        "opowiedzielibyście",
        "opowiadalibyście",
        "opowiedz"
       ],
       "answer": "opowiedzielibyście"
      },
      {
       "id": "7",
       "options": [
        "pomagaj",
        "pomagałoby",
        "pomogło"
       ],
       "answer": "pomogło"
      },
      {
       "id": "8",
       "options": [
        "przedstawi",
        "przedstaw",
        "przedstawiałby"
       ],
       "answer": "przedstawi"
      },
      {
       "id": "9",
       "options": [
        "dostawał",
        "dostał",
        "dostałby"
       ],
       "answer": "dostał"
      },
      {
       "id": "10",
       "options": [
        "zadzwoń",
        "dzwoniłabym",
        "zadzwoniłabym"
       ],
       "answer": "zadzwoniłabym"
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
     "source": "Na podstawie: https://samorzad.gov.pl/web/powiat-pruszkowski/muzeum-motoryzacji-i-techniki-w-otrebusach2",
     "wordBox": [
      "przy",
      "do",
      "dla",
      "w",
      "przez",
      "na",
      "z"
     ],
     "distractors": [
      "przy"
     ],
     "passage": "Muzeum Motoryzacji i Techniki to miejsce ciekawe {{ex}} każdego fana motoryzacji. Największe w Polsce prywatne muzeum posiada {{1}} swojej kolekcji ponad trzysta zabytkowych pojazdów. Dodatkowo muzeum oferuje prelekcje {{2}} temat historii motoryzacji w Polsce, przejażdżki zabytkowymi autobusami, a dla dzieci możliwość wchodzenia {{3}} wybranych samochodów. Bezpłatnie kolekcję można oglądać {{4}} najbliższe dwa miesiące. Znajduje się tam również restauracja retro oraz mały sklep {{5}} pamiątkami.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "dla"
      },
      {
       "id": "1",
       "answer": "w"
      },
      {
       "id": "2",
       "answer": "na"
      },
      {
       "id": "3",
       "answer": "do"
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
         "genre": "zaproszenie",
         "wordTarget": 50,
         "prompt": "Pracuje Pani/Pan w domu kultury. Organizuje Pani/Pan spotkanie ze znanym podróżnikiem. Proszę napisać zaproszenie, które opublikuje Pani/Pan na stronie internetowej instytucji."
        },
        {
         "id": "b",
         "genre": "e-mail",
         "wordTarget": 150,
         "prompt": "Nie jest Pani zadowolona / Nie jest Pan zadowolony z kursu językowego, na który Pani/Pan chodzi. Proszę o tym napisać w e-mailu do koleżanki/kolegi z Polski."
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
         "prompt": "Pracuje Pani/Pan w małej polskiej firmie. Jest Pani/Pan na urlopie. Proszę napisać pozdrowienia do koleżanki/kolegi z pracy."
        },
        {
         "id": "b",
         "genre": "charakterystyka",
         "wordTarget": 175,
         "prompt": "Pani/Pana szkoła języka polskiego ogłosiła konkurs na najciekawszy tekst pt. „Lubię ją/go. Poznaliśmy się w Polsce”. Proszę napisać charakterystykę tej osoby.",
         "title": "Lubię ją/go. Poznaliśmy się w Polsce"
        }
       ]
      },
      {
       "id": "III",
       "parts": [
        {
         "id": "a",
         "genre": "ogłoszenie",
         "wordTarget": 50,
         "prompt": "Szuka Pani/Pan współlokatora do trzypokojowego mieszkania. Proszę napisać ogłoszenie, które opublikuje Pani/Pan w mediach społecznościowych (proszę napisać, co Pani/Pan akceptuje, a na co się nie zgadza w swoim mieszkaniu)."
        },
        {
         "id": "b",
         "genre": "relacja",
         "wordTarget": 150,
         "prompt": "Współpracuje Pani/Pan ze znanym czasopismem „Muzyka”. Proszę napisać relację z koncertu, na którym ostatnio Pani była / Pan był."
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
