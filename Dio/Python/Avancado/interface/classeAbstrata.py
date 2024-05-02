# Conceito: definir um contrato, onde são declaradas os metodos(o que deve ser feito) e suas respectivas assinaturas.
# Por padão o Puthon não fornece classes abstratas. Necessário o modulo ABC @abstractmethod
from abc import ABC, abstractmethod


class ControleRemoto(ABC):
    @abstractmethod
    def ligar(self):
        pass

    @abstractmethod
    def desligar(self):
        pass


class ControleTV(ControleRemoto):
    def ligar(self):
        print("Welcome!")

    def desligar(self):
        print("Good Bye!")


controleSala = ControleTV()
controleSala.ligar()
print()
controleSala.desligar()
print()
