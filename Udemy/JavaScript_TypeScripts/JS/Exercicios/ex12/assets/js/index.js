

function timer() {

    const timerDisplay = document.querySelector('.timerDisplay')
    const btnStart = document.querySelector('.btnStart')
    const btnPause = document.querySelector('.btnPause')
    const btnReset = document.querySelector('.btnReset')
    let seg = 0;
    let timer;

    btnStart.addEventListener('click', function (event) {
        clearInterval(timer);
        iniciaSegundos();
        timerDisplay.classList.remove('redcolor');

    });

    btnPause.addEventListener('click', function (event) {
        clearInterval(timer);
        timerDisplay.classList.add('redcolor');
    });

    btnReset.addEventListener('click', function (event) {
        clearInterval(timer);
        seg = 0;
        timerDisplay.innerHTML = `00:00:00`;
        timerDisplay.classList.remove('redcolor');
    });

    function retornaSegundos(seg) {
        const data = new Date(seg * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    };

    function iniciaSegundos() {
        timer = setInterval(function () {
            seg++;
            timerDisplay.innerHTML = `${retornaSegundos(seg)}`
        }, 1000);

    };



} timer();


