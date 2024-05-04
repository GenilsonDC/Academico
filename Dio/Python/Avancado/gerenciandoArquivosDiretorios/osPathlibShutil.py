import os
import shutil
from pathlib import Path

ROOT_PATH = Path(__file__).parent

os.mkdir(ROOT_PATH / "testeDiretorio")
os.mkdir(ROOT_PATH / "novotesteDiretorio")

file = open(ROOT_PATH / "testeArquivoDiretorio.txt", "w")
file.close()

os.rename(ROOT_PATH / "testeArquivoDiretorio.txt",
          ROOT_PATH / "nomeAlterado.txt")

os.remove(ROOT_PATH / "nomeAlterado.txt")

shutil.move(ROOT_PATH / "testeArquivoDiretorio.txt",
            ROOT_PATH / "testeDiretorio")
