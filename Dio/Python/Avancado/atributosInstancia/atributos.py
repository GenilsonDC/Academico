class Estudante:
    escola = 'FATEC'

    def __init__(self, nome, matricula):
        self.nome = nome
        self.matricula = matricula

    def __str__(self) -> str:
        return f"Nome: {self.nome} / Matricula:{self.matricula} / Escola:{self.escola}"


def mostrar_valores(*objts):
    for obj in objts:
        print(obj)


aluno_01 = Estudante("Genilson", 123)
aluno_02 = Estudante("Ademir", 234)
mostrar_valores(aluno_01, aluno_02)
print()

Estudante.escola = "UNISO"
aluno_03 = Estudante("Rafaela", 345)
mostrar_valores(aluno_01, aluno_02, aluno_03)
print()
