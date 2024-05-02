class Pessoa:
    def __init__(self, nome, sobrenome, anoNascimento):
        self._nome = nome
        self._sobrenome = sobrenome
        self._anoNascimento = anoNascimento

    @property
    def nomeCompleto(self):
        return f"{self._nome} {self._sobrenome}"

    @property
    def calculaIdade(self):
        return 2024 - self._anoNascimento


pessoa = Pessoa("Genilson", "do Carmo", 1991)

print(pessoa.nomeCompleto)
print()

print(pessoa.calculaIdade)
print()
