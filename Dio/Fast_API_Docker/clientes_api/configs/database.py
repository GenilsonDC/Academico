from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.orm import  sessionmaker
from clientes_api.configs.settings import settings

engine = create_async_engine(settings.DB_URL, echo=False)
async_section = sessionmaker(
    engine, class_=AsyncSession, expire_on_commit=False,
)

async def get_session() -> AsyncGenerator:
    async with async_section() as session:
        yield session