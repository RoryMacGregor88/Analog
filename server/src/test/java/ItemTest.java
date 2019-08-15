import com.codeclan.server.repositories.ItemRepository;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

import com.codeclan.server.enums.Decade;
import com.codeclan.server.enums.Type;
import com.codeclan.server.models.Item;

public class ItemTest {

    ItemRepository itemRepository;

    Item item1;
    Item item2;
    Item item3;

    @Before
    public void before() {
        item1 = new Item(Type.GUITAR, "Fender", "Stratocaster", 8935, 1956, Decade.FIFTIES, 24999.99, "This is sample text");
        item2 = new Item(Type.AMPLIFIER, "Marshall", "JCM800", 4557, 1987, Decade.EIGHTIES, 999.99, "This is sample text");
        item3 = new Item(Type.SYNTHESIZER, "Roland", "Juno60", 5015, 1978, Decade.SEVENTIES, 2999.99, "This is sample text");
    }

    @Test
    public void hasType() {
        assertEquals(Type.GUITAR, item1.getType());
    }

    @Test
    public void hasBrand() {
        assertEquals("Roland", item3.getBrand());
    }

    @Test
    public void hasModel() {
        assertEquals("JCM800", item2.getModel());
    }

    @Test
    public void hasSerialNumber() {
        assertEquals(4557, item2.getSerialNumber());
    }

    @Test
    public void hasYear() {
        assertEquals(1978, item3.getYear());
    }

    @Test
    public void hasDecade() {
        assertEquals(Decade.FIFTIES, item1.getDecade());
    }

    @Test
    public void hasPrice() {
        assertEquals(2999.99, item3.getPrice(), 0.1);
    }

    @Test
    public void hasDescription() {
        assertEquals("This is sample text", item1.getDescription());
    }
}