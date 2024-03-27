function criaPessoa(nome, sobreNome, peso, altura) {
    return {
        nome,
        sobreNome,
        altura,
        peso,

        get nomeCompleto() {
            return `\n${this.nome} ${this.sobreNome}`
        },
        set nomeCompleto(setValor) {
            setValor = setValor.split(' ');
            this.nome = setValor.shift();
            this.sobreNome = setValor.join(' ');
        },


        calculaIMC() {
            const imc = this.peso / (this.altura ** 2) * 10 ** 4;
            return `IMC: ${imc.toFixed(2)}`;
        }
    };
}

const pessoa1 = criaPessoa('Vanessa', 'Linux', 72, 180);
console.log(pessoa1.nomeCompleto, pessoa1.calculaIMC());

pessoa1.nomeCompleto = 'Genilson do Carmo Silva';
console.log(pessoa1.nomeCompleto);