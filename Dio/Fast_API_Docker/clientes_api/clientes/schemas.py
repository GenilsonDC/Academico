from typing import Annotated

from pydantic import Field

from clientes_api.contrib.schemas import BaseSchema


class Cliente(BaseSchema):
    nome: Annotated[str, Field(
        descripiton="Nome do cliente", examples="Alexandra Brito", max_length=80)]
    cpf: Annotated[int, Field(
        descripiton="CPF do cliente", examples="12312332100", max_length=11)]
    idade: Annotated[int, Field(
        descripiton="Idade do cliente", examples="75", max_length=3)]
    sexo: Annotated[str, Field(
        descripiton="Sexo do cliente", examples="M", max_length=1)]
