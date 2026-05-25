# Cel zadania
Przećwiczenie elementarnej instrukcji warunkowej (`if` / `else`) w połączeniu ze stałą wartością. Skrypt ma podjąć decyzję na podstawie przypisanej "na sztywno" wartości liczbowej.

## Krótka teoria ("Ściągacz")
- **Wyszukiwanie:** `document.querySelector('#identyfikator')`
- **Reakcja na kliknięcie:** `przycisk.addEventListener('click', funkcja)`
- **Instrukcja warunkowa z operatorem mniejszości:**
  ```javascript
  if (liczba < 3) {
      // Zrób coś, gdy prawda
  } else {
      // Zrób coś, gdy fałsz
  }
  ```

## Wymagania / Kryteria Oceny
1. Skrypt posiada zadeklarowaną zmienną lub stałą `ocena` o wartości 2.
2. Zdarzenie `click` jest przypisane do przycisku sprawdzania z dokumentu HTML.
3. Wewnątrz funkcji kliknięcia znajduje się instrukcja warunkowa `if`.
4. Instrukcja sprawdza, czy `ocena` jest mniejsza niż 3.
5. Jeśli tak, pole z certyfikatem zmienia tło na czerwone i wypisuje "Brak zaliczenia".
6. Jeśli nie (blok `else`), pole zmienia tło na zielone i wypisuje "Zaliczono".

## Oczekiwany wynik (Kroki do wykonania)
1. Utwórz zmienną: `let ocena = 2;`.
2. Pobierz do innych zmiennych przycisk sprawdzania oraz pole certyfikatu (`#certyfikat`).
3. Podłącz zdarzenie kliknięcia (`addEventListener`) do przycisku.
4. Wewnątrz zdarzenia stwórz blok `if`, w którego nawiasach okrągłych sprawdzisz, czy `ocena < 3`.
5. Jeżeli to prawda (pomiędzy pierwszymi klamrami `{}`), ustaw tło elementu certyfikatu na czerwone (`"red"`) i zmień jego `textContent` na `"Brak zaliczenia"`.
6. Stwórz blok `else` (dla wszystkich innych przypadków).
7. Jeżeli trafimy do bloku `else`, ustaw tło certyfikatu na zielone (`"green"`) i zmień tekst na `"Zaliczono"`.
8. Zmień w kodzie JS ocenę z 2 na 4 i odśwież stronę, aby zobaczyć drugi wynik!

## Obowiązkowe
Pamiętaj, aby przed oddaniem zadania uzupełnić swoje dane (imię, nazwisko, klasę) w stopce na dole strony HTML!
