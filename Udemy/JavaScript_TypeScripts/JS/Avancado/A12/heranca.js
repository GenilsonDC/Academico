function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumetaPreco = function (valor) {
    this.preco += valor;
}

Produto.prototype.deconto = function (valor) {
    this.preco -= valor;
}

function Camiseta(nome, preco, cor, estoque) {
    Produto.call(this, nome, preco);
    this.cor = cor;
    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta("regata", 45.90, "Branca", 12);
console.log(camiseta);

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
const caneca = new Caneca("Red flame", 32, "Inox", 13);
console.log(caneca);