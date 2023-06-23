from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.auth.models import Usuarios

def signup_view(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        sobrenome = request.POST.get('sobrenome')
        email = request.POST.get('email')
        senha = request.POST.get('senha')

        # Verifique se o usuário já existe
        if Usuarios.objects.filter(nome=nome).exists():
            return HttpResponse('Usuário já cadastrado')
        
        # Crie um novo usuário
        usuario = Usuarios.objects.create_user(nome=nome, senha=senha)
        usuario = Usuarios(NOME=nome, SOBRENOME=sobrenome, EMAIL=email, SENHA=senha)
        usuario.save()

        return HttpResponse('Cadastro realizado com sucesso')
    else:
        return HttpResponse('Página de cadastro')
