
nome1, nome2, nome3 = ["Genilson", "Guerreiro", "Desenvolvedor"]
_, _, nome3_A = ["Genilson", "Guerreiro", "Desenvolvedor"]
nome3_B, *resto = ["Genilson", "Guerreiro", "Desenvolvedor"]
_, _, nome3_C, *_ = ["Genilson", "Guerreiro", "Desenvolvedor"]
*_, nome3_D = ["Genilson", "Guerreiro", "Desenvolvedor"]
nome1_A, *_ = ["Genilson", "Guerreiro", "Desenvolvedor"]
tupla = "Genilson", "Guerreiro", "Desenvolvedor"

tupla = list(tupla)  # Transformando uma tupla em uma lista

print(f"\n", nome1, nome2, nome3)  # Genilson Guerreiro Desenvolvedor
print(f"\n", nome3_A)  # Desenvolvedor
print(f"\n", nome3_B)  # Genilson
print(f"\n", nome3_C)  # Desenvolvedor
print(f"\n", nome3_D)  # Desenvolvedor
print(f"\n", resto)  # ['Guerreiro', 'Desenvolvedor']
print(f"\n", nome1_A)  # Genilson
print(f"\n", tupla)  # ['Genilson', 'Guerreiro', 'Desenvolvedor']
