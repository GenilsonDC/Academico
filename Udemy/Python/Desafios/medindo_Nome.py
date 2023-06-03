entrada_str = input("\n\tDigite seu nome: ")
letras = len(entrada_str)
nome_Grande = letras > 6
nome_pequeno = letras < 4

if  nome_pequeno:
    print(f"\n\tSeu nome é pequeno tem só {letras} letras\n\n")
elif nome_Grande:
    print(f"\n\tSeu nome é grande tem {letras} letras\n\n")
else:
    print("\n\tSeu nome tem tamanho normal\n\n")
