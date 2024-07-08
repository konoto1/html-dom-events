const h1DOM = document.querySelector('h1');
const buttonDOM = document.querySelector('button');

function updateText() {
    h1DOM.textContent = 'Now it is GOOD MORNING!';
}

buttonDOM.addEventListener('click', updateText);

