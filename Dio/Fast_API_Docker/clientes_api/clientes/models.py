from datetime import datetime

from sqlalchemy import UUID, Datetime, Integer, String
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from clientes_api.contrib.models import BaseModel


class ClienteModel(BaseModel):
    __tablename__ = "clientes"

    pk_id: Mapped[int] = mapped_column(Integer, prymary_key=True)
    nome: Mapped[str] = mapped_column(String(80), nullable=False)
    cpf: Mapped[int] = mapped_column(Integer(11), nullable=False)
    idade: Mapped[int] = mapped_column(Integer(3), nullable=False)
    sexo: Mapped[str] = mapped_column(String(1), nullable=False)
    tipo_cliente: Mapped["tipoClienteModel"] = relationship(
        back_populates="cliente")
    tipo_cliente_id: Mapped[int] = mapped_column(
        ForeignKey("tipo_cliente.pk_id"))
    created_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)
