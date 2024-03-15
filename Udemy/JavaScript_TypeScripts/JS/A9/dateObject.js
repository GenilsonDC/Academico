function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}
function datasTeste(data) {
    const seg = zeroEsquerda(data.getSeconds());
    const min = zeroEsquerda(data.getMinutes());
    const hora = zeroEsquerda(data.getHours());
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());

    return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = datasTeste(data);
console.log(`tempo: ${dataBrasil}`)