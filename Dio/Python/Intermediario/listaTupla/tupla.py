# Utilizada quando não queremeos que os valores sejam alterados
# Não esquecer da ultima virgula
frutas = ("maçã", "banana", "pera", "melancia",)
print(frutas[-1])
print(frutas.count("maça"))
print(frutas.count("maçã"))
print()

linguagem = tuple("Python")
print(linguagem[-1])
print()

numeros = tuple([3, 2, 5, 8, 7])
print(numeros[::-1])
print()

matriz = ((1, "A", 2),
          (3, "B", "C"),
          ("G", "D", 5),)
print(matriz[0])
print(matriz[1][-1])
print(matriz[2][0])
print()
