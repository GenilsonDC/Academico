# Formatação Basia
#(CARATERE) (< direita , > esquerda  e ^ centro) (QUANTIDADE)
# Sinal + ou - para mostrar se o numro é positivo ou negativo, mostrar negativo ja é normal

nome = 'Genilson'
preco = 1289.899881
print(f'\n\n:.{nome:*>12}.:')
print(f':.{nome:#<12}.:')
print(f':.{nome:@^12}.:')
print(f'\n{preco:+,.2f}') # Coloquei o separador de milhar e aparecer sinal +(numero positivo)
print(f'\no Hexadecimal de 1580 é {1580:08x}\n')