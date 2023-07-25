import pprint


def p(s):
    pprint.pprint(atualiza_Preco, sort_dicts=False, width=45)


produtos = [
    {"nome": "Pimenta", "preco": 100},
    {"nome": "Arroz", "preco": 30},
    {"nome": "Morango", "preco": 20},
    {"nome": "Ovo", "preco": 130},
]

atualiza_Preco = [
    {**produto, "preco": produto["preco"] * 1.07}
    if produto["preco"] > 90.00 else {**produto}
    for produto in produtos
]
p(atualiza_Preco)
