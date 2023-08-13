
import static org.junit.Assert.assertTrue;

import java.Entradas.NumberOperations;

import static org.junit.Assert.assertFalse;
import org.junit.Test;

public class test_number_operations {
    @Test
    public void testIsEven() {
        NumberOperations numberOperations = new NumberOperations();
        assertTrue(numberOperations.isEvent(4));
        assertFalse(numberOperations.isEvent(7));
    }

    @Test
    public void testIsOdd() {
        NumberOperations numberOperations = new NumberOperations();
        assertTrue(numberOperations.isOdd(3));
        assertFalse(numberOperations.isOdd(6));
    }
}
