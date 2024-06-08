function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque
    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError("Valor não é aceito, inserir somente numeros!");
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('chave inglesa', 27, 32);
console.log(p1);

p1.estoque = '5s';
console.log(`\n********`, p1.estoque);