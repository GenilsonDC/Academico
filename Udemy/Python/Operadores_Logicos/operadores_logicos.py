
# and	Retorna True se ambas as afirmações forem verdadeiras


key = '321'
keycehck = input('Digite a senha:')
entrada= input('Deseja coninuar?\n sim(s) ou não(n): ')

if entrada=='s' and keycehck == key:
    print('Acesso permitido')
else:
    print('Acesso negado')

print('\n\n')

# or	Retorna True se uma das afirmações for verdadeira 
# Avaliação de Curto Circuito
print(0 or False or 0 or 'abc' or True,end='\n\n')

senha = input('senha') or 'sem senha'
print(senha)

# not	retorna Falso se o resultado for verdadeiro ou seja inverte a expressão

if not entrada=='s' and keycehck == key:
    print('vc não digitou s')
else:
    print('vc digitou s')