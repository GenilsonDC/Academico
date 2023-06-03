
# and	Retorna True se ambas as afirmações forem verdadeiras


key = input('Crie sua senha: ')

entrada= input('\nDeseja coninuar?\n sim(s) ou não(n): ')

if entrada =='s' or entrada =='S' :
    keycehck = input('\n\n\tDigite a senha: ')
    if keycehck == key:
        print('\n\tAcesso permitido')
    else:
        print('Acesso negado')
elif entrada == 'n' or entrada == 'N':
    print(" \n\tSaindo...\n .....\n ...\n ..\n .\n")

print('\n\n')

# OR	Retorna True se uma das afirmações for verdadeira 
# Avaliação de Curto Circuito
# print(0 or False or 0 or 'abc' or True,end='\n\n')

# senha = input('senha') or 'sem senha'
# print(senha)

# NOT	retorna Falso se o resultado for verdadeiro ou seja inverte a expressão

# if not entrada == 's' and keycehck == key:
#     print('vc não digitou s')
# else:
#     print('vc digitou s')