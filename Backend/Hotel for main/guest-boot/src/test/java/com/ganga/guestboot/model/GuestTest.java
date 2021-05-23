package com.ganga.guestboot.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class GuestTest {
    @Test
    public void testCanEqual() {
        assertFalse(
                (new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01")).canEqual("Other"));
    }

    @Test
    public void testCanEqual2() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertTrue(guest.canEqual(guest1));
    }

    @Test
    public void testEquals() {
        assertFalse(
                (new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01")).equals("42"));
    }

    @Test
    public void testEquals10() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", null, "42", 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertFalse(guest.equals(guest1));
    }

    @Test
    public void testEquals11() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Guest Name", 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertFalse(guest.equals(guest1));
    }

    @Test
    public void testEquals12() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", null, 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertFalse(guest.equals(guest1));
    }

    @Test
    public void testEquals13() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 0, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertFalse(guest.equals(guest1));
    }

    @Test
    public void testEquals14() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020/03/01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertFalse(guest.equals(guest1));
    }

    @Test
    public void testEquals15() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, null);

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertFalse(guest.equals(guest1));
    }

    @Test
    public void testEquals16() {
        Guest guest = new Guest(123, 10, null, "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName(null);
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertTrue(guest.equals(guest1));
    }

    @Test
    public void testEquals17() {
        Guest guest = new Guest(123, 10, "Guest Name", null, "Guest Contact", "42", 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender(null);
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertTrue(guest.equals(guest1));
    }

    @Test
    public void testEquals2() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertTrue(guest.equals(guest1));
    }

    @Test
    public void testEquals3() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");
        assertFalse(guest.equals(new Guest()));
    }

    @Test
    public void testEquals4() {
        Guest guest = new Guest(123, 0, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertFalse(guest.equals(guest1));
    }

    @Test
    public void testEquals5() {
        Guest guest = new Guest(123, 10, null, "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertFalse(guest.equals(guest1));
    }

    @Test
    public void testEquals6() {
        Guest guest = new Guest(123, 10, "Guest Gender", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertFalse(guest.equals(guest1));
    }

    @Test
    public void testEquals7() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Name", "Guest Contact", "42", 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertFalse(guest.equals(guest1));
    }

    @Test
    public void testEquals8() {
        Guest guest = new Guest(123, 10, "Guest Name", null, "Guest Contact", "42", 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertFalse(guest.equals(guest1));
    }

    @Test
    public void testEquals9() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Name", "42", 10, "2020-03-01");

        Guest guest1 = new Guest();
        guest1.setGuestContact("Guest Contact");
        guest1.setNumberOfPeople(10);
        guest1.setGuestId(123);
        guest1.setGuestName("Guest Name");
        guest1.setCheckInDate("2020-03-01");
        guest1.setGuestGender("Guest Gender");
        guest1.setGuestMailId("42");
        guest1.setRoomNumber(10);
        assertFalse(guest.equals(guest1));
    }

    @Test
    public void testHashCode() {
        assertEquals(-1260939868,
                (new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01")).hashCode());
        assertEquals(-1265376196,
                (new Guest(123, 10, null, "Guest Gender", "Guest Contact", "42", 10, "2020-03-01")).hashCode());
        assertEquals(-1878715446,
                (new Guest(123, 10, "Guest Name", null, "Guest Contact", "42", 10, "2020-03-01")).hashCode());
        assertEquals(945960575,
                (new Guest(123, 10, "Guest Name", "Guest Gender", null, "42", 10, "2020-03-01")).hashCode());
        assertEquals(-1261035389,
                (new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", null, 10, "2020-03-01")).hashCode());
        assertEquals(-1392610347,
                (new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, null)).hashCode());
    }

    @Test
    public void testSetCheckInDate() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");
        guest.setCheckInDate("2020-03-01");
        assertEquals("2020-03-01", guest.getCheckInDate());
    }

    @Test
    public void testSetGuestContact() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");
        guest.setGuestContact("Guest Contact");
        assertEquals("Guest Contact", guest.getGuestContact());
    }

    @Test
    public void testSetGuestGender() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");
        guest.setGuestGender("Guest Gender");
        assertEquals("Guest Gender", guest.getGuestGender());
    }

    @Test
    public void testSetGuestId() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");
        guest.setGuestId(123);
        assertEquals(123, guest.getGuestId());
    }

    @Test
    public void testSetGuestMailId() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");
        guest.setGuestMailId("42");
        assertEquals("42", guest.getGuestMailId());
    }

    @Test
    public void testSetGuestName() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");
        guest.setGuestName("Guest Name");
        assertEquals("Guest Name", guest.getGuestName());
    }

    @Test
    public void testSetNumberOfPeople() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");
        guest.setNumberOfPeople(10);
        assertEquals(10, guest.getNumberOfPeople());
    }

    @Test
    public void testSetRoomNumber() {
        Guest guest = new Guest(123, 10, "Guest Name", "Guest Gender", "Guest Contact", "42", 10, "2020-03-01");
        guest.setRoomNumber(10);
        assertEquals(10, guest.getRoomNumber());
    }
}

