from typing import Annotated

from pydantic import Field

from clientes_api.contrib.schemas import BaseSchema, OutMixIn


class Clientes(BaseSchema):
    nome: Annotated[str, Field(
        descripiton="Nome do cliente", example="Alexandra Brito", max_length=80)]
    cpf: Annotated[int, Field(
        descripiton="CPF do cliente", example="12312332100", max_length=11)]
    idade: Annotated[int, Field(
        descripiton="Idade do cliente", example="75", max_length=3)]
    sexo: Annotated[str, Field(
        descripiton="Sexo do cliente", example="M", max_length=1)]

class ClienteIn(Clientes):
    pass
class ClienteOut(Clientes, OutMixIn):
    pass