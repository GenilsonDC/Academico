

function timer() {

    const timerDisplay = document.querySelector('.timerDisplay')
    let seg = 0;
    let timer;


    document.addEventListener('click', function (event) {
        const element = event.target;

        if (element.classList.contains('btnStart')) {
            timerDisplay.classList.remove('redcolor');
            clearInterval(timer);
            iniciaSegundos();
        }
        if (element.classList.contains('btnPause')) {
            clearInterval(timer);
            timerDisplay.classList.add('redcolor');
        }
        if (element.classList.contains('btnReset')) {
            timerDisplay.classList.remove('redcolor');
            clearInterval(timer);
            seg = 0;
            timerDisplay.innerHTML = `00:00:00`;
        }

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


