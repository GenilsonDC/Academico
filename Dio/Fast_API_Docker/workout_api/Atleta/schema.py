from typing import Annotated, Optional

from pydantic import Field, PositiveFloat

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
        str,
        Field(description="CPF do Atleta", example="12332132144", max_length=11),
    ]
    idade: Annotated[
        int, Field(description="Idade do Atleta", example=32)
    ]
    peso: Annotated[
        PositiveFloat, Field(description="Peso do Atleta", example=92.1)
    ]
    altura: Annotated[
        PositiveFloat, Field(description="Altura do Atleta", example=1.93)
    ]
    sexo: Annotated[
        str, Field(description="Sexo do Atleta", example="M", max_length=1)
    ]
    categoria: Annotated[Categoria, Field(description="Categoria do treino")]
    centro_treinamento: Annotated[CentroTreinamentoAtleta, Field(description="Centro de Treinamento do atleta")]


class AtletaOut(Atleta, OutMixIn):
    pass

class AtletaUpdate(BaseSchema):
    nome: Annotated[ Optional[str], Field(None, description="Nome do Atleta", example="Genilson do Carmo", max_length=90)]
    idade: Annotated[ Optional[int], Field(None, description="Idade do Atleta", example=32)]
    peso: Annotated[ Optional[PositiveFloat], Field(None, description="Peso do Atleta", example=92.1)]
    altura: Annotated[ Optional[PositiveFloat], Field(None, description="Altura do Atleta", example=1.93)]