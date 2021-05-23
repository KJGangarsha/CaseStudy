package com.ganga.managerboot.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class RoomTest {
    @Test
    public void testCanEqual() {
        assertFalse((new Room(123, 10, "Room Type", "Room Status", 1)).canEqual("Other"));
    }

    @Test
    public void testCanEqual2() {
        Room room = new Room(123, 10, "Room Type", "Room Status", 1);

        Room room1 = new Room();
        room1.setRoomStatus("Room Status");
        room1.setRoomType("Room Type");
        room1.setRoomId(123);
        room1.setRoomPrice(0);
        room1.setRoomNumber(10);
        assertTrue(room.canEqual(room1));
    }

    @Test
    public void testEquals() {
        assertFalse((new Room(123, 10, "Room Type", "Room Status", 1)).equals("42"));
    }

    @Test
    public void testEquals10() {
        Room room = new Room(123, 10, null, "Room Status", 1);
        assertTrue(room.equals(new Room(123, 10, null, "Room Status", 1)));
    }

    @Test
    public void testEquals11() {
        Room room = new Room(123, 10, "Room Type", null, 1);
        assertTrue(room.equals(new Room(123, 10, "Room Type", null, 1)));
    }

    @Test
    public void testEquals2() {
        Room room = new Room(123, 10, "Room Type", "Room Status", 1);

        Room room1 = new Room();
        room1.setRoomStatus("Room Status");
        room1.setRoomType("Room Type");
        room1.setRoomId(123);
        room1.setRoomPrice(0);
        room1.setRoomNumber(10);
        assertFalse(room.equals(room1));
    }

    @Test
    public void testEquals3() {
        Room room = new Room(123, 10, "Room Type", "Room Status", 1);
        assertTrue(room.equals(new Room(123, 10, "Room Type", "Room Status", 1)));
    }

    @Test
    public void testEquals4() {
        Room room = new Room(123, 10, "Room Type", "Room Status", 1);
        assertFalse(room.equals(new Room()));
    }

    @Test
    public void testEquals5() {
        Room room = new Room(123, 0, "Room Type", "Room Status", 1);

        Room room1 = new Room();
        room1.setRoomStatus("Room Status");
        room1.setRoomType("Room Type");
        room1.setRoomId(123);
        room1.setRoomPrice(0);
        room1.setRoomNumber(10);
        assertFalse(room.equals(room1));
    }

    @Test
    public void testEquals6() {
        Room room = new Room(123, 10, null, "Room Status", 1);
        assertFalse(room.equals(new Room(123, 10, "Room Type", "Room Status", 1)));
    }

    @Test
    public void testEquals7() {
        Room room = new Room(123, 10, "Room Status", "Room Status", 1);
        assertFalse(room.equals(new Room(123, 10, "Room Type", "Room Status", 1)));
    }

    @Test
    public void testEquals8() {
        Room room = new Room(123, 10, "Room Type", "Room Type", 1);
        assertFalse(room.equals(new Room(123, 10, "Room Type", "Room Status", 1)));
    }

    @Test
    public void testEquals9() {
        Room room = new Room(123, 10, "Room Type", null, 1);
        assertFalse(room.equals(new Room(123, 10, "Room Type", "Room Status", 1)));
    }

    @Test
    public void testHashCode() {
        assertEquals(-471164855, (new Room(123, 10, "Room Type", "Room Status", 1)).hashCode());
        assertEquals(-701351091, (new Room(123, 10, null, "Room Status", 1)).hashCode());
        assertEquals(-1857361507, (new Room(123, 10, "Room Type", null, 1)).hashCode());
    }

    @Test
    public void testSetRoomId() {
        Room room = new Room(123, 10, "Room Type", "Room Status", 1);
        room.setRoomId(123);
        assertEquals(123, room.getRoomId());
    }

    @Test
    public void testSetRoomNumber() {
        Room room = new Room(123, 10, "Room Type", "Room Status", 1);
        room.setRoomNumber(10);
        assertEquals(10, room.getRoomNumber());
    }

    @Test
    public void testSetRoomPrice() {
        Room room = new Room(123, 10, "Room Type", "Room Status", 1);
        room.setRoomPrice(1);
        assertEquals(1, room.getRoomPrice());
    }

    @Test
    public void testSetRoomStatus() {
        Room room = new Room(123, 10, "Room Type", "Room Status", 1);
        room.setRoomStatus("Room Status");
        assertEquals("Room Status", room.getRoomStatus());
    }

    @Test
    public void testSetRoomType() {
        Room room = new Room(123, 10, "Room Type", "Room Status", 1);
        room.setRoomType("Room Type");
        assertEquals("Room Type", room.getRoomType());
    }
}

