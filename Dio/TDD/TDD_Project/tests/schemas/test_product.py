from uuid import UUID

import pytest
from pydantic import ValidationError

from store.schemas.product import ProductIn
from tests.factories import product_data


def test_schemas_return_success():
    data = product_data()
    product = ProductIn.model_validate(data)

    assert product.name == "Nokia Baby Pro Max"
    assert isinstance(product.id, UUID)


def test_schemas_return_raise():
    data = {"name": "Nokia Baby Pro Max", "quantity": 200, "price": 9.899}

    with pytest.raises(ValidationError) as valid_error:
        ProductIn.model_validate(data)
    assert valid_error.value.errors()[0] == {
        "type": "missing",
        "loc": ("status",),
        "msg": "Field required",
        "input": {"name": "Nokia Baby Pro Max", "quantity": 200, "price": 9.899},
        "url": "https://errors.pydantic.dev/2.7/v/missing",
    }
