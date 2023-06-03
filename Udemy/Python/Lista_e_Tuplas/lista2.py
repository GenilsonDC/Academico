lista1 = [1, 2, 3, 4]
lista2 = ["cinco", "seis", "sete", "oito"]
lista3 = [5, 6, 7, 8]

lista_a = lista1 + lista2
print(lista_a)
# -------------------------
lista_b = lista1 + lista3
print(lista_b)

# Tambem podemos usar o .extend, porem tem sua particularidade

lista_c = lista1.extend(lista2)
print(lista_c)
# O retorno é none, porque o extend nao retorna nada somente atribui
# entao deve ficar
lista1.extend(lista2)
print(f'.extend ', lista1)
# Perceb que o valor do extend ja foi atribuido quando tentamos no lista_c,
#  e acabamos adicionando novamente na lista

# lista_d = lista1 - lista3
# print(lista_d)
