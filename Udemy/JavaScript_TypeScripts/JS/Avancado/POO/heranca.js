class Eletronicos {
    constructor(tipo) {
        this.tipo = tipo;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.tipo + `já esta ligado`);
            return
        } else {
            this.ligado = true;
        }
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.tipo + `já esta desligado`);
            return
        } else {
            this.ligado = false;

        }
    }
}
class Celular extends Eletronicos {
    constructor(tipo, aparelho, marca, modelo, armazenamento) {
        super(tipo);

        this.aparelho = aparelho;
        this.marca = marca;
        this.modelo = modelo;
        this.armazenamento = armazenamento;
    }
}
class Tablet extends Eletronicos {
    constructor(tipo, aparelho, marca, modelo, armazenamento, chipSim) {
        super(tipo);

        this.aparelho = aparelho;
        this.marca = marca;
        this.modelo = modelo;
        this.armazenamento = armazenamento;
        this.chipSim = chipSim;
    }

    ligarDadosMoveis() {
        if (!this.chipSim) {
            console.log("Esse aparelho não possui essa tecnologia de Chip!");
            return;
        } else {
            console.log("Dados moveis Ligados!");
            return;
        }
    }
}

// const cel1 = new Celular('Telefonia', 'Smartphone', 'samsung', 'fold', 256);
// console.log(cel1);

const tb1 = new Tablet('Telefonia', 'Tablet', 'Apple', 'iPad Pro 2', 256, true);
console.log(tb1);
tb1.ligarDadosMoveis();