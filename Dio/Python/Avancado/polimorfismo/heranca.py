class Passaro:
    def voar(self):
        return f"Voando"


class Pardal(Passaro):
    def voar(self):
        print(f"Pardal Voando")


class Avestruz(Passaro):
    def voar(self):
        print(f"Avestruz não voa")


def PlanoDeVoo(Passaro):
    Passaro.voar()


PlanoDeVoo(Pardal())
print()

PlanoDeVoo(Avestruz())
print()
