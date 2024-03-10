function enviaFormulario() {
    const form = document.querySelector('.formulario');
    const textos = document.querySelector('.textos');
    const dadosFormulario = [];

    function recebeDados(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        dadosFormulario.push({
            nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value
        })

        textos.innerHTML += `<p>Pessoa : ${nome.value}, peso: ${peso.value}, altura: ${altura.value}</p>`;
    };

    form.addEventListener('submit', recebeDados);
};

enviaFormulario();