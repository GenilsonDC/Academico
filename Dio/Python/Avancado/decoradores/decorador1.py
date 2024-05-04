def meuDecorador(funcao):
    def pacote():
        print("Qualquer coisa antes da função()!")
        funcao()
        print("Qualquer coisa depois da função()!")

    return pacote


def mensagem():
    print("Hello world (-_-)")


mensagem = meuDecorador(mensagem)
mensagem()
