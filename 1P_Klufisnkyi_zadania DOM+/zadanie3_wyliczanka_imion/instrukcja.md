# Cel zadania
Nauczenie się, jak pobierać dane z tablicy wewnątrz pętli `for` i wstawiać je na stronę internetową. To podstawowy mechanizm tworzenia list czy wyświetlania wyników z bazy danych.

## Krótka teoria ("Ściągacz")
- **Wyszukiwanie wszystkich elementów:** `document.querySelectorAll('.nazwa-klasy')`
- **Pętla uzupełniająca z tablicą:** w pętli `for` (od `0` do liczby elementów) przypisz `elementyHTML[i].textContent` wartość z `tablicaZDanymi[i]` (ten sam indeks `i` po obu stronach).

## Wymagania / Kryteria Oceny
1. Skrypt posiada zadeklarowaną tablicę z imionami: `["Anna", "Jan", "Piotr", "Kasia"]`.
2. Do zmiennej za pomocą `querySelectorAll` pobrano wszystkie elementy HTML reprezentujące etykiety.
3. Do przycisku z HTML podpięto zdarzenie `click`.
4. Funkcja wywołana po kliknięciu uruchamia pętlę `for`.
5. Pętla wczytuje po kolei imiona z tablicy i wstawia je do odpowiednich, pobranych elementów na stronie.

## Oczekiwany wynik (Kroki do wykonania)
1. Utwórz tablicę i wpisz w niej dokładnie te imiona: `["Anna", "Jan", "Piotr", "Kasia"]`.
2. Utwórz zmienną i użyj w niej funkcji `querySelectorAll`, by złapać wszystkie 4 miejsca na nazwiska (`.etykieta`).
3. Utwórz drugą zmienną z `querySelector`, aby złapać przycisk `#btn-wypisz`.
4. Podepnij zdarzenie kliknięcia pod przycisk.
5. W funkcji wewnątrz zdarzenia utwórz pętlę `for`, idącą od zera do długości kolekcji elementów.
6. W ciele pętli przekaż tekst do elementu: wskaż po lewej stronie obecną etykietkę (używając indeksu z pętli), a po prawej stronie znaku równości przypisz imię z tablicy (również używając indeksu pętli).

## Obowiązkowe
Pamiętaj, aby przed oddaniem zadania uzupełnić swoje dane (imię, nazwisko, klasę) w stopce na dole strony HTML!
