class Animal:
    def __init__(self, num_patas):
        self.num_patas = num_patas

    def __str__(self):
        return f"{self.__class__.__name__}:{", ".join([f'{chave}={valor}' for chave, valor in self.__dict__.items()])}"


class Mamifero(Animal):
    def __init__(self, num_patas):
        super().__init__(num_patas)
        self.num_patas = num_patas


class Macaco(Mamifero):
    pass


class Vaca(Mamifero):
    pass


class Herbivoro(Animal):
    def __init__(self, num_patas):
        super().__init__(num_patas)
        self.num_patas = num_patas


vaca = Vaca(4)
print(vaca)
