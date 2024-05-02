# Um método estático não pode acessa-lo ou modificar o estado.
class Pessoa:
    def __init__(self, nome=None, idade=None):
        self.nome = nome
        self.idade = idade

    @staticmethod
    def adulto(idade):
        return idade >= 18


pessoa_01 = Pessoa.adulto(17)
print(pessoa_01)
print()
