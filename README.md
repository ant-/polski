# Polski B1 – trener egzaminu certyfikatowego

Lokalna aplikacja jednostronicowa (czysty HTML/JS/CSS, bez builda i bez internetu) do ćwiczenia pisemnych modułów egzaminu B1:
Słuchanie, Czytanie, Gramatyka, Pisanie. Dane: `data/<id>.js` (schemat: `docs/schema.md`), nagrania: `sources/<id>/audio.mp3`.

## Jak otworzyć

* Najprościej: otwórz `index.html` w przeglądarce (`file://`) – działa bez serwera.
* Lub przez serwer: `tools/serve.sh` (→ http://localhost:8000/). **Uwaga:** zwykły `python3 -m http.server` nie obsługuje nagłówka
  HTTP Range, więc przeglądarka nie potrafi przewijać pliku mp3 i przyciski „▶” przy zadaniach zaczynałyby od 0:00.
  `tools/serve.sh` uruchamia `tools/serve.py` (to samo + Range). Przez `file://` przewijanie działa normalnie.
* Sesje są wypisane w `data/manifest.js`. Fixture deweloperski: `index.html#/s/_example`.

## Jak ćwiczyć

* Odpowiedzi zapisują się od razu w `localStorage` (klucz `polski.app.v1`) – możesz zamknąć kartę i wrócić („Kontynuuj” na stronie głównej).
* „Sprawdź” (zadanie) / „Sprawdź sekcję” pokazuje poprawność, punkty (także 0,5 p., zbiory w dowolnej kolejności, warianty `accept`) i transkrypcje. „Popraw” wraca do edycji.
* Ustawienia (menu u góry): łagodne diakrytyki (uznaje „a” za „ą” – domyślnie wyłączone, bo klucz egzaminacyjny jest ortograficzny), zegar sekcji (domyślnie wyłączony; limity z `structure.md`).
* Nagranie: przyciski „Zapowiedź / ▶ 1 / ▶ 2” przy zadaniu i „▶” przy wypowiedziach (jeśli są znaczniki czasu); dolny pasek – „Tryb egzaminu” odtwarza całe nagranie.
  Czasy nagrań są wykryte automatycznie (`verified: false`) – w razie przesunięć zgłoś je.
* Elementy ocenianych ręcznie (przekształcenia, Pisanie, nietrafione formy w zadaniach „auto + ocena”) są oznaczone „do sprawdzenia przez Claude”.
  Możesz je też ocenić sam („moja ocena”, „uznaj za poprawne”).

## Eksport do oceny przez Claude

1. Wejdź w sesję → **Eksport do oceny (JSON)**. Pobierze się `polski-<id>-do-oceny-<data>.json`.
2. Wyślij ten plik Claude’owi (np. „oceń moje pisanie wg rubryki z pliku”). Na najwyższym poziomie plik ma format z `docs/schema.md` §5.8
   (`exam, task, set, language, level, parts[{id, genre, prompt, wordTarget, wordCount, text}], rubric, instructionsForReviewer`), a dodatkowo:
   `grammarReview[]` (odpowiedzi oceniane ręcznie: źródło, podpowiedź, odpowiedź użytkownika, wzór, rubryka) i `autoGraded[]` + `summary` (wyniki automatyczne).

## Kopia zapasowa i reset

* Ustawienia → „Eksportuj cały postęp (kopia)” / „Importuj kopię…” (zastępuje cały postęp).
* „Resetuj sesję” (w widoku sesji) usuwa odpowiedzi i wyniki tylko tej sesji.

## Pliki

`index.html`, `app/app.js`, `app/style.css`, `tools/serve.sh`, `tools/serve.py`, `data/_example.js` (fixture z `docs/example-2024-02.json` + zadania `[SYNTH]` pokrywające typy bez przykładów w schemacie).
