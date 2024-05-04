# Genilson do Carmo
# Adaptado de dasafio Banco V2 EXTRA DiO
from abc import ABC, abstractclassmethod, abstractproperty
from datetime import datetime, timezone
from pathlib import Path

ROOT_PATH = Path(__file__).parent


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
            =    Conta:---------{conta.numero}
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
        self.endereco = endereco
        self.contas = []
        self.indiceConta = 0

    def realizaTranzacao(self, conta, transacao):
        if len(conta.historico.transacoesDoDia()) >= 3:
            print(f"\nOperação cancelada!\n\tLimite de 3 transações diarias atingido!")
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
        self._agencia = "0012"
        self._usuario = usuario
        self._historico = Historico()

    @classmethod
    def novaConta(cls, usuario, numero):
        return cls(numero, usuario)

    @property
    def saldo(self):
        return self._saldo

    @property
    def numero(self):
        return self._numero

    @property
    def agencia(self):
        return self._agencia

    @property
    def usuario(self):
        return self._usuario

    @property
    def historico(self):
        return self._historico

    def depositar(self, valor):
        if valor > 0:
            self._saldo += valor
            print(f'''
                    Deposito de R${valor} realizado com sucesso
                    Saldo atual: {self._saldo}
                    ''')
        else:
            print(f'''
                  Operação cancelada!
                  {valor} não é um valor válido.
                  Digite valores acima de R$0,00
                  ''')
            return False

        return True

    def sacar(self, valor):
        saldo = self.saldo
        excedeuSaldo = valor > saldo

        if excedeuSaldo:
            print(f"\nOperação cancelada!\n\tSaldo insuficiente!")

        elif valor > 0:
            self._saldo -= valor
            print(f'''
                    Saque de R${valor} realizado com sucesso
                    Saldo atual: {saldo}
                    ''')
            return True
        else:
            print(f'''
                  Operação cancelada!
                  {valor} não é um valor válido.
                  Digite valores acima de R$0,00
                  ''')

        return False


class ContaCorrente(Conta):
    def __init__(self, numero, usuario, limite=500, limiteSaques=3):
        super().__init__(numero, usuario)
        self._limite = limite
        self._limiteSaques = limiteSaques

    @classmethod
    def novaConta(cls, usuario, numero, limite, limiteSaques):
        return cls(numero, usuario, limite, limiteSaques)

    def sacar(self, valor):
        qtddSaques = len(
            [transacao for transacao in self.historico.transacoes if transacao['tipo']
                == Saque.__name__]
        )
        excedeuLimite = valor > self._limite
        excedeulimiteSaques = qtddSaques >= self._limiteSaques

        if excedeuLimite:
            print("\n\tOperação cancelada!\n\t O valor do valor excedeu o valor limite!")

        elif excedeulimiteSaques:
            print(f"\nOperação cancelada!\n\tLimite de 3 saques diarios atingido!")

        else:
            return super().sacar(valor)

        return False

    def __repr__(self):
        return f"<{self.__class__.__name__}:('{self.agencia}', '{self.numero}', '{self.usuario.nome}')>"

    def __str__(self):
        return f'''
        ===========================================
        =    Agência:-------{self.agencia}
        =    C/C:-----------{self.numero}
        =    Titular:-------{self.usuario.nome}
        ===========================================
        '''


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
                "data": datetime.now(timezone.utc).strftime('%d-%m-%Y %H:%M:%S'),
            }
        )

    def gerarRelatorio(self, tipoTransacao=None):
        for transacao in self._transacoes:
            if tipoTransacao is None or transacao['tipo'].lower() == tipoTransacao.lower():
                yield transacao

    def transacoesDoDia(self):
        dataAtual = datetime.now(timezone.utc).date()
        transacoes = []
        for transacao in self._transacoes:
            dataTransacao = datetime.strptime(
                transacao['data'], '%d-%m-%Y %H:%M:%S').date()
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
    def __init__(self, valor):
        self._valor = valor

    @property
    def valor(self):
        return self._valor

    def registrar(self, conta):
        sucessoTransacao = conta.depositar(self.valor)

        if sucessoTransacao:
            conta.historico.adicionarTransacao(self)


