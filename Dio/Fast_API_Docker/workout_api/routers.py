from fastapi import APIRouter

from workout_api.Atleta.controller import router as atleta
from workout_api.Categorias.controller import router as catagorias

api_router = APIRouter()
api_router.include_router(atleta, prefix="/atletas", tags=["atletas"])
api_router.include_router(catagorias, prefix="/catagorias", tags=["catagorias"])
