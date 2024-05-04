def meuDecorador(funcao):
    def pacote(*args, **kwargs):
        print("Qualquer coisa antes da função()!")
        saida = funcao(*args, **kwargs)
        print("Qualquer coisa depois da função()!")
        return saida

    return pacote


@meuDecorador
def mensagem(nome, sobrenome):
    print(f"\n\tHello {nome} {sobrenome} (-_-)\n")
    return nome.upper()


saida = mensagem('Genilson', 'do Carmo')
print(saida)
