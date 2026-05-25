# Cel zadania
Przećwiczenie mechanizmu losowania wartości ze struktury tablicowej. To najczęstszy sposób na tworzenie gier, wylosowanie pytania w quizie czy wybranie obrazka.

## Krótka teoria ("Ściągacz")
- **Wyszukiwanie:** `document.querySelector('#identyfikator')`
- **Reakcja na kliknięcie:** `przycisk.addEventListener('click', funkcja)`
- **Tworzenie tablicy:** `const nazwaTablicy = ["Jeden", "Dwa", "Trzy"];`
- **Wzór na losowy indeks:** 
  `let wylosowanyIndeks = Math.floor(Math.random() * nazwaTablicy.length);`
- **Pobranie elementu z użyciem zmiennej z wylosowanym indeksem:**
  `let owoc = nazwaTablicy[wylosowanyIndeks];`

## Wymagania / Kryteria Oceny
1. Skrypt posiada własnoręcznie utworzoną tablicę ze stringami (słowami): `["Jabłko", "Banan", "Pomarańcza"]`.
2. Do przycisku z HTML podpięto zdarzenie `click`.
3. Wewnątrz funkcji kliknięcia użyto obiektu `Math.random` w połączeniu z `Math.floor` aby wylosować liczbę całkowitą (indeks).
4. Do nagłówka z wynikiem wpisano wylosowany owoc.

## Oczekiwany wynik (Kroki do wykonania)
1. Utwórz w kodzie tablicę `owoce` i wpisz w niej dokładnie 3 elementy: `["Jabłko", "Banan", "Pomarańcza"]`.
2. Pobierz do zmiennych: główny nagłówek z wynikiem (`#wynik`) oraz przycisk (`#btn-losuj`).
3. Podłącz zdarzenie kliknięcia pod przycisk.
4. Wewnątrz zdarzenia utwórz nową zmienną (np. `indeks`) i przyrównaj ją do wzoru na losowanie (`Math.floor(Math.random() * owoce.length)`).
5. Podmień treść nagłówka (`textContent`) na owoc z Twojej tablicy, do którego dostaniesz się za pomocą wylosowanego przed chwilą indeksu (np. `owoce[indeks]`).

## Obowiązkowe
Pamiętaj, aby przed oddaniem zadania uzupełnić swoje dane (imię, nazwisko, klasę) w stopce na dole strony HTML!
