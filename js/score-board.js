const scoresDOM = document.getElementsByClassName('score');
const scoreHomeDOM = (scoresDOM[0].getElementsByTagName('div'))[1];
const scoreGuestDOM = (scoresDOM[0].getElementsByTagName('div'))[3];

const buttonDOM = document.getElementsByTagName('button');
const buttonHomeDOM1 = buttonDOM[0];
const buttonHomeDOM2 = buttonDOM[1];
const buttonHomeDOM3 = buttonDOM[2];
const buttonGuestDOM1 = buttonDOM[3];
const buttonGuestDOM2 = buttonDOM[4];
const buttonGuestDOM3 = buttonDOM[5];

const statsDOM = document.getElementsByClassName('stats')[0];


let scoreHome = 0;
let scoreGuest = 0;


function plusHome(a = 0) {
    scoreHome += a;
    scoreHomeDOM.textContent = scoreHome;
    statsDOM.insertAdjacentHTML('afterbegin', `<br><b>Home:</b> +${a}`);
}
// function plusTwoHome() {
//     scoreHome += 2;
//     scoreHomeDOM.textContent = scoreHome;
//     statsDOM.innerHTML = '<br><b>Home:</b> +2' + statsDOM.innerHTML;
// }
// function plusThreeHome() {
//     scoreHome += 3;
//     scoreHomeDOM.textContent = scoreHome;
//     statsDOM.innerHTML = '<br><b>Home:</b> +3' + statsDOM.innerHTML;
// }

function plusGuest(a = 0) {
    scoreGuest += a;
    scoreGuestDOM.textContent = scoreGuest;
    statsDOM.insertAdjacentHTML('afterbegin', `<br><b>Guest</b>: +${a}`);
}
// function plusTwoGuest() {
//     scoreGuest += 2;
//     scoreGuestDOM.textContent = scoreGuest;
//     statsDOM.innerHTML = '<br><b>Guest:</b> +2' + statsDOM.innerHTML;
// }
// function plusThreeGuest() {
//     scoreGuest += 3;
//     scoreGuestDOM.textContent = scoreGuest;
//     statsDOM.innerHTML = '<br><b>Guest:</b> +3' + statsDOM.innerHTML;
// }


buttonHomeDOM1.addEventListener('click', () => plusHome(1));
buttonHomeDOM2.addEventListener('click', () => plusHome(2));
buttonHomeDOM3.addEventListener('click', () => plusHome(3));
buttonGuestDOM1.addEventListener('click', () => plusGuest(1));
buttonGuestDOM2.addEventListener('click', () => plusGuest(2));
buttonGuestDOM3.addEventListener('click', () => plusGuest(3));

