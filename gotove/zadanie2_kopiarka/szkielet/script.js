
const przycisk = document.querySelector('#btn-kopiuj');
const elementyListy = document.querySelectorAll('li');

przycisk.addEventListener('click', function() {

    for (let i = 0; i < elementyListy.length; i++) {
        elementyListy[i].textContent = "JS jest super";
    }
    
});