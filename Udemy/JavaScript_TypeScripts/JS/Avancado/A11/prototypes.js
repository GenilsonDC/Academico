function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
};

const p1 = new Pessoa('Genilson', 'Carmo');
const p2 = new Pessoa('Jandira', 'Costa');

console.log(p1);
console.log(p2);