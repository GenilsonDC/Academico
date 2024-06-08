// Genilson do Carmo
// 705.484.450-52
// 070.987.720-03


function ValidaCPF(entradaCPF) {
    Object.defineProperty(this, "cpfLimpo", {
        get: function () {
            return entradaCPF.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.validador = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.checaSequencia()) return false;

    const cpfSlice = this.cpfLimpo.slice(0, -2);
    const digito1 = this.geraDigito(cpfSlice);
    const digito2 = this.geraDigito(cpfSlice + digito1);

    const cpfResultante = cpfSlice + digito1 + digito2;
    return cpfResultante === this.cpfLimpo;
}

ValidaCPF.prototype.checaSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo;
}

ValidaCPF.prototype.geraDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let dezDigitos = cpfArray.length + 1;
    const countRegressivo = cpfArray.reduce((ac, val) => {
        ac += (dezDigitos * Number(val));//o val é uma String e agora é Number
        dezDigitos--;
        return ac;

    }, 0);

    const digito = 11 - (countRegressivo % 11);
    return digito > 9 ? '0' : String(digito);
}
