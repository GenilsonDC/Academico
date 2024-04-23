saldo = 100
saque = float(input('Digite o valor que quer sacar: '))

if saldo >= saque:
    print('Saque realizado!')
    saldo = saldo - saque
    print('saldo:', saldo)
else:
    print('saldo insuficiente')
    print('saldo:', saldo)
