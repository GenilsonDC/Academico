function pessoa(nome, sobrenome, cpf) {
    return { nome, sobrenome, cpf };
}
const pessoa1 = pessoa('Genilson', 'Carmo', '12332112333');
const pessoa2 = pessoa('Julia', 'Venancio', '12332112333');
const pessoa3 = pessoa('Aristeu', 'Arruda', '12332112333');

console.log(`\t ***Pessoa 1***\nNome:${pessoa1.nome}
\nSobrenome: ${pessoa1.sobrenome}\nCPF: ${pessoa1.cpf} 
\n \t ***Pessoa 2***\nNome:${pessoa2.nome}\nSobrenome: ${pessoa2.sobrenome}\nCPF: ${pessoa2.cpf}`)