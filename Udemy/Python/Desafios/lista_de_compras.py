""""
Faça uma lista de compras com listas
 o usuario defe ter a possibilidade de
inserir, apagar e listar valores da sua lista.
 REGRAS
  Não permita que o programa quebre com erros de indices 
  inexixtentes na lista
"""
import os
lista = []

while True:

    opcao = input("\n\t[i]nserir - [a]pagar - [l]istar: ")
    if opcao.lower() == "i":
        add = input("\n\tDigite o item: ")
        lista.append(add)
        # continue
    elif opcao.lower() == "l":
        if lista == []:
            os.system("clear")
            print("\n\tLista vazia!")
        else:
            for indice, nome in enumerate(lista):
                print(indice, nome)
                # continue
    elif opcao.lower() == "a":
        if lista == []:
            print("\n\tNão tem o que apagar, lista vazia!")
        else:

            indice = int(input("\n\tEscolha o indice que quer excluir: "))
            if lista[indice]:
                os.system("clear")
                del lista[indice]
            else:
                print("\n\tIndice invalido")

    else:
        os.system("clear")
        print("\n\t⚠️ Opção invalida ⚠️")
        sair = input("\n\tDeseja conitunar [s]im? ")
        if sair.lower() == 's':
            print("Bye...")
            break

# ******* Resolução
"""
lista = []

while True:
    print("selecione uma opcao")
    opcao = input("\n\t[i]nserir - [a]pagar - [l]istar: ")
    if opcao == "i":
        os.system("clear")
        add = input("\n\tDigite o item: ")
        lista.append(add)

    elif opcao.lower() == "a":
        indice_str = input("Escolha o indice que quer apagar: ")
        try:
            indice = int(indice_str)
            del lista[indice]
        except ValueError:  # testando os erros na saida o terminal deu como
            # ValueError quando colocamos por exemplo uma letra e colocamos aqui no tratamento
            print("Digite somente numeros inteiros!")
        except IndexError:  # testando os erros na saida o terminal deu como
            # IndexError para indez fora do range e colocamos aqui no tratamento
            print("Indice não existe!")

    elif opcao == "l":
        os.system("clear")
        if len(lista) == 0:
            print("Nada para listar!")
        for i, valor in enumerate(lista):
            print(i, valor)

"""
