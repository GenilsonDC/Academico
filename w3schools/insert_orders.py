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
table_name = "orders"
# --------------------------------
csv_file = "Csvs/Orders.csv"
# --------------------------------

insert_query = sql.SQL("""
    INSERT INTO {} (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID)
    VALUES %s;
""").format(sql.Identifier(table_name))

try:
    with open(csv_file, 'r') as f:
        next(f)  # Skip the header row
        data = [line.strip().split(';') for line in f]
        # Adjust page_size as needed
        execute_values(cur, insert_query, data, page_size=1000)
    conn.commit()
    print(f"\n\nSucesso! Todos os dados de {table_name} foram carregados")
except Exception as e:
    conn.rollback()
    print(f"\n\tErro! Não foi possível carregar os dados de {table_name}: {e}")

finally:
    cur.close()
    conn.close()
