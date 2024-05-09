​		**Not Only SQL**

Não seguem modelo de tabelas e relacionamentos
projetados para lidar com **alto volume de dados** alta escalabilidade
Alta **flexibilidade** na estrutura de dados
São amplamente utilizados em cenários onde a consistência imediata dos dados é critica.****

|              **SQL**              |                    **NoSQL**                    |
| :-------------------------------: | :---------------------------------------------: |
|       Modelo de dados Fixo        |          Modelo de dados **flexível**           |
| Escalabilidade vertical(hardware) |            Escalabilidade horizontal            |
|        Transação ACID 100%        |    Transação ACID ausentes total ou parcial     |
|     Linguagem de consulta SQL     | Cada SGBD tem sua própria linguagem de consulta |

**Vantagens**
Flexibilidade na modelagem
Alta escalabilidade
Melhor desempenho em cenário de consulta intensiva
Tolerância a falhas

**Desvantagens**
Menor consistência de dados **imediata**
Menor suporte a consultas complexas( depende do SGBD)

**Visão geral dos tipos de NoSQL**

**Tipos**

- **Key-Value**
  Armazena dados como pares de *chave e valor*, onde cada chave é um identificador único para acessar o valor correspondente. **Expl. de SGBD**: Redis, Riak, Amazon DynamoDB.
  **Uso**: *Um site pode usar um banco de dados Redis para armazenas informações de sessão de usuário*
- **Document**
  Armazenan dados em dacumentos semiestruturados, geralmente em formato JSON ou BSON.
  **Expl. de SGBD**: MongoDB, Couchbase, Apache CouchDB.
  **Uso**: Um catálogo de e-commerce pode usar o MongoDB para armazenar informações de produtos, como nome, descrição, preço e atributos adicionais.
- **Column**
  Armazena dados em formato de colunas, o que permite alta escalabilidade e eficiência em determinados tipos de consultas.
  **Expl. de SGBD**: Apache Cassandra, ScyllaDB, HBase.
  **Uso**: Um sistema de registro de aplicativos pode usar o Apache Cassandra para armazenar registros de log.
- **Graph**
  Armazenar e consultar dadso interconectados, onde os relacionamentos entre os dados são tão importantes quanto os propios dados.
  **Expl. de SGBD**: Neo4j, Amazon Neptune, JanusGraph.
  **Uso**: Uma rede social pode usar o Neo4j para armazenar os perfis dos usuários e suas conexões, permitindo consultas eficientes para encontrar amigos em comum.

