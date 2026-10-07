window.EXAMS = window.EXAMS || {};
window.EXAMS["2021-01"] = {
 "schemaVersion": 1,
 "id": "2021-01",
 "meta": {
  "level": "B1",
  "labelPdf": "styczeń 2021",
  "examDates": "30-31.01.2021",
  "sources": {
   "test": "sources/2021-01/test.pdf",
   "transcript": "sources/2021-01/transcript.pdf",
   "audio": "sources/2021-01/audio.mp3"
  },
  "maxPoints": 120,
  "notes": [
   "Mówienie (40 p.) is not part of the source material; total 120 p. = 4 written modules.",
   "Writing has no official key/model answers, only the rubric (KARTA OCENY).",
   "Audio segmentation is automatic (silencedetect) and not yet verified by ear; 2021 sessions: only whole plays are offered (per-item times unreliable).",
   "Listening II = matching table (column I -> A-F), IV = persons 1-4 -> opinions A-D (5 slots), V = picture matching: 10 texts <-> photos A-K (A = example, key row per photo).",
   "Reading V is a word-box cloze (10 answers + example word, no spare word); reading III has A-H, IV has A-G (all used incl. the example).",
   "Listening V options: texts 1-10 plus a 'PRZYKŁAD' option so that the example (photo A) has a valid answer id.",
   "Listening III transcript is an unlabelled Q/A dialogue (the official transcript has no speaker tags)."
  ]
 },
 "audio": {
  "src": "sources/2021-01/audio.mp3",
  "duration": 1549.7,
  "intro": [
   0,
   47.2
  ],
  "readingTime": [
   47.2,
   87.7
  ],
  "tail": [
   1486.2,
   1549.7
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
       87.7,
       103.8
      ],
      "plays": [
       {
        "start": 114.1,
        "end": 267.4
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
        "text": "w taksówce."
       },
       {
        "id": "b",
        "text": "w autobusie."
       },
       {
        "id": "c",
        "text": "w pociągu."
       }
      ],
      "answer": "a",
      "shown": true,
      "transcript": {
       "sp": "M",
       "t": "Na dworzec proszę."
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
         "text": "na przystanku."
        },
        {
         "id": "b",
         "text": "na dworcu kolejowym."
        },
        {
         "id": "c",
         "text": "na lotnisku."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Przepraszam, czy tramwaj numer 13 już odjechał?"
       }
      },
      {
       "id": "l1.2",
       "number": 2,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "krytyka."
        },
        {
         "id": "b",
         "text": "wspomnienie."
        },
        {
         "id": "c",
         "text": "życzenie."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Kiedy byłam dzieckiem, lubiłam siedzieć u mamy na kolanach."
       }
      },
      {
       "id": "l1.3",
       "number": 3,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w samolocie."
        },
        {
         "id": "b",
         "text": "w teatrze."
        },
        {
         "id": "c",
         "text": "w hotelu."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Przepraszam, czy mogłaby pani usiąść przy oknie?"
       }
      },
      {
       "id": "l1.4",
       "number": 4,
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
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Nigdy nie słuchasz tego, co mówię!"
       }
      },
      {
       "id": "l1.5",
       "number": 5,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "przy bankomacie."
        },
        {
         "id": "b",
         "text": "w domu."
        },
        {
         "id": "c",
         "text": "w supermarkecie."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Proszę pani! Nie zabrała pani reszty!"
       }
      },
      {
       "id": "l1.6",
       "number": 6,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "propozycja."
        },
        {
         "id": "b",
         "text": "prośba."
        },
        {
         "id": "c",
         "text": "zgoda."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Pomóż mi, proszę."
       }
      },
      {
       "id": "l1.7",
       "number": 7,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w aptece."
        },
        {
         "id": "b",
         "text": "w gabinecie kosmetycznym."
        },
        {
         "id": "c",
         "text": "u dentysty."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Ma pani coś na katar?"
       }
      },
      {
       "id": "l1.8",
       "number": 8,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "rozkaz."
        },
        {
         "id": "b",
         "text": "życzenie."
        },
        {
         "id": "c",
         "text": "rada."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "M",
        "t": "Lepiej tu nie parkować. Tu często jeździ policja."
       }
      },
      {
       "id": "l1.9",
       "number": 9,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w szatni."
        },
        {
         "id": "b",
         "text": "w sklepie obuwniczym."
        },
        {
         "id": "c",
         "text": "w metrze."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Jaki rozmiar pani nosi?"
       }
      },
      {
       "id": "l1.10",
       "number": 10,
       "prompt": "Ta wypowiedź to fragment",
       "options": [
        {
         "id": "a",
         "text": "reklamy."
        },
        {
         "id": "b",
         "text": "serialu."
        },
        {
         "id": "c",
         "text": "reportażu."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "K",
        "t": "Masz dość starej pralki? Wypróbuj ulepszony model X5 w niższej cenie!"
       }
      },
      {
       "id": "l1.11",
       "number": 11,
       "prompt": "Ta wypowiedź oznacza",
       "options": [
        {
         "id": "a",
         "text": "radość."
        },
        {
         "id": "b",
         "text": "nadzieję."
        },
        {
         "id": "c",
         "text": "wątpliwość."
        }
       ],
       "answer": "c",
       "transcript": {
        "sp": "K",
        "t": "Nie wiem, czy kupno większego samochodu było dobrym pomysłem."
       }
      },
      {
       "id": "l1.12",
       "number": 12,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w autobusie."
        },
        {
         "id": "b",
         "text": "na statku."
        },
        {
         "id": "c",
         "text": "w samolocie."
        }
       ],
       "answer": "a",
       "transcript": {
        "sp": "M",
        "t": "Proszę państwa, mamy awarię. Dalej nie pojedziemy."
       }
      },
      {
       "id": "l1.13",
       "number": 13,
       "prompt": "Ta wypowiedź to",
       "options": [
        {
         "id": "a",
         "text": "prośba."
        },
        {
         "id": "b",
         "text": "zakaz."
        },
        {
         "id": "c",
         "text": "propozycja."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Wnoszenie produktów spożywczych na teren pływalni jest zabronione."
       }
      },
      {
       "id": "l1.14",
       "number": 14,
       "prompt": "Ta wypowiedź jest typowa",
       "options": [
        {
         "id": "a",
         "text": "w lesie."
        },
        {
         "id": "b",
         "text": "w sklepie."
        },
        {
         "id": "c",
         "text": "na ulicy."
        }
       ],
       "answer": "b",
       "transcript": {
        "sp": "K",
        "t": "Przepraszam, tu nie można wchodzić z psem!"
       }
      }
     ]
    },
    {
     "id": "l2",
     "number": "II",
     "type": "match",
     "grading": "auto",
     "instruction": "II. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać tekstu na temat środków transportu w Polsce oraz połączyć informacje z kolumny I z informacjami z kolumny II. Odpowiedzi proszę wpisać do tabeli.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 4,
     "source": "Na podstawie: https://www.transport-publiczny.pl/wiadomosci/polacy-lubia-transport-publiczny-ale-kochaja-auta-badanie-60862.html https://mskip.pl/polacy-na-rowery-kto-jezdzi-najwiecej-i-dlaczego,a1499 https://www.tabletowo.pl/badanie-nastawienia-spolecznego-do-uto-hulajnog/",
     "audio": {
      "announce": [
       277.9,
       293.8
      ],
      "plays": [
       {
        "start": 304.2,
        "end": 379.1
       },
       {
        "start": 425.3,
        "end": 500.1
       }
      ],
      "pauseBetweenPlays": 46.2,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "text": "Większość Polaków prawie codziennie korzysta z transportu publicznego. Jeździmy komunikacją zbiorową głównie dlatego, że jest wygodna. Ale za najbardziej komfortowy jest uznawany samochód, przy czym autem częściej podróżują kobiety. W dłuższą podróż wybieramy się pociągiem – statystyczny Polak robi to 8 razy w roku, jednak rzadko jeździmy nim za granicę. Najrzadziej korzystamy z komunikacji lotniczej – największy procent Polaków podróżuje w ten sposób zwykle w okresie urlopowym. Zarówno w miastach, jak i na wsi popularny jest rower, który pozwala pokonać niewielki dystans. W 60 procentach polskich gospodarstw domowych jest przynajmniej jeden taki pojazd. Z badań wynika, że polskie społeczeństwo akceptuje i elektryczne środki transportu. Coraz większym powodzeniem cieszą się hulajnogi elektryczne. Mówi się, że Polacy pokochali je tak jak Holendrzy rowery. Korzystanie z nich nie wpływa negatywnie na środowisko i jest niezwykle praktyczne w coraz bardziej zakorkowanych miastach."
     },
     "options": [
      {
       "id": "A",
       "text": "posiada ponad połowa polskich rodzin."
      },
      {
       "id": "B",
       "text": "Polacy wybierają na podróże w czasie wakacji."
      },
      {
       "id": "C",
       "text": "wybierają chętniej panie."
      },
      {
       "id": "D",
       "text": "jest pojazdem, który nie powoduje korków w mieście."
      },
      {
       "id": "E",
       "text": "Polacy lubią, ponieważ jest wygodny."
      },
      {
       "id": "F",
       "text": "służy głównie do dalszych podróży krajowych."
      }
     ],
     "example": {
      "id": "l2.ex",
      "prompt": "Transport publiczny",
      "answer": "E",
      "shown": true
     },
     "items": [
      {
       "id": "l2.1",
       "number": 1,
       "prompt": "Samochód",
       "answer": "C"
      },
      {
       "id": "l2.2",
       "number": 2,
       "prompt": "Pociąg",
       "answer": "F"
      },
      {
       "id": "l2.3",
       "number": 3,
       "prompt": "Samolot",
       "answer": "B"
      },
      {
       "id": "l2.4",
       "number": 4,
       "prompt": "Rower",
       "answer": "A"
      },
      {
       "id": "l2.5",
       "number": 5,
       "prompt": "Hulajnoga elektryczna",
       "answer": "D"
      }
     ]
    },
    {
     "id": "l3",
     "number": "III",
     "type": "tf",
     "grading": "auto",
     "instruction": "III. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać wywiadu z panią Grażyną na temat literatury. Proszę zaznaczyć: TAK – gdy zdanie jest zgodne z tekstem; NIE – gdy nie jest zgodne z tekstem.",
     "pointsFormula": "8 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 8,
     "plays": 2,
     "pdfPage": 5,
     "source": "Na podstawie: Pożegnanie z królową książek, w: „Angora”, nr 29 (1570), 19 lipca 2020, s.76.",
     "audio": {
      "announce": [
       511.0,
       526.7
      ],
      "plays": [
       {
        "start": 537.0,
        "end": 615.1
       },
       {
        "start": 661.4,
        "end": 739.5
       }
      ],
      "pauseBetweenPlays": 46.3,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "t": "Od kiedy literatura jest dla ciebie ważna?"
       },
       {
        "t": "Można powiedzieć, że od urodzenia. Ojciec wybrał dla mnie imię Grażyna, bo to jego ulubiona bohaterka w jednej z książek Adama Mickiewicza."
       },
       {
        "t": "Czy pamiętasz swoją pierwszą w życiu książkę?"
       },
       {
        "t": "Tak. Dostałam ją w prezencie pod choinkę. Byłam rozczarowana, wolałam lalkę. Ale poprosiłam babcię, żeby mi poczytała i tak zaczęła się moja przygoda na całe życie. Szybko sama nauczyłam się czytać."
       },
       {
        "t": "Niektórzy mówią, że szkoła przez złą listę lektur odbiera chęć do czytania."
       },
       {
        "t": "Absolutnie się nie zgadzam. W szkole średniej najchętniej uczyłam się o literaturze i sztuce, potem studiowałam polonistykę. Po studiach pracowałam w domu kultury."
       },
       {
        "t": "Jak znalazłaś się w Niemczech?"
       },
       {
        "t": "Przyjeżdżałam kilka razy w roku do ciotki, która mieszkała w nadmorskim kurorcie. Tam poznałam mojego przyszłego męża i postanowiłam zostać w tym kraju."
       },
       {
        "t": "Kiedy zaczęłaś pracować w bibliotece?"
       },
       {
        "t": "Wkrótce po ślubie. Początkowo tylko pięć godzin tygodniowo, potem stopniowo awansowałam, w końcu zostałam kierowniczką biblioteki."
       }
      ]
     },
     "example": {
      "id": "l3.ex",
      "statement": "Grażyna od dziecka interesuje się literaturą.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "l3.1",
       "number": 1,
       "statement": "Grażyna ma takie samo imię jak bohaterka literacka.",
       "answer": "TAK"
      },
      {
       "id": "l3.2",
       "number": 2,
       "statement": "Mała Grażyna była zadowolona z prezentu pod choinkę.",
       "answer": "NIE"
      },
      {
       "id": "l3.3",
       "number": 3,
       "statement": "Pierwszą książkę Grażyna przeczytała sama.",
       "answer": "NIE"
      },
      {
       "id": "l3.4",
       "number": 4,
       "statement": "Grażyna uważa, że szkoła zniechęca uczniów do czytania.",
       "answer": "NIE"
      },
      {
       "id": "l3.5",
       "number": 5,
       "statement": "Grażyna łączyła studia z pracą w domu kultury.",
       "answer": "NIE"
      },
      {
       "id": "l3.6",
       "number": 6,
       "statement": "Grażyna poznała swojego męża dzięki wyjazdom do ciotki.",
       "answer": "TAK"
      },
      {
       "id": "l3.7",
       "number": 7,
       "statement": "Grażyna obecnie nie mieszka w Polsce.",
       "answer": "TAK"
      },
      {
       "id": "l3.8",
       "number": 8,
       "statement": "Po przyjeździe do Niemiec Grażyna pracowała w bibliotece na pełny etat.",
       "answer": "NIE"
      }
     ]
    },
    {
     "id": "l4",
     "number": "IV",
     "type": "matchMulti",
     "grading": "auto",
     "instruction": "IV. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać tekstu na temat nadwagi u dzieci i dopasować osoby (1-4) do ich opinii (A-D). Uwaga! Jedna osoba może wypowiadać więcej niż jedną opinię.",
     "pointsFormula": "5 x 1 p.",
     "pointsPerSlot": 1,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 6,
     "source": "Na podstawie: https://www.youtube.com/watch?v=2efcF44jJSU&list=PL-pfVXx0PQqeEKLrXSITvmwDCK0ZxX1e3&index=25",
     "audio": {
      "announce": [
       750.2,
       766.1
      ],
      "plays": [
       {
        "start": 776.4,
        "end": 897.3
       },
       {
        "start": 943.2,
        "end": 1064.1
       }
      ],
      "pauseBetweenPlays": 45.9,
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
      "id": "l4.ex",
      "statement": "myśli, że dzieci mają za mało ruchu.",
      "answer": [
       "2"
      ],
      "shown": true
     },
     "statements": [
      {
       "id": "l4.A",
       "letter": "A",
       "text": "uważa, że jedzenie domowe jest lepsze niż gotowe posiłki.",
       "slots": 1,
       "answer": [
        "3"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l4.B",
       "letter": "B",
       "text": "wspomina o liczbie dzieci z nadwagą w Polsce.",
       "slots": 1,
       "answer": [
        "1"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l4.C",
       "letter": "C",
       "text": "wymienia podstawowe zasady dobrego żywienia.",
       "slots": 1,
       "answer": [
        "4"
       ],
       "anyOrder": true,
       "starred": false
      },
      {
       "id": "l4.D",
       "letter": "D",
       "text": "sądzi, że ludzie są za mało cierpliwi.",
       "slots": 2,
       "answer": [
        "2",
        "3"
       ],
       "anyOrder": true,
       "starred": false
      }
     ],
     "transcript": {
      "lines": [
       {
        "sp": "Osoba 1 (M)",
        "t": "Witam państwa w programie „W Polsce.pl”. Ponad 18% dzieci w wieku 11-12 lat ma nadwagę, a 3% to dzieci otyłe. Na czym polega problem? Dlaczego Polacy tak źle jedzą? Pytanie to zadaliśmy nauczycielce, znanej aktorce i dietetykowi."
       },
       {
        "sp": "Osoba 2 (K)",
        "t": "Przede wszystkim dzieciom brak ruchu. Poza tym, wiadomo, spożywamy za dużo tak zwanych fast foodów. A dzieci, zresztą nie tylko one, bo dotyczy to też dorosłych, nie potrafią czekać, to znaczy – jesteśmy głodni, więc zatrzymujemy samochód i idziemy do restauracji. Jedzenie ma się pojawić tu i teraz."
       },
       {
        "sp": "Osoba 3 (K)",
        "t": "To prawda, rzeczywiście nie czekamy, ale mam też wrażenie, że coraz mniej gotuje się w domu. A jedzenie przygotowane samodzielnie jest dużo bardziej wartościowe. Tymczasem kupujemy żywność przetworzoną, gotowe potrawy, a to powoduje, że nie kontrolujemy tego, co jemy."
       },
       {
        "sp": "Osoba 4 (M)",
        "t": "Niestety często zapominamy o pięciu filarach, na których opiera się zdrowa dieta. Pierwszy to warzywa i owoce, drugi – zredukowanie ilości cukru, a trzeci – zredukowanie ilości soli. Po czwarte – bardzo ważne jest picie wody, a po piąte – powinniśmy jeść więcej ryb i produktów zbożowych."
       }
      ]
     }
    },
    {
     "id": "l5",
     "number": "V",
     "type": "match",
     "grading": "auto",
     "instruction": "V. Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem. Uwaga! Nagranie zostanie odtworzone dwa razy.",
     "prompt": "Proszę wysłuchać tekstów o różnych sposobach spędzania wolnego czasu i dopasować numer tekstu do ilustracji.",
     "pointsFormula": "10 x 0,5 p.",
     "pointsPerItem": 0.5,
     "maxPoints": 5,
     "plays": 2,
     "pdfPage": 7,
     "source": "Źródło zdjęć: https://pixabay.com/pl/photos",
     "audio": {
      "announce": [
       1074.6,
       1090.6
      ],
      "plays": [
       {
        "start": 1100.8,
        "end": 1269.6
       },
       {
        "start": 1300.4,
        "end": 1469.2
       }
      ],
      "pauseBetweenPlays": 30.8,
      "source": "auto-silencedetect",
      "verified": false
     },
     "transcript": {
      "lines": [
       {
        "sp": "N",
        "t": "Zapytaliśmy Polaków, czym dla nich jest kreatywne spędzanie wolnego czasu"
       },
       {
        "sp": "Przykład (K)",
        "t": "W weekendy projektuję i szyję ubrania. W przyszłości planuję otworzyć firmę odzieżową."
       },
       {
        "sp": "Tekst 1 (M)",
        "t": "W dzieciństwie chodziłem na zajęcia, podczas których uczyłem się sztuki pięknego pisania. Dziś sprzedaję artystyczne kartki z ręcznie pisanymi życzeniami."
       },
       {
        "sp": "Tekst 2 (K)",
        "t": "W wolnych chwilach kręcę i montuję filmiki. Prowadzę wideoblog, na którym pokazuję, jak odpowiednio się malować."
       },
       {
        "sp": "Tekst 3 (M)",
        "t": "Uwielbiam wycinanie kształtów z owoców i warzyw. Przygotowuję wspaniale wyglądające i zdrowe przekąski."
       },
       {
        "sp": "Tekst 4 (M)",
        "t": "Zajmuję się tworzeniem modeli. Zbudowałem już kilkanaście miast, wsi, a nawet wesołe miasteczko."
       },
       {
        "sp": "Tekst 5 (M)",
        "t": "Chodzę na zajęcia improwizacji. To trochę jak aktorstwo, ale nie ma scenariusza, co gwarantuje świetną zabawę."
       },
       {
        "sp": "Tekst 6 (K)",
        "t": "Lubię tworzyć różne kształty z papieru. Oglądam filmy w sieci, potem próbuję składać kartkę tak, aby powstała z niej jakaś ciekawa figura."
       },
       {
        "sp": "Tekst 7 (K)",
        "t": "Od lat łączę pracę z pasją. Układam bukiety i wiązanki, ozdabiam meble i pomieszczenia. O kwiatach wiem wszystko."
       },
       {
        "sp": "Tekst 8 (K)",
        "t": "Kocham słodycze! Kiedy mam czas, dekoruję ciasta i ciasteczka. To pyszne, ale i kaloryczne hobby."
       },
       {
        "sp": "Tekst 9 (K)",
        "t": "Moją pasją jest biżuteria. Sama tworzę własne kolekcje."
       },
       {
        "sp": "Tekst 10 (K)",
        "t": "Wolne chwile spędzam z notesem i długopisem. Piszę książki dla dzieci i młodzieży."
       }
      ]
     },
     "options": [
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
      },
      {
       "id": "PRZYKŁAD",
       "text": "PRZYKŁAD"
      }
     ],
     "example": {
      "id": "l5.ex",
      "label": "A",
      "image": "data/img/2021-01/l5-A.jpg",
      "answer": "PRZYKŁAD",
      "shown": true,
      "transcript": {
       "sp": "K",
       "t": "W weekendy projektuję i szyję ubrania. W przyszłości planuję otworzyć firmę odzieżową."
      }
     },
     "items": [
      {
       "id": "l5.1",
       "number": 1,
       "label": "B",
       "image": "data/img/2021-01/l5-B.jpg",
       "answer": "3"
      },
      {
       "id": "l5.2",
       "number": 2,
       "label": "C",
       "image": "data/img/2021-01/l5-C.jpg",
       "answer": "7"
      },
      {
       "id": "l5.3",
       "number": 3,
       "label": "D",
       "image": "data/img/2021-01/l5-D.jpg",
       "answer": "1"
      },
      {
       "id": "l5.4",
       "number": 4,
       "label": "E",
       "image": "data/img/2021-01/l5-E.jpg",
       "answer": "9"
      },
      {
       "id": "l5.5",
       "number": 5,
       "label": "F",
       "image": "data/img/2021-01/l5-F.jpg",
       "answer": "5"
      },
      {
       "id": "l5.6",
       "number": 6,
       "label": "G",
       "image": "data/img/2021-01/l5-G.jpg",
       "answer": "10"
      },
      {
       "id": "l5.7",
       "number": 7,
       "label": "H",
       "image": "data/img/2021-01/l5-H.jpg",
       "answer": "4"
      },
      {
       "id": "l5.8",
       "number": 8,
       "label": "I",
       "image": "data/img/2021-01/l5-I.jpg",
       "answer": "8"
      },
      {
       "id": "l5.9",
       "number": 9,
       "label": "J",
       "image": "data/img/2021-01/l5-J.jpg",
       "answer": "2"
      },
      {
       "id": "l5.10",
       "number": 10,
       "label": "K",
       "image": "data/img/2021-01/l5-K.jpg",
       "answer": "6"
      }
     ],
     "images": [
      {
       "id": "A",
       "src": "data/img/2021-01/l5-A.jpg",
       "alt": "zdjęcie A"
      },
      {
       "id": "B",
       "src": "data/img/2021-01/l5-B.jpg",
       "alt": "zdjęcie B"
      },
      {
       "id": "C",
       "src": "data/img/2021-01/l5-C.jpg",
       "alt": "zdjęcie C"
      },
      {
       "id": "D",
       "src": "data/img/2021-01/l5-D.jpg",
       "alt": "zdjęcie D"
      },
      {
       "id": "E",
       "src": "data/img/2021-01/l5-E.jpg",
       "alt": "zdjęcie E"
      },
      {
       "id": "F",
       "src": "data/img/2021-01/l5-F.jpg",
       "alt": "zdjęcie F"
      },
      {
       "id": "G",
       "src": "data/img/2021-01/l5-G.jpg",
       "alt": "zdjęcie G"
      },
      {
       "id": "H",
       "src": "data/img/2021-01/l5-H.jpg",
       "alt": "zdjęcie H"
      },
      {
       "id": "I",
       "src": "data/img/2021-01/l5-I.jpg",
       "alt": "zdjęcie I"
      },
      {
       "id": "J",
       "src": "data/img/2021-01/l5-J.jpg",
       "alt": "zdjęcie J"
      },
      {
       "id": "K",
       "src": "data/img/2021-01/l5-K.jpg",
       "alt": "zdjęcie K"
      }
     ],
     "pdfNotes": [
      "Photos A-K as on PDF p.7 (A = example); answer table is row per picture B-K -> text number (official key)."
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
       "text": "Duże zachmurzenie czeka nas w drugiej części dnia na południowym wschodzie Polski. Przelotne opady deszczu pojawią się w województwach zachodniopomorskim i wielkopolskim, a na Podkarpaciu i w Małopolsce – burze.",
       "source": "Na podstawie: https://wiadomosci.gazeta.pl/wiadomosci/7,114883,25974170,pogoda-na-dzis-sroda-27-maja-rano-duzo-slonca-pozniej-wiecej.html"
      },
      "prompt": "Z tego tekstu wynika, że",
      "options": [
       {
        "id": "a",
        "text": "w całej Polsce będzie deszczowo."
       },
       {
        "id": "b",
        "text": "w niektórych regionach wystąpią burze."
       },
       {
        "id": "c",
        "text": "w godzinach porannych będzie pochmurno."
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
        "text": "Zapraszamy rodziców z dziećmi w wieku szkolnym do Muzeum Narodowego w Krakowie. Specjalnie przygotowane informacje o dziełach sztuki i artystach oraz towarzyszące im zadania pomogą rodzicom zainteresować dzieci kolekcją muzeum oraz sztuką.",
        "source": "Na podstawie: https://mnk.pl/artykul/rodzinne-sciezki-do-samodzielnego-zwiedzania-i-materialy-do-pobrania"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "do muzeum uczniowie mogą przychodzić samodzielnie."
        },
        {
         "id": "b",
         "text": "muzeum przygotowało program zwiedzania dla rodzin."
        },
        {
         "id": "c",
         "text": "pracownicy muzeum chcą zainteresować rodziców sztuką."
        }
       ],
       "answer": "b"
      },
      {
       "id": "r1.2",
       "number": 2,
       "passage": {
        "text": "Znany portal turystyczny opublikował listę trendów na nadchodzący sezon wakacyjny. Z danych wynika, że w tym roku zamiast pobytu w luksusowym hotelu i relaksu nad basenem, który zawsze zajmował pierwsze miejsce, Polacy wybiorą nocleg w namiocie lub w domku letniskowym.",
        "source": "Na podstawie: https://www.msn.com/pl-pl/podroze/news/wyjazdy-pod-namiot-to-jeden-z-trend%C3%B3w-na-wakacje-2020-piszemy-co-zabra%C4%87/ar-BB14FOLX?ocid=msedgdhp"
       },
       "prompt": "Z tego tekstu wynika, że w wakacje",
       "options": [
        {
         "id": "a",
         "text": "największym zainteresowaniem będą się cieszyły kempingi."
        },
        {
         "id": "b",
         "text": "najwięcej turystów będzie w miejscowościach górskich."
        },
        {
         "id": "c",
         "text": "turyści najchętniej pojadą do dobrego hotelu."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.3",
       "number": 3,
       "passage": {
        "text": "Naukowcy udowodnili, że osoby, które w przedszkolu codziennie piły około 1,5 szklanki 100% soku owocowego, a w okresie dojrzewania jadły dużo owoców, nie mają nadwagi. Ponadto takie osoby w dorosłym życiu mają tendencję do utrzymywania zdrowszej diety.",
        "source": "Na podstawie: https://www.msn.com/pl-pl/zdrowie/nasze-zdrowie/picie-soku-owocowego-we-wczesnych-latach-ma-wp%c5%82yw-na-p%c3%b3%c5%baniejsze-wybory-%c5%bcywieniowe/ar-BB15hgxV?ocid=msedgdhp"
       },
       "prompt": "Z tego tekstu wynika, że dzieci, które piją soki owocowe,",
       "options": [
        {
         "id": "a",
         "text": "zdrowiej się odżywiają w późniejszych latach życia."
        },
        {
         "id": "b",
         "text": "w dorosłym życiu rzadko jedzą owoce."
        },
        {
         "id": "c",
         "text": "z czasem zmieniają dietę na wegetariańską."
        }
       ],
       "answer": "a"
      },
      {
       "id": "r1.4",
       "number": 4,
       "passage": {
        "text": "Na aukcji pojawiły się 93 prace najwybitniejszych polskich twórców z ostatnich 150 lat. Największym zainteresowaniem cieszył się wystawiony na sprzedaż obraz Jana Matejki „Portret Profesora Karola Gilewskiego”, który zaginął wiele lat temu.",
        "source": "Na podstawie: https://tvn24.pl/kultura-i-styl/obraz-jana-matejki-na-aukcji-portret-profesora-karola-gilewskiego-sprzedany-za-niemal-siedem-milionow-zlotych-4599911"
       },
       "prompt": "Z tego tekstu wynika, że na aukcji",
       "options": [
        {
         "id": "a",
         "text": "kolekcjonerzy kupili 93 dzieła polskich artystów."
        },
        {
         "id": "b",
         "text": "zgubił się jeden z obrazów Jana Matejki."
        },
        {
         "id": "c",
         "text": "można było kupić obraz Jana Matejki."
        }
       ],
       "answer": "c"
      },
      {
       "id": "r1.5",
       "number": 5,
       "passage": {
        "text": "Konkurs filmowy #63PL jest dla młodych ludzi w wieku od 15 do 22 lat, którzy chcą opowiedzieć o tym, co jest według nich najważniejsze w życiu. Aby wziąć udział w inicjatywie, należy nagrać filmik. Może być on nakręcony smartfonem, kamerą lub aparatem fotograficznym.",
        "source": "Na podstawie: https://pik.prawodlapraktykow.pl/nagraj-63-sekundowe-wideo-i-wez-udzial-w-konkursie-muzeum-powstania-warszawskiego/"
       },
       "prompt": "Z tego tekstu wynika, że",
       "options": [
        {
         "id": "a",
         "text": "w konkursie mogą wziąć udział tylko profesjonalni filmowcy."
        },
        {
         "id": "b",
         "text": "na konkurs można przysłać film nagrany dowolnym urządzeniem."
        },
        {
         "id": "c",
         "text": "uczestnicy konkursu muszą nakręcić film o swoim codziennym życiu."
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
     "pointsFormula": "7 x 1 p.",
     "pointsPerItem": 1,
     "maxPoints": 7,
     "pdfPage": 11,
     "source": "Na podstawie: https://wroclaw.onet.pl/wroclawska-firma-za-darmo-odnawia-buty-dla-bezdomnych/g52c5tl?srcc=ucs",
     "passage": "Firma Pucybuty działa we Wrocławiu od kilku lat i zajmuje się czyszczeniem oraz renowacją butów. To jedyny taki zakład w całym mieście. W połowie zeszłego roku pracownicy firmy postanowili naprawić swoje buty, w których już nie chodzili, a następnie oddać je do schroniska św. Brata Alberta – pomaga ono bezdomnym mężczyznom i kobietom. O pomyśle opowiada właścicielka Pucybutów:\n\n- Najpierw zaczęliśmy przynosić buty, które nie były nam już potrzebne. Później poprosiliśmy o to nasze rodziny i znajomych. Pierwszą paczkę wysłaliśmy do schroniska anonimowo.\n\nFirma ma w planach także renowację butów dziecięcych i przekazywanie ich do domów dziecka. Informacja o tym, że pracownicy Pucybutów naprawiają obuwie, które później oddają bezdomnym, szybko się rozniosła:\n\n- Klienci firmy zaczęli pytać, czy mogą nam oddać niepotrzebne buty, których nie chcą wyrzucać. Mamy dużo polubień i komentarzy na naszym profilu na Facebooku – mówi właścicielka. – Jesteśmy zaskoczeni, że tyle osób chce przyłączyć się do akcji. Piszą i dzwonią ludzie z całej Polski i pytają, czy mogą nam wysłać buty. Informujemy, że można je przynieść osobiście, ale też wysłać kurierem albo pocztą. Jesteśmy bardzo szczęśliwi, że możemy chociaż w taki sposób pomagać innym – dodaje.\n\nCzyszczeniem i naprawą butów, które później trafiają do osób potrzebujących, pracownicy firmy zajmują się w wolnych chwilach lub po godzinach pracy. W pierwszej kolejności muszą realizować zamówienia swoich klientów, a tych jest coraz więcej.",
     "example": {
      "id": "r2.ex",
      "statement": "Pucybuty to firma z Wrocławia.",
      "answer": "TAK",
      "shown": true
     },
     "items": [
      {
       "id": "r2.1",
       "number": 1,
       "statement": "We Wrocławiu jest kilka firm, które czyszczą i naprawiają buty.",
       "answer": "NIE"
      },
      {
       "id": "r2.2",
       "number": 2,
       "statement": "Pierwsze pary butów dla bezdomnych przynieśli pracownicy zakładu.",
       "answer": "TAK"
      },
      {
       "id": "r2.3",
       "number": 3,
       "statement": "Firma Pucybuty pomogła już wielu dzieciom z domu dziecka.",
       "answer": "NIE"
      },
      {
       "id": "r2.4",
       "number": 4,
       "statement": "Przekazywanie odnowionych butów bezdomnym to pomysł internautów.",
       "answer": "NIE"
      },
      {
       "id": "r2.5",
       "number": 5,
       "statement": "Obuwie można dostarczyć do firmy na kilka sposobów.",
       "answer": "TAK"
      },
      {
       "id": "r2.6",
       "number": 6,
       "statement": "Coraz więcej osób spoza Wrocławia chce pomóc bezdomnym.",
       "answer": "TAK"
      },
      {
       "id": "r2.7",
       "number": 7,
       "statement": "Firma Pucybuty zajmuje się teraz przede wszystkim pomocą ludziom potrzebującym.",
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
     "source": "Na podstawie: https://businessinsider.com.pl/media/tv-radio/co-to-jest-binge-watching/822g6p",
     "passage": "Oglądasz kilka albo nawet kilkanaście odcinków serialu z rzędu? Oznacza to, że uprawiasz binge-watching. To sposób oglądania, który {{ex}} i jest efektem zmian, jakie zaszły w mediach. Dawniej telewizja emitowała kolejne odcinki seriali zazwyczaj co tydzień. Sytuacja zaczęła się zmieniać, kiedy {{1}}. Obok stacji, które prezentowały wiedzę o świecie, powstały wtedy też kanały pokazujące wyłącznie seriale. Coraz częściej nadawały one serialowe maratony, które {{2}}. Jednak prawdziwą rewolucję przyniósł Netflix. To amerykański gigant internetowy, który {{3}} całe kilkuodcinkowe sezony. Jak tylko pojawią się one na platformie internetowej, widz {{4}} z ulubionymi postaciami z serialowej rzeczywistości. Zjawisko to jest coraz popularniejsze. Najnowsze badanie pokazuje, że 57% widzów regularnie uprawia binge-watching. Ponad połowa ankietowanych zwykle ogląda {{5}}. Większość z nich najchętniej wybiera platformy działające podobnie jak Netflix. Natomiast 22% badanych przede wszystkim ogląda seriale, które {{6}}. Dlaczego binge-watching jest tak popularny? Powodów jest wiele. Jeśli chodzi o młodych ludzi, to mają sporo wolnego czasu, który {{7}}. Ponadto fabuła filmów bywa tak interesująca, że widzowi trudno jest oderwać się od ekranu.",
     "options": [
      {
       "id": "A",
       "text": "od razu może rozpocząć maraton"
      },
      {
       "id": "B",
       "text": "przyszła era kanałów tematycznych"
      },
      {
       "id": "C",
       "text": "postanowił udostępnić od razu"
      },
      {
       "id": "D",
       "text": "w ostatnich latach stał się bardzo popularny"
      },
      {
       "id": "E",
       "text": "składały się z kilku odcinków filmu"
      },
      {
       "id": "F",
       "text": "można w ten sposób wypełnić"
      },
      {
       "id": "G",
       "text": "od trzech do czterech odcinków na raz"
      },
      {
       "id": "H",
       "text": "wcześniej nagrywa na twarde dyski swoich dekoderów"
      }
     ],
     "example": {
      "gap": "ex",
      "answer": "D",
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
       "answer": "E"
      },
      {
       "id": "r3.3",
       "number": 3,
       "gap": "3",
       "answer": "C"
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
     "source": "Na podstawie: https://zyciejestpiekne.eu/jak-nie-dac-sie-codziennej-monotonii/",
     "heading": "Jak nie dać się codziennej monotonii?",
     "prompt": "Autor bloga „Życie jest piękne” dzieli się doświadczeniami",
     "options": [
      {
       "id": "A",
       "text": "Przeważnie w codziennym życiu zapominamy o tym, co już osiągnęliśmy. Nie powinno tak być! Jeżeli uda mi się coś, na czym mi zależało, to organizuję sobie nagrodę."
      },
      {
       "id": "B",
       "text": "Nie planuję dokładnie swojego życia, ale określiłem sobie kilka celów, które chcę zrealizować. Równocześnie wiem, że pewnie nie wszystko uda się zrobić."
      },
      {
       "id": "C",
       "text": "Przeczytałem, że większość problemów ludzi wynika z tego, że nie wiedzą, co lubią robić. Zrobiłem sobie listę 5 aktywności, które sprawiają mi przyjemność."
      },
      {
       "id": "D",
       "text": "Nawet za nią tęsknię – za kawą przy komputerze czy za radiem w samochodzie. Trzeba doceniać małe rzeczy, bo jeśli ktoś nie potrafi się z nich cieszyć, to nie będzie się cieszyć z tych większych."
      },
      {
       "id": "E",
       "text": "Długo nie wiedziałem, co chcę robić w życiu. Jednak kiedy w końcu wybrałem kierunek, realizuję marzenia i mogę wyobrazić sobie swoje dalsze życie."
      },
      {
       "id": "F",
       "text": "Dbam o to, żeby życie było różnorodne. Czasami gotuję coś, czego nie jadłem albo zajmuję się czymś, czego do tej pory nie robiłem."
      },
      {
       "id": "G",
       "text": "Bardzo ważna rzecz, dla mnie najtrudniejsza. Mam bardzo dużo różnych obowiązków i dlatego pilnuję, żeby mieć też czas na odpoczynek i kontakty z ludźmi."
      }
     ],
     "example": {
      "id": "r4.ex",
      "prompt": "Miej jakieś cele",
      "answer": "B",
      "shown": true
     },
     "items": [
      {
       "id": "r4.1",
       "number": 1,
       "prompt": "Zauważaj codzienność",
       "answer": "D"
      },
      {
       "id": "r4.2",
       "number": 2,
       "prompt": "Zachowaj równowagę w życiu prywatnym i w pracy",
       "answer": "G"
      },
      {
       "id": "r4.3",
       "number": 3,
       "prompt": "Świętuj sukcesy",
       "answer": "A"
      },
      {
       "id": "r4.4",
       "number": 4,
       "prompt": "Próbuj nowych rzeczy",
       "answer": "F"
      },
      {
       "id": "r4.5",
       "number": 5,
       "prompt": "Miej plan na przyszłość",
       "answer": "E"
      },
      {
       "id": "r4.6",
       "number": 6,
       "prompt": "Poszukaj pomysłów na spędzanie wolnego czasu",
       "answer": "C"
      }
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
     "source": "Na podstawie: https://www.rmf24.pl/ciekawostki/news-jest-praca-u-krolowej-elzbiety-ii-poszukiwana-jest-sprzatacz,nId,2260784",
     "wordBox": [
      "warunki",
      "oprócz",
      "oferty",
      "urlopu",
      "obowiązkiem",
      "chwalić",
      "marzyć",
      "wypłaty",
      "w ciągu",
      "wyżywienie",
      "starać się"
     ],
     "distractors": [],
     "passage": "Nie ma idealnej pracy? Być może, ale na pewno na rynku można znaleźć {{ex}}, które nie pozwolą się nudzić. Czasami trudno uwierzyć, że ktoś za to płaci! Przynajmniej 16 tysięcy funtów rocznie, 33 dni {{1}} i dostęp do obiektów rekreacyjnych na terenie pałacu – takie {{2}} oferuje Królowa Elżbieta poszukiwanej sprzątaczce. Głównym {{3}} pracowniczki będzie dbanie o porządek w królewskich pokojach. Oprócz wynagrodzenia, własnego pokoju, pracodawca zapewnia także pełne {{4}}. Jeśli ktoś nie lubi sprzątać, może {{5}} o pracę na stanowisku „imprezowicz”. Zadania? Wystarczy chodzić do klubów i {{6}} w mediach społecznościowych, jak jest w nich wspaniale. To stanowisko wymaga dyspozycyjności tylko przez 2,5 dnia {{7}} tygodnia. Niestety, nie można {{8}} o wolnych weekendach. Znana marka samochodów szuka chętnych na wyprawę przez 20 krajów w Europie. {{9}} samej jazdy trzeba będzie także pisać bloga i szukać ciekawych tras. Gdyby kogoś nie przekonało 25 tysięcy euro miesięcznej {{10}}, można liczyć także na samochód za prawie drugie tyle.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "oferty"
      },
      {
       "id": "1",
       "answer": "urlopu"
      },
      {
       "id": "2",
       "answer": "warunki"
      },
      {
       "id": "3",
       "answer": "obowiązkiem"
      },
      {
       "id": "4",
       "answer": "wyżywienie"
      },
      {
       "id": "5",
       "answer": "starać się"
      },
      {
       "id": "6",
       "answer": "chwalić"
      },
      {
       "id": "7",
       "answer": "w ciągu"
      },
      {
       "id": "8",
       "answer": "marzyć"
      },
      {
       "id": "9",
       "answer": "oprócz"
      },
      {
       "id": "10",
       "answer": "wypłaty"
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
     "source": "Na podstawie: https://sport.onet.pl/lekkoatletyka/lekkoatletyka-jacek-wszola-historia/7ecej22",
     "passage": "Przed {{ex1}} w Sydney pojechaliśmy na obóz treningowy w polskie góry. Miejsce było {{ex2}}, hotel wspaniały. Był w {{ex3}} ogromny basen. Niestety przez całe dziesięć {{1}} padał deszcz. Większość czasu spędzaliśmy w zamkniętym {{2}}. Brakowało nam wtedy słońca i świeżego powietrza. Któregoś ranka obudziłem się z bólem gardła, pojawiła się też {{3}} temperatura. Było {{4}} bardzo zimno. Wystraszyłem się, że nie będę mógł trenować. Miałem {{5}} przeczucia. Dostałem antybiotyk i czułem się bardzo osłabiony. Martwiłem się o {{6}}, bo za dwa tygodnie planowałem startować w zawodach we Włoszech. Organizator opłacił mój bilet i nie mogłem już zrezygnować. {{7}} {{8}} przyjęli mnie bardzo dobrze, jeden z {{9}} oprowadził mnie po mieście. W {{10}} zawodach zająłem piąte miejsce, ale poczułem się silny i to było najważniejsze. Pomyślałem, że może na olimpiadzie nie będzie tak źle.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "olimpiada",
        "olimpiadą",
        "olimpiadzie"
       ],
       "answer": "olimpiadą"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "przepiękne",
        "przepięknego",
        "przepięknym"
       ],
       "answer": "przepiękne"
      },
      {
       "id": "ex3",
       "example": true,
       "options": [
        "nas",
        "im",
        "nim"
       ],
       "answer": "nim"
      },
      {
       "id": "1",
       "options": [
        "dnia",
        "dni",
        "dniach"
       ],
       "answer": "dni"
      },
      {
       "id": "2",
       "options": [
        "budynkiem",
        "budynkach",
        "budynku"
       ],
       "answer": "budynku"
      },
      {
       "id": "3",
       "options": [
        "wysoka",
        "wysokiej",
        "wysoką"
       ],
       "answer": "wysoka"
      },
      {
       "id": "4",
       "options": [
        "mnie",
        "mi",
        "mną"
       ],
       "answer": "mi"
      },
      {
       "id": "5",
       "options": [
        "złe",
        "złych",
        "złego"
       ],
       "answer": "złe"
      },
      {
       "id": "6",
       "options": [
        "formą",
        "formie",
        "formę"
       ],
       "answer": "formę"
      },
      {
       "id": "7",
       "options": [
        "Włoski",
        "Włoskich",
        "Włoscy"
       ],
       "answer": "Włoscy"
      },
      {
       "id": "8",
       "options": [
        "trenerzy",
        "trener",
        "trenerów"
       ],
       "answer": "trenerzy"
      },
      {
       "id": "9",
       "options": [
        "nimi",
        "nich",
        "ich"
       ],
       "answer": "nich"
      },
      {
       "id": "10",
       "options": [
        "tych",
        "tymi",
        "tym"
       ],
       "answer": "tych"
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
     "source": "Na podstawie: https://noizz.pl/ekologia/5-tys-zl-dotacji-na-oczko-wodne-ekspert-komentuje-pomysl-dudy-moja-woda/de88hse",
     "wordBox": [
      "bo",
      "żeby",
      "dlatego",
      "ponieważ",
      "że",
      "ale",
      "albo"
     ],
     "distractors": [
      "ale"
     ],
     "passage": "Latem może być susza, {{ex}} deszczu jest coraz mniej, {{1}} politycy pracują nad projektem „Moja woda”. Akcja ma nauczyć Polaków, jak magazynować wodę deszczową. Zaangażował się w nią nawet prezydent, który chciałby, {{2}} zbiorniki na wodę z deszczu były przy każdym domu. Naukowcy uważają, {{3}} najlepsze będą pojemniki podziemne, {{4}} woda z nich nie wyparuje. Taką wodą można podlewać ogródek {{5}} umyć samochód.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "ponieważ"
      },
      {
       "id": "1",
       "answer": "dlatego"
      },
      {
       "id": "2",
       "answer": "żeby"
      },
      {
       "id": "3",
       "answer": "że"
      },
      {
       "id": "4",
       "answer": "bo"
      },
      {
       "id": "5",
       "answer": "albo"
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
     "source": "Na podstawie: https://kobieta.onet.pl/zdrowie/zycie-i-zdrowie/kiedy-truskawki-szkodza/c3e13d3l",
     "passage": "Truskawki to ulubiony owoc Polaków, a robione z nich desery smakują {{ex1}} na świecie. Te owoce mogą być jednak wyjątkowo niebezpieczne, ponieważ to właśnie one wywołują {{ex2}} reakcje alergiczne. {{1}} ze wszystkich objawów alergii będą problemy z oddychaniem. {{2}} owoce pochodzą z plantacji ekologicznych. Chociaż są one trochę {{3}}, to warto je kupować. Kolejnym minusem jest fakt, że truskawki {{4}} się psują. Należy więc pamiętać, żeby nie trzymać ich w lodówce {{5}} niż dwie doby.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "lepiej",
        "najlepiej",
        "lepsze"
       ],
       "answer": "najlepiej"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "silną",
        "silnie",
        "najsilniejsze"
       ],
       "answer": "najsilniejsze"
      },
      {
       "id": "1",
       "options": [
        "Najgroźniej",
        "Najgroźniejszymi",
        "Groźniejsze"
       ],
       "answer": "Najgroźniejszymi"
      },
      {
       "id": "2",
       "options": [
        "Najzdrowsze",
        "Najzdrowiej",
        "Zdrowszy"
       ],
       "answer": "Najzdrowsze"
      },
      {
       "id": "3",
       "options": [
        "drożej",
        "droższe",
        "najdrożej"
       ],
       "answer": "droższe"
      },
      {
       "id": "4",
       "options": [
        "szybko",
        "szybsze",
        "najszybsze"
       ],
       "answer": "szybko"
      },
      {
       "id": "5",
       "options": [
        "najdłużej",
        "długo",
        "dłużej"
       ],
       "answer": "dłużej"
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
     "source": "Na podstawie: https://noizz.pl/podroze/jak-dzialaja-namioty-dmuchane-to-prosty-i-szybki-sposob-na-camping/6jrff5d",
     "match": {
      "ignoreCase": true,
      "collapseSpace": true,
      "stripChars": ".,;:!?…"
     },
     "passage": "Z roku na rok coraz większą popularnością {{ex1}} wakacje na łonie natury. Podobno w nadchodzącym sezonie ludzie najchętniej {{ex2}} wypoczynek pod namiotem.\n\nNa pewno ma na to wpływ pandemia koronawirusa. Obecne doświadczenia związane z pracą on-line {{1}}, że prawdopodobnie już teraz większość Polaków {{2}} miejsca na urlop w kraju, z dala od cywilizacji, a w czerwcu całe rodziny {{3}} w góry lub nad morze.\n\nKażdy doświadczony podróżnik odpowiednio zaplanuje takie wakacje. {{4}} od wyboru odpowiedniego sklepu ze sprzętem turystycznym, później {{5}} pod uwagę wielkość, wagę i cenę potrzebnego ekwipunku.\n\nJednak jak w nadchodzące wakacje w nieco mniej komfortowych warunkach {{6}} sobie ci, którzy do tej pory wypoczywali w hotelach? Jak się przygotować na taki wyjazd? Osoba początkująca powinna kupić namiot, który łatwo i szybko {{7}}, nawet gdy będzie zmęczona po wielu godzinach jazdy samochodem. Noclegi na kempingu będą wspaniałą przygodą, ale {{8}} koszmarem, gdy sprzęt podróżny {{9}} nieodpowiedni. Jeśli jednak się dobrze przygotujemy, to już nigdy nie {{10}} odpoczywać inaczej.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "given": "cieszyć się",
       "answer": "cieszą się"
      },
      {
       "id": "ex2",
       "example": true,
       "given": "wybierać",
       "answer": "będą wybierali"
      },
      {
       "id": "1",
       "given": "powodować",
       "answer": "powodują"
      },
      {
       "id": "2",
       "given": "szukać",
       "answer": "szuka"
      },
      {
       "id": "3",
       "given": "wyjechać",
       "answer": "wyjadą"
      },
      {
       "id": "4",
       "given": "Zacząć",
       "answer": "Zacznie"
      },
      {
       "id": "5",
       "given": "wziąć",
       "answer": "weźmie"
      },
      {
       "id": "6",
       "given": "radzić",
       "answer": "będą radzić",
       "accept": [
        "będą radzili"
       ]
      },
      {
       "id": "7",
       "given": "rozłożyć",
       "answer": "rozłoży"
      },
      {
       "id": "8",
       "given": "stać się",
       "answer": "staną się"
      },
      {
       "id": "9",
       "given": "okazać się",
       "answer": "okaże się"
      },
      {
       "id": "10",
       "given": "chcieć - my",
       "answer": "będziemy chcieli"
      }
     ],
     "pdfNotes": [
      "Examples are printed in the text before their cue: 'cieszą się (cieszyć się)', 'będą wybierali (wybierać)'; item 3 and others repeat the superscript number after the cue (ignored)."
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
      "sentence": "Tomek idzie na spacer z Olą.",
      "underlined": "z Olą",
      "stem": "…………… Tomek idzie na spacer?",
      "shortAnswer": "Z Olą.",
      "answer": "Z kim",
      "shown": true
     },
     "items": [
      {
       "id": "g5.1",
       "number": 1,
       "sentence": "Lubimy rozmawiać o samochodach.",
       "underlined": "o samochodach",
       "stem": "…………… lubicie rozmawiać?",
       "shortAnswer": "O samochodach.",
       "answer": "O czym",
       "accept": []
      },
      {
       "id": "g5.2",
       "number": 2,
       "sentence": "Chodzę na basen dwa razy w tygodniu.",
       "underlined": "dwa razy w tygodniu",
       "stem": "…………… chodzisz na basen?",
       "shortAnswer": "Dwa razy w tygodniu.",
       "answer": "Jak często",
       "accept": [
        "Ile razy w tygodniu"
       ]
      },
      {
       "id": "g5.3",
       "number": 3,
       "sentence": "Powiedziałam jej o tym, bo musi znać prawdę.",
       "underlined": "bo musi znać prawdę",
       "stem": "…………… jej o tym powiedziałaś?",
       "shortAnswer": "Bo musi znać prawdę.",
       "answer": "Po co",
       "accept": [
        "Dlaczego"
       ]
      },
      {
       "id": "g5.4",
       "number": 4,
       "sentence": "Nie lubię lodów truskawkowych.",
       "underlined": "truskawkowych",
       "stem": "…………… lodów nie lubisz?",
       "shortAnswer": "Truskawkowych.",
       "answer": "Jakich",
       "accept": []
      },
      {
       "id": "g5.5",
       "number": 5,
       "sentence": "Turyści spędzają wakacje nad morzem.",
       "underlined": "nad morzem",
       "stem": "…………… turyści spędzają wakacje?",
       "shortAnswer": "Nad morzem.",
       "answer": "Gdzie",
       "accept": []
      }
     ],
     "pdfNotes": [
      "Official key prints the question word with decoration (O czym...?, Jak często...? / Ile razy w tygodniu…?); stored without it, match.stripChars ignores the decoration."
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
      "source": "Filip lubi matematykę.",
      "hint": "przedmiot",
      "answer": "Matematyka to ulubiony przedmiot Filipa.",
      "shown": true
     },
     "items": [
      {
       "id": "g6.1",
       "number": 1,
       "source": "Cieszę się, że dostałam tę nową pracę.",
       "hint": "z",
       "answer": "Cieszę się z tej nowej pracy."
      },
      {
       "id": "g6.2",
       "number": 2,
       "source": "Te dziewczyny mają tyle samo lat.",
       "hint": "wieku",
       "answer": "Te dziewczyny są w tym samym wieku.",
       "accept": [
        "Te dziewczyny są w takim samym wieku."
       ]
      },
      {
       "id": "g6.3",
       "number": 3,
       "source": "Mojemu bratu smakuje pizza.",
       "hint": "lubi",
       "answer": "Mój brat lubi pizzę."
      },
      {
       "id": "g6.4",
       "number": 4,
       "source": "Studenci nie wiedzą, jak napisać to zadanie.",
       "hint": "nie umieją",
       "answer": "Studenci nie umieją napisać tego zadania.",
       "accept": [
        "Studenci nie umieją zrobić tego zadania."
       ]
      },
      {
       "id": "g6.5",
       "number": 5,
       "source": "Często mam bóle pleców.",
       "hint": "bolą",
       "answer": "Często bolą mnie plecy."
      }
     ],
     "pdfNotes": [
      "The 2021-01 key lists model sentences only (no partial-credit rubric text), so items carry no rubricParts."
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
     "source": "Na podstawie: https://kultura.onet.pl/wywiady-i-artykuly/alek-rokosz-jestesmy-odpowiedzialni-za-nasz-swiat/qbrm1rf",
     "passage": "Dziennikarka: Piotrze, jesteś autorem rzeźby Kapsuła czasu. Może {{ex1}} nam coś więcej na ten temat.\n\nPiotr Wolny: Rok temu mój zespół otrzymał propozycję zaprojektowania czegoś dla ludzi z przyszłości. Trochę się przestraszyłem, ale pomyślałem wtedy: trzeba spróbować, {{ex2}} to!\n\nDziennikarka: Mieliście dużo czasu? Kiedy rozpoczęliście przygotowania?\n\nPiotr Wolny: Już następnego dnia. Gdybyśmy od razu nie {{1}} do pracy, nie {{2}} nam skończyć projektu do dziś. Ciągle też powtarzałem moim współpracownikom: „{{3}} razem nie tylko nad kapsułą, ale i nad jej zawartością i proszę was: {{4}} kreatywni!”.\n\nDziennikarka: Co znalazło się w środku?\n\nPiotr Wolny: Wspaniałe rysunki dzieci. Gdybyś je zobaczyła, na pewno by ci {{5}}. Było też kilka opowiadań.\n\nDziennikarka: Na jaki temat? Nie {{6}} mi, że nie przeczytaliście tych tekstów?!\n\nPiotr Wolny: Przeczytaliśmy wszystko. Niestety, często zawierały pesymistyczne wizje przyszłości. Jedna z uczennic wyobraziła sobie, co {{7}}, gdyby każdy z nas {{8}} klona, czyli swoją kopię.\n\nDziennikarka: Czy widziałeś się z dziećmi wcześniej? Zainspirowałeś je?\n\nPiotr Wolny: Tak, uważam, że nie wystarczy powiedzieć uczniom: „{{9}} na nasze następne spotkanie coś ciekawego!”. Najpierw dobrze przygotowaliśmy dzieci do tego zadania. Mówiliśmy: „Niech wasi koledzy z przyszłości {{10}} świat XXI wieku na podstawie rysunków i opowiadań z kapsuły!”. I autorzy prac dobrze to zrozumieli.",
     "blanks": [
      {
       "id": "ex1",
       "example": true,
       "options": [
        "opowiedziałbyś",
        "powiedzcie",
        "opowiadałbyś"
       ],
       "answer": "opowiedziałbyś"
      },
      {
       "id": "ex2",
       "example": true,
       "options": [
        "zrobilibyśmy",
        "robilibyśmy",
        "zróbmy"
       ],
       "answer": "zróbmy"
      },
      {
       "id": "1",
       "options": [
        "wzięlibyśmy się",
        "wzięli się",
        "braliby się"
       ],
       "answer": "wzięli się"
      },
      {
       "id": "2",
       "options": [
        "udałoby się",
        "udawałoby się",
        "udaje się"
       ],
       "answer": "udałoby się"
      },
      {
       "id": "3",
       "options": [
        "Myślmy",
        "Myślelibyśmy",
        "Pomyśleliby"
       ],
       "answer": "Myślmy"
      },
      {
       "id": "4",
       "options": [
        "będziecie",
        "byliby",
        "bądźcie"
       ],
       "answer": "bądźcie"
      },
      {
       "id": "5",
       "options": [
        "się podobałyby",
        "się spodobały",
        "się spodobałyby"
       ],
       "answer": "się spodobały"
      },
      {
       "id": "6",
       "options": [
        "mówiłbyś",
        "powiedz",
        "mów"
       ],
       "answer": "mów"
      },
      {
       "id": "7",
       "options": [
        "stałoby się",
        "się stało",
        "stawało się"
       ],
       "answer": "stałoby się"
      },
      {
       "id": "8",
       "options": [
        "miała",
        "miałaby",
        "miał"
       ],
       "answer": "miał"
      },
      {
       "id": "9",
       "options": [
        "Napiszcie",
        "Piszcie",
        "Pisalibyście"
       ],
       "answer": "Napiszcie"
      },
      {
       "id": "10",
       "options": [
        "poznawaliby",
        "poznają",
        "poznajcie"
       ],
       "answer": "poznają"
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
     "source": "Na podstawie: https://businessinsider.com.pl/technologie/nowe-technologie/paula-januszkiewicz-o-cyberbezpieczenstwie-polka-z-dostepem-do-kodu-zrodlowego/xgyg66e",
     "wordBox": [
      "o",
      "na",
      "od",
      "z",
      "między",
      "po",
      "przed"
     ],
     "distractors": [
      "między"
     ],
     "passage": "Karolina Biały {{ex}} lat zajmuje się bezpieczeństwem w internecie. Szczególnie interesują ją komputerowe systemy bankowe. Przeprowadza w sieci fałszywe ataki {{1}} banki i w ten sposób sprawdza, czy można się do nich łatwo dostać. {{2}} zakończeniu ataku przygotowuje raport, by pokazać słabe strony oprogramowania. Różne instytucje finansowe chętnie korzystają {{3}} jej usług. Muszą bronić się {{4}} złodziejami internetowymi i myśleć {{5}} ochronie pieniędzy swoich klientów.",
     "blanks": [
      {
       "id": "ex",
       "example": true,
       "answer": "od"
      },
      {
       "id": "1",
       "answer": "na"
      },
      {
       "id": "2",
       "answer": "po"
      },
      {
       "id": "3",
       "answer": "z"
      },
      {
       "id": "4",
       "answer": "przed"
      },
      {
       "id": "5",
       "answer": "o"
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
         "wordTarget": 30,
         "prompt": "Pracuje Pani/Pan w polskiej firmie. Na prośbę dyrektora organizuje Pani/Pan przyjęcie powitalne dla nowych pracowników. Proszę napisać zaproszenie do koleżanek/kolegów z pracy na to spotkanie."
        },
        {
         "id": "b",
         "genre": "opowiadanie",
         "wordTarget": 170,
         "prompt": "Proszę napisać opowiadanie pod tytułem „To był mój pierwszy dzień w Polsce”, które wyśle Pani/Pan na konkurs dla cudzoziemców organizowany przez szkołę językową, w której uczy się Pani/Pan języka polskiego.",
         "title": "To był mój pierwszy dzień w Polsce"
        }
       ]
      },
      {
       "id": "II",
       "parts": [
        {
         "id": "a",
         "genre": "e-mail",
         "wordTarget": 60,
         "prompt": "Szuka Pani/Pan miejsca na wakacje dla swojej rodziny. Przeczytała Pani / Przeczytał Pan ogłoszenie: Do wynajęcia domki na lato nad morzem. Kontakt domki@morze.pl Proszę napisać e-mail, w którym przedstawi Pani/Pan swoje oczekiwania oraz zapyta o szczegóły oferty: cena, termin, lokalizacja, wyposażenie."
        },
        {
         "id": "b",
         "genre": "opinia",
         "wordTarget": 140,
         "prompt": "Oglądała Pani / Oglądał Pan ostatnio dobry film. Proszę napisać o nim opinię, którą zamieści Pani/Pan na polskim portalu internetowym Dobre-Kino.pl. Proszę podać tytuł filmu, krótko opisać jego treść i przedstawić swoją ocenę."
        }
       ]
      },
      {
       "id": "III",
       "parts": [
        {
         "id": "a",
         "genre": "ogłoszenie",
         "wordTarget": 30,
         "prompt": "Chce Pani/Pan sprzedać używane biurko komputerowe. Proszę napisać ogłoszenie do gazety."
        },
        {
         "id": "b",
         "genre": "esej",
         "wordTarget": 170,
         "prompt": "Proszę napisać esej szkolny (wypracowanie) na temat: „Przyjaciel ze szkoły to przyjaciel na całe życie”.",
         "title": "Przyjaciel ze szkoły to przyjaciel na całe życie"
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
