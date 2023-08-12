import number_operations

def test_is_even():
    assert number_operations.is_even(4) == True
    assert number_operations.is_even(5) == False
    assert number_operations.is_even(0) == True

def test_is_odd():
    assert number_operations.is_odd(3) == True
    assert number_operations.is_odd(-6) == False
    assert number_operations.is_odd(1) == True