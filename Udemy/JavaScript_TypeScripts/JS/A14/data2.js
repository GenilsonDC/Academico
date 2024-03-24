function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Erro! - Não é do tipo data');
    }
    if (!(data)) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}
try {
    const hora = retornaHora();
    console.log(`
    **********************************
    *     --     ${hora}      --     *
    **********************************`)
}
catch (e) {
    console.log('Tratar o erro aqui!')

} finally {
    console.log('\n \t finally - have a nice day')
}

const timer = setInterval(function () {
    console.log(retornaHora())
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 4000);