import unittest
from calculator import add, mult, div

class TestCalculator(unittest.TestCase):
    def test_add_Positive_Numbers(self):
        self.assertEqual(add(7, 8), 15)
    
    def test_add_Negative_Numbers(self):
        self.assertEqual(add(-9, -2), -11)

    def test_add_Mixed_Numbers(self):
        self.assertEqual(add(-5, 5), 0)
# *************** Multiplicacao/Multiplication

    def test_mult_Positive_Numbers(self):
        self.assertEqual(mult(3, 8), 24)

    def test_mult_Negative_Numbers(self):
        self.assertEqual(mult(-2, -3), 6)

    def test_mult_Mixed_NUmbers(self):
        self.assertEqual(mult(-5, 7), -35)
# *************** Divisao/Division
    def test_div_Positive_Numbers(self):
        self.assertEqual(div(4, 2 ), 2)

    def test_div_Negative_Numbers(self):
        self.assertEqual(div(-12, -3 ),4)

    def test_div_Mixed_NUmbers(self):
        self.assertEqual(div(-20, 5),-4)


if __name__ == '__main__':
    unittest.main()