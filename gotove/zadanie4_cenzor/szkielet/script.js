// let ocena = 1;
let oceny = 1;
const przycisk = document.querySelector('#btn-sprawdz');
const certyfikat = document.querySelector('#certyfikat');
przycisk.addEventListener('click', function() {
    if (ocena < 3) {
        
        certyfikat.style.backgroundColor = "red";
        certyfikat.textContent = "Brak zaliczenia";
        
    } else {
        
        certyfikat.style.backgroundColor = "green";
        certyfikat.textContent = "Zaliczono";
        
    }
});