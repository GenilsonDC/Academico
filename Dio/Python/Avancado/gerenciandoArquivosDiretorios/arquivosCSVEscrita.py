import csv
from pathlib import Path

ROOT_PATH = Path(__file__).parent

try:
    # with open(ROOT_PATH / "testeDiretorio" / "ClienteTransacao.csv", "r") as arquivoCSV:
    with open(ROOT_PATH / "testeDiretorio" / "testeEscrita.csv", "w", newline="", encoding="utf-8") as arquivoCSV:
        escrevendo = csv.writer(arquivoCSV, delimiter=",")
        escrevendo.writerow(["id", "nome", "sobrenome"])
        escrevendo.writerow(["001", "Genilson", "do Carmo"])
        escrevendo.writerow(["034", "Natalia", "do Carmo"])
        escrevendo.writerow(["504", "Maria", "do Carmo"])

except IOError as exc:
    print("Não foi possivel criar o arquivo!")
    print('\t', exc, '\n')
