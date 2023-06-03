lista = ["Genilson", "Guerreiro", ["Arroz", "Feijao"], "Desenvolvedor"]
lista1 = [1, 2, 3, 4]
lista2 = ["cinco", "seis", "sete", "oito"]
lista3 = [5, 6, 7, 8]

print(*lista)
print(*lista1)
print(*lista2)
print(*lista3)
pri, seg, *_, ult = lista
print(pri, seg, ult)
