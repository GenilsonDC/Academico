const lista = [21, 33, 2, 45, 9, 11, 61, 80];
const [um, dois, tres, , cinco, , , oito] = lista;
console.log(um, dois, tres, cinco, oito);

const numeros = [[32, 21, 90], [22, 92, 11], [77, 99, 33]];
const [lista1, lista2, lista3] = numeros;
console.log(lista1, lista2[0], lista3[2])

// ********  OBJETOS  **********

const pessoa = {
    nome: 'Genilson',
    sobreNome: 'Carmo',
    idade: 32,
    endereco: {
        cep: 1234433,
        rua: 'Falicidade',
        bairro: 'tristeza'
    }
};

const { nome = '*', sobreNome, endereco: { cep, rua, bairro } } = pessoa;
console.log(nome, sobreNome, rua, bairro, cep)