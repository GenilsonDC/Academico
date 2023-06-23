from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login

def login_view(request):
    if request.method == 'POST':
        nome = request.POST.get('NOME')
        senha = request.POST.get('SENHA')
        
        # Verifique se as credenciais estão corretas
        usuarios = authenticate(request, NOME=nome, SENHA=senha)
        
        if usuarios is not None:
            login(request, usuarios)
            return redirect('home')  # Redirecionar para a página inicial após o login bem-sucedido
        else:
            return redirect('login')  # Redirecionar de volta para a página de login em caso de credenciais inválidas
    else:
        return render(request, 'login.html')  # Renderizar o template de login
