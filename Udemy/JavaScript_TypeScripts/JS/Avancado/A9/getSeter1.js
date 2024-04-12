function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '')
            nome = valor;
        }
    };
}

const produto = criaProduto('Calculadora');
console.log(produto.nome);

produto.nome = "Tesoura coisa. nova";
console.log(`\n******** `, produto.nome);
