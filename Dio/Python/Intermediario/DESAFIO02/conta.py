# Genilson do Carmo
# Adaptado de dasafio Banco DiO
def opcoes():
    opcao = '''
                **** Bem vindo ****
                Selecione uma opção:

                [mv]---Movimentaçoes
                [dp]--------Deposito
                [sq]-----------Saque
                [lc]---Listar Contas
                [nu]----Novo usuario
                [nc]------Nova Conta
                [ex]------------Sair
                -->'''
    return input(opcao)


def depositar(saldo, deposito, extrato, /):
    if deposito > 0:
        saldo += deposito
        extrato += f'Depósito:_______R${deposito:.2f}\n'
        print(f'Deposito de R${deposito:.2f} realizado!\n')
    else:
        print(f'''
            Operação cancelada!
            {deposito} não é um valor válido!
            Digite valores acima de R$0,00'''
        )

    return saldo, extrato


def sacar(*, saldo, saque, extrato, limiteValorSaque, limiteQuantidadeSaque):
    excedeu_saldo = saque > saldo
    excedeu_limite = saque > limiteValorSaque
    excedeu_qttSaques = limiteQuantidadeSaque == 0

    if excedeu_qttSaques:
        print(f"\tLimite de 3 saques diarios atingido")

    elif excedeu_limite:
        print(f"\tSeu limite maximo de saque é de R$:{limiteValorSaque}")

    elif excedeu_saldo:
        print(f"Saldo insuficiente")

    elif saque > 0:
        saldo -= saque
        limiteQuantidadeSaque -= 1
        extrato += f'Saque:__________R${saque:.2f}\n'
        print(f'''
                Saque de R${saque} realizado com sucesso
                Saldo atual: {saldo}
                ''')
    else:
        print(f'''Operação cancelada {saque} não é um valor válido
              , digite valores acima de R$0,00''')

    return saldo, extrato


def movimentacoes(saldo, /, *, extrato):
    print("\n==================== EXTRATO ====================\n")
    print(''' Não foram realizadas movimentações recentemente.''' if not extrato else extrato)
    print(f"\nSaldo:__________R${saldo:.2f}")
    print("==================================================\n")


def listarContas(contas):
    for conta in contas:
        saida = f'''
        ===========================================
        =    Agência:-------{conta['agencia']}
        =    Conta:---------{conta['numConta']}
        =    Titular:-------{conta['usuario']['nome']}
        ===========================================
        '''
        print(saida)


def criarUsuario(usuarios):
    cpf = input("Informe seu CPF(*Somente numeros*): ")
    usuario = filtrarUsuario(cpf, usuarios)

    if usuario:
        print(f'''
              Operação cancelada!
              Já esxite um usuario para o cpf: {cpf}
              ''')
        return
    else:
        nome = input("Digite seu nome completo: ")
        dataNasci = input("Digite sua data de nascimento(dd/mm/aaaa): ")
        endereco = input("Digite seu endereco(rua, bairro, cidade - UF): ")

        usuarios.append({"cpf": cpf, "nome": nome,
                        "dataNasci": dataNasci, "endereco": endereco})
        print("\n\t*** Usuario criado com sucesso! ***")


def filtrarUsuario(cpf, usuarios):
    filtrados = [
        usuario for usuario in usuarios if usuario["cpf"] == cpf
    ]
    return filtrados[0] if filtrados else None


def criarConta(agencia, numConta, usuarios):
    cpf = input("Informe seu CPF(*Somente numeros*): ")
    usuario = filtrarUsuario(cpf, usuarios)

    if usuario:
        print("\n\t*** Conta criada com sucesso! ***")
        return {"agencia": agencia, "numConta": numConta, "usuario": usuario}
    else:
        print(''' 
              \tOperação cancelada!
              \tUsuário não encontrado!
              \tFaça o cadastro e tente novamente!\n''')


def main():
    agencia = "0001"
    usuarios = []
    contas = []
    extrato = ""
    saldo = 0
    deposito = 0
    saque = 0
    limiteValorSaque = 500
    limiteQuantidadeSaque = 3

    while True:
        opcao = opcoes()
        if opcao == "cs":
            exibirSaldo(saldo)

        elif opcao == "mv":
            movimentacoes(saldo, extrato=extrato)

        elif opcao == "dp":
            deposito = float(input(f"\tdigite o valor do deposito: "))
            saldo, extrato = depositar(saldo, deposito, extrato)

        elif opcao == "sq":
            saque = float(input(f"\tDigite o valor do saque: "))

            saldo, extrato = sacar(
                saldo=saldo,
                saque=saque,
                extrato=extrato,
                limiteValorSaque=limiteValorSaque,
                limiteQuantidadeSaque=limiteQuantidadeSaque,
            )

        elif opcao == "lc":
            listarContas(contas)

        elif opcao == "nu":
            criarUsuario(usuarios)

        elif opcao == "nc":
            numConta = len(contas) + 1
            conta = criarConta(agencia, numConta, usuarios)

            if conta:
                contas.append(conta)

        elif opcao == "ex":
            print('Saindo...')
            break

        else:
            print(f"\tOpção inválida\n")


main()
