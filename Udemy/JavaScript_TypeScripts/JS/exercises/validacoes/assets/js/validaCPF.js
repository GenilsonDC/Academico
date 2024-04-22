// Genilson do Carmo
// 705.484.450-52
// 070.987.720-03

class ValidaCPF {
    constructor(entradaCPF) {
        Object.defineProperty(this, 'soNumerosCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: entradaCPF.replace(/\D+/g, '')
        });
    }

    checaSequencia() {
        return this.soNumerosCPF[0].repeat(this.soNumerosCPF.length) === this.soNumerosCPF;
    }



    geraCPFParcial() {
        const cpfLimpo = this.soNumerosCPF.slice(0, -2);
        const digito1 = ValidaCPF.geraDigitos(cpfLimpo);
        const digito2 = ValidaCPF.geraDigitos(cpfLimpo + digito1);
        this.cpfVerificado = cpfLimpo + digito1 + digito2;
    }

    static geraDigitos(cpfLimpo) {
        let total = 0;
        let dezDigitos = cpfLimpo.length + 1;

        for (let i of cpfLimpo) {
            total += dezDigitos * Number(i);
            dezDigitos--;
        }

        const digito = 11 - (total % 11);
        return digito >= 9 ? '0' : String(digito);
    }

    validador() {
        if (this.soNumerosCPF === 'undefined') return false;
        if (!this.soNumerosCPF) return false;
        if (this.soNumerosCPF.length !== 11) return false;
        if (this.checaSequencia()) return false;
        this.geraCPFParcial();

        return this.cpfVerificado === this.soNumerosCPF;
    }
}

