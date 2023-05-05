
#Tipo Inteiro (int)
idade = 32
ano = 2023
print(type(idade))
print(type(ano))
print(end='\n')
# Ponto Flutuante ou Decimal (float)
altura =1.70
peso=80.0
print(type(altura), type(peso),end='\n\n')

#podemos converter
print(type(int(peso)))
print(int(peso))

# Complexo (complex)
#Usado para representar numeros complexos, visto em matérias de calculo e fisica etc.
#contem duas partes complex(x,y): um numemro real x e imáginaria y(contento uma letra normalmente j )
x = 3+4j
y = complex(5,2)

print(x)
print(type (x), end='\n\n')
print(y)
print(type (y), end='\n')
print(x+y)
print(x*y, end='\n \n')
# String (str)
nome='Genilson'
interesse='Desenvolvedor'
print(nome)
print(type(nome))
print(interesse,end='\n\n')
# Boolean (bool)
falso= False
verdadeiro=True
print(falso)
print(type(falso))
print(verdadeiro, end="\n\n")
# Listas (list)
# conjunto que pode conter: int, float, string, etc
list_linguagens=['PYTHON','JAVA SCRIPT', 'HTML','TYPE SCRIPT']
list_numeros=[20, 10, 0, -10, -20]
list_Tudo=['PYTHON','JAVA SCRIPT', 'HTML','TYPE SCRIPT', 20, 10, 0, -10, -20]
print(list_linguagens)
print(type(list_linguagens))
print(list_numeros)
print(type(list_numeros))
print(list_Tudo)
print(type(list_Tudo),end='\n\n')
# Tuplas (tuple)
# IMPORTANTE: a diferença é que as tuplas são fixas, ou seja seus valores não podem ser alterado
tuple_linguagens=('PYTHON','JAVA SCRIPT', 'HTML','TYPE SCRIPT')
tuple_numeros=20, 10, 0, -10, -20                         #retirei os parenteses e deu na mesma
print(tuple_linguagens)
print(tuple_numeros)
print(type(tuple_linguagens), type(tuple_numeros),end='\n\n')
# Dicionários (dict)
#Agrupam com por chave e valor
notas={'Genilson do Carmo':10.0, 'Felipe Silva':7.6, 'Amanda Silva': 9.0}
faltas={'Genilson do Carmo':0, 'Felipe Silva':4, 'Amanda Silva': 12}

print(faltas)
print(notas)
print(type(faltas), type(notas),end='\n\n')