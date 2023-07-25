import pprint


def p(s):
    pprint.pprint(s, sort_dicts=False, width=45)


lista = []
for x in range(3):
    for y in range(3):
        lista.append((x, y))  # Tupla aceita os dois valore por indice

# Comprehension
N_Lista = [
    (x, y)
    for x in range(3)
    for y in range(3)
]

p(lista)
print()
p(N_Lista)
