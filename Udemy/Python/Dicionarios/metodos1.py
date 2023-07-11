# Métodos úteis dos dicionários em Python
# len - quantas chaves
# keys - iterável com as chaves
# values - iterável com os valores
# items - iterável com chaves e valores
# setdefault - adiciona valor se a chave não existe
# copy - retorna uma cópia rasa (shallow copy)
# get - obtém uma chave
# pop - Apaga um item com a chave especificada (del)
# popitem - Apaga o último item adicionado
# update - Atualiza um dicionário com outro

pessoa = {
    'Nome': 'Genilson do Carmo',
    'Sobrenome': 'Silva',
}

print(len(pessoa))  # Retonou a quantidade de chaves/dados
#
# Assim retorna o Dict que haviamos parendido na aula anterior: dict_keys(["nome","Sobrenome"])
print(pessoa.keys())
print(tuple(pessoa.keys()))
print(list(pessoa.keys()))  # ambos retornam somente as chaves nome e sobrenome
#
print(list(pessoa.values()))  # retone os valores das chaves
for valor in pessoa.values():
    print(valor)  # semelhante, mas operacional
#
print(list(pessoa.items()))  # Podemos resumir para --> print((pessoa.items()))
for chave, valor in pessoa.items():
    print(chave, valor)
#
# setdefault - adiciona valor se a chave não existe
# o 7 pode ser qualquer valor, estamos retornando um valor caso "idade" nao exista
pessoa.setdefault("idade", 7)  # pode ser uma string tambem
# como pode-se observar nao existe a chave idade em pessoa entao vai me retornar 7
print(pessoa["idade"])
