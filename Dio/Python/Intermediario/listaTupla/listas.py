frutas = ['maçã', "banana", "pera", "melancia"]
print(frutas[-1])
print()


carro = ["Fusca", "Preto", "1500L", 1955, 130000, "Sorocaba", True]
print(carro)
print()

# exemplo de lista aninhada
matriz = [[1, "A", 2],
          [3, "B", "C"],
          ["G", "D", 5]]
print(matriz[0])
print(matriz[1][-1])
print(matriz[2][0])
print()

for indice, fruta in enumerate(frutas):
    print(f'{indice}:{fruta}')
print()
