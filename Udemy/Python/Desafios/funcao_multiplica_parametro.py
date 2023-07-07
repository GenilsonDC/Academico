def buildMultiplicator(multiplicador):
    def numberMulti(number):
        return multiplicador * number
    return numberMulti


# Crio quaalquer multiplicador aqui
duplicar = buildMultiplicator(2)
triplicar = buildMultiplicator(3)
# Crio/instacio qual nunero quero multiplicar
print(duplicar(7))
print(triplicar(9))
