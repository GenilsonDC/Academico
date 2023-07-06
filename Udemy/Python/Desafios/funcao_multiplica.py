def multiplicar(*tudo):  # tudo é um nome qualquer para o argumento que vai receber n parametros
    total = 1
    for numbers in tudo:
        total *= numbers
    return (total)


resultado = multiplicar(2, 7, 1, 2, 3, 4,)
print("\n\t", resultado)


def par_impar(i):
    return (i % 2)


resultado_par_impar = par_impar(resultado)
if resultado_par_impar == 0:
    print("\n\tpar\n")
else:
    print("\n\timpar\n")
