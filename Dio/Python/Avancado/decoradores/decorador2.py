def meuDecorador(funcao):
    def pacote():
        print("Qualquer coisa antes da função()!")
        funcao()
        print("Qualquer coisa depois da função()!")

    return pacote


@meuDecorador
def mensagem():
    print("\n\tHello world (-_-)\n")


mensagem()
