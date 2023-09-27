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
    print(f"Erro ao conectar ao Banco {db_name}:  {e}")
    exit()

cur = conn.cursor()
# --------------------------------
table_name = "products"
# --------------------------------
csv_file = "./Csvs/Products.csv"
# --------------------------------

insert_query = sql.SQL("""
    INSERT INTO {} (ProductID, ProductName, SupplierID, CategoryID, Unit, Price)
    VALUES %s;
""").format(sql.Identifier(table_name))

try:
    with open(csv_file, 'r') as f:
        next(f)  # Skip the header row
        data = [line.strip().split(';') for line in f]
        # Adjust page_size as needed
        execute_values(cur, insert_query, data, page_size=1000)
    conn.commit()
    print(f"Sucesso! Todos os dados de {table_name} foram carregados")
except Exception as e:
    conn.rollback()
    print("Erro! Não foi possível carregar os dados:", e)
finally:
    cur.close()
    conn.close()

# ************** Explicacao **************


# 1. Importações: Você importa as bibliotecas `psycopg2` para trabalhar com o PostgreSQL,
# `sql` para criar consultas SQL parametrizadas e `execute_values` para inserir dados em lote de forma mais eficiente.

# 2. Definição das informações de conexão: Você define as informações necessárias para se conectar ao banco de dados PostgreSQL,
# incluindo o nome do banco de dados, host, porta, usuário e senha.

# 3. Tentativa de conexão: Você tenta estabelecer uma conexão com o banco de dados usando as informações fornecidas.
# Se ocorrer um erro, ele será tratado e uma mensagem de erro será impressa.

# 4. Criação do cursor: Um cursor é criado para executar comandos SQL no banco de dados.

# 5. Definição do nome da tabela: Você especifica o nome da tabela no PostgreSQL para a qual deseja inserir os dados do arquivo CSV.

# 6. Definição do caminho do arquivo CSV: Você especifica o caminho do arquivo CSV que contém os dados que serão inseridos na tabela.

# 7. Criação da consulta SQL: Você cria uma consulta SQL parametrizada para inserir os dados na tabela.
# A diferença em relação ao código anterior é que agora você está usando uma consulta `INSERT INTO` em vez de `COPY`.
# A consulta parametrizada usa `%s` como um marcador de posição para os valores que serão inseridos.

# 8. Leitura do arquivo CSV: Você abre o arquivo CSV em modo leitura (`'r'`) e pula a primeira linha que geralmente
#  contém os cabeçalhos das colunas usando `next(f)`.

# 9. Preparação dos dados: Você lê o restante do arquivo linha por linha e divide cada linha em
#  uma lista de valores usando `line.strip().split(';')`. Isso cria uma lista de listas, onde cada lista interna representa uma linha de dados do CSV.

# 10. Inserção em lote: Em vez de inserir cada linha individualmente, você utiliza a função `execute_values` para inserir os dados em lote.
# Isso é mais eficiente do que inserções individuais, especialmente para grandes conjuntos de dados.
# Você especifica o cursor, a consulta parametrizada, os dados a serem inseridos e opcionalmente o tamanho da página (neste caso, 1000).

# 11. Confirmação da transação: Se a operação de inserção for bem-sucedida, a transação é confirmada com `conn.commit()`.

# 12. Tratamento de erros: Se ocorrer algum erro durante a execução do código,
# a transação é revertida com `conn.rollback()` e uma mensagem de erro é impressa.

# 13. Fechamento do cursor e da conexão: O cursor e a conexão com o banco de dados são fechados corretamente para liberar recursos.
