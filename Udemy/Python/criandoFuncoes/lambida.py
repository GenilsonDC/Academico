lista = [
    {"Nome": "Genilson", "Sobrenome": "Carmo"},
    {"Nome": "Eduarda", "Sobrenome": "Maringues"},
    {"Nome": "Marlene", "Sobrenome": "Catia"},
    {"Nome": "Angela", "Sobrenome": "Capivari"}
]

# ************* Manual ******************


def ordena(itens):
    return itens["Nome"]


    # return itens["Sobrenome"]
lista.sort(key=ordena)

for itens in lista:
    print(itens)

# ************* Lambda ******************
print("\n************ Lambda ******************\n")

lista.sort(key=lambda item: item["Sobrenome"])
for item in lista:
    print(item)

print("\n************ Lambda2 ******************\n")


def exibir(lista):
    for item1 in lista:
        print(item1)


l1 = sorted(lista, key=lambda item1: item1["Nome"])  # Cria nova Lista

l2 = sorted(lista, key=lambda item1: item1["Sobrenome"])

exibir(l1)
exibir(l2)
