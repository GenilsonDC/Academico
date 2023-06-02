frase = 'The Postman agent is a micro-application that runs locally on your desktop and'\
    ' acts as your agent for making API calls on your behalf. To overcome limits in the browser, '\
    'the Postman web interface will now route API calls to the local agent, and ..'

i = 0
letra = ""
menor = 0
# qtdd_Letra = 0

while i < len(frase):
    letra_Atual = frase[i]
    if letra_Atual == " ":
        i += 1
        continue

    qtdd_Letra = frase.count(letra_Atual)

    if menor < qtdd_Letra:
        menor = qtdd_Letra
        letra = letra_Atual

    i += 1

print(f'\n\tA letra "{letra}" apareceu {menor}x\n\n')
