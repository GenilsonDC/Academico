//Soma do Dobro de todos os numeros pares
const numbers = [19, 18, 42, 1, 14, 5, 2, 7, 8, 9, 10, 11, 12, 13];
const numPares = numbers
    .filter(par => par % 2 === 0)
    .map(dobro => dobro * 2)
    .reduce((acc, cur) => acc + cur)

console.log(numPares);