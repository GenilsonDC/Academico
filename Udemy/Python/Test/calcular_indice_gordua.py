# 1 APP para testar conhecimentos
# #Calaculando de porcentagem de gordural corporal 

# Fórmula de porcentagem de gordural corporal para homens:
# 495 / (1,0324 - 0,19077 * log10 (CINTURA - PESCOÇO) + 0,15456 * log10 (ALTURA)) - 450

# Fórmula de porcentagem de gordural corporal para mulheres: 
# 495 / (1,29579 - 0,35004 * log10 (CINTURA + QUADRIL - PESCOÇO) + 0,22100 * log10 (ALTURA)) - 450
import math

sexo = input('\n Qual seu sexo? m ou f: ')
if sexo == 'm' or sexo == 'M' or sexo == 'f' or sexo == 'F':
    peso = input('informe seu peso: ')
    altura = input('informe sua altura em cm: ')
    cintura = input('informe o tamanho de cintura em cm: ')
    pescoco= input('informe a medida do pescoço em cm: ')
    calc = float
    pesof = float(peso)
    alturaf = float(altura)
    cinturaf = float(cintura)
    pescocof= float(pescoco)

    if sexo == 'm':
            calc= (495 / (1.0324 - 0.19077 * math.log10 (cinturaf - pescocof) + 0.15456 * math.log10 (alturaf)) )- 450
    elif sexo == 'f':
            calc = (495 / (1.29579 - 0.35004 * math.log10 (cinturaf + cinturaf - pescocof) + 0.22100 * math.log10 (alturaf))) - 450

    print('\nSeu indice é: ',calc, '%')
else:
       print('opção invalida')

 