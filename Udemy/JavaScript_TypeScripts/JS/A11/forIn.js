const lista = ['Alho', 'Tomate', 'Cebola', 'Abacate', 'Banana']

for (let i in lista) {
    console.log(lista[i]);
};

const pessoa = {
    nome: 'Genilson',
    sobreNome: 'Carmo',
    idade: 32,
};

for (let key in pessoa) {
    console.log(key, pessoa[key]);
};