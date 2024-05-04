from pathlib import Path

ROOT_PATH = Path(__file__).parent

# try:
#     with open(ROOT_PATH / "arquivo.txt", "r") as arquivo:
#         print(arquivo.read())
# except FileNotFoundError as exc:
#     print("Não foi possivel abrir o arquivo!")
#     print('\t', exc, '\n')

# try:
#     with open(ROOT_PATH / "testeDiretorio" / "arquivoUTF-8.txt", "w", encoding="utf-8") as arquivo:
#         arquivo.write(
#             "Vou inserir um caractere que não será lido no ASCII ĂĂĂ")
# except IOError as exc:
#     print("Erro ao tentar escrever o arquivo!")
#     print('\t', exc, '\n')

try:
    with open(ROOT_PATH / "testeDiretorio" / "arquivoUTF-8.txt", "r", encoding="ascii") as arquivo:
        print(arquivo.read())
except IOError as exc:
    print("Não foi possivel abrir o arquivo!")
    print('\t', exc, '\n')

except UnicodeDecodeError as exc:
    print("Erro de encoding\n", exc)
