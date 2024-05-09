from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from clientes_api.contrib.models import BaseModel


class TipoClienteModel(BaseModel):
    __tablename__ = "tipo_cliente"

    pk_id: Mapped[int] = mapped_column(Integer, prymary_key=True)
    tipo: Mapped[str] = mapped_column(String(40), nullable=False)
    cliente: Mapped["ClienteModel"] = relationship(back_populates="tipo")
