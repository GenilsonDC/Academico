numerosA = {3, 2, 5, 8, 7}
numerosB = {10, 9, 7, 8, 6}
numerosC = {8, 7, 6}
print('Union::::::::::::::::::', numerosA.union(numerosB))  # Saida ordenada
print('Intersection:::::::::::', numerosA.intersection(numerosB))
print('Difference A:::::::::::', numerosA.difference(numerosB))
print('Difference B:::::::::::', numerosB.difference(numerosA))
print('Symmetric difference:::', numerosA.symmetric_difference(numerosB))
print('is subset::::::::::::::', numerosC.issubset(numerosB))
print('is subset::::::::::::::', numerosB.issubset(numerosC))
print('is superset::::::::::::', numerosC.issuperset(numerosB))
print('is superset::::::::::::', numerosB.issuperset(numerosC))
print('is disjoint::::::::::::', numerosC.isdisjoint(numerosB))
print('is disjoint::::::::::::', numerosB.isdisjoint(numerosC))
print()