class Saque(Transacao):
    def __init__(self, valor):
        self._valor = valor

    @property
    def valor(self):
        return self._valor

    def registrar(self, conta):
        sucessoTransacao = conta.sacar(self.valor)

        if sucessoTransacao:
            conta.historico.adicionarTransacao(self)


def opcoes():
    opcao = '''
                **** Bem vindo ****
                Selecione uma opção:

                [mv]---Movimentações
                [dp]--------Depósito
                [sq]-----------valor
                [lc]---Listar Contas
                [nu]----Novo usuário
                [nc]------Nova Conta
                [ex]------------Sair
                -->'''
    return input(opcao)


def logTransacao(func):
    def pacote(*args, **kwargs):
        resultado = func(*args, **kwargs)
        dataHora = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
        with open(ROOT_PATH / "log.txt", "a", encoding="utf-8") as arquivoLog:
            arquivoLog.write(f"[{dataHora}] Função: '{
                             func.__name__}' executada com argumentos: {args} e {kwargs}.\n Retornou: {resultado}\n")
            return resultado

    return pacote


@logTransacao
def depositar(usuarios):
    cpf = input("Digite o seu CPF: ")
    usuario = filtrarUsuario(cpf, usuarios)

    if not usuario:
        print("\n\tOperação cancelada! \n\tCliente não cadastrado!")
        return

    valor = float(input("Digite o valor que deseja depositar: "))
    transacao = Deposito(valor)

    conta = recuperarContaUsuario(usuario)
    if not conta:
        return

    usuario.realizaTranzacao(conta, transacao)


@logTransacao
def sacar(usuarios):
    cpf = input("Digite o seu CPF: ")
    usuario = filtrarUsuario(cpf, usuarios)

    if not usuario:
        print("\n\tOperação cancelada! \n\tCliente não cadastrado!")
        return

    valor = float(input("Digite o valor que deseja sacar: "))
    transacao = Saque(valor)

    conta = recuperarContaUsuario(usuario)
    if not conta:
        return

    usuario.realizaTranzacao(conta, transacao)


@logTransacao
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
    movimentacoes = False
    for transacao in conta.historico.gerarRelatorio():
        movimentacoes = True
        extrato += f"\n{transacao['data']}\n{transacao['tipo']
                                             }:\n\tR$:{transacao['valor']:.2f}"

    if not movimentacoes:
        extrato = "\nNão foram realizadas movimentações recentemente."
    print(extrato)
    print(f"\nSaldo:__________R${conta.saldo:.2f}")
    print("==================================================\n")


def listarContas(contas):
    for conta in ContasIterador(contas):
        saida = f'''
                     {str(conta)}
        '''
        print(saida)


@logTransacao
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

        usuario = PessoaFisica(
            nome=nome, dataNasci=dataNasci, cpf=cpf, endereco=endereco)
        usuarios.append(usuario)
        print("\n\t*** Usuario criado com sucesso! ***")


def filtrarUsuario(cpf, usuarios):
    filtrados = [
        usuario for usuario in usuarios if usuario.cpf == cpf]
    return filtrados[0] if filtrados else None


def recuperarContaUsuario(usuario):
    if not usuario.contas:
        print("\n*! Cliente não possui conta!")
        return

    # FIXME: não permite cliente escolher a conta
    return usuario.contas[0]


@logTransacao
def criarConta(numConta, usuarios, contas):
    cpf = input("Informe seu CPF(*Somente numeros*): ")
    usuario = filtrarUsuario(cpf, usuarios)

    if not usuario:
        print(''' 
              \tOperação cancelada!
              \tUsuário não encontrado!
              \tFaça o cadastro e tente novamente!\n''')
        return

    conta = ContaCorrente.novaConta(
        usuario=usuario, numero=numConta, limite=500, limiteSaques=50)
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
