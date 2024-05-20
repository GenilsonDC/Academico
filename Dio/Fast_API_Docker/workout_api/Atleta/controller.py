from datetime import datetime
from fastapi import APIRouter, Body, status, HTTPException
from uuid import uuid4
from pydantic import UUID4
from sqlalchemy.future import select

from workout_api.contrib.dependencies import DatabaseDependency
from workout_api.Atleta.model import AtletaModel
from workout_api.Categorias.model import CategoriaModel
from workout_api.Centro_Treinamento.model import CentroTreinamentoModel
from workout_api.Atleta.schema import Atleta, AtletaOut, AtletaUpdate

router = APIRouter()

@router.post(path="/",
    summary="Criar um novo Atleta",
    status_code=status.HTTP_201_CREATED,
    response_model=AtletaOut,
)
async def post(
    db_session: DatabaseDependency, atleta_in: Atleta = Body(...)
):
    nome_categoria = atleta_in.categoria.nome
    nome_ct = atleta_in.centro_treinamento.nome

    categoria = (await db_session.execute(select(CategoriaModel).filter_by(nome=nome_categoria))).scalars().first()
    if not categoria:
        raise HTTPException(
           status_code=status.HTTP_400_BAD_REQUEST, detail=f"Categoria {nome_categoria} não encontrada\n"
        )
    centro_treinamento = (await db_session.execute(select(CentroTreinamentoModel).filter_by(nome=nome_ct))).scalars().first()
    if not centro_treinamento:
        raise HTTPException(
           status_code=status.HTTP_400_BAD_REQUEST, detail=f"Centro de treinamento {nome_ct} não encontrado\n"
        )
    try:
        atleta_out = AtletaOut(id=uuid4(), created_at=datetime.utcnow(), **atleta_in.model_dump())
        atleta_model = AtletaModel(**atleta_out.model_dump(exclude={"categoria", "centro_treinamento"}))
        atleta_model.categoria_id = categoria.pk_id
        atleta_model.centro_treinamento_id = centro_treinamento.pk_id

        db_session.add(atleta_model)
        await db_session.commit()
    except Exception as err:
         raise HTTPException(
           status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Erro: Não foi possivel inserir os dados!\n {err}"
        )
    return atleta_out

@router.get(path="/",
    summary="Consultar todos os atletas",
    status_code=status.HTTP_200_OK,
    response_model=list[AtletaOut],
)
async def query(db_session: DatabaseDependency) -> list[AtletaOut]:
    atletas = (await db_session.execute(select(AtletaModel))).scalars().all()
    return [AtletaOut.model_validate(atleta) for atleta in atletas]

@router.get(path="/{id}",
    summary="Consulta atletas por id",
    status_code=status.HTTP_200_OK,
    response_model=AtletaOut,
)
async def query(id: UUID4, db_session: DatabaseDependency) -> AtletaOut:
    atleta = (await db_session.execute(select(AtletaModel).filter_by(id=id))).scalars().first()
    if not atleta:
        raise HTTPException(
           status_code=status.HTTP_404_NOT_FOUND, detail=f"Atleta não encontrado para o id: {id}\n"
        )
    return AtletaOut.model_validate(atleta)

@router.patch(path="/{id}",
    summary="Editar atleta por id",
    status_code=status.HTTP_200_OK,
    response_model=AtletaOut,
)
async def update(id: UUID4, db_session: DatabaseDependency, atleta_in: AtletaUpdate = Body(...)) -> AtletaOut:
    atleta = (await db_session.execute(select(AtletaModel).filter_by(id=id))).scalars().first()
    if not atleta:
        raise HTTPException(
           status_code=status.HTTP_404_NOT_FOUND, detail=f"Atleta não encontrado para o id: {id}\n"
        )

    update_data = atleta_in.model_dump(exclude_unset=True)    

    for key, value in update_data.items():
        setattr(atleta, key, value)

    try:
        await db_session.commit()
        await db_session.refresh(atleta)
    except Exception as err:
        raise HTTPException(
           status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Erro: Não foi possível atualizar os dados!\n {err}"
        )
    
    return AtletaOut.model_validate(atleta)
