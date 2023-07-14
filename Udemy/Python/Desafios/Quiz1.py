# Perguntas e respostas
Perguntas = [{
    "Pergunta": "Quanto é 4*13 ?",
    "Opcao": ["43", "42", "413", "52"],
    "Resposta": "52",
},
    {
    "Pergunta": "Quantas folhas tem um trevos da sorte ?",
    "Opcao": ["7", "3", "4", "6"],
    "Resposta": "4",
},
    {
    "Pergunta": "De qual pais é a empresa Amazon ?",
    "Opcao": ["Brasil", "India", "EUA", "Mexico"],
    "Resposta": "EUA",
},
    {
    "Pergunta": "Qual a capital do Mato Grosso ?",
    "Opcao": ["Salvador", "Cuiabá", "Cotia", "Campo Grande"],
    "Resposta": "Cuiabá",
}
]

qtd_acertos = 0
print()
for pergunta in Perguntas:
    print(pergunta["Pergunta"])

    opcoes = pergunta["Opcao"]
    for i, opcao in enumerate(opcoes):
        print(f"{i+1})", opcao)
    print()

    escolha = input("Escolha uma opção: ")

    acertou = False
    escolha_int = None
    qtd_opcoes = len(opcoes)

    if escolha.isdigit():
        escolha_int = int(escolha)-1

    if escolha_int is not None:
        if escolha_int >= 0 and escolha_int < qtd_opcoes:
            if opcoes[escolha_int] == pergunta["Resposta"]:
                acertou = True

    if acertou:
        qtd_acertos += 1
        print("\tAcertou 😎👍 \n")

    else:
        print("\tErrou 😭❌ \n")

print("\t Você acertou: ", qtd_acertos, "de", len(Perguntas), "\n\n")
