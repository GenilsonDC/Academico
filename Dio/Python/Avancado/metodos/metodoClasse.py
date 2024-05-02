# Um metodo de classe recebe um primeiro parametro que aponta para a classe.
# Pode acessar ou modificar o estado da classe


class Pessoa:
    def __init__(self, nome=None, idade=None):
        self.nome = nome
        self.idade = idade

    @classmethod
    def calculaIdade(cls, ano, mes, dia, nome):
        idade = 2024 - ano
        return cls(nome, idade)


pessoa_01 = Pessoa.calculaIdade(1991, 11, 7, "Genilson")
print(pessoa_01.nome, pessoa_01.idade)
print()
