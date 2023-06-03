# aqui o objetivo é receber alguns dados do usuario e fatiar, inverter, procurar, medir
nome= input('\nDigite seu nome: ')
idade= input('\nDigite sua idade: ') #Nao usei, mas posso fazer uma condicao ex: >18 anos
if nome == '' or idade == '':
    input('\n* * * ALERTA!!! campos vazios * * * ')
else:
    print(f'\n Seu nome é: {nome}')
    print(f'\n Seu nome invertido é: {nome[::-1]}')
    if ' ' in nome:
        print('\nO seu nome tem espaços')
    else:
        print('\nseu nome não tem espaços')
print(f'\n o nome {nome} tem {len(nome)} letras')# Também funcionou (f'...', len(nome),'...')
print(f'\n A primeira letra do nome é: {nome[0]}')
print(f'\n A ultima letra do nome é: {nome[-1]}')