# Sets - Conjuntos em Python (tipo set)
# Conjuntos são ensinados na matemática
# https://brasilescola.uol.com.br/matematica/conjunto.htm
# Representados graficamente pelo diagrama de Venn
# Sets em Python são mutáveis, porém aceitam apenas
# tipos imutáveis como valor interno.

# Criando um set
# set(iterável) ou {1, 2, 3}

# s1 = set()  # vazio
# s1 = set("Genilson")  # saida é: {'e', 'n', 's', 'G', 'i', 'l', 'o'}
s1 = {'Genilson', "do Carmo", 2, 3}  # Com dados, assim ja coloca os dados
# se deixar {} nao estara cirando um set vazio, mas sim uma tupla

print(s1)
