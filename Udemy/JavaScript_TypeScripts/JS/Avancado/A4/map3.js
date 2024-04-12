const pessoas = [
    { nome: 'Genilson', idade: 28 },
    { nome: 'Alan', idade: 32 },
    { nome: 'Juliana', idade: 19 },
    { nome: 'Juan', idade: 22 },
    { nome: 'Adalberto', idade: 45 },
    { nome: 'Carol', idade: 25 },
];

const newObjct = pessoas.map((obj, index) => {
    const novoPessoas = { ...obj };
    novoPessoas.ID = index;
    return novoPessoas;
});
console.log(`\n \tNOVO objeto com ids\n`, newObjct);
console.log(`\n \tORIGINAL\n `, pessoas);

const ids = pessoas.map((obj, index) => {
    obj.ID = (index + 100) + 1;
    return obj;
});
console.log(`\n\t ******* ORIGINAL COM ids ******* \n`, ids);
console.log(`\n\t  ******* Modificado ******* \n`, pessoas);