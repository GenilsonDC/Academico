# Você foi designado para desenvolver um programa para
# gerenciar os equipamentos de uma empresa.
# O objetivo é criar um solução que permita aos usuários
# inserir informações sobre os equipamentos que serão cadastrados
# na rede, em seguida, exibir essa lista de equipamentos.
# Crie uma Lista para armazenar esses equipamentos e depois
# um loop para solicitar ao usuário inserir até três equipamentos.

# Entrada
# O programa solicitará ao usuário que insira
# uma lista com três equipamentos para adicionar a rede.

# TODO: Crie uma Lista 'itens' para armazenar os equipamentos:
itens = []

# TODO: Crie um loop para solicita os itens ao usuário:
i = 1
while i <= 3:
    item = input()  # sem interação, exigencia do teste
    itens.append(item)
    i += 1
# TODO: Solicite o item e armazena na variável "item":

# TODO: Adicione o item à lista "itens":


# Exibe a lista de itens
print("Lista de Equipamentos:")
for item in itens:
    # Loop que percorre cada item na lista "itens"
    print(f"- {item}")
