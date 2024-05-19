from typing import Annotated

from pydantic import Field, PositiveFloat
from sqlalchemy import Integer, String

from workout_api.contrib.schemas import BaseSchema


class Atleta(BaseSchema):

    nome: Annotated[
        String,
        Field(description="Nome do Atleta", example="Genilson do Carmo", max_length=90),
    ]
    cpf: Annotated[
        Integer,
        Field(description="CPF do Atleta", example="123.321.321-44", max_length=11),
    ]
    idade: Annotated[
        Integer, Field(description="Idade do Atleta", example="32", max_length=3)
    ]
    peso: Annotated[
        PositiveFloat, Field(description="Peso do Atleta", example="92", max_length=3)
    ]
    altura: Annotated[
        PositiveFloat, Field(description="Altura do Atleta", example="1.93")
    ]
    sexo: Annotated[
        String, Field(description="Sexo do Atleta", example="F", max_length=1)
    ]
