window.EXAMS = window.EXAMS || {};
window.EXAMS["2021-11"] = {
 "schemaVersion": 1,
 "id": "2021-11",
 "meta": {
  "level": "B1",
  "labelPdf": "listopad 2021",
  "examDates": "20-21.11.2021",
  "sources": {
   "test": "sources/2021-11/test.pdf",
   "transcript": "sources/2021-11/transcript.pdf",
   "audio": "sources/2021-11/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear; for this 2021 session only whole plays are offered (per-item times unreliable).",
   "Listening II is a persons -> traits multi-match (4 persons, traits A-E, 6 slots); listening IV is a column I -> II match table (A-F, all used incl. the example); listening V is picture matching (10 texts <-> photos B-K, A = example).",
   "Reading III has fragments A-I (all 9 used incl. example B); reading V is inline choice with 8 gaps (8 x 0,5 p.); reading I has 4 items.",
   "Grammar IV is present & past tense."
  ]
 },
 "audio": {
  "src": "sources/2021-11/audio.mp3",
  "duration": 1588.6,
  "intro": [
   0,
   46.5
  ],
  "readingTime": [
   46.5,
   107.1
  ],
  "tail": [
   1525.5,
   1588.6
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
       107.1,
       123.2
      ],
      "plays": [
       {
        "start": 133.5,
        "end": 274.4
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
        "text": "w kiosku."
       },
       {
        "id": "b",
        "text": "w biurze."
       },
       {
        "id": "c",
        "text": "w kościele."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "sp": "M",
       "t": "Proszę, reszta dla pana."
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
         "text": "na lotnisku."
        },
        {
         "id": "b",
         "text": "na stacji benzynowej."
        },
        {
         "id": "c",
         "text": "na dworcu."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Dokąd pani leci?"
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w sklepie warzywnym."
        },
        {
         "id": "b",
         "text": "w piekarni."
        },
        {
         "id": "c",
         "text": "w kawiarni."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Czy pokroić chleb?"
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "zakaz."
        },
        {
         "id": "b",
         "text": "podziękowanie."
        },
        {
         "id": "c",
         "text": "rada."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Weź parasol, pada deszcz!"
       }
      },
      {
       "id": "l1.4",
       "number": 4,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "na basenie"
        },
        {
         "id": "b",
         "text": "w sklepie obuwniczym."
        },
        {
         "id": "c",
         "text": "w perfumerii."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Ładny zapach i do tego jest w promocji!"
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź jest typowa podczas",
       "options": [
        {
         "id": "a",
         "text": "podróży."
        },
        {
         "id": "b",
         "text": "pracy."
        },
        {
         "id": "c",
         "text": "zakupów."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Pogoda jest piękna, a widoki rewelacyjne."
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "pozdrowienia."
        },
        {
         "id": "b",
         "text": "zgoda."
        },
        {
         "id": "c",
         "text": "propozycja."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Umówisz się ze mną na randkę?"
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w sklepie spożywczym."
        },
        {
         "id": "b",
         "text": "w restauracji."
        },
        {
         "id": "c",
         "text": "w drogerii."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Czy mogę zaproponować coś do picia?"
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "To jest pytanie o",
       "options": [
        {
         "id": "a",
         "text": "czas."
        },
        {
         "id": "b",
         "text": "prędkość."
        },
        {
         "id": "c",
         "text": "kierunek."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Gdzie mam skręcić?"
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "zgoda."
        },
        {
         "id": "b",
         "text": "odmowa."
        },
        {
         "id": "c",
         "text": "prośba."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "M",
        "t": "Nie ma mowy, nie zrobię tego."
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "sugestia."
        },
        {
         "id": "b",
         "text": "zakaz."
        },
        {
         "id": "c",
         "text": "prośba."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Tu nie wolno palić."
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w supermarkecie."
        },
        {
         "id": "b",
         "text": "w sklepie z zabawkami."
        },
        {
         "id": "c",
         "text": "w sklepie zoologicznym."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Kosmetyki do włosów? Na końcu regału po lewej stronie."
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "zdziwienie."
        },
        {
         "id": "b",
         "text": "rada."
        },
        {
         "id": "c",
         "text": "komplement."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Nie potrafiłabym zrobić tego lepiej."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "radość."
        },
        {
         "id": "b",
         "text": "zmęczenie."
        },
        {
         "id": "c",
         "text": "smutek."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Bardzo ci współczuję."
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "polecenie."
        },
        {
         "id": "b",
         "text": "powitanie."
        },
        {
         "id": "c",
         "text": "przeprosiny."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Proszę cię, posprzątaj pokój."
       }
      }
     ],
     "pdfNotes": [
      "Official transcript item 6 prints the speaker tag as „K)” (missing opening bracket); parsed as K."
     ]
    },
    {
     "id": "l2",
     "number": "II",
     "type": "matchMulti",
     "grading": "auto",
     "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać wypowiedzi czterech osób (1-4), które opisują swoje cechy charakteru (A-E). Proszę dopasować osoby do ich cech. Uwaga! Jedna osoba może opisać więcej niż jedną cechę.",
     "pointsFormula": "6 x 1 p.",
     "pointsPerSlot": 1,
     "maxPoints": 6,
     "plays": 2,
     "pdfPage": 4,
     "source": "Na podstawie: https://www.focus.pl/artykul/psychotest-jaki-jest-twj-typ-temperamentu?page=2",
     "audio": {
      "announce": [
       284.9,
       300.9
      ],
      "plays": [
       {
        "start": 311.3,
        "end": 421.7
       },
       {
        "start": 468.2,
        "end": 578.6
       }
      ],
      "pauseBetweenPlays": 46.5,
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
      "id": "l2.ex",
      "statement": "analizuje plusy i minusy różnych sytuacji.",
      "answer": [
       "2"
      ],
      "shown": true
     },
     "statements": [
      {
       "id": "l2.A",
       "letter": "A",
       "text": "szybko się denerwuje.",
       "slots": 1,
       "answer": [
        "3"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l2.B",
       "letter": "B",
       "text": "jest bardzo zaangażowana w to, co robi.",
       "slots": 2,
       "answer": [
        "1",
        "3"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l2.C",
       "letter": "C",
       "text": "nie lubi kłócić się z innymi.",
       "slots": 1,
       "answer": [
        "2"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l2.D",
       "letter": "D",
       "text": "lubi pomagać innym.",
       "slots": 1,
       "answer": [
        "4"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l2.E",
       "letter": "E",
       "text": "ma wesołą naturę.",
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
        "sp": "Osoba 1 (M)",
        "t": "Ludzie lubią być blisko mnie. Jestem towarzyski i pogodny. Moja maksyma to „chwytaj dzień”. Jestem optymistą, lubię się śmiać z żartów innych i sam też chętnie żartuję. Mam mnóstwo pomysłów, a gdy coś bardzo mnie zainteresuje, to zajmuję się tym na sto procent."
       },
       {
        "sp": "Osoba 2 (M)",
        "t": "Jestem spokojny i racjonalny. Zawsze staram się unikać konfliktów. Zanim podejmę jakąś decyzję, muszę przeanalizować wszystkie za i przeciw. Nie lubię zmieniać swoich przyzwyczajeń. Innych denerwuje moje wolne tempo pracy."
       },
       {
        "sp": "Osoba 3 (K)",
        "t": "Jestem energiczna i impulsywna. Nie znoszę nudy i nie potrafię usiedzieć w miejscu. Cierpliwość nie jest moją mocną stroną, łatwo się irytuję, ale zazwyczaj trwa to krótko. Jestem uparta i konsekwentnie realizuję swoje plany – tak jest w przypadku moich zainteresowań. Jeśli mam coś zrobić, robię to natychmiast."
       },
       {
        "sp": "Osoba 4 (M)",
        "t": "Jestem indywidualistą i zwykle wolę pracować sam, jednak ludzie są dla mnie ważni. Często biorę udział w różnych akcjach społecznych. Zawsze widać, kiedy jestem szczęśliwy lub smutny."
       }
      ]
     }
    },
    {
     "id": "l3",
     "number": "III",
     "type": "tf",
     "grading": "auto",
     "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Dziennikarz prowadzi wywiad na temat cyfrowej mody. Proszę zaznaczyć: TAK – gdy zdanie jest zgodne z nagraniem; NIE – gdy nie jest zgodne z nagraniem.",
     "pointsFormula": "7 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 7,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: https://www.vogue.pl/a/cyfrowa-moda-podpowiadamy-jak-ja-nosic",
     "audio": {
      "announce": [
       589.8,
       605.5
      ],
      "plays": [
       {
        "start": 615.8,
        "end": 716.9
       },
       {
        "start": 762.5,
        "end": 863.6
       }
      ],
      "pauseBetweenPlays": 45.6,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "Dziennikarz",
        "t": "Od dwóch lat na rynku istnieją wirtualne ubrania, których fizycznie nie ma, ale można je „założyć” na zdjęcie udostępnione w mediach społecznościowych. Limitowaną kolekcję cyfrowych kurtek, płaszczy, koszulek i spodni stworzyła firma tworząca popularne aplikacje i gry komputerowe. Czy takie ubrania są drogie?"
       },
       {
        "sp": "Kobieta",
        "t": "Na początku ceny zaczynały się od 11 dolarów za sztukę. Obecnie za niektóre cyfrowe sukienki trzeba zapłacić 9,5 tysiąca dolarów."
       },
       {
        "sp": "Dziennikarz",
        "t": "Czy ubrania cyfrowe są popularne wśród użytkowników internetu?"
       },
       {
        "sp": "Kobieta",
        "t": "Tak, jest duże zainteresowanie, o czym świadczy wzrost cen. Nikt nie przewidział takiego sukcesu."
       },
       {
        "sp": "Dziennikarz",
        "t": "A jak „zakładać” takie ubrania?"
       },
       {
        "sp": "Kobieta",
        "t": "To nie jest skomplikowane. Kiedy pracujemy zdalnie, na przykład z plaży, za pomocą jednego kliknięcia będziemy mogli ubrać się w wirtualną koszulę."
       },
       {
        "sp": "Dziennikarz",
        "t": "To chyba nie takie proste dla twórców takich aplikacji?"
       },
       {
        "sp": "Kobieta",
        "t": "Tak, technologia jest skomplikowana, bo koszula nie tylko musi się poruszać razem z naszym ciałem, lecz także bawełna musi się poruszać jak bawełna, a dżins jak dżins."
       },
       {
        "sp": "Dziennikarz",
        "t": "Jak długo będziemy musieli czekać na takie rozwiązanie?"
       },
       {
        "sp": "Kobieta",
        "t": "Wydaje się, że to kwestia dwóch czy trzech miesięcy, kiedy programiści zaproponują ostateczną wersję aplikacji."
       },
       {
        "sp": "Dziennikarz",
        "t": "Dziękuję pani za rozmowę."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "statement": "Cyfrowa moda pojawiła się w tym roku.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "statement": "Kolekcje ubrań stworzyła znana firma odzieżowa.",
       "answer": "NIE"
      },
      {
       "id": "l3.2",
       "number": 2,
       "statement": "Szczególnie drogie są wirtualne sukienki.",
       "answer": "TAK"
      },
      {
       "id": "l3.3",
       "number": 3,
       "statement": "Popularność aplikacji była zaskoczeniem.",
       "answer": "TAK"
      },
      {
       "id": "l3.4",
       "number": 4,
       "statement": "Zakładanie wirtualnych ubrań jest łatwe.",
       "answer": "TAK"
      },
      {
       "id": "l3.5",
       "number": 5,
       "statement": "Twórcy aplikacji muszą brać pod uwagę cechy różnych materiałów.",
       "answer": "TAK"
      },
      {
       "id": "l3.6",
       "number": 6,
       "statement": "Programiści ukończyli nową wersję aplikacji.",
       "answer": "NIE"
      },
      {
       "id": "l3.7",
       "number": 7,
       "statement": "Nowa wersja będzie dostępna w tym miesiącu.",
       "answer": "NIE"
      }
     ]
    },
    {
     "id": "l4",
     "number": "IV",
     "type": "match",
     "grading": "auto",
     "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać wypowiedzi na temat kwiatów oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://przeglad-ogrodniczy.pl/poza-ogrodem/87-poza-ogrodem/319-jakie-kwiaty-na-jaka-okazje",
     "heading": "Kwiaty doskonale oddają nasze uczucia, a czasami znaczą więcej niż niejedno słowo.",
     "audio": {
      "announce": [
       874.3,
       890.2
      ],
      "plays": [
       {
        "start": 900.4,
        "end": 975.4
       },
       {
        "start": 1021.1,
        "end": 1096.1
       }
      ],
      "pauseBetweenPlays": 45.7,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "K",
        "t": "Czerwone róże zawsze oznaczają gorącą miłość, są idealnym wyborem, gdy zamierzamy podarować je ukochanej kobiecie."
       },
       {
        "sp": "M",
        "t": "Biała róża jest z kolei symbolem delikatności, możemy zatem dać ją dziecku, ale świetnie sprawdzi się także, kiedy chcemy kogoś przeprosić."
       },
       {
        "sp": "K",
        "t": "Czerwone tulipany mają podobną symbolikę jak róże, ale nie są tak zobowiązujące. Są doskonałym prezentem dla pań w dniu ich święta."
       },
       {
        "sp": "M",
        "t": "Eleganckie gerbery wyrażają szacunek i uznanie. Są odpowiednie, jeśli dajemy je szefowi lub partnerowi biznesowemu."
       },
       {
        "sp": "K",
        "t": "Narcyzy i żonkile symbolizują miłość bez wzajemności. Lepiej nie dawać ich osobom, które słabo znamy. Bukiet z tych kwiatów kupujemy dla siebie lub dla osoby, która za nimi przepada."
       },
       {
        "sp": "M",
        "t": "Polne kwiaty nie nadają się może na oficjalne uroczystości, ale doskonale sprawdzą się jako prezent dla mamy lub babci. Nie muszą być dawane z żadnej konkretnej okazji."
       }
      ]
     },
     "options": [
      {
       "id": "A",
       "text": "dla kogoś, komu sprawiliśmy przykrość."
      },
      {
       "id": "B",
       "text": "dla osoby, która lubi te kwiaty."
      },
      {
       "id": "C",
       "text": "można dostać od dziecka."
      },
      {
       "id": "D",
       "text": "dla osoby podziwianej i cenionej."
      },
      {
       "id": "E",
       "text": "dla osoby, którą bardzo kochamy."
      },
      {
       "id": "F",
       "text": "z okazji Dnia Kobiet."
      }
     ],
     "example": {
      "id": "l4.ex",
      "prompt": "Czerwone róże",
      "answer": "E",
      "shown": true
     },
     "items": [
      {
       "id": "l4.1",
       "number": 1,
       "prompt": "Białe róże",
       "answer": "A"
      },
      {
       "id": "l4.2",
       "number": 2,
       "prompt": "Tulipany",
       "answer": "F"
      },
      {
       "id": "l4.3",
       "number": 3,
       "prompt": "Gerbery",
       "answer": "D"
      },
      {
       "id": "l4.4",
       "number": 4,
       "prompt": "Narcyzy i żonkile",
       "answer": "B"
      },
      {
       "id": "l4.5",
       "number": 5,
       "prompt": "Polne kwiaty",
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
     "prompt": "Proszę wysłuchać wypowiedzi na temat przygotowywania się do zagranicznej podróży i dopasować numer tekstu do ilustracji.",
     "pointsFormula": "10 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 7,
     "source": "Na podstawie: https://dworzeconline.pl/info/strefa-pasazera/przydatne-w-podrozy/co-zabrac-w-podroz",
     "audio": {
      "announce": [
       1107.1,
       1123.2
      ],
      "plays": [
       {
        "start": 1133.4,
        "end": 1298.1
       },
       {
        "start": 1343.9,
        "end": 1508.7
       }
      ],
      "pauseBetweenPlays": 45.8,
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
      "image": "data/img/2021-11/l5-A.jpg",
      "answer": "PRZYKŁAD",
      "shown": true
     },
     "items": [
      {
       "id": "l5.1",
       "number": 1,
       "label": "B",
       "image": "data/img/2021-11/l5-B.jpg",
       "answer": "4"
      },
      {
       "id": "l5.2",
       "number": 2,
       "label": "C",
       "image": "data/img/2021-11/l5-C.jpg",
       "answer": "8"
      },
      {
       "id": "l5.3",
       "number": 3,
       "label": "D",
       "image": "data/img/2021-11/l5-D.jpg",
       "answer": "6"
      },
      {
       "id": "l5.4",
       "number": 4,
       "label": "E",
       "image": "data/img/2021-11/l5-E.jpg",
       "answer": "1"
      },
      {
       "id": "l5.5",
       "number": 5,
       "label": "F",
       "image": "data/img/2021-11/l5-F.jpg",
       "answer": "10"
      },
      {
       "id": "l5.6",
       "number": 6,
       "label": "G",
       "image": "data/img/2021-11/l5-G.jpg",
       "answer": "2"
      },
      {
       "id": "l5.7",
       "number": 7,
       "label": "H",
       "image": "data/img/2021-11/l5-H.jpg",
       "answer": "5"
      },
      {
       "id": "l5.8",
       "number": 8,
       "label": "I",
       "image": "data/img/2021-11/l5-I.jpg",
       "answer": "9"
      },
      {
       "id": "l5.9",
       "number": 9,
       "label": "J",
       "image": "data/img/2021-11/l5-J.jpg",
       "answer": "7"
      },
      {
       "id": "l5.10",
       "number": 10,
       "label": "K",
       "image": "data/img/2021-11/l5-K.jpg",
       "answer": "3"
      }
     ],
     "transcript": {
      "lines": [
       {
        "sp": "Przykład (K)",
        "t": "Zanotujmy na kartce niezbędne rzeczy, które chcemy wziąć ze sobą. Ważne jest miejsce do którego się udajemy, a także pora roku."
       },
       {
        "sp": "Tekst 1 (M)",
        "t": "Mydło, szampon, krem do opalania najlepiej wziąć w niewielkich opakowaniach."
       },
       {
        "sp": "Tekst 2 (K)",
        "t": "Dobrze przygotowana apteczka to ważny element wyposażenia każdej walizki. Pamiętajmy o lekach, które stale przyjmujemy."
       },
       {
        "sp": "Tekst 3 (M)",
        "t": "Wszystko zależy od tego, dokąd i na jak długo się wybieramy. Najlepiej wziąć rzeczy, które są wygodne, praktyczne, lekkie i nie wymagają prasowania."
       },
       {
        "sp": "Tekst 4 (K)",
        "t": "Jest to jedna z podstawowych rzeczy, o których trzeba pamiętać. Czasem nie wystarczy tylko dowód osobisty, potrzebny jest też inny dokument tożsamości."
       },
       {
        "sp": "Tekst 5 (M)",
        "t": "Jeśli wybieramy się w miejsce, w którym pieniądze łatwo możemy wypłacić z bankomatu, nie musimy brać dużej ilości gotówki, wystarczą karty płatnicze."
       },
       {
        "sp": "Tekst 6 (K)",
        "t": "Kiedy jedziemy w nieznane wcześniej miejsce, warto zabrać ze sobą mapy lub przewodniki turystyczne."
       },
       {
        "sp": "Tekst 7 (M)",
        "t": "Żeby mieć kontakt ze światem, niezbędne są urządzenia elektroniczne, najlepiej z dostępem do internetu."
       },
       {
        "sp": "Tekst 8 (K)",
        "t": "Podczas podróży, długich tras lub złej pogody niezastąpiona będzie ulubiona lektura, krzyżówki czy gry planszowe."
       },
       {
        "sp": "Tekst 9 (M)",
        "t": "Oprócz głównej torby bądź walizki zabierzmy nieduży plecak lub mniejszą torbę, w których można nosić najpotrzebniejsze rzeczy."
       },
       {
        "sp": "Tekst 10 (K)",
        "t": "Przed wyjazdem najważniejszy jest optymizm, radość i dobry nastrój. Róbmy więc wszystko, aby wyjazd był odpoczynkiem, a nie dodatkowym problemem."
       }
      ]
     },
     "pdfNotes": [
      "Photos extracted with tools/extract_images.sh 2021-11 7 l5 A..K; A..K order verified against a page render (A notebook, B passport, C board games, D map, E cosmetics, F children in sunglasses, G medicines, H ATM, I hiker, J phone, K suitcase).",
      "Transcript opens with the title „Jak się przygotować do zagranicznej podróży?”."
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
     "pointsFormula": "4 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 4,
     "pdfPage": 9,
     "pdfPages": [
      9,
      10
     ],
     "example": {
      "id": "r1.ex",
      "passage": {
       "text": "Drugie śniadanie jest najczęściej pomijanym posiłkiem. Regularnie rezygnujemy z zabierania do pracy kanapek czy przekąsek. Po 3–4 godzinach od pierwszego śniadania poziom cukru we krwi spada, a my tracimy koncentrację i właśnie wtedy powinniśmy dostarczyć organizmowi energii.",
       "source": "Na podstawie: https://www.medexpress.pl/polacy-nie-jedza-drugiego-sniadania/63223"
      },
      "prompt": "Z tego tekstu wynika, że",
      "options": [
       {
        "id": "a",
        "text": "często zapominamy o wzięciu drugiego śniadania do pracy."
       },
       {
        "id": "b",
        "text": "zjedzenie drugiego śniadania obniża poziom cukru we krwi."
       },
       {
        "id": "c",
        "text": "dzięki drugiemu śniadaniu możemy lepiej skupić się na pracy."
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
        "text": "Mimo że radio i telewizja coraz częściej informują o zbliżającym się spadku cen na polskim rynku mieszkaniowym, to w rzeczywistości za mieszkania wcale nie płaci się mniej. Najbardziej odczuwalne jest to w średnich i dużych miastach. W tym roku ceny są najwyższe od 10 lat.",
        "source": "Na podstawie autorskiego tekstu"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "w mediach często mówi się o coraz wyższych cenach mieszkań."
        },
        {
         "id": "b",
         "text": "ceny mieszkań rosną tylko w średnich i dużych miastach."
        },
        {
         "id": "c",
         "text": "przez ostatnie 10 lat ceny mieszkań były niższe niż obecnie."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "Uczniowie szkoły podstawowej w Podkowie Leśnej budują domy dla bezdomnych zwierząt. Projekt edukacyjny odbywa się w czasie zajęć z biologii i koordynuje go nauczyciel biologii, który jest autorem tego pomysłu. Materiały do budowy pochodzą z recyklingu, a dostarczają je pracownicy urzędu miasta.",
        "source": "Na podstawie autorskiego tekstu"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "uczniowie po lekcjach zajmują się bezdomnymi zwierzętami."
        },
        {
         "id": "b",
         "text": "za realizację projektu jest odpowiedzialny jeden z nauczycieli."
        },
        {
         "id": "c",
         "text": "uczniowie budują domy z tego, co sami zebrali w mieście."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Twórcą popularnej marki kosmetyków Max Factor był Polak – Maksymilian Faktorowicz. Zaczynał jako pomocnik w drogerii, gdzie eksperymentował z mieszaniem kremów i perfum. W 1914 roku wymyślił specjalny kosmetyk do makijażu dla aktorów, który można było łatwo nakładać i usuwać.",
        "source": "Na podstawie: https://www.money.pl/galerie/artykul/najslynniejsi-polacy-w-usa,138,8,2210698.html"
       },
       "prompt": "Z tego tekstu wynika, że Maksymilian Faktorowicz",
       "options": [
        {
         "id": "a",
         "text": "opracował prosty w użyciu produkt kosmetyczny."
        },
        {
         "id": "b",
         "text": "założył drogerię, w której testował kosmetyki."
        },
        {
         "id": "c",
         "text": "doradzał aktorom, jak zrobić makijaż."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Pierwszą, zachowaną do dzisiaj, polską książkę kucharską wydano w 1698 roku. Każdy jej rozdział zawiera sto przepisów przede wszystkim na potrawy mięsne, ale także rybne i warzywne. To nie tylko opowieść o gotowaniu, lecz także o całej kulturze jedzenia w tamtych czasach.",
        "source": "Na podstawie: https://kulinarny.krakow.pl/dziedzictwo_kulinarne/224867,2065_pierwsza_polska_ksiazka_kucharska.html"
       },
       "prompt": "Z tego tekstu wynika, że pierwsza polska książka kucharska",
       "options": [
        {
         "id": "a",
         "text": "składa się z ponad stu stron."
        },
        {
         "id": "b",
         "text": "nie zawiera przepisów na dania wegetariańskie."
        },
        {
         "id": "c",
         "text": "zawiera informacje o tradycjach kulinarnych."
        }
       ],
       "answer": "c"
      }
     ],
     "pdfNotes": [
      "Source line of item 3 is printed with a stray trailing ' /' and item 4's URL contains a line-break space ('2065_ pierwsza'); stored cleaned."
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
     "title": "Po używane rzeczy do supermarketu?",
     "source": "Na podstawie: https://businessinsider.com.pl/firmy/strategie/decathlon-sprzedaje-sprzet-po-testach-i-zwrotach-auchan-uzywane-ubrania",
     "passage": "Jeszcze kilka lat temu rzeczy używane można było kupić tylko w osiedlowych sklepikach lub na targu. Jednak od niedawna sprzedażą nienowych towarów zainteresowały się sieci supermarketów. Klienci jednego z większych warszawskich hipermarketów sportowych od zeszłego miesiąca mogą wziąć udział w programie „Drugie życie”. Dzięki tej akcji można tanio kupić produkty używane oraz towary z ekspozycji, które miały niewielkie wady. Takie rzeczy po naprawieniu i testach bezpieczeństwa znowu znajdują się na sklepowych półkach.\n\nZ kolei inna sieć supermarketów zaczęła sprzedawać używane ubrania. Klienci mogą kupić odzież znanych marek w cenach od 10 do 35 zł. Selekcją i przygotowaniem towaru zajmuje się firma zewnętrzna. Każdy może oddać jej ubrania, których już nie potrzebuje, za co otrzyma rabat na zakupy w supermarkecie. Jeśli akcja spodoba się kupującym i wyniki sprzedaży będą wysokie, sklep planuje kontynuować ten projekt.\n\nSpecjaliści twierdzą, że rynek odzieży używanej będzie się rozwijał. Nagły wzrost zainteresowania ubraniami z drugiej ręki był związany między innymi z zamknięciem centrów handlowych i fabryk oraz niepewnością finansową klientów w czasie pandemii koronawirusa.",
     "example": {
      "id": "r2.ex",
      "statement": "Używane ubrania można kupować w supermarketach od kilku lat.",
      "answer": "NIE",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "Projekt „Drugie życie” prowadzony jest w Warszawie.",
       "answer": "TAK"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Dzięki akcji można kupić zepsuty sprzęt sportowy w niskiej cenie.",
       "answer": "NIE"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "W supermarkecie za markowe używane ubrania zapłacimy poniżej 40 zł.",
       "answer": "TAK"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Pracownicy supermarketu przygotowują używane ubrania do sprzedaży.",
       "answer": "NIE"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Osoba, która odda stare rzeczy, dostanie zniżkę na zakupy.",
       "answer": "TAK"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Dalsza sprzedaż ubrań z drugiej ręki będzie zależała od zainteresowania klientów.",
       "answer": "TAK"
      },
      {
       "id": "r2.7",
       "number": 7,
       "statement": "Z powodu pandemii mniej ludzi kupowało używane ubrania.",
       "answer": "NIE"
      }
     ]
    },
    {
     "id": "r3",
     "number": "III",
     "type": "gapMatch",
     "grading": "auto",
     "instruction": "III. Proszę przeczytać tekst i – zgodnie z przykładem – dopasować usunięte z niego fragmenty (A–I).",
     "pointsFormula": "8 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 8,
     "pdfPage": 12,
     "source": "Na podstawie: https://serwisy.gazetaprawna.pl/nieruchomosci/artykuly/654819,lofty-oryginalne-i-nowoczesne-mieszkania-z-historia.html",
     "passage": "Słowo „loft” pochodzi z języka staroangielskiego i oznacza powietrze lub przestrzeń. Obecnie tym terminem nazywamy luksusowe mieszkania, {{ex}}.\n\nLoftowe apartamenty są wysokie przynajmniej na 4 metry i dzięki temu {{1}}. Co ciekawe, często zdarza się, że takie mieszkanie o powierzchni 120 m² {{2}}. W loftach ważne są duże okna, minimalistycznie urządzone wnętrze oraz widoczne metalowe elementy konstrukcyjne czy instalacje elektryczne.\n\nChociaż pierwsze takie apartamenty powstały już w 1900 r., początkowo wśród klientów {{3}}. Kto w tamtych czasach szukał mieszkania w loftach? Okazuje się, że nie ludzie bogaci, {{4}}. Moda na nie pojawiła się dopiero w latach sześćdziesiątych XX wieku, a stało się to {{5}}. To właśnie im najbardziej podobały się duże przestrzenie {{6}}, ponieważ nie mieli oni regularnego wynagrodzenia.\n\nW Europie lofty funkcjonują od kilkudziesięciu lat, {{7}}. Za jedno z najstarszych polskich tego typu mieszkań uznaje się apartament w Bytomiu. Pewien architekt kupił starą lampiarnię, czyli miejsce, w którym kiedyś górnicy trzymali swoje lampy, {{8}}. Przygotował nowy projekt tego miejsca, zrealizował go, a następnie w 2003 roku zamieszkał w lofcie razem z rodziną.",
     "options": [
      {
       "id": "A",
       "text": "lecz najczęściej chcieli tu mieszkać biedni artyści"
      },
      {
       "id": "B",
       "text": "które powstały tam, gdzie dawniej były fabryki"
      },
      {
       "id": "C",
       "text": "mają dużo otwartej przestrzeni"
      },
      {
       "id": "D",
       "text": "nie cieszyły się dużym zainteresowaniem"
      },
      {
       "id": "E",
       "text": "lecz w Polsce mają one krótką historię"
      },
      {
       "id": "F",
       "text": "które zabierali do pracy pod ziemią"
      },
      {
       "id": "G",
       "text": "dzięki biedniejszym amerykańskim malarzom"
      },
      {
       "id": "H",
       "text": "oraz niskie ceny czynszu"
      },
      {
       "id": "I",
       "text": "składa się tylko z dwóch pokoi"
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
       "answer": "C"
      },
      {
       "id": "r3.2",
       "number": 2,
       "gap": "2",
       "answer": "I"
      },
      {
       "id": "r3.3",
       "number": 3,
       "gap": "3",
       "answer": "D"
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
       "answer": "G"
      },
      {
       "id": "r3.6",
       "number": 6,
       "gap": "6",
       "answer": "H"
      },
      {
       "id": "r3.7",
       "number": 7,
       "gap": "7",
       "answer": "E"
      },
      {
       "id": "r3.8",
       "number": 8,
       "gap": "8",
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
     "source": "Na podstawie: https://zooart.com.pl/blog/czy-warto-miec-psa-oto-10-zalet-jego-posiadania",
     "heading": "Czy warto mieć psa? Oto jakie zalety ma posiadanie tego zwierzęcia",
     "options": [
      {
       "id": "A",
       "text": "Kiedy w domu jest pies, marnuje się mniej jedzenia – pupil chętnie pomoże zjeść niektóre produkty z lodówki."
      },
      {
       "id": "B",
       "text": "Psy potrafią wyczuć zbliżające się ataki migreny. Kładą się wtedy na właścicielu lub szczekają."
      },
      {
       "id": "C",
       "text": "Regularne spacery i posiłki dla psa uczą jego właściciela, jak właściwie planować czas."
      },
      {
       "id": "D",
       "text": "Psy to świetni ochroniarze. Szczekają, gdy w okolicy zobaczą obcą, podejrzaną osobę."
      },
      {
       "id": "E",
       "text": "Opieka nad psem pozwala czuć się potrzebnym, dzięki czemu pomaga w walce z samotnością, a nawet depresją."
      },
      {
       "id": "F",
       "text": "Posiadacze psów mają większe szanse na przeżycie po ataku serca. Szczekanie psa to często informacja, że coś złego dzieje się z jego opiekunem i ratunek może przyjść szybciej."
      },
      {
       "id": "G",
       "text": "Nie tylko trener personalny i ćwiczenia na siłowni pomagają schudnąć. Zamiast stać i rzucać psu kijek – można biegać razem z nim."
      },
      {
       "id": "H",
       "text": "Warto spacerować z psem, bo wiele par poznało się podczas wyprowadzania swoich pupili."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "System informacji o bólu",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Zawsze w formie",
       "answer": "G"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Na pomoc właścicielowi",
       "answer": "F"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Sposób na partnera",
       "answer": "H"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Lekarstwo na smutek",
       "answer": "E"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Bezpieczny dom",
       "answer": "D"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Nauczyciel systematyczności",
       "answer": "C"
      },
      {
       "id": "r4.7",
       "number": 7,
       "prompt": "Ekologiczny przyjaciel",
       "answer": "A"
      }
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
     "source": "Na podstawie: https://podroze.se.pl/polska/malopolskie/zakopane/publikujesz-zdjecia-z-tatr-mozesz-dostac-mandat-nawet-500-zl-lepiej-zapoznaj-sie-z-zasadami/7357/",
     "passage": "Tatry przyciągają turystów we wszystkich {{ex}} roku, a w ostatnim czasie stały się jeszcze bardziej popularne. Wiele osób zamiast wyjechać za granicę postanowiło {{1}} urlop właśnie w polskich górach. Jednak nie wszyscy i nie zawsze stosują {{2}}, jakie obowiązują na terenach chronionych. Władze Tatrzańskiego Parku Narodowego od lat {{3}} z turystami, którzy niewłaściwie poruszają się po górach. Coraz częściej chodzą oni poza wyznaczonymi {{4}} i w ten sposób łamią prawo. Pracownicy parku narodowego we współpracy z policją znaleźli {{5}} sposób na ich ukaranie. Policjanci {{6}} „dowodów przestępstwa” w internecie. Na fotografiach publikowanych przez turystów w mediach społecznościowych czasem widać, że zostały one zrobione w niedozwolonych {{7}}. Na podstawie takich zdjęć funkcjonariusze policji mogą wypisać mandat nawet w wysokości 500 zł. Jako pierwsi mandat zapłacili narciarze, którzy zorganizowali sobie {{8}} po terenie chronionym.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "options": [
        "porach",
        "okresach",
        "częściach"
       ],
       "answer": "porach"
      },
      {
       "id": "1",
       "options": [
        "stracić",
        "spędzić",
        "zrobić"
       ],
       "answer": "spędzić"
      },
      {
       "id": "2",
       "options": [
        "plany",
        "pomysły",
        "reguły"
       ],
       "answer": "reguły"
      },
      {
       "id": "3",
       "options": [
        "proszą",
        "walczą",
        "myślą"
       ],
       "answer": "walczą"
      },
      {
       "id": "4",
       "options": [
        "trasami",
        "chodnikami",
        "spacerami"
       ],
       "answer": "trasami"
      },
      {
       "id": "5",
       "options": [
        "wyjątkowy",
        "wrażliwy",
        "osobny"
       ],
       "answer": "wyjątkowy"
      },
      {
       "id": "6",
       "options": [
        "szukają",
        "pilnują",
        "potrzebują"
       ],
       "answer": "szukają"
      },
      {
       "id": "7",
       "options": [
        "miastach",
        "miejscach",
        "terytoriach"
       ],
       "answer": "miejscach"
      },
      {
       "id": "8",
       "options": [
        "wycieczkę",
        "rejs",
        "urlop"
       ],
       "answer": "wycieczkę"
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
     "source": "Na podstawie: https://natemat.pl/351089,jesttyledoodkrycia-milosz-krawczyk-opowiada-zachwytach-2020",
     "passage": "Miłosz Krawczyk przez {{ex1}} rok szukał {{ex2}}, żeby zorganizować podróż. W {{ex3}} podróż chciał zaprosić osoby z niepełnosprawnością. Miłosz Krawczyk jest {{1}} wynalazcą, inwalidą i jednocześnie podróżnikiem. Wymyślił specjalny {{2}}. Dzięki niemu {{3}} {{4}} mogą łatwiej podróżować. Mężczyzna wspólnie z kolegami stworzył też interaktywną mapę {{5}}. Pokazał na {{6}} ciekawe miejsca, szlaki turystyczne, które może odwiedzić osoba na wózku {{7}}. Często {{8}} obiekty są bardzo blisko nas, trzeba tylko {{9}} odkryć i zawieźć tam {{10}}, która sama nie może tego zrobić – mówił.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "ostatniego",
        "ostatnim",
        "ostatni"
       ],
       "answer": "ostatni"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "sposoby",
        "sposobów",
        "sposób"
       ],
       "answer": "sposobów"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "ten",
        "tę",
        "tą"
       ],
       "answer": "tę"
      },
      {
       "id": "1",
       "options": [
        "młodą",
        "młodym",
        "młodego"
       ],
       "answer": "młodym"
      },
      {
       "id": "2",
       "options": [
        "wózka",
        "wózkiem",
        "wózek"
       ],
       "answer": "wózek"
      },
      {
       "id": "3",
       "options": [
        "ludzie",
        "ludzi",
        "ludziom"
       ],
       "answer": "ludzie"
      },
      {
       "id": "4",
       "options": [
        "niepełnosprawnych",
        "niepełnosprawne",
        "niepełnosprawni"
       ],
       "answer": "niepełnosprawni"
      },
      {
       "id": "5",
       "options": [
        "Polsce",
        "Polską",
        "Polski"
       ],
       "answer": "Polski"
      },
      {
       "id": "6",
       "options": [
        "nim",
        "nią",
        "niej"
       ],
       "answer": "niej"
      },
      {
       "id": "7",
       "options": [
        "inwalidzkich",
        "inwalidzkie",
        "inwalidzkim"
       ],
       "answer": "inwalidzkim"
      },
      {
       "id": "8",
       "options": [
        "te",
        "ci",
        "tych"
       ],
       "answer": "te"
      },
      {
       "id": "9",
       "options": [
        "ich",
        "im",
        "je"
       ],
       "answer": "je"
      },
      {
       "id": "10",
       "options": [
        "osobie",
        "osobą",
        "osobę"
       ],
       "answer": "osobę"
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
     "source": "Na podstawie: https://weekend.gazeta.pl/weekend/7,177339,27029406,recepta-na-spokoj-malgosia-uwielbia-alokazje-zwane-w-roslinnych.html",
     "wordBox": [
      "że",
      "więc",
      "chociaż",
      "czy",
      "żeby",
      "ponieważ",
      "i"
     ],
     "distractors": [
      "czy"
     ],
     "passage": "Dla Michała, ojca dwóch chłopców, sposobem na relaks podczas pandemii okazało się robienie pizzy. „Restauracje były zamknięte, {{ex}} musiałem nauczyć się robić ją samodzielnie. Muszę przyznać, {{1}} wszystkim w domu moja pizza bardzo smakowała, {{2}} piekłem ją w zwykłym piekarniku, bo nie mamy specjalnego pieca do pizzy” – opowiada mężczyzna. Dla Michała {{3}} jego rodziny czas pandemii był też trudny z innego powodu: „Baliśmy się ewentualnej infekcji, {{4}} mój młodszy, chory na serce syn czekał na termin operacji. Musiał być zupełnie zdrowy, {{5}} lekarze mogli go operować”.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "więc"
      },
      {
       "id": "1",
       "answer": "że"
      },
      {
       "id": "2",
       "answer": "chociaż"
      },
      {
       "id": "3",
       "answer": "i"
      },
      {
       "id": "4",
       "answer": "ponieważ"
      },
      {
       "id": "5",
       "answer": "żeby"
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
     "source": "Na podstawie: https://weekend.gazeta.pl/weekend/7,177334,27027463,obiecywalam-sobie-ze-nigdy-wiecej-nie-spotkam-sie-z-zadnym.html",
     "passage": "W Czechach ludzie są dużo {{ex1}} – opowiada David, Czech z pochodzenia. Marta, która {{ex2}} mieszkała w stolicy Polski, się z nim zgadza: – Tempo życia w Warszawie jest {{1}} niż w Pradze. Ponadto Czesi zwracają znacznie {{2}} uwagę na wygląd. Kobiety nie malują się {{3}} nawet na piątkowe wyjścia. David do trzynastego roku życia mieszkał w Anglii, gdzie potem też studiował. Gdy wrócił do Pragi, znajomi {{4}} na niego patrzyli. Dlaczego? W Londynie miał opinię {{5}} ubranego studenta na całym uniwersytecie, a to nie pasowało do czeskiej normalności i luzu.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "bardziej zrelaksowani",
        "zrelaksowani",
        "najbardziej zrelaksowani"
       ],
       "answer": "bardziej zrelaksowani"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "wcześnie",
        "wcześniej",
        "najwcześniej"
       ],
       "answer": "wcześniej"
      },
      {
       "id": "1",
       "options": [
        "najszybsze",
        "szybkie",
        "szybsze"
       ],
       "answer": "szybsze"
      },
      {
       "id": "2",
       "options": [
        "mniej",
        "mniejszą",
        "małą"
       ],
       "answer": "mniejszą"
      },
      {
       "id": "3",
       "options": [
        "mocno",
        "mocne",
        "najmocniej"
       ],
       "answer": "mocno"
      },
      {
       "id": "4",
       "options": [
        "dziwne",
        "dziwnie",
        "najdziwniejsze"
       ],
       "answer": "dziwnie"
      },
      {
       "id": "5",
       "options": [
        "lepiej",
        "dobrze",
        "najlepiej"
       ],
       "answer": "najlepiej"
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
     "source": "Na podstawie: „Śniadanie z misiem”, Twój Styl, grudzień, 2020.",
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "Kiedyś Ewa Zgrabczyńska {{ex1}} tygrysy z Białorusi. Dziś {{ex2}}, że zwierzęta powinny być dla nas ważne przez cały czas. Kim ona jest? Kilka lat temu {{1}} o niej prawie wszystkie osoby w Polsce, kiedy Zgrabczyńska {{2}} tygrysom z ciężarówki zatrzymanej na granicy. Zwierzęta {{3}} wtedy powoli, bo nikt nie {{4}}, że nie można transportować ich w ten sposób. Pani Ewa takich akcji ma więcej w swojej karierze. Obecnie w rodzinnym mieście sławna zoolog {{5}} pierwsze schronisko dla dzikich zwierząt. Oprócz tego teraz Ewa i jej mąż {{6}} małym niedźwiedziem, który jakiś czas temu {{7}} w lesie. - Dziś my nie {{8}} sobie innego życia – mówi Ewa – i właśnie dlatego w zeszłym roku {{9}} do domu pod Poznaniem, gdzie zwierzęta mają duży ogród i przestrzeń. Najprzyjemniejszym momentem dnia jest wieczór! Kiedy oglądam telewizję wszystkie moje psy i koty {{10}} do mnie i wspólnie się przytulamy.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "ratować",
       "answer": "ratowała"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "mówić",
       "answer": "mówi"
      },
      {
       "id": "1",
       "given": "usłyszeć",
       "answer": "usłyszały",
       "accept": []
      },
      {
       "id": "2",
       "given": "pomagać",
       "answer": "pomagała",
       "accept": []
      },
      {
       "id": "3",
       "given": "umierać",
       "answer": "umierały",
       "accept": []
      },
      {
       "id": "4",
       "given": "pomyśleć",
       "answer": "pomyślał",
       "accept": []
      },
      {
       "id": "5",
       "given": "przygotowywać",
       "answer": "przygotowuje",
       "accept": []
      },
      {
       "id": "6",
       "given": "opiekować się",
       "answer": "opiekują się",
       "accept": []
      },
      {
       "id": "7",
       "given": "zgubić się",
       "answer": "zgubił się",
       "accept": []
      },
      {
       "id": "8",
       "given": "wyobrażać",
       "answer": "wyobrażamy",
       "accept": []
      },
      {
       "id": "9",
       "given": "my – przeprowadzić się",
       "answer": "przeprowadziliśmy się",
       "accept": []
      },
      {
       "id": "10",
       "given": "przychodzić",
       "answer": "przychodzą",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Printed example answers (ratowała, mówi) are shown bold-underlined inside the text; the pronoun 'my' in item 9's cue '(my – przeprowadzić się)' is not part of the answer."
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
      "sentence": "Iwona pije kawę z mlekiem.",
      "underlined": "z mlekiem",
      "stem": "…………… Iwona pije kawę?",
      "shortAnswer": "Z mlekiem.",
      "answer": "Z czym",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Kasia boi się myszy.",
       "underlined": "myszy",
       "stem": "…………… boi się Kasia?",
       "shortAnswer": "Myszy.",
       "answer": "Czego",
       "accept": []
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Marek myślał o swoich problemach przez cały dzień.",
       "underlined": "o swoich problemach",
       "stem": "…………… myślał Marek przez cały dzień?",
       "shortAnswer": "O swoich problemach.",
       "answer": "O czym",
       "accept": [
        "O czyich problemach"
       ]
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Czekali na koleżankę półtorej godziny.",
       "underlined": "półtorej godziny",
       "stem": "…………… czekali na koleżankę?",
       "shortAnswer": "Półtorej godziny.",
       "answer": "Jak długo",
       "accept": [
        "Ile czasu"
       ]
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Ten pan nie zapłacił za benzynę.",
       "underlined": "za benzynę",
       "stem": "…………… nie zapłacił ten pan?",
       "shortAnswer": "Za benzynę.",
       "answer": "Za co",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Magda zajmuje się chorymi dziećmi.",
       "underlined": "chorymi dziećmi",
       "stem": "…………… zajmuje się Magda?",
       "shortAnswer": "Chorymi dziećmi.",
       "answer": "Kim",
       "accept": [
        "Jakimi dziećmi"
       ]
      }
     ],
     "pdfNotes": [
      "The printed example shows the full question „Z czym Iwona pije kawę?”; stored with the question word replaced by the gap like the items.",
      "Official key prints the question word with decoration (Czego…?, Za co ….?); stored without it, match.stripChars ignores the decoration. Alternatives from the key: „O czym…? / O czyich problemach…?”, „Jak długo…?/Ile czasu…?”, „Kim…? / Jakimi dziećmi…?”."
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
      "source": "Stefan jest nauczycielem.",
      "hint": "pracuje",
      "answer": "Stefan pracuje jako nauczyciel.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "Beata jest dyrektorem firmy cukierniczej.",
       "hint": "kieruje",
       "answer": "Beata kieruje firmą cukierniczą.",
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
       "source": "Mojej córce nie smakuje bigos.",
       "hint": "nie lubi",
       "answer": "Moja córka nie lubi bigosu.",
       "rubric": "2 transformacje (2 x 0,25) + transformacja 0,5",
       "rubricParts": [
        {
         "what": "2 transformacje",
         "points": 0.5
        },
        {
         "what": "transformacja",
         "points": 0.5
        }
       ]
      },
      {
       "id": "g6.3",
       "number": 3,
       "source": "Chłopcy poszli do baru na zupę.",
       "hint": "zjedli",
       "answer": "Chłopcy zjedli w barze zupę.",
       "rubric": "odpowiedni przyimek 0,25 + transformacja 0,25 + usunięcie przyimka 0,25 + brak transformacji 0,25",
       "rubricParts": [
        {
         "what": "odpowiedni przyimek",
         "points": 0.25
        },
        {
         "what": "transformacja",
         "points": 0.25
        },
        {
         "what": "usunięcie przyimka",
         "points": 0.25
        },
        {
         "what": "brak transformacji",
         "points": 0.25
        }
       ]
      },
      {
       "id": "g6.4",
       "number": 4,
       "source": "Janek przyglądał się ładnej blondynce.",
       "hint": "patrzył",
       "answer": "Janek patrzył na ładną blondynkę.",
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
       "id": "g6.5",
       "number": 5,
       "source": "Państwo Kowalscy planują generalny remont łazienki.",
       "hint": "myślą",
       "answer": "Państwo Kowalscy myślą o generalnym remoncie łazienki.",
       "rubric": "dodanie przyimka 0,25 + 2 transformacje (2 x 0,25) + brak transformacji 0,25",
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
     "passage": "Wszyscy znajomi i przyjaciele radzili: - Olu, {{ex1}} na psychologię! To samo podpowiadała jej intuicja. {{ex2}} jako psycholog i {{1}} to, co kocha. Gdyby {{2}} na swoje wymarzone studia, z pewnością jej życie {{3}} inaczej.\n\nRodzice i babcia Oli prosili: „{{4}} o medycynie, bo po studiach będziesz miała pewną pracę”. Nauczyciele w liceum mówili uczniom: „{{5}} poszukiwane zawody”. Wygrał rozsądek i dziewczyna rozpoczęła studia medyczne. Gdyby tak nie {{6}}, nie {{7}} swojego obecnego męża – Kamila, który również studiował medycynę. Kamil często żartuje: „Kochanie, {{8}} mi, że zawsze będziesz słuchać starszych i mądrzejszych. Spójrz, gdybyś kilka lat temu {{9}} na psychologię, dziś nie {{10}} małżeństwem”.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "idź",
        "szłabyś",
        "niech pójdzie"
       ],
       "answer": "idź"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "Pracowałaby",
        "Niech pracuje",
        "Pracuj"
       ],
       "answer": "Pracowałaby"
      },
      {
       "id": "1",
       "options": [
        "zrób",
        "robiłaby",
        "zrobiłaby"
       ],
       "answer": "robiłaby"
      },
      {
       "id": "2",
       "options": [
        "dostawała się",
        "dostałaby się",
        "dostała się"
       ],
       "answer": "dostała się"
      },
      {
       "id": "3",
       "options": [
        "wyglądałoby",
        "wyglądałybyście",
        "wyglądałaby"
       ],
       "answer": "wyglądałoby"
      },
      {
       "id": "4",
       "options": [
        "Niech pomyślą",
        "Pomyśl",
        "Myślałaby"
       ],
       "answer": "Pomyśl"
      },
      {
       "id": "5",
       "options": [
        "Wybieraliby",
        "Wybierajcie",
        "Niech wybiorą"
       ],
       "answer": "Wybierajcie"
      },
      {
       "id": "6",
       "options": [
        "postanowiła",
        "postanowiłabym",
        "postanowiłaby"
       ],
       "answer": "postanowiła"
      },
      {
       "id": "7",
       "options": [
        "znaliby",
        "znałabyś",
        "poznałaby"
       ],
       "answer": "poznałaby"
      },
      {
       "id": "8",
       "options": [
        "obiecuj",
        "obiecaj",
        "obiecajmy"
       ],
       "answer": "obiecaj"
      },
      {
       "id": "9",
       "options": [
        "poszłabyś",
        "poszła",
        "pójdź"
       ],
       "answer": "poszła"
      },
      {
       "id": "10",
       "options": [
        "byliby",
        "bądźmy",
        "bylibyśmy"
       ],
       "answer": "bylibyśmy"
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
     "source": "Na podstawie artykułu: Sen o dolinie, „Twój Styl”, październik 2020.",
     "wordBox": [
      "za",
      "na",
      "w",
      "obok",
      "z",
      "dla",
      "od"
     ],
     "distractors": [
      "obok"
     ],
     "passage": "{{ex}} dolinie {{1}} północy Włoch październik to czas intensywnej pracy. Zaczyna się tam wtedy zbieranie jabłek. Turyści pomagają rolnikom w ogrodzie, bo ta forma wypoczynku jest coraz bardziej popularna wśród urlopowiczów. Nagrodą {{2}} pracę jest skrzynka owoców. Rolnicza dolina znajduje się daleko {{3}} dużych miast i dlatego jest tak atrakcyjna {{4}} Włochów, którzy szukają tu ciszy i kulinarnych wrażeń. Właściciele restauracji w tym regionie starają się, aby wszystkie produkty spożywcze pochodziły tylko {{5}} tego terenu.",
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
       "answer": "za"
      },
      {
       "id": "3",
       "answer": "od"
      },
      {
       "id": "4",
       "answer": "dla"
      },
      {
       "id": "5",
       "answer": "z"
      }
     ],
     "pdfNotes": [
      "The example gap is printed „W PRZYKŁAD” (capital W at sentence start); stored answer is the box word „w”."
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
         "genre": "ogłoszenie",
         "wordTarget": 30,
         "prompt": "Jest Pani właścicielką / Pan właścicielem baru z frytkami w miejscowości turystycznej. Szuka Pani/Pan dodatkowego pracownika na czas wakacji. Proszę napisać ogłoszenie, w którym przedstawi Pani/Pan warunki pracy."
        },
        {
         "id": "b",
         "genre": "list",
         "wordTarget": 170,
         "prompt": "Koleżanka zaprosiła Panią/Pana na weekend do swojego domku w górach. Niestety nie może Pani/Pan pojechać. W Pani/Pana mieszkaniu jest remont, który miał się skończyć w zeszłym tygodniu, ale ciągle trwa. Proszę opisać, co będzie Pani/Pan robić w weekend i zaproponować koleżance inny termin spotkania."
        }
       ]
      },
      {
       "id": "II",
       "parts": [
        {
         "id": "a",
         "genre": "życzenia",
         "wordTarget": 25,
         "prompt": "Jest Pani/Pan dyrektorem dużej firmy. Proszę napisać do swoich pracowników życzenia z okazji Nowego Roku."
        },
        {
         "id": "b",
         "genre": "sprawozdanie",
         "wordTarget": 175,
         "prompt": "Dwa tygodnie temu odbył się międzynarodowy festiwal piosenki studenckiej, na którym była Pani obecna / był Pan obecny. Proszę napisać sprawozdanie (relację) z tego wydarzenia do gazety „Kultura i Uczelnia”, z którą Pani/Pan współpracuje."
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
         "prompt": "Przez cały rok uczestniczyła Pani / uczestniczył Pan w kursie projektowania ogrodów. Na zakończenie nauki chce Pani/Pan zorganizować imprezę. Proszę napisać zaproszenie do koleżanek i kolegów z grupy, które zamieści Pani/Pan na Facebooku."
        },
        {
         "id": "b",
         "genre": "opis",
         "wordTarget": 170,
         "prompt": "„Tu najlepiej odpoczywam” – proszę opisać idealne dla Pani/Pana miejsce wypoczynku.",
         "title": "Tu najlepiej odpoczywam"
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
