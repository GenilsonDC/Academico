def soma(a, b):
    return a + b


def resultado(a, b, funcao):
    resultado = funcao(a, b)
    print(f"O resultado de soma {a}+{b} = {resultado}")
    print()


resultado(12, 3, soma)
