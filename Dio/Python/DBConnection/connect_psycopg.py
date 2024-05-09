import psycopg2
import psycopg2.sql
from psycopg2 import sql

db_name = "pythonConnect"
db_host = "localhost"
db_port = 5432
db_user = "postgres"
db_passw = "00000"

try:
    connection = psycopg2.connect(
        dbname=db_name, host=db_host, port=db_port, user=db_user, password=db_passw)
    print("🟢 conexão bem sucedida!\n")

except psycopg2.Error as err:
    print(f"🛑 Não foi possivel conectar ao {db_name}\n ⚠️ {err}\n")
    exit()

cur = connection.cursor()


def createTable(cur, connection):
    try:
        cur.execute(
            sql.SQL("""
                    CREATE TABLE public.clientes
                    (
                    id SERIAL PRIMARY KEY,
                    nome VARCHAR(100),
                    idade INTEGER,
                    email VARCHAR(150)
                        )""")
        )
        connection.commit()
        print("🟢 Tabela criada!\n")
    except psycopg2.Error as createDBError:
        print(f"🛑 Não foi possivel criar a tabela\n ⚠️ {createDBError}\n")


def insertData(cur, connection, nome, idade, email):
    try:
        data = (nome, idade, email)
        cur.execute(
            # f"INSERT INTO public.clientes (nome, idade, email) VALUES{data};") 🛑 Risco de injeção
            "INSERT INTO public.clientes (nome, idade, email) VALUES (%s,%s,%s);")
        connection.commit()
        print("🟢 dados inseridos!\n")
    except psycopg2.Error as createError:
        print(f"🛑 Não foi possivel inserir os dados\n ⚠️ {createError}\n")


def updateData(cur, connection, nome, idade, email, id):
    try:
        data = (nome, idade, email, id)
        cur.execute(
            "UPDATE public.clientes SET nome=%s,idade=%s, email=%s WHERE id=%s", data)
        connection.commit()
        print("🟢 dados atualizados!\n")

    except psycopg2.Error as updateError:
        print(f"🛑 Não foi possivel atualizar os dados\n ⚠️ {updateError}\n")


updateData(cur, connection, "Natalia do Carmo", 25, "natalia@email.com", 2)
