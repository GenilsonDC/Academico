import random

nove_digitos = ''  # podemos ja setar um valor na mão
# Mas podemos gerar de forma randomica
for i in range(9):
    nove_digitos += str(random.randint(0, 9))


# print(fat_cpf)

soma_1 = 0
regressivo = 10

for digito in nove_digitos:
    # como estamos pegando uma string precisamos tratar
    soma_1 += int(digito) * regressivo
    regressivo -= 1
digito_1 = (soma_1 * 10) % 11
digito_1 = digito_1 if digito_1 <= 9 else 0

# ************* Calculo do segundo dígito do CPF *******************

dez_digitos = nove_digitos + str(digito_1)
soma_2 = 0
regressivo_2 = 11


for digito in dez_digitos:
    soma_2 += int(digito) * regressivo_2
    regressivo_2 -= 1
digito_2 = (soma_2 * 10) % 11
digito_2 = digito_2 if digito_2 <= 9 else 0

cpf_gerado = f"{nove_digitos}{digito_1}{digito_2}"
print(
    f'\n\t ✅ O CPF {cpf_gerado} foi gerado\n\t confira em um site de sua preferencia a validação\n\n')
