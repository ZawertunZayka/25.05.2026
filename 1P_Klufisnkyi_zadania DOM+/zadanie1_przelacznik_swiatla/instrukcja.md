# Cel zadania
Przećwiczenie elementarnych właściwości DOM. Uczeń pobiera element, przypisuje mu funkcję reagującą na kliknięcie, a następnie modyfikuje naraz dwie jego właściwości - zawartość tekstową (`textContent`) oraz kolor tła w przestrzeni CSS (`style.backgroundColor`).

## Krótka teoria ("Ściągacz")
- **Wyszukiwanie:** `document.querySelector('#identyfikator')`
- **Reakcja na kliknięcie:** `przycisk.addEventListener('click', funkcja)`
- **Zmiana tekstu:** `element.textContent = "Nowy tekst"`
- **Zmiana koloru tła:** `element.style.backgroundColor = "yellow"` (lub inna nazwa koloru po angielsku)
- **Zmiana koloru tekstu:** `element.style.color = "black"`

## Wymagania / Kryteria Oceny
1. Skrypt poprawnie pobiera z dokumentu główny element-żarówkę (np. okrągły div) oraz przycisk.
2. Zdarzenie `click` jest prawidłowo zarejestrowane dla przycisku.
3. Wewnątrz funkcji kliknięcia zmieniony zostaje tekst na samej żarówce (z "Zgaszone" na "Zapalone").
4. Wewnątrz tej samej funkcji zmienione zostaje tło żarówki z ciemnego na żółte.
5. Wewnątrz funkcji zmieniony zostaje też kolor czcionki tekstu żarówki na czarny (aby tekst był widoczny na żółtym tle).

## Oczekiwany wynik (Kroki do wykonania)
1. Użyj `querySelector`, aby złapać do dwóch osobnych zmiennych: przycisk (włącznik) oraz żarówkę (to kółko na górze).
2. Podłącz do zmiennej z przyciskiem reagowanie na kliknięcie.
3. Wewnątrz nowo utworzonej funkcji wpisz komendę zmieniającą tekst (`textContent`) na elemencie żarówki z "Zgaszone" na "Zapalone".
4. Następnie zmień tło żarówki (`style.backgroundColor`) na słowo "yellow".
5. Dodatkowo zmień kolor tekstu wewnątrz żarówki (`style.color`) na słowo "black", żeby napisy na żółtym tle były dobrze widoczne.

## Obowiązkowe
Pamiętaj, aby przed oddaniem zadania uzupełnić swoje dane (imię, nazwisko, klasę) w stopce na dole strony HTML!
