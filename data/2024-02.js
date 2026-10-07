window.EXAMS = window.EXAMS || {};
window.EXAMS["2024-02"] = {
 "schemaVersion": 1,
 "id": "2024-02",
 "meta": {
  "level": "B1",
  "labelPdf": "luty 2024",
  "examDates": "4-5.02.2024",
  "sources": {
   "test": "sources/2024-02/test.pdf",
   "transcript": "sources/2024-02/transcript.pdf",
   "audio": "sources/2024-02/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear."
  ]
 },
 "audio": {
  "src": "sources/2024-02/audio.mp3",
  "duration": 1600.0,
  "intro": [
   0,
   47.3
  ],
  "readingTime": [
   47.3,
   107.8
  ],
  "tail": [
   1536.4,
   1600.0
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
        "end": 315.9
       }
      ],
      "items": [
       {
        "ref": "l1.ex",
        "start": 134.2,
        "end": 144.5
       },
       {
        "ref": "l1.1",
        "start": 150.9,
        "end": 156.0
       },
       {
        "ref": "l1.2",
        "start": 162.4,
        "end": 167.7
       },
       {
        "ref": "l1.3",
        "start": 174.2,
        "end": 180.5
       },
       {
        "ref": "l1.4",
        "start": 186.8,
        "end": 191.7
       },
       {
        "ref": "l1.5",
        "start": 198.1,
        "end": 204.6
       },
       {
        "ref": "l1.6",
        "start": 210.9,
        "end": 217.2
       },
       {
        "ref": "l1.7",
        "start": 223.5,
        "end": 229.2
       },
       {
        "ref": "l1.8",
        "start": 235.6,
        "end": 241.7
       },
       {
        "ref": "l1.9",
        "start": 248.1,
        "end": 253.3
       },
       {
        "ref": "l1.10",
        "start": 259.7,
        "end": 265.9
       },
       {
        "ref": "l1.11",
        "start": 272.3,
        "end": 278.7
       },
       {
        "ref": "l1.12",
        "start": 285.1,
        "end": 291.1
       },
       {
        "ref": "l1.13",
        "start": 297.5,
        "end": 303.5
       },
       {
        "ref": "l1.14",
        "start": 309.8,
        "end": 315.9
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
        "text": "komplement."
       },
       {
        "id": "b",
        "text": "porównanie."
       },
       {
        "id": "c",
        "text": "dezaprobatę."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "sp": "K",
       "t": "Świetnie pasuje ci ta skórzana kurtka."
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
         "text": "zgodę na propozycję."
        },
        {
         "id": "b",
         "text": "odrzucenie propozycji."
        },
        {
         "id": "c",
         "text": "brak decyzji."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Z przykrością, ale muszę ci odmówić."
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź jest pytaniem o",
       "options": [
        {
         "id": "a",
         "text": "czas."
        },
        {
         "id": "b",
         "text": "drogę."
        },
        {
         "id": "c",
         "text": "transport."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Czy wie pan, jak dojść do urzędu miasta?"
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź oznacza, że pociąg",
       "options": [
        {
         "id": "a",
         "text": "przyjedzie niezgodnie z rozkładem."
        },
        {
         "id": "b",
         "text": "będzie dokładnie o czasie."
        },
        {
         "id": "c",
         "text": "będzie kwadrans stał na stacji."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Pociąg do Wrocławia jest opóźniony 15 minut."
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
         "text": "zainteresowanie."
        },
        {
         "id": "c",
         "text": "krytykę."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Jak mogłeś jej to wszystko powiedzieć!"
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź oznacza, że podczas wykładu",
       "options": [
        {
         "id": "a",
         "text": "można korzystać z telefonów."
        },
        {
         "id": "b",
         "text": "nie wolno używać telefonów."
        },
        {
         "id": "c",
         "text": "trzeba włączyć telefon."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Podczas wykładu obowiązuje zakaz używania telefonów."
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "u szewca."
        },
        {
         "id": "b",
         "text": "u fryzjera."
        },
        {
         "id": "c",
         "text": "u krawca."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Chciałabym skrócić tę spódnicę o 6 cm."
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź jest typowa dla",
       "options": [
        {
         "id": "a",
         "text": "rodzica."
        },
        {
         "id": "b",
         "text": "nauczyciela."
        },
        {
         "id": "c",
         "text": "brata."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Synku, odrobiłeś już zadanie domowe?"
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź oznacza, że",
       "options": [
        {
         "id": "a",
         "text": "pakiet jest dodatkowo płatny."
        },
        {
         "id": "b",
         "text": "abonament jest darmowy."
        },
        {
         "id": "c",
         "text": "pakiet jest wliczony w opłaty."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Pakiet dodatkowych minut jest w cenie abonamentu."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "prośbę."
        },
        {
         "id": "b",
         "text": "zaproszenie."
        },
        {
         "id": "c",
         "text": "gratulacje."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Poszedłbyś wreszcie z psem na spacer!"
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w czasie podróży."
        },
        {
         "id": "b",
         "text": "w czasie wizyty u lekarza."
        },
        {
         "id": "c",
         "text": "w sklepie turystycznym."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Bagaż podręczny należy umieścić pod siedzeniem."
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "obojętność."
        },
        {
         "id": "b",
         "text": "znudzenie."
        },
        {
         "id": "c",
         "text": "zaciekawienie."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Niesamowita historia! Co było potem?"
       }
      },
      {
       "id": "l1.12",
       "number": 12,
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
         "text": "audycji sportowej."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Proszę brać leki przeciwgorączkowe i odpoczywać."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź oznacza, że klient chce",
       "options": [
        {
         "id": "a",
         "text": "zestaw z rybą."
        },
        {
         "id": "b",
         "text": "potrawę z mięsem."
        },
        {
         "id": "c",
         "text": "danie wegetariańskie."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Czy mają państwo w ofercie dania warzywne?"
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź oznacza, że kurs jest dla osób",
       "options": [
        {
         "id": "a",
         "text": "które mają co najmniej 18 lat."
        },
        {
         "id": "b",
         "text": "które mają mniej niż 18 lat."
        },
        {
         "id": "c",
         "text": "bez względu na wiek."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Na kurs zapraszamy wszystkie osoby pełnoletnie."
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
       326.2,
       342.2
      ],
      "plays": [
       {
        "start": 352.5,
        "end": 461.3
       },
       {
        "start": 507.1,
        "end": 616.0
       }
      ],
      "pauseBetweenPlays": 45.8,
      "items": [
       {
        "ref": "l2.ex",
        "start": 352.5,
        "end": 365.9
       },
       {
        "ref": "l2.1",
        "start": 372.6,
        "end": 382.2
       },
       {
        "ref": "l2.2",
        "start": 388.8,
        "end": 398.5
       },
       {
        "ref": "l2.3",
        "start": 405.0,
        "end": 416.9
       },
       {
        "ref": "l2.4",
        "start": 423.4,
        "end": 431.2
       },
       {
        "ref": "l2.5",
        "start": 437.8,
        "end": 446.0
       },
       {
        "ref": "l2.6",
        "start": 452.5,
        "end": 461.3
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
        "text": "oni pójdą do teatru dziś wieczorem."
       },
       {
        "id": "b",
        "text": "ona proponuje pójść do kina na film."
       },
       {
        "id": "c",
        "text": "on teraz nie chce iść do teatru."
       }
      ],
      "answer": "c",
      "shown": true,
      "transcript": {
       "lines": [
        {
         "sp": "K",
         "t": "Masz ochotę pójść na jakieś przedstawienie?"
        },
        {
         "sp": "M",
         "t": "Może innym razem."
        }
       ]
      }
     },
     "items": [
      {
       "id": "l2.1",
       "number": 1,
       "prompt": "Z tego dialogu wynika, że komputer",
       "options": [
        {
         "id": "a",
         "text": "należy naprawić."
        },
        {
         "id": "b",
         "text": "jest sprawny."
        },
        {
         "id": "c",
         "text": "trzeba sprzedać."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Czy problem jest poważny?"
         },
         {
          "sp": "M",
          "t": "To płyta główna. Powinna pani zostawić komputer w serwisie."
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
         "text": "zachęca do kupowania w tym sklepie."
        },
        {
         "id": "b",
         "text": "informuje o wysokich cenach w sklepie."
        },
        {
         "id": "c",
         "text": "poleca pracę w sklepie."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Co myślisz o tym nowym sklepie ze zdrową żywnością?"
         },
         {
          "sp": "K",
          "t": "Nie polecam ci. Tam jest bardzo drogo."
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
         "text": "para wyszła za wcześnie z domu."
        },
        {
         "id": "b",
         "text": "kobieta bardzo się spieszy na zakupy."
        },
        {
         "id": "c",
         "text": "na parkingu nie ma wolnych miejsc."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "O nie, znowu wszystkie miejsca parkingowe przed sklepem są zajęte."
         },
         {
          "sp": "M",
          "t": "Mówiłem ci, że trzeba wychodzić wcześniej z domu."
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
         "text": "autobus przyjedzie za kilka minut."
        },
        {
         "id": "b",
         "text": "mężczyzna nie wie, o której był autobus."
        },
        {
         "id": "c",
         "text": "kobieta przyszła za późno na przystanek."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Czy autobus do centrum już odjechał?"
         },
         {
          "sp": "M",
          "t": "Tak, 5 minut temu."
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
         "text": "kobieta jeszcze nic nie kupiła."
        },
        {
         "id": "b",
         "text": "prezent dla Basi to sekret."
        },
        {
         "id": "c",
         "text": "Basia nie chce prezentu na urodziny."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Co kupiłaś Basi na imieniny?"
         },
         {
          "sp": "K",
          "t": "Nie mogę powiedzieć, to niespodzianka."
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
         "text": "potrawa była trochę za zimna."
        },
        {
         "id": "b",
         "text": "klient jest bardzo niezadowolony."
        },
        {
         "id": "c",
         "text": "mężczyzna chwali potrawę."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Czy wszystko panu smakowało?"
         },
         {
          "sp": "M",
          "t": "Tak, ale zupa mogłaby być trochę cieplejsza."
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
     "prompt": "Proszę wysłuchać wywiadu na temat firmy zajmującej się niepotrzebnymi ubraniami i zaznaczyć właściwe odpowiedzi.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: https://casbeg.com/pl/blog/nietypowe-branze-wtorpol/",
     "audio": {
      "announce": [
       626.4,
       642.1
      ],
      "plays": [
       {
        "start": 652.3,
        "end": 753.9
       },
       {
        "start": 799.7,
        "end": 901.3
       }
      ],
      "pauseBetweenPlays": 45.8,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "M",
        "t": "Proszę powiedzieć, czym zajmuje się firma Wtórpol."
       },
       {
        "sp": "K",
        "t": "Dajemy drugie życie ubraniom. Zbieramy odzież używaną do charakterystycznych, kremowych pojemników naszych lub Polskiego Czerwonego Krzyża. Dodatkowo prowadzimy akcje edukacyjne w szkołach."
       },
       {
        "sp": "M",
        "t": "W jaki sposób odzież używana znajduje się w waszej firmie?"
       },
       {
        "sp": "K",
        "t": "Najpierw ubrania trafiają do kontenerów, które znajdują się w każdej mniejszej lub większej miejscowości. Potem jest sortowanie, czyli dzielenie. Wtórpol to jedna z największych sortowni w Europie. Ale co ważne, nasza firma sortuje jedynie polską odzież."
       },
       {
        "sp": "M",
        "t": "Co się potem dzieje z ubraniami?"
       },
       {
        "sp": "K",
        "t": "Te najwyższej jakości – czyste i niezniszczone – trafiają do sklepów z odzieżą używaną w różnych miastach Polski. Odzież, która nie nadaje się do noszenia, trafia do schronisk dla zwierząt."
       },
       {
        "sp": "M",
        "t": "Wspominała pani o akcjach edukacyjnych dla szkół. Proszę coś więcej powiedzieć."
       },
       {
        "sp": "K",
        "t": "Tak, zgadza się. Jedna z nich nazywa się „Zrób porządek w szafie”. Uczniowie przez określony czas zbierają niepotrzebne ubrania. Przygotowują również prezentacje i zdobywają wiedzę na temat recyklingu."
       },
       {
        "sp": "M",
        "t": "Co dodatkowo uczniowie mogą zrobić z ubraniami, których już nie potrzebują?"
       },
       {
        "sp": "K",
        "t": "Mogą je sprzedać na przeznaczonych do tego platformach lub oddać osobom, których nie stać na nowe rzeczy. Najgorsze, co można zrobić, to wrzucić ubrania do kosza na odpady zmieszane."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "prompt": "Firma Wtórpol zbiera ubrania",
      "options": [
       {
        "id": "a",
        "text": "z pomocą wolontariuszy."
       },
       {
        "id": "b",
        "text": "do specjalnych kontenerów."
       },
       {
        "id": "c",
        "text": "dzięki podróżowaniu po Polsce."
       }
      ],
      "answer": "b",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "prompt": "Kontenery na ubrania znajdują się",
       "options": [
        {
         "id": "a",
         "text": "przy każdej większej szkole w Polsce."
        },
        {
         "id": "b",
         "text": "w największych miastach w Polsce."
        },
        {
         "id": "c",
         "text": "zarówno w małych, jak i dużych miastach w Polsce."
        }
       ],
       "answer": "c"
      },
      {
       "id": "l3.2",
       "number": 2,
       "prompt": "Firma Wtórpol",
       "options": [
        {
         "id": "a",
         "text": "produkuje ubrania z odpadów."
        },
        {
         "id": "b",
         "text": "zajmuje się recyklingiem polskich ubrań."
        },
        {
         "id": "c",
         "text": "importuje ubrania z Zachodu i sprzedaje w Polsce."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.3",
       "number": 3,
       "prompt": "Najlepsze ubrania, które ma firma Wtórpol, są",
       "options": [
        {
         "id": "a",
         "text": "wysyłane za granicę do biedniejszych krajów."
        },
        {
         "id": "b",
         "text": "sprzedawane w sklepach w Polsce."
        },
        {
         "id": "c",
         "text": "oddawane do miejsc dla bezdomnych psów lub kotów."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.4",
       "number": 4,
       "prompt": "Podczas akcji „Zrób porządek w szafie” uczniowie",
       "options": [
        {
         "id": "a",
         "text": "zajmują się w firmie Wtórpol sortowaniem ubrań."
        },
        {
         "id": "b",
         "text": "robią prezentacje i uczą się o recyclingu."
        },
        {
         "id": "c",
         "text": "pomagają sprzątać w schroniskach."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.5",
       "number": 5,
       "prompt": "Ubrania, których uczniowie już nie potrzebują,",
       "options": [
        {
         "id": "a",
         "text": "powinny być oddane firmie Wtórpol."
        },
        {
         "id": "b",
         "text": "muszą zostać wrzucone do specjalnego kontenera."
        },
        {
         "id": "c",
         "text": "mogą być przekazane biedniejszym."
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
     "prompt": "Proszę posłuchać informacji na temat aplikacji Pola i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "6 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 6,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://jedynka.polskieradio.pl/artykul/2671258,Kod-590-aplikacja-Pola-Jak-%C5%9Bwiadomie-kupowa%C4%87-polskie-produkty",
     "audio": {
      "announce": [
       911.8,
       927.7
      ],
      "plays": [
       {
        "start": 937.9,
        "end": 1028.9
       },
       {
        "start": 1074.7,
        "end": 1165.8
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
        "t": "Po co nam ta nowa aplikacja?"
       },
       {
        "sp": "Programista",
        "t": "Żeby sprawdzić, czy sok lub wędlina, które kupujemy, wyprodukowano w Polsce. Dzięki aplikacji Pola możemy zrobić to sami, wystarczy zeskanować kod kreskowy."
       },
       {
        "sp": "Dziennikarka",
        "t": "Jak działa aplikacja?"
       },
       {
        "sp": "Programista",
        "t": "To bardzo proste. Bierzemy na przykład jogurt, uruchamiamy aplikację w naszym smartfonie i skanujemy kod kreskowy. Po chwili możemy sprawdzić, czy producent jest z Polski lub czy płaci tu podatki."
       },
       {
        "sp": "Dziennikarka",
        "t": "Jak oceniacie produkty?"
       },
       {
        "sp": "Programista",
        "t": "Jest pięć kryteriów. Najwięcej punktów jest za wielkość polskiego kapitału, produkcję na terenie naszego kraju i prowadzenie tutaj badań naukowych. Najmniej za rejestrację firmy w Polsce."
       },
       {
        "sp": "Dziennikarka",
        "t": "Ile to kosztuje?"
       },
       {
        "sp": "Programista",
        "t": "Aplikacja jest całkowicie bezpłatna, zarówno dla firm, jak i dla użytkowników."
       },
       {
        "sp": "Dziennikarka",
        "t": "Tylko z aplikacją możemy sprawdzić, czy kupujemy polskie produkty?"
       },
       {
        "sp": "Programista",
        "t": "Nie, na przykład jedna z sieci sklepów drukuje takie informacje na paragonie – podaje na nim sumę, jaką ze sprzedaży otrzymają polscy producenci. Poza tym pomocny może być sam kod kreskowy. Trzy pierwsze liczby kodu: 590 oznaczają, że firma zarejestrowała się w Polsce, ale uwaga – nie ma gwarancji, że tutaj wyprodukowała produkt."
       }
      ]
     },
     "example": {
      "id": "l4.ex",
      "statement": "Aplikację skanujemy przy kasie.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "statement": "Dzięki aplikacji możemy sprawdzić, z jakiego kraju pochodzi produkt.",
       "answer": "NIE"
      },
      {
       "id": "l4.2",
       "number": 2,
       "statement": "Aplikacja jest łatwa w obsłudze.",
       "answer": "TAK"
      },
      {
       "id": "l4.3",
       "number": 3,
       "statement": "Każdy produkt może otrzymać maksymalnie 5 punktów.",
       "answer": "NIE"
      },
      {
       "id": "l4.4",
       "number": 4,
       "statement": "Aplikacja jest darmowa dla klientów i producentów.",
       "answer": "TAK"
      },
      {
       "id": "l4.5",
       "number": 5,
       "statement": "Czasami z paragonu można dowiedzieć się, czy kupiliśmy jakieś polskie produkty.",
       "answer": "TAK"
      },
      {
       "id": "l4.6",
       "number": 6,
       "statement": "Początek kodu 590 oznacza, że firma produkuje towar w Polsce.",
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
     "prompt": "Proszę wysłuchać wypowiedzi dotyczących uczestnictwa w wydarzeniach kulturalnych (1-5) i dopasować do ich opinie (A-D). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
     "pointsFormula": "6 x 1 p.",
     "pointsPerSlot": 1,
     "maxPoints": 6,
     "plays": 2,
     "pdfPage": 7,
     "audio": {
      "announce": [
       1176.2,
       1192.2
      ],
      "plays": [
       {
        "start": 1202.4,
        "end": 1338.0
       },
       {
        "start": 1383.8,
        "end": 1519.5
       }
      ],
      "pauseBetweenPlays": 45.8,
      "items": [
       {
        "ref": "p1",
        "start": 1202.4,
        "end": 1229.5
       },
       {
        "ref": "p2",
        "start": 1236.1,
        "end": 1261.6
       },
       {
        "ref": "p3",
        "start": 1268.2,
        "end": 1284.1
       },
       {
        "ref": "p4",
        "start": 1290.5,
        "end": 1308.7
       },
       {
        "ref": "p5",
        "start": 1315.2,
        "end": 1338.0
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
      },
      {
       "id": "5",
       "label": "osoba 5"
      }
     ],
     "example": {
      "id": "l5.ex",
      "statement": "chodzi na premiery kinowe.",
      "answer": [
       "3"
      ],
      "shown": true
     },
     "statements": [
      {
       "id": "l5.A",
       "letter": "A",
       "text": "korzysta z darmowych ofert.",
       "slots": 2,
       "answer": [
        "1",
        "4"
       ],
       "anyOrder": true,
       "starred": true
      },
      {
       "id": "l5.B",
       "letter": "B",
       "text": "chodzi na spotkania z pisarzami.",
       "slots": 1,
       "answer": [
        "5"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.C",
       "letter": "C",
       "text": "dzieli swoją pasję z bliskimi.",
       "slots": 2,
       "answer": [
        "1",
        "3"
       ],
       "anyOrder": true,
       "starred": true
      },
      {
       "id": "l5.D",
       "letter": "D",
       "text": "uczestniczy w zagranicznych wydarzeniach kulturalnych.",
       "slots": 1,
       "answer": [
        "2"
       ],
       "anyOrder": true,
       "starred": false
      }
     ],
     "keyNote": "*kolejność odpowiedzi dowolna",
     "transcript": {
      "lines": [
       {
        "sp": "Osoba 1 (M)",
        "t": "Raz w tygodniu w konkretny dzień mogę odwiedzić wybrane muzeum lub galerię i nie płacić za bilet. A raz w roku podczas nocy muzeów niemal wszystkie instytucje kultury w Polsce otwierają swoje drzwi dla zwiedzających. Wtedy razem z moją rodziną oglądam ciekawe wystawy."
       },
       {
        "sp": "Osoba 2 (M)",
        "t": "Lubię oglądać filmy, ale nie w multipleksach. Wolę małe sale kinowe, dlatego wybieram kameralne festiwale, podczas których prezentowane są filmy z określonego gatunku lub z określonego kraju. Jeżdżę też na festiwale filmowe za granicę między innymi do Cannes i do Berlina, skąd przywożę niezapomniane wrażenia!"
       },
       {
        "sp": "Osoba 3 (K)",
        "t": "Uwielbiam kino. Jestem na bieżąco z każdym nowym tytułem, ponieważ często chodzę na pokazy premierowe. Jeśli dowiem się, że coś nowego wchodzi na ekrany, to od razu kupuję bilety dla siebie i przyjaciółki."
       },
       {
        "sp": "Osoba 4 (K)",
        "t": "Lubię muzykę klasyczną i często jej słucham. Chciałabym chodzić do filharmonii lub opery, ale ceny biletów są za wysokie. Na szczęście w parku, gdzie spaceruję, mogę latem bezpłatnie słuchać muzyki Chopina na żywo."
       },
       {
        "sp": "Osoba 5 (K)",
        "t": "Często uczestniczę w spotkaniach autorskich, które są organizowane przez biblioteki lub domy kultury w moim mieście. Ponadto szukam imprez dla fanów literatury. Targi książki w dużych miastach w Polsce przyciągają wielu miłośników książek, którzy mogą spotkać tam ulubionych autorów."
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
       "text": "Sardynia jest atrakcją turystyczną na Morzu Śródziemnym. Niewielka wieś, Ollolai, która znajduje się na wyspie, ma jednak problem z małą populacją mieszkańców. Aby to zmienić, wymyślono specjalny program dla osób pracujących zdalnie: mogą wynająć w Ollolai dom za 1 euro. Celem projektu jest zwiększenie liczby mieszkańców wsi.",
       "source": "Na podstawie: https://geekweek.interia.pl/podroze/news-pracujesz-zdalnie-zamieszkaj-na-sardynii-za-1-euro,nId,7040797"
      },
      "prompt": "Z tego tekstu wynika, że w Ollolai",
      "options": [
       {
        "id": "a",
        "text": "odbędzie się szkolenie dla osób aktywnych zawodowo."
       },
       {
        "id": "b",
        "text": "można tanio kupić dom i pracować on-line."
       },
       {
        "id": "c",
        "text": "powstał innowacyjny projekt."
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
        "text": "Dzień kuriera zaczyna się wcześnie rano w magazynie, gdzie odbiera przesyłki, sprawdza je i aktualizuje ich dane w systemie informatycznym. Praca jest dynamiczna, a każdy dzień inny. Osoby zatrudnione na tym stanowisku powinny być przede wszystkim punktualne. Dodatkowo kurierzy muszą mieć dobrą orientację w terenie i nie bać się pracy fizycznej.",
        "source": "Na podstawie: https://polki.pl/praca-i-finanse/praca,praca-jako-kurier-z-czym-musi-sie-mierzyc-na-co-dzien,10446655,artykul.html"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "kurierzy rano przywożą paczki do magazynu."
        },
        {
         "id": "b",
         "text": "kurierzy muszą obsługiwać programy komputerowe."
        },
        {
         "id": "c",
         "text": "praca kuriera jest stresująca i niebezpieczna."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "W tureckiej Kapadocji można oglądać piękne krajobrazy. To także najpopularniejsze miejsce na lot balonem, a samo doświadczenie jest niezwykłe. Tysiące balonów lata tam co rano przez około 250 dni w roku – również zimą. Bilety należy zarezerwować wcześniej, ponieważ chętnych jest dużo.",
        "source": "Na podstawie: https://www.travelplanet.pl/blog/loty-balonem-w-turcji-zbior-informacji/"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "Kapadocję można oglądać również z powietrza."
        },
        {
         "id": "b",
         "text": "od grudnia do marca loty balonem się nie odbywają."
        },
        {
         "id": "c",
         "text": "zainteresowanie atrakcją jest niewielkie."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Rodzice często zastanawiają się, kiedy przychodzi najlepszy moment, żeby pójść z dzieckiem do teatru. Odpowiedź jest prosta: jak najwcześniej. Repertuar powinien być jednak dostosowany do wieku. W ofercie współczesnych instytucji są spektakle nawet dla dzieci, które mają dopiero kilka miesięcy.",
        "source": "Na podstawie: https://endo.pl/blog/dlaczego-warto-chodzic-z-dzieckiem-do-teatru/"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "rodzice rzadko szukają przedstawień dla dzieci."
        },
        {
         "id": "b",
         "text": "dzieci najlepiej bawią się na spektaklach porannych."
        },
        {
         "id": "c",
         "text": "teatry proponują przedstawienia dla różnych grup wiekowych."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Od września do szkoły podstawowej w Kętach codziennie przychodzi pies o imieniu Wally. Zwierzę towarzyszy uczniom na lekcjach. Inicjatorką akcji jest nauczycielka przyrody i biologii, specjalistka dogoterapii, Monika Kojder. Uczniowie byli bardziej zainteresowani tematyką zajęć, kreatywni, spokojniejsi i szybciej pracowali, gdy Wally był w klasie.",
        "source": "Na podstawie: https://stylzycia.radiozet.pl/zwierzeta/pies-wally-pomaga-uczniom-szkoly-w-ketach-w-nauce-nie-moga-doczekac-sie-kolejnych-zajec"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "Wally bawi się z uczniami między lekcjami."
        },
        {
         "id": "b",
         "text": "pomysł nauczycielki daje dobre efekty."
        },
        {
         "id": "c",
         "text": "pies Wally przeszkadza dzieciom w nauce."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "Najbardziej depresyjny dzień w roku to trzeci poniedziałek stycznia. Termin Blue Monday w 2004 roku wymyślił Cliff Arnall, brytyjski psycholog. Przeanalizował trzy czynniki: niezbyt dobrą pogodę o tej porze roku, złą kondycję finansową po świętach i niską motywację do pracy. Wielu naukowców nie akceptuje jednak wyników jego analiz.",
        "source": "Na podstawie: https://stylzycia.polki.pl/psychologia,blue-monday-2020-co-to-za-dzien-i-kiedy-przypada-w-tym-roku,10432220,artykul.html"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "Blue Monday przypada pod koniec roku."
        },
        {
         "id": "b",
         "text": "stan konta nie decyduje o naszym samopoczuciu."
        },
        {
         "id": "c",
         "text": "część badaczy nie zgadza się z teorią Arnalla."
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
     "pdfPage": 11,
     "source": "Na podstawie: https://teleskop.pl/pl/blog/dzien-nauki-polskiej-1676644166.html",
     "passage": "Dzień Nauki Polskiej to jedno z najmłodszych świąt państwowych w polskim kalendarzu. Po raz pierwszy obchodziliśmy je w 2021 roku. Jego celem jest docenienie najwybitniejszych polskich uczonych i zachęcanie młodych ludzi do odkrywania świata, a także pokazanie im, że nauka może być fascynująca. Działania te mają zmotywować uczniów i studentów do rozpoczęcia w przyszłości kariery naukowej.\n\nDzień urodzin polskiego astronoma Mikołaja Kopernika, czyli 19 lutego, wybrano na Dzień Nauki Polskiej, ponieważ to jeden z naszych najwybitniejszych uczonych. Obecnie proste badania naukowe są dostępne dla każdego – nawet małe dzieci mogą mieć np. teleskopy lub mikroskopy i prowadzić obserwacje. Dla najmłodszych to pasja, która może zamienić się w ciekawy zawód.\n\nDzień Nauki Polskiej to święto, które powinno być szczególnie celebrowane w szkołach i na uniwersytetach. Uczniowie mogą na przykład przygotowywać wtedy prezentacje o naukowcach. Ciekawym pomysłem jest również lekcja w muzeum. W obchody tego święta powinny się włączyć firmy lub przedsiębiorstwa, które wykorzystują odkrycia naukowe i mogą to pokazać młodzieży.",
     "example": {
      "id": "r2.ex",
      "statement": "Tekst dotyczy święta religijnego.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Dzień Nauki Polskiej świętujemy już od dawna.",
       "answer": "NIE"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "W tym dniu mówi się o naukowcach z całego świata.",
       "answer": "NIE"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Głównym celem święta jest promocja nauki wśród dzieci i młodzieży.",
       "answer": "TAK"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Data Dnia Polskiej Nauki jest wyrazem szacunku dla osiągnieć wielkiego Polaka.",
       "answer": "TAK"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Nieskomplikowaną aparaturę do badań można łatwo kupić.",
       "answer": "TAK"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Dzień Nauki Polskiej jest okazją do współpracy szkół z biznesem.",
       "answer": "TAK"
      }
     ],
     "pdfNotes": [
      "Statement 4 prints „osiągnieć” (sic) in the booklet; kept verbatim."
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
     "source": "Na podstawie: https://rynekpierwotny.pl/wiadomosci-mieszkaniowe/mikroapartamenty-w-modzie/10423/",
     "passage": "Wśród ofert mieszkaniowych coraz częściej możemy znaleźć mikroapartamenty, {{ex}} o powierzchni od 12 do 27 m². Według opinii ekspertów tego typu propozycje są odpowiedzią deweloperów na problemy lokalowe, {{1}}. Małe mieszkanie oznacza niższe opłaty.\n\nTo rozwiązanie jest dobre dla studentów albo osób, które niedawno skończyły studia, dlatego mikroapartamenty powstają w atrakcyjnych dla nich lokalizacjach, {{2}}. Młodzi ludzie chcą żyć szybko, intensywnie, blisko miasta, {{3}} takimi mieszkaniami.\n\nWiele osób zastanawia się, jak mały może być lokal? Okazuje się, że nawet na 5 m² jest miejsce na łazienkę z prysznicem i jednoosobowe łóżko. Idea mikroapartamentów dotarła do Europy i Azji z Ameryki, {{4}}. Na naszym kontynencie pierwsze takie lokum powstało w Rzymie. Potem w chińskim mieście Wuhan zbudowano wiele mieszkań dwuosobowych o jeszcze mniejszej powierzchni.\n\nW Polsce moda na mieszkania w wersji mini pojawiła się na początku XX wieku, {{5}} we Wrocławiu. Deweloperzy kierowali ofertę do singli oraz do osób, {{6}} dla swojego dziecka – przyszłego studenta. Mikroapartamenty są dosyć drogie, ich koszt zależy od regionu, miasta, a nawet wybranej lokalizacji. W internecie można znaleźć oferty lokali znajdujących się blisko centrum Warszawy, {{7}} nawet 18 000 zł.",
     "options": [
      {
       "id": "A",
       "text": "na przykład przy uniwersytetach"
      },
      {
       "id": "B",
       "text": "a konkretnie z Nowego Jorku"
      },
      {
       "id": "C",
       "text": "czyli małe lokale z aneksem kuchennym"
      },
      {
       "id": "D",
       "text": "które planowały kupić mieszkanie"
      },
      {
       "id": "E",
       "text": "które aktualnie mają młodzi Polacy"
      },
      {
       "id": "F",
       "text": "gdzie metr kwadratowy kosztuje"
      },
      {
       "id": "G",
       "text": "a pierwsze mikrokawalerki powstały"
      },
      {
       "id": "H",
       "text": "więc zawsze będą zainteresowani"
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
       "answer": "A"
      },
      {
       "id": "r3.3",
       "number": 3,
       "gap": "3",
       "answer": "H"
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
       "answer": "G"
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
     "source": "Na podstawie: https://www.zooplus.pl/magazyn/psy/adopcja-psa/10-rzeczy-o-ktorych-musisz-wiedziec-przed-adopcja-psa#przed-adopcj%C4%85-psa-nie-ka%C5%BCdy-pies-pasuje-do-ka%C5%BCdego",
     "heading": "Co trzeba wiedzieć przed adopcją psa",
     "options": [
      {
       "id": "A",
       "text": "Dorosłe zwierzę może zostać w mieszkaniu bez opiekuna pod warunkiem, że będziemy go tego systematycznie uczyć."
      },
      {
       "id": "B",
       "text": "Adopcja wiąże się z wzięciem odpowiedzialności za zwierzę na długo. Duże psy żyją średnio dwanaście lat, a małe jeszcze dłużej."
      },
      {
       "id": "C",
       "text": "Opiekunowie psów są często zaskoczeni, że od czasu gdy zwierzę mieszka z nimi, muszą poświęcić więcej czasu na sprzątanie."
      },
      {
       "id": "D",
       "text": "„Taki mały piesek nie zje zbyt wiele! To nie może dużo kosztować” – myślą niektórzy. Jednak opieka nad zwierzęciem, to nie tylko cena karmy, ale i wizyty u weterynarza czy regularne szczepienia."
      },
      {
       "id": "E",
       "text": "Jeśli nie zgadzamy się na spanie w łóżku czy proszenie o jedzenie przy stole, już na samym początku powinniśmy ustalić pewne reguły. Ważne jest, aby cała rodzina konsekwentnie wychowywała zwierzę."
      },
      {
       "id": "F",
       "text": "Coraz więcej jest hoteli i pensjonatów, do których można przyjechać ze zwierzęciem i razem z nim spędzić wakacje."
      },
      {
       "id": "G",
       "text": "Wyjście na zewnątrz, gdy świeci słońce, to czysta przyjemność. Jednak przyszły członek rodziny nie może zostać w domu tylko dlatego, że jest zimno lub pada deszcz."
      },
      {
       "id": "H",
       "text": "Należy przemyśleć, jaki typ psa będzie pasował do rodziny i jej stylu życia. Jeśli większość wolnego czasu spędzacie w domu, wybierzcie spokojniejsze zwierzę."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Decyzja na wiele lat",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Obowiązki i wydatki",
       "answer": "D"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Dopasowanie charakterów",
       "answer": "H"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Samotne chwile",
       "answer": "A"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Spacer również w niepogodę",
       "answer": "G"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Porządek musi być",
       "answer": "C"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Wspólny wypoczynek",
       "answer": "F"
      },
      {
       "id": "r4.7",
       "number": 7,
       "prompt": "Szkolenie od pierwszych dni",
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
     "title": "Najlepsza komedia",
     "source": "Na podstawie: https://culture.pl/pl/dzielo/sami-swoi-rez-sylwester-checinski",
     "passage": "„Sami swoi” to ulubiona komedia Polaków i wciąż {{ex}} na liście najpopularniejszych polskich filmów. Produkcja powstała w 1967 roku, a jej {{1}} był Sylwester Chęciński. Film o konflikcie dwóch rodzin zaczyna się od przyjazdu do ojczyzny Jaśka „Johna” Pawlaka, który dawno temu {{2}} do Stanów Zjednoczonych. W czasie jego nieobecności w rodzinnej wsi {{3}} się zmieniło. Spotkanie mężczyzny z bratem Kazimierzem jest pełne radości, ale wesoły nastrój {{4}} się kończy. A wszystko z powodu sąsiada – Kargula.\n\nInspiracją do napisania fabuły było samo życie. Kiedy scenarzysta, Andrzej Mularczyk, opisywał losy dwóch wiejskich rodzin, {{5}} historię swojego wujka.\n\n{{6}} konfliktu między sąsiadami jest w komediach częstym motywem. Bohaterowie „Samych swoich” {{7}} o wszystko, a symbolem niezgody jest płot pomiędzy ich domami. Nawet widzowie, którzy nie są {{8}} filmu, uważają, że opowieść o Kargulach i Pawlakach stała się częścią kultury polskiej. Dużą {{9}} miały też dwie kontynuacje komedii – „Nie ma mocnych” i „Kochaj albo rzuć”. Seria jest tak lubiana, że na festiwalu filmów komediowych, który jest organizowany {{10}} na Dolnym Śląsku, co roku można obejrzeć te filmy.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "występuje",
        "leży",
        "znajduje się"
       ],
       "answer": "znajduje się"
      },
      {
       "id": "1",
       "options": [
        "dyrektorem",
        "reżyserem",
        "aktorem"
       ],
       "answer": "reżyserem"
      },
      {
       "id": "2",
       "options": [
        "wrócił",
        "wyjechał",
        "poszedł"
       ],
       "answer": "wyjechał"
      },
      {
       "id": "3",
       "options": [
        "dużo",
        "nic",
        "długo"
       ],
       "answer": "dużo"
      },
      {
       "id": "4",
       "options": [
        "krótko",
        "mało",
        "szybko"
       ],
       "answer": "szybko"
      },
      {
       "id": "5",
       "options": [
        "zrobił",
        "wykorzystał",
        "wymyślił"
       ],
       "answer": "wykorzystał"
      },
      {
       "id": "6",
       "options": [
        "Temat",
        "Tytuł",
        "Plan"
       ],
       "answer": "Temat"
      },
      {
       "id": "7",
       "options": [
        "wołają",
        "proszą",
        "kłócą się"
       ],
       "answer": "kłócą się"
      },
      {
       "id": "8",
       "options": [
        "fanami",
        "ulubieńcami",
        "adoratorami"
       ],
       "answer": "fanami"
      },
      {
       "id": "9",
       "options": [
        "opinię",
        "popularność",
        "sławę"
       ],
       "answer": "popularność"
      },
      {
       "id": "10",
       "options": [
        "regularnie",
        "przypadkowo",
        "czasowo"
       ],
       "answer": "regularnie"
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
     "source": "Na podstawie: Malowani „Chłopi” zapowiadają się na hit. Polski film na pełnym zwiastunie | Eurogamer.pl",
     "passage": "Nowa adaptacja powieści Władysława Stanisława Reymonta „Chłopi” to prawdopodobnie jedna z {{ex1}} premier 2023 {{ex2}}. Reżyserzy, Dorota Kobiela i Hugh Welchman, to twórcy – znanej niektórym z {{ex3}} – animacji {{1}} „Twój Vincent”, biografii Van Gogha.\n\n„Chłopi” nie są {{2}} filmem. W {{3}} realizacji wzięli udział nie tylko {{4}}, lecz także ponad 100 malarzy, którzy długo pracowali nad każdym {{5}}. Całe dzieło składa się z {{6}} obrazów.\n\nFabuła jest podobna do {{7}} z tytułowej powieści – opowiada nam o {{8}}, Macieju Borynie, który rywalizuje ze swoim synem Antkiem o niezwykle atrakcyjną kobietę. Jagna bardzo podoba się {{9}} obydwu. Relacja bohaterów z piękną dziewczyną doprowadza do wielu konfliktów we {{10}}.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "najciekawszą",
        "najciekawszych",
        "najciekawszym"
       ],
       "answer": "najciekawszych"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "roku",
        "rok",
        "lat"
       ],
       "answer": "roku"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "nam",
        "nas",
        "nami"
       ],
       "answer": "nas"
      },
      {
       "id": "1",
       "options": [
        "malarskiego",
        "malarskiej",
        "malarską"
       ],
       "answer": "malarskiej"
      },
      {
       "id": "2",
       "options": [
        "typowym",
        "typowego",
        "typowemu"
       ],
       "answer": "typowym"
      },
      {
       "id": "3",
       "options": [
        "jemu",
        "jego",
        "go"
       ],
       "answer": "jego"
      },
      {
       "id": "4",
       "options": [
        "aktorzy",
        "aktorów",
        "aktorach"
       ],
       "answer": "aktorzy"
      },
      {
       "id": "5",
       "options": [
        "kadru",
        "kadr",
        "kadrem"
       ],
       "answer": "kadrem"
      },
      {
       "id": "6",
       "options": [
        "fascynujących",
        "fascynującymi",
        "fascynującym"
       ],
       "answer": "fascynujących"
      },
      {
       "id": "7",
       "options": [
        "tą",
        "tę",
        "tej"
       ],
       "answer": "tej"
      },
      {
       "id": "8",
       "options": [
        "ojca",
        "ojcu",
        "ojcem"
       ],
       "answer": "ojcu"
      },
      {
       "id": "9",
       "options": [
        "ich",
        "im",
        "nim"
       ],
       "answer": "im"
      },
      {
       "id": "10",
       "options": [
        "wsie",
        "wsią",
        "wsi"
       ],
       "answer": "wsi"
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
     "source": "Na podstawie: https://www.medonet.pl/zdrowy-dom/zdrowy-sen,jak-zasnac-w-kilkadziesiat-sekund--to-genialny-trik-zolnierzy,artykul,55836898.html",
     "wordBox": [
      "dlaczego",
      "że",
      "który",
      "lecz",
      "jeśli",
      "lub",
      "a"
     ],
     "distractors": [
      "dlaczego"
     ],
     "passage": "Masz wrażenie, {{ex}} więcej czasu zajmuje ci zasypianie niż sam sen? Budzisz się często w nocy, {{1}} rano jesteś zmęczony? Nie tylko ty masz taki kłopot, {{2}} także miliony ludzi na całym świecie. To wina stresu, {{3}} odczuwasz przez cały dzień. Nie zaśniesz, {{4}} wieczorem będziesz nadal myślał o swoich problemach. Lepiej wyłącz telefon, komputer i telewizor oraz weź ciepłą kąpiel {{5}} prysznic. Możesz też posłuchać cichej, spokojnej muzyki. To na pewno pomoże ci się zrelaksować.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "że"
      },
      {
       "id": "1",
       "answer": "a"
      },
      {
       "id": "2",
       "answer": "lecz"
      },
      {
       "id": "3",
       "answer": "który"
      },
      {
       "id": "4",
       "answer": "jeśli"
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
     "source": "Na podstawie: 10 nietypowych sportów zimowych, w których warto się sprawdzić | activeManiaK - portal dla aktywnych",
     "passage": "Jesienna pogoda, która jest o wiele {{ex1}} od letniej, to zwykle wyzwanie dla ambitnych sportowców-amatorów. Czasami {{ex2}} zmniejsza ona ich motywację do aktywności fizycznej. Zima to pod tym względem {{1}} ze wszystkich pora roku. Na szczęście w tym okresie można uprawiać {{2}} spotykane aktywności fizyczne. Czy słyszeliście o dyscyplinie sportu o nazwie snowkiting? To zimowa odmiana kitesurfingu – rozwija się ona {{3}} niż myślicie. Snow polo, czyli polo na śniegu to także dyscyplina, która każdego roku zyskuje coraz {{4}} fanów na całym świecie. Z kolei biathlon to konkurencja, która łączy biegi narciarskie ze strzelectwem i jest sportem {{5}} w Niemczech, Włoszech i części Skandynawii.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "gorsza",
        "gorzej",
        "złą"
       ],
       "answer": "gorsza"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "bardziej zdecydowanych",
        "zdecydowanie",
        "mniej zdecydowanie"
       ],
       "answer": "zdecydowanie"
      },
      {
       "id": "1",
       "options": [
        "najtrudniej",
        "trudniejsza",
        "najtrudniejsza"
       ],
       "answer": "najtrudniejsza"
      },
      {
       "id": "2",
       "options": [
        "rzadziej",
        "rzadkie",
        "rzadsze"
       ],
       "answer": "rzadziej"
      },
      {
       "id": "3",
       "options": [
        "szybsza",
        "szybciej",
        "najszybciej"
       ],
       "answer": "szybciej"
      },
      {
       "id": "4",
       "options": [
        "więcej",
        "najwięcej",
        "największych"
       ],
       "answer": "więcej"
      },
      {
       "id": "5",
       "options": [
        "popularnym",
        "popularniej",
        "popularnie"
       ],
       "answer": "popularnym"
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
     "source": "Na podstawie: Matura czyli... jak nie dać się zwariować - Szkoła Maturzystów Łukasza Jarosińskiego (szkolamaturzystow.pl)",
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "Egzamin maturalny coraz bliżej. {{ex1}} on ogromny wpływ na przyszłość uczniów, bo od jego wyników {{ex2}} to, czy za kilka miesięcy wszyscy {{ex3}} na wymarzone kierunki studiów. Dlatego już teraz młodzi ludzie intensywnie {{1}}, jak dobrze przygotować się do egzaminu. Często oni {{2}} o radę nauczycieli albo {{3}} książki z testami przykładowymi. Moja córka jest bardzo zestresowana i dlatego ona {{4}} w tym tygodniu zapisać się na kurs przygotowawczy. Jednak ja {{5}} jej i innym uczniom:\n\n– Nie trzeba się martwić, tylko opracować dobry plan pracy. Gdy zaplanujecie naukę, to przez najbliższe miesiące {{6}} dobrze przygotowywać się do egzaminu. Ta strategia na pewno {{7}} was do rozpoczęcia systematycznego powtarzania, {{8}} wam poczucie spokoju. Dlatego w maju nikt nie {{9}} uczyć się w stresie od rana do wieczora na kilka dni przed egzaminem. Na pewno na maturę {{10}} dobrze przygotowani.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "mieć",
       "answer": "Ma"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "zależeć",
       "answer": "będzie zależało",
       "accept": [
        "będzie zależeć"
       ]
      },
      {
       "id": "ex3",
       "example": true,
       "given": "dostać się",
       "answer": "dostaną się"
      },
      {
       "id": "1",
       "given": "zastanawiać się",
       "answer": "zastanawiają się"
      },
      {
       "id": "2",
       "given": "prosić",
       "answer": "proszą"
      },
      {
       "id": "3",
       "given": "kupować",
       "answer": "kupują"
      },
      {
       "id": "4",
       "given": "chcieć",
       "answer": "chce"
      },
      {
       "id": "5",
       "given": "tłumaczyć",
       "answer": "tłumaczę"
      },
      {
       "id": "6",
       "given": "wy-móc",
       "answer": "będziecie mogli"
      },
      {
       "id": "7",
       "given": "zmotywować",
       "answer": "zmotywuje"
      },
      {
       "id": "8",
       "given": "zapewnić",
       "answer": "zapewni"
      },
      {
       "id": "9",
       "given": "musieć",
       "answer": "będzie musiał"
      },
      {
       "id": "10",
       "given": "wy – przyjść",
       "answer": "przyjdziecie"
      }
     ],
     "pdfNotes": [
      "PDF prints the superscript '3' after '(zastanawiać się)' of item 1 — a typo in the original, ignore."
     ],
     "pdfPages": [
      17,
      18
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
      "sentence": "Staś był wczoraj z wizytą u brata.",
      "underlined": "u brata",
      "stem": "…………… wczoraj Staś był z wizytą?",
      "shortAnswer": "U brata.",
      "answer": "U kogo",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Robert zaraził się grypą od Stefana.",
       "underlined": "grypą",
       "stem": "…………… zaraził się Robert od Stefana?",
       "shortAnswer": "Grypą.",
       "answer": "Czym",
       "accept": []
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Długo czekałem pod szkołą na mamę.",
       "underlined": "na mamę",
       "stem": "…………… długo czekałeś pod szkołą?",
       "shortAnswer": "Na mamę.",
       "answer": "Na kogo",
       "accept": []
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Basia studiuje medycynę piąty rok.",
       "underlined": "piąty",
       "stem": "…………… rok Basia studiuje medycynę?",
       "shortAnswer": "Piąty.",
       "answer": "Który",
       "accept": []
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Babcia cieszy się z wizyty wnuków.",
       "underlined": "z wizyty wnuków",
       "stem": "…………… cieszy się babcia?",
       "shortAnswer": "Z wizyty wnuków.",
       "answer": "Z czego",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Nauczyciel sprawdzi testy na początku przyszłego tygodnia.",
       "underlined": "na początku przyszłego tygodnia",
       "stem": "…………… nauczyciel sprawdzi testy?",
       "shortAnswer": "Na początku przyszłego tygodnia.",
       "answer": "Kiedy",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Official key prints the question word with decoration (Czym…?, Na kogo…?); stored without it, match.stripChars ignores the decoration."
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
      "source": "Mój tata świetnie mówi po francusku.",
      "hint": "zna",
      "answer": "Mój tata świetnie zna francuski.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "Mateusz z zainteresowaniem przyglądał się kolorowym wystawom sklepów.",
       "hint": "patrzył",
       "answer": "Mateusz z zainteresowaniem patrzył na kolorowe wystawy sklepów.",
       "rubric": "dodanie przyimka (0,25) + 2 transformacje (2 x 0,25) + brak transformacji (0,25)",
       "rubricParts": [
        {
         "what": "dodanie przyimka",
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
       "id": "g6.2",
       "number": 2,
       "source": "Proszę ustawić ławki wzdłuż tamtej żółtej ściany.",
       "hint": "pod",
       "answer": "Proszę ustawić ławki pod tamtą żółtą ścianą.",
       "rubric": "1 transformacja „ścianą” 0,5 p. + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "transformacja „ścianą”",
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
       "source": "Uczniów z mojej klasy nie stresuje egzamin pisemny.",
       "hint": "nie boją się",
       "answer": "Uczniowie z mojej klasy nie boją się egzaminu pisemnego.",
       "rubric": "1 transformacja „uczniowie” 0,5 p. + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "transformacja „uczniowie”",
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
       "source": "Kto jest autorem tego opowiadania?",
       "hint": "napisał",
       "answer": "Kto napisał to opowiadanie?",
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
       "source": "Mój syn jest starszym programistą.",
       "hint": "jako",
       "answer": "Mój syn pracuje jako starszy programista.",
       "rubric": "dodanie czasownika 0,5 p. + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "dodanie czasownika",
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
     "passage": "Mąż: {{ex1}}, Kasiu! Zaproponowano mi awans! Już nawet od przyszłego miesiąca {{ex2}} zarabiać dwa razy więcej niż teraz. Szef powiedział mi tylko: „{{1}} swoją żonę, czy {{2}} zamieszkać w stolicy, bo tam jest to nowe stanowisko pracy”.\n\nŻona: Decyzja nie jest łatwa. Pieniądze oczywiście by się nam {{3}}, ale ja teraz nie mogę zmienić pracy, odejść z mojej ukochanej szkoły… Nie chcę tego robić w trakcie roku szkolnego. Może na razie {{4}} się do Warszawy sam?\n\nMąż: Sam? Nie {{5}}, proszę! Całymi dniami {{6}} za tobą.\n\nŻona: Przesadzasz. Przecież wszystkie weekendy {{7}} razem. Teraz i tak pracujesz od świtu do nocy.\n\nMąż: Dla mnie tylko dwa dni w tygodniu z tobą to za mało. Proszę cię, {{8}} razem!\n\nŻona: Nie dam rady. Do wakacji muszę tu zostać.\n\nMąż: A co z mieszkaniem? Nie stać nas na wynajmowanie dwóch: tu i w Warszawie.\n\nŻona: Może na razie niech firma {{9}} ci służbowy pokój koło biura.\n\nMąż: No dobrze… Poproszę o to szefa.\n\nŻona: {{10}} z nim o tym jutro. Z niecierpliwością będę czekała na wiadomość od ciebie.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "Posłuchaj",
        "słuchajmy",
        "posłuchałabyś"
       ],
       "answer": "Posłuchaj"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "mogłabym",
        "mogłabyś",
        "mógłbym"
       ],
       "answer": "mógłbym"
      },
      {
       "id": "1",
       "options": [
        "Zapytaj",
        "Zapytałbym",
        "Pytajmy"
       ],
       "answer": "Zapytaj"
      },
      {
       "id": "2",
       "options": [
        "chcielibyście",
        "chciałabyś",
        "chciałaby"
       ],
       "answer": "chciałaby"
      },
      {
       "id": "3",
       "options": [
        "przydałyby",
        "przydały",
        "przydawały"
       ],
       "answer": "przydały"
      },
      {
       "id": "4",
       "options": [
        "przeprowadziłby",
        "przeprowadziłbyś",
        "przeprowadzałbyś"
       ],
       "answer": "przeprowadziłbyś"
      },
      {
       "id": "5",
       "options": [
        "zażartuj",
        "żartowałbyś",
        "żartuj"
       ],
       "answer": "żartuj"
      },
      {
       "id": "6",
       "options": [
        "tęsknij",
        "tęskniłbym",
        "zatęskniłbym"
       ],
       "answer": "tęskniłbym"
      },
      {
       "id": "7",
       "options": [
        "spędzalibyśmy",
        "spędzajmy",
        "spędzilibyśmy"
       ],
       "answer": "spędzalibyśmy"
      },
      {
       "id": "8",
       "options": [
        "pojechalibyśmy",
        "pojedźmy",
        "jeździmy"
       ],
       "answer": "pojedźmy"
      },
      {
       "id": "9",
       "options": [
        "dałaby",
        "da",
        "dawałaby"
       ],
       "answer": "da"
      },
      {
       "id": "10",
       "options": [
        "Porozmawiaj",
        "Rozmawiaj",
        "Rozmawiałbyś"
       ],
       "answer": "Porozmawiaj"
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
     "pdfPages": [
      20,
      21
     ],
     "source": "Na podstawie: Projekt ogrodu - najważniejsze zasady planowania ogrodu - murator.pl (muratordom.pl)",
     "wordBox": [
      "z",
      "w",
      "przez",
      "na",
      "bez",
      "na",
      "wokół"
     ],
     "distractors": [
      "bez"
     ],
     "passage": "Dobrze zaprojektowany {{ex}} architekta ogród powinien przede wszystkim odpowiadać potrzebom domowników. Plany współczesnych ogrodów to nie tylko rośliny {{1}} domu. Ogrody mają harmonijnie łączyć się {{2}} budynkiem i otoczeniem, jak również służyć wypoczynkowi {{3}} świeżym powietrzu. Jeśli wśród domowników są dzieci, trzeba zaplanować miejsce, gdzie będą się mogły bawić {{4}} bezpieczny sposób dla siebie i dla roślin, żeby ich nie zniszczyć. Maluchom wystarczy piaskownica, ale starsze dzieci będą szczęśliwe, gdy zbudujemy im domek {{5}} drzewie.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "przez"
      },
      {
       "id": "1",
       "answer": "wokół"
      },
      {
       "id": "2",
       "answer": "z"
      },
      {
       "id": "3",
       "answer": "na"
      },
      {
       "id": "4",
       "answer": "w"
      },
      {
       "id": "5",
       "answer": "na"
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
         "prompt": "Robi Pani/Pan remont kuchni i chce Pani/Pan sprzedać używane meble oraz sprzęty kuchenne. Proszę napisać ogłoszenie, które zamieści Pani/Pan w internecie."
        },
        {
         "id": "b",
         "genre": "opowiadanie",
         "wordTarget": 170,
         "prompt": "Proszę napisać opowiadanie, które zaczyna się od zdania: „Tego dnia padał deszcz.”",
         "startsWith": "Tego dnia padał deszcz."
        }
       ]
      },
      {
       "id": "II",
       "parts": [
        {
         "id": "a",
         "genre": "pozdrowienia",
         "wordTarget": 35,
         "prompt": "Przeprowadziła się Pani / Przeprowadził się Pan do innego miasta w Polsce. Proszę napisać pozdrowienia z nowego miejsca do polskiej koleżanki/polskiego kolegi."
        },
        {
         "id": "b",
         "genre": "sprawozdanie",
         "wordTarget": 165,
         "prompt": "Była Pani / Był Pan na otwarciu nowego centrum sportowego „Wszystko dla Zdrowia”, w którym znajdują się sklepy i sale do ćwiczeń. Proszę napisać sprawozdanie (relację) z tego wydarzenia do polskiej gazety, z którą Pani/Pan współpracuje."
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
         "prompt": "Dyrektorka firmy, w której Pani/Pan pracuje, wychodzi za mąż. Proszę napisać życzenia z tej okazji."
        },
        {
         "id": "b",
         "genre": "esej",
         "wordTarget": 170,
         "prompt": "Proszę napisać esej (wypracowanie szkolne) pt. „Zawsze znajdę czas na moje hobby”.",
         "title": "Zawsze znajdę czas na moje hobby"
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
