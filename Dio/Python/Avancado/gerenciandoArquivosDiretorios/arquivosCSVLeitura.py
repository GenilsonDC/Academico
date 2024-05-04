import csv
from pathlib import Path

ROOT_PATH = Path(__file__).parent

try:
    with open(ROOT_PATH / "testeDiretorio" / "testeEscrita.csv", newline="") as arquivoCSV:
        leitor = csv.DictReader(arquivoCSV)
        for row in leitor:
            print(f'id: {row["id"]} \nnome: {
                  row["nome"]} {row["sobrenome"]}\n')

except IOError as exc:
    print("Não foi possivel ler o arquivo!")
    print('\t', exc, '\n')
