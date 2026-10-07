window.EXAMS = window.EXAMS || {};
window.EXAMS["2022-03"] = {
 "schemaVersion": 1,
 "id": "2022-03",
 "meta": {
  "level": "B1",
  "labelPdf": "marzec 2022",
  "examDates": "26-27.03.2022",
  "sources": {
   "test": "sources/2022-03/test.pdf",
   "transcript": "sources/2022-03/transcript.pdf",
   "audio": "sources/2022-03/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Listening V is a match table (persons/names in column I -> statements A-F in column II, 5 x 1 p.); reading V is inline choice.",
   "Official typo kept: listening V transcript (Damian) lacks a full stop before 'Wolę'.",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear."
  ]
 },
 "audio": {
  "src": "sources/2022-03/audio.mp3",
  "duration": 1586.4,
  "intro": [
   0,
   46.5
  ],
  "readingTime": [
   46.5,
   107.0
  ],
  "tail": [
   1522.9,
   1586.4
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
        "start": 133.5,
        "end": 289.9
       }
      ],
      "items": [
       {
        "ref": "l1.ex",
        "start": 133.5,
        "end": 143.9
       },
       {
        "ref": "l1.1",
        "start": 148.2,
        "end": 154.3
       },
       {
        "ref": "l1.2",
        "start": 158.8,
        "end": 164.7
       },
       {
        "ref": "l1.3",
        "start": 169.2,
        "end": 174.8
       },
       {
        "ref": "l1.4",
        "start": 179.2,
        "end": 185.4
       },
       {
        "ref": "l1.5",
        "start": 189.9,
        "end": 195.6
       },
       {
        "ref": "l1.6",
        "start": 199.9,
        "end": 205.4
       },
       {
        "ref": "l1.7",
        "start": 209.7,
        "end": 215.1
       },
       {
        "ref": "l1.8",
        "start": 219.4,
        "end": 225.0
       },
       {
        "ref": "l1.9",
        "start": 229.4,
        "end": 235.3
       },
       {
        "ref": "l1.10",
        "start": 239.6,
        "end": 246.8
       },
       {
        "ref": "l1.11",
        "start": 251.4,
        "end": 257.5
       },
       {
        "ref": "l1.12",
        "start": 261.9,
        "end": 268.3
       },
       {
        "ref": "l1.13",
        "start": 272.9,
        "end": 279.6
       },
       {
        "ref": "l1.14",
        "start": 284.1,
        "end": 289.9
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
        "text": "na przystanku."
       },
       {
        "id": "b",
        "text": "na stacji benzynowej."
       },
       {
        "id": "c",
        "text": "na dworcu PKP."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "sp": "M",
       "t": "Czy autobus do centrum już odjechał?"
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
         "text": "w barze."
        },
        {
         "id": "b",
         "text": "w kwiaciarni."
        },
        {
         "id": "c",
         "text": "na targu."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Czy może pani spakować wszystkie owoce i warzywa razem?"
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w muzeum."
        },
        {
         "id": "b",
         "text": "w teatrze."
        },
        {
         "id": "c",
         "text": "w kinie."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Czy podczas spektaklu dla dzieci będą przerwy?"
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "zdenerwowanie."
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
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Znowu wszystkie miejsca parkingowe są zajęte!"
       }
      },
      {
       "id": "l1.4",
       "number": 4,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w sklepie obuwniczym."
        },
        {
         "id": "b",
         "text": "w księgarni."
        },
        {
         "id": "c",
         "text": "w restauracji."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Te buty są trochę za małe. Poproszę większy rozmiar."
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "u optyka."
        },
        {
         "id": "b",
         "text": "w aptece."
        },
        {
         "id": "c",
         "text": "u okulisty."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Poproszę krople do oczu i coś na ból głowy."
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź jest typowa podczas",
       "options": [
        {
         "id": "a",
         "text": "kontroli biletów."
        },
        {
         "id": "b",
         "text": "odprawy na lotnisku."
        },
        {
         "id": "c",
         "text": "kontroli drogowej."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Poproszę prawo jazdy i dowód osobisty."
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "krytykę."
        },
        {
         "id": "b",
         "text": "polecenie."
        },
        {
         "id": "c",
         "text": "sympatię."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Proszę zrobić miejsce dla tej starszej pani!"
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w galerii handlowej."
        },
        {
         "id": "b",
         "text": "w księgarni."
        },
        {
         "id": "c",
         "text": "w muzeum."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Ten obraz jest z osiemnastego wieku."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "rekomendację."
        },
        {
         "id": "b",
         "text": "prośbę."
        },
        {
         "id": "c",
         "text": "rezygnację."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Polecam ci ten sklep ze zdrową żywnością."
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź oznacza problemy",
       "options": [
        {
         "id": "a",
         "text": "z wydaniem reszty."
        },
        {
         "id": "b",
         "text": "z płatnością gotówką."
        },
        {
         "id": "c",
         "text": "z płatnością kartą."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Czy może pan zapłacić gotówką? Terminal nie działa."
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź oznacza, że osoba jest",
       "options": [
        {
         "id": "a",
         "text": "przed czasem."
        },
        {
         "id": "b",
         "text": "na czas."
        },
        {
         "id": "c",
         "text": "po czasie."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Co tak późno? Wszyscy na ciebie czekamy!"
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta osoba jest",
       "options": [
        {
         "id": "a",
         "text": "zadowolona."
        },
        {
         "id": "b",
         "text": "smutna."
        },
        {
         "id": "c",
         "text": "zmęczona."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Zgubiłam nowy zegarek, który dostałam od dziadka."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź jest typowa dla",
       "options": [
        {
         "id": "a",
         "text": "pracownika."
        },
        {
         "id": "b",
         "text": "studenta."
        },
        {
         "id": "c",
         "text": "bezrobotnego."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Wyobraź sobie, że wreszcie dostałem awans."
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w sklepie mięsnym."
        },
        {
         "id": "b",
         "text": "w cukierni."
        },
        {
         "id": "c",
         "text": "w barze."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Chciałabym zamówić na jutro tort czekoladowy."
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
       300.3,
       316.3
      ],
      "plays": [
       {
        "start": 326.7,
        "end": 458.9
       },
       {
        "start": 504.9,
        "end": 637.0
       }
      ],
      "pauseBetweenPlays": 46.0,
      "items": [
       {
        "ref": "l2.ex",
        "start": 326.7,
        "end": 338.9
       },
       {
        "ref": "l2.1",
        "start": 343.3,
        "end": 356.6
       },
       {
        "ref": "l2.2",
        "start": 361.1,
        "end": 370.5
       },
       {
        "ref": "l2.3",
        "start": 374.8,
        "end": 384.4
       },
       {
        "ref": "l2.4",
        "start": 388.7,
        "end": 399.5
       },
       {
        "ref": "l2.5",
        "start": 403.9,
        "end": 413.9
       },
       {
        "ref": "l2.6",
        "start": 419.2,
        "end": 432.6
       },
       {
        "ref": "l2.7",
        "start": 437.5,
        "end": 446.7
       },
       {
        "ref": "l2.8",
        "start": 451.0,
        "end": 458.9
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
        "text": "zamawia herbatę."
       },
       {
        "id": "b",
        "text": "nie pije alkoholu."
       },
       {
        "id": "c",
        "text": "chce wino lub piwo."
       }
      ],
      "answer": "b",
      "shown": true,
      "transcript": {
       "lines": [
        {
         "sp": "M",
         "t": "Co podać do picia?"
        },
        {
         "sp": "K",
         "t": "Poproszę coś bezalkoholowego."
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
         "text": "klient jest zadowolony z projektu."
        },
        {
         "id": "b",
         "text": "projekt sypialni jest za drogi."
        },
        {
         "id": "c",
         "text": "projekt sypialni nie odpowiada klientowi."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Czy oglądał pan już projekt mieszkania? Co pan o tym myśli?"
         },
         {
          "sp": "M",
          "t": "Salon w porządku, ale aranżacja sypialni jest chyba zbyt awangardowa."
         }
        ]
       }
      },
      {
       "id": "l2.2",
       "number": 2,
       "prompt": "Z tego dialogu dowiadujemy się, że ona",
       "options": [
        {
         "id": "a",
         "text": "planuje spotkanie z przyjaciółmi."
        },
        {
         "id": "b",
         "text": "jest w sobotę i niedzielę zajęta."
        },
        {
         "id": "c",
         "text": "jeszcze nie wie, czy może się spotkać."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "To co? Widzimy się w weekend u Michała?"
         },
         {
          "sp": "K",
          "t": "Tym razem nie dam rady. Jedźcie sami."
         }
        ]
       }
      },
      {
       "id": "l2.3",
       "number": 3,
       "prompt": "Z tego dialogu dowiadujemy się, że mężczyzna",
       "options": [
        {
         "id": "a",
         "text": "dostał urlop."
        },
        {
         "id": "b",
         "text": "dostał podwyżkę."
        },
        {
         "id": "c",
         "text": "nie ma już pracy."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Co się stało? Rozmawiałeś dziś z szefem?"
         },
         {
          "sp": "M",
          "t": "Tak, niestety, od dziś jestem bezrobotny."
         }
        ]
       }
      },
      {
       "id": "l2.4",
       "number": 4,
       "prompt": "Z tego dialogu dowiadujemy się, że mężczyzna",
       "options": [
        {
         "id": "a",
         "text": "nie jest punktualny."
        },
        {
         "id": "b",
         "text": "zwykle jest punktualny."
        },
        {
         "id": "c",
         "text": "obiecuje poprawę."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Przepraszam za spóźnienie. Straszne dziś korki."
         },
         {
          "sp": "K",
          "t": "To już kolejny raz. Następnym razem zaczniemy bez pana!"
         }
        ]
       }
      },
      {
       "id": "l2.5",
       "number": 5,
       "prompt": "Z tego dialogu dowiadujemy się, że matka",
       "options": [
        {
         "id": "a",
         "text": "uważa, że syn ma dobry pomysł."
        },
        {
         "id": "b",
         "text": "jeszcze nie zdecydowała, co zrobi."
        },
        {
         "id": "c",
         "text": "chce zajmować się psem."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Mamo, kupisz mi psa?"
         },
         {
          "sp": "K",
          "t": "Hmm… zastanowię się. A kto będzie się nim opiekował?"
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
         "text": "mężczyzna sprzedaje drukarki."
        },
        {
         "id": "b",
         "text": "drukarka nie działa."
        },
        {
         "id": "c",
         "text": "kobieta pomaga mężczyźnie."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Pomożesz mi? Nie mogę wydrukować tego dokumentu."
         },
         {
          "sp": "M",
          "t": "Oj, to chyba jakiś większy problem, wydaje mi się, że musisz kupić nową drukarkę."
         }
        ]
       }
      },
      {
       "id": "l2.7",
       "number": 7,
       "prompt": "Z tego dialogu dowiadujemy się, że on",
       "options": [
        {
         "id": "a",
         "text": "szuka produktu."
        },
        {
         "id": "b",
         "text": "szuka swojej ładowarki."
        },
        {
         "id": "c",
         "text": "reklamuje produkt."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Gdzie znajdę ładowarki do smartfonów?"
         },
         {
          "sp": "K",
          "t": "Są na piątym regale po prawej stronie."
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
         "text": "kobieta już miała imieniny."
        },
        {
         "id": "b",
         "text": "mężczyzna się pomylił."
        },
        {
         "id": "c",
         "text": "kobieta ma urodziny."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Wszystkiego najlepszego z okazji imienin."
         },
         {
          "sp": "K",
          "t": "Ale moje imieniny będą dopiero w przyszłym tygodniu."
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
     "prompt": "Proszę wysłuchać wywiadu na temat krótszego tygodnia pracy i zaznaczyć właściwe odpowiedzi.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: https://www.money.pl/gospodarka/czterodniowy-tydzien-pracy-to-sie-moze-udac-6658641225959968a.html",
     "audio": {
      "announce": [
       647.6,
       663.3
      ],
      "plays": [
       {
        "start": 673.6,
        "end": 769.5
       },
       {
        "start": 815.3,
        "end": 911.2
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
        "t": "Praca tylko cztery dni w tygodniu, czy to dobry pomysł?"
       },
       {
        "sp": "Dyrektor",
        "t": "Tak, jak najbardziej. Najlepszym przykładem jest nasza firma i organizacja pracy, którą wprowadziliśmy dwa lata temu."
       },
       {
        "sp": "Dziennikarka",
        "t": "Proszę powiedzieć coś więcej na ten temat."
       },
       {
        "sp": "Dyrektor",
        "t": "Zainspirowały nas firmy z Islandii, które pierwsze wprowadziły takie rozwiązanie jeszcze w 2015 roku. Niektórzy mieszkańcy wyspy pracowali tylko 4 dni w tygodniu. W tym czasie można było zobaczyć, jak krótszy tydzień pracy wpłynie na pracowników."
       },
       {
        "sp": "Dziennikarka",
        "t": "O jakich firmach mówimy?"
       },
       {
        "sp": "Dyrektor",
        "t": "O około trzystu firmach prywatnych i państwowych, które zajmują się np. reklamą, handlem, produkcją czy edukacją."
       },
       {
        "sp": "Dziennikarka",
        "t": "Jakie były efekty takiej organizacji pracy?"
       },
       {
        "sp": "Dyrektor",
        "t": "Pracownicy byli mniej zestresowani, bardziej szczęśliwi i mieli więcej wolnego czasu dla rodziny."
       },
       {
        "sp": "Dziennikarka",
        "t": "Czy jakość pracy była taka sama?"
       },
       {
        "sp": "Dyrektor",
        "t": "Osoby, które przepracowały mniej godzin w tygodniu, miały podobne, a nawet lepsze wyniki niż przy normalnym czasie pracy. Należy dodać, że pensja była taka sama i nikt nie zostawał w pracy po godzinach."
       },
       {
        "sp": "Dziennikarka",
        "t": "Czyli można powiedzieć, że pełen sukces. Czy państwa doświadczenia są podobne?"
       },
       {
        "sp": "Dyrektor",
        "t": "Zdecydowanie tak."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "prompt": "Dyrektor dwa lata temu",
      "options": [
       {
        "id": "a",
        "text": "zatrudnił nowych pracowników."
       },
       {
        "id": "b",
        "text": "zmienił system pracy."
       },
       {
        "id": "c",
        "text": "otworzył firmę."
       }
      ],
      "answer": "b",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "prompt": "W Islandii można było zaobserwować,",
       "options": [
        {
         "id": "a",
         "text": "jak zaoszczędzić pieniądze."
        },
        {
         "id": "b",
         "text": "jakie są minusy i plusy pracy przez 4 dni w tygodniu"
        },
        {
         "id": "c",
         "text": "jak pracownicy będą odpoczywać w tygodniu."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.2",
       "number": 2,
       "prompt": "Pracodawcy obserwowali zachowanie",
       "options": [
        {
         "id": "a",
         "text": "dyrektorów instytucji państwowych."
        },
        {
         "id": "b",
         "text": "studentów prywatnych uczelni."
        },
        {
         "id": "c",
         "text": "przedstawicieli różnych zawodów."
        }
       ],
       "answer": "c"
      },
      {
       "id": "l3.3",
       "number": 3,
       "prompt": "Pracownicy",
       "options": [
        {
         "id": "a",
         "text": "czuli się lepiej."
        },
        {
         "id": "b",
         "text": "czuli się zmęczeni."
        },
        {
         "id": "c",
         "text": "zarobili więcej."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l3.4",
       "number": 4,
       "prompt": "Osoby, które pracowały krócej,",
       "options": [
        {
         "id": "a",
         "text": "nie miały ochoty pracować."
        },
        {
         "id": "b",
         "text": "miały lepsze rezultaty niż wcześniej."
        },
        {
         "id": "c",
         "text": "miały problem z organizacją czasu."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.5",
       "number": 5,
       "prompt": "Podczas krótszego tygodnia pracy",
       "options": [
        {
         "id": "a",
         "text": "wynagrodzenie było niższe."
        },
        {
         "id": "b",
         "text": "przerwy na obiad były dłuższe."
        },
        {
         "id": "c",
         "text": "warunki finansowe nie zmieniły się."
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
     "prompt": "Proszę posłuchać rozmowy o historii telefonu i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://www.euro.com.pl/artykuly/wszystkie/artykul-historia-telefonu-kto-i-kiedy-go-wynalazl-jak-sie-zmienial.bhtml",
     "audio": {
      "announce": [
       921.6,
       937.5
      ],
      "plays": [
       {
        "start": 947.7,
        "end": 1044.9
       },
       {
        "start": 1090.9,
        "end": 1188.1
       }
      ],
      "pauseBetweenPlays": 46.0,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Mężczyzna",
        "t": "Wszyscy mówią, że Aleksander Bell jest wynalazcą telefonu, bo to on pod koniec dziewiętnastego wieku jako pierwszy zarejestrował swój wynalazek w Kanadzie. Jednak zasługi Bella nie są takie oczywiste. Ostatnio słuchałem audycji radiowej i dowiedziałem się, że było dwóch inżynierów, którzy jednocześnie pracowali nad projektem telefonu. Jeden w USA – Elisha Gray, a drugi w Kanadzie – Aleksander Bell. Amerykański inżynier zarejestrował swój telefon dwie godziny później niż Aleksander Bell i to dlatego teraz wszyscy uważają, że pierwszy telefon wymyślił Bell."
       },
       {
        "sp": "Kobieta",
        "t": "Naprawdę? Nie miałam o tym pojęcia…"
       },
       {
        "sp": "Mężczyzna",
        "t": "Jednak tak naprawdę ani jeden, ani drugi naukowiec nie jest prawdziwym ojcem telefonu. Pierwsze urządzenie skonstruował około 20 lat wcześniej Antonio Meucci. Włoski inżynier opracował aparat, który pomagał mu rozmawiać z chorą żoną, kiedy pracował w warsztacie. Połączył pierwsze piętro domu, na którym była sypialnia żony, z piwnicą, gdzie znajdował się jego warsztat. W kolejnych latach ulepszył urządzenie i zdecydował się pokazać je światu. Opublikował nawet na ten temat artykuł w nowojorskiej gazecie. Niestety ze względu na brak pieniędzy nie mógł zarejestrować swojego projektu. Kosztowało to wtedy aż 250 dolarów."
       }
      ]
     },
     "example": {
      "id": "l4.ex",
      "statement": "Ludzie uważają, że Aleksander Bell stworzył telefon.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "statement": "Mężczyzna przeczytał artykuł w gazecie na temat historii telefonu.",
       "answer": "NIE"
      },
      {
       "id": "l4.2",
       "number": 2,
       "statement": "Pierwszym nieoficjalnym twórcą telefonu był Amerykanin.",
       "answer": "NIE"
      },
      {
       "id": "l4.3",
       "number": 3,
       "statement": "Włoch skonstruował swoje urządzenie, żeby komunikować się z bliską osobą.",
       "answer": "TAK"
      },
      {
       "id": "l4.4",
       "number": 4,
       "statement": "Pierwszy telefon łączył ze sobą kilka domów.",
       "answer": "NIE"
      },
      {
       "id": "l4.5",
       "number": 5,
       "statement": "Rejestracja urządzenia była dla Włocha za droga.",
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
     "prompt": "Proszę posłuchać wypowiedzi studentów na temat miejsc, w których mieszkają oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 7,
     "source": "Na podstawie: https://www.bankier.pl/wiadomosc/Jak-mieszkaja-polscy-studenci-1973067.html http://zdrowystudent.pl/gdzie-mieszkac-na-studiach/",
     "audio": {
      "announce": [
       1198.7,
       1214.7
      ],
      "plays": [
       {
        "start": 1224.9,
        "end": 1342.8
       },
       {
        "start": 1388.2,
        "end": 1506.1
       }
      ],
      "pauseBetweenPlays": 45.4,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Ania (K)",
        "t": "Nie musiałam szukać nowego mieszkania. Mogłam zostać w domu z mamą i tatą i zaoszczędzić pieniądze. Minusem jest to, że na uniwersytet jadę 40 minut. Za to mam swój pokój i mogę uczyć się w ciszy."
       },
       {
        "sp": "Piotr (M)",
        "t": "Mieszkam na terenie kampusu uniwersyteckiego razem z innymi studentami. Czasami jest bardzo głośno i trudno jest przygotowywać się do egzaminów w takich warunkach."
       },
       {
        "sp": "Magda (K)",
        "t": "Moi rodzice kupili mi kawalerkę, która jest dosyć mała, ale dla jednej osoby miejsca wystarczy. Sama o wszystkim decyduję, sama też płacę rachunki."
       },
       {
        "sp": "Damian (M)",
        "t": "Chociaż mogłem dostać pokój w akademiku, to jednak z tego zrezygnowałem Wolę mieszkać ze współlokatorem w mieszkaniu dwupokojowym. Bardzo mi to pasuje, bo wszystkie opłaty dzielimy na pół."
       },
       {
        "sp": "Ula (K)",
        "t": "Już nie mieszkam ani z rodzicami, ani ze współlokatorami. Dzięki temu mam większą prywatność i nikt mi nie przeszkadza. Miesięczny czynsz nie jest zbyt wysoki, a właścicielka jest bardzo miła i pomocna."
       },
       {
        "sp": "Kamil (M)",
        "t": "Zdecydowałem się studiować w innym mieście ze względu na dziadków. Mieszkam z nimi, nie muszę płacić za wynajem, ale od czasu do czasu robię większe zakupy i pomagam im w pracach domowych."
       }
      ]
     },
     "options": [
      {
       "id": "A",
       "text": "mieszka w akademiku."
      },
      {
       "id": "B",
       "text": "mieszka z rodzicami."
      },
      {
       "id": "C",
       "text": "ma własne mieszkanie."
      },
      {
       "id": "D",
       "text": "wynajmuje mieszkanie z kolegą."
      },
      {
       "id": "E",
       "text": "mieszka z bliskimi."
      },
      {
       "id": "F",
       "text": "samodzielnie wynajmuje mieszkanie."
      }
     ],
     "example": {
      "id": "l5.ex",
      "prompt": "Ania",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "l5.1",
       "number": 1,
       "prompt": "Piotr",
       "answer": "A"
      },
      {
       "id": "l5.2",
       "number": 2,
       "prompt": "Magda",
       "answer": "C"
      },
      {
       "id": "l5.3",
       "number": 3,
       "prompt": "Damian",
       "answer": "D"
      },
      {
       "id": "l5.4",
       "number": 4,
       "prompt": "Ula",
       "answer": "F"
      },
      {
       "id": "l5.5",
       "number": 5,
       "prompt": "Kamil",
       "answer": "E"
      }
     ],
     "pdfNotes": [
      "Transcript speakers are unlabelled in transcript.pdf (Przykład, 1.-5., gender in brackets); the names are those of the booklet's column I in the same order."
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
       "text": "W 2021 roku kobiety założyły co trzecią polską firmę usługową. Polki prowadziły aż 75% małych biznesów branży kosmetycznej. W dużych korporacjach tylko 26% pań to menedżerowie czy dyrektorzy, ale rok wcześniej było ich o kilka procent mniej.",
       "source": "Na podstawie: https://nysa.naszemiasto.pl/co-trzecia-firme-w-polsce-zalozyla-kobieta-startuje-xiii/ar/c3-8538905"
      },
      "prompt": "Z tego tekstu wynika, że w Polsce w 2021 roku kobiety",
      "options": [
       {
        "id": "a",
        "text": "prowadziły większość firm usługowych."
       },
       {
        "id": "b",
        "text": "były właścicielkami ponad połowy firm kosmetycznych."
       },
       {
        "id": "c",
        "text": "miały słabszą pozycję w dużych firmach niż rok temu."
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
        "text": "Mieszkańcy Krakowa już po raz dziesiąty sadzą rośliny przy największych ulicach. Wiosną będziemy mogli podziwiać pierwsze kompozycje kwiatów i krzewów, które zostały wybrane tak, aby były atrakcyjne o każdej porze roku.",
        "source": "Na podstawie: https://krakow.naszemiasto.pl/niemal-400-tys-nowych-kwiatow-w-krakowie-wiosna-miasto/ar/c1-8539389"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "jest to pierwsza akcja sadzenia kwiatów."
        },
        {
         "id": "b",
         "text": "kwiaty będzie można zobaczyć w parkach."
        },
        {
         "id": "c",
         "text": "rośliny będą wyglądały ładnie przez cały rok."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "Jak szybko można jeździć samochodem po mieście? Od czerwca tego roku maksymalna prędkość to 50 km/h niezależnie od pory dnia. Wcześniej w nocy można było jechać autem do 60 km/h. Zgodnie z nowym prawem piesi nie mogą używać telefonów komórkowych na pasach.",
        "source": "Na podstawie: https://www.autobaza.pl/page/portal/news/uwaga-od-dzis-wchodza-w-zycie-nowe-przepisy-ruchu-drogowego/"
       },
       "prompt": "Z tego tekstu wynika, że obecnie",
       "options": [
        {
         "id": "a",
         "text": "maksymalna prędkość jazdy nocą to 60 km/h."
        },
        {
         "id": "b",
         "text": "limit prędkości dla samochodów nie zależy od pory dnia."
        },
        {
         "id": "c",
         "text": "w pobliżu pasów kierowcy nie mogą jechać szybko."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Młodzi artyści namalowali obraz, który przedstawia Kazimierza Górskiego oraz jego słynny cytat: „Piłka jest okrągła, a bramki są dwie”. Dzieło powstało w 100. rocznicę urodzin znanego Polaka. Znajduje się ono na ścianie bloku w Warszawie, gdzie przez wiele lat mieszkał legendarny polski trener.",
        "source": "Na podstawie: https://www.money.pl/galerie/artykul/najslynniejsi-polacy-w-usa,138,8,2210698.html"
       },
       "prompt": "Z tego tekstu wynika, że Kazimierz Górski",
       "options": [
        {
         "id": "a",
         "text": "urodził się sto lat przed powstaniem obrazu."
        },
        {
         "id": "b",
         "text": "był autorem książki o piłce nożnej."
        },
        {
         "id": "c",
         "text": "był popularnym polskim piłkarzem."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Małe mieszkanie to prawdziwy test dla projektanta wnętrz. Lustra są idealnym elementem dekoracji, bo dają wrażenie większej przestrzeni. W sklepach nie znajdziemy jednak wielu kształtów i rozmiarów luster, dlatego czasem trzeba przygotowywać je na zamówienie.",
        "source": "Na podstawie: https://ladnydom.pl/lustra-dekoracyjne-ktore-odmieniaja-wnetrza"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "łatwo zaprojektować wnętrza małych mieszkań."
        },
        {
         "id": "b",
         "text": "niektóre kształty luster trzeba wcześniej zamówić."
        },
        {
         "id": "c",
         "text": "w sklepach jest bardzo duży wybór luster."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "Dzisiaj rano doszło do pożaru zabytkowego pałacu w Korczewie. W akcji ratunkowej brało udział trzydziestu strażaków. Ogień zajął cały dach budynku, dostał się też na pierwsze piętro. W pałacu byli pracownicy, którzy remontowali budynek, ale nie ma jeszcze informacji o rannych osobach.",
        "source": "https://wiadomosci.radiozet.pl/Polska/Pozar-palacu-w-Korczewie.-Splonal-caly-dach-runal-strop"
       },
       "prompt": "Z tego tekstu wynika, że po pożarze",
       "options": [
        {
         "id": "a",
         "text": "nie wiadomo, czy są ranne osoby."
        },
        {
         "id": "b",
         "text": "było rannych wielu strażaków."
        },
        {
         "id": "c",
         "text": "jest niewiele osób rannych."
        }
       ],
       "answer": "a"
      }
     ],
     "pdfNotes": [
      "Item 3 source URL is printed with a trailing ' /' in the booklet (dropped); item 5 source is printed without the 'Na podstawie:' prefix (kept as printed)."
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
     "title": "Połączyła ich miłość do zwierząt",
     "source": "Na podstawie: https://kobieta.onet.pl/wiadomosci/nie-byl-jej-pierwszym-mezem-sekrety-hanny-gucwinskiej/dgn09f9",
     "passage": "Hanna i Antoni Gucwińscy to małżeństwo zoologów, które stworzyło popularny program „Z kamerą wśród zwierząt”. Był on transmitowany w polskiej telewizji przez 32 lata.\n\nKiedy Hanna i Antoni się poznali, Hanna była już mężatką dwa razy. Pierwszego męża nie kochała. Wyszła za niego za mąż tylko dlatego, że był bogaty i pomógł rodzinie Hanny, która miała kłopoty finansowe. Mąż Hanny miał naprawdę dużo pieniędzy i jej rodzice nie musieli sprzedawać rodzinnego domu. Wkrótce para się rozstała. Drugie małżeństwo Hanny także nie było szczęśliwe. Jej mąż Bernard większość czasu spędzał w pracy za granicą, a ona sama musiała dbać o mieszkanie i zajmować się codziennymi sprawami. Po kilku latach zdecydowała się na kolejny rozwód.\n\nPrzyjaźń Hanny i Antoniego, który mieszkał w tym samym budynku co ona, rozwijała się przez kilka lat. Wspólna praca w zoo, codzienne problemy i zainteresowanie zwierzętami bardzo zbliżyły do siebie przyjaciół. W 1962 roku, trzy miesiące po drugim rozwodzie Hanny, para wzięła ślub.\n\nW 1971 roku małżeństwo zaczęło prowadzić program „Z kamerą wśród zwierząt”. Oboje nie mieli doświadczenia w pracy w telewizji. Dodatkowo bali się reakcji zwierząt na nową sytuację. Na szczęście niektóre małpy czy papugi mieszkały w domu Hanny i Antoniego, więc były przyzwyczajone do ludzi i zachowywały się bardzo naturalnie przed kamerą.\n\nNa kolejne odcinki programu widzowie czekali z niecierpliwością, ponieważ dla wielu z nich była to jedyna okazja, by zobaczyć zwierzęta z zoo we Wrocławiu, które pochodziły z różnych części świata i dowiedzieć się czegoś na ich temat.",
     "example": {
      "id": "r2.ex",
      "statement": "Małżeństwo przez ponad 30 lat prowadziło program o zwierzętach.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Pierwsze małżeństwo pomogło Hannie uratować rodzinny dom.",
       "answer": "TAK"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Bernard zabierał Hannę w podróże zagraniczne.",
       "answer": "NIE"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Antoni to drugi mąż Hanny.",
       "answer": "NIE"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Antoni był sąsiadem Hanny i jej kolegą z pracy.",
       "answer": "TAK"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "W 1971 roku Antoni i Hanna zostali małżeństwem.",
       "answer": "NIE"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "W programie państwa Gucwińskich występowały zwierzęta z ogrodów zoologicznych z całego świata.",
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
     "title": "Spacer zamiast spotkania w biurze",
     "source": "Na podstawie: https://www.ican.pl/b/zamiast-siedziec-lepiej-chodzic-o-efektywnosci-spotkan-biznesowych/11wV02V8j",
     "passage": "Idea „chodź i rozmawiaj” staje się coraz bardziej popularna w Polsce. To nowy rodzaj spotkania biznesowego, {{ex}}. W ten sposób jednocześnie załatwiamy sprawy zawodowe {{1}}.\n\nPomysł na rozmowę w ruchu jest bardzo stary, ponieważ już tysiące lat temu Arystoteles odkrył {{2}}. Jego filozoficzne dyskusje bardzo często odbywały się podczas spacerów.\n\nW XXI wieku polskie firmy powoli wprowadzają ideę „chodź i rozmawiaj”, {{3}}. Tę nową modę promują szczególnie menedżerowie dużych amerykańskich korporacji. Założyciel znanej marki komputerów {{4}} właśnie w czasie spacerów. Spotkania służbowe w takiej formie pomagają się zrelaksować i zachować dobre relacje w zespole. Zwiększają też efekty pracy, {{5}} – nie ma telefonów, e-maili, nikt nie przerywa nam rozmowy.\n\nNależy pamiętać, że brak ruchu jest poważnym problemem naszych czasów. Siedzący tryb życia {{6}}, a chodzenie może leczyć wiele chorób. Naukowcy uważają, że osoba, {{7}}, powinna spacerować minimum 2 godziny dziennie. Dlatego biznesowe spotkania na świeżym powietrzu pomogą nam nie tylko w pracy, ale także pozytywnie wpłyną na nasze zdrowie.",
     "options": [
      {
       "id": "A",
       "text": "pierwszych partnerów biznesowych poznawał"
      },
      {
       "id": "B",
       "text": "podczas którego nie siedzimy, a spacerujemy"
      },
      {
       "id": "C",
       "text": "jest bardzo szkodliwy dla naszego organizmu"
      },
      {
       "id": "D",
       "text": "ponieważ możemy łatwiej się skoncentrować"
      },
      {
       "id": "E",
       "text": "która pracuje w biurze"
      },
      {
       "id": "F",
       "text": "która jest już popularna w Stanach Zjednoczonych"
      },
      {
       "id": "G",
       "text": "oraz dbamy o zdrowie"
      },
      {
       "id": "H",
       "text": "pozytywny wpływ chodzenia na myślenie"
      }
     ],
     "example": {
      "gap": "ex",
      "answer": "B",
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
       "answer": "A"
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
       "answer": "C"
      },
      {
       "id": "r3.7",
       "number": 7,
       "gap": "7",
       "answer": "E"
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
     "source": "Na podstawie: https://zrabatowani.pl/blog/top-10-typow-klientow-czyli-jak-powinien-zachowac-sie-sprzedawca/",
     "heading": "Jakim typem klienta jesteś?",
     "options": [
      {
       "id": "A",
       "text": "Od razu wie, że ten produkt nie jest dla niego. Za kilka dni znowu odwiedzi sklep, żeby oddać towar."
      },
      {
       "id": "B",
       "text": "Pyta o najmniejsze szczegóły produktu, jednak ostatecznie rzadko decyduje się na zakup."
      },
      {
       "id": "C",
       "text": "Interesuje go tylko to, czy zakupiona rzecz jest najlepsza. Cena nie jest ważna – im wyższa, tym jest bardziej zadowolony."
      },
      {
       "id": "D",
       "text": "Zadaje wiele pytań, ale na każde i tak zna odpowiedź. Przeczytał już prawie wszystko w internecie, a instrukcje obsługi umie na pamięć."
      },
      {
       "id": "E",
       "text": "Najchętniej pojawia się w centrum handlowym podczas wyprzedaży. Według niego nie warto wchodzić do sklepu, który nie oferuje promocji."
      },
      {
       "id": "F",
       "text": "Zwykle długo dyskutuje ze sprzedawcami, np. na temat ceny, która zawsze jest za wysoka, koloru, który jest nieładny czy niepraktycznych funkcji towaru."
      },
      {
       "id": "G",
       "text": "Kupuje mało, wydaje niewiele. Chętnie chodzi do sklepów, gdzie można dostać darmowe próbki produktów, bo uwielbia je zbierać."
      },
      {
       "id": "H",
       "text": "Spędza minimum 20 minut na powolnym chodzeniu po jednym sklepie, ale zazwyczaj wraca do domu z pustą torbą."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Klient, który nie umie się zdecydować",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Klient, który szuka wad",
       "answer": "F"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Klient, który jest kolekcjonerem",
       "answer": "G"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Klient, który uwielbia zwroty",
       "answer": "A"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Klient, który wie wszystko",
       "answer": "D"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Klient, który lubi spacerować",
       "answer": "H"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Klient, który ma dużo pieniędzy",
       "answer": "C"
      },
      {
       "id": "r4.7",
       "number": 7,
       "prompt": "Klient, który szuka rabatów",
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
     "title": "Dołącz do Akademii Przyszłości!",
     "source": "Na podstawie: https://ochotnicy.waw.pl/profile/profil/3541 http://mammarzenie.org/katowice/",
     "passage": "Wolontariusz „Akademii Przyszłości” to prawdziwy bohater! Dlaczego? Ponieważ pomaga dziecku, które ma niską samoocenę i boi się {{ex}} swoje marzenia. {{1}} wolontariusze poznają specjalny program motywacyjny, którego uczą dzieci podczas zajęć. Dzięki takim lekcjom i regularnej pracy stan psychiczny dziecka zmienia się na {{2}}. Aż 96% młodych uczestników projektu „Akademia Przyszłości” {{3}} wierzyć w siebie!\n\nCo da ci wolontariat? Przede wszystkim satysfakcję oraz kontakt nie tylko z dziećmi, ale również spotkania z artystami, dziennikarzami czy {{4}} biznesmenami, którzy angażują się w akcje charytatywne.\n\nCo zrobić, żeby zostać wolontariuszem? Pobierz ankietę zgłoszeniową ze strony Akademii, wypełnij ją i wyślij na nasz adres. Skontaktuj się z naszym wolontariuszem, aby {{5}} na spotkanie informacyjne. Możesz napisać na {{6}} wolontariat@akademia.com lub zadzwonić (tel. 678 766 511). Następnie przez trzy miesiące {{7}} okres próbny, poznajesz teorię i praktykę. Potem decydujesz, czy chcesz zostać wolontariuszem, czy rezygnujesz. Jeśli spodoba ci się to zajęcie, to zdajesz {{8}}, następnie podpisujesz umowę i stajesz się oficjalnym wolontariuszem „Akademii Przyszłości”.\n\nPotrafisz współpracować z innymi i jesteś {{9}} na ludzi? Chcesz zmieniać świat i nie boisz się nowych zadań? Jeśli tak, to zapraszamy – zgłoś się do {{10}} „Akademia Przyszłości”!",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "spełniać",
        "robić",
        "działać"
       ],
       "answer": "spełniać"
      },
      {
       "id": "1",
       "options": [
        "Później",
        "Najpierw",
        "Dawniej"
       ],
       "answer": "Najpierw"
      },
      {
       "id": "2",
       "options": [
        "gorsze",
        "większe",
        "lepsze"
       ],
       "answer": "lepsze"
      },
      {
       "id": "3",
       "options": [
        "zaczyna",
        "staje",
        "czuje"
       ],
       "answer": "zaczyna"
      },
      {
       "id": "4",
       "options": [
        "lokalnymi",
        "rodzinnymi",
        "familijnymi"
       ],
       "answer": "lokalnymi"
      },
      {
       "id": "5",
       "options": [
        "zorganizować",
        "umówić się",
        "wybrać"
       ],
       "answer": "umówić się"
      },
      {
       "id": "6",
       "options": [
        "adres",
        "numer",
        "stronę"
       ],
       "answer": "adres"
      },
      {
       "id": "7",
       "options": [
        "kierujesz",
        "odbywasz",
        "pracujesz"
       ],
       "answer": "odbywasz"
      },
      {
       "id": "8",
       "options": [
        "pytania",
        "test",
        "sprawę"
       ],
       "answer": "test"
      },
      {
       "id": "9",
       "options": [
        "rozmowny",
        "otwarty",
        "znany"
       ],
       "answer": "otwarty"
      },
      {
       "id": "10",
       "options": [
        "programu",
        "celu",
        "urzędu"
       ],
       "answer": "programu"
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
     "source": "Na podstawie: „Świat Wiedzy. Kosmos”, wydanie specjalne, nr 3/2021",
     "passage": "Jak ustalili {{ex1}}, nie wszystkie dinozaury wyginęły w dniu {{ex2}} kosmicznej katastrofy. Przyczyną {{ex3}} śmierci była głównie zmiana klimatu, która nastąpiła po uderzeniu planetoidy. Przed {{1}} katastrofą temperatura na {{2}} Ziemi była {{3}}. Po uderzeniu spadła o 10 stopni Celsjusza. Dla zwierząt {{4}} to ochłodzenie okazało się niebezpieczne. Ich {{5}} nie były przygotowane na {{6}} {{7}}. W lepszej sytuacji znajdowały się zwierzęta, które żyły w {{8}}. Jednak i dla {{9}} zmieniły się warunki życia z powodu {{10}} słońca. To wszystko doprowadziło do zmian w środowisku zwierząt.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "naukowcy",
        "naukowcom",
        "naukowiec"
       ],
       "answer": "naukowcy"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "wielkich",
        "wielką",
        "wielkiej"
       ],
       "answer": "wielkiej"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "jego",
        "ich",
        "im"
       ],
       "answer": "ich"
      },
      {
       "id": "1",
       "options": [
        "tę",
        "tą",
        "ta"
       ],
       "answer": "tą"
      },
      {
       "id": "2",
       "options": [
        "całe",
        "cały",
        "całej"
       ],
       "answer": "całej"
      },
      {
       "id": "3",
       "options": [
        "wysoka",
        "wysoką",
        "wysokie"
       ],
       "answer": "wysoka"
      },
      {
       "id": "4",
       "options": [
        "lądowym",
        "lądowych",
        "lądowe"
       ],
       "answer": "lądowych"
      },
      {
       "id": "5",
       "options": [
        "organizmach",
        "organizmy",
        "organizmów"
       ],
       "answer": "organizmy"
      },
      {
       "id": "6",
       "options": [
        "takie",
        "takich",
        "takim"
       ],
       "answer": "takie"
      },
      {
       "id": "7",
       "options": [
        "warunkach",
        "warunków",
        "warunki"
       ],
       "answer": "warunki"
      },
      {
       "id": "8",
       "options": [
        "wodzie",
        "wodą",
        "wody"
       ],
       "answer": "wodzie"
      },
      {
       "id": "9",
       "options": [
        "nich",
        "ich",
        "nim"
       ],
       "answer": "nich"
      },
      {
       "id": "10",
       "options": [
        "brakiem",
        "braków",
        "braku"
       ],
       "answer": "braku"
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
     "source": "Na podstawie: https://jarmarkswdominika.pl/o-jarmarku.qbpage",
     "wordBox": [
      "a",
      "i",
      "ponieważ",
      "żeby",
      "jednak",
      "lub",
      "więc"
     ],
     "distractors": [
      "więc"
     ],
     "passage": "Na słynnym Jarmarku św. Dominika w Gdańsku ludzie rozmawiają, kupują {{ex}} dobrze się bawią. Jest głośno, kolorowo i ciekawie, {{1}} prawie wszędzie coś się dzieje. Historia tego wydarzenia zaczęła się w XIII wieku. Przez wiele lat jarmark cieszył się wielkim zainteresowaniem, {{2}} tradycję organizowania imprezy przerwała II wojna światowa. W 1972 roku jarmark znów się odbył, {{3}} zwyczaj organizowania go istnieje do dziś. Tradycją jest to, że prezydent miasta przekazuje kupcom klucze do bram Gdańska, {{4}} impreza mogła się zacząć. Na Jarmark św. Dominika przyjeżdżają tłumy turystów, aby znaleźć coś wyjątkowego do kupienia {{5}} tylko przeżyć piękne chwile.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "i"
      },
      {
       "id": "1",
       "answer": "ponieważ"
      },
      {
       "id": "2",
       "answer": "jednak"
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
       "answer": "lub"
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
     "source": "Na podstawie: https://www.nocowanie.pl/top-10-miejsc-ktore-warto-zobaczyc-na-kaszubach.html",
     "passage": "Kaszuby są regionem położonym na północy Polski i nazywanym krainą tysiąca jezior. Za jedno z {{ex1}} z nich uważa się Wdzydze. To {{ex2}} duże, czyste i głębokie jezioro. Niektórzy sądzą, że jest ono {{1}} miejscem do kąpieli i do uprawiania sportów wodnych niż Bałtyk. {{2}} miejscowością wypoczynkową nad tym jeziorem są Wdzydze Kiszewskie. To właśnie tam {{3}} odpoczywają turyści. Atrakcją jest też {{4}} w Polsce park etnograficzny, a w nim drewniane domy i inne zabytkowe obiekty z całego regionu. Warto go odwiedzić, aby dowiedzieć się {{5}} o dawnym życiu ludzi na Pomorzu.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "pięknych",
        "najpiękniejszych",
        "najpiękniejsze"
       ],
       "answer": "najpiękniejszych"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "bardzo",
        "bardziej",
        "najbardziej"
       ],
       "answer": "bardzo"
      },
      {
       "id": "1",
       "options": [
        "lepszym",
        "najlepszym",
        "lepsze"
       ],
       "answer": "lepszym"
      },
      {
       "id": "2",
       "options": [
        "Większą",
        "Największą",
        "Największej"
       ],
       "answer": "Największą"
      },
      {
       "id": "3",
       "options": [
        "częstszych",
        "częstsze",
        "najczęściej"
       ],
       "answer": "najczęściej"
      },
      {
       "id": "4",
       "options": [
        "starszy",
        "najstarszy",
        "stary"
       ],
       "answer": "najstarszy"
      },
      {
       "id": "5",
       "options": [
        "większe",
        "więcej",
        "większym"
       ],
       "answer": "więcej"
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
     "source": "Na podstawie: https://odkryjpomorze.pl/pokaz_obiekt-1947-FETA_24_Festiwal_Teatrow_Plenerowych_i_Ulicznych_impreza_przeniesiona_na_2022_rok.html",
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "Pierwszy Międzynarodowy Festiwal Teatrów Plenerowych i Ulicznych FETA {{ex1}} w Gdańsku w 1997 roku. Został przygotowany z okazji 1000-lecia miasta. Do dziś {{ex2}} jednym z najważniejszych wydarzeń artystycznych w Polsce.\n\nW wydarzeniu tym zwykle bierze udział około 30 grup artystów z całego świata. Tak jest również w tym roku, festiwal właśnie trwa, obecnie aktorzy {{1}} spektakle adresowane do widzów w różnym wieku i z różnym wykształceniem. Artyści {{2}} w nich uwagę na ważne problemy współczesnego świata, {{3}} i jednocześnie {{4}}. Dzięki temu festiwalowi każdy zainteresowany mieszkaniec Gdańska albo turysta {{5}} też co roku poznawać współczesne teatry uliczne.\n\nW zeszłym roku festiwal {{6}} 25. urodziny. Z okazji tego jubileuszu organizatorzy {{7}} dla mieszkańców Gdańska wiele niespodzianek. Na przystankach autobusowych za zgodą władz miasta wolontariuszki {{8}} piękne plakaty i zdjęcia ze starych przedstawień. W ciągu tych 25 lat festiwal {{9}} kilka ważnych międzynarodowych nagród, a do Gdańska {{10}} artyści z całego świata.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "odbyć się",
       "answer": "odbył się"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "być",
       "answer": "jest"
      },
      {
       "id": "1",
       "given": "prezentować",
       "answer": "prezentują"
      },
      {
       "id": "2",
       "given": "zwracać",
       "answer": "zwracają"
      },
      {
       "id": "3",
       "given": "uczyć",
       "answer": "uczą"
      },
      {
       "id": "4",
       "given": "bawić",
       "answer": "bawią"
      },
      {
       "id": "5",
       "given": "móc",
       "answer": "może"
      },
      {
       "id": "6",
       "given": "obchodzić",
       "answer": "obchodził"
      },
      {
       "id": "7",
       "given": "przygotować",
       "answer": "przygotowali"
      },
      {
       "id": "8",
       "given": "powiesić",
       "answer": "powiesiły"
      },
      {
       "id": "9",
       "given": "zdobyć",
       "answer": "zdobył"
      },
      {
       "id": "10",
       "given": "przyjeżdżać",
       "answer": "przyjeżdżali"
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
      "sentence": "Antonina pojechała wczoraj do Krakowa.",
      "underlined": "wczoraj",
      "stem": "Kiedy Antonina pojechała do Krakowa?",
      "shortAnswer": "Wczoraj.",
      "answer": "Kiedy",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Ojciec poszedł z synem na spacer.",
       "underlined": "z synem",
       "stem": "……………… ojciec poszedł na spacer?",
       "shortAnswer": "Z synem.",
       "answer": "Z kim",
       "accept": []
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Mali chłopcy bawią się wesoło.",
       "underlined": "Mali",
       "stem": "……………… chłopcy bawią się wesoło?",
       "shortAnswer": "Mali.",
       "answer": "Jacy",
       "accept": []
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Małgosi nie było dziś na lekcjach.",
       "underlined": "Małgosi",
       "stem": "……………… nie było dziś na lekcjach?",
       "shortAnswer": "Małgosi.",
       "answer": "Kogo",
       "accept": []
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Staś poprosił Zosię o pomarańczę.",
       "underlined": "o pomarańczę",
       "stem": "……………… Staś poprosił Zosię?",
       "shortAnswer": "O pomarańczę.",
       "answer": "O co",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "To jest pióro Janka.",
       "underlined": "Janka",
       "stem": "……………… jest to pióro?",
       "shortAnswer": "Janka",
       "answer": "Czyje",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Official key prints the question word with a trailing '?' (Z kim?, Jacy?); stored without it, match.stripChars ignores the decoration.",
      "The worked example prints the complete question ('Kiedy Antonina pojechała do Krakowa?'), so its stem has no gap."
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
      "source": "Marek w czasie wakacji jeździ nad morze.",
      "hint": "spędza",
      "answer": "Marek spędza wakacje nad morzem.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "Jakiego koloru jest twój nowy dywan?",
       "hint": "ma",
       "answer": "Jaki kolor ma twój nowy dywan?",
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
       "source": "Mama narzeka, że cena jabłek jest wysoka.",
       "hint": "na",
       "answer": "Mama narzeka na wysoką cenę jabłek.",
       "rubric": "odpowiednio użyty przyimek 0,25 + 2 transformacje (2 x 0,25) + brak transformacji 0,25",
       "rubricParts": [
        {
         "what": "odpowiednio użyty przyimek",
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
       "id": "g6.3",
       "number": 3,
       "source": "Zosia przygląda się małym pieskom.",
       "hint": "patrzy",
       "answer": "Zosia patrzy na małe pieski.",
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
       "id": "g6.4",
       "number": 4,
       "source": "Jakub dał mamie kwiaty.",
       "hint": "dostała",
       "answer": "Mama dostała od Jakuba kwiaty.",
       "rubric": "3 transformacje (3 x 0,25) + odpowiedni przyimek 0,25",
       "rubricParts": [
        {
         "what": "3 transformacje",
         "points": 0.75
        },
        {
         "what": "odpowiedni przyimek",
         "points": 0.25
        }
       ]
      },
      {
       "id": "g6.5",
       "number": 5,
       "source": "Nie znam tej kobiety.",
       "hint": "kim",
       "answer": "Nie wiem, kim jest ta kobieta.",
       "rubric": "2 odpowiednie czasowniki (2 x 0,25) + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "2 odpowiednie czasowniki",
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
     "passage": "Kochana Basiu,\n\n{{ex1}} sobie wyobrazić, jak wczoraj się ucieszyłam! Pięć minut przed końcem pracy szef zapytał mnie i Piotra: „{{ex2}} w przyszłym tygodniu mieć dodatkowy dzień wolny? Jeśli tak, {{1}}, czy to ma być poniedziałek, czy piątek”. {{2}}, jak zareagowaliśmy! Prawie skakaliśmy z radości. Oczywiście wybraliśmy piątek.\n\nPomyśleliśmy od razu, że w końcu będziemy mogli Cię odwiedzić. Gdyby termin Ci {{3}}, {{4}} do Krakowa już w piątek rano. Piotr ma zamiar od razu z lotniska pojechać na wystawę do Muzeum Sztuki i Techniki Japońskiej, a ja {{5}} pójść do Muzeum Narodowego. Bardzo chcę zobaczyć obrazy Jacka Malczewskiego, o których tyle mi pisałaś w ostatnim mailu.\n\nCzy {{6}} się spotkać z nami po pracy, żeby wspólnie zjeść obiad? Może we troje {{7}} później do Sukiennic albo na jakieś przedstawienie? Niech Twój brat nam {{8}}, czy będzie w tym dniu jakiś ciekawy spektakl w Teatrze Słowackiego.\n\n{{9}} mi, czy będziemy mogli u Ciebie przenocować. Jeśli nie, {{10}} nam, proszę, pokój w jakimś niedrogim hotelu blisko centrum miasta.\n\nPozdrawiam Cię serdecznie\nAnia",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "spróbuj",
        "spróbujcie",
        "spróbowałabyś"
       ],
       "answer": "spróbuj"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "Chciałybyście",
        "Chcielibyście",
        "Chcielibyśmy"
       ],
       "answer": "Chcielibyście"
      },
      {
       "id": "1",
       "options": [
        "niech wybiorą",
        "wybralibyście",
        "wybierzcie"
       ],
       "answer": "wybierzcie"
      },
      {
       "id": "2",
       "options": [
        "Zgadnijmy",
        "Zgadłabyś",
        "Zgadnij"
       ],
       "answer": "Zgadnij"
      },
      {
       "id": "3",
       "options": [
        "pasował",
        "niech pasuje",
        "pasowałby"
       ],
       "answer": "pasował"
      },
      {
       "id": "4",
       "options": [
        "przylecieliby",
        "przylecielibyśmy",
        "latalibyśmy"
       ],
       "answer": "przylecielibyśmy"
      },
      {
       "id": "5",
       "options": [
        "wolałabym",
        "wolałaby",
        "wolałbym"
       ],
       "answer": "wolałabym"
      },
      {
       "id": "6",
       "options": [
        "mogłaby",
        "mogłabyś",
        "mógłbyś"
       ],
       "answer": "mogłabyś"
      },
      {
       "id": "7",
       "options": [
        "szlibyśmy",
        "chodzilibyśmy",
        "poszlibyśmy"
       ],
       "answer": "poszlibyśmy"
      },
      {
       "id": "8",
       "options": [
        "powie",
        "powiedziałby",
        "mówiłby"
       ],
       "answer": "powie"
      },
      {
       "id": "9",
       "options": [
        "Pisz",
        "Napisz",
        "Napisałaby"
       ],
       "answer": "Napisz"
      },
      {
       "id": "10",
       "options": [
        "zarezerwuj",
        "rezerwuj",
        "rezerwowałabyś"
       ],
       "answer": "zarezerwuj"
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
      "w",
      "na",
      "z",
      "przez",
      "do",
      "pod",
      "dla"
     ],
     "distractors": [
      "do"
     ],
     "passage": "Sprzedam tanio mieszkanie (35m²) {{ex}} malowniczej okolicy. Jest to kawalerka, która składa się {{1}} kuchni, łazienki i dużego salonu. Nie ma balkonu, ale na dachu znajduje się wielki taras przeznaczony {{2}} wszystkich mieszkańców bloku. Z okna salonu jest piękny widok {{3}} las i jezioro. Za kilka dni na parterze budynku zostanie otwarta siłownia (będzie czynna {{4}} całą dobę). Aby uzyskać więcej informacji, proszę dzwonić {{5}} numer 987654321.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "w"
      },
      {
       "id": "1",
       "answer": "z"
      },
      {
       "id": "2",
       "answer": "dla"
      },
      {
       "id": "3",
       "answer": "na"
      },
      {
       "id": "4",
       "answer": "przez"
      },
      {
       "id": "5",
       "answer": "pod"
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
         "wordTarget": 30,
         "prompt": "Chce Pani/Pan sprzedać używany telefon. Proszę napisać ogłoszenie, które zamieści Pani/Pan na polskiej stronie internetowej."
        },
        {
         "id": "b",
         "genre": "sprawozdanie",
         "wordTarget": 170,
         "prompt": "Razem z koleżankami i kolegami z kursu języka polskiego była Pani / był Pan na spotkaniu ze znaną osobą / na koncercie. Proszę napisać sprawozdanie (relację) do gazetki „Cześć! Co Słychać?”, którą wydaje szkoła językowa."
        }
       ]
      },
      {
       "id": "II",
       "parts": [
        {
         "id": "a",
         "genre": "życzenia",
         "wordTarget": 30,
         "prompt": "Wyjechała Pani / Wyjechał Pan na kilka miesięcy za granicę. Starsza sąsiadka, obok której mieszka Pani/Pan w Polsce, ma urodziny. Proszę napisać do niej życzenia z tej okazji."
        },
        {
         "id": "b",
         "genre": "charakterystyka",
         "wordTarget": 170,
         "prompt": "„Zawsze będę o niej/nim pamiętać”. Proszę napisać charakterystykę ważnej dla Pani/Pana osoby."
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
         "prompt": "Dawno nie widziała Pani / nie widział Pan swoich polskich znajomych. Chce Pani/Pan zorganizować dla nich spotkanie. Proszę napisać zaproszenie."
        },
        {
         "id": "b",
         "genre": "opowiadanie",
         "wordTarget": 170,
         "prompt": "Proszę napisać opowiadanie, które zacznie się od zdania: „To były bardzo ciekawe wakacje”.",
         "startsWith": "To były bardzo ciekawe wakacje."
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
