import psycopg2
from psycopg2 import sql
from psycopg2.extras import execute_values

db_name = "W3School"
db_host = "localhost"
db_port = "5432"
db_user = "postgres"
db_passw = "572711"

try:
    conn = psycopg2.connect(
        dbname=db_name,
        host=db_host,
        port=db_port,
        user=db_user,
        password=db_passw
    )
except psycopg2.Error as e:
    print(f"\n\tErro ao conectar ao Banco {db_name}:  {e}")
    exit()

cur = conn.cursor()
# --------------------------------
table_name = "suppliers"
# --------------------------------
csv_file = "Csvs/Suppliers.csv"
# --------------------------------

insert_query = sql.SQL("""
    INSERT INTO {} (SupplierID, SupplierName, ContactName, Address, City, PostalCode, Country, Phone)
    VALUES %s;
""").format(sql.Identifier(table_name))

try:
    with open(csv_file, 'r') as f:
        next(f)
        data = [line.strip().split(';') for line in f]
        execute_values(cur, insert_query, data, page_size=500)
    conn.commit()
    print(f"\n\nSucesso! Todos os dados de {table_name} foram carregados")
except Exception as e:
    conn.rollback()
    print(f"\n\tErro! Não foi possível carregar os dados de {table_name}: {e}")
finally:
    cur.close()
    conn.close()
