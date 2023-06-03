lista = [123, "Genilson", True, 0, 7, 'nove', ['Evolution', 1.75]]
lista[5] = 'oito'  # mudando o valor do indice 5

print('\t 1ª print:', lista)

del lista[2]
print('\t 2ª del 2:', lista)

lista.pop()  # Remove o ultimo indice
print('\t 3ª pop 2:', lista)

lista.append('add com append')  # Adiciona após o ultimo indice
print('\t 4ª com apend 2:', lista)

# também posso colocar pop(4) vai funcionar semelhante ao del
ultimo_removido = lista.pop()
# pop deleta e também retorna o valor removido
print('\t 5ª mostrando o pop:', lista, ', ==> ', ultimo_removido)

lista.clear()
print('\t 6ª mostrando o clear:', lista)
