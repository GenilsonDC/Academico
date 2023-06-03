velocidade = input('\n\tQual sua velocidade? ')
velocidade=int(velocidade)
local_Carro = 100

# Abaixo temos CONSTANTES por isso estao em Upper Case
LIMITE_VELOCIDADE = 60  
RADAR_1 = 100
RANGE = 1
#Abaixo temos uma alternativa para melhorar a visualizacao/manutencao do codigo
no_Range_Radar =  local_Carro == RADAR_1 or local_Carro == (RADAR_1 - RANGE) or local_Carro == (RADAR_1 + RANGE)
multado = velocidade > LIMITE_VELOCIDADE

if   multado and  no_Range_Radar:
    print(f'\n\tCarro Multado a {velocidade}km/h ')
else :
    print(f'\n\tCarro passou a {velocidade}km\h dentro da velocidade permitida!\n ')