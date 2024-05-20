from typing import Annotated

from pydantic import UUID4, Field, PositiveFloat

from workout_api.Categorias.schema import Categoria
from workout_api.Centro_Treinamento.schema import CentroTreinamentoAtleta
from workout_api.contrib.schemas import BaseSchema, OutMixIn


class Atleta(BaseSchema):

    nome: Annotated[
        str,
        Field(
            description="Nome do Atleta", example="Genilson do Carmo", max_length=90
        ),
    ]
    cpf: Annotated[
        int,
        Field(description="CPF do Atleta", example="123.321.321-44", max_length=11),
    ]
    idade: Annotated[
        int, Field(description="Idade do Atleta", example="32", max_length=3)
    ]
    peso: Annotated[
        PositiveFloat, Field(description="Peso do Atleta", example="92", max_length=3)
    ]
    altura: Annotated[
        PositiveFloat, Field(description="Altura do Atleta", example="1.93")
    ]
    sexo: Annotated[
        str, Field(description="Sexo do Atleta", example="F", max_length=1)
    ]
    categoria: Annotated[Categoria, Field(description="Categoria do treino")]
    centro_treinamento: Annotated[CentroTreinamentoAtleta, Field(description="Centro de Treinamento do atleta")]


class AtletaOut(Atleta, OutMixIn):
    pass
    # id: Annotated[UUID4, Field(description="Identificador do Atleta")]
