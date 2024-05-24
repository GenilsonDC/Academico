from typing import Optional

from pydantic import BaseModel, Field

from store.schemas.base import BaseSchemaMixin


class ProductsBase(BaseModel):
    name: str = Field(..., description="Product name")
    quantity: int = Field(..., description="Product quantity")
    price: float = Field(..., description="Product price")
    status: bool = Field(..., description="Product status")


class ProductIn(ProductsBase, BaseSchemaMixin): ...


class ProductOut(ProductIn): ...


class ProductUpdate(BaseSchemaMixin):
    quantity: Optional[int] = Field(..., description="Product quantity")
    price: Optional[float] = Field(..., description="Product price")
    status: Optional[bool] = Field(..., description="Product status")


class ProductUpdateOut(ProductOut): ...
