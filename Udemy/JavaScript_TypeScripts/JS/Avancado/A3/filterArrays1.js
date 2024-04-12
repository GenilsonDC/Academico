const numbers = [18, 42, 1, 14, 5, 2, 7, 8, 9, 10, 11, 12, 13];
const maiorDez = numbers.filter(qualquer => qualquer > 10);
console.log(`\n Maiores que dez: ${maiorDez}`);
const menorDez = numbers.filter(menores => menores < 10);
console.log(` Menores que dez: ${menorDez}`);