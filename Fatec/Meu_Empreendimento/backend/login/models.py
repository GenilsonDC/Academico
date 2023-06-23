from django.db import models

class Usuarios(models.Model):    
    NOME = models.CharField(max_length=50)
    SOBRENOME = models.CharField(max_length=70)
    EMAIL = models.CharField(max_length=100, unique=True)
    SENHA = models.CharField(max_length=20)

    def __str__(self):
        return self.NOME + ' ' + self.SOBRENOME
