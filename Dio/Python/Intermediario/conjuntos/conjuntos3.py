
numeros = {8, 7, 7, 6, 7, 3, 2, 1}

print(numeros)
print('tamanho/len:', len(numeros))

print()

numeros.add(8)
print(numeros)
numeros.add(5)
print(numeros)
numeros.add(4)
print(numeros)
print()

numerosCopy = numeros.copy()
print('Copy:', numerosCopy)
print()
numerosCopy.clear()  # Limpa tudo
print('Clear:', numerosCopy)
print()

print()
numeros.pop()
print('POP:', numeros)
print()

numeros.discard(1)
print('discard:', numeros)
numeros.discard(7)
print('discard:', numeros)
print()

# numeros.remove(1)######### Como não existe o valor sera retornado erro
# print('remove:', numeros)
numeros.remove(5)
print('remove:', numeros)
print()
