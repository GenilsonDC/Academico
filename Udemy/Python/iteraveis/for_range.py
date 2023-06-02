# range ==> range(start, stop, step)

numeros_positivos = range(0, 15, 2)
numeros_negativos = range(-1, -15, -1)

print("\nnumeros negativos")
for numero_n in numeros_negativos:
    print(f'\t{numero_n}')
print("\nnumeros positivos")
for numero_p in numeros_positivos:
    print(f'\t{numero_p}')
