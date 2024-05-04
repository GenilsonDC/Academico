# FileNotFoundError: Quando o arquivo que está sendo aberto não pode ser encontrado no diretório especifico
# PermissionError: Quando ocorre uma tentativa de abrer um arquivo sem as permições adequadas de W/R
# iOErro: Quando ocorre um erro geral de E/S ao trabalhar com o arquivo, como problemas de permissão, falta de espaça em disco entre outro.
# UnicodeDecodeError: Quando ocorre um erro ao tentar decodificar os dados de um arquivo de texto usando uma codificação(UTF-8) inadequada.
# UnicodeEncondeError: Quando ocorre um erro ao tentar codificar dados em uma detertminada codificação ao gravar em um arquivo de texto.
# IsADirectoryError: Quando é feita uma tentativa de abrir um diretório em vez de um arquivo de texto.
from pathlib import Path

ROOT_PATH = Path(__file__).parent

# FileNotFoundError
# try:
#     arquivo = open("caminho/arquivo.txt")
# except FileNotFoundError as ex:
#     print("Arquivo não encontrado!")
#     print('\t', ex, '\n')

try:
    file = open(ROOT_PATH / "testeDiretorio" /
                "testeArquivoDiretorio.txt", "r")
except FileNotFoundError as ex:
    print("Arquivo não encontrado!")
    print('\t', ex, '\n')
except IsADirectoryError as ex:
    print("Não foi possivel abrir o arquivo!")
    print('\t', ex, '\n')
except IOError as ex:
    print("Erro de entrada e saida!")
    print("\t", ex, "\n")
except Exception as ex:
    print("Algum erro aconteceu!")
    print("\t", ex, "\n")
