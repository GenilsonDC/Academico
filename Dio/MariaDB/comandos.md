**Chaves estrangeiras**

**ON DELETE**: Especifica o que acontece com os registros dependentes quando um registro ai é excluido.
**ON UPDATE**: Define o comportamento dos registros dependentes quando um registro pai é atualizado.
**CASCADE, SET NULL, SET DEFAULT e RESTRICT**

ALTER TABLE reservas
ADD CONSTRAINT fk_reserva_usuarios
FOREIGN KEY (id_usuario) REFERENCES usuarios (id);