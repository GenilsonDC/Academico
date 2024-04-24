saldo = 0
deposito = 0
vs = 0
saque = 0
while True:
    opcao = input(f'''
                **** Bem vindo ****
                Selecione uma opção:

                [1]-Consultar saldo
                [2]--------Deposito
                [3]-----------Saque
                [0]------------Sair

                ''')

    if opcao == "1":
        print(f"Saldo: {saldo}")

    elif opcao == "2":
        deposito = float(input(f"\tdigite o valor do deposito: "))
        saldo += deposito
        print(f"Saldo: {saldo}")

    elif opcao == "3":
        if vs == 3:
            print(f"\tLimite de 3 saques diarios atingido")
        else:
            saque = float(input(f"\tDigite o valor do saque: "))
            if saque > 500:
                print(f"\tSeu limite maximo de saque é de R$:500,00")
            elif saldo < saque:
                print(f"Saldo insuficiente")
            else:
                saldo -= saque
                vs += 1
                print(f'''
                      Saque de R${saque} realizado com sucesso
                      Saldo atual: {saldo}
                      ''')

    elif opcao == "0":
        print('Saindo...')
        break

    else:
        print(f"Opção invalida")
