from fastapi import APIRouter
from clientes_api.clientes.controller  import router as clientes
from clientes_api.tipoCliente.controller  import router as tipoCliente

api_router = APIRouter()
api_router.include_router(clientes, prefix="/clientes", tags=["clientes"])
api_router.include_router(tipoCliente, prefix="/tipoCliente", tags=["tipoCliente"])
