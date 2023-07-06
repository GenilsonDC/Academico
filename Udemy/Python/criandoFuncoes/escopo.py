x = 1


def funcao1():
    x = 10

    def funcao2():
        global x  # Defino que a variavel x é global
        x = 32
        y = 12
        print(x, y)
    print(x)
    funcao2()


print(x)  # ainda é x = 1 porque chamei antes do parametro
funcao1()
print(x)  # o x já nao é mais 1 e sim 32, mas apos ter passado pela funcao
