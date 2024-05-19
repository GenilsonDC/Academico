from fastapi import APIRouter, Body, status

from workout_api.Atleta.schema import Atleta
from workout_api.contrib.dependencies import DatabaseDependency

router = APIRouter()


@router.post("/", summary="Criar novo Atleta", status_code=status.HTTP_201_CREATED)
async def post(db_session: DatabaseDependency, atleta_in: Atleta = Body()):
    pass
