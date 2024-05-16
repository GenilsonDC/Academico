from fastapi import APIRouter, status, Body
from clientes_api.clientes.schemas import ClienteIn
from clientes_api.contrib.dependencies import DatabaseDependency

router = APIRouter()

@router.post("/", summary = "Create new customer", status_code=status.HTTP_201_CREATED)
async def post(db_session:DatabaseDependency, cliente_in: ClienteIn = Body(...)):
    pass