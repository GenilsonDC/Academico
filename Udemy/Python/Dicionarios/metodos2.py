# copy - retorna uma cópia rasa (shallow copy)
# get - obtém uma chave
# pop - Apaga um item com a chave especificada (del)
# popitem - Apaga o último item adicionado
# update - Atualiza um dicionário com outro
import copy

pessoa = {
    'Nome': 'Genilson do Carmo',
    'Sobrenome': 'Silva',
    # aqui os da lista é multavel e ele pode ser alterado na Shalow copy
    'n1': [1, 3, 5],

}

pessoa1 = pessoa.copy()
pessoa1['nome'] = "Eduardo"
pessoa1['n1'][1] = 2  # mudando o indice 1 para numero 2
print(pessoa1, "\n")
# Os dados imutaveis como o nome continua o mesmo,ja o indice 1 foi mudado
print(pessoa, "\n")

# para utilizar o copy.deepcopy precisamos importar a bliblioteca copy
pessoa2 = copy.deepcopy(pessoa)  # Agora é feita uma copia sem afetar o pessoa
pessoa2["nome"] = "Maria Angelica"
pessoa2["n1"] = [4, 6, 8]

print(pessoa2, "\n")
print(pessoa, "\n")
