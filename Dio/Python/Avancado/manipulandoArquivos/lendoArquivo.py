file = open("Avancado/manipulandoArquivos/arquivos/ClienteTransacao.csv", "r")

print(file.read())  # Lê tudo respeitando a formatação
print()

# ****************************************************
print(file.readline())  # Lê linha a linha
while linha := file.readline():
    print(linha)
print()

# ****************************************************
print(file.readlines())  # Separar numa lista pra fazer pre processamento
print()
file.close()
