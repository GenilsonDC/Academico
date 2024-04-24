class ValidaCampos {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', event => {
            this.handleSubmit(event);
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.isValidInputs();
        const passwordValid = this.isValidPassword();

        if (isValid && passwordValid) {
            alert("🚀 Enviado!");
            this.formulario.submit();
        }
    }

    isValidInputs() {
        let valid = true;

        for (let errorTexts of this.formulario.querySelectorAll(".errorText")) {
            errorTexts.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const labelCall = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.buildError(campo, `Prencha o campo "${labelCall}" corretamente! `);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid

    }
    isValidPassword() {
        let valid = true;

        const senha = this.formulario.querySelector(".senha");
        const senharepeat = this.formulario.querySelector(".senharepeat");

        if (senha.value !== senharepeat.value) {
            valid = false;
            this.buildError(senha, 'As senhas devem ser iguais!');
            this.buildError(senharepeat, 'As senhas devem ser iguais!');
        }
        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.buildError(senha, 'A senha deve estar entre 6 e 12 caracteres!');
            this.buildError(senharepeat, 'A senha deve estar entre 6 e 12 caracteres!');
        }
        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.validador()) {
            this.buildError(campo, "CPF inválido!");
            return false;
        }
        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.buildError(campo, "O nome do usuário deve conter de 3 a 12 caracteres!");
            valid = false;
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.buildError(campo, "O nome de usuário só pode conter letras e/ou números!");
            valid = false;
        }
        return valid;
    }

    buildError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('errorText');
        campo.insertAdjacentElement('afterend', div);

    }
};

const valida = new ValidaCampos();