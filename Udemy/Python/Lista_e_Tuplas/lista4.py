import os
lista = ["Genilson", "Guerreiro", "Desenvolvedor"]
lista.append("Flexivel")

lista_enumerada = list(enumerate(lista))  # Como tuplas tem um melhor
# desempenho a saida sera(m) tupla(as)
# [(0, 'Genilson'), (1, 'Guerreiro'), (2, 'Desenvolvedor'), (3, 'Flexivel')]
os.system("clear")
print(f"tuplas: ", lista_enumerada)

for item in enumerate(lista):
    indice = nome = item
    print(f"tuplas 2:", indice, nome)

# Mesma coisa mas dentro das facilidades do Python
for indice, nome in enumerate(lista):
    print(f"Mais curto: ", indice, nome)

for indice, nome in enumerate(lista):
    print(f"puxando indice junto: ", indice, nome, lista[indice])
