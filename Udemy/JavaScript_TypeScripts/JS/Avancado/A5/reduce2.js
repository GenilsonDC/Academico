const pessoas = [
    { nome: 'Genilson', idade: 28 },
    { nome: 'Alan', idade: 32 },
    { nome: 'Juliana', idade: 19 },
    { nome: 'Juan', idade: 22 },
    { nome: 'Adalberto', idade: 45 },
    { nome: 'Carol', idade: 25 },
];

const maisVelha = pessoas.reduce((acc, valor) => {
    if (acc.idade > valor.idade) { return acc; }
    else {
        return valor;
    }

});
console.log(maisVelha);