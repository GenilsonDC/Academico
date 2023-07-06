# x, y, *resto = 1, 5, 4, 7
# print(x, y, resto)


def soma(*args):  # empacotamento sem estipular limite de quantidade de argumentos
    total = 0
    for numero in args:
        print("Soma: ", total, "+", numero)
        total += numero
        print("Total= ", total)
    return total


# Passei os argumentos para a def soma()
somaTudo = soma(2, 45, 4, 3, 32, 1, 12, 11, 10, 33, 50, 60)
# Para exibir o valor da soma, é preciso salvar o resultado em outra variavel
print("\n", somaTudo, "\n")

# **********************************
# Tambem
print("Sem precisar cirar o For: \n")
numeros = 2, 45, 4, 3, 32, 1, 12, 11, 10, 33, 50, 60  # Tupla
somaDesempacotamento = soma(*numeros)
print("\n", somaDesempacotamento, "\n")
# Funao de soma que esta desempacotando os numeros
print(sum(numeros))
