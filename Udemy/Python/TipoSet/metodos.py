s1 = set()
# Métodos úteis:
# **************  add ***************************************
s1.add("Genilson")
s1.add("do Carmo")
s1.add("Silva")
s1.add("Silva")  # Aqui sao mostravos os valores completos sem iteracao

# **************  update ************************************
# Cuidados: Para nao iterar o set, é preciso passar somente valores imutaveis
s1.update((1, 2, 2, "Silva"))
# {1, 2, 'Genilson', 'do Carmo', 'Silva'}
# s1.update("Genilson")
# {1, 2, 'e', 'l', 's', 'n', 'Silva', 'G', 'o', 'do Carmo', 'Genilson', 'i'}

# **************  celar ***************************************
# s1.clear()  # limpa tudo nao aceita parameto

# **************  discard *************************************
s1.discard(2)  # somente um valor por vez

print(s1)
