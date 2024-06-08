function calculaIMC() {
    const form = document.querySelector('.formulario');
    const textos = document.querySelector('.textos');

    function calculo(evento) {
        evento.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');



        const pesook = Number(peso.value);
        const alturaok = Number(altura.value);

        if (!pesook) {
            alert('PESO INVALIDO')
            return;
        }
        if (!alturaok) {
            alert('ALTURA INVALIDA')
            return;
        }

        const imc = (pesook / (alturaok * alturaok)) * 10000;

        let tipo = '';
        let saidajs = '';

        if (imc <= 18.5) {
            tipo = 'Abaixo do peso'
            saidajs = 'saidajsOrange'
        }
        else if (imc > 18.5 && imc <= 24.9) {
            tipo = 'Peso normal'
            saidajs = 'saidajsBlue'

        }
        else if (imc >= 25 && imc <= 29.9) {
            tipo = 'Sobrepeso'
            saidajs = 'saidajsOrange'

        }
        else if (imc >= 30 && imc <= 34.9) {
            tipo = 'Obesidade 1'
            saidajs = 'saidajsOrangeRed'

        }
        else if (imc >= 35 && imc <= 39.9) {
            tipo = 'Obesidade 3'
            saidajs = 'saidajsRed'

        }
        else if (imc >= 40) {
            tipo = 'Obesidade 3'
            saidajs = 'saidajsBlack'

        }


        textos.innerHTML = ''
        textos.innerHTML = `<p class="${saidajs}">Seu IMC é: ${imc.toFixed(2)} (${tipo})</p>`

    };

    form.addEventListener('submit', calculo);

}
calculaIMC();