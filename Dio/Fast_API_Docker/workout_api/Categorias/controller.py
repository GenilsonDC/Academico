from fastapi import APIRouter, Body, status

from workout_api.Categorias.schema import Categoria, CategoriaOut
from workout_api.contrib.dependencies import DatabaseDependency

router = APIRouter()


@router.post(
    "/",
    summary="Criar nova Categorias",
    status_code=status.HTTP_201_CREATED,
    response_model=CategoriaOut,
)
async def post(
    db_session: DatabaseDependency, categoria_in: Categoria = Body(...)
) -> CategoriaOut:
    pass
