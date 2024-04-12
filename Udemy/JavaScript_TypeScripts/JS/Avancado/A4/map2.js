const pessoas = [
    { nome: 'Genilson', idade: 28 },
    { nome: 'Alan', idade: 32 },
    { nome: 'Juliana', idade: 19 },
    { nome: 'Juan', idade: 22 },
    { nome: 'Adalberto', idade: 45 },
    { nome: 'Carol', idade: 25 },
];

const removeNomeFunc = pessoas.map(function (soIdade) {
    return { idade: soIdade.idade }
});
console.log(`\n\tFunction longa: `, removeNomeFunc);


const mostraIdade = pessoas.map(mostraIdd => mostraIdd.idade);
console.log("\n\n\tTeste: ", mostraIdade, "\n\tretornou um array!")

const removeNome = pessoas.map(soIdade => ({ idade: soIdade.idade }));
console.log(`\n`, removeNome);

