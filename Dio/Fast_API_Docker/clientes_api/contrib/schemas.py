from pydantic import BaseModel, Field, UUID4
from typing import Annotated
from datetime import datetime



class BaseSchema(BaseModel):
    class Config:
        extra = "forbid"
        from_attributes = True

class OutMixIn(BaseModel):
    id: Annotated[UUID4, Field(descripition='Identifier')]
    created_at: Annotated[datetime, Field(descripition="Criation date")]