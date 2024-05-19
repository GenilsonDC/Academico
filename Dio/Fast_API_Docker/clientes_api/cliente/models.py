from datetime import datetime
from sqlalchemy import DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from clientes_api.contrib.models import BaseModel


class ClienteModel(BaseModel):
    __tablename__ = "clientes"

    pk_id: Mapped[int] = mapped_column(Integer, primary_key=True)
    nome: Mapped[str] = mapped_column(String(80), nullable=False)
    cpf: Mapped[int] = mapped_column(Integer, unique=True, nullable=False)
    idade: Mapped[int] = mapped_column(Integer, nullable=False)
    sexo: Mapped[str] = mapped_column(String(1), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)
    tipo_cliente: Mapped["TipoClienteModel"] = relationship(back_populates="cliente")
    tipo_cliente_id: Mapped[int] = mapped_column(ForeignKey("tipo_cliente.pk_id"))
