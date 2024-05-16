from fastapi import FastAPI
from clientes_api.routers import api_router

app = FastAPI(title='Clientes API')
app.include_router(api_router)
