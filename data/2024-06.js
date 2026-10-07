window.EXAMS = window.EXAMS || {};
window.EXAMS["2024-06"] = {
 "schemaVersion": 1,
 "id": "2024-06",
 "meta": {
  "level": "B1",
  "labelPdf": "czerwiec 2024",
  "examDates": "22-23.06.2024",
  "sources": {
   "test": "sources/2024-06/test.pdf",
   "transcript": "sources/2024-06/transcript.pdf",
   "audio": "sources/2024-06/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear.",
   "Grammar II is headed '(wskaźniki zespolenia)' instead of '(spójniki)'; modelled as clozeBox (word box, 1 unused word).",
   "Listening V has 5 persons and 4 statements A–D (printed prompt says '(A-E)'); key row-per-statement: A 5 | B* 2,4 | C* 1,3 | D 1.",
   "Listening II example: both lines tagged (K) in the official transcript; kept.",
   "Reading III and IV have a title/heading line; all 8 fragments/paragraphs A–H are used (example + 7).",
   "Grammar II/VIII example words are part of the printed word box (struck through in the PDF); Grammar IV example forms (marzyłam, mogę) are printed filled in."
  ]
 },
 "audio": {
  "src": "sources/2024-06/audio.mp3",
  "duration": 1571.2,
  "intro": [
   0,
   47.3
  ],
  "readingTime": [
   47.3,
   107.8
  ],
  "tail": [
   1509.0,
   1571.2
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
        "start": 134.3,
        "end": 323.1
       }
      ],
      "items": [
       {
        "ref": "l1.ex",
        "start": 134.3,
        "end": 145.1
       },
       {
        "ref": "l1.1",
        "start": 151.4,
        "end": 157.5
       },
       {
        "ref": "l1.2",
        "start": 164.0,
        "end": 169.4
       },
       {
        "ref": "l1.3",
        "start": 176.0,
        "end": 182.6
       },
       {
        "ref": "l1.4",
        "start": 189.3,
        "end": 195.1
       },
       {
        "ref": "l1.5",
        "start": 201.6,
        "end": 208.9
       },
       {
        "ref": "l1.6",
        "start": 215.3,
        "end": 220.7
       },
       {
        "ref": "l1.7",
        "start": 227.1,
        "end": 233.3
       },
       {
        "ref": "l1.8",
        "start": 239.8,
        "end": 245.8
       },
       {
        "ref": "l1.9",
        "start": 252.3,
        "end": 258.5
       },
       {
        "ref": "l1.10",
        "start": 265.2,
        "end": 272.3
       },
       {
        "ref": "l1.11",
        "start": 278.9,
        "end": 285.3
       },
       {
        "ref": "l1.12",
        "start": 291.8,
        "end": 297.4
       },
       {
        "ref": "l1.13",
        "start": 303.7,
        "end": 309.5
       },
       {
        "ref": "l1.14",
        "start": 315.9,
        "end": 323.1
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
        "text": "w cukierni."
       },
       {
        "id": "b",
        "text": "w drogerii."
       },
       {
        "id": "c",
        "text": "w kwiaciarni."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "sp": "K",
       "t": "Poproszę drożdżówkę i mały kawałek sernika."
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
         "text": "w księgarni."
        },
        {
         "id": "c",
         "text": "w biurze."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Wypożyczone książki należy oddać w ciągu miesiąca."
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "smutek."
        },
        {
         "id": "b",
         "text": "zdenerwowanie."
        },
        {
         "id": "c",
         "text": "radość."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Bardzo się cieszę na wspólny wyjazd nad jezioro."
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź to fragment rozmowy",
       "options": [
        {
         "id": "a",
         "text": "o wakacjach."
        },
        {
         "id": "b",
         "text": "o pracy."
        },
        {
         "id": "c",
         "text": "o spotkaniu."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "CV i list motywacyjny prosimy wysłać na podany adres."
       }
      },
      {
       "id": "l1.4",
       "number": 4,
       "prompt": "Ta wypowiedź oznacza, że ona",
       "options": [
        {
         "id": "a",
         "text": "kończy rozmowę."
        },
        {
         "id": "b",
         "text": "wszystko usłyszała."
        },
        {
         "id": "c",
         "text": "prosi o powtórzenie."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Coś przerwało, możesz to powiedzieć jeszcze raz?"
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź oznacza, że lekarz przyjmuje",
       "options": [
        {
         "id": "a",
         "text": "po południu."
        },
        {
         "id": "b",
         "text": "codziennie."
        },
        {
         "id": "c",
         "text": "raz w tygodniu."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Okulista przyjmuje we wtorki i piątki od 14.00 do 17.00."
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź oznacza, że osoba",
       "options": [
        {
         "id": "a",
         "text": "czuje się dobrze."
        },
        {
         "id": "b",
         "text": "ma gorączkę."
        },
        {
         "id": "c",
         "text": "narzeka na pogodę."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Mam trzydzieści dziewięć stopni i dreszcze."
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź oznacza, że osoba",
       "options": [
        {
         "id": "a",
         "text": "będzie sama gotować."
        },
        {
         "id": "b",
         "text": "nie planuje zmian."
        },
        {
         "id": "c",
         "text": "planuje zacząć dietę."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Od jutra koniec ze słodyczami i tłustym jedzeniem."
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź oznacza, że",
       "options": [
        {
         "id": "a",
         "text": "bilety wstępu są wliczone w cenę."
        },
        {
         "id": "b",
         "text": "za muzea płaci się dodatkowo."
        },
        {
         "id": "c",
         "text": "bilety do muzeów są bardzo tanie."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Cena wycieczki nie obejmuje wejść do muzeów."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź oznacza, że siatkarze",
       "options": [
        {
         "id": "a",
         "text": "wygrali zawody."
        },
        {
         "id": "b",
         "text": "przegrali mecz."
        },
        {
         "id": "c",
         "text": "mają drugie miejsce."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Mamy złoto! Nasi siatkarze mistrzami świata!"
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "u ortopedy."
        },
        {
         "id": "b",
         "text": "w salonie urody."
        },
        {
         "id": "c",
         "text": "na sali gimnastycznej."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Stopy razem, ręce na biodrach, plecy prosto i skaczemy!"
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź oznacza, że w biurze",
       "options": [
        {
         "id": "a",
         "text": "działa klimatyzacja."
        },
        {
         "id": "b",
         "text": "jest dobra atmosfera."
        },
        {
         "id": "c",
         "text": "jest świeże powietrze."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "W naszym biurze jest świetny klimat, wszyscy się lubimy."
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź jest typowa dla",
       "options": [
        {
         "id": "a",
         "text": "policjanta."
        },
        {
         "id": "b",
         "text": "taksówkarza."
        },
        {
         "id": "c",
         "text": "konduktora."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Dzień dobry państwu, proszę bilety do kontroli."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "krytyka."
        },
        {
         "id": "b",
         "text": "komplement."
        },
        {
         "id": "c",
         "text": "rada."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Do twarzy ci w zielonym, ładnie wyglądasz."
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź jest typowa dla",
       "options": [
        {
         "id": "a",
         "text": "nauczyciela."
        },
        {
         "id": "b",
         "text": "rodzica."
        },
        {
         "id": "c",
         "text": "pielęgniarki."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Pani córka często się spóźnia i nie uważa na lekcjach."
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
       338.9,
       354.9
      ],
      "plays": [
       {
        "start": 365.3,
        "end": 462.0
       },
       {
        "start": 507.6,
        "end": 604.3
       }
      ],
      "pauseBetweenPlays": 45.6,
      "items": [
       {
        "ref": "l2.ex",
        "start": 365.3,
        "end": 379.9
       },
       {
        "ref": "l2.1",
        "start": 384.4,
        "end": 393.6
       },
       {
        "ref": "l2.2",
        "start": 398.4,
        "end": 405.9
       },
       {
        "ref": "l2.3",
        "start": 410.5,
        "end": 417.5
       },
       {
        "ref": "l2.4",
        "start": 422.0,
        "end": 432.5
       },
       {
        "ref": "l2.5",
        "start": 437.5,
        "end": 447.7
       },
       {
        "ref": "l2.6",
        "start": 452.2,
        "end": 462.0
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
        "text": "klientce podobają się granatowe spodnie."
       },
       {
        "id": "b",
        "text": "klientka potrzebuje większego rozmiaru spodni."
       },
       {
        "id": "c",
        "text": "klientka nie chce granatowych spodni."
       }
      ],
      "answer": "c",
      "shown": true,
      "transcript": {
       "lines": [
        {
         "sp": "K",
         "t": "Czy jest inny kolor spodni w tym rozmiarze?"
        },
        {
         "sp": "K",
         "t": "Ten model jest tylko w granatowym kolorze."
        }
       ]
      }
     },
     "items": [
      {
       "id": "l2.1",
       "number": 1,
       "prompt": "Z tego dialogu dowiadujemy się, że mężczyzna",
       "options": [
        {
         "id": "a",
         "text": "spóźnił się pierwszy raz."
        },
        {
         "id": "b",
         "text": "szedł pieszo do pracy."
        },
        {
         "id": "c",
         "text": "czasami się spóźnia."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Przepraszam za spóźnienie. Były duże korki w centrum."
         },
         {
          "sp": "K",
          "t": "To już kolejny raz."
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
         "text": "obraz jest bardzo drogi."
        },
        {
         "id": "b",
         "text": "mężczyzna chciałby kupić obraz."
        },
        {
         "id": "c",
         "text": "można kupić ten obraz."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Podoba mi się ten obraz, czy jest na sprzedaż?"
         },
         {
          "sp": "K",
          "t": "Niestety, nie."
         }
        ]
       }
      },
      {
       "id": "l2.3",
       "number": 3,
       "prompt": "Z tego dialogu dowiadujemy się, że on",
       "options": [
        {
         "id": "a",
         "text": "wie, o której będzie koniec filmu."
        },
        {
         "id": "b",
         "text": "nie jest pewny, o której kończy się film."
        },
        {
         "id": "c",
         "text": "nie pamięta tytułu filmu."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "O której godzinie kończy się seans?"
         },
         {
          "sp": "M",
          "t": "Nie pamiętam dobrze."
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
         "text": "kobieta nie chce jechać taksówką do ZOO."
        },
        {
         "id": "b",
         "text": "autobus jedzie najszybciej."
        },
        {
         "id": "c",
         "text": "mężczyzna poleca taksówkę."
        }
       ],
       "answer": "c",
       "transcript": {
        "lines": [
         {
          "sp": "K",
          "t": "Jak najszybciej dojechać do ogrodu zoologicznego?"
         },
         {
          "sp": "M",
          "t": "Nie polecam autobusu, lepiej będzie taksówką."
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
         "text": "on zachęca ją do pracy."
        },
        {
         "id": "b",
         "text": "ona się z nim zgadza."
        },
        {
         "id": "c",
         "text": "ona jest zadowolona z oferty pracy."
        }
       ],
       "answer": "b",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Nie powinnaś przyjmować tej oferty pracy."
         },
         {
          "sp": "K",
          "t": "Masz rację, proponują niezbyt dobre warunki finansowe."
         }
        ]
       }
      },
      {
       "id": "l2.6",
       "number": 6,
       "prompt": "Z tego dialogu dowiadujemy się, że ona",
       "options": [
        {
         "id": "a",
         "text": "jeszcze nie zdecydowała."
        },
        {
         "id": "b",
         "text": "uważa, że to dobry pomysł."
        },
        {
         "id": "c",
         "text": "nie chce się przeprowadzać."
        }
       ],
       "answer": "a",
       "transcript": {
        "lines": [
         {
          "sp": "M",
          "t": "Może przeprowadzimy się do większego mieszkania?"
         },
         {
          "sp": "K",
          "t": "Muszę o tym pomyśleć. To poważna decyzja."
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
     "prompt": "Proszę wysłuchać wywiadu na temat domów za 1 euro we Włoszech.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://wloskiedomy.pl/domy-za-1-euro-we-wloszech/",
     "audio": {
      "announce": [
       614.5,
       630.1
      ],
      "plays": [
       {
        "start": 640.4,
        "end": 733.1
       },
       {
        "start": 779.2,
        "end": 871.9
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
        "t": "Czym jest program „Dom za 1 euro”?"
       },
       {
        "sp": "Ekspert",
        "t": "To nietypowy sposób, w jaki włoskie miasteczka starają się znaleźć nowych mieszkańców. Co jakiś czas wystawiają na sprzedaż nieruchomości i oferują je za cenę włoskiej kawy."
       },
       {
        "sp": "Dziennikarz",
        "t": "Jakie warunki trzeba spełnić, żeby kupić dom?"
       },
       {
        "sp": "Ekspert",
        "t": "Warunki programu różnią się w zależności od miasteczka lub gminy. Ale najważniejszym elementem jest remont, który trzeba zrobić w ciągu 3 lat od momentu akceptacji planu napraw przez gminę. Dopiero, kiedy dana osoba skończy renowację na czas, może kupić nieruchomość."
       },
       {
        "sp": "Dziennikarz",
        "t": "Gdzie można znaleźć te domy?"
       },
       {
        "sp": "Ekspert",
        "t": "Przede wszystkim w regionach o niewielkim zainteresowaniu turystycznym. Głównie w miasteczkach, gdzie z roku na rok żyje coraz mniej mieszkańców. Młodzi ludzie przeprowadzają się do większych miast na studia lub do pracy, a starsi umierają."
       },
       {
        "sp": "Dziennikarz",
        "t": "Czy dużo osób korzysta z programu „Dom za 1 euro”?"
       },
       {
        "sp": "Ekspert",
        "t": "Program jest skierowany do wszystkich i popularny w wielu krajach. Bardzo dużo ludzi z Europy kupuje te domy we Włoszech, jednak wiem, że nikt z Polski nie był zainteresowany. Wiele osób woli jednak tradycyjny zakup domu z wolnego rynku, który może być łatwiejszy i tańszy, zwłaszcza na południu Włoch."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "prompt": "„Dom za 1 euro” to inicjatywa, w której włoskie gminy",
      "options": [
       {
        "id": "a",
        "text": "szukają nowych mieszkańców miasteczek."
       },
       {
        "id": "b",
        "text": "promują małe miasteczka na świecie."
       },
       {
        "id": "c",
        "text": "oddają stare domy za paczkę kawy."
       }
      ],
      "answer": "a",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "prompt": "Warunki programu „Dom za 1 euro”",
       "options": [
        {
         "id": "a",
         "text": "są takie same dla całego kraju."
        },
        {
         "id": "b",
         "text": "są inne dla każdej miejscowości."
        },
        {
         "id": "c",
         "text": "zmieniają się co rok."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.2",
       "number": 2,
       "prompt": "Remont domu",
       "options": [
        {
         "id": "a",
         "text": "nie jest obowiązkowy."
        },
        {
         "id": "b",
         "text": "muszą zaakceptować mieszkańcy miasta."
        },
        {
         "id": "c",
         "text": "trzeba skończyć w określonym czasie."
        }
       ],
       "answer": "c"
      },
      {
       "id": "l3.3",
       "number": 3,
       "prompt": "„Domy za 1 euro” znajdują się w miastach,",
       "options": [
        {
         "id": "a",
         "text": "w których mieszka mało ludzi."
        },
        {
         "id": "b",
         "text": "które są popularne wśród turystów."
        },
        {
         "id": "c",
         "text": "w których mieszka dużo studentów."
        }
       ],
       "answer": "a"
      },
      {
       "id": "l3.4",
       "number": 4,
       "prompt": "Program „Dom za 1 euro” jest",
       "options": [
        {
         "id": "a",
         "text": "dostępny tylko dla Europejczyków."
        },
        {
         "id": "b",
         "text": "znany na całym świecie."
        },
        {
         "id": "c",
         "text": "najbardziej popularny wśród Włochów."
        }
       ],
       "answer": "b"
      },
      {
       "id": "l3.5",
       "number": 5,
       "prompt": "Tradycyjny zakup nieruchomości",
       "options": [
        {
         "id": "a",
         "text": "jest popularny wśród Polaków."
        },
        {
         "id": "b",
         "text": "jest skomplikowany na południu Włoch."
        },
        {
         "id": "c",
         "text": "ma więcej zalet niż program „Dom za 1 euro”."
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
     "prompt": "Proszę posłuchać rozmowy z trenerem sportowym na temat aktywności fizycznych wiosną i zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "6 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 6,
     "plays": 2,
     "pdfPage": 7,
     "source": "Na podstawie: https://trendyradio.pl/pl/audycje-gosc-dnia/1/krosno/22579/wiosna-to-dobry-czas-na-sport",
     "audio": {
      "announce": [
       882.7,
       898.5
      ],
      "plays": [
       {
        "start": 908.8,
        "end": 1015.0
       },
       {
        "start": 1061.6,
        "end": 1167.8
       }
      ],
      "pauseBetweenPlays": 46.6,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Dziennikarka",
        "t": "Jak wrócić do formy po zimie?"
       },
       {
        "sp": "Trener",
        "t": "Jestem zwolennikiem biegania, które jest prostą formą ruszania się, natomiast nie wszyscy mogą biegać, nawet w wolnym tempie. Każdy ruch na świeżym powietrzu jest ważny."
       },
       {
        "sp": "Dziennikarka",
        "t": "Jak poprawić kondycję?"
       },
       {
        "sp": "Trener",
        "t": "Dla początkujących spacery z kijkami, a osoby już aktywne namawiam do intensywnego biegania. Mam dużo lat, ale ciągle regularnie biegam, łącznie z bieganiem półmaratonów i maratonów. W każdym wieku jest to możliwe. Można też skorzystać z roweru. W naszym mieście jest wiele siłowni zewnętrznych – zachęcam do ćwiczenia na nich."
       },
       {
        "sp": "Dziennikarka",
        "t": "A przygotowanie do treningu?"
       },
       {
        "sp": "Trener",
        "t": "Rozgrzanie mięśni zarówno przed, jak i po treningu jest ważne, żeby uniknąć kontuzji. Jest też istotne, kiedy wybieramy marsz."
       },
       {
        "sp": "Dziennikarka",
        "t": "Czy 10-minutowe treningi mają sens?"
       },
       {
        "sp": "Trener",
        "t": "To za mało. 10 minut może trwać rozciąganie. Żeby był efekt, potrzebujemy 30-40 minut."
       },
       {
        "sp": "Dziennikarka",
        "t": "Wiosną warto stosować suplementy diety?"
       },
       {
        "sp": "Trener",
        "t": "Można zażywać minerały, ale wraz ze słońcem mamy więcej naturalnej witaminy D. Nie potrzebujemy dodatkowej chemii. Wystarczy prawidłowe, zróżnicowane jedzenie."
       },
       {
        "sp": "Dziennikarka",
        "t": "Codziennie należy ćwiczyć?"
       },
       {
        "sp": "Trener",
        "t": "To zależy od naszego organizmu. Jeśli chcemy pozostać w dobrej kondycji fizycznej, trenujmy 3 razy w tygodniu. Codzienne treningi są dobre dla zawodowców."
       }
      ]
     },
     "example": {
      "id": "l4.ex",
      "statement": "Trener poleca szybsze lub wolniejsze bieganie każdemu.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "statement": "Mężczyzna nie startuje w zawodach z powodu wieku.",
       "answer": "NIE"
      },
      {
       "id": "l4.2",
       "number": 2,
       "statement": "W mieście jest dużo siłowni na świeżym powietrzu.",
       "answer": "TAK"
      },
      {
       "id": "l4.3",
       "number": 3,
       "statement": "Przed marszem można zrezygnować z dodatkowych ćwiczeń mięśni.",
       "answer": "NIE"
      },
      {
       "id": "l4.4",
       "number": 4,
       "statement": "Krótkie treningi nie dają dobrych rezultatów.",
       "answer": "TAK"
      },
      {
       "id": "l4.5",
       "number": 5,
       "statement": "Mężczyzna poleca dobre jedzenie zamiast suplementów.",
       "answer": "TAK"
      },
      {
       "id": "l4.6",
       "number": 6,
       "statement": "Według trenera powinno się ćwiczyć każdego dnia.",
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
     "prompt": "Proszę wysłuchać tekstu na temat preferencji zakupowych Polaków i dopasować osoby (1-5) do ich opinii (A-E). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
     "pointsFormula": "6 x 1 p.",
     "pointsPerSlot": 1,
     "maxPoints": 6,
     "plays": 2,
     "pdfPage": 8,
     "audio": {
      "announce": [
       1177.8,
       1193.8
      ],
      "plays": [
       {
        "start": 1204.0,
        "end": 1324.5
       },
       {
        "start": 1371.7,
        "end": 1492.2
       }
      ],
      "pauseBetweenPlays": 47.2,
      "items": [
       {
        "ref": "p1",
        "start": 1204.0,
        "end": 1228.3
       },
       {
        "ref": "p2",
        "start": 1234.2,
        "end": 1249.1
       },
       {
        "ref": "p3",
        "start": 1254.7,
        "end": 1273.7
       },
       {
        "ref": "p4",
        "start": 1279.0,
        "end": 1298.9
       },
       {
        "ref": "p5",
        "start": 1304.5,
        "end": 1324.5
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
      "statement": "to entuzjastka nowych technologii.",
      "answer": [
       "3"
      ],
      "shown": true
     },
     "statements": [
      {
       "id": "l5.A",
       "letter": "A",
       "text": "kupuje naturalne produkty.",
       "slots": 1,
       "answer": [
        "5"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l5.B",
       "letter": "B",
       "text": "zwraca uwagę na ceny produktów.",
       "slots": 2,
       "answer": [
        "2",
        "4"
       ],
       "anyOrder": true,
       "starred": true
      },
      {
       "id": "l5.C",
       "letter": "C",
       "text": "zwykle wybiera najnowsze modele.",
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
       "text": "poszukuje oryginalnych i wyjątkowych rzeczy.",
       "slots": 1,
       "answer": [
        "1"
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
        "t": "Uwielbiam kupować ubrania z nowych kolekcji. Szukam zawsze czegoś nietypowego, co będzie inne, niż mają wszyscy. Zakupy robię nie tylko dlatego, że muszę. To co, kupuję, daje mi możliwość pokazania tego, kim jestem."
       },
       {
        "sp": "Osoba 2 (M)",
        "t": "Dla mnie liczy się przede wszystkim to, co praktyczne. Najczęściej wybieram stacjonarne sklepy, gdzie mogę dokładnie obejrzeć produkt, sprawdzić, ile kosztuje i kupić tańszy."
       },
       {
        "sp": "Osoba 3 (K)",
        "t": "Elektronika i nowoczesne rozwiązania to moja pasja i nie wyobrażam sobie życia bez gadżetów. Dla mnie zakupy online to nie tylko wygoda, ale również szansa na kupienie sprzętów, które niedawno pojawiły się na rynku."
       },
       {
        "sp": "Osoba 4 (M)",
        "t": "Szukanie dobrych okazji to dla mnie prawdziwa przyjemność! Najpierw porównuję ceny produktów w różnych sklepach i staram się znaleźć najlepsze oferty. Bardzo cieszy mnie, że oszczędzam, a jednocześnie kupuję rzeczy wysokiej jakości."
       },
       {
        "sp": "Osoba 5 (K)",
        "t": "Zdrowy styl życia jest dla mnie najważniejszy. Regularnie korzystam z dostawy do domu świeżych owoców i warzyw od rolnika. Wybieram produkty ekologiczne, które są przyjazne dla środowiska. Dla mnie to ważny aspekt każdego zakupu."
       }
      ]
     },
     "pdfNotes": [
      "Printed prompt says opinions '(A-E)' although the table has only A–D (official typo, kept verbatim)."
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
       "text": "Szukasz dla siebie swetra lub spodni, ale chcesz też zaoszczędzić? Zapraszamy na wymianę używanych ubrań! Spotkamy się w najbliższą sobotę o 15:00 w klubie „Lamus”, wypijemy pyszną kawę, porozmawiamy, spędzimy miłe popołudnie. Wymiana odbywa się bez pieniędzy.",
       "source": "Na podstawie: https://odracentrum.org/wymiana-ubran-w-odra-centrum-zerowaste/"
      },
      "prompt": "Z tego tekstu wynika, że",
      "options": [
       {
        "id": "a",
        "text": "nie poznasz innych uczestników akcji."
       },
       {
        "id": "b",
        "text": "ubrań nie będzie można kupować."
       },
       {
        "id": "c",
        "text": "przekazać można tylko nową odzież."
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
        "text": "Bilety na komunikację są drogie. Jednak lepiej je kupić niż denerwować się, że spotkamy kontrolera. W Gdańsku brak biletu na przejazd może nas kosztować nawet 300 złotych. Warto jednak pamiętać, że kwota będzie niższa, jeśli zapłacimy mandat od razu lub najpóźniej w ciągu 7 dni.",
        "source": "Na podstawie: https://www.trojmiasto.pl/wiadomosci/Nawet-300-zl-za-jazde-bez-waznego-biletu-Trojmiasto-walczy-z-gapowiczami-n186608.html"
       },
       "prompt": "Z tego tekstu wynika, że w Gdańsku wysokość mandatu",
       "options": [
        {
         "id": "a",
         "text": "jest zawsze taka sama."
        },
        {
         "id": "b",
         "text": "zależy od terminu zapłaty."
        },
        {
         "id": "c",
         "text": "zależy od kontrolera."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "W ostatnim meczu polska tenisistka Iga Świątek w pięknym stylu pokonała swoją rywalkę i bez problemu awansowała do finału turnieju w Dubaju. Sukces był wyjątkowy także z innego powodu – Polka kontynuuje szczęśliwą serię zwycięstw, która trwa od października ubiegłego roku.",
        "source": "Na podstawie: https://www.sport.pl/tenis/7,64987,30726107,13-0-imponujacy-dorobek-igi-swiatek.html"
       },
       "prompt": "Z tego tekstu wynika, że Iga Świątek",
       "options": [
        {
         "id": "a",
         "text": "nie przegrała meczu od zeszłego roku."
        },
        {
         "id": "b",
         "text": "wygrała turniej tenisa organizowany w Dubaju."
        },
        {
         "id": "c",
         "text": "zagrała ostatni raz w tym turnieju."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Nowe badania na temat emocji oraz zdrowia psychicznego dzieci pokazują, że w najlepszej sytuacji są te bez rodzeństwa lub z tylko jednym bratem lub jedną siostrą. Specjaliści uważają też, że duża różnica wieku między rodzeństwem wpływa negatywnie na stan psychiczny najmłodszych.",
        "source": "Na podstawie: https://www.mjakmama24.pl/aktualnosci/liczne-rodzenstwo-to-swietna-sprawa-naukowcy-ustalili-ze-niekoniecznie-aa-L3Jm-dgQV-xVe6.html"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "badanie dotyczyło tylko dzieci, które mają starsze rodzeństwo."
        },
        {
         "id": "b",
         "text": "wiek rodzeństwa nie jest ważny dla psychiki dziecka."
        },
        {
         "id": "c",
         "text": "na emocje dziecka dobrze wpływa fakt, że nie ma siostry lub brata."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Już w najbliższych latach na terenie całej Europy ludzie odczują efekty zmiany klimatu. Skutki ocieplenia nie będą takie same we wszystkich regionach naszego kontynentu. W Polsce możemy spodziewać się między innymi rzadkich opadów deszczu oraz częstych upałów, dlatego trzeba liczyć się z wyższymi cenami żywności.",
        "source": "Na podstawie: https://www.wwf.pl/srodowisko/klimat"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "w niektórych częściach Europy klimat się nie zmieni."
        },
        {
         "id": "b",
         "text": "w całej Europie będzie podobna pogoda."
        },
        {
         "id": "c",
         "text": "niedługo w Polsce jedzenie może być droższe."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "Podczas wakacji Park Legend odwiedzali głównie turyści indywidualni, a teraz coraz więcej wycieczek rezerwują szkoły. W tym niezwykłym muzeum dzięki technice komputerowej możemy dowiedzieć się więcej o wydarzeniach, które miały miejsce dawno temu.",
        "source": "Na podstawie: https://turystyka.wp.pl/nowa-atrakcja-w-polsce-takiego-miejsca-jeszcze-nie-bylo-6943593016044256a"
       },
       "prompt": "Z tego tekstu wynika, że Park Legend",
       "options": [
        {
         "id": "a",
         "text": "wcześniej był atrakcją popularną tylko wśród uczniów."
        },
        {
         "id": "b",
         "text": "prezentuje przeszłość w nowoczesny sposób."
        },
        {
         "id": "c",
         "text": "można zwiedzić także przez internet."
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
     "pdfPage": 12,
     "source": "Na podstawie: https://www.programosy.pl/program,android-yazio.html",
     "passage": "Jeśli chcesz zacząć żyć zdrowo, ale nie wiesz, jak to zrobić, dobrym rozwiązaniem będzie aplikacja Yazio. To program, który pomoże ci w trzech różnych sytuacjach: jeśli chcesz ważyć mniej, nie chcesz ważyć więcej lub pragniesz zbudować mięśnie. Aby móc z niego korzystać, trzeba się zarejestrować – wystarczy tylko wpisać adres e-mail.\n\nNa początku wybieramy swój cel i wpisujemy dane: płeć, wzrost, wagę, datę urodzenia, a program automatycznie tworzy dla nas najlepszy plan żywieniowy. Yazio zadba również o to, byśmy pili codziennie odpowiednią ilość wody. Co więcej, program ma wyszukiwarkę żywności – po znalezieniu potrawy, na którą mamy ochotę, dodajemy ją do naszego menu na dany dzień. Nie zabrakło też możliwości oznaczenia posiłku jako ulubionego, dzięki czemu w przyszłości łatwiej będzie go odszukać. Warto dodać, że Yazio ma nawet skaner kodów kreskowych – wystarczy zrobić zdjęcie, a program pokaże nam podstawowe informacje o produkcie.\n\nYazio kontroluje również naszą aktywność fizyczną. Ćwiczenia dodajemy samodzielnie, ale możemy je wybrać z szerokiej bazy dostępnych aktywności: na przykład „bieganie” ma aż dziesięć opcji, które różnią się prędkością i intensywnością.\n\nAplikacja jest bardzo prosta w obsłudze, od razu wiadomo, jak jej używać. A wady? Możemy korzystać z darmowego konta, ale wtedy na ekranie widzimy różne reklamy i nie mamy dostępu do wszystkich funkcji.",
     "example": {
      "id": "r2.ex",
      "statement": "Tekst dotyczy aplikacji dietetycznej.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Yazio pomaga utrzymać wagę i modelować sylwetkę.",
       "answer": "TAK"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Przy rejestracji należy podać kilka informacji o sobie.",
       "answer": "NIE"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Aplikacja proponuje ilość płynów, które mamy wypić każdego dnia.",
       "answer": "TAK"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Skaner kodów pomoże nam znaleźć najsmaczniejszy posiłek.",
       "answer": "NIE"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Program ma wbudowaną bogatą listę ćwiczeń sportowych.",
       "answer": "TAK"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Podczas rejestracji trzeba zapłacić za korzystanie z Yazio.",
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
     "source": "Na podstawie: https://www.edunews.pl/badania-i-debaty/przyszlosc-edukacji/2788-androidowy-nauczyciel-eksperyment-myslowy",
     "title": "Mój nauczyciel jest robotem!",
     "passage": "Roboty są coraz bardziej obecne w naszym życiu. Wykonują wiele czynności, {{ex}}? Jaka czeka nas przyszłość?\n\nRozwój technologii może doprowadzić do powstania sztucznej inteligencji na takim poziomie, {{1}}. To wcale nie jest niemożliwe!\n\nZ takiego pracownika na pewno będą zadowoleni dyrektorzy szkół. Robot nigdy nie poprosi o urlop, {{2}}. Uczniom również spodobają się mechaniczni nauczyciele, {{3}} będą znali odpowiedź na każde ich pytanie. Żaden szkolny przedmiot nie będzie miał przed nimi tajemnic. Choć z drugiej strony cyfrowa pamięć posiada też wady: jeśli uczeń nie odda zadania domowego {{4}}, robot przypomni mu to nawet po wielu tygodniach. Nie zapomni też o żadnym sprawdzianie czy teście.\n\nNajpoważniejszym problemem może być jednak to, że dziecko nie będzie miało obok siebie człowieka, {{5}}. Bez niej młody człowiek może stracić motywację do nauki. Nauczyciel-robot będzie znał dane osobowe wszystkich uczniów, {{6}}. A to ważny element pracy z młodzieżą.\n\nPomysł wykorzystania robotów w szkole ma wiele zalet {{7}}. Jednak dziś nic nie zastąpi dziecku kontaktu z prawdziwymi ludźmi.",
     "options": [
      {
       "id": "A",
       "text": "ale nie będzie rozumiał ich uczuć"
      },
      {
       "id": "B",
       "text": "żeby trochę odpocząć czy spędzić czas z rodziną"
      },
      {
       "id": "C",
       "text": "ale czy we wszystkim mogą zastąpić człowieka"
      },
      {
       "id": "D",
       "text": "czy kolejny raz spóźni się na lekcję"
      },
      {
       "id": "E",
       "text": "którzy dzięki specjalnemu programowi"
      },
      {
       "id": "F",
       "text": "który nawiąże z nim emocjonalną relację"
      },
      {
       "id": "G",
       "text": "i może już za kilka lat będzie faktem"
      },
      {
       "id": "H",
       "text": "że pozwoli zastąpić nauczycieli robotami"
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
       "answer": "H"
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
       "answer": "E"
      },
      {
       "id": "r3.4",
       "number": 4,
       "gap": "4",
       "answer": "D"
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
       "answer": "A"
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
     "source": "Na podstawie: https://al.edu.pl/biuro-karier/student-absolwent/twoja-kariera/20-pytania-na-rozmowie-kwalifikacyjnej",
     "heading": "8 pytań z rozmowy o pracę",
     "options": [
      {
       "id": "A",
       "text": "Mój ostatni kierownik był naprawdę świetnym specjalistą w swojej dziedzinie, ale czasem mieliśmy różne opinie na ten sam temat – zawsze jednak umieliśmy się porozumieć."
      },
      {
       "id": "B",
       "text": "Fabryka istnieje na rynku od 15 lat i jest liderem wśród producentów mebli w Polsce, a jej produkty są cenione przez klientów za jakość i nowoczesny wygląd."
      },
      {
       "id": "C",
       "text": "Mimo że najbardziej lubię wykonywać zadania samodzielnie, to cenię ludzi, którzy są kreatywni i mają swoje zdanie."
      },
      {
       "id": "D",
       "text": "Zauważyłem, że kiedy się stresuję, to gorzej wykonuję swoje obowiązki i mam problem z koncentracją. Dlatego w pracy staram się unikać konfliktów, a projekty realizować na czas."
      },
      {
       "id": "E",
       "text": "W ciągu ostatniego roku współpracowałem z ważnymi klientami i zrealizowałem kilka dużych projektów – dzięki temu moja firma otrzymała prestiżową nagrodę."
      },
      {
       "id": "F",
       "text": "Zawsze chciałem być ekspertem w swojej dziedzinie. Mam zamiar dowiedzieć się, jak kierować zespołem, ponieważ marzę o stanowisku menadżera."
      },
      {
       "id": "G",
       "text": "Jestem bardzo sumienny i szybko się uczę. Koledzy z pracy uważają, że moje największe zalety to odpowiedzialność i łatwość w nawiązywaniu kontaktów. Na pewno będę dobrym pracownikiem."
      },
      {
       "id": "H",
       "text": "Moje obecne miejsce pracy nie oferuje już możliwości awansu. Ponadto chciałbym pracować w firmie, która korzysta z najnowszych technologii."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Co wiesz o naszej firmie?",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Dlaczego powinniśmy cię zatrudnić?",
       "answer": "G"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Jak układała się współpraca z innymi szefami?",
       "answer": "A"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Gdzie widzisz siebie za pięć lat?",
       "answer": "F"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Z jakiego powodu chcesz zmienić pracę?",
       "answer": "H"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Co uważasz za swój największy zawodowy sukces?",
       "answer": "E"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Jakie są twoje słabe strony?",
       "answer": "D"
      },
      {
       "id": "r4.7",
       "number": 7,
       "prompt": "Z kim lubisz pracować?",
       "answer": "C"
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
     "title": "Czas wolny",
     "source": "Na podstawie: https://poradnikpracownika.pl/-czas-wolny-jak-go-nie-zmarnowac-i-efektywnie-wykorzystac",
     "passage": "Co można robić w wolnym czasie? Odpowiedzi na to pytanie mogą być naprawdę {{ex}}, jednak trzeba przyznać, że chyba najczęściej {{1}} kanapę i telewizor. Są też osoby, które codziennie przez długie godziny {{2}} internet bez konkretnego celu.\n\nZdecydowanie zbyt mało czasu spędzamy na {{3}} powietrzu. Często też {{4}} o ruchu, nie uprawiamy żadnego sportu, a przecież każdy wie, że codzienny trening może nam dać dużo {{5}} do działania. Każdy wysiłek fizyczny pozytywnie {{6}} na nasze zdrowie.\n\nCzas po pracy to także doskonała okazja do {{7}} ze znajomymi. Chwile z przyjaciółmi można spędzać na wiele {{8}}, na przykład pójść do kina, restauracji lub do klubu.\n\nWarto też {{9}} dnia znaleźć moment tylko dla siebie – wziąć długą gorącą kąpiel, posłuchać muzyki. Najważniejsze jednak, żebyśmy robili to, co po prostu {{10}} radość i satysfakcję.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "duże",
        "inne",
        "różne"
       ],
       "answer": "różne"
      },
      {
       "id": "1",
       "options": [
        "wybieramy",
        "wymyślamy",
        "rozkładamy"
       ],
       "answer": "wybieramy"
      },
      {
       "id": "2",
       "options": [
        "oglądają",
        "analizują",
        "przeglądają"
       ],
       "answer": "przeglądają"
      },
      {
       "id": "3",
       "options": [
        "czystym",
        "świeżym",
        "dobrym"
       ],
       "answer": "świeżym"
      },
      {
       "id": "4",
       "options": [
        "zapominamy",
        "pamiętamy",
        "przypominamy"
       ],
       "answer": "zapominamy"
      },
      {
       "id": "5",
       "options": [
        "kondycji",
        "aktywności",
        "energii"
       ],
       "answer": "energii"
      },
      {
       "id": "6",
       "options": [
        "robi",
        "wpływa",
        "pomaga"
       ],
       "answer": "wpływa"
      },
      {
       "id": "7",
       "options": [
        "poznania",
        "spotkania",
        "mówienia"
       ],
       "answer": "spotkania"
      },
      {
       "id": "8",
       "options": [
        "sposobów",
        "pomysłów",
        "okazji"
       ],
       "answer": "sposobów"
      },
      {
       "id": "9",
       "options": [
        "wszystkiego",
        "całego",
        "każdego"
       ],
       "answer": "każdego"
      },
      {
       "id": "10",
       "options": [
        "daje",
        "otrzymuje",
        "czuje"
       ],
       "answer": "daje"
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
    22
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
     "passage": "Drogi Tato! Twoja rola w pierwszych miesiącach życia {{ex1}} jest niezwykle {{ex2}}, ale może też bardzo {{ex3}} zmęczyć.\n\nGdy w nocy dziecko płacze i jest {{1}}, zwykle zajmujesz się {{2}} wspólnie z partnerką. Rano czujesz się senny, a przecież musisz iść do {{3}} i spędzić tam wiele {{4}}. Mimo zmęczenia po {{5}} do domu starasz się wyjść na {{6}} z maluchem. Chwila spokoju to najlepszy prezent, jaki możesz dać swojej {{7}}. Kiedy wracasz, rozmawiasz z {{8}} – słuchasz uważnie i opowiadasz, co słychać w {{9}} świecie. Razem jesteście {{10}} i na pewno dacie radę!",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "dziecku",
        "dzieckiem",
        "dziecka"
       ],
       "answer": "dziecka"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "ważną",
        "ważna",
        "ważnej"
       ],
       "answer": "ważna"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "cię",
        "ciebie",
        "ci"
       ],
       "answer": "cię"
      },
      {
       "id": "1",
       "options": [
        "głodny",
        "głodnym",
        "głodne"
       ],
       "answer": "głodne"
      },
      {
       "id": "2",
       "options": [
        "nią",
        "nim",
        "go"
       ],
       "answer": "nim"
      },
      {
       "id": "3",
       "options": [
        "prace",
        "pracy",
        "pracą"
       ],
       "answer": "pracy"
      },
      {
       "id": "4",
       "options": [
        "godzinie",
        "godziny",
        "godzin"
       ],
       "answer": "godzin"
      },
      {
       "id": "5",
       "options": [
        "powrocie",
        "powrotem",
        "powrotu"
       ],
       "answer": "powrocie"
      },
      {
       "id": "6",
       "options": [
        "spacerze",
        "spacer",
        "spaceru"
       ],
       "answer": "spacer"
      },
      {
       "id": "7",
       "options": [
        "ukochaną",
        "ukochana",
        "ukochanej"
       ],
       "answer": "ukochanej"
      },
      {
       "id": "8",
       "options": [
        "niej",
        "nią",
        "jej"
       ],
       "answer": "nią"
      },
      {
       "id": "9",
       "options": [
        "twojej",
        "twojego",
        "twoim"
       ],
       "answer": "twoim"
      },
      {
       "id": "10",
       "options": [
        "silni",
        "silnymi",
        "silny"
       ],
       "answer": "silni"
      }
     ]
    },
    {
     "id": "g2",
     "number": "II",
     "type": "clozeBox",
     "grading": "auto",
     "instruction": "II. Proszę – zgodnie z przykładem – uzupełnić zdania wyrazami z ramki (wskaźniki zespolenia). Uwaga! Jeden wyraz w ramce jest niepotrzebny.",
     "pointsFormula": "5 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 2.5,
     "pdfPage": 17,
     "source": "Na podstawie: https://tuwartomieszkac.pl/miasto-czy-wies-gdzie-lepiej-mieszkac/",
     "wordBox": [
      "które",
      "czy",
      "niż",
      "więc",
      "jeśli",
      "lub",
      "a"
     ],
     "distractors": [
      "więc"
     ],
     "passage": "Gdzie lepiej mieszkać: w mieście {{ex}} na wsi?\n\nTo jest pytanie, {{1}} często słyszymy w modnych dziś dyskusjach o stylu życia.\n\nMożna wymienić wiele zalet {{2}} także wad mieszkania w każdym z tych miejsc. {{3}} ktoś lubi spokojny tryb życia, kontakt z naturą, powinien wybrać wieś. Ktoś, kto woli szybki styl życia, chciałby po pracy pójść na koncert {{4}} na mecz, niech zamieszka w mieście. W miastach jest też dużo lepszy {{5}} na wsi dostęp do opieki zdrowotnej.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "czy"
      },
      {
       "id": "1",
       "answer": "które"
      },
      {
       "id": "2",
       "answer": "a"
      },
      {
       "id": "3",
       "answer": "jeśli"
      },
      {
       "id": "4",
       "answer": "lub"
      },
      {
       "id": "5",
       "answer": "niż"
      }
     ],
     "pdfNotes": [
      "Task header says '(wskaźniki zespolenia)' instead of '(spójniki)'; same box-cloze mechanics (clozeBox).",
      "Key prints 'Jeśli' (sentence start); stored with the box casing 'jeśli'.",
      "The heading line ('Gdzie lepiej mieszkać: w mieście czy PRZYKŁAD na wsi?') contains the example gap; kept as the first paragraph of the passage."
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
     "passage": "Kiedy byłam {{ex1}} dziewczynką, {{ex2}} niż zup nie lubiłam jeść niektórych dań z warzyw. Uważałam wtedy, że {{1}} warzywem na świecie jest marchewka, zwłaszcza gotowana. Każde inne warzywo wydawało mi się {{2}} od niej. Moje gusty kulinarne ogromnie się zmieniły, gdy dorosłam i {{3}} obejrzałam programy kulinarne Roberta Makłowicza. Ten kucharz i podróżnik pokazał mi, że każdy produkt można podać tak, by podkreślić jego {{4}} smak. Dzięki tym programom wiele dowiedziałam się o warzywach i teraz gotuję je dużo {{5}}. Można powiedzieć, że stałam się mistrzynią w przygotowywaniu potraw z warzyw.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "małą",
        "mniejszą",
        "najmniejszą"
       ],
       "answer": "małą"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "najbardziej",
        "bardziej",
        "bardzo"
       ],
       "answer": "bardziej"
      },
      {
       "id": "1",
       "options": [
        "gorszym",
        "najgorzej",
        "najgorszym"
       ],
       "answer": "najgorszym"
      },
      {
       "id": "2",
       "options": [
        "smaczniejsze",
        "najsmaczniejszym",
        "smaczniej"
       ],
       "answer": "smaczniejsze"
      },
      {
       "id": "3",
       "options": [
        "uważne",
        "uważnie",
        "najuważniej"
       ],
       "answer": "uważnie"
      },
      {
       "id": "4",
       "options": [
        "wyjątkowo",
        "wyjątkowy",
        "bardziej wyjątkowo"
       ],
       "answer": "wyjątkowy"
      },
      {
       "id": "5",
       "options": [
        "chętniej",
        "chętnie",
        "najchętniej"
       ],
       "answer": "chętniej"
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
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "Mam na imię Magda i od dawna {{ex1}} o podróżowaniu, ale dopiero dziś {{ex2}} spełnić to marzenie. Nareszcie moja córka i ja {{1}} na wymarzoną wyprawę rowerową przez Europę. {{2}} ją zupełnie same! Dawniej, bez internetu, {{3}} to bardzo trudne zadanie. Wiele lat temu {{4}}, ile czasu moi rodzice {{5}} takie wyjazdy. Teraz ja i córka {{6}} przed komputerem i po prostu {{7}} propozycje wycieczek, które w poprzednich latach {{8}} na blogach inni podróżnicy. Następnie {{9}} wpisać te dane w telefonie w aplikacji, która {{10}} długość trasy i czas przejazdu. Dobrze, że teraz to jest takie łatwe.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "marzyć",
       "answer": "marzyłam"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "móc",
       "answer": "mogę"
      },
      {
       "id": "1",
       "given": "jechać",
       "answer": "jedziemy",
       "accept": []
      },
      {
       "id": "2",
       "given": "my – Zorganizować",
       "answer": "zorganizowałyśmy",
       "accept": []
      },
      {
       "id": "3",
       "given": "być",
       "answer": "było",
       "accept": []
      },
      {
       "id": "4",
       "given": "ja – widzieć",
       "answer": "widziałam",
       "accept": []
      },
      {
       "id": "5",
       "given": "planować",
       "answer": "planowali",
       "accept": []
      },
      {
       "id": "6",
       "given": "siadać",
       "answer": "siadamy",
       "accept": []
      },
      {
       "id": "7",
       "given": "znajdować",
       "answer": "znajdujemy",
       "accept": []
      },
      {
       "id": "8",
       "given": "opublikować",
       "answer": "opublikowali",
       "accept": []
      },
      {
       "id": "9",
       "given": "ja – musieć",
       "answer": "muszę",
       "accept": []
      },
      {
       "id": "10",
       "given": "obliczać",
       "answer": "oblicza",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Hint of item 2 is printed '(my – Zorganizować)' with a capital Z (kept verbatim in `given`)."
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
      "sentence": "Adam uczy się grać na gitarze od pół roku.",
      "underlined": "od pół roku",
      "stem": "…………… Adam uczy się grać na gitarze?",
      "shortAnswer": "Od pół roku.",
      "answer": "Od kiedy",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Córka wysłała swojej matce życzenia urodzinowe.",
       "underlined": "swojej matce",
       "stem": "…………… córka wysłała życzenia urodzinowe?",
       "shortAnswer": "Swojej matce.",
       "answer": "Komu",
       "accept": []
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Marta pięknie udekorowała swoje mieszkanie.",
       "underlined": "pięknie",
       "stem": "…………… Marta udekorowała swoje mieszkanie?",
       "shortAnswer": "Pięknie.",
       "answer": "Jak",
       "accept": []
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Rano poszłam do przedszkola po siostrę.",
       "underlined": "po siostrę",
       "stem": "…………… poszłaś rano do przedszkola?",
       "shortAnswer": "Po siostrę.",
       "answer": "Po kogo",
       "accept": []
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Dyrektor pije kawę tylko w tym kubku.",
       "underlined": "w tym",
       "stem": "…………… kubku dyrektor pije kawę?",
       "shortAnswer": "W tym.",
       "answer": "W którym",
       "accept": [
        "W jakim"
       ]
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Wojciech przez 5 lat kierował firmą.",
       "underlined": "firmą",
       "stem": "…………… Wojciech kierował przez 5 lat?",
       "shortAnswer": "Firmą.",
       "answer": "Czym",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Official key prints the question word with decoration (Komu…?, Jak…?); stored without it, match.stripChars ignores the decoration.",
      "Item 4 key: 'W którym…? / W jakim…? (0,25 p.)' - first alternative stored as answer, 'W jakim' in accept (the key marks it as worth only 0,25 p.)."
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
      "source": "Michał bardzo chciał pojechać na egzotyczne wakacje.",
      "hint": "marzył",
      "answer": "Michał marzył o egzotycznych wakacjach.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "Magda dopiero wczoraj dowiedziała się o nowym terminie egzaminu.",
       "hint": "poznała",
       "answer": "Magda dopiero wczoraj poznała nowy termin egzaminu.",
       "rubric": "usunięcie przyimka (0,5) + 2 transformacje (2 x 0,25)",
       "rubricParts": [
        {
         "what": "usunięcie przyimka",
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
       "source": "Ile lat ma ich córka?",
       "hint": "wieku",
       "answer": "W jakim wieku jest ich córka?",
       "rubric": "zastąpienie ile lat przez w jakim (0,5) + usunięcie ma (0,25) + wstawienie jest (0,25)",
       "rubricParts": [
        {
         "what": "zastąpienie ile lat przez w jakim",
         "points": 0.5
        },
        {
         "what": "usunięcie ma",
         "points": 0.25
        },
        {
         "what": "wstawienie jest",
         "points": 0.25
        }
       ]
      },
      {
       "id": "g6.3",
       "number": 3,
       "source": "Mała dziewczynka przyglądała się kolorowemu zegarowi.",
       "hint": "patrzyła",
       "answer": "Mała dziewczynka patrzyła na kolorowy zegar.",
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
      },
      {
       "id": "g6.4",
       "number": 4,
       "source": "Sąsiad sprzedał mi używany samochód.",
       "hint": "Kupiłem",
       "answer": "Kupiłem od sąsiada używany samochód.",
       "rubric": "dodanie przyimka (0,25) + transformacja (0,25) + brak transformacji (2 x 0,25)",
       "rubricParts": [
        {
         "what": "dodanie przyimka",
         "points": 0.25
        },
        {
         "what": "transformacja",
         "points": 0.25
        },
        {
         "what": "brak transformacji",
         "points": 0.5
        }
       ]
      },
      {
       "id": "g6.5",
       "number": 5,
       "source": "Zimą brakuje nam słońca.",
       "hint": "tęsknimy",
       "answer": "Zimą tęsknimy za słońcem.",
       "rubric": "dodanie przyimka (0,5) + usunięcie zaimka (0,25) + transformacja (0,25)",
       "rubricParts": [
        {
         "what": "dodanie przyimka",
         "points": 0.5
        },
        {
         "what": "usunięcie zaimka",
         "points": 0.25
        },
        {
         "what": "transformacja",
         "points": 0.25
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
     "pdfPage": 21,
     "passage": "Anna: Czy pamiętasz, że rodzice za dwa miesiące obchodzą 50. rocznicę ślubu? {{ex1}} zorganizować im uroczyste przyjęcie z tej okazji. {{ex2}} mi, proszę.\n\nBartosz: Dobrze, jak {{1}} ci pomóc?\n\nAnna: Trochę o tym myślałam. Może {{2}} zaproszenia dla gości?\n\nBartosz: Nie {{3}}! Przecież wiesz, że nie jestem w tym dobry. Nigdy nie lubiłem prac plastycznych. {{4}} zaproszenia w jakiejś firmie graficznej. Taka usługa nie jest droga.\n\nAnna: To może chociaż zrobisz listę gości?\n\nBartosz: Lepiej {{5}} ją razem. Ty dobrze znasz naszą dalszą rodzinę i przyjaciół rodziców.\n\nAnna: Wiesz, {{6}} się tym nie zajmować. Będę miała na głowie menu, a potem zakupy i gotowanie.\n\nBartosz: Jadłospis {{7}} przygotować z moją Basią. Jestem też pewien, że w pracach kuchennych chętnie {{8}} udział moje córki. Lubią pomagać w gotowaniu.\n\nAnna: A co z prezentem?\n\nBartosz: Niech twój mąż {{9}} nam, co kupić. On ma zawsze dobre pomysły.\n\nAnna: No dobrze, ale w takim razie ty i Basia {{10}} też kwiatami.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "Chciałabym",
        "chciałaby",
        "chciałbyś"
       ],
       "answer": "Chciałabym"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "Pomóżmy",
        "Pomóż",
        "Pomagaj"
       ],
       "answer": "Pomóż"
      },
      {
       "id": "1",
       "options": [
        "miałbym",
        "mielibyśmy",
        "miałabyś"
       ],
       "answer": "miałbym"
      },
      {
       "id": "2",
       "options": [
        "przygotowywalibyśmy",
        "przygotowałbyś",
        "przygotowałbym"
       ],
       "answer": "przygotowałbyś"
      },
      {
       "id": "3",
       "options": [
        "zażartujmy",
        "żartuj",
        "żartowałabym"
       ],
       "answer": "żartuj"
      },
      {
       "id": "4",
       "options": [
        "Zamówmy",
        "Zamawiajmy",
        "Zamawiaj"
       ],
       "answer": "Zamówmy"
      },
      {
       "id": "5",
       "options": [
        "róbmy",
        "zróbmy",
        "zróbcie"
       ],
       "answer": "zróbmy"
      },
      {
       "id": "6",
       "options": [
        "wolałbyś",
        "wolałaby",
        "wolałabym"
       ],
       "answer": "wolałabym"
      },
      {
       "id": "7",
       "options": [
        "mogłabym",
        "mogłybyśmy",
        "moglibyśmy"
       ],
       "answer": "moglibyśmy"
      },
      {
       "id": "8",
       "options": [
        "wzięłyby",
        "wzięliby",
        "brałaby"
       ],
       "answer": "wzięłyby"
      },
      {
       "id": "9",
       "options": [
        "poradzi",
        "radziłby",
        "poradziłby"
       ],
       "answer": "poradzi"
      },
      {
       "id": "10",
       "options": [
        "zajmujcie się",
        "zajęłybyście się",
        "zajmijcie się"
       ],
       "answer": "zajmijcie się"
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
     "pdfPage": 22,
     "wordBox": [
      "z",
      "przez",
      "dla",
      "ze",
      "w",
      "na",
      "koło"
     ],
     "distractors": [
      "na"
     ],
     "passage": "Pewnego letniego popołudnia Janek postanowił zorganizować nad jeziorem piknik {{ex}} przyjaciół. {{1}} dużego drzewa rozłożył kolorowe koce. Jego koledzy przynieśli {{2}} sobą smaczne przekąski {{3}} dużym koszu. Niestety, Janek {{4}} pół godziny nie mógł rozpalić grilla. Na szczęście {{5}} pomocą przyszła mu koleżanka Ewa, która okazała się specjalistką od grillowania.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "dla"
      },
      {
       "id": "1",
       "answer": "koło"
      },
      {
       "id": "2",
       "answer": "ze"
      },
      {
       "id": "3",
       "answer": "w"
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
    23,
    30
   ],
   "tasks": [
    {
     "id": "w",
     "number": null,
     "type": "writing",
     "grading": "review",
     "pdfPages": [
      24,
      30
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
         "prompt": "Wyjechała Pani / Wyjechał Pan za granicę na kurs językowy. Proszę napisać pozdrowienia do profesora, który uczył Panią/Pana języka polskiego. Pozdrowienia wyśle Pani/Pan pocztą tradycyjną."
        },
        {
         "id": "b",
         "genre": "e-mail",
         "wordTarget": 170,
         "prompt": "Chce Pani/Pan zrobić remont pokoju dla dziecka / pokoju do pracy. Proszę napisać e-mail do biura architektonicznego z prośbą o przygotowanie projektu i opisać, jak ma wyglądać ten pokój po remoncie."
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
         "prompt": "Chce Pani/Pan sprzedać rower swojego dziecka. Proszę napisać ogłoszenie, które opublikuje Pani/Pan na stronie internetowej „Kupno i Sprzedaż”."
        },
        {
         "id": "b",
         "genre": "e-mail",
         "wordTarget": 160,
         "prompt": "Wróciła Pani / Wrócił Pan z wakacji. Proszę napisać e-mail do kuzynki z Polski, w którym opisze Pani/Pan, gdzie Pani była / Pan był i jak Pani spędzała / Pan spędzał czas."
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
         "prompt": "Proszę zaprosić polskich znajomych na imprezę, którą Pani/Pan organizuje w następny weekend w swoim nowym mieszkaniu."
        },
        {
         "id": "b",
         "genre": "esej",
         "wordTarget": 160,
         "prompt": "Szkoła języka polskiego, do której chodzi Pani/Pan na zajęcia, ogłosiła konkurs na najlepszy esej z okazji Dnia Rodziny. Proszę napisać esej (wypracowanie szkolne) pt. „Rodzice to najlepsi nauczyciele”.",
         "title": "Rodzice to najlepsi nauczyciele"
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
