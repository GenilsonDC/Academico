lista = ["Genilson", "Guerreiro", "Desenvolvedor",
         "Programador", "Estudante", "Dinamico",]

# testando adicionando um append
lista.append("Flexivel")
i = 0
while i < len(lista):
    for indice in lista:
        i += 1
        print(i-1, indice)

 # outra forma
lista_R = ["Genilson", "Guerreiro", "Desenvolvedor",
           "Programador", "Estudante", "Dinamico",]

lista_R.append("Flexivel")

print("\n\n")

indices = range(len(lista_R))
for indice_R in indices:
    print(indice_R, lista_R[indice_R])
