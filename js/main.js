const body = document.querySelector('body')
const input = document.querySelector('.input');
const label = document.querySelector('.lable');
const circle = document.querySelector('.circle');



input.checked = JSON.parse(localStorage.getItem('mode'));
changeMode();
function changeMode() {
    if (input.checked) {
        body.style.background = 'black';
    } else {
        body.style.background = 'white';
    }
}

input.addEventListener('input', () => {
    changeMode();
    save();
});


function save() {
    localStorage.setItem('mode', JSON.stringify(input.checked));
    
}