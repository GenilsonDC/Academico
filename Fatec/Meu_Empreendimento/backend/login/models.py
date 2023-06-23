from django.db import models

class Usuarios(models.Model):    
    nome = models.CharField(max_length=50)
    sobrenome = models.CharField(max_length=70)
    email = models.CharField(max_length=100, unique=True)
    senha = models.CharField(max_length=20)

    def __str__(self):
        return self.nome + ' ' + self.sobrenome
