entrada_str = input("Digite um nome: ")
novo_nome = ""
i = 0

while i < len(entrada_str):
    # letra = entrada_str[i]
    novo_nome += entrada_str[i]
    i += 1

print(f"novo é {novo_nome}")
