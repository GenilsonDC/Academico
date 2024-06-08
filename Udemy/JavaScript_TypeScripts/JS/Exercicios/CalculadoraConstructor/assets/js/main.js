function Calculator() {
    this.display = document.querySelector('.display');

    this.captureClick = () => {
        document.addEventListener("click", event => {
            const element = event.target;
            if (element.classList.contains('btnNum')) this.addNumDisplay(element);
            if (element.classList.contains('btnSimbol')) this.addNumDisplay(element);
            if (element.classList.contains('btnDel')) this.delNumDisplay();
            if (element.classList.contains('btnClear')) this.clearDisplay();
            if (element.classList.contains('btnIgual')) this.doMath();
        });
    };
    this.startCalc = () => {
        this.captureClick();
        this.captureEnter();
    }
    this.addNumDisplay = element => {
        this.display.value += element.innerText;
        this.display.focus();
    }
    this.clearDisplay = () => this.display.value = '';
    this.delNumDisplay = () => this.display.value = this.display.value.slice(0, -1);
    this.captureEnter = () => {
        document.addEventListener('keyup', event => {
            if (event.keyCode === 13) {
                this.doMath();
            }
        })
    }
    this.doMath = () => {
        try {
            const account = eval(this.display.value);
            if (!account) {
                alert('Operação invalida!\n invalid operation!')
                return;
            }
            this.display.value = account;
        }
        catch (error) {
            alert('Operação invalida!\n invalid operation!');
            return;
        }
    }

}

const calculator = new Calculator();
calculator.startCalc();