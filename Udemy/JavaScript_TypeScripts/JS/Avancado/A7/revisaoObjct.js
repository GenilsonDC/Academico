function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Genilson', 'Carmo');
const p2 = new Pessoa('Eduardo', 'Salamanca');

console.log(p1);
console.log(p2);