
pessoa = {}
pessoa["nome"] = "Genilson do Carmo"
pessoa["Sobrenome"] = "Silva"

print(pessoa)  # Mostra o conteudo da chave
# print(pessoa["nome"])  # Acesso a chave
# del pessoa["Sobrenome"]  # Comando para apagar oconteudo
# print(pessoa)  # Confirmamos que o sobrenome foi apagado

# *** Também posso criar chaves
pessoa1 = {}
chave = "nome"

pessoa1[chave] = "Erica Maria"

print(pessoa1[chave])

# Tambem podemos acessar com uma condicao e tratamento
if pessoa.get("Sobrenome") is None:  # Se for  none retornamos uma msgm personalizada
    print("Not ecxiste")
else:

    print("o sobrenome existente é: ", pessoa["Sobrenome"])
