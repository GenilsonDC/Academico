function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }

    }),
        this.estoque = estoque;
}

const p1 = new Produto('tesoura', 12, 45);
console.log(p1);