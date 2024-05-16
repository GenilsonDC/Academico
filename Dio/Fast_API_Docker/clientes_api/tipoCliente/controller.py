from sqlalchemy.future import select
from uuid import uuid4
from fastapi import APIRouter, status, Body
from clientes_api.tipoCliente.schemas import TipoClienteIn,TipoClienteOut
from clientes_api.tipoCliente.models import TipoClienteModel
from clientes_api.contrib.dependencies import DatabaseDependency

router = APIRouter()

@router.post(
                "/",
                summary = "Create new type of customer",
                status_code=status.HTTP_201_CREATED,
                reponse_model = TipoClienteOut,
                )
async def post(
        db_session: DatabaseDependency,
        tipoCliente_in: TipoClienteIn = Body(...)
        ) -> TipoClienteOut:
        
        tipoCliente_out = TipoClienteOut(id=uuid4(), **tipoCliente_in.model_dump())
        tipoCliente_model = TipoClienteModel(**tipoCliente_out.model_dump())

        db_session.add(tipoCliente_model)
        await db_session.commit()

        return tipoCliente_out
      
@router.get("/",
            summary = "Check customer type",
            status_code=status.HTTP_200_OK,
            reponse_model = list[TipoClienteOut],
            )

async def query(
        db_session: DatabaseDependency) -> list[TipoClienteOut]:
        tipoCliente:list[TipoClienteOut] = (await db_session.execute(select(TipoClienteModel))).scalars().all()

        return tipoCliente