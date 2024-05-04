file = open("Avancado/manipulandoArquivos/arquivos/testeWrite.txt", "w")

file.write("""
           Saida do arquivo writeFile.py
           ************************************           
                       CABEÇALHO
           ************************************

           Nome; Sobrenome; Operação; Valor

           """)

file.writelines("""
                Saida do arquivo writeFile.py
           ************************************           
                       CABEÇALHO
           ************************************

           Nome; Sobrenome; Operação; Valor

           """)


file.write(" Nome; Sobrenome; Operação; Valor\n")

file.writelines(" Nome; Sobrenome; Operação; Valor\n")

# só aceita str em lista da erro
file.write('"Nome", "Sobrenome", "Operação", "Valor\n"')

file.writelines(["Nome", "Sobrenome", "Operação", "Valor"])
file.writelines(["Nome ", "Sobrenome ", "Operação ", "Valor"])
file.writelines(["\nNome ", "\nSobrenome ", "\nOperação ", "\nValor"])
file.writelines(["\n", "Nome", "\n", "Sobrenome ",
                "\n", "Operação ", "\n", "Valor"])

file.close()
