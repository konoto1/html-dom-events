const buttonsDOM = document.querySelectorAll('button');
const minusDOM1 = buttonsDOM[0];
const minusDOM2 = buttonsDOM[1];
const minusDOM3 = buttonsDOM[2];
const plusDOM1 = buttonsDOM[3];
const plusDOM2 = buttonsDOM[4];
const plusDOM3 = buttonsDOM[5];
const resultDOM = document.querySelector('.one > div');

let total = 0;

function minusOne() {
    total--;
    resultDOM.textContent = total;
}
function minusTwo() {
    total -= 2;
    resultDOM.textContent = total;
}
function minusThree() {
    total -= 3;
    resultDOM.textContent = total;
}

function plusOne() {
    total++;
    resultDOM.textContent = total;
}
function plusTwo() {
    total += 2;
    resultDOM.textContent = total;
}
function plusThree() {
    total += 3;
    resultDOM.textContent = total;
}

minusDOM1.addEventListener('click', minusOne);
minusDOM2.addEventListener('click', minusTwo);
minusDOM3.addEventListener('click', minusThree);

plusDOM1.addEventListener('click', plusOne);
plusDOM2.addEventListener('click', plusTwo);
plusDOM3.addEventListener('click', plusThree);

