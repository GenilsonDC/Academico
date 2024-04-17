function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (taxDesconto) {
    this.preco = this.preco - (this.preco * (taxDesconto / 100));
}

Produto.prototype.aumento = function (taxAumento) {
    this.preco = this.preco + (this.preco * (taxAumento / 100));
}

const p1 = new Produto("Teclado Mecanico", 170);
p1.desconto(100);
console.log(p1);

const p2 = {
    nome: "Mouse",
    preco: 23,
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(15);
console.log(`\n******`, p2);

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'placa mãe AsRock Z790 TAICHI',
    },
    categoria: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'hardware',
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 2230,
    }
});

p3.desconto(10);
console.log("\n-------------", p3);