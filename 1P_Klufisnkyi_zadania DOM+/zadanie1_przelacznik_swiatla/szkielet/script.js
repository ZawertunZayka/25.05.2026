const zarowka = document.querySelector('#zarowka');
const przycisk = document.querySelector('#btn-wlacz');

przycisk.addEventListener('click', function() {
    zarowka.textContent = "Zapalone";
    zarowka.style.backgroundColor = "yellow";
    zarowka.style.color = "black";
    
});