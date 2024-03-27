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

f1(function () {
    f2(function () {
        f3(function () {
            console.log('\tAcabou o callback!')
        })
    })
});
