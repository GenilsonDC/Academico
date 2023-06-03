entrada_str = input('\n\tDigiete um numero inteiro: ')
entrada_invalida= "." in entrada_str or "," in entrada_str

if entrada_invalida:
    print('\n\tEntrada invalida\n \t digite somente um numero inteiro')
else:
    entrada = int(entrada_str)
    par = entrada %2 == 0
    if par:
        print(f'\n\t {entrada} é par\n')
    else:
        print(f"\n\t {entrada} é impar\n")