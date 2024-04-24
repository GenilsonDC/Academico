pessoa = {"name": "Genilson",
          "age": 25,
          "weight": 89,
          "Height": 1.20
          }
print(pessoa["name"])
print()

dados = {
    "email1@email.com": {"name": "Genilson", "lastName": "Carmo", "adress": {"street": "Alpes", "number": "123"}},
    "email2@email.com": {"name": "user 02", "lastName": "userLastname 02"},
    "email3@email.com": {"name": "user 03", "lastName": "userLastname 03"},
}
print(dados["email1@email.com"]["lastName"])
print(dados["email1@email.com"]["adress"]["street"])
print()

dados["email4@email.com"] = {"name": "user 04", "lastName": "userLastname 04"}
print(dados["email4@email.com"]["lastName"])
print()

busca = dados.get("genilson@mail.com", "Dado não encontrado")
print(busca)
print()

busca = dados.get("email2@email.com", "dado não encontrado")
print(busca)
print()
