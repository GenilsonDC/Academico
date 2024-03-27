function inicioFrase(inicio) {
    function finalFrase(final) {
        return `${inicio} ${final}`;
    }
    return finalFrase;
}
const fraseCompleta = inicioFrase('\n Eu sou o inicio da frase,');
console.log(fraseCompleta('e eu sou o final da frase!\n'));

// ****************************************************************

// function multiplicador(multiplicador) {
//     function multiplcacao(numero) {
//         return numero * multiplicador;
//     }
//     return multiplcacao;
// }

// *************** CLEAR **********************************************

function multiplicador(multiplicador) {
    return function (numero) {
        return numero * multiplicador;
    };
}

const duplica = multiplicador(2);
const triplica = multiplicador(3);
const quintoplica = multiplicador(5);

console.log(`\n\tDuplica: ${duplica(3)}`);
console.log(`\tTriplica: ${triplica(3)}`);
console.log(`\tQuintoplica: ${quintoplica(3)}\n`);