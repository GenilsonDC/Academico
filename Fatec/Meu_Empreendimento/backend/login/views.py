from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login

def login_view(request):
    if request.method == 'POST':
        # Aqui você pode lidar com a lógica de autenticação
        nome = request.POST.get('nome')
        senha = request.POST.get('senha')
        
        # Verifique se as credenciais estão corretas
        usuario = authenticate(request, nome=nome, senha=senha)
        
        if usuario is not None:
            login(request, usuario)
            return HttpResponse('Login bem-sucedido')
        else:
            return HttpResponse('Credenciais inválidas')
    else:
        return HttpResponse('Página de login')
