while True:
    num1_str = input("\n\tDigite o 1º numero: ")
    operador_str = input("\n\t+ - / ou *: ")
    num2_str = input("\n\tDigite o 2º numero: ")

    numeros_Validos = None

    num1 = 0
    num2 = 0

    try:
        num1 = float(num1_str)
        num2 = float(num2_str)
        numeros_Validos = True
    except:
        numeros_Validos = None

    if numeros_Validos is None:
        print("\n\t⚠️  Digite somente numeros validos  Exp: 1 ou 1.0   ⚠️\n")
        continue
    operador_valido = "+-/*"
    if operador_str not in operador_valido:
        print("\n\t⚠️   Escolha somente um operador valido  Exp: +  /  - ou *   ⚠️\n")
        continue
    if len(operador_str) > 1:
        print("\n\t⚠️   Escolha somente um operador  Exp: +   ⚠️\n")
        continue
        # Calculando quando tudo for validado
    print("Calculando\n.\n..\n...\n....\n.....\n......")

    if operador_str == "+":
        print(f"....... ➡️ {num1} + {num2} = ", num1 + num2)
    elif operador_str == "-":
        print(f"....... ➡️ {num1} - {num2} = ", num1 - num2)
    elif operador_str == "*":
        print(f"....... ➡️ {num1} x {num2} = ", num1 * num2)
    elif operador_str == "/" and num2 == 0:
        print(f"....... ⚠️    {num1} não é divisivel por {num2}  ⚠️ ")
    else:
        print(f"....... ➡️ {num1} : {num2} = ", num1 / num2)

    fim = input("\n\t 🚷 Para sair [s]im: ").lower().startswith("s")
    if fim is True:
        break
