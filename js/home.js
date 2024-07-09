const h1DOM = document.querySelector('h1');
const buttonDOM = document.querySelector('button');

function updateText() {
    h1DOM.textContent = 'Now it is GOOD MORNING!';
}

buttonDOM.addEventListener('click', updateText);

const introductionDOM = document.getElementsByClassName('introduction')[0];
const btnDOM1 = introductionDOM.getElementsByTagName('button')[0];
const btnDOM2 = introductionDOM.getElementsByTagName('button')[1];
const btnDOM3 = introductionDOM.getElementsByTagName('button')[2];
const btnDOM4 = introductionDOM.getElementsByTagName('button')[3];
const paragraphDOM = document.getElementById('paragraph');



function introduction(n = '_____') {
    paragraphDOM.insertAdjacentHTML('afterBegin', `<p>Hello, my name is ${n}</p>`);
}

btnDOM1.addEventListener('click', () => introduction(btnDOM1.innerText));
btnDOM2.addEventListener('click', () => introduction(btnDOM2.innerText));
btnDOM3.addEventListener('click', () => introduction(btnDOM3.innerText));
btnDOM4.addEventListener('click', () => introduction(btnDOM4.innerText));