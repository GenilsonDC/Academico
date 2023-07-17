letras = set()
while True:
    entrada = input("\nDigite uma letra: ")
    letras.add(entrada.lower())

    if "h" in letras:
        print("/t ✨Parabens ✨\n")
        break
    print(letras)
