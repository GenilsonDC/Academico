# Genilson do Carmo
# Adaptado de dasafio Banco V2 EXTRA DiO
from abc import abstractclassmethod, abstractproperty, ABC
from datetime import datetime


class ContasIterador:
    def __init__(self, contas):
        self.contas = contas
        self._index = 0

    def __iter__(self):
        return self

    def __next__(self):
        try:
            conta = self.contas[self._index]
            return f'''
            ===========================================
            =    Agência:-------{conta.agencia}
            =    Conta:---------{conta.numConta}
            =    Titular:-------{conta.usuario.nome}
            =    Saldo:---------{conta.saldo:.2f}
            ===========================================
            '''
        except IndexError:
            raise StopIteration
        finally:
            self._index += 1


class Usuario:
    def __init__(self, endereco):
        self.nome = endereco
        self.contas = []
        self.indiceConta = 0

    def realizaTranzacao(self, conta, transacao):
        if len(conta.historico.transacoesDoDia()) >= 2:
            print(f"\nOperação cancelada!\n\tLimite de 3 saques diarios atingido!")
            return

        transacao.registrar(conta)

    def adicionarConta(self, conta):
        self.contas.append(conta)


class PessoaFisica(Usuario):
    def __init__(self, nome, dataNasci, cpf, endereco):
        super().__init__(endereco)
        self.nome = nome
        self.dataNasci = dataNasci
        self.cpf = cpf

    def __repr__(self) -> str:
        return f"<{self.__class__.__name__}: ('{self.nome}', '{self.cpf}')>"


class Conta:
    def __init__(self, numero, usuario):
        self._saldo = 0
        self._numero = numero
        self._agenci = "0012"
        self._usuario = usuario
        self._historico = Historico()


class Historico:
    def __init__(self):
        self._transacoes = []

    @property
    def transacoes(self):
        return self._transacoes

    def adicionarTransacao(self, transacao):
        self._transacoes.append(
            {
                "tipo": transacao.__class__.__name__,
                "valor": transacao.valor,
                "data": datetime.utcnow().strftime("%d-%m-%Y %H:%M:%S"),
            }
        )

    def gerarRelatorio(self, tipoTransacao=None):
        for transacao in self.transacoes:
            if tipoTransacao is None or transacao['tipo'].lower() == tipoTransacao.lower():
                yield transacao

    def transacaoDia(self):
        dataAtual = datetime.utcnow().date()
        transacoes = []
        for transacao in self._transacoes:
            dataTransacao = datetime.strptime(
                transacao['data'], "%d-%M-%Y %H-%M-%S").date()
            if dataAtual == dataTransacao:
                transacoes.append(transacao)
        return transacoes


class Transacao(ABC):
    @property
    @abstractproperty
    def valor(self):
        pass

    @abstractclassmethod
    def registrar(self, conta):
        pass


class Deposito(Transacao):
    def __init__(self, deposito):
        self._deposito = deposito


class Saque(Transacao):
    def __init__(self, deposito):
        self._deposito = deposito


def opcoes():
    opcao = '''
                **** Bem vindo ****
                Selecione uma opção:

                [mv]---Movimentações
                [dp]--------Depósito
                [sq]-----------Saque
                [lc]---Listar Contas
                [nu]----Novo usuário
                [nc]------Nova Conta
                [ex]------------Sair
                -->'''
    return input(opcao)


def depositar(usuarios):
    cpf = input("Digite o seu CPF: ")
    usuario = filtrarUsuario(cpf, usuarios)

    if not usuario:
        print("\n\tOperação cancelada! \n\tCliente não cadastrado!")
        return

    deposito = float(input("Digite o valor que deseja depositar: "))
    transacao = Deposito(deposito)

    conta = recuperarContaUsuario(usuario)
    if not conta:
        return

    usuario.realizaTranzacao(conta, transacao)


def sacar(usuarios):
    cpf = input("Digite o seu CPF: ")
    usuario = filtrarUsuario(cpf, usuarios)

    if not usuario:
        print("\n\tOperação cancelada! \n\tCliente não cadastrado!")
        return

    saque = float(input("Digite o valor que deseja sacar: "))
    transacao = Saque(saque)

    conta = recuperarContaUsuario(usuario)
    if not conta:
        return

    usuario.realizaTranzacao(conta, transacao)


def movimentacoes(usuarios):
    cpf = input("Digite o seu CPF: ")
    usuario = filtrarUsuario(cpf, usuarios)

    if not usuario:
        print("\n\tOperação cancelada! \n\tCliente não cadastrado!")
        return

    conta = recuperarContaUsuario(usuario)
    if not conta:
        return

    print("\n==================== EXTRATO ====================\n")
    extrato = ""
    monvimentacoes = False
    for transacao in conta.historico.gerarRelatorio():
        movimentacoes = True
        extrato += f"\n{transacao['data']}\n{transacao['tipo']}:
        \n\tR$:{transacao['valor']:.2f}"

    if not movimentacoes:
        extrato = "\nNão foram realizadas movimentações recentemente."
    print(extrato)
    print(f"\nSaldo:__________R${conta.saldo:.2f}")
    print("==================================================\n")


def listarContas(contas):
    for conta in ContasIterador(contas):
        saida = f'''
        ===========================================
                     {str(conta)}
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

        usuario = PessoaFisica(nome = nome, dataNasci = dataNasci, cpf = cpf, endereco = endereco)
        usuarios.append(usuario)
        print("\n\t*** Usuario criado com sucesso! ***")


def filtrarUsuario(cpf, usuarios):
    filtrados = [
        usuario for usuario in usuarios if usuario.cpf == cpf]
    return filtrados[0] if filtrados else None


def recuperarContaUsuario(usuario):
    if not usuario.contas:
        print("\n@@@ Cliente não possui conta! @@@")
        return

    # FIXME: não permite cliente escolher a conta
    return usuario.contas[0]


def criarConta(numConta, usuarios, contas):
    cpf = input("Informe seu CPF(*Somente numeros*): ")
    usuario = filtrarUsuario(cpf, usuarios)

    if not usuario:
        print(''' 
              \tOperação cancelada!
              \tUsuário não encontrado!
              \tFaça o cadastro e tente novamente!\n''')
        return
    
    conta = ContaCorrente.novaConta(usuario=usuario, numero = numConta)
    contas.append(conta)
    usuario.contas.append(conta)

    print("\n\t*** Conta criada com sucesso! ***")



def main():
    usuarios = []
    contas = []

    while True:
        opcao = opcoes()

        if opcao == "mv":
            movimentacoes(usuarios)

        elif opcao == "dp":
            depositar(usuarios)

        elif opcao == "sq":
            sacar(usuarios)

        elif opcao == "lc":
            listarContas(contas)

        elif opcao == "nu":
            criarUsuario(usuarios)

        elif opcao == "nc":
            numConta = len(contas) + 1
            criarConta(numConta, usuarios, contas)

        elif opcao == "ex":
            print('Saindo...')
            break

        else:
            print(f"\tOpção inválida\n")


main()
