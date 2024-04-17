const produdtos = { nome: 'Produto 1', preco: 12.45 };
console.log(produdtos);

console.log(`\n********** getOwnPropertyDescriptor ********** \n`,
    Object.getOwnPropertyDescriptor(produdtos, 'nome'))

console.log('\n************** entries **************\n');
const produdtos2 = { nome: 'Produto 2', preco: 12.45, material: 'aluminio' };

for (let [chave, valor] of Object.entries(produdtos2)) {
    console.log(chave, valor)
}