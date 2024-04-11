function buildCalc() {
    return {
        display: document.querySelector('.display'),

        startCalc() {
            this.clickButtons();
            this.pushButtonEnter();
        },

        showInDisplay(capValue) {
            this.display.focus();
            this.display.value += capValue;
        },

        pushButtonEnter() {
            this.display.addEventListener("keyup", event => {
                if (event.keyCode === 13) {
                    this.doAccount();
                }
            });
        },

        doAccount() {
            let account = this.display.value;

            try {
                account = eval(account);

                if (!account) {
                    alert(`Operação invalida!`);
                    return;
                }
                this.display.value = account;

            } catch (e) {
                alert(`Operação invalida!`);
                return;

            }
        },

        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            this.display.value = '';
        },


        clickButtons() {
            document.addEventListener('click', (event) => {
                const element = event.target;

                if (element.classList.contains('btnNum')) {
                    this.showInDisplay(element.innerText);
                }
                if (element.classList.contains('btnSimbol')) {
                    this.showInDisplay(element.innerText);
                }
                if (element.classList.contains('btnDel')) {
                    this.delOne();
                }
                if (element.classList.contains('btnClear')) {
                    this.clearDisplay();
                }
                if (element.classList.contains('btnIgual')) {
                    this.doAccount();
                }

            });
        },


    }
};

const calculator = buildCalc();
calculator.startCalc();