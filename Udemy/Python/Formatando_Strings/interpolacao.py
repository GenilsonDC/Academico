#Interpolação basica de strings
# s - string
# d - e - int
# f - float
# c e X - hexadecimal

nome = 'Genilson'
preco = 1289.899881
variavel = '\nSenhor %s, o preço é R$%.2f \n\n' % (nome, preco)
print(variavel)
print('o Hexadecimal de %d é %08X\n\n' % (1991, 1991)) #o x e X retorna em minusculo ou maiusculo respectivamnte