const numbers = [18, 42, 1, 14, 5, 2, 7, 8, 9,];
const dobro = numbers.map(n => n * 2);
console.log(`Dobro: `, dobro);


const pessoas = [
    { nome: 'Genilson', idade: 28 },
    { nome: 'Alan', idade: 32 },
    { nome: 'Juliana', idade: 19 },
    { nome: 'Juan', idade: 22 },
    { nome: 'Adalberto', idade: 45 },
    { nome: 'Carol', idade: 25 },
];

const nome = pessoas.map(pe => pe.nome);
console.log("Nomes: ", nome);