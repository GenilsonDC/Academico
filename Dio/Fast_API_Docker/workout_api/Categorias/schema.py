from typing import Annotated

from pydantic import UUID4, Field

from workout_api.contrib.schemas import BaseSchema


class Categoria(BaseSchema):
    nome: Annotated[
        str, Field(description="Nome da Categoria", examples="Scale", max_length=50)
    ]


class CategoriaOut(Categoria):
    id: Annotated[UUID4, Field(description="Identificador da categoria")]
