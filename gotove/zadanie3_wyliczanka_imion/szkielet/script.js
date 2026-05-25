const imiona = ["Anna", "Jan", "Piotr", "Kasia"];
const etykiety = document.querySelectorAll('.etykieta');
const przycisk = document.querySelector('#btn-wypisz');
przycisk.addEventListener('click', function() {
    for (let i = 0; i < etykiety.length; i++) {

        etykiety[i].textContent = imiona[i];
        
    }
});