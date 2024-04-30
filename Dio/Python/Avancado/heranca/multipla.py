class Animal:
    def __init__(self, num_patas):
        self.num_patas = num_patas

    def __str__(self):
        return f"{self.__class__.__name__}:{", ".join([f'{chave}={valor}' for chave, valor in self.__dict__.items()])}"


class Mamifero(Animal):
    def __init__(self, cor_pelo, **kwargs):
        super().__init__(**kwargs)
        self.cor_pelo = cor_pelo


class Ave(Animal):
    def __init__(self, cor_bico, **kwargs):
        super().__init__(**kwargs)
        self.cor_bico = cor_bico


class Vaca(Mamifero):
    pass


vaca = Vaca(num_patas=4,  cor_pelo="branco")
print(vaca)
print()


class Ornitorrinco(Mamifero, Ave):
    pass


ornitorrinco = Ornitorrinco(num_patas=4, cor_pelo="marrom", cor_bico="preto")
print(ornitorrinco)
print()
