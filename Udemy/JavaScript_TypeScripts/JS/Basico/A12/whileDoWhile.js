const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let i = 0;

do {
    let n = num[i];

    if (n % 2 === 0) {
        console.log(`O numero ${n} é par, não aparecerá.`)
        i++;
        continue;
    }
    if (n === 9) {
        console.log(`Achei ${n} saindo... =>`)
        i++;
        break;
    }
    console.log(n);
    i++;
} while (i < num.length);