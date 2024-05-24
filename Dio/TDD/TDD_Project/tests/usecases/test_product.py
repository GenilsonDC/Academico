from typing import List
from uuid import UUID

import pytest

from store.core.exeptions import NotFoundMessage
from store.schemas.product import ProductOut, ProductUpdateOut
from store.usecases.product import product_usecase


async def test_usecases_create_should_return_success(product_in):
    result = await product_usecase.create(body=product_in)

    assert isinstance(result, ProductOut)
    assert result.name == "Nokia Baby Pro Max"


async def test_usecases_get_should_return_success(product_id):
    result = await product_usecase.get(id=product_id)

    assert isinstance(result, ProductOut)
    assert result.name == "Nokia Baby Pro Max"


async def test_usecases_get_should_return_not_found():
    with pytest.raises(NotFoundMessage) as ntf_err:
        await product_usecase.get(id=UUID("1e4f214e-85f7-461a-89d0-a751a32e3bb9"))

    assert (
        ntf_err.value.message_error
        == "Not found the product: 1e4f214e-85f7-461a-89d0-a751a32e3bb9"
    )


async def test_usecases_query_should_return_success():
    result = await product_usecase.query()

    assert isinstance[result, List]


async def test_usecases_update_should_return_success(product_id, product_up):
    product_up.price = 6.500
    result = await product_usecase.update(id=product_id, body=product_up)

    assert isinstance(result, ProductUpdateOut)
