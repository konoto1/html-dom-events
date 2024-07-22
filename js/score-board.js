const scoresDOM = document.getElementsByClassName('score');
const scoreHomeDOM = (scoresDOM[0].getElementsByTagName('div'))[1];
const scoreGuestDOM = (scoresDOM[0].getElementsByTagName('div'))[3];

const buttonDOM = document.querySelectorAll('.btn button');
const buttonHomeDOM1 = buttonDOM[0];
const buttonHomeDOM2 = buttonDOM[1];
const buttonHomeDOM3 = buttonDOM[2];
const buttonGuestDOM1 = buttonDOM[3];
const buttonGuestDOM2 = buttonDOM[4];
const buttonGuestDOM3 = buttonDOM[5];
const statsDOM = document.getElementsByClassName('stats')[0];

let localData = localStorage.getItem('history');
let scores = [];
let scoreHome = 0;
let scoreGuest = 0;

function start() {
    localData = localStorage.getItem('history');
    if (!scores.includes('home')) {
        scoreHomeDOM.textContent = 0;
        scoreHome = 0;
    }
    if (!scores.includes('guest')) {
        scoreGuestDOM.textContent = 0;
        scoreGuest = 0;
    }
    if (!scores.includes('home') && !scores.includes('guest')) {
        statsDOM.innerHTML = '';
    }
    if (localData !== null && localData !== '[]') {
        scores = JSON.parse(localData);
        statsDOM.innerHTML = '';
        for (const list of scores) {
            if (Object.keys(list)[0] === 'home') {
                statsDOM.insertAdjacentHTML('afterbegin', list.home)
                scoreHome += list.scrHome;
                scoreHomeDOM.textContent = scoreHome;
            }
            if (Object.keys(list)[0] === 'guest') {
                statsDOM.insertAdjacentHTML('afterbegin', list.guest)
                scoreGuest += list.scrGuest;
                scoreGuestDOM.textContent = scoreGuest;
            }
        }
        const statsBtnDOM = statsDOM.querySelectorAll('button');
        for (let i = 0; i < statsBtnDOM.length; i++) {
            statsBtnDOM[statsBtnDOM.length - 1 - i].addEventListener('click', (e) => {
                e.preventDefault();
                scores.splice(i, 1);
                localStorage.setItem('history', JSON.stringify(scores));
                start();
            });
        }
    }
}

start();

buttonHomeDOM1.addEventListener('click', () => plusHome(1));
buttonHomeDOM2.addEventListener('click', () => plusHome(2));
buttonHomeDOM3.addEventListener('click', () => plusHome(3));
buttonGuestDOM1.addEventListener('click', () => plusGuest(1));
buttonGuestDOM2.addEventListener('click', () => plusGuest(2));
buttonGuestDOM3.addEventListener('click', () => plusGuest(3));

function plusHome(a = 0) {
    scoreHome = a;
    scoreHomeDOM.textContent = scoreHome;
    const homeHTML = `<br>(${formatTime(Date.now())}) <b>Home:</b> +${a} <button type = "button">Delete</button>`;
    scores.push({
        home: homeHTML,
        scrHome: scoreHome,
    });

    // statsDOM.insertAdjacentHTML('afterbegin', homeHTML);
    // del();
    localStorage.setItem('history', JSON.stringify(scores));
    // localData = localStorage.getItem('history');
    start();
};
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
    scoreGuest = a;
    scoreGuestDOM.textContent = scoreGuest;
    const guestHTML = `<br>(${formatTime(Date.now())}) <b>Guest:</b> +${a} <button type = "button">Delete</button>`;
    scores.push({
        guest: guestHTML,
        scrGuest: scoreGuest,
    });
    // statsDOM.insertAdjacentHTML('afterbegin', guestHTML);
    // del;
    localStorage.setItem('history', JSON.stringify(scores));
    // localData = localStorage.getItem('history');
    start();
};
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

function formatTime(timeInMs) {
    const date = new Date(timeInMs);
    const y = (date.getFullYear());
    const m = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
    // const d = (date.getDay()); //savaites diena
    const d = (date.getDate() < 10 ? '0' : '') + date.getDate(); // menesio diena
    const h = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const mn = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const s = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
    return `${y}-${m}-${d} ${h}:${mn}:${s}`;
}

// function del() {
//     if (statsDOM.innerHTML !== '') {
//         const statsBtnDOM = statsDOM.querySelectorAll('button');
//         for (let i = 0; i < statsBtnDOM.length; i++) {
//             if (statsBtnDOM[i].classList.value !== 'event') {
//                 statsBtnDOM[i].classList.add('event');

//                 statsBtnDOM[i].addEventListener('click', (e) => {
//                     e.preventDefault();
//                     console.log(`click${statsBtnDOM.length}`);
//                 });
//             }
//         }
//     }
// }

