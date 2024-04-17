const objA = {
    chaveA: 'AAAA'
}
const objB = {
    chaveB: 'BBBB'
}

const objC = new Object();
objC.chaveC = 'CCCC';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA);