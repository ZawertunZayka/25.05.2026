# Cel zadania
Przećwiczenie ukrywania elementów na stronie internetowej po interakcji użytkownika (zdarzeniu). Wykorzystanie do tego właściwości CSS `display`.

## Krótka teoria ("Ściągacz")
- **Wyszukiwanie:** `document.querySelector('#identyfikator')`
- **Reakcja na kliknięcie:** `przycisk.addEventListener('click', funkcja)`
- **Ukrycie elementu:** `element.style.display = "none"`
- *(Opcjonalnie) Pokazanie elementu z powrotem:* `element.style.display = "block"`

## Wymagania / Kryteria Oceny
1. Skrypt poprawnie pobiera z dokumentu główny tytuł (`h1`) oraz przypisany mu przycisk.
2. Zdarzenie `click` jest prawidłowo podłączone do przycisku.
3. Wewnątrz funkcji reagującej na zdarzenie przypisywana jest wartość `"none"` do właściwości `style.display` dla obiektu z tytułem.
4. Kliknięcie faktycznie sprawia, że tekst całkowicie znika ze strony.

## Oczekiwany wynik (Kroki do wykonania)
1. Użyj `querySelector` aby pobrać do dwóch niezależnych zmiennych: element tytułu (`#glowny-tytul`) oraz przycisk (`#btn-ukryj`).
2. Podepnij zdarzenie `click` pod zmienną z przyciskiem.
3. Pomiędzy klamrami wykonującej się funkcji przypisz nową właściwość dla elementu z tytułem.
4. Aby całkowicie ukryć element, po znaku równości wpisz słowo `"none"`.

## Obowiązkowe
Pamiętaj, aby przed oddaniem zadania uzupełnić swoje dane (imię, nazwisko, klasę) w stopce na dole strony HTML!
