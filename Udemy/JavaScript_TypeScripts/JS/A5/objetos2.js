const pessoa = {
    nome: 'Genilson',
    Sobrenome: 'Carmo',
    idade: 33,

    fala() {
        console.log(`Eu sou ${this.nome} ${this.Sobrenome} e tenho ${this.idade} anos!\n`)

    },
    envelhece() {
        ++this.idade;
    }

}

pessoa.fala();
pessoa.envelhece();
pessoa.fala();
pessoa.envelhece();
pessoa.fala();
pessoa.envelhece();
pessoa.fala();
pessoa.envelhece();
pessoa.fala();