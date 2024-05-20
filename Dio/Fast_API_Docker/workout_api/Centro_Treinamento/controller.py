from uuid import uuid4
from pydantic import UUID4
from sqlalchemy.future import select
from fastapi import APIRouter, Body, status, HTTPException
from workout_api.Centro_Treinamento.model import CentroTreinamentoModel
from workout_api.Centro_Treinamento.schema import CentroTreinamento, CentroTreinamentoOut
from workout_api.contrib.dependencies import DatabaseDependency

router = APIRouter()


@router.post(path="/",
    summary="Criar um novo Centro de Treinamento",
    status_code=status.HTTP_201_CREATED,
    response_model=CentroTreinamentoOut,
)
async def post(
    db_session: DatabaseDependency, Centro_treinamento_in: CentroTreinamento = Body(...)
) -> CentroTreinamentoOut:
    centro_treinamento_out = CentroTreinamentoOut(id=uuid4(), **Centro_treinamento_in.model_dump())
    centro_treinamento_model = CentroTreinamentoModel(**centro_treinamento_out.model_dump())

    db_session.add(centro_treinamento_model)
    await db_session.commit()
    return centro_treinamento_out


@router.get(path="/",
    summary="Consultar todos os Centros de treinamento",
    status_code=status.HTTP_200_OK,
    response_model=list[CentroTreinamentoOut],
)
async def query(db_session: DatabaseDependency) -> list[CentroTreinamentoOut]:
    centro_treinamentos: list[CentroTreinamentoOut] = (await db_session.execute(select(CentroTreinamentoModel))).scalars().all()
    return centro_treinamentos

@router.get(path="/{id}",
    summary="Consulta Centro treinamento por id",
    status_code=status.HTTP_200_OK,
    response_model= CentroTreinamentoOut,
)
async def query(id:UUID4,db_session: DatabaseDependency) -> CentroTreinamentoOut:
    centro_treinamento: CentroTreinamentoOut = (await db_session.execute(select(CentroTreinamentoModel).filter_by(id=id))).scalars().first()

    if not centro_treinamento:
        raise HTTPException(
           status_code=status.HTTP_404_NOT_FOUND, details=f"Centro de treinamento não encontrado para o id: {id}\n"
        )
    
    return centro_treinamento

