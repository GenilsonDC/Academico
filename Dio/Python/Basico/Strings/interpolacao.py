name = 'Genilson'
peso = 80
idade = 29
pi = 3.14123

print(f'Bom dia sr(a) {name}, sua idade é {idade} e o seu peso é {peso}.')
print()

dicionaDados = {'name': 'genilson',
                'age': 33,
                'occupation': 'Autonomo'}
print('Olá {name}, sua idade atual é {age} e sua ocupação atualmente é {occupation}'.format(
    **dicionaDados))
print()
print(f'Valor de PI={pi:.2f}')
print(f'Valor de PI={pi:12.2f}')
