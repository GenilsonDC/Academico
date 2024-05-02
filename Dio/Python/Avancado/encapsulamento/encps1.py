class Conta:
    def __init__(self, agencia, conta, saldo=0):
        self.agencia = agencia
        self.conta = conta
        self._saldo = saldo

    def depositar(self, valor):
        # lógica
        self._saldo += valor

    def sacar(self, valor):
        # lógica
        self._saldo -= valor

    def consultaSaldo(self):
        # lógica
        return self._saldo


conta = Conta(1001, 123, saldo=200)
conta.depositar(50)

print(conta.consultaSaldo())
