
nome1, nome2, nome3 = ["Genilson", "Guerreiro", "Desenvolvedor"]
_, _, nome3_A = ["Genilson", "Guerreiro", "Desenvolvedor"]
nome3_B, *resto = ["Genilson", "Guerreiro", "Desenvolvedor"]
_, _, nome3_B, *_ = ["Genilson", "Guerreiro", "Desenvolvedor"]
*_, nome3_C = ["Genilson", "Guerreiro", "Desenvolvedor"]
nome1_A, *_ = ["Genilson", "Guerreiro", "Desenvolvedor"]
tupla = "Genilson", "Guerreiro", "Desenvolvedor"

tupla = list(tupla)  # Transformando uma tupla em uma lista
print(f"\n", nome1, nome2, nome3)
print(f"\n", nome3_A)
print(f"\n", nome3_B)
print(f"\n", nome3_C)
print(f"\n", resto)
print(f"\n", nome1_A)
print(f"\n", tupla)
