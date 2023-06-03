"""
************* Calculo do primeiro dígito do CPF *******************

CPF: 746.824.890-70
Colete a soma dos 9 primeiros dígitos do CPF
multiplicando cada um dos valores por uma
contagem regressiva começando de 10

Ex.:  746.824.890-70 (746824890)
   10  9  8  7  6  5  4  3  2
*  7   4  6  8  2  4  8  9  0
   70  36 48 56 12 20 32 27 0

Somar todos os resultados: 
--> 70+36+48+56+12+20+32+27+0 = 301
Multiplicar o resultado por 10
--> 301 * 10 = 3010
Obter o resto da divisão da conta anterior por 11
--> 3010 % 11 = 7
Se o resultado anterior for maior que 9:
    resultado é 0
contrário disso:
    resultado é o valor da conta


************* Calculo do segundo dígito do CPF *******************

CPF: 746.824.890-70
Colete a soma dos 9 primeiros dígitos do CPF + o primeiro digito,
multiplicando cada um dos valores por uma
contagem regressiva apartir de 11

Ex.:  746.824.890-70 (7468248907)
   11 10  9  8  7  6  5  4  3  2
*  7   4  6  8  2  4  8  9  0  7 <-- PRIMEIRO DIGITO
   77 40 54 64 14 24 40 36  0 14

    Somar todos os resultados
--> 77+40+54+64+14+24+40+36+0+14 = 363

    Multiplicar o resultado por 10
--> 363 * 10 = 3630

Obter o resto da divisão da conta anterior por 11
--> 3630 % 11 = 0
Se o resultado anterior for maior que 9:
    resultado é 0
contrário disso:
    resultado é o valor da conta

O segundo dígito do CPF é 0
"""

# https://www.4devs.com.br/gerador_de_cpf
# cpf = "12330355558" Teste invalido

# cpf = input("Digite seu CPF: ").replace(".", "").replace("-", "").replace(" ","")
# print('\t com .repalce',cpf)
import re
import sys
cpf =  input("Digete o CPF: ")
entrada_repetcoes = cpf == cpf[0] * len(cpf)
if entrada_repetcoes:
    print("\tVocê digitou seuquencias repetidas...\n\t encerrando o progama") 
    sys.exit()
 
cpf = re.sub(r'[^0-9]', "", cpf)

fat_cpf = cpf[:9]
# print(fat_cpf)

soma_1 = 0
regressivo = 10

for digito in fat_cpf:
    soma_1 += int(digito) * regressivo #como estamos pegando uma string precisamos tratar
    regressivo -= 1
digito_1 = (soma_1 * 10) % 11
digito_1 = digito_1 if digito_1 <= 9 else 0

#************* Calculo do segundo dígito do CPF *******************

soma_2 = 0
regressivo_2 = 11
fat_cpf2 = cpf[:10]

for digito in fat_cpf2:
    soma_2 += int(digito) * regressivo_2
    regressivo_2 -= 1
digito_2 = (soma_2 * 10) % 11
digito_2 = digito_2 if digito_2 <= 9 else 0

cpf_gerado = f"{fat_cpf}{digito_1}{digito_2}"
if cpf_gerado == cpf:
    print(f'\t ✅ O CPF {cpf} é valido\n')
else:
    print(f'\t 🛑 O CPF {cpf} é invalido 🛑\n')




