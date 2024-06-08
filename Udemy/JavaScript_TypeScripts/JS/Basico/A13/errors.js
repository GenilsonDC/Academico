function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y precisam ser numeros!')
    }
    else
        return x + y
}
try {
    console.log(soma('s', 5));

} catch (err) {
    console.log(err);

}