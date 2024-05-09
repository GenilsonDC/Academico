CREATE TABLE usuarios
( 
	id INT,
 	nome varchar(80) not null COMMENT 'Nome do Usuario',
 	email varchar(120) NOT null UNIQUE COMMENT'e-mail do usuario',
 	endereco varchar(200) not null COMMENT 'endereco do usuario',
 	data_nascimento date NOT null COMMENT 'Data de nacimento do usuario'
);

CREATE TABLE Viagens.destinos(
	id INT,
	nome_destino varchar(120) not null UNIQUE COMMENT 'Nome de destino',
	descricao varchar(255) not null COMMENT 'Descrição do destino'
);

CREATE TABLE Viagens.reservas(
	id int COMMENT 'id da reserva',
	id_usuario int COMMENT'Referencia do Id do usuario que fez a reserva',
	id_destino int NOT null COMMENT'Referencia do id do destino da reserva',
	data Date COMMENT 'Data da reserva',
	status_reserva varchar(255) DEFAULT 'PENDENTE' COMMENT 'status da reserva (CONFIRMADA, PENDENTE, CANCELADA, etc)'       
);

**----- insert usuarios-----**
insert into usuarios(id, nome, email, endereco, data_nascimento)
VALUES(1, 'Genilson do Carmo', 'email@com.br','rua do endereco tal', '1911-12-05'),
VALUES(2, 'Maria do Carmo', 'mariaemail@com.br','rua do endereco tal', '1912-11-15')

INSERT INTO usuarios(id, nome, email, endereco, data_nascimento)
VALUES(3, 'Gessica do Carmo', 'gessicaemail@com.br','Avenida Y, Cidade Y, Estado EY ', '1911-12-05');

**---- destinos ----**
insert into destinos(id, nome_destino, descricao)
VALUES(1, 'Sorocaba', 'Uma rodoviaria, sistema BRT, aeroporto, bicicletas')
VALUES(2, 'Bahia', 'Tem carnaval, e feriados')
VALUES(3, 'Itu', 'Uma rodoviaria, Pontos turisticos')

***---- Reservas ----**-*
insert into reservas(id, id_usuario, id_destino, data, status_reserva)
VALUES(1, 2, 1, '2024-05-07', 'CONFIRMADA')

***----> Comano util <----***
INSERT INTO usuarios_nova_tabela(id, nome, email, endereco, data_nascimento)
SELECT id, nome, email, endereco, data_nascimento
FROM usuarios

***---- IDs auto increment----***
ALTER TABLE reservas
MODIFY COLUMN id INT AUTO_INCREMENT,
ADD PRIMARY KEY(id);

**---- FKs -----**
ALTER TABLE reservas
ADD CONSTRAINT fk_reserva_usuarios
FOREIGN KEY (id_usuario) REFERENCES usuarios (id);
---- Com CASCADE DELETE

ALTER TABLE reservas
ADD CONSTRAINT fk_reserva_destino
FOREIGN KEY(id_destino) REFERENCES destinos(id)
ON DELETE CASCADE;

**-- Criando novos compos na tabela usuarios para satisfazer a 1FN --**

ALTER TABLE usuarios
ADD rua VARCHAR(120),
ADD numero VARCHAR(5),
ADD cidade VARCHAR(50),
ADD estado VARCHAR(50);

**populando os novos compos utilizando SUBSTRING**

UPDATE usuarios
SET rua = SUBSTRING_INDEX(SUBSTRING_INDEX(endereco, ',', 1), ',', -1),
	numero = SUBSTRING_INDEX(SUBSTRING_INDEX(endereco, ',', 2), ',', -1),
	cidade = SUBSTRING_INDEX(SUBSTRING_INDEX(endereco, ',', 3), ',', -1),
	estado = SUBSTRING_INDEX(endereco, ',', -1);

**consultas aninhadas**
SELECT * FROM destinos
WHERE id NOT IN(SELECT id_destino FROM reservas)

SELECT nome, (SELECT COUNT(*) FROM reservas WHERE id_usuario = usuarios.id) as total_reservas from usuarios
![image-20240507205931191](C:\Git\Academico\Dio\MariaDB\image-20240507205931191.png)

**Calculando e veficando a maior  idade**
SELECT MAX(TIMESTAMPDIFF(YEAR, data_nascimento, CURRENT_DATE())) AS Maior_idade
FROM usuarios

**Índices** No MariaDB (e MySQL), índices são fundamentais para melhorar o desempenho de consultas em bancos de dados. Eles ajudam a acelerar a recuperação de dados, permitindo que o banco de dados localize registros mais rapidamente.
**Índice Simples em uma Coluna:** Este comando cria um índice simples em uma única coluna.
*CREATE INDEX index_name ON table_name(column_name)*;
**Índice em Múltiplas Colunas:** Você também pode criar índices em múltiplas colunas para melhorar o desempenho de consultas que envolvem várias colunas.
*CREATE INDEX index_name ON table_name(column1, column2, ...)*;
**Índice Único:** Este comando cria um índice único, garantindo que os valores na coluna (ou conjunto de colunas) sejam únicos. *CREATE UNIQUE INDEX index_name ON table_name(column_name*);
**Índice de Texto Completo (Full-Text Index):** Para pesquisas de texto completo em colunas de texto longo, como `TEXT` ou `VARCHAR`, você pode criar índices de texto completo para melhorar o desempenho de consultas de pesquisa de texto. *CREATE FULLTEXT INDEX index_name ON table_name(column_name)*;

CREATE INDEX idx_nome ON usuarios(nome)
EXPLAIN SELECT * FROM usuarios WHERE nome = "Genilson"
