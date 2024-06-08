let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push(`Genilson`)
console.log(a, b, c);


const x = {
    nome: 'Genilson',
    sobreNome: 'Carmo',
};

const y = { ...x };
x.nome = 'Lucas';
console.log(x, y)