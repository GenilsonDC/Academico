// Mesmo não exixtindo o parametro a função definida com a palavra *function* arguments sustenta os argumentos
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log('\nf1: ', total);
} funcao(2, 9, 3, 7)

const funcaoArgs = (...args) => {
    console.log('Args: ', args);
}; funcaoArgs(2, 9, 3, 7)

function funcao2(a, b, c, d, e) {
    console.log('f2: ', a, b, c, d, e)
} funcao2(2, 4, 6)

function funcao3(a, b = 7, c = 0) {
    console.log('f3: ', a + b + c);
} funcao3(2, undefined, 5);

function funcao4({ val1, val2, val3 }) {
    console.log('f4: ', val1, val2, val3);
} funcao4({ val1: 'Genilson', val2: 'Carmo', val3: 34 });

function funcao5([val1, val2, val3]) {
    console.log('f5: ', val1, val2, val3);
} funcao5(['Genilson', 'Carmo', 34]);

function funcao6(operador, acumulador = 0, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log('f6: ', acumulador);
} funcao6('+', undefined, 2, 10, 4);