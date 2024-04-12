function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, "estoque", {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: true
    });
}

const p1 = new Produto('chave inglesa', 27, 32);
console.log(Object.keys(p1));

for (let i in p1) {
    console.log('**********\n', i);
}