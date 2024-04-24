dados = {
    "email1@email.com": {"name": "Genilson", "lastName": "Carmo", "adress": {"street": "Alpes", "number": "123"}},
    "email2@email.com": {"name": "user 02", "lastName": "userLastname 02"},
    "email3@email.com": {"name": "user 03", "lastName": "userLastname 03"},
}

dados["email4@email.com"] = {"name": "user 04", "lastName": "userLastname 04"}

for pos, val in dados.items():
    print("saida: ", (pos, val))
