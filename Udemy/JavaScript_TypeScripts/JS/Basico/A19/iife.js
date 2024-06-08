/* 
(function () {
    conteudo
 })();
 
 */


(function (idade, altura, peso) {
    const sobreNome = 'Carmo';
    function criaNome(nome) {
        return `${nome} ${sobreNome}`
    }
    function mostraNome() {
        console.log(criaNome('Genilson'));
    }
    mostraNome();
    console.log(`Idade: ${idade}, Altura: ${altura}cm, Peso: ${peso}kg`);


})(30, 170, 80);