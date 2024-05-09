from typing import Annotated

from pydantic import BaseModel, Field


class TipoCliente(BaseModel):
    tipo: Annotated[str, Field(
        descripiton="Tipo de cliente", examples="Platina", max_length=40)]
