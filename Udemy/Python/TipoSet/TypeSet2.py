# Sets são eficientes para remover valores duplicados de iteráveis.
s1 = {"Genilson", "do Carmo", "Genilson", 3, 3, 2, 3, 1, 7, 7, 7, 7}
print(s1)  # {'do Carmo', 1, 2, 3, 'Genilson', 7}

# **************************************** *************

# - Não aceitam valores mutáveis;
s1 = {"Genilson", {"do Carmo", "Silva"}}
s1 = {"Genilson", ["do Carmo", "Silva"]}

# **************************************** *************

# - Seus valores serão sempre únicos;
# - não tem índexes;
print(s1[1])  # Não existe

# **************************************** *************

# - não garantem ordem;
# - são iteráveis (for, in, not in)
for valor in s1:
    print(valor)

print("Genilson" in s1)  # True
print("Genilson" not in s1)  # False

# **************************************** *************
