from typing import Annotated
from pydantic import Field, UUID4
from clientes_api.contrib.schemas import BaseSchema


class TipoClienteIn(BaseSchema):
    tipo: Annotated[str, Field(
        descripiton="Type of cliente", example="Platina", max_length=40)]

class TipoClienteOut(TipoClienteIn):
     id: Annotated[UUID4, Field(descripition='Identifier')]

