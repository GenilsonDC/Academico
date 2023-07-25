import pprint


def p(s):
    pprint.pprint(s, sort_dicts=False, width=45)


produtos = [
    {"nome": "Pimenta", "preco": 100},
    {"nome": "Arroz", "preco": 30},
    {"nome": "Morango", "preco": 20},
    {"nome": "Ovo", "preco": 130},
]

atualiza_Preco = [
    {**produto, "preco": produto["preco"] * 1.07}
    if produto["preco"] > 90.00 else {**produto}  # Não pode omitir o else
    for produto in produtos
    if produto["preco"] > 20  # O if a direita do for é filtro
    # Aqui esta basedao nos precos antigos
]
p(atualiza_Preco)
