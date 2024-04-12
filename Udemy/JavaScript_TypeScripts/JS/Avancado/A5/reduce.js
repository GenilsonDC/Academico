const numbers = [19, 18, 42, 1, 14, 5, 2, 7, 8, 9, 10, 11, 12, 13];
const total = numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
        acc += num;
    }
    return acc;
}, 0);
console.log(total);