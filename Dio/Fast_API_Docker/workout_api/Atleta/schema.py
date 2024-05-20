from typing import Annotated

from pydantic import UUID4, Field, PositiveFloat

from workout_api.Categorias.schema import Categoria
from workout_api.Centro_Treinamento.schema import CentroTreinamentoAtleta
from workout_api.contrib.schemas import BaseSchema, OutMixIn


class Atleta(BaseSchema):

    nome: Annotated[
        str,
        Field(
            description="Nome do Atleta", exampless="Genilson do Carmo", max_length=90
        ),
    ]
    cpf: Annotated[
        str,
        Field(description="CPF do Atleta", examples="123.321.321-44", max_length=11),
    ]
    idade: Annotated[
        int, Field(description="Idade do Atleta", examples="32", max_length=3)
    ]
    peso: Annotated[
        PositiveFloat, Field(description="Peso do Atleta", examples="92", max_length=3)
    ]
    altura: Annotated[
        PositiveFloat, Field(description="Altura do Atleta", examples="1.93")
    ]
    sexo: Annotated[
        str, Field(description="Sexo do Atleta", examples="F", max_length=1)
    ]
    categoria: Annotated[Categoria, Field(description="Categoria do treino")]
    centro_treinamento: Annotated[CentroTreinamentoAtleta, Field(description="Centro de Treinamento do atleta")]


class AtletaOut(Atleta, OutMixIn):
    pass
    # id: Annotated[UUID4, Field(description="Identificador do Atleta")]
