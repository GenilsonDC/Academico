from typing import Annotated

from pydantic import Field, UUID4

from workout_api.contrib.schemas import BaseSchema


class CentroTreinamento(BaseSchema):

    nome: Annotated[
        str,
        Field(
            description="Nome do Centro de Trinamento",
            example="CT Alpha Box",
            max_length=50,
        ),
    ]
    endereco: Annotated[
        str,
        Field(
            description="Endereço do CT",
            example="Ruas da creatina, 23, Jardim Belucci",
            max_length=100,
        ),
    ]
    propietario: Annotated[
        str,
        Field(description="Propietário do CT", example="Luiz Machado", max_length=80),
    ]

class CentroTreinamentoAtleta(BaseSchema):
    nome:Annotated[str,Field(description="Nome do CT do atleta", example="CT Box", max_length=50)]

class CentroTreinamentoOut(CentroTreinamento):
    id: Annotated[UUID4, Field(description="Identificador do Centro de Treinamento")]
