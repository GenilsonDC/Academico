# Dicionários em Python (tipo dict)
# Dicionários são estruturas de dados do tipo
# par de "chave" e "valor".
# Chaves podem ser consideradas como o "índice"
# que vimos na lista e podem ser de tipos imutáveis
# como: str, int, float, bool, tuple, etc.
# O valor pode ser de qualquer tipo, incluindo outro
# dicionário.
# Usamos as chaves - {} - ou a classe dict para criar
# dicionários.
# Imutáveis: str, int, float, bool, tuple
# Mutável: dict, list

pessoa = {
    "nome": "Genilson do Carmo",
    "sobrenome": "Silva",
    "CPF": "12312332143",
    "Enderecos": [{"rua": "Rua da conquista", "numero": 321},

                  {"rua": "Rua da estrada", "numero": 120},],
}

for chave in pessoa:
    print(chave, pessoa[chave])
