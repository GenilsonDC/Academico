function funcao(parametro) {
    return `Olá, ${parametro}\n Seja bem vindo!!!`;
}
const valor = funcao(`Genilson`);


function soma(n1, n2) {
    const resultado = n1 + n2;
    return resultado;
}

function multiplicar(n1, n2) {
    const resultado = n1 * n2;
    return resultado;
}


console.log(valor);
console.log(`Soma: `, soma(4, 7))
console.log(`\nMultiplcação:`, multiplicar(4, 7), `\n\n`)

//=====>> Aroow function

const valorArrow = parametro => `***** Arrow Funciton ***** \nOlá ${parametro}\n seja bem vindo!!!`;
console.log(valorArrow(`Genilson`));

const somaArrow = (n1, n2) => `A soma é:${n1 + n2}\n`;
console.log(somaArrow(3, 7));

const multiArrow = (n1, n2) => `A multipicação é: ${n1 * n2}\n`;
console.log(multiArrow(5, 9));