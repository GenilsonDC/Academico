# TODO: Crie uma Função: recomendar_plano para receber o consumo médio mensal:
def recomendar_plano(consumo):
    Essencial_Fibra_50Mbps = consumo <= 10
    Essencial_Fibra_100Mbps = consumo <= 20
    Essencial_Fibra_300Mbps = consumo >= 20

    if consumo < 0:
        return "\tPor favor digite o seu consumo médio.\n exemplo: 25\n"

    else:
        if Essencial_Fibra_50Mbps:
            plano = f"Plano Essencial Fibra - 50Mbps\n"
        elif Essencial_Fibra_100Mbps:
            plano = f"Plano Prata Fibra - 100Mbpsn"
        elif Essencial_Fibra_300Mbps:
            plano = f"Plano Premium Fibra - 300Mbps\n"

    return plano

# TODO: Crie uma Estrutura Condicional para verifica o consumo médio mensal
# TODO: Retorne o plano de internet adequado:


# Solicita ao usuário que insira o consumo médio mensal de dados:
consumo = float(input("\tDigite o seu consumo médio mensal de dados: "))
# Chama a função recomendar_plano com o consumo inserido e imprime o plano recomendado:
print(recomendar_plano(consumo))
