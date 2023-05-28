entrada_str=input("\n\tQue horas são? \n\tex: 1, 2 ..até 23: ")
horas = int(entrada_str)
noite = horas>= 18
tarde = horas >= 12 and horas < 18

if noite:
    print(f"\n\tBoa noite 🌃 são {horas}:00h")
elif tarde:
    print(f"\n\tBoa tarde 🌇 são {horas}:00h")
else:
    print(f"\n\tBom dia 🏙️ são {horas}:00h")