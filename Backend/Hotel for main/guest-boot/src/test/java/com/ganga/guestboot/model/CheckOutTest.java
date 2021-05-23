package com.ganga.guestboot.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class CheckOutTest {
    @Test
    public void testCanEqual() {
        assertFalse((new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1)).canEqual("Other"));
    }

    @Test
    public void testCanEqual2() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);

        CheckOut checkOut1 = new CheckOut();
        checkOut1.setGuestContact("Guest Contact");
        checkOut1.setGuestId(123);
        checkOut1.setGuestName("Guest Name");
        checkOut1.setCheckInDate("2020-03-01");
        checkOut1.setGuestGender("Guest Gender");
        checkOut1.setPaymentMethod("Payment Method");
        checkOut1.setCheckOutId(123);
        checkOut1.setDays(0);
        checkOut1.setCheckOutDate("2020-03-01");
        checkOut1.setBillAmount(0);
        checkOut1.setRoomNumber(10);
        assertTrue(checkOut.canEqual(checkOut1));
    }

    @Test
    public void testEquals() {
        assertFalse((new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1)).equals("42"));
    }

    @Test
    public void testEquals10() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Name", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        assertFalse(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testEquals11() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", null, "Guest Contact", "Payment Method", "2020-03-01",
                "2020-03-01", 1, 1);
        assertFalse(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testEquals12() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Name", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        assertFalse(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testEquals13() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", null, "Payment Method", "2020-03-01",
                "2020-03-01", 1, 1);
        assertFalse(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testEquals14() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Guest Name",
                "2020-03-01", "2020-03-01", 1, 1);
        assertFalse(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testEquals15() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", null, "2020-03-01",
                "2020-03-01", 1, 1);
        assertFalse(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testEquals16() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020/03/01", "2020-03-01", 1, 1);
        assertFalse(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testEquals17() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                null, "2020-03-01", 1, 1);
        assertFalse(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testEquals18() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020/03/01", 1, 1);
        assertFalse(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testEquals19() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", null, 1, 1);
        assertFalse(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testEquals2() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);

        CheckOut checkOut1 = new CheckOut();
        checkOut1.setGuestContact("Guest Contact");
        checkOut1.setGuestId(123);
        checkOut1.setGuestName("Guest Name");
        checkOut1.setCheckInDate("2020-03-01");
        checkOut1.setGuestGender("Guest Gender");
        checkOut1.setPaymentMethod("Payment Method");
        checkOut1.setCheckOutId(123);
        checkOut1.setDays(0);
        checkOut1.setCheckOutDate("2020-03-01");
        checkOut1.setBillAmount(0);
        checkOut1.setRoomNumber(10);
        assertFalse(checkOut.equals(checkOut1));
    }

    @Test
    public void testEquals3() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        assertTrue(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testEquals4() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        assertFalse(checkOut.equals(new CheckOut()));
    }

    @Test
    public void testEquals5() {
        CheckOut checkOut = new CheckOut(123, 0, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);

        CheckOut checkOut1 = new CheckOut();
        checkOut1.setGuestContact("Guest Contact");
        checkOut1.setGuestId(123);
        checkOut1.setGuestName("Guest Name");
        checkOut1.setCheckInDate("2020-03-01");
        checkOut1.setGuestGender("Guest Gender");
        checkOut1.setPaymentMethod("Payment Method");
        checkOut1.setCheckOutId(123);
        checkOut1.setDays(0);
        checkOut1.setCheckOutDate("2020-03-01");
        checkOut1.setBillAmount(0);
        checkOut1.setRoomNumber(10);
        assertFalse(checkOut.equals(checkOut1));
    }

    @Test
    public void testEquals6() {
        CheckOut checkOut = new CheckOut(123, 123, 0, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);

        CheckOut checkOut1 = new CheckOut();
        checkOut1.setGuestContact("Guest Contact");
        checkOut1.setGuestId(123);
        checkOut1.setGuestName("Guest Name");
        checkOut1.setCheckInDate("2020-03-01");
        checkOut1.setGuestGender("Guest Gender");
        checkOut1.setPaymentMethod("Payment Method");
        checkOut1.setCheckOutId(123);
        checkOut1.setDays(0);
        checkOut1.setCheckOutDate("2020-03-01");
        checkOut1.setBillAmount(0);
        checkOut1.setRoomNumber(10);
        assertFalse(checkOut.equals(checkOut1));
    }

    @Test
    public void testEquals7() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 0, 1);

        CheckOut checkOut1 = new CheckOut();
        checkOut1.setGuestContact("Guest Contact");
        checkOut1.setGuestId(123);
        checkOut1.setGuestName("Guest Name");
        checkOut1.setCheckInDate("2020-03-01");
        checkOut1.setGuestGender("Guest Gender");
        checkOut1.setPaymentMethod("Payment Method");
        checkOut1.setCheckOutId(123);
        checkOut1.setDays(0);
        checkOut1.setCheckOutDate("2020-03-01");
        checkOut1.setBillAmount(0);
        checkOut1.setRoomNumber(10);
        assertFalse(checkOut.equals(checkOut1));
    }

    @Test
    public void testEquals8() {
        CheckOut checkOut = new CheckOut(123, 123, 10, null, "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        assertFalse(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testEquals9() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Gender", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        assertFalse(checkOut.equals(new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)));
    }

    @Test
    public void testHashCode() {
        assertEquals(1057590034, (new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", "2020-03-01", "2020-03-01", 1, 1)).hashCode());
        assertEquals(795846682, (new CheckOut(123, 123, 10, null, "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1)).hashCode());
        assertEquals(-1031430700, (new CheckOut(123, 123, 10, "Guest Name", null, "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1)).hashCode());
        assertEquals(-1879270005, (new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", null, "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1)).hashCode());
        assertEquals(-2050580670, (new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", null,
                "2020-03-01", "2020-03-01", 1, 1)).hashCode());
        assertEquals(1878966365, (new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact",
                "Payment Method", null, "2020-03-01", 1, 1)).hashCode());
        assertEquals(925919555, (new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", null, 1, 1)).hashCode());
    }

    @Test
    public void testSetBillAmount() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        checkOut.setBillAmount(1);
        assertEquals(1, checkOut.getBillAmount());
    }

    @Test
    public void testSetCheckInDate() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        checkOut.setCheckInDate("2020-03-01");
        assertEquals("2020-03-01", checkOut.getCheckInDate());
    }

    @Test
    public void testSetCheckOutDate() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        checkOut.setCheckOutDate("2020-03-01");
        assertEquals("2020-03-01", checkOut.getCheckOutDate());
    }

    @Test
    public void testSetCheckOutId() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        checkOut.setCheckOutId(123);
        assertEquals(123, checkOut.getCheckOutId());
    }

    @Test
    public void testSetDays() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        checkOut.setDays(1);
        assertEquals(1, checkOut.getDays());
    }

    @Test
    public void testSetGuestContact() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        checkOut.setGuestContact("Guest Contact");
        assertEquals("Guest Contact", checkOut.getGuestContact());
    }

    @Test
    public void testSetGuestGender() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        checkOut.setGuestGender("Guest Gender");
        assertEquals("Guest Gender", checkOut.getGuestGender());
    }

    @Test
    public void testSetGuestId() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        checkOut.setGuestId(123);
        assertEquals(123, checkOut.getGuestId());
    }

    @Test
    public void testSetGuestName() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        checkOut.setGuestName("Guest Name");
        assertEquals("Guest Name", checkOut.getGuestName());
    }

    @Test
    public void testSetPaymentMethod() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        checkOut.setPaymentMethod("Payment Method");
        assertEquals("Payment Method", checkOut.getPaymentMethod());
    }

    @Test
    public void testSetRoomNumber() {
        CheckOut checkOut = new CheckOut(123, 123, 10, "Guest Name", "Guest Gender", "Guest Contact", "Payment Method",
                "2020-03-01", "2020-03-01", 1, 1);
        checkOut.setRoomNumber(10);
        assertEquals(10, checkOut.getRoomNumber());
    }
}

