def meuDecorador(funcao):
    def pacote(*args, **kwargs):
        print("Qualquer coisa antes da função()!")
        funcao(*args, **kwargs)
        print("Qualquer coisa depois da função()!")

    return pacote


@meuDecorador
def mensagem(nome):
    print(f"\n\tHello {nome} (-_-)\n")


mensagem('Genilson')
