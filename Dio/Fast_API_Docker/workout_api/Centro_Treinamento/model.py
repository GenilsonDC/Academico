from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from workout_api.contrib.model import BaseModel


class CentroTreinamentoModel(BaseModel):
    __tablename__ = "centros_treinamento"

    pk_id: Mapped[int] = mapped_column(Integer, primary_key=True)
    nome: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    endereco: Mapped[str] = mapped_column(String(100), nullable=False)
    propietario: Mapped[str] = mapped_column(String(80), nullable=False)
    atleta: Mapped["AtletaModel"] = relationship(back_populates="centro_treinamento")
