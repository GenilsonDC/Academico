from datetime import datetime
from typing import Annotated
from pydantic import UUID4, BaseModel, Field
class BaseSchema(BaseModel):
    class Config:
        extra = "forbid"
        from_attributes = True
class OutMixIn(BaseSchema):
    id: Annotated[UUID4, Field(descripition="Identifier")]
    created_at: Annotated[datetime, Field(descripition="Criation date")]
