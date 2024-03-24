function retornaHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}


const timer = setInterval(function () {
    console.log('\t', retornaHora())
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 4000);

setTimeout(() => {
    console.log('\n\tGo_odbye *-*')
}, 6000);