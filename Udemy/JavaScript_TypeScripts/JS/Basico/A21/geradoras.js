function* geradora1() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora2() {
    yield* geradora1();
    yield 3
    yield 4;
    yield 'fim';
}

const g2 = geradora2();

for (let i of g2) {
    console.log(i);
}

function* geradora3() {
    yield function () {
        console.log("Geradora3 Função 1 Aqui!");
    };
    //Qualquer outro codigo
    console.log("\n*******************");

    yield function () {
        console.log("Geradora3 Função 2 Aquiii !");
    };
}

const g3 = geradora3();
const f1 = g3.next().value;
const f2 = g3.next().value;

f1();
f2();   