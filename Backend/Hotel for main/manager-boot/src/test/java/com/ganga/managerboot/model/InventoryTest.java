package com.ganga.managerboot.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class InventoryTest {
    @Test
    public void testCanEqual() {
        assertFalse((new Inventory(123, "Inventory Name", 1)).canEqual("Other"));
    }

    @Test
    public void testCanEqual2() {
        Inventory inventory = new Inventory(123, "Inventory Name", 1);

        Inventory inventory1 = new Inventory();
        inventory1.setInventoryUnits(0);
        inventory1.setInventoryName("Inventory Name");
        inventory1.setInventoryId(123);
        assertTrue(inventory.canEqual(inventory1));
    }

    @Test
    public void testEquals() {
        assertFalse((new Inventory(123, "Inventory Name", 1)).equals("42"));
    }

    @Test
    public void testEquals2() {
        Inventory inventory = new Inventory(123, "Inventory Name", 1);

        Inventory inventory1 = new Inventory();
        inventory1.setInventoryUnits(0);
        inventory1.setInventoryName("Inventory Name");
        inventory1.setInventoryId(123);
        assertFalse(inventory.equals(inventory1));
    }

    @Test
    public void testEquals3() {
        Inventory inventory = new Inventory(123, "Inventory Name", 1);
        assertTrue(inventory.equals(new Inventory(123, "Inventory Name", 1)));
    }

    @Test
    public void testEquals4() {
        Inventory inventory = new Inventory(123, "Inventory Name", 1);
        assertFalse(inventory.equals(new Inventory()));
    }

    @Test
    public void testEquals5() {
        Inventory inventory = new Inventory(123, null, 1);
        assertFalse(inventory.equals(new Inventory(123, "Inventory Name", 1)));
    }

    @Test
    public void testEquals6() {
        Inventory inventory = new Inventory(123, "com.ganga.managerboot.model.Inventory", 1);
        assertFalse(inventory.equals(new Inventory(123, "Inventory Name", 1)));
    }

    @Test
    public void testEquals7() {
        Inventory inventory = new Inventory(123, null, 1);
        assertTrue(inventory.equals(new Inventory(123, null, 1)));
    }

    @Test
    public void testHashCode() {
        assertEquals(-1093814768, (new Inventory(123, "Inventory Name", 1)).hashCode());
        assertEquals(633644, (new Inventory(123, null, 1)).hashCode());
    }

    @Test
    public void testSetInventoryId() {
        Inventory inventory = new Inventory(123, "Inventory Name", 1);
        inventory.setInventoryId(123);
        assertEquals(123, inventory.getInventoryId());
    }

    @Test
    public void testSetInventoryName() {
        Inventory inventory = new Inventory(123, "Inventory Name", 1);
        inventory.setInventoryName("Inventory Name");
        assertEquals("Inventory Name", inventory.getInventoryName());
    }

    @Test
    public void testSetInventoryUnits() {
        Inventory inventory = new Inventory(123, "Inventory Name", 1);
        inventory.setInventoryUnits(1);
        assertEquals(1, inventory.getInventoryUnits());
    }
}

