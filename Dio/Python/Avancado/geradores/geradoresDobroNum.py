def MeuGerador(numeros: list[int]):
    for numero in numeros:
        yield numero * 2


for i in MeuGerador(numeros=[25, 3, 4, 6, 7, 9]):
    print(i)
print()
