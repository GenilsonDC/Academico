import psycopg2
import psycopg2.sql
from psycopg2 import sql
from psycopg2.extras import DictCursor

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
        connection.rollback()


def insertData(cur, connection, nome, idade, email):
    try:
        data = (nome, idade, email)
        cur.execute(
            # f"INSERT INTO public.clientes (nome, idade, email) VALUES{data};") 🛑 Risco de injeção
            "INSERT INTO public.clientes (nome, idade, email) VALUES (%s,%s,%s);", data)
        connection.commit()
        print("🟢 dados inseridos!\n")
    except psycopg2.Error as createError:
        print(f"🛑 Não foi possivel inserir os dados\n ⚠️ {createError}\n")
        connection.rollback()


def insertMany(cur, connection, externalData):
    try:
        data = (externalData)
        cur.executemany(
            "INSERT INTO public.clientes (nome, idade, email) VALUES (%s,%s,%s);", externalData)
        connection.commit()
        print("🟢 dados inseridos!\n")
    except psycopg2.Error as createError:
        print(f"🛑 Não foi possivel inserir os dados\n ⚠️ {createError}\n")
        connection.rollback()


def updateData(cur, connection, nome, idade, email, id):
    try:
        data = (nome, idade, email, id)
        cur.execute(
            "UPDATE public.clientes SET nome=%s,idade=%s, email=%s WHERE id=%s", data)
        connection.commit()
        print("🟢 dados atualizados!\n")

    except psycopg2.Error as updateError:
        print(f"🛑 Não foi possivel atualizar os dados\n ⚠️ {updateError}\n")
        connection.rollback()


def deleteData(cur, connection, id):
    try:
        data = (id,)  # COMMA (virgula) when entering only one value
        cur.execute(
            "DELETE FROM public.clientes WHERE id=%s", data)
        connection.commit()
        print("🟢 dados deletados!\n")

    except psycopg2.Error as deleteError:
        print(f"🛑 Não foi possivel deletar os dados\n ⚠️ {deleteError}\n")
        connection.rollback()


def selectOne(cur, id):
    cur = connection.cursor(cursor_factory=DictCursor)
    try:
        data = (id,)  # COMMA (virgula) when entering only one value
        cur.execute("SELECT * FROM public.clientes WHERE id=%s", data)
        return cur.fetchone()

    except psycopg2.Error as selectOneError:
        print(f"🛑 Não foi possivel retornar os dados\n ⚠️ {selectOneError}\n")


def selectAll(cur):
    try:
        cur.execute("SELECT * FROM public.clientes ORDER BY nome")
        return cur.fetchall()

    except psycopg2.Error as selectOneError:
        print(f"🛑 Não foi possivel retornar os dados\n ⚠️ {selectOneError}\n")


# insertData(cur, connection, "Natalia do Carmo", 25, "natalia@email.com")
# updateData(cur, connection, "Natalia do Carmo", 25, "natalia@email.com", 2)
# deleteData(cur, connection,  2)

# insertMany(cur, connection, externalData)

cliente = selectOne(cur, 4)
print(f"\tOlá {cliente["nome"]}\n Bem vindo(a) ao sistema!\n")

# todosClientes = selectAll(cur)
# for cliente in todosClientes:
#     print(cliente)


externalData = [
    ("João de sá", 23, "joãodesa@email.com"),
    ("Ana de sá", 63, "aninhadesa@email.com"),
    ("Luiz de sá", 33, "lzdesa@email.com"),
    ("Beatriz de sá", 26, "biadesa@email.com"),
]
