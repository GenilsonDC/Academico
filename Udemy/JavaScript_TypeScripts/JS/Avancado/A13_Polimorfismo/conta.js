function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.mostraSaldo = function () {
    console.log(`\n \tAg:${this.agencia}\n \tConta:${this.conta}\n \tSaldo:${this.saldo.toFixed(2)}`);
    // return `Ag:${this.agencia}\n Conta:${this.conta}\n Saldo:${this.saldo}`
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.mostraSaldo();
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente para sacar: ${valor}`);
        return;
    }
    this.saldo -= valor;
    this.mostraSaldo();

}

// ******* CP *******
function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
};
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;

// ******* CC *******
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log(`\tSaldo insuficiente para sacar: ${valor}`);
        return;
    }
    this.saldo -= valor;
    this.mostraSaldo();

}

const cc = new ContaCorrente('01', 10, 0, 100);
cc.depositar(20)
cc.sacar(29)
cc.sacar(90)
cc.sacar(1)
cc.sacar(0.2)

const cp = new ContaPoupanca('01', 10, 0);
cp.depositar(20)
cp.sacar(19)
cp.sacar(1.03)