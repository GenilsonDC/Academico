
const texts = document.querySelector('.texts h1');
const timerDisplay = document.querySelector('.timerDisplay')
const btnStart = document.querySelector('#btnStart')
const btnPause = document.querySelector('#btnPause')
const btnReset = document.querySelector('#btnReset')

const timer = setInterval(function () {
    retornaHora();
}, 1000);



btnStart.addEventListener('click', function (event) {
    setInterval(function () {
        timerDisplay.innerHTML = `${retornaHora()}`
    });
});

btnPause.addEventListener('click', function (event) {
    setTimeout(function () {
        clearInterval(retornaHora());
        timerDisplay.innerHTML = `<h1 class="redcolor">${retornaHora()}</h1>`
    });
});

btnReset.addEventListener('click', function (event) {
    timerDisplay.innerHTML = `00:00:00`;
});

function retornaHora() {
    const data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        timeStyle: 'medium'
    });
};






