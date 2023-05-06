# menor= 3<4
# maior = 3>4
# maior_igual= 3>=4
# menor_igual = 3<=4
# igual = 3==4
# diferente = 3 != 4 ! = caso estaja visualixando no Prettier

num1 = input('digite o 1º numero: ')
num2 = input('digite o 2º numero: ')


if num1 > num2:
    print(f'o numero {num1} é maior que {num2}')
elif num1 < num2:
    print(f'O numero {num2} é maior que {num1}')
else:
    print('Os numeros são iguais')