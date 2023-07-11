# get - obtém uma chave
# pop - Apaga um item com a chave especificada semelhante ao del, mas ele retorna o valor que foi deletado
# popitem - Apaga o último item adicionado, nao precisa expecificar o item
# update - Atualiza um dicionário com outro

pessoa = {
    'Nome': 'Genilson do Carmo',
    'Sobrenome': 'Silva',
    "sexo": "Masculino"
}

# print(pessoa["idade"]) # retona key error
# retona None e podemos tratar o resultado semelhante ao setdefault o resultado é o mesmo, nao sei a diferenca
print(pessoa.get("idade", "Sem idade definida"))
#
apagou = pessoa.pop('Nome')
print(apagou)
print(pessoa, "\n")

apagou = pessoa.popitem()
print(apagou)
print(pessoa, "\n")

# o update lembra o comando update do SQL ele altera e cria novos valores
pessoa.update(nome="Everton Maradona", idade=17)
print(pessoa, "\n")
tupla = ("Nome", "Romario Peixe"), ("sexo", "M")
pessoa.update(tupla)
print(pessoa, "\n")

for chave, valor in pessoa.items():
    print(chave, valor)
print("\n")
#
lista = ["Altura", 1.98], ["Peso", 140]
pessoa.update(lista)
for chave, valor in pessoa.items():
    print(chave, valor)
print("\n")
