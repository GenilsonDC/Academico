""""
split  - divide uma string e retorna uma lista (list)
join   - une uma string
"""

frase = " Genilson # você esta # programador # Estudando programação de Python # "
# o que eu colocar espaço, virgula etc que tenha na frase ele elimina/corta
lista_Split = frase.split(" # ")
print(f"\nsplit", lista_Split)

lista_vazia = []
# R_lista_vazia = []
# L_lista_vazia = []
for i, frase in enumerate(lista_Split):
    lista_vazia.append(lista_Split[i].strip())
print(f"\n sprit", lista_vazia)

# for i, frase in enumerate(lista_Split):
#     R_lista_vazia.append(lista_Split[i].rstrip())
#     print(f"\n Rsprit", R_lista_vazia)

# for i, frase in enumerate(lista_Split):
#     L_lista_vazia.append(lista_Split[i].lstrip())
#     print(f"\n Ssprit", L_lista_vazia)

frases_unidas = "_*_".join(lista_vazia)
print(f"\n", frases_unidas)
