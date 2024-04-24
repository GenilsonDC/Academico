const _velocidade = Symbol('velocidade');
class Carro {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro("Fusca", 1955);

for (let i = 0; i <= 120; i++) {
    c1.acelerar();
    console.log(c1.velocidade, `km/h`);
}

console.log(c1.modelo, c1.ano, `Velocidade:`, c1.velocidade);