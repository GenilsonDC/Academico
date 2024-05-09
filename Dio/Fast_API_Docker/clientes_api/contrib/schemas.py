from pydantic import BaseModel


class BaseSchema(BaseModel):
    class Config:
        extra = "forbird"
        from_attributes = True
