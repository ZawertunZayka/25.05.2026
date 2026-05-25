# Cel zadania
Przećwiczenie elementarnego użycia pętli `for` do masowego wypisywania tych samych danych do wielu miejsc w HTML na podstawie tablicy lub kolekcji elementów.

## Krótka teoria ("Ściągacz")
- **Wyszukiwanie wielu elementów:** `document.querySelectorAll('li')` (Uwaga na wyraz **All**!)
- **Reakcja na kliknięcie:** `przycisk.addEventListener('click', funkcja)`
- **Pętla uzupełniająca elementy:** użyj `for` z licznikiem `i` od `0` do `elementy.length`, a w środku ustaw `elementy[i].textContent` na wybrany przez Ciebie tekst (ten sam dla każdej linijki).

## Wymagania / Kryteria Oceny
1. Skrypt poprawnie pobiera z dokumentu przycisk oraz WSZYSTKIE tagi `<li>` używając metody `querySelectorAll`.
2. Zdarzenie `click` jest prawidłowo zarejestrowane dla przycisku kopiowania.
3. Wewnątrz funkcji kliknięcia użyto pętli `for`, która iteruje od 0 do długości kolekcji elementów.
4. Wewnątrz pętli podmieniany jest `textContent` każdego elementu `<li>` na tekst `"JS jest super"`.

## Oczekiwany wynik (Kroki do wykonania)
1. Złap przycisk do skopiowania używając `querySelector`.
2. Użyj `querySelectorAll`, aby złapać do innej zmiennej wszystkie elementy o tagu `li`. Pamiętaj - to stworzy listę (kolekcję) elementów.
3. Podepnij pod przycisk reagowanie na kliknięcie (`addEventListener`).
4. Wewnątrz funkcji przycisku stwórz pętlę `for`, w której zmienna `i` startuje od zera, i wykonuje się dopóki `i` jest mniejsze od długości Twojej listy z kroku 2 (`twojaZmienna.length`).
5. Pomiędzy klamrami pętli odwołaj się do aktualnego elementu za pomocą nawiasów kwadratowych: `twojaZmienna[i]` i zmień mu zawartość (`textContent`) na zdanie `"JS jest super"`.

## Obowiązkowe
Pamiętaj, aby przed oddaniem zadania uzupełnić swoje dane (imię, nazwisko, klasę) w stopce na dole strony HTML!
