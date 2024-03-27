function f1(callback) {
    setTimeout(function () {
        console.log('Função 1');
        if (callback) callback();
    }, randonNumbers());
}
function f2(callback) {
    setTimeout(function () {
        console.log('Função 2');
        if (callback) callback();
    }, randonNumbers());
}
function f3(callback) {
    setTimeout(function () {
        console.log('Função 3');
        if (callback) callback();
    }, randonNumbers());
}

function randonNumbers(min = 700, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

f1(f1CallBack);

function f1CallBack() {
    f2(f2CallBack);
};
function f2CallBack() {
    f3(f3CallBack);
}

function f3CallBack() {
    console.log('\tAcabou o callback!')
};