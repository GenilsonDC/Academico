const pessoas = [
    { nome: 'Genilson', idade: 28 },
    { nome: 'Alan', idade: 32 },
    { nome: 'Juliana', idade: 19 },
    { nome: 'Juan', idade: 22 },
    { nome: 'Adalberto', idade: 45 },
    { nome: 'Carol', idade: 25 },
];
const maior5 = pessoas.filter(maior5 => maior5.nome.length >= 5 && maior5.idade > 25);
console.log('\n\t5 letras ou maiore mais de 25 anos\n', maior5);

const menorIgual6 = pessoas.filter(maior5 => maior5.nome.length <= 6);
console.log('\n\t6 letras ou menor\n', menorIgual6);

const finalN = pessoas.filter(n => n.nome.toLowerCase().endsWith('n'));
console.log("\n\tNome termina com n: ", finalN);

const primeiraLetraA = pessoas.filter(a => a.nome.toLowerCase().startsWith('a'));
console.log("\n\tNome começa com a: ", primeiraLetraA);