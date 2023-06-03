""" 
********** PROPOSTA 
  Faça um jogo para o usuario adivinhar qual é a palavra secreta, quase que uma "FORCA"
faca uma contagem de tentativas do seu usuario. 
se a  letra digitada estiver na palavra, exiba a aletra que ele digitou e a(s) mantenha até o fim do jogo;
nse nao mostrar, um sinal, por exemplo * ou _ ou # etc

**********  REGRAS
 O usuario só pode digitar apenas uma letra.
"""
# importantndo os para setar o comando clear
import os
palavra = 'superar'
letra_correta = ''
letra_correta_salva = ''
count = 0
i = 0

while True:
    entrada = input("\tDigite uma letra: ")
    if len(entrada) > 1:
        print("\n\t⚠️ Digite apenas uma letra !\n")

        continue

    if entrada not in palavra:
        count += 1
        # print('\ta palavra tem "_ _ _ _ _ _ _ _"')
    else:
        letra_correta += entrada
    palavra_formada = ""
    count += 1

    for letra_correta_salva in palavra:
        if letra_correta_salva in letra_correta:
            palavra_formada += letra_correta_salva
            # print(f"{letra_correta_salva}")
        else:
            palavra_formada += "_ "

    print("\nEncontadas: ", palavra_formada)

    if palavra_formada == palavra:
        os.system("clear")

        print(
            f"\n\t 🎉 PARABÉNS\n \t Você acertou!\n\n  você fez {count} tentativas")

        entrada = input("\n\tDeseja continuar [s]im ?")

        if entrada.lower() == 's':
            os.system("clear")
            letra_correta = ''
            letra_correta_salva = ''
            count = 0
        else:
            break
