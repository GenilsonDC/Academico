class Foo:
    def __init__(self, x=None):
        self._x = x

    @property
    def x(self):
        return self._x

    @x.setter
    def x(self, valor):
        self._x += valor

    @x.deleter
    def x(self):
        self._x = "valor padrao qualquer"


foo = Foo("**Só exibe com @property** ")
print(foo.x)
print()

foo.x = "Não vai dar certo sem o x.setter"
print(foo.x)
print()

del foo.x
print(foo.x)
print()

foo = Foo(" Novo valor Depois do del")
print(foo.x)
print()
