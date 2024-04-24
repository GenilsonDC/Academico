saldo = 200
saque = 20

saldo = saldo - saque
print('Saldo atual:', saldo)

if saldo < saque:
    print("Saldo insuficiente")
else:
    print('saldo =', saldo - saque)
