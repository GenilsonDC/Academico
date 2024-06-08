function criaPessoa(nome, sobreNome, peso, altura) {
    return {
        nome,
        sobreNome,
        altura,
        peso,

        nomeCompleto() {
            return `\n${this.nome} ${this.sobreNome}`
        },

        tipoProfissao(profissao) {
            return `\nprofissão: ${profissao}`
        },

        calculaIMC() {
            const imc = this.peso / (this.altura ** 2) * 10 ** 4;
            return `\nIMC: ${imc.toFixed(2)}`;
        }
    };
}

const pessoa1 = criaPessoa('Genilson', 'Carmo', 80, 170);
console.log(pessoa1.nomeCompleto(), pessoa1.tipoProfissao('Developer'), pessoa1.calculaIMC());

const pessoa2 = criaPessoa('Maria', 'Tereza', 69, 170);
console.log(pessoa2.nomeCompleto(), pessoa2.tipoProfissao('Médica'), pessoa2.calculaIMC());
