window.EXAMS = window.EXAMS || {};
window.EXAMS["2023-04"] = {
 "schemaVersion": 1,
 "id": "2023-04",
 "meta": {
  "level": "B1",
  "labelPdf": "kwiecień 2023",
  "examDates": "15-16.04.2023",
  "sources": {
   "test": "sources/2023-04/test.pdf",
   "transcript": "sources/2023-04/transcript.pdf",
   "audio": "sources/2023-04/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear.",
   "Listening II has 8 dialogues (8 x 1 p.); listening V has 4 persons and 5 answer boxes (A 1, B 2, C 1, D 1; 5 x 1 p.).",
   "Writing I b is a photo prompt (data/img/2023-04/w-I-b-1.jpg, source printed: pixabay.com/pl).",
   "Grammar IV is 'czas teraźniejszy i przeszły'; its two PRZYKŁAD answers (było, powtarzają) are printed in the text."
  ]
 },
 "audio": {
  "src": "sources/2023-04/audio.mp3",
  "duration": 1636.8,
  "intro": [
   0,
   47.2
  ],
  "readingTime": [
   47.2,
   107.8
  ],
  "tail": [
   1571.9,
   1636.8
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
        "end": 328.6
       }
      ],
      "items": [
       {
        "ref": "l1.ex",
        "start": 134.2,
        "end": 144.9
       },
       {
        "ref": "l1.1",
        "start": 151.4,
        "end": 156.6
       },
       {
        "ref": "l1.2",
        "start": 163.1,
        "end": 169.3
       },
       {
        "ref": "l1.3",
        "start": 175.9,
        "end": 183.5
       },
       {
        "ref": "l1.4",
        "start": 189.8,
        "end": 196.7
       },
       {
        "ref": "l1.5",
        "start": 203.4,
        "end": 209.0
       },
       {
        "ref": "l1.6",
        "start": 215.5,
        "end": 220.9
       },
       {
        "ref": "l1.7",
        "start": 227.2,
        "end": 233.3
       },
       {
        "ref": "l1.8",
        "start": 239.8,
        "end": 246.5
       },
       {
        "ref": "l1.9",
        "start": 252.8,
        "end": 259.9
       },
       {
        "ref": "l1.10",
        "start": 266.2,
        "end": 273.9
       },
       {
        "ref": "l1.11",
        "start": 280.2,
        "end": 288.3
       },
       {
        "ref": "l1.12",
        "start": 294.6,
        "end": 302.1
       },
       {
        "ref": "l1.13",
        "start": 308.5,
        "end": 314.8
       },
       {
        "ref": "l1.14",
        "start": 321.1,
        "end": 328.6
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
        "text": "w muzeum."
       },
       {
        "id": "b",
        "text": "w galerii handlowej."
       },
       {
        "id": "c",
        "text": "w biurze podróży."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "sp": "K",
       "t": "Uwaga, prosimy nie dotykać eksponatów."
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
         "text": "w bibliotece."
        },
        {
         "id": "b",
         "text": "w kasie biletowej."
        },
        {
         "id": "c",
         "text": "w księgarni."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Chciałbym kupić poradnik dla ogrodników."
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź oznacza, że kobieta",
       "options": [
        {
         "id": "a",
         "text": "proponuje komuś mięso."
        },
        {
         "id": "b",
         "text": "poleca komuś tę dietę."
        },
        {
         "id": "c",
         "text": "krytykuje taką dietę."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Uważam, że dieta wegetariańska będzie dla pani najlepsza."
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "pomoc."
        },
        {
         "id": "b",
         "text": "gratulacje."
        },
        {
         "id": "c",
         "text": "zakaz."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Zapomnij o wyjściu do kina, dopóki nie poprawisz ocen z biologii."
       }
      },
      {
       "id": "l1.4",
       "number": 4,
       "prompt": "Ta wypowiedź oznacza, że w całym kraju",
       "options": [
        {
         "id": "a",
         "text": "będzie dosyć zimno."
        },
        {
         "id": "b",
         "text": "będzie brakować słońca."
        },
        {
         "id": "c",
         "text": "będzie padał deszcz."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "W całej Polsce będzie duże zachmurzenie, na północy możliwe burze."
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "zaproszenie."
        },
        {
         "id": "b",
         "text": "pozdrowienia."
        },
        {
         "id": "c",
         "text": "komplement."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Będzie mi miło, jeśli wpadniecie do mnie w sobotę wieczorem."
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "na stoisku z owocami."
        },
        {
         "id": "b",
         "text": "w warzywniaku."
        },
        {
         "id": "c",
         "text": "w cukierni."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Czy te babeczki z kremem cytrynowym są świeże?"
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "u lekarza."
        },
        {
         "id": "b",
         "text": "na przyjęciu."
        },
        {
         "id": "c",
         "text": "w barze."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Ma pan brzydki kaszel, powinien pan rzucić palenie."
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź jest typowa dla",
       "options": [
        {
         "id": "a",
         "text": "pracownika sklepu."
        },
        {
         "id": "b",
         "text": "kierownika działu."
        },
        {
         "id": "c",
         "text": "klienta w sklepie."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Przepraszam, szukam drukarki, a nie mogę znaleźć działu z elektroniką."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź dotyczy",
       "options": [
        {
         "id": "a",
         "text": "ślubu znajomych."
        },
        {
         "id": "b",
         "text": "narodzin dziecka."
        },
        {
         "id": "c",
         "text": "nadchodzących świąt."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Gratulacje dla szczęśliwych rodziców! Jak mała ma na imię?"
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "prośbę."
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
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Jedź z nimi, na pewno nie będziesz żałować. Toruń to piękne miasto."
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź oznacza, że ekspres",
       "options": [
        {
         "id": "a",
         "text": "jest zepsuty."
        },
        {
         "id": "b",
         "text": "jest w promocji."
        },
        {
         "id": "c",
         "text": "jest niedostępny."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Ten ekspres do kawy był tani, ale nie myślałam, że po tygodniu przestanie działać."
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "krytykę."
        },
        {
         "id": "b",
         "text": "rozkaz."
        },
        {
         "id": "c",
         "text": "radę."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Wyglądasz na chorą. Na twoim miejscu skonsultowałabym się z lekarzem."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "powitanie."
        },
        {
         "id": "b",
         "text": "pożegnanie."
        },
        {
         "id": "c",
         "text": "przeprosiny."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Miło było pana spotkać. Zapraszamy ponownie!"
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź to pytanie o",
       "options": [
        {
         "id": "a",
         "text": "kolor."
        },
        {
         "id": "b",
         "text": "cenę."
        },
        {
         "id": "c",
         "text": "rozmiar."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Ta błękitna sukienka jest bardzo ładna, ale czy jest o numer większa?"
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
       338.8,
       354.8
      ],
      "plays": [
       {
        "start": 365.2,
        "end": 494.5
       },
       {
        "start": 540.4,
        "end": 669.8
       }
      ],
      "pauseBetweenPlays": 45.9,
      "items": [
       {
        "ref": "l2.ex",
        "start": 365.2,
        "end": 378.7
       },
       {
        "ref": "l2.1",
        "start": 385.1,
        "end": 390.7
       },
       {
        "ref": "l2.2",
        "start": 397.1,
        "end": 406.6
       },
       {
        "ref": "l2.3",
        "start": 413.0,
        "end": 420.4
       },
       {
        "ref": "l2.4",
        "start": 426.5,
        "end": 434.6
       },
       {
        "ref": "l2.5",
        "start": 440.6,
        "end": 449.7
       },
       {
        "ref": "l2.6",
        "start": 455.8,
        "end": 464.4
       },
       {
        "ref": "l2.7",
        "start": 470.5,
        "end": 479.4
       },
       {
        "ref": "l2.8",
        "start": 485.8,
        "end": 494.5
       }
      ],
      "source": "auto-silencedetect",
      "verified": false
     },
     "example": {
      "id": "l2.ex",
      "prompt": "Z tego dialogu wynika, że on",
      "options": [
       {
        "id": "a",
        "text": "zrobił wszystkie zadania."
       },
       {
        "id": "b",
        "text": "nie umie obliczyć zadań."
       },
       {
        "id": "c",
        "text": "musi dokończyć zadanie domowe."
       }
      ],
      "answer": "c",
      "shown": true,
      "transcript": {
       "lines": [
        {
         "sp": "K",
         "t": "Odrobiłeś pracę domową z matematyki?"
        },
        {
         "sp": "M",
         "t": "Prawie. Zostały mi dwa ćwiczenia."
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
         "text": "on odmawia wyjścia."
        },
        {
         "id": "b",
         "text": "ona nie chce wyjść."
        },
        {
         "id": "c",
         "text": "on zgadza się na wyjście."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Pójdziesz z nami w sobotę na mecz?"
         },
         {
          "sp": "M",
          "t": "Czemu nie!"
         }
        ]
       }
      },
      {
       "id": "l2.2",
       "number": 2,
       "prompt": "Z tego dialogu wynika, że ona",
       "options": [
        {
         "id": "a",
         "text": "nie chce jeść kanapek."
        },
        {
         "id": "b",
         "text": "pyta o dania bezmięsne."
        },
        {
         "id": "c",
         "text": "zamawia proponowane potrawy."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Dziś polecam żurek w chlebie i stek wołowy."
         },
         {
          "sp": "K",
          "t": "A mają państwo coś dla wegetarian?"
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
         "text": "on przyniósł własną torbę."
        },
        {
         "id": "b",
         "text": "w sklepie reklamówki są za darmo."
        },
        {
         "id": "c",
         "text": "on rezygnuje z zakupów."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Doliczyć papierową torbę?"
         },
         {
          "sp": "M",
          "t": "Dziękuję, nie trzeba, mam swoją."
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
         "text": "on krytykuje fryzurę kobiety."
        },
        {
         "id": "b",
         "text": "ona jest zadowolona ze swojej fryzury."
        },
        {
         "id": "c",
         "text": "on mówi kobiecie komplement."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Do twarzy ci w tych krótkich włosach."
         },
         {
          "sp": "K",
          "t": "Nie wyglądam zbyt poważnie?"
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
         "text": "wizyta jest możliwa w tym tygodniu."
        },
        {
         "id": "b",
         "text": "lekarz w tym tygodniu ma wolne."
        },
        {
         "id": "c",
         "text": "lekarz w piątki ma wizyty domowe."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Kiedy przyjmuje doktor Nowak?"
         },
         {
          "sp": "K",
          "t": "Codziennie od 8.00 do 13.00, ale do piątku jest na urlopie."
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
         "text": "oni mają mało czasu."
        },
        {
         "id": "b",
         "text": "on nie potrzebuje pomocy."
        },
        {
         "id": "c",
         "text": "on już przygotował bagaż."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Spakowałeś walizkę? Za chwilę musimy wyjść."
         },
         {
          "sp": "M",
          "t": "Nie radzę sobie sam z pakowaniem."
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
         "text": "ona kupiła małą kawalerkę."
        },
        {
         "id": "b",
         "text": "z okien mieszkania widać drzewa."
        },
        {
         "id": "c",
         "text": "mieszkanie ma dużą kuchnię."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Słyszałem, że kupiłaś mieszkanie."
         },
         {
          "sp": "K",
          "t": "Trzy pokoje z aneksem kuchennym i widokiem na las."
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
         "text": "ona przekazuje złą wiadomość."
        },
        {
         "id": "b",
         "text": "ona dostała pracę."
        },
        {
         "id": "c",
         "text": "on gratuluje kobiecie decyzji."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Dziadku, straciłam pracę."
         },
         {
          "sp": "M",
          "t": "Bardzo mi przykro, moje dziecko."
         }
        ]
       }
      }
     ],
     "pdfNotes": [
      "Official transcript II.2 prints the speaker tag of the first line as 'M)' (opening bracket missing); read as (M)."
     ]
    },
    {
     "id": "l3",
     "number": "III",
     "type": "mc",
     "grading": "auto",
     "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać wywiadu o turystyce rowerowej i zaznaczyć właściwe odpowiedzi.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: https://www.rowerzysta-podroznik.pl/blog/gentleman-na-rowerze/",
     "audio": {
      "announce": [
       680.0,
       695.7
      ],
      "plays": [
       {
        "start": 705.9,
        "end": 812.2
       },
       {
        "start": 858.0,
        "end": 964.3
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
        "t": "Dzień dobry, dziś rozmawiam z Henrykiem Konopką, którego pasją jest jazda rowerem. Henryku, od kiedy uprawiasz turystykę rowerową?"
       },
       {
        "sp": "Pan Henryk",
        "t": "Rower od najmłodszych lat był dla mnie ważny. Mieszkałem na wsi i był to dla mnie środek transportu – jeździłem nim do szkoły, do sklepu, do kolegów. Ale turystyką rowerową i dłuższymi wyjazdami zainteresowałem się wiosną 2010 roku, minęło już więc ponad 10 lat."
       },
       {
        "sp": "Dziennikarka",
        "t": "Dlaczego lubisz jeździć na rowerze?"
       },
       {
        "sp": "Pan Henryk",
        "t": "Ten sport to dla mnie nie tylko relaks. To najlepszy moment na przemyślenia. Analizuję wtedy trudne sprawy zawodowe, myślę o przyszłości i często podejmuję ważne decyzje."
       },
       {
        "sp": "Dziennikarka",
        "t": "Czego nie lubisz w jeździe na rowerze?"
       },
       {
        "sp": "Pan Henryk",
        "t": "Nie lubię jeździć w tym samym tempie co inni. Nawet jeśli jestem w grupie, nie dostosowuję się do innych rowerzystów. Można powiedzieć, że jestem rowerowym indywidualistą."
       },
       {
        "sp": "Dziennikarka",
        "t": "Po jakich drogach najczęściej jeździsz?"
       },
       {
        "sp": "Pan Henryk",
        "t": "Planuję wycieczki wszędzie tam, gdzie jest mały ruch. Najlepiej czuję się w lesie. Mam taką ulubioną trasę wokół Jeziora Nidzkiego liczącą około 50–80 km. Cisza, jezioro, drzewa – to dla mnie pełnia szczęścia."
       },
       {
        "sp": "Dziennikarka",
        "t": "Jakie jest twoje rowerowe marzenie?"
       },
       {
        "sp": "Pan Henryk",
        "t": "Od kilku lat planuję polecieć do Chin, żeby tam pojeździć, ale zawsze coś mi wypada. Może jeszcze się tam wybiorę."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "prompt": "Henryk Konopka jeździł na rowerze",
      "options": [
       {
        "id": "a",
        "text": "od dziecka."
       },
       {
        "id": "b",
        "text": "od czasu do czasu."
       },
       {
        "id": "c",
        "text": "do pracy i do sklepu."
       }
      ],
      "answer": "a",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "prompt": "Henryk zaczął uprawiać turystykę rowerową",
       "options": [
        {
         "id": "a",
         "text": "dokładnie rok temu."
        },
        {
         "id": "b",
         "text": "pod koniec ubiegłego roku."
        },
        {
         "id": "c",
         "text": "już jakiś czas temu."
        }
       ],
       "answer": "c"
      },
      {
       "id": "l3.2",
       "number": 2,
       "prompt": "Dla Henryka jazda na rowerze to",
       "options": [
        {
         "id": "a",
         "text": "przede wszystkim trening fizyczny."
        },
        {
         "id": "b",
         "text": "czas na rozmowy z innymi."
        },
        {
         "id": "c",
         "text": "czas na planowanie i refleksję."
        }
       ],
       "answer": "c"
      },
      {
       "id": "l3.3",
       "number": 3,
       "prompt": "Henryk Konopka zwykle wybiera",
       "options": [
        {
         "id": "a",
         "text": "zorganizowane wycieczki rowerowe."
        },
        {
         "id": "b",
         "text": "jazdę samodzielną."
        },
        {
         "id": "c",
         "text": "bardzo szybką jazdę."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.4",
       "number": 4,
       "prompt": "Henryk najbardziej lubi jeździć",
       "options": [
        {
         "id": "a",
         "text": "po spokojnych okolicach."
        },
        {
         "id": "b",
         "text": "w kilkudniowe trasy."
        },
        {
         "id": "c",
         "text": "po miejskich trasach rowerowych."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l3.5",
       "number": 5,
       "prompt": "Henryk Konopka chciałby",
       "options": [
        {
         "id": "a",
         "text": "pojechać rowerem do Chin."
        },
        {
         "id": "b",
         "text": "pojeździć na rowerze za granicą."
        },
        {
         "id": "c",
         "text": "wziąć udział w wyścigu rowerowym."
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
     "prompt": "Proszę posłuchać rad dotyczących aranżacji małego mieszkania i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://doxa.fm/audycja/jak-urzadzic-swoje-mieszkanie-27-08-2016/",
     "audio": {
      "announce": [
       974.5,
       990.4
      ],
      "plays": [
       {
        "start": 1000.6,
        "end": 1098.6
       },
       {
        "start": 1144.9,
        "end": 1242.9
       }
      ],
      "pauseBetweenPlays": 46.3,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "text": "W dzisiejszej audycji opowiem państwu, jak urządzić małe mieszkanie. Mam doświadczenie, bo rok temu sama kupiłam kawalerkę. Zacznijmy od kuchni. Niewielkie mieszkania w nowych budynkach zamiast małej kuchni i zamykanego pokoju dziennego zwykle mają salon połączony z kuchnią – jest to świetne rozwiązanie, bo dzięki temu mamy więcej miejsca. Między kuchnią a pokojem możemy postawić funkcjonalny stół. Do salonu warto kupić sofę z funkcją spania – dzięki temu, w razie potrzeby, zaproponujemy nocleg gościom. Należy pomyśleć o dobrym zagospodarowaniu ścian. Nad sofą dobrze jest zawiesić lustro, co optycznie powiększy mieszkanie. Jeżeli chodzi o stolik kawowy, wybierzmy raczej nieduży. W niewielkich mieszkaniach zwykle mieszka jedna osoba lub para i nie potrzeba dużego stolika kawowego, który zabierze miejsce. Warto pamiętać o roślinach, których widok uspakaja po długim dniu pracy. Jeśli mamy małą sypialnię i nie możemy pozwolić sobie na komody i szafę, spróbujmy znaleźć dla nich inne miejsce. Łóżko warto postawić pod ścianą, którą zabudujemy szafkami aż do sufitu. Wykorzystamy je i na ubrania, i na książki. Niektóre szafki powinny być zamykane, by schować w nich różne drobiazgi."
     },
     "example": {
      "id": "l4.ex",
      "statement": "W małym mieszkaniu stół powinien stanąć na granicy kuchni i salonu.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "statement": "Do dużego pokoju trzeba wybrać wygodne fotele dla gości.",
       "answer": "NIE"
      },
      {
       "id": "l4.2",
       "number": 2,
       "statement": "W małym pokoju warto postawić na podłodze lustro.",
       "answer": "NIE"
      },
      {
       "id": "l4.3",
       "number": 3,
       "statement": "W małym salonie nie musimy rezygnować ze stolika kawowego.",
       "answer": "TAK"
      },
      {
       "id": "l4.4",
       "number": 4,
       "statement": "Rośliny są najlepszą dekoracją mieszkania.",
       "answer": "NIE"
      },
      {
       "id": "l4.5",
       "number": 5,
       "statement": "Szafki powinny wisieć w sypialni nad łóżkiem.",
       "answer": "TAK"
      }
     ]
    },
    {
     "id": "l5",
     "number": "V",
     "type": "matchMulti",
     "grading": "auto",
     "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać wspomnień seniorów na temat ich nauczycieli i dopasować osoby (1-4) do ich wypowiedzi (A-D). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerSlot": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 7,
     "source": "Na podstawie: https://radiosovo.pl/sonda-wspominamy-swoich-nauczycieli/",
     "audio": {
      "announce": [
       1253.5,
       1269.5
      ],
      "plays": [
       {
        "start": 1279.7,
        "end": 1395.0
       },
       {
        "start": 1440.5,
        "end": 1555.8
       }
      ],
      "pauseBetweenPlays": 45.5,
      "items": [
       {
        "ref": "p1",
        "start": 1279.7,
        "end": 1305.2
       },
       {
        "ref": "p2",
        "start": 1309.4,
        "end": 1336.5
       },
       {
        "ref": "p3",
        "start": 1341.0,
        "end": 1368.7
       },
       {
        "ref": "p4",
        "start": 1373.2,
        "end": 1395.0
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
      "statement": "Opowiada o więcej niż jednym nauczycielu lub jednej nauczycielce.",
      "answer": [
       "1"
      ],
      "shown": true
     },
     "statements": [
      {
       "id": "l5.A",
       "letter": "A",
       "text": "Wspomina, że nauczyciel szukał lub nauczycielka szukała mocnych stron uczniów.",
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
       "text": "Dzięki nauczycielowi lub nauczycielce wybrał zawód.",
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
       "text": "Chwali nauczyciela lub nauczycielkę za dużą wiedzę i traktuje go/ją jako wzór.",
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
       "text": "Już nie pracuje zawodowo, ale wciąż się uczy.",
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
        "sp": "Osoba 1 (K)",
        "t": "Do dziś wspominam matematyczki z liceum. Obie panie były łagodne, cierpliwe i w prosty sposób umiały wytłumaczyć lekcję. Mówiły do uczniów po imieniu. Nauczycielki miały wpływ na moją karierę zawodową, ponieważ pracowałam jako księgowa."
       },
       {
        "sp": "Osoba 2 (M)",
        "t": "Nauczycielka języka polskiego była z Krakowa i podczas lekcji dużo nam o tym mieście opowiadała, na przykład dlaczego ulice w centrum mają takie, a nie inne nazwy. Najbardziej podobało mi się to, że polonistka nigdy nas nie krytykowała, w każdym znalazła coś pozytywnego. Pozwalała nam też decydować, o których książkach chcemy rozmawiać na lekcjach."
       },
       {
        "sp": "Osoba 3 (K)",
        "t": "Miałam ogromne szczęście do nauczycieli, ale najbardziej lubiłam panią od biologii. Uczyła świetnie, dzięki niej poszłam na studia przyrodnicze i zostałam zoologiem. Pani Magdalena mówiła też, że trzeba studiować całe życie, więc teraz – już jako emerytka – zapisałam się na zajęcia uniwersytetu dla seniorów."
       },
       {
        "sp": "Osoba 4 (M)",
        "t": "Ze szkoły zapamiętałem nauczyciela historii, ponieważ lubiłem ten przedmiot. Nasz historyk znał odpowiedź na każde nasze pytanie, a ponadto był bardzo kulturalnym człowiekiem – szanował nas i swoją pracę. Do dziś jest moim autorytetem."
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
       "text": "Kilka miesięcy temu dyrekcja Telewizji Polsat, poinformowała, że stacja kończy produkcję serialu „Świat według Kiepskich”, który opowiada o pewnej polskiej rodzinie. Ostatni odcinek został pokazany 16 listopada 2022 roku.",
       "source": "Na podstawie: https://gloswielkopolski.pl/swiat-wedlug-kiepskich-znika-z-anteny-polsatu-to-juz-ostatni-odcinek-koniec-serialu-po-ponad-20-latach/ar/c13-17048593"
      },
      "prompt": "Z tego tekstu wynika, że",
      "options": [
       {
        "id": "a",
        "text": "w Telewizji Polsat wkrótce będzie można oglądać nowy serial familijny."
       },
       {
        "id": "b",
        "text": "serial pokazywał życie nowoczesnej rodziny."
       },
       {
        "id": "c",
        "text": "premiera ostatniego odcinka odbyła się jesienią."
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
        "text": "Najnowsze badania japońskich naukowców po raz pierwszy potwierdzają, że picie kawy poprawia wyniki sportowców w bieganiu. Czy to znaczy, że w przyszłości będzie obowiązywał zakaz picia tego napoju przed ważnymi zawodami? Czy kawa trafi na listę substancji zakazanych?",
        "source": "Na podstawie: https://geekweek.interia.pl/nauka/news-kawa-bedzie-zakazana-dla-sportowcow-sa-dowody-ze-dziala-jak-,nId,6443701"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "sportowcy już teraz nie powinni pić kawy przed treningiem."
        },
        {
         "id": "b",
         "text": "wypicie kawy nie wpływa na rezultat biegu."
        },
        {
         "id": "c",
         "text": "wcześniej nikt nie zajmował się takimi badaniami."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "W amerykańskich i brytyjskich sklepach już dzisiaj zaczyna brakować jajek. Nasi producenci informują, że w Polsce ich na pewno nie zabraknie, ale zapłacimy za nie więcej. Niestety droższe będą nie tylko jajka, ale też makaron, majonez czy różne ciasta.",
        "source": "Na podstawie: https://businessinsider.com.pl/gielda/kryzys-jajeczny-nadciaga-do-polski-ptasia-grypa-sprawila-ze-ceny-"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "Polska jest największym na świecie producentem jajek."
        },
        {
         "id": "b",
         "text": "cena jajek w Polsce będzie wyższa."
        },
        {
         "id": "c",
         "text": "niedługo w Polsce będzie problem z kupieniem jajek."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Michał znalazł nad morzem w Dziwnowie bardzo stare narzędzie. Okazało się, że ma ponad 7 tysięcy lat i powstało w czasach, gdy w tym miejscu nie było jeszcze plaży. Prezes lokalnego muzeum podziękował Michałowi za podarowanie tak cennego przedmiotu.",
        "source": "Na podstawie: https://www.o2.pl/informacje/polak-poszedl-na-plaze-niesamowite-znalezisko-6839509822417440a"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "Michał nadal jest właścicielem narzędzia, które znalazł."
        },
        {
         "id": "b",
         "text": "Michał oddał do muzeum przedmiot, który znalazł."
        },
        {
         "id": "c",
         "text": "za znaleziony przedmiot chłopak otrzymał nagrodę od prezesa muzeum."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Z czeskiego ogrodu zoologicznego przy polskiej granicy uciekł kangur. Od poniedziałku szuka go policja. Kangur nie jest agresywny – poinformował pracownik zoo. Powiedział też, że zwierzę jest nieśmiałe i na pewno bardzo głodne.",
        "source": "Na podstawie: https://i.pl/z-ogrodu-zoologicznego-w-ostrawie-przy-polskiej-granicy-uciekl-kangur-trwaja-poszukiwania-zwierzaka/ar/c1-17088407"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "zwierzę od dawna nie jadło."
        },
        {
         "id": "b",
         "text": "kangur jest niebezpieczny i może zaatakować ludzi."
        },
        {
         "id": "c",
         "text": "w poszukiwaniach pomagają pracownicy zoo."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "Marta dowiaduje się od Adama, że będzie miał dziecko z jej byłą koleżanką Niną. Jest bardzo zdenerwowana tą informacją. Kocha mężczyznę, ale nie wie, czy będzie mogła dalej z nim być. Tak rozpoczyna się kolejny sezon serialu „Papiery na szczęście”.",
        "source": "Na podstawie: https://tvn.pl/seriale/papiery-na-szczescie/aktualnosci/papiery-na-szczescie-pierwszy-dzien-w-pracy-beatki-6274444"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "Nina nie powiedziała Marcie, że spodziewa się dziecka Adama."
        },
        {
         "id": "b",
         "text": "wiadomość o dziecku pozytywnie zaskoczyła Martę."
        },
        {
         "id": "c",
         "text": "Adam i Marta planują wziąć ślub."
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
     "title": "Przyszłość pszczół",
     "source": "Na podstawie: https://zielona.interia.pl/przyroda/news-naukowcy-alarmuja-zmiany-klimatu-to-ogromne-zagrozenie-dla-p,nId,6456026",
     "passage": "W przyszłości może nie być pszczół – tego można się dowiedzieć z najnowszego artykułu opublikowanego w czasopiśmie „Nature”. Analizy co prawda ciągle trwają, jednak do tej pory naukowcy potwierdzili, że pszczoły żyją krócej niż kiedyś. Odpowiada za to klimat na naszej planecie: zmienia się, co mocno wpływa na pogodę. Po okresie niskich temperatur coraz częściej pojawia się szybkie ocieplenie. Dlatego można zobaczyć kwiaty, które kwitną już w grudniu.\n\nCzłowiek łatwiej może zaakceptować takie anomalie i nie są one dla niego kłopotem, natomiast pszczoły mają z tym problem. Naukowcy uważają, że zmiany pogody bardzo wpływają na życie owadów, które w normalnych warunkach zimą śpią, a wiosną i latem pracują. Kiedy tylko czują, że jest już ciepło, budzą się i zaczynają przygotowywać się do produkcji miodu. Jeśli nagle zrobi się zimno, nie potrafią funkcjonować i umierają.\n\nProblemem dla tych pracowitych istot jest również okres, kiedy długo nie ma deszczu, ponieważ nie rosną wtedy kwiaty. Gdy ich nie ma, pszczołom po prostu zaczyna brakować jedzenia. Autorzy tekstu piszą, że na długość życia pszczół wpływają nie tylko zmiany klimatu, ale także różne wirusy. Wśród nich są takie, które zmieniają zapach owadów, dlatego nie mogą one rozpoznać swoich sióstr i wrócić do domu. Dla wielu z nich oznacza to śmierć.",
     "example": {
      "id": "r2.ex",
      "statement": "Według artykułu opublikowanego w „Nature” w przyszłości nie będzie pszczół.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Badania nad pszczołami jeszcze się nie zakończyły.",
       "answer": "TAK"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Naukowcy nadal nie wiedzą, dlaczego te owady coraz wcześniej umierają.",
       "answer": "NIE"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Pszczoły gorzej niż ludzie radzą sobie ze zmianą klimatu.",
       "answer": "TAK"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Brak deszczu pozytywnie wpływa na produkcję miodu.",
       "answer": "NIE"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Wirusy atakują również pszczoły.",
       "answer": "TAK"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Zmiany klimatu powodują u owadów problemy z identyfikacją członków rodziny.",
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
     "title": "Niezła sztuka",
     "source": "Na podstawie: https://niezlasztuka.net/fundacja/",
     "passage": "Niezła sztuka to fundacja, {{ex}}. Jej założycielki, Dana Tomczyk-Dołgij i Joanna Majewska, chcą zainteresować swoim pomysłem jak najszerszą publiczność według zasady {{1}}. Instytucja prowadzi portal internetowy niezlasztuka.net, jedna z autorek mówi: – Piszemy lekko i ciekawie, aby przybliżyć sylwetki i twórczość największych artystów, a niektórych materiałów {{2}}. Chcemy pokazać, że sztukę warto prezentować inaczej, {{3}}, które powodują niezrozumienie.\n\nNa stronie niezlasztuka.net są dostępne eseje na temat malarstwa i rzeźby, recenzje książek, opisy zabytków, galerie prac polskich i zagranicznych artystów oraz {{4}}. Dla portalu piszą przedstawiciele różnych zawodów – wykładowcy uczelni wyższych, pracownicy muzeów, pisarze, {{5}} – pasjonują się sztuką i potrafią o tym interesująco opowiadać. Obecnie fundacja zajmuje się projektem „Muzeana”. Jego celem jest przygotowanie wirtualnego katalogu dzieł z muzeów z całej Polski, który {{6}}. Dzięki temu w domu, przy dobrej kawie, będzie można podziwiać najpiękniejsze obrazy z polskich kolekcji. Również te, których nie można obejrzeć na co dzień, {{7}}. Organizacja planuje również stworzenie aplikacji edukacyjnej do pobrania na telefon. Ma ona zawierać podstawowe informacje oraz pozwalać w przyjemny sposób zapamiętać przedstawione fakty, a następnie sprawdzić swoją wiedzę.",
     "options": [
      {
       "id": "A",
       "text": "bez tych wszystkich skomplikowanych terminów naukowych"
      },
      {
       "id": "B",
       "text": "można również posłuchać w formie audio"
      },
      {
       "id": "C",
       "text": "której celem jest edukacja i upowszechnianie sztuki"
      },
      {
       "id": "D",
       "text": "ponieważ są ukryte w muzealnych magazynach"
      },
      {
       "id": "E",
       "text": "informacje o aktualnych wydarzeniach ze świata sztuki"
      },
      {
       "id": "F",
       "text": "będzie dostępny dla każdego i o każdej porze"
      },
      {
       "id": "G",
       "text": "„sztuka dla każdego – od amatora do konesera”"
      },
      {
       "id": "H",
       "text": "ale wszyscy mają jedną cechę, która ich łączy"
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
       "answer": "B"
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
       "answer": "E"
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
     "instruction": "IV. Proszę – zgodnie z przykładem – połączyć tytuły z kolumny I z tekstami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
     "pointsFormula": "7 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 7,
     "pdfPage": 13,
     "source": "Na podstawie: https://swiatoze.pl/20-sposobow-na-pomaganie-ktore-nie-wymagaja-wplacania-pieniedzy-9/",
     "heading": "Jak pomagać bez pieniędzy?",
     "options": [
      {
       "id": "A",
       "text": "Zaproponuj kolegom w firmie, aby przekazać potrzebującym na przykład podstawowe produkty spożywcze. Wspólnie zawieźcie je do organizacji charytatywnej. Szefowi na pewno spodoba się zespół, który działa razem."
      },
      {
       "id": "B",
       "text": "To najłatwiejszy sposób, aby komuś pomóc. Czasem tak prosta rzecz może sprawić, by dzień drugiego człowieka był trochę lepszy."
      },
      {
       "id": "C",
       "text": "Jeżeli jesteś zdrowy i masz więcej niż 18 lat, zastanów się nad oddaniem krwi. Jest zawsze potrzebna, a nie da się jej wyprodukować w laboratorium."
      },
      {
       "id": "D",
       "text": "Możesz oferować swój czas i zaangażowanie, a nic na tym nie zarabiać? Warto to robić, jeśli w ten sposób pomagasz seniorom, samotnym matkom czy osobom chorym – możliwości jest wiele."
      },
      {
       "id": "E",
       "text": "Ktoś na ulicy źle się poczuł? A może nie radzi sobie z ciężkimi zakupami? Nie zastanawiaj się, tylko zaproponuj pomoc."
      },
      {
       "id": "F",
       "text": "Zbliżają się twoje urodziny lub ślub? Poproś, aby bliscy zamiast kupować podarunki, wpłacili pieniądze na konto organizacji charytatywnej – dowolnej lub wybranej przez ciebie."
      },
      {
       "id": "G",
       "text": "Na stronie www.domydziecka.org znajdują się informacje o tym, czego potrzebują ich mali mieszkańcy. Czasem są to zabawki, a niekiedy inne potrzebne rzeczy, np. buty, książki czy ubrania."
      },
      {
       "id": "H",
       "text": "Jeśli podczas generalnego sprzątania znalazłeś rzeczy, których od dawna nie używasz, nie wyrzucaj ich do kosza. Koce i miski możesz na przykład oddać do schroniska dla zwierząt."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Uśmiechaj się i bądź życzliwy",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Nie bądź bierny w codziennych sytuacjach",
       "answer": "E"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Podaruj drugie życie niepotrzebnym przedmiotom",
       "answer": "H"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Zorganizuj zbiórkę w pracy",
       "answer": "A"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Przygotuj paczkę dla najmłodszych",
       "answer": "G"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Przekaż to, co najcenniejsze",
       "answer": "C"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Zrezygnuj z prezentów",
       "answer": "F"
      },
      {
       "id": "r4.7",
       "number": 7,
       "prompt": "Zostań wolontariuszem",
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
     "title": "Czym jest higiena snu?",
     "source": "Na podstawie: http://www.psychologodnowa.pl/pl/8-czytelnia/51-czym-jest-higiena-snu",
     "passage": "Higiena snu to rodzaj {{ex}} na to, jak zdrowo spać. Wysypiania się można, a nawet trzeba się nauczyć, by nasze ciało mogło się regenerować. Dzięki temu w ciągu dnia nie poczujemy się {{1}}. Gdy jesteśmy mali, rodzice {{2}}, żebyśmy dobrze spali. Ciepłe mleko, czytanie książek na dobranoc, kąpiel – wszyscy znamy rytuały, które pomagają nauczyć organizm, że nadchodzi czas {{3}}. Regularne godziny zasypiania i wstawania rano to także {{4}} nawyk, który pomaga nam przechodzić ze stanu aktywności w stan regeneracji.\n\nProblemami, których {{5}} doświadczamy, są: trudności z zasypianiem, budzenie się w środku nocy, poczucie niewyspania i zmęczenia w ciągu dnia. Jeśli te sytuacje występują rzadko, nie powinny nas {{6}}. Gdy jednak bezsenne noce zdarzają się coraz częściej, warto zadbać o odpowiednią wieczorną rutynę.\n\nJest kilka reguł dotyczących higieny snu, o których trzeba {{7}}. Przede wszystkim należy prowadzić regularny tryb życia, a w sypialni unikać mocnego światła. Dobrze też zjeść kolację trzy godziny przed położeniem się do łóżka.\n\n{{8}} zasadą zdrowego snu jest zachowanie spokoju, nerwy tylko zwiększają problem. Pomocne w tym są {{9}} relaksacyjne i oddechowe wykonywane wieczorem. Jeśli mimo zmiany zwyczajów nadal nie możemy spać, warto umówić się na {{10}} u specjalisty.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "paragonu",
        "rachunku",
        "przepisu"
       ],
       "answer": "przepisu"
      },
      {
       "id": "1",
       "options": [
        "zmęczeni",
        "wypoczęci",
        "zrelaksowani"
       ],
       "answer": "zmęczeni"
      },
      {
       "id": "2",
       "options": [
        "opiekują się",
        "próbują",
        "dbają"
       ],
       "answer": "dbają"
      },
      {
       "id": "3",
       "options": [
        "wakacji",
        "odpoczynku",
        "urlopu"
       ],
       "answer": "odpoczynku"
      },
      {
       "id": "4",
       "options": [
        "łatwy",
        "ogromny",
        "ważny"
       ],
       "answer": "ważny"
      },
      {
       "id": "5",
       "options": [
        "najczęściej",
        "najgłębiej",
        "najbardziej"
       ],
       "answer": "najczęściej"
      },
      {
       "id": "6",
       "options": [
        "boleć",
        "martwić",
        "nudzić"
       ],
       "answer": "martwić"
      },
      {
       "id": "7",
       "options": [
        "zapominać",
        "pamiętać",
        "troszczyć się"
       ],
       "answer": "pamiętać"
      },
      {
       "id": "8",
       "options": [
        "Centralną",
        "Podstawową",
        "Regularną"
       ],
       "answer": "Podstawową"
      },
      {
       "id": "9",
       "options": [
        "ćwiczenia",
        "szkolenia",
        "zadania"
       ],
       "answer": "ćwiczenia"
      },
      {
       "id": "10",
       "options": [
        "przyjęcie",
        "radę",
        "wizytę"
       ],
       "answer": "wizytę"
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
     "source": "Na podstawie: https://www.zamek-krolewski.pl/bernardo-bellotto",
     "passage": "W {{ex1}} urodzin Canaletta, Zamek Królewski w Warszawie zorganizował wystawę obrazów osiemnastowiecznego twórcy. {{ex2}} artystyczną drogę prezentował bardzo {{ex3}} zbiór dzieł. Pierwsza część {{1}} kolekcji to prace związane z Wenecją, a także z {{2}} młodego malarza do innych włoskich {{3}}. Druga część wystawy dotyczy pobytu artysty w Niemczech. To był kraj, w {{4}} mieszkał i pracował przez ponad dwadzieścia lat. Ostatni okres swojego życia Canaletto spędził w Warszawie. Tutaj malował dla {{5}} króla, Stanisława Augusta. W {{6}} Zamku Królewskiego ludzie nadal z zachwytem przyglądają się {{7}} z XVIII wieku, na których stolica często wygląda prawie identycznie jak dzisiaj. Eksperci przygotowali {{8}} katalog wystawy, napisany między innymi w wersji {{9}}. Można {{10}} kupić w zamkowym sklepie lub na stronie internetowej muzeum.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "rocznicy",
        "rocznicę",
        "rocznicą"
       ],
       "answer": "rocznicę"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "Niego",
        "Nim",
        "Jego"
       ],
       "answer": "Jego"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "bogatego",
        "bogatym",
        "bogaty"
       ],
       "answer": "bogaty"
      },
      {
       "id": "1",
       "options": [
        "tej",
        "te",
        "tę"
       ],
       "answer": "tej"
      },
      {
       "id": "2",
       "options": [
        "podróżach",
        "podróżom",
        "podróżami"
       ],
       "answer": "podróżami"
      },
      {
       "id": "3",
       "options": [
        "miastach",
        "miast",
        "miasta"
       ],
       "answer": "miast"
      },
      {
       "id": "4",
       "options": [
        "którego",
        "które",
        "którym"
       ],
       "answer": "którym"
      },
      {
       "id": "5",
       "options": [
        "polskiego",
        "polskiemu",
        "polska"
       ],
       "answer": "polskiego"
      },
      {
       "id": "6",
       "options": [
        "salę",
        "sale",
        "sali"
       ],
       "answer": "sali"
      },
      {
       "id": "7",
       "options": [
        "obrazom",
        "obrazy",
        "obrazami"
       ],
       "answer": "obrazom"
      },
      {
       "id": "8",
       "options": [
        "specjalnego",
        "specjalne",
        "specjalny"
       ],
       "answer": "specjalny"
      },
      {
       "id": "9",
       "options": [
        "angielskie",
        "angielskiej",
        "angielską"
       ],
       "answer": "angielskiej"
      },
      {
       "id": "10",
       "options": [
        "go",
        "ich",
        "niego"
       ],
       "answer": "go"
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
     "source": "Na podstawie: https://www.giganciedukacji.edu.pl/blog/jak-sie-uczyc-szybko-czyli-co-zrobic-zeby-miec-wiecej-wolnego-czasu",
     "wordBox": [
      "żeby",
      "chociaż",
      "lecz",
      "oraz",
      "więc",
      "który",
      "gdy"
     ],
     "distractors": [
      "chociaż"
     ],
     "passage": "Uczymy się od urodzenia aż do śmierci, {{ex}} z problemem dużej ilości nauki spotykamy się głównie w edukacji szkolnej. Lekcji jest niemało i są za krótkie, {{1}} wszystkiego nauczyć się w szkole. Zadania domowe, przygotowanie do testów są bardzo ważne, {{2}} uczniowie całe popołudnia spędzają w domu nad książkami. Chodzą też na wiele zajęć dodatkowych: na kursy językowe, treningi sportowe {{3}} na różne warsztaty artystyczne. Wszyscy mają dostęp do internetu, {{4}} także zabiera czas. Wiemy, że nawet prostych rzeczy trudno się nauczyć, {{5}} człowiek jest zmęczony. Jakie są rozwiązania tych problemów? Jak się uczyć nie tylko szybko, ale i skutecznie?",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "lecz"
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
       "answer": "który"
      },
      {
       "id": "5",
       "answer": "gdy"
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
     "source": "Na podstawie: https://www.rmf24.pl/radio/news-nowych-mieszkan-coraz-mniej-przyszly-rok-bedzie-trudny-dla-b,nId,6402877#crp_state=1",
     "passage": "Z roku na rok ceny mieszkań stają się {{ex1}}, zarobki Polaków spadają, więc {{ex2}} im dostać kredyt w banku. Z tych powodów liczba kupionych mieszkań jest obecnie {{1}}. Coraz {{2}} młodych ludzi decyduje się na mieszkanie z rodzicami lub wynajem małego, a tym samym {{3}} lokalu. Ekonomiści twierdzą, że przyszły rok może być dla branży budowlanej {{4}} w historii. Przewidują, że zainteresowanie klientów zakupem nowego mieszkania może być nawet o 40 procent {{5}} niż w 2022 roku.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "wysokie",
        "wyższe",
        "wyżej"
       ],
       "answer": "wyższe"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "trudno",
        "trudny",
        "najtrudniej"
       ],
       "answer": "trudno"
      },
      {
       "id": "1",
       "options": [
        "niżej",
        "niższą",
        "najniższa"
       ],
       "answer": "najniższa"
      },
      {
       "id": "2",
       "options": [
        "większy",
        "więcej",
        "najwięcej"
       ],
       "answer": "więcej"
      },
      {
       "id": "3",
       "options": [
        "taniej",
        "tańszego",
        "tańszy"
       ],
       "answer": "tańszego"
      },
      {
       "id": "4",
       "options": [
        "gorzej",
        "gorszy",
        "najgorszy"
       ],
       "answer": "najgorszy"
      },
      {
       "id": "5",
       "options": [
        "mniej",
        "mniejsze",
        "mniejsi"
       ],
       "answer": "mniejsze"
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
     "passage": "„Kiedyś {{ex1}} lepiej” – ciągle {{ex2}} nasi dziadkowie i babcie. „Teraz młodzież {{1}} tylko na ekrany smartfonów i komputerów. Chłopcy nie {{2}} świata poza internetem, dziewczyny {{3}} w za krótkie bluzki i spódniczki lub w za ciasne spodnie. Ja w młodości nigdy takich nie {{4}}!” – te słowa bardzo często {{5}} dziś od mojej babci.\n\n„Kiedyś chętnie ze sobą {{6}}, a młodzież bardziej {{7}} stare tradycje i obyczaje” – dodaje jeszcze dziadek.\n\nWiem jednak, że dawniej dorośli także {{8}} na swoje dzieci, a starsze panie {{9}} zachowanie młodych. No cóż, współcześni dziadkowie {{10}} tak samo jak ich przodkowie.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "być",
       "answer": "było"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "powtarzać",
       "answer": "powtarzają"
      },
      {
       "id": "1",
       "given": "patrzyć",
       "answer": "patrzy"
      },
      {
       "id": "2",
       "given": "widzieć",
       "answer": "widzą"
      },
      {
       "id": "3",
       "given": "ubierać się",
       "answer": "ubierają się"
      },
      {
       "id": "4",
       "given": "nosić",
       "answer": "nosiłam"
      },
      {
       "id": "5",
       "given": "ja – słyszeć",
       "answer": "słyszę"
      },
      {
       "id": "6",
       "given": "my – rozmawiać",
       "answer": "rozmawialiśmy"
      },
      {
       "id": "7",
       "given": "szanować",
       "answer": "szanowała"
      },
      {
       "id": "8",
       "given": "skarżyć się",
       "answer": "skarżyli się"
      },
      {
       "id": "9",
       "given": "krytykować",
       "answer": "krytykowały"
      },
      {
       "id": "10",
       "given": "narzekać",
       "answer": "narzekają"
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
      "sentence": "Beata codziennie słucha radia.",
      "underlined": "radia",
      "stem": "…………… Beata codziennie słucha?",
      "shortAnswer": "Radia.",
      "answer": "Czego",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Zosia trzy razy w tygodniu chodzi na basen.",
       "underlined": "trzy razy w tygodniu",
       "stem": "…………… Zosia chodzi na basen?",
       "shortAnswer": "Trzy razy w tygodniu.",
       "answer": "Jak często",
       "accept": [
        "Ile razy w tygodniu",
        "Ile razy na tydzień"
       ]
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Poinformowaliśmy ciocię Basię, że przyjdziemy jutro.",
       "underlined": "ciocię Basię",
       "stem": "…………… poinformowaliście, że przyjdziecie jutro?",
       "shortAnswer": "Ciocię Basię.",
       "answer": "Kogo",
       "accept": []
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Janek kupił tort z owocami egzotycznymi.",
       "underlined": "egzotycznymi",
       "stem": "…………… owocami Janek kupił tort?",
       "shortAnswer": "Z egzotycznymi.",
       "answer": "Z jakimi",
       "accept": []
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Matka nie wyprała ubrania syna.",
       "underlined": "syna",
       "stem": "…………… ubrania nie wyprała matka?",
       "shortAnswer": "Syna.",
       "answer": "Czyjego",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Marysia przyszła do szkoły na drugą lekcję.",
       "underlined": "drugą",
       "stem": "…………… lekcję Marysia przyszła do szkoły?",
       "shortAnswer": "Na drugą.",
       "answer": "Na którą",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Official key prints the question word with decoration (Kogo…?); stored without it, match.stripChars ignores the decoration.",
      "Key 1 lists three variants (Jak często…? Ile razy w tygodniu…? Ile razy na tydzień…?): first is the answer, others in accept."
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
       "source": "Mojej siostrze smakuje zupa pomidorowa.",
       "hint": "lubi",
       "answer": "Moja siostra lubi zupę pomidorową.",
       "rubric": "4 transformacje (2 x 0,25)",
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
       "source": "Wszyscy pracowici ludzie szanują czas.",
       "hint": "osoby",
       "answer": "Wszystkie pracowite osoby szanują czas.",
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
       "source": "W weekend byliśmy w kinie na fascynującym filmie.",
       "hint": "poszliśmy",
       "answer": "W weekend poszliśmy do kina na fascynujący film.",
       "rubric": "3 transformacje (2 x 0,25) + odpowiedni przyimek 0,25",
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
       "id": "g6.4",
       "number": 4,
       "source": "Wiem, jak ma na nazwisko ten pan.",
       "hint": "znam",
       "answer": "Znam nazwisko tego pana.",
       "rubric": "usunięcie słów: jak, ma, na – 0,5 + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "usunięcie słów: jak, ma, na",
         "points": 0.5
        },
        {
         "what": "2 transformacje",
         "points": 0.5
        }
       ]
      },
      {
       "id": "g6.5",
       "number": 5,
       "source": "Dlaczego nigdy nie ubierasz się w ten ciepły płaszcz?",
       "hint": "nosisz",
       "answer": "Dlaczego nigdy nie nosisz tego ciepłego płaszcza?",
       "rubric": "usunięcie przyimka 0,25 p. + 3 transformacje (2 x 0,25)",
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
     ],
     "pdfNotes": [
      "The key prints '(2 x 0,25)' after '4 transformacje' / '3 transformacje' (items 1, 3, 5) although every item is worth 1 p.; rubricParts use the arithmetic that sums to 1 p. (4 x 0,25 / 3 x 0,25), the printed rubric string is kept verbatim."
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
     "passage": "Anna: - Pawle, za miesiąc wychodzę za mąż i wiele {{ex1}}, żeby na swoim ślubie ważyć kilka kilogramów mniej. Próbuję schudnąć i nic mi nie wychodzi. Jesteś dietetykiem i trenerem fitness. {{ex2}} mi, proszę, jakąś dobrą dietę.\n\nPaweł: - No cóż, nie ma diety cud, dzięki której {{1}} schudnąć w kilkanaście dni. To nie {{2}} też zdrowe dla twojego organizmu. {{3}} rozsądnie!\n\nAnna: - A co ty {{4}} na moim miejscu?\n\nPaweł: - Gdybym {{5}} wyglądać lepiej na uroczystości za cztery tygodnie, przede wszystkim starałbym się jeść zdrowo: regularnie pięć posiłków dziennie, w tym dużo owoców i warzyw, które {{6}} mi odpowiednią dawkę witamin.\n\nAnna: - A co mogę jeść?\n\nPaweł: - Wszystko, ale z umiarem. Jeśli możesz, {{7}} ze swojej diety tłuste mięso. Możesz je zastąpić drobiem i rybami. Po południu {{8}} pełnoziarnisty makaron lub ciemny ryż.\n\nAnna: - To wystarczy?\n\nPaweł: - Oczywiście nie. Zdrowej diecie musi towarzyszyć aktywność fizyczna. Może to być szybki spacer, jazda na rowerze, pływanie. O, właśnie dziś wieczorem idę z synem na basen. Proponuję, {{9}} tam razem. Potrenuję także z tobą.\n\nAnna: - Dzisiaj nie mogę. O 20.00 idę do krawcowej. {{10}} sami.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "dałabym",
        "dałbyś",
        "dajmy"
       ],
       "answer": "dałabym"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "Przygotowałby",
        "Przygotuj",
        "Przygotowuj"
       ],
       "answer": "Przygotuj"
      },
      {
       "id": "1",
       "options": [
        "mogłaby",
        "mogłabyś",
        "mogłoby"
       ],
       "answer": "mogłabyś"
      },
      {
       "id": "2",
       "options": [
        "byłoby",
        "byłyby",
        "bądź"
       ],
       "answer": "byłoby"
      },
      {
       "id": "3",
       "options": [
        "Odchudziłabyś się",
        "Odchudzałyby się",
        "Odchudzaj się"
       ],
       "answer": "Odchudzaj się"
      },
      {
       "id": "4",
       "options": [
        "zrobiłby",
        "zrób",
        "zrobiłbyś"
       ],
       "answer": "zrobiłbyś"
      },
      {
       "id": "5",
       "options": [
        "chciałbym",
        "chciał",
        "chciałem"
       ],
       "answer": "chciał"
      },
      {
       "id": "6",
       "options": [
        "niech zapewni",
        "zapewniłyby",
        "zapewniłoby"
       ],
       "answer": "zapewniłyby"
      },
      {
       "id": "7",
       "options": [
        "wyrzucałaby",
        "wyrzuciłabyś",
        "wyrzuć"
       ],
       "answer": "wyrzuć"
      },
      {
       "id": "8",
       "options": [
        "niech wybierze",
        "niech wybiera",
        "wybieraj"
       ],
       "answer": "wybieraj"
      },
      {
       "id": "9",
       "options": [
        "chodźmy",
        "chodź",
        "chodziliby"
       ],
       "answer": "chodźmy"
      },
      {
       "id": "10",
       "options": [
        "Idźmy",
        "Idźcie",
        "Poszlibyście"
       ],
       "answer": "Idźcie"
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
     "source": "Na podstawie: https://www.koty.pl/artykuly/zachowanie/kot-desperacko-szuka-uwagi",
     "wordBox": [
      "przy",
      "z",
      "dla",
      "na",
      "w",
      "za",
      "u"
     ],
     "distractors": [
      "na"
     ],
     "passage": "Koty bardzo często potrzebują uwagi opiekunów. Kiedy się nudzą, szukają ludzkiego towarzystwa {{ex}} każdej okazji. Okazują to na przykład tak, że ciągle chodzą {{1}} człowiekiem, chcą się bawić i być głaskane. Starajmy się więc, by zwierzę miało {{2}} domu wszystko, czego potrzebuje – dobre jedzenie, zabawki, spokojne miejsca. Ważne, żeby często się {{3}} nim bawić i razem spędzać czas. Pamiętajmy też o regularnych wizytach {{4}} weterynarza. Wszystko to jest bardzo ważne {{5}} zdrowia i samopoczucia naszego małego przyjaciela.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "przy"
      },
      {
       "id": "1",
       "answer": "za"
      },
      {
       "id": "2",
       "answer": "w"
      },
      {
       "id": "3",
       "answer": "z"
      },
      {
       "id": "4",
       "answer": "u"
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
         "genre": "życzenia",
         "wordTarget": 30,
         "prompt": "Proszę napisać życzenia, które wyśle Pani/Pan do swojej cioci z Polski z okazji jej 70-tych urodzin."
        },
        {
         "id": "b",
         "genre": "opowiadanie",
         "wordTarget": 170,
         "prompt": "Proszę napisać opowiadanie zainspirowane poniższym zdjęciem.",
         "image": "data/img/2023-04/w-I-b-1.jpg"
        }
       ]
      },
      {
       "id": "II",
       "parts": [
        {
         "id": "a",
         "genre": "zaproszenie",
         "wordTarget": 40,
         "prompt": "Jest Pani/Pan członkiem teatru „Maska”, który działa przy szkole języka polskiego. Proszę napisać zaproszenie dla uczniów tej szkoły na premierę nowego spektaklu."
        },
        {
         "id": "b",
         "genre": "esej",
         "wordTarget": 160,
         "prompt": "Proszę napisać esej (wypracowanie szkolne) pt. „Lubię to, co robię“.",
         "title": "Lubię to, co robię"
        }
       ]
      },
      {
       "id": "III",
       "parts": [
        {
         "id": "a",
         "genre": "ogłoszenie",
         "wordTarget": 35,
         "prompt": "Zgubiła Pani / Zgubił Pan torbę sportową (plecak) w parku w Warszawie. Proszę napisać ogłoszenie, które rozwiesi Pani/Pan w okolicy."
        },
        {
         "id": "b",
         "genre": "e-mail",
         "wordTarget": 165,
         "prompt": "Planuje Pani/Pan za kilka miesięcy się przeprowadzić. Proszę napisać do koleżanki /kolegi z Polski e-mail na ten temat."
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
