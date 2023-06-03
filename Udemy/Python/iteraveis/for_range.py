# range ==> range(start, stop, step)

numeros_positivos = range(0, 15, 2)
numeros_negativos = range(-15, 0, 1)


for numero_n in numeros_negativos:
    print(f'\t{numero_n}')
for numero_p in numeros_positivos:
    print(f'\t{numero_p}')
