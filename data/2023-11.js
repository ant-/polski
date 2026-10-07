window.EXAMS = window.EXAMS || {};
window.EXAMS["2023-11"] = {
 "schemaVersion": 1,
 "id": "2023-11",
 "meta": {
  "level": "B1",
  "labelPdf": "listopad 2023",
  "examDates": "18-19.11.2023",
  "sources": {
   "test": "sources/2023-11/test.pdf",
   "transcript": "sources/2023-11/transcript.pdf",
   "audio": "sources/2023-11/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear; listening II (6 pauses) and V (3 pauses = 4 persons) item chunks match the expected counts, V has long 8-12 s pauses.",
   "Listening V has 4 persons and 5 opinions (A-E), key rows without asterisk (B: 1, 4) -> unordered sets.",
   "Reading III prints the source URL without the 'Na podstawie:' prefix; reading IV: option letters sit in the middle column of the table."
  ]
 },
 "audio": {
  "src": "sources/2023-11/audio.mp3",
  "duration": 1640.2,
  "intro": [
   0,
   47.3
  ],
  "readingTime": [
   47.3,
   107.8
  ],
  "tail": [
   1576.7,
   1640.2
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
        "start": 134.2,
        "end": 307.2
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
        "start": 149.9,
        "end": 155.9
       },
       {
        "ref": "l1.2",
        "start": 161.4,
        "end": 167.3
       },
       {
        "ref": "l1.3",
        "start": 172.9,
        "end": 178.3
       },
       {
        "ref": "l1.4",
        "start": 183.7,
        "end": 188.7
       },
       {
        "ref": "l1.5",
        "start": 194.2,
        "end": 201.8
       },
       {
        "ref": "l1.6",
        "start": 207.4,
        "end": 213.0
       },
       {
        "ref": "l1.7",
        "start": 218.4,
        "end": 224.5
       },
       {
        "ref": "l1.8",
        "start": 230.0,
        "end": 236.9
       },
       {
        "ref": "l1.9",
        "start": 242.4,
        "end": 247.9
       },
       {
        "ref": "l1.10",
        "start": 253.4,
        "end": 259.0
       },
       {
        "ref": "l1.11",
        "start": 264.6,
        "end": 272.1
       },
       {
        "ref": "l1.12",
        "start": 277.7,
        "end": 283.9
       },
       {
        "ref": "l1.13",
        "start": 289.4,
        "end": 295.5
       },
       {
        "ref": "l1.14",
        "start": 301.0,
        "end": 307.2
       }
      ],
      "source": "auto-silencedetect",
      "verified": false
     },
     "example": {
      "id": "l1.ex",
      "prompt": "Ta wypowiedź to",
      "options": [
       {
        "id": "a",
        "text": "polecenie."
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
      "shown": true,
      "transcript": {
       "sp": "K",
       "t": "Proszę pokazać dokument tożsamości."
      }
     },
     "items": [
      {
       "id": "l1.1",
       "number": 1,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "rada."
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
        "t": "Pyszna zupa, dawno nie jadłem lepszej."
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "u ortopedy."
        },
        {
         "id": "b",
         "text": "u dentysty."
        },
        {
         "id": "c",
         "text": "u internisty."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Panie doktorze, mam zawroty głowy i dreszcze."
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź oznacza, że jutro",
       "options": [
        {
         "id": "a",
         "text": "będzie gorąco."
        },
        {
         "id": "b",
         "text": "będzie chłodno."
        },
        {
         "id": "c",
         "text": "pogoda będzie taka sama."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Jutro zmiana pogody, wrócą upały."
       }
      },
      {
       "id": "l1.4",
       "number": 4,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "zadowolenie."
        },
        {
         "id": "b",
         "text": "złość."
        },
        {
         "id": "c",
         "text": "smutek."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Bardzo mi przykro, że tak się stało."
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź oznacza, że biuro jest otwarte",
       "options": [
        {
         "id": "a",
         "text": "w wybrane dni."
        },
        {
         "id": "b",
         "text": "po południu."
        },
        {
         "id": "c",
         "text": "tylko rano."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "W wakacje biuro jest czynne codziennie od 13.00 do 16.00."
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź jest typowa w sklepie",
       "options": [
        {
         "id": "a",
         "text": "meblowym."
        },
        {
         "id": "b",
         "text": "ogrodniczym."
        },
        {
         "id": "c",
         "text": "obuwniczym."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Czy jest większy rozmiar tych sandałów?"
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź jest typowa dla",
       "options": [
        {
         "id": "a",
         "text": "dyrektora."
        },
        {
         "id": "b",
         "text": "pracownika."
        },
        {
         "id": "c",
         "text": "urzędnika."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Gratuluję, dostała pani awans i podwyżkę."
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź oznacza, że",
       "options": [
        {
         "id": "a",
         "text": "cena roweru jest wysoka."
        },
        {
         "id": "b",
         "text": "o cenie można rozmawiać."
        },
        {
         "id": "c",
         "text": "rower wymaga naprawy."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Rower jest w dobrym stanie, cena do negocjacji."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w serwisie."
        },
        {
         "id": "b",
         "text": "w sklepie."
        },
        {
         "id": "c",
         "text": "na policji."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Chciałbym zgłosić kradzież telefonu."
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź dotyczy",
       "options": [
        {
         "id": "a",
         "text": "rozmiaru."
        },
        {
         "id": "b",
         "text": "wagi."
        },
        {
         "id": "c",
         "text": "wzrostu."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Mój syn jest o głowę wyższy niż ja."
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "prośba o radę."
        },
        {
         "id": "b",
         "text": "pozytywna opinia."
        },
        {
         "id": "c",
         "text": "negatywna opinia."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Niesamowity film! Musisz go obejrzeć."
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź to fragment",
       "options": [
        {
         "id": "a",
         "text": "audycji radiowej."
        },
        {
         "id": "b",
         "text": "prognozy pogody."
        },
        {
         "id": "c",
         "text": "porady lekarskiej."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "A teraz czas na poranny przegląd prasy."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w kiosku."
        },
        {
         "id": "b",
         "text": "w aptece."
        },
        {
         "id": "c",
         "text": "u lekarza."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Poproszę plaster i syrop na kaszel."
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź dotyczy",
       "options": [
        {
         "id": "a",
         "text": "kolorowego papieru."
        },
        {
         "id": "b",
         "text": "zakupów w sklepie."
        },
        {
         "id": "c",
         "text": "segregacji śmieci."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Papier wrzuć do niebieskiego pojemnika."
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
     "pdfPage": 4,
     "audio": {
      "announce": [
       317.6,
       333.6
      ],
      "plays": [
       {
        "start": 344.0,
        "end": 464.7
       },
       {
        "start": 510.5,
        "end": 631.3
       }
      ],
      "pauseBetweenPlays": 45.8,
      "items": [
       {
        "ref": "l2.ex",
        "start": 344.0,
        "end": 359.7
       },
       {
        "ref": "l2.1",
        "start": 366.7,
        "end": 377.7
       },
       {
        "ref": "l2.2",
        "start": 384.4,
        "end": 397.5
       },
       {
        "ref": "l2.3",
        "start": 404.1,
        "end": 414.8
       },
       {
        "ref": "l2.4",
        "start": 421.4,
        "end": 430.5
       },
       {
        "ref": "l2.5",
        "start": 437.1,
        "end": 448.3
       },
       {
        "ref": "l2.6",
        "start": 454.9,
        "end": 464.7
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
        "text": "wizyta będzie opóźniona."
       },
       {
        "id": "b",
        "text": "pacjent wszedł do gabinetu doktora."
       },
       {
        "id": "c",
        "text": "nie będzie wizyty."
       }
      ],
      "answer": "c",
      "shown": true,
      "transcript": {
       "lines": [
        {
         "sp": "M",
         "t": "W którym gabinecie przyjmuje doktor Malinowski?"
        },
        {
         "sp": "K",
         "t": "Przykro mi, ale doktor już skończył pracę."
        }
       ]
      }
     },
     "items": [
      {
       "id": "l2.1",
       "number": 1,
       "prompt": "Z tego dialogu wynika, że Basia",
       "options": [
        {
         "id": "a",
         "text": "już miała urodziny."
        },
        {
         "id": "b",
         "text": "nie świętuje swoich urodzin."
        },
        {
         "id": "c",
         "text": "zapomniała o urodzinach."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Basiu, wszystkiego najlepszego z okazji urodzin."
         },
         {
          "sp": "K",
          "t": "Moje urodziny były w zeszłym tygodniu."
         }
        ]
       }
      },
      {
       "id": "l2.2",
       "number": 2,
       "prompt": "Z tego dialogu dowiadujemy się, że dzieci",
       "options": [
        {
         "id": "a",
         "text": "nie lubią grać na trawie."
        },
        {
         "id": "b",
         "text": "nie słuchały próśb mamy."
        },
        {
         "id": "c",
         "text": "wybiły okno."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Prosiłam, żebyście nie grali pod oknami. Połamaliście kwiaty."
         },
         {
          "sp": "M",
          "t": "Ale tutaj jest najlepsza trawa do gry, a tam kałuże i błoto."
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
         "text": "cały rok można oglądać wystawę za darmo."
        },
        {
         "id": "b",
         "text": "latem wystawa jest nieczynna."
        },
        {
         "id": "c",
         "text": "oglądanie wystawy latem nic nie kosztuje."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Ile kosztuje bilet na wystawę kwiatów egzotycznych?"
         },
         {
          "sp": "K",
          "t": "W sezonie letnim wstęp na tę wystawę jest bezpłatny."
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
         "text": "kobieta jest bardzo zadowolona z projektu."
        },
        {
         "id": "b",
         "text": "to nie jest projekt, jaki chciała klientka."
        },
        {
         "id": "c",
         "text": "projekt garderoby jest bardzo ładny."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Co pani myśli o tym projekcie mieszkania?"
         },
         {
          "sp": "K",
          "t": "Nie do końca podoba mi się ta garderoba."
         }
        ]
       }
      },
      {
       "id": "l2.5",
       "number": 5,
       "prompt": "Z tego dialogu dowiadujemy się, że kobieta",
       "options": [
        {
         "id": "a",
         "text": "zapomniała o ślubie."
        },
        {
         "id": "b",
         "text": "jeszcze nie wybrała prezentu."
        },
        {
         "id": "c",
         "text": "prosi o odbiór paczki."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Aniu, pamiętasz o ślubie Marka?"
         },
         {
          "sp": "K",
          "t": "Tak, już zamówiłam prezent. Jutro będzie kurier, możesz odebrać?"
         }
        ]
       }
      },
      {
       "id": "l2.6",
       "number": 6,
       "prompt": "Z tego dialogu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "mężczyzna obejrzał finał."
        },
        {
         "id": "b",
         "text": "ulubiony zespół zajął pierwsze miejsce."
        },
        {
         "id": "c",
         "text": "mężczyzna słuchał meczu w radiu."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Oglądałeś finał piłki nożnej?"
         },
         {
          "sp": "M",
          "t": "Nie, ale słyszałem, że nasza drużyna wygrała."
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
     "prompt": "Proszę wysłuchać wywiadu na temat e-sportu i zaznaczyć właściwe odpowiedzi.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: https://geex.x-kom.pl/lifestyle/histora-e-sportu-czym-jest-jak-powstal-dlaczego-jest-popularny/",
     "audio": {
      "announce": [
       641.7,
       657.4
      ],
      "plays": [
       {
        "start": 667.6,
        "end": 781.8
       },
       {
        "start": 827.6,
        "end": 941.8
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
        "t": "Dziś rozmawiamy z profesjonalnym zawodnikiem e-sportowym. Kamilu, powiedz nam, czym charakteryzuje się e-sport."
       },
       {
        "sp": "Kamil Kowalski",
        "t": "To forma sportu, w której zawodnicy rywalizują w wirtualnym świecie – w grach komputerowych i grach wideo. Gracze kontrolują swoje postacie za pomocą klawiatury i myszy lub innych urządzeń do gier."
       },
       {
        "sp": "Dziennikarka",
        "t": "Czy to nowa forma rywalizacji?"
       },
       {
        "sp": "Kamil Kowalski",
        "t": "E-sport kojarzy nam się przede wszystkim z dwudziestym pierwszym wiekiem. Jednak początki sięgają lat 70. dwudziestego wieku, kiedy to na Uniwersytecie Stanforda w USA zorganizowano pierwsze zawody w grze wideo. Brali w nich udział studenci oraz pracownicy naukowi."
       },
       {
        "sp": "Dziennikarka",
        "t": "Jak dalej rozwijała się ta dyscyplina?"
       },
       {
        "sp": "Kamil Kowalski",
        "t": "Kolejne lata przyniosły e-sportowi niezwykłą popularność. Kiedy pojawił się internet, była możliwość rywalizacji z graczami na całym świecie. Obecnie firmy gamingowe organizują coraz więcej turniejów z coraz cenniejszymi nagrodami. Turnieje na skalę światową odbywają się dwa razy do roku i przyciągają miliony fanów nie tylko do hal sportowych, ale również przed monitory w domu."
       },
       {
        "sp": "Dziennikarka",
        "t": "Jakie umiejętności są potrzebne w e-sporcie?"
       },
       {
        "sp": "Kamil Kowalski",
        "t": "Gracze muszą bardzo dobrze znać zasady gry, strategię, taktykę i zdolności swoich postaci. W przypadku większości gier kluczem do sukcesu jest umiejętność szybkiego myślenia, dokładnej analizy sytuacji i podejmowania odpowiednich decyzji w krótkim czasie."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "prompt": "E-sport to:",
      "options": [
       {
        "id": "a",
        "text": "oglądanie w telewizji zawodów sportowych."
       },
       {
        "id": "b",
        "text": "zawody w grach komputerowych."
       },
       {
        "id": "c",
        "text": "montowanie sprzętu komputerowego na czas."
       }
      ],
      "answer": "b",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "prompt": "Zawody e-sportowe miały początek",
       "options": [
        {
         "id": "a",
         "text": "w dwudziestym pierwszym wieku."
        },
        {
         "id": "b",
         "text": "ponad siedemdziesiąt lat temu."
        },
        {
         "id": "c",
         "text": "w latach siedemdziesiątych."
        }
       ],
       "answer": "c"
      },
      {
       "id": "l3.2",
       "number": 2,
       "prompt": "W pierwszych zawodach gier wideo uczestniczyli",
       "options": [
        {
         "id": "a",
         "text": "profesjonalni gracze."
        },
        {
         "id": "b",
         "text": "ludzie związani z uniwersytetem."
        },
        {
         "id": "c",
         "text": "studenci informatyki."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.3",
       "number": 3,
       "prompt": "Międzynarodowe zawody są organizowane",
       "options": [
        {
         "id": "a",
         "text": "dwa razy w roku."
        },
        {
         "id": "b",
         "text": "co roku."
        },
        {
         "id": "c",
         "text": "co dwa lata."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l3.4",
       "number": 4,
       "prompt": "Turnieje e-sportowe można oglądać",
       "options": [
        {
         "id": "a",
         "text": "jedynie online."
        },
        {
         "id": "b",
         "text": "na żywo oraz online."
        },
        {
         "id": "c",
         "text": "na specjalnych ekranach."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.5",
       "number": 5,
       "prompt": "Najważniejsze umiejętności w e-sporcie to",
       "options": [
        {
         "id": "a",
         "text": "lata praktyki w grach komputerowych."
        },
        {
         "id": "b",
         "text": "znajomość wszystkich gier na rynku."
        },
        {
         "id": "c",
         "text": "szybkość i myślenie analityczne."
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
     "prompt": "Proszę posłuchać informacji udzielanych przez przewodnika po Gdańskim Teatrze Szekspirowskim i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "6 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 6,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://audycjekulturalne.pl/audiooprowadzanie-po-teatrze-szekspirowskim/",
     "audio": {
      "announce": [
       952.3,
       968.2
      ],
      "plays": [
       {
        "start": 978.4,
        "end": 1088.9
       },
       {
        "start": 1134.8,
        "end": 1245.3
       }
      ],
      "pauseBetweenPlays": 45.9,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "text": "Żeby dojść do Gdańskiego Teatru Szekspirowskiego, trzeba iść w kierunku ulicy Długiej, zatrzymać się przed Złotą Bramą i skręcić w prawo. Kilkaset metrów dalej zobaczymy ciemny budynek o długim kształcie i nietypowym kolorze węgla. Niełatwo jest znaleźć wejście, ponieważ architekt celowo zaprojektował wokół teatru mur, w którym znajdziemy kilka mało widocznych przerw – jedna z nich to główne wejście. W środku czeka nas zaskoczenie, ponieważ wnętrza teatru są jasne, pełne światła, inaczej niż jego mury. Zapytają państwo, dlaczego patronem teatru jest William Szekspir. Niestety Szekspir nigdy nie był w Gdańsku, natomiast przyjechali tu jego kompani teatralni, aktorzy, z którymi grał na scenie i dla których później pisał swoje sztuki. Współczesny teatr jest rekonstrukcją dawnego teatru elżbietańskiego, którego budowę zamówiły władze miasta w 1635 roku. Początkowo aktorzy grali w języku angielskim, ale okazało się, że nie są w stanie nawiązać relacji z publicznością, która mówiła po niemiecku. Największa atrakcja teatru to otwierany dach. Poza tym na trzecim poziomie jest wyjście na zewnątrz, które prowadzi na ścieżkę spacerową po murze. Dopiero stąd widać, że mur stanowi osobną konstrukcję. Nie jest ścianą budynku. Konstrukcja ta chroni skarb, czyli delikatne wnętrze zrekonstruowanego teatru."
     },
     "example": {
      "id": "l4.ex",
      "statement": "W drodze do teatru powinniśmy przejść przez Złotą Bramę.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "statement": "Główne drzwi do teatru są duże i widać je z daleka.",
       "answer": "NIE"
      },
      {
       "id": "l4.2",
       "number": 2,
       "statement": "Kolory wnętrza budynku kontrastują z zewnętrznymi.",
       "answer": "TAK"
      },
      {
       "id": "l4.3",
       "number": 3,
       "statement": "Szekspir w Gdańsku napisał jedną ze swoich sztuk.",
       "answer": "NIE"
      },
      {
       "id": "l4.4",
       "number": 4,
       "statement": "Budowę dawnego teatru sfinansował prywatny inwestor.",
       "answer": "NIE"
      },
      {
       "id": "l4.5",
       "number": 5,
       "statement": "Pierwsze spektakle odbywały się w języku angielskim.",
       "answer": "TAK"
      },
      {
       "id": "l4.6",
       "number": 6,
       "statement": "Wokół teatru na wysokości 3. piętra jest trasa spacerowa.",
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
     "prompt": "Proszę wysłuchać tekstu na temat organizacji czasu w ciągu dnia i dopasować osoby (1-4) do ich opinii (A-E). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
     "pointsFormula": "6 x 1 p.",
     "pointsPerSlot": 1,
     "maxPoints": 6,
     "plays": 2,
     "pdfPage": 7,
     "source": "Na podstawie: https://www.livecareer.pl/porady-zawodowe/jak-znalezc-prace/",
     "audio": {
      "announce": [
       1255.8,
       1271.8
      ],
      "plays": [
       {
        "start": 1282.0,
        "end": 1397.7
       },
       {
        "start": 1443.8,
        "end": 1559.5
       }
      ],
      "pauseBetweenPlays": 46.1,
      "items": [
       {
        "ref": "p1",
        "start": 1282.0,
        "end": 1309.6
       },
       {
        "ref": "p2",
        "start": 1321.6,
        "end": 1338.4
       },
       {
        "ref": "p3",
        "start": 1347.1,
        "end": 1367.8
       },
       {
        "ref": "p4",
        "start": 1376.1,
        "end": 1397.7
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
      "statement": "unika wielozadaniowości.",
      "answer": [
       "4"
      ],
      "shown": true
     },
     "statements": [
      {
       "id": "l5.A",
       "letter": "A",
       "text": "wolny czas w ciągu dnia poświęca na odpoczynek lub sport.",
       "slots": 1,
       "answer": [
        "2"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.B",
       "letter": "B",
       "text": "tworzy plan zadań na każdy dzień.",
       "slots": 2,
       "answer": [
        "1",
        "4"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.C",
       "letter": "C",
       "text": "zaczyna wcześnie swój dzień.",
       "slots": 1,
       "answer": [
        "3"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.D",
       "letter": "D",
       "text": "robi regularne przerwy.",
       "slots": 1,
       "answer": [
        "2"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.E",
       "letter": "E",
       "text": "dzięki technologii lepiej pamięta o swoich zadaniach.",
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
        "t": "Aby lepiej organizować swój czas, zwykle mam przy sobie planer lub notatnik, tworzę listę wszystkich rzeczy do zrobienia i ustalam, o której godzinie to robię. Czasem korzystam z różnych aplikacji lub z funkcji notatek w telefonie i ustawiam alarm, aby o niczym nie zapomnieć."
       },
       {
        "sp": "Osoba 2 (M)",
        "t": "Robię pauzę między obowiązkami w pracy co dwie godziny. Zwykle planuję ten czas w ciągu dnia. To pomaga mi być bardziej zorganizowanym i zrelaksowanym. Kiedy mam więcej czasu, przeznaczam go na krótką drzemkę lub spacer."
       },
       {
        "sp": "Osoba 3 (K)",
        "t": "Budzę się rano i zaczynam swój dzień około 5:30. Mam wtedy więcej czasu, żeby pomyśleć o wielu rzeczach i przygotować się do pracy. Kilka dodatkowych godzin pozwala mi bez stresu wykonać zaplanowane zadania lub zjeść spokojnie śniadanie."
       },
       {
        "sp": "Osoba 4 (M)",
        "t": "Codziennie przygotowuję listę terminów i rzeczy do zrobienia, dzięki temu jakość mojej pracy jest bardzo dobra. Najpierw realizuję jedno zadanie z listy, potem kolejne, ale nigdy nie robię wielu rzeczy naraz. Czasem jestem zaskoczony, jak dużo rzeczy udało mi się zrobić."
       }
      ]
     },
     "pdfNotes": [
      "Key rows with two persons (B: 1, 4) carry no asterisk in this session; stored as unordered sets like every multi-slot row."
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
       "text": "Kredyt studencki to pożyczka, którą dają wybrane banki. Dzięki niej absolwenci szkół średnich mogą kontynuować naukę na uczelni wyższej. Banki oferują niskie odsetki, a spłatę kredytu można zacząć dopiero dwa lata po skończeniu studiów.",
       "source": "Na podstawie: https://gazetawroclawska.pl/kredyt-studencki-2023-rozwiazaniem-na-sfinansowanie-wymarzonych-studiow-zobacz-kto-moze-go-otrzymac-i-jakie-sa-warunki-splaty/ar/c5-17610013"
      },
      "prompt": "Z tego tekstu wynika, że",
      "options": [
       {
        "id": "a",
        "text": "wszystkie banki proponują klientom kredyt studencki."
       },
       {
        "id": "b",
        "text": "dzięki pożyczce młodzi ludzie mogą zacząć naukę na uniwersytecie."
       },
       {
        "id": "c",
        "text": "pożyczone pieniądze trzeba zwrócić od razu po studiach."
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
        "text": "Na zagraniczne wakacje planuje wyjechać tego lata tylko 18 proc. Polaków. W tym sezonie wypoczynek z biurami podróży kosztuje średnio 3,5 tysiąca złotych za osobę. Rok temu podobne oferty można było kupić ponad 500 złotych taniej, a biura podróży dodatkowo oferowały wiele promocji.",
        "source": "Na podstawie: https://businessinsider.com.pl/poradnik-finansowy/wakacje-za-25-tys-zl-sprawdz-dokad-mozesz-za-to-poleciec/jn109cj"
       },
       "prompt": "Z tego tekstu wynika, że w tym roku",
       "options": [
        {
         "id": "a",
         "text": "wakacje poza Polską nie są popularne."
        },
        {
         "id": "b",
         "text": "ponad połowa Polaków skorzysta z ofert biura podróży."
        },
        {
         "id": "c",
         "text": "biura podróży obniżyły ceny wyjazdów za granicę."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "W Gdyni mieszkańcy i turyści cieszą się nie tylko licznymi ścieżkami rowerowymi, czystym powietrzem, ale także nowoczesnością. Dobrze rozwinięta komunikacja miejska ułatwia codzienne funkcjonowanie. W mieście znajduje się wiele sklepów, punktów usługowych, zakładów pracy, a także najlepsze w regionie szkoły podstawowe.",
        "source": "Na podstawie: https://www.money.pl/gospodarka/dolacz-do-najszczesliwszych-ludzi-w-polsce-wyjatkowa-inwestycja-mieszkaniowa-w-gdyni-6903608397404864a.html"
       },
       "prompt": "Z tego tekstu wynika, że w Gdyni",
       "options": [
        {
         "id": "a",
         "text": "mieszkańcy wolą jeździć do pracy rowerami."
        },
        {
         "id": "b",
         "text": "potrzebne są inwestycje w komunikację miejską."
        },
        {
         "id": "c",
         "text": "dzieci mają szansę na dobre wykształcenie."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Catering dietetyczny to najlepszy wybór dla ludzi zapracowanych, którzy chcą odżywiać się zdrowo, ale nie mogą spędzać wielu godzin w kuchni. Zestawy posiłków są przygotowywane przez dietetyków, którzy wiedzą, jak najlepiej skomponować jedzenie na cały dzień.",
        "source": "Na podstawie: https://portal.abczdrowie.pl/catering-dietetyczny-w-trosce-o-twoje-zdrowie"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "firmy płacą pracownikom za catering."
        },
        {
         "id": "b",
         "text": "w cateringu dietetycznym nie ma śniadania."
        },
        {
         "id": "c",
         "text": "niektórym brakuje czasu na gotowanie w domu."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Zbliża się 16. edycja Nocy Teatrów. To wyjątkowe wydarzenie, podczas którego mieszkańcy Krakowa i turyści mogą zupełnie za darmo zobaczyć przedstawienia przygotowane przez krakowskie teatry. W tym czasie odbywają się również spotkania z aktorami i ludźmi teatru oraz multimedialne prezentacje.",
        "source": "Na podstawie: https://lovekrakow.pl/aktualnosci/noc-teatrow-ponad-60-spektakli-i-pokazow-plenerowych-w-jedna-czerwcowa-noc_51293.html"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "aktorzy będą udzielać wywiadów krakowskim mediom."
        },
        {
         "id": "b",
         "text": "nie trzeba płacić za oglądanie przedstawień teatralnych."
        },
        {
         "id": "c",
         "text": "spektakle są prezentowane przez teatry z całej Polski."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "Firma „Sokołów” zaprasza rodziców i dzieci do Akademii Sokolika, w której maluchy poprzez zabawę będą odkrywać zasady zdrowego stylu życia. Uczestnicy dowiedzą się, dlaczego codzienna aktywność fizyczna jest podstawą dobrego samopoczucia, poznają przepisy na nowe dania z ulubionymi składnikami i samodzielnie je ugotują.",
        "source": "Na podstawie: https://kuchnia.wp.pl/wspolna-zabawa-i-gotowanie-akademia-sokolika-czeka-na-malych-i-duzych-6896544681843488a"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "dzieci będą przygotowywać dania, które dobrze znają i lubią."
        },
        {
         "id": "b",
         "text": "firma „Sokołów” proponuje zajęcia edukacyjne połączone z zabawą."
        },
        {
         "id": "c",
         "text": "opiekunowie dzieci nie mogą uczestniczyć w zajęciach."
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
     "title": "Projekt RESQL",
     "source": "Na podstawie: https://swps.pl/uczelnia/aktualnosci-uniwersytet-swps/23003-aplikacja-resql-stop-przemocy-w-polskich-szkolach",
     "passage": "W szkołach podstawowych coraz częściej dochodzi do agresji fizycznej i przemocy psychicznej. Bardzo niebezpiecznym zjawiskiem jest również cyberprzemoc, którą trudniej zauważyć. Kiedyś uczniom łatwiej było znaleźć bezpieczne miejsce. Wystarczyło wyjść ze szkoły i zamknąć za sobą drzwi. Dziś już nie jest tak łatwo, bo nastolatki dużo czasu spędzają w mediach społecznościowych – mówi Radosław Kaczan, psycholog, wykładowca uniwersytecki i kierownik projektu RESQL.\n\nTylko około 20 procent młodzieży próbuje szukać pomocy. Ci, którzy decydują się na rozmowę ze szkolnym pedagogiem, często potem nie mają zaufania do nauczycieli i szkoły. Czy można to zmienić? Właśnie w tym celu naukowcy z warszawskiej uczelni stworzyli projekt RESQL.\n\n– Podczas pracy nad programem byliśmy w kontakcie z gimnazjalistami, licealistami oraz nauczycielami. Analizowaliśmy ich potrzeby i problemy – opowiada Radosław Kaczan. – W czasie rozmów z młodymi ludźmi dowiedzieliśmy się, dlaczego nie zgłaszają agresywnego zachowania swoich kolegów i co musiałoby się stać, żeby było inaczej – dodaje.\n\nRESQL został tak skonstruowany, aby uczeń mógł w anonimowy sposób poinformować szkołę, że jest ofiarą przemocy lub jej świadkiem. Komunikacja z pedagogiem prowadzona jest w aplikacji, dzięki czemu dziecko nie musi się bać, że koledzy zobaczą lub usłyszą rozmowę.\n\nOprócz aplikacji twórcy RESQL oferują tzw. zestawy interwencji, które ułatwiają pracownikom szkoły reagowanie w kryzysowych sytuacjach, oraz specjalnie dla nauczycieli scenariusze lekcji o problemie agresji. Autorami materiałów są psycholodzy, którzy przetestowali je w szkołach podstawowych i ponadpodstawowych. Naukowcy skończyli już pracę nad RESQL, a od czerwca aplikacja jest dostępna dla wszystkich.",
     "example": {
      "id": "r2.ex",
      "statement": "Agresja fizyczna wśród uczniów pojawia się dopiero w szkole średniej.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Cyberprzemoc jest rodzajem agresji najłatwiejszym do rozpoznania.",
       "answer": "NIE"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Obecnie jest coraz mniej miejsc, w których uczniowie czują się bezpieczni.",
       "answer": "TAK"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "W powstaniu programu RESQL brali udział wykładowcy, nauczyciele i uczniowie.",
       "answer": "TAK"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Aplikacja RESQL automatycznie informuje nauczycieli i rodziców o problemach uczniów.",
       "answer": "NIE"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Program RESQL oferuje także gotowe propozycje lekcji dla nauczycieli.",
       "answer": "TAK"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Aplikacja jest jeszcze testowana na polskich uniwersytetach.",
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
     "source": "https://www.national-geographic.pl/artykul/wielka-brytani-testuje-skrocony-tydzien-pracy-to-najwiekszy-taki-eksperyment-do-tej-pory-220607044048",
     "passage": "Pomysł skrócenia tygodnia pracy {{ex}} wraca jak bumerang. Jeszcze kilkanaście lat temu {{1}}, ale ostatnio coraz więcej krajów chce je przetestować.\n\nTym razem badania są prowadzone w Wielkiej Brytanii. To największy dotychczas eksperyment, w którym {{2}} w czterodniowym tygodniu. Bierze w nim udział 70 firm i ponad 3300 osób. Projekt potrwa sześć miesięcy, a jego pomysłodawcą jest organizacja wspierana przez angielskie uniwersytety. Uczelnie zbadają, jak nowy system wpłynie na życie zatrudnionych.\n\n– Przeanalizujemy, {{3}} na dodatkowy dzień wolny – mówi Juliet Schor, ekonomistka i socjolog z Boston College. Naukowcy skontrolują nie tylko poziom zadowolenia z pracy, {{4}}, radzenie sobie ze stresem i inne aspekty życia codziennego.\n\nDo tej pory największe tego typu badania zorganizowano w Islandii i wzięło w nich udział około 2500 uczestników. Wyniki pokazały, {{5}} było korzystne dla pracowników.\n\n– Czuli się lepiej. Byli aktywniejsi i mniej zestresowani. To spowodowało, {{6}} na inne czynności, takie jak ćwiczenia, spotkania i hobby – podsumowali uczeni.\n\nJeśli autorzy eksperymentu zorganizowanego w Wielkiej Brytanii będą mieli podobne obserwacje, być może kolejne kraje i firmy zainteresują się pomysłem krótszego tygodnia pracy. Entuzjaści nowego modelu przypominają, że wydłużenie weekendu to nic nowego, {{7}} jedynym dniem wolnym była tylko niedziela.",
     "options": [
      {
       "id": "A",
       "text": "takie rozwiązanie było nierealne"
      },
      {
       "id": "B",
       "text": "jak ludzie zareagują"
      },
      {
       "id": "C",
       "text": "z pięciu dni do czterech"
      },
      {
       "id": "D",
       "text": "że skrócenie tygodnia pracy"
      },
      {
       "id": "E",
       "text": "testuje się możliwości wykonywania pracy"
      },
      {
       "id": "F",
       "text": "ale też zdrowie badanych"
      },
      {
       "id": "G",
       "text": "że mieli większą ochotę"
      },
      {
       "id": "H",
       "text": "bo wcześniej w wielu miejscach"
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
       "answer": "E"
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
       "answer": "G"
      },
      {
       "id": "r3.7",
       "number": 7,
       "gap": "7",
       "answer": "H"
      }
     ],
     "pdfNotes": [
      "The printed source line has no 'Na podstawie:' prefix in this session."
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
     "source": "Na podstawie: https://warszawa.naszemiasto.pl/najdziwniejsze-restauracje-w-warszawie-obiad-w-ciemnosci-50/ga/c11-4659895/zd/32541219",
     "heading": "Nietypowe restauracje w Warszawie",
     "options": [
      {
       "id": "A",
       "text": "Jack's przypomina połączenie rockowego klubu z oglądaniem filmu na świeżym powietrzu w fotelach samochodowych. Przyjdź na burgera w amerykańskim stylu i przy okazji obejrzyj dobry film."
      },
      {
       "id": "B",
       "text": "„Przystanek Cafe” to kawiarnia zorganizowana w autobusie. Jego wnętrze przeszło dużą zmianę, a w menu znajdziemy typowe dania barowe."
      },
      {
       "id": "C",
       "text": "Restauracja Shabu-shabu oferuje – znany z kuchni japońskiej – styl przygotowywania potraw. Częścią stołu jest specjalny garnek, do którego goście wlewają bulion, a następnie dodają mięso, warzywa czy grzyby."
      },
      {
       "id": "D",
       "text": "Masz dość czekania na kolejne piwo? W takim razie nalej je sobie sam! The Alchemist oferuje taką możliwość, a wszystko to dzięki specjalnej ścianie z 8 kranami."
      },
      {
       "id": "E",
       "text": "Pizza, pasta, wino to pierwsza w Polsce restauracja z pizzą, którą sami skomponujemy i zamówimy za pomocą tabletu. Wybieramy składniki, które lubimy i za każdym razem cieszymy się zupełnie innym daniem!"
      },
      {
       "id": "F",
       "text": "W M. Cafe mieszkają koty, które można brać na ręce i głaskać. W ich towarzystwie wypijemy kawę lub herbatę i zjemy pyszną wegetariańską kanapkę lub inne wegańskie potrawy."
      },
      {
       "id": "G",
       "text": "Dobro & Dobro Cafe to najmniejsza kawiarnia w Polsce, a jej założyciele to małżeństwo z Ukrainy. W ofercie: smaczna kawa i możliwość porozmawiania z miłymi właścicielami."
      },
      {
       "id": "H",
       "text": "W Dine in dominują węgierskie potrawy, chociaż goście i tak nie widzą, co jedzą. W restauracji jest bardzo mało światła, a szef kuchni specjalnie nie zdradza menu, by nie popsuć niespodzianki."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Dla fanów komunikacji miejskiej",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Niewiele miejsca, dużo serdeczności",
       "answer": "G"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Technologia i kuchnia",
       "answer": "E"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Sala kinowa w środku restauracji",
       "answer": "A"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Kolacja w ciemności",
       "answer": "H"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Ugotuj to sam",
       "answer": "C"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Tu szklanki zawsze są pełne",
       "answer": "D"
      },
      {
       "id": "r4.7",
       "number": 7,
       "prompt": "W nietypowym towarzystwie i bez mięsa",
       "answer": "F"
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
     "title": "Ile jest pór roku?",
     "source": "Na podstawie: https://wszechmocne.pl/cztery-szesc-osiem-ile-tak-naprawde-mamy-por-roku/",
     "passage": "Chociaż {{ex}} na to pytanie wydaje się prosta, wcale tak nie jest. Wiele osób uważa, że w Polsce {{1}} cztery podstawowe pory roku. A jednak można ich wymienić aż… sześć lub osiem! Skąd ta {{2}}? Standardowy podział roku na wiosnę, lato, jesień i zimę nie opisuje wszystkich zmian w {{3}}, dlatego do tej listy dodaje się tak zwane okresy przejściowe: przedwiośnie, czyli {{4}} między końcem zimy i początkiem wiosny oraz przedzimie, które jest po jesieni.\n\nPracownicy Instytut Meteorologii rozszerzają tę listę o kolejne dwa okresy – przedlecie oraz polecie, co razem {{5}} aż osiem! Wyznacza się je na podstawie średniej temperatury w ciągu doby. Zima zaczyna się, gdy temperatura jest równa zeru lub {{6}} poniżej 0°C. Dzięki {{7}} od pogody mówimy często o meteorologicznych porach roku. Są one potrzebne do statystyk, a ich daty się nie zmieniają.\n\nJak wiadomo, życie zwierząt i fazy rozwoju roślin są mocno związane ze zmianami pór roku. Dzięki obserwacji fauny i flory naukowcy decydują, czy już mamy wiosnę, czy jeszcze {{8}} trwa przedwiośnie. Zgodnie z tymi badaniami początek wiosny zaczyna się już nawet w lutym lub na początku marca, ale {{9}} w kwietniu.\n\nNiestety pewnego dnia pory roku mogą całkowicie zaniknąć ze względu na {{10}} klimatu i globalne ocieplenie.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "reakcja",
        "wiadomość",
        "odpowiedź"
       ],
       "answer": "odpowiedź"
      },
      {
       "id": "1",
       "options": [
        "są",
        "znajdują się",
        "pokazują się"
       ],
       "answer": "są"
      },
      {
       "id": "2",
       "options": [
        "błąd",
        "różnica",
        "opinia"
       ],
       "answer": "różnica"
      },
      {
       "id": "3",
       "options": [
        "miesiącu",
        "kalendarzu",
        "pogodzie"
       ],
       "answer": "pogodzie"
      },
      {
       "id": "4",
       "options": [
        "data",
        "czas",
        "wiek"
       ],
       "answer": "czas"
      },
      {
       "id": "5",
       "options": [
        "dodaje",
        "daje",
        "pokazuje"
       ],
       "answer": "daje"
      },
      {
       "id": "6",
       "options": [
        "pada",
        "spada",
        "rośnie"
       ],
       "answer": "spada"
      },
      {
       "id": "7",
       "options": [
        "specjalistom",
        "pracownikom",
        "prezenterom"
       ],
       "answer": "specjalistom"
      },
      {
       "id": "8",
       "options": [
        "długo",
        "ciągle",
        "potem"
       ],
       "answer": "ciągle"
      },
      {
       "id": "9",
       "options": [
        "nigdy",
        "zawsze",
        "regularnie"
       ],
       "answer": "nigdy"
      },
      {
       "id": "10",
       "options": [
        "rodzaje",
        "typy",
        "zmiany"
       ],
       "answer": "zmiany"
      }
     ],
     "pdfNotes": [
      "Passage prints „Pracownicy Instytut Meteorologii” (sic); kept verbatim."
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
     "source": "Na podstawie: U króla Maciusia | Muzeum Historii Żydów Polskich POLIN w Warszawie oraz „U króla Maciusia\" - zajrzyj do muzeum POLIN - RMF 24",
     "passage": "Miejsce rodzinnej {{ex1}} w Muzeum Historii Żydów Polskich POLIN nazywa się „U króla Maciusia”. Jest to {{ex2}} przestrzeń zaprojektowana dla dzieci. „Chcemy, żeby każdy mógł rozwijać tu {{ex3}} talenty” – mówi Karolina Śmigiel, koordynatorka projektu. Tolerancja i odpowiedzialność to w {{1}} miejscu najważniejsze wartości, więc {{2}} będą się tu czuć komfortowo. Janusz Korczak, znany pedagog, uważał, że dzieci to „mali dorośli”. {{3}} słowa – „Ważne, co myślisz i czujesz” – są główną {{4}} „U króla Maciusia”. Zajęcia prowadzą utalentowani i doświadczeni nauczyciele oraz {{5}}. Kochają oni pracę z dziećmi i chętnie spędzają z {{6}} czas. Za pomocą specjalnych {{7}} maluchy odkrywają świat {{8}} kultury, tradycji i historii. Dzieci razem z opiekunami zapraszamy do {{9}} „U króla Maciusia” w weekendy. Wejście jest całkowicie {{10}}.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "edukację",
        "edukacji",
        "edukacją"
       ],
       "answer": "edukacji"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "nowoczesna",
        "nowoczesne",
        "nowoczesny"
       ],
       "answer": "nowoczesna"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "swój",
        "swoich",
        "swoje"
       ],
       "answer": "swoje"
      },
      {
       "id": "1",
       "options": [
        "tym",
        "tego",
        "temu"
       ],
       "answer": "tym"
      },
      {
       "id": "2",
       "options": [
        "rodzinie",
        "rodziną",
        "rodziny"
       ],
       "answer": "rodziny"
      },
      {
       "id": "3",
       "options": [
        "Go",
        "Niego",
        "Jego"
       ],
       "answer": "Jego"
      },
      {
       "id": "4",
       "options": [
        "zasadą",
        "zasadę",
        "zasady"
       ],
       "answer": "zasadą"
      },
      {
       "id": "5",
       "options": [
        "artyści",
        "artysty",
        "artyście"
       ],
       "answer": "artyści"
      },
      {
       "id": "6",
       "options": [
        "nich",
        "nim",
        "nimi"
       ],
       "answer": "nimi"
      },
      {
       "id": "7",
       "options": [
        "materiały",
        "materiałów",
        "materiałach"
       ],
       "answer": "materiałów"
      },
      {
       "id": "8",
       "options": [
        "żydowskiej",
        "żydowskiego",
        "żydowską"
       ],
       "answer": "żydowskiej"
      },
      {
       "id": "9",
       "options": [
        "zabawy",
        "zabawą",
        "zabawie"
       ],
       "answer": "zabawy"
      },
      {
       "id": "10",
       "options": [
        "bezpłatne",
        "bezpłatnym",
        "bezpłatny"
       ],
       "answer": "bezpłatne"
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
     "source": "Na podstawie: https://edytazajac.pl/jak-zaplanowac-przyszlosc/",
     "wordBox": [
      "więc",
      "żeby",
      "bo",
      "dlaczego",
      "ale",
      "że",
      "które"
     ],
     "distractors": [
      "dlaczego"
     ],
     "passage": "Jak zaplanować przyszłość, {{ex}} osiągnąć sukces?\n\nNie umiem zaplanować przyszłości, {{1}} nikt nas w szkole nie uczył organizowania swojego czasu. Ciągle biegam, coś załatwiam, zajmuję się mnóstwem spraw, {{2}} nie zawsze są tego warte. Wiem, {{3}} praca jest ważna, {{4}} chciałabym realizować także moje marzenia i osiągnąć wreszcie sukces. Postanowiłam więc stworzyć plan działania na najbliższy rok. Uwielbiam gotować, {{5}} zapiszę się na kurs kulinarny i w ten sposób zrobię w końcu coś dla siebie.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "żeby"
      },
      {
       "id": "1",
       "answer": "bo"
      },
      {
       "id": "2",
       "answer": "które"
      },
      {
       "id": "3",
       "answer": "że"
      },
      {
       "id": "4",
       "answer": "ale"
      },
      {
       "id": "5",
       "answer": "więc"
      }
     ],
     "pdfNotes": [
      "The example gap sits in the passage heading ('Jak zaplanować przyszłość, żeby osiągnąć sukces?'), which is therefore the first paragraph of the passage."
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
     "source": "Na podstawie: https://autokult.pl/podrozowanie-samochodem-dlaczego-warto,6878448824482624a",
     "passage": "Dlaczego {{ex1}} jest wybrać się w podróż samochodem niż samolotem? Po pierwsze taka wyprawa często jest o wiele {{ex2}} od przelotu. Gdy jedziesz samochodem, masz {{1}} wolności niż podczas lotu. Możesz zatrzymać się po drodze w dowolnym miejscu. Przejazd samochodem może się też okazać {{2}} – szczególnie, jeśli podróżujemy w grupie. Ponadto coraz {{3}} staje się obecnie nocowanie w aucie. {{4}} samochodem osobowym jest w tym wypadku camper. Kiedy decydujesz się na kilkudniową wyprawę, warto jak {{5}} zaplanować trasę, miejsca postoju, a także budżet. Dzięki temu unikniemy niespodzianek i niepotrzebnych wydatków.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "lepiej",
        "lepszą",
        "lepszej"
       ],
       "answer": "lepiej"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "relaksująca",
        "bardziej relaksująca",
        "relaksujących"
       ],
       "answer": "bardziej relaksująca"
      },
      {
       "id": "1",
       "options": [
        "dużo",
        "najwięcej",
        "więcej"
       ],
       "answer": "więcej"
      },
      {
       "id": "2",
       "options": [
        "tańszy",
        "tańsze",
        "taniej"
       ],
       "answer": "tańszy"
      },
      {
       "id": "3",
       "options": [
        "modniejsze",
        "modne",
        "modniej"
       ],
       "answer": "modniejsze"
      },
      {
       "id": "4",
       "options": [
        "Najwygodniej",
        "Najwygodniejszym",
        "Najwygodniejszy"
       ],
       "answer": "Najwygodniejszym"
      },
      {
       "id": "5",
       "options": [
        "dokładniej",
        "dokładnie",
        "najdokładniej"
       ],
       "answer": "najdokładniej"
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
     "source": "Na podstawie: https://special.gazeta.pl/special/7,169150,24641572,ziemia-za-20-30-i-50-lat-jaki-swiat-zostawimy-naszym-dzieciom.html",
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "Zmiana klimatu jest faktem. {{ex1}} z tym wszystkie najważniejsze organizacje naukowe na świecie. Jak {{ex2}} Ziemia, co {{ex3}} za 20, 30 i 50 lat? Jaki świat {{1}} za jakiś czas naszym dzieciom? Już dziś tempo zmian {{2}} o naszym życiu. Trudno powiedzieć, jaki będzie świat w XXII wieku, ponieważ każda zmiana to destabilizacja klimatu i pogody. Prawdopodobnie w przyszłości coraz częściej {{3}}: huragany, burze, śnieżyce. Nie wiemy, jak różne państwa wtedy {{4}}. Czy politycy wreszcie {{5}}, że konieczne są szybkie działania proekologiczne? A może już wkrótce {{6}} bardzo oszczędzać elektryczność i żyć bez samochodów na benzynę. Zdaniem naukowców za 20 lat temperatura bardzo wzrośnie, a już teraz fale upałów i susze {{7}} rolnictwo. Poziom wody w rzekach obecnie cały czas {{8}}, w wielu miejscach na świecie {{9}} wody do picia i nawadniania terenu. Niestety wciąż za mało {{10}} o tym, jak dbać o środowisko.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "zgadzać się",
       "answer": "Zgadzają się"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "wyglądać",
       "answer": "będzie wyglądała"
      },
      {
       "id": "ex3",
       "example": true,
       "given": "zmienić się",
       "answer": "zmieni się"
      },
      {
       "id": "1",
       "given": "my - zostawić",
       "answer": "zostawimy"
      },
      {
       "id": "2",
       "given": "decydować",
       "answer": "decyduje"
      },
      {
       "id": "3",
       "given": "zdarzać się",
       "answer": "będą się zdarzały",
       "accept": [
        "będą się zdarzać"
       ]
      },
      {
       "id": "4",
       "given": "zareagować",
       "answer": "zareagują"
      },
      {
       "id": "5",
       "given": "zrozumieć",
       "answer": "zrozumieją"
      },
      {
       "id": "6",
       "given": "my – musieć",
       "answer": "będziemy musieli"
      },
      {
       "id": "7",
       "given": "niszczyć",
       "answer": "niszczą"
      },
      {
       "id": "8",
       "given": "spadać",
       "answer": "spada"
      },
      {
       "id": "9",
       "given": "brakować",
       "answer": "brakuje"
      },
      {
       "id": "10",
       "given": "my – myśleć",
       "answer": "myślimy"
      }
     ],
     "pdfNotes": [
      "Key item 3 prints 'będą się zdarzały/zdarzać' (alternative without spaces around '/'); stored as answer + accept (crosscheck_keys splits alternatives only at ' / ' and reports this one item)."
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
      "sentence": "Jerzy pracuje w szpitalu wojewódzkim.",
      "underlined": "w szpitalu wojewódzkim",
      "stem": "…………… pracuje Jerzy?",
      "shortAnswer": "W szpitalu wojewódzkim.",
      "answer": "Gdzie",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Magda najbardziej lubi mleczną czekoladę.",
       "underlined": "mleczną",
       "stem": "…………… czekoladę Magda lubi najbardziej?",
       "shortAnswer": "Mleczną.",
       "answer": "Jaką",
       "accept": []
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Byłam wczoraj w kinie z siostrą Adama.",
       "underlined": "z siostrą Adama",
       "stem": "…………… byłaś wczoraj w kinie?",
       "shortAnswer": "Z siostrą Adama.",
       "answer": "Z kim",
       "accept": []
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Anna spotkała na spacerze swoją nauczycielkę.",
       "underlined": "swoją nauczycielkę",
       "stem": "…………… Anna spotkała na spacerze?",
       "shortAnswer": "Swoją nauczycielkę.",
       "answer": "Kogo",
       "accept": []
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Chłopcy marzą o nocnej wyprawie do lasu.",
       "underlined": "o nocnej wyprawie do lasu",
       "stem": "…………… marzą chłopcy?",
       "shortAnswer": "O nocnej wyprawie do lasu.",
       "answer": "O czym",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Za dwa tygodnie zaczynają się egzaminy maturalne.",
       "underlined": "Za dwa tygodnie",
       "stem": "…………… zaczynają się egzaminy maturalne?",
       "shortAnswer": "Za dwa tygodnie.",
       "answer": "Kiedy",
       "accept": [
        "Za ile tygodni",
        "Za ile czasu"
       ]
      }
     ],
     "pdfNotes": [
      "Official key prints the question word with decoration (Jaką...?, Z kim…?); stored without it, match.stripChars ignores the decoration. Item 5 key lists three alternatives: Kiedy / Za ile tygodni / Za ile czasu."
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
      "source": "Niebieska sukienka jest dużo ładniejsza niż tamta żółta.",
      "hint": "od",
      "answer": "Niebieska sukienka jest dużo ładniejsza od tamtej żółtej.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "Anna ma na sobie strój kąpielowy.",
       "hint": "ubrana",
       "answer": "Anna jest ubrana w stój kąpielowy.",
       "rubric": "dodanie czasownika i przyimka (2 x 0,25) + 2 x brak transformacji (2 x 0,25)",
       "rubricParts": [
        {
         "what": "dodanie czasownika i przyimka",
         "points": 0.5
        },
        {
         "what": "2 x brak transformacji",
         "points": 0.5
        }
       ]
      },
      {
       "id": "g6.2",
       "number": 2,
       "source": "Wczoraj pojechaliśmy na wycieczkę rowerową do lasu.",
       "hint": "byliśmy",
       "answer": "Wczoraj byliśmy na wycieczce rowerowej w lesie.",
       "rubric": "3 transformacje (3 x 0,25) + zmiana przyimka 0,25 p.",
       "rubricParts": [
        {
         "what": "3 transformacje",
         "points": 0.75
        },
        {
         "what": "zmiana przyimka",
         "points": 0.25
        }
       ]
      },
      {
       "id": "g6.3",
       "number": 3,
       "source": "Hobby Dawida to gry komputerowe.",
       "hint": "interesuje się",
       "answer": "Dawid interesuje się grami komputerowymi.",
       "rubric": "usunięcie konstrukcji „hobby to…” 0,25 p. + 3 transformacje (3 x 0,25)",
       "rubricParts": [
        {
         "what": "usunięcie konstrukcji „hobby to…”",
         "points": 0.25
        },
        {
         "what": "3 transformacje",
         "points": 0.75
        }
       ]
      },
      {
       "id": "g6.4",
       "number": 4,
       "source": "Jej mąż jest dyrektorem w dużej firmie energetycznej.",
       "hint": "kieruje",
       "answer": "Jej mąż kieruje dużą firmą energetyczną.",
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
      },
      {
       "id": "g6.5",
       "number": 5,
       "source": "Czy masz jeszcze stary adres mailowy?",
       "hint": "korzystać",
       "answer": "Czy korzystasz jeszcze ze starego adresu mailowego?",
       "rubric": "dodanie przyimka 0,25 p. + 3 transformacje (3 x 0,25)",
       "rubricParts": [
        {
         "what": "dodanie przyimka",
         "points": 0.25
        },
        {
         "what": "3 transformacje",
         "points": 0.75
        }
       ]
      }
     ],
     "pdfNotes": [
      "Model answer 1 prints „stój kąpielowy” (sic) in the official key; kept verbatim."
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
     "passage": "Babcia Zosia: {{ex1}} mi, Krzysiu, czy pytałeś już żonę, Kasię i Jasia, gdzie {{ex2}} pojechać w tym roku na wakacje?\n\nKrzysztof: Nie. Wczoraj bardzo późno wróciłem z pracy i dzieci już spały. Halinka powiedziała, żebym ich już nie {{1}}.\n\nBabcia Zosia: A jak myślisz, o czym marzą?\n\nKrzysztof: Nie wiem, {{2}} się głębiej nad tym zastanowić. Kasia pewnie {{3}} wakacje nad morzem, bo uwielbia plażę. Jaś chyba by {{4}} jakąś wyprawę rowerową na Mazury. Wiosną zapisał się w szkole do klubu rowerowego.\n\nBabcia Zosia: A Halinka?\n\nKrzysztof: To najtrudniej zgadnąć. Już słyszę jak do nas mówi: „{{5}} w tym roku sami. Ja chętnie zostanę w domu i wreszcie będę miała czas tylko dla siebie”. Tak jest co roku.\n\nBabcia Zosia: Myślę, że gdybyście częściej {{6}} jej jako pierwszej wybrać miejsce wypoczynku, to {{7}} inaczej. Może w tym roku niech ona sama {{8}}, gdzie i jak spędzicie wakacje.\n\nKrzysztof: A jeśli wybierze wypoczynek w agroturystyce?\n\nBabcia Zosia: Nie {{9}}! Halinka dobrze cię zna i wie, że nie lubisz wsi. {{10}} jej tylko trochę czasu do namysłu!",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "Powiedz",
        "Mówiłbyś",
        "Mówcie"
       ],
       "answer": "Powiedz"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "chciałaby",
        "chcieliby",
        "chciałbyś"
       ],
       "answer": "chcieliby"
      },
      {
       "id": "1",
       "options": [
        "obudziłbym",
        "budził",
        "budziliby"
       ],
       "answer": "budził"
      },
      {
       "id": "2",
       "options": [
        "musiałbym",
        "musiałaby",
        "musielibyście"
       ],
       "answer": "musiałbym"
      },
      {
       "id": "3",
       "options": [
        "proponowałabym",
        "zaproponuj",
        "zaproponowałaby"
       ],
       "answer": "zaproponowałaby"
      },
      {
       "id": "4",
       "options": [
        "wolałby",
        "wolał",
        "woli"
       ],
       "answer": "wolał"
      },
      {
       "id": "5",
       "options": [
        "Jedźcie",
        "Jechalibyście",
        "Pojechaliby"
       ],
       "answer": "Jedźcie"
      },
      {
       "id": "6",
       "options": [
        "pozwoli",
        "pozwalali",
        "pozwalalibyście"
       ],
       "answer": "pozwalali"
      },
      {
       "id": "7",
       "options": [
        "byłaby",
        "byliby",
        "byłoby"
       ],
       "answer": "byłoby"
      },
      {
       "id": "8",
       "options": [
        "zdecyduje",
        "zdecyduj",
        "zdecydowałaby"
       ],
       "answer": "zdecyduje"
      },
      {
       "id": "9",
       "options": [
        "zmartwiłby się",
        "zmartwi się",
        "martw się"
       ],
       "answer": "martw się"
      },
      {
       "id": "10",
       "options": [
        "Dałbyś",
        "Daj",
        "Dawaj"
       ],
       "answer": "Daj"
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
     "wordBox": [
      "dla",
      "przed",
      "w",
      "na",
      "przy",
      "wśród",
      "przez"
     ],
     "distractors": [
      "przy"
     ],
     "passage": "Ukraina była gościem honorowym Międzynarodowych Targów Książki w Warszawie, które odbyły się {{ex}} dniach 25-28 maja 2023 roku w Pałacu Kultury i Nauki. Stoisko z książkami przygotował Ukraiński Instytut Książki. {{1}} półkach stały poradniki, albumy i powieści po ukraińsku. Ponadto {{2}} cztery dni odbywały się tutaj spotkania z autorami, był też kącik gier i zabaw {{3}} dzieci. Do Warszawy przyjechało ponad 20 autorek, autorów i przedstawicieli świata kultury z Ukrainy, {{4}} nich: Jurij Andruchowycz, Ostap Sływynski, czy Switłana Taratorina. {{5}} publicznością wystąpił młodzieżowy zespół muzyczny z Charkowa.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "w"
      },
      {
       "id": "1",
       "answer": "na"
      },
      {
       "id": "2",
       "answer": "przez"
      },
      {
       "id": "3",
       "answer": "dla"
      },
      {
       "id": "4",
       "answer": "wśród"
      },
      {
       "id": "5",
       "answer": "przed"
      }
     ],
     "pdfNotes": [
      "Key prints 'Na' and 'Przed' capitalised (sentence start); stored in box casing."
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
         "genre": "e-mail",
         "wordTarget": 40,
         "prompt": "Mama Pani/Pana koleżanki/kolegi z Polski obchodzi urodziny. Proszę napisać do niej e-mail z życzeniami z tej okazji."
        },
        {
         "id": "b",
         "genre": "esej",
         "wordTarget": 160,
         "prompt": "„Zwierzę w domu”. Proszę napisać esej (wypracowanie szkolne) na ten temat.",
         "title": "Zwierzę w domu"
        }
       ]
      },
      {
       "id": "II",
       "parts": [
        {
         "id": "a",
         "genre": "ogłoszenie",
         "wordTarget": 40,
         "prompt": "Śpiewa Pani/Pan w zespole muzycznym „Trio”. Proszę napisać ogłoszenie o koncercie, które zamieści Pani/Pan w internecie."
        },
        {
         "id": "b",
         "genre": "charakterystyka",
         "wordTarget": 160,
         "prompt": "„Lubię z nią/nim pracować”. Proszę napisać charakterystykę takiej osoby.",
         "title": "Lubię z nią/nim pracować"
        }
       ]
      },
      {
       "id": "III",
       "parts": [
        {
         "id": "a",
         "genre": "pozdrowienia",
         "wordTarget": 30,
         "prompt": "Wyjechała Pani / wyjechał Pan na kilka dni, żeby odpocząć w gospodarstwie agroturystycznym. Proszę napisać pozdrowienia do polskich przyjaciół, które wyśle Pani/Pan pocztą tradycyjną."
        },
        {
         "id": "b",
         "genre": "opowiadanie",
         "wordTarget": 170,
         "prompt": "Proszę napisać opowiadanie zaczynające się od słów: „Tego dnia jechałam/jechałem pociągiem …”.",
         "startsWith": "Tego dnia jechałam/jechałem pociągiem …"
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
