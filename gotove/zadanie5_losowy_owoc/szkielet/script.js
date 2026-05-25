const owoce = ["Jabłko", "Banan", "Pomarańcza"];
const wynik = document.querySelector('#wynik');
const btnLosuj = document.querySelector('#btn-losuj');
btnLosuj.addEventListener('click', function() {
    let indeks = Math.floor(Math.random() * owoce.length);
    wynik.textContent = owoce[indeks];
});