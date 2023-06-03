str_numero=input('Vamos dobrar o valor: ')

try:
    
    numero_Float = float(str_numero)
    print('FLOAT: ', numero_Float)
    print(f'\n O dobro de {str_numero} numero é:  {numero_Float*2:.2f}\n')
except:
    print('Entrada invalida\n')

