#strings são iteraveis
nome=input('Degite seu nome: ')
procura = input('o que quer encontrar? ')

if procura in nome:
    print(f'{procura} esta em {nome}')
else:
    print(f'{procura} não esta em {nome}')
    
    