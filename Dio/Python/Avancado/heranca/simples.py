class Veiculo:
    def __init__(self, marca, modelo, cor, placa, num_rodas):
        self.marca = marca
        self.modelo = modelo
        self.cor = cor
        self.placa = placa
        self.num_rodas = num_rodas

    def ligarMotor(self):
        print("\n\tLIGANDO MOTOR\n")


class Motociclete(Veiculo):
    pass


class Caminhão(Veiculo):
    pass


class Carro(Veiculo):
    pass


moto = Motociclete("YAMAHA", "MT-09", "Verde Poison", "PYT0N11", 2)
moto.ligarMotor()
print(moto.marca, moto.modelo, moto.cor, moto.placa)
