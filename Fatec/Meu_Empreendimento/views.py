import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')
application = get_wsgi_application()

import psycopg2

# Configurações do banco de dados PostgreSQL
db_host = 'localhost'
db_port = '5432'
db_name = 'appsDB'
db_user = 'genilson'
db_password = '572711'

# Conexão com o banco de dados PostgreSQL
try:
    connection = psycopg2.connect(
        host=db_host,
        port=db_port,
        dbname=db_name,
        user=db_user,
        password=db_password
    )
    print("Conexão com o banco de dados estabelecida com sucesso!")
except psycopg2.Error as e:
    print("Erro ao conectar ao banco de dados PostgreSQL:", e)

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Rota para cadastrar um usuário
@csrf_exempt
def signup(request):
    data = json.loads(request.body)
    nome = data['nome']
    sobrenome = data['sobrenome']
    email = data['email']
    senha = data['senha']

    # Verifica se o usuário já está cadastrado
    if is_user_registered(email):
        return JsonResponse({'message': 'Usuário já cadastrado'})

    # Insere o usuário no banco de dados
    insert_user(nome, sobrenome, email, senha)

    return JsonResponse({'message': 'Usuário cadastrado com sucesso'})

# Rota para validar o login
@csrf_exempt
def login(request):
    data = json.loads(request.body)
    email = data['email']
    senha = data['senha']

    # Verifica se o usuário existe e a senha está correta
    if validate_login(email, senha):
        return JsonResponse({'message': 'Login válido'})
    else:
        return JsonResponse({'message': 'Login inválido'})

# Função para verificar se o usuário já está cadastrado
def is_user_registered(email):
    try:
        cursor = connection.cursor()
        cursor.execute("SELECT COUNT(*) FROM USUARIOS WHERE email = %s", (email,))
        count = cursor.fetchone()[0]
        cursor.close()

        return count > 0
    except psycopg2.Error as e:
        print("Erro ao verificar se o usuário está cadastrado:", e)

# Função para inserir um novo usuário no banco de dados
def insert_user(nome, sobrenome, email, senha):
    try:
        cursor = connection.cursor()
        cursor.execute("INSERT INTO USUARIOS (nome, sobrenome, email, senha) VALUES (%s, %s, %s, %s)", (nome, sobrenome, email, senha))
        connection.commit()
        cursor.close()
    except psycopg2.Error as e:
        print("Erro ao inserir um novo usuário:", e)

# Função para validar o login do usuário
def validate_login(email, senha):
    try:
        cursor = connection.cursor()
        cursor.execute("SELECT COUNT(*) FROM USUARIOS WHERE email = %s AND senha = %s", (email, senha))
        count = cursor.fetchone()[0]
        cursor.close()

        return count > 0
    except psycopg2.Error as
