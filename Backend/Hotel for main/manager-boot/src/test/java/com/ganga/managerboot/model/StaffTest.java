package com.ganga.managerboot.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class StaffTest {
    @Test
    public void testCanEqual() {
        assertFalse(
                (new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Department")).canEqual("Other"));
    }

    @Test
    public void testCanEqual2() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertTrue(staff.canEqual(staff1));
    }

    @Test
    public void testEquals() {
        assertFalse((new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Department")).equals("42"));
    }

    @Test
    public void testEquals10() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Name", "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertFalse(staff.equals(staff1));
    }

    @Test
    public void testEquals11() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", null, "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertFalse(staff.equals(staff1));
    }

    @Test
    public void testEquals12() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Name");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertFalse(staff.equals(staff1));
    }

    @Test
    public void testEquals13() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", null);

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertFalse(staff.equals(staff1));
    }

    @Test
    public void testEquals14() {
        Staff staff = new Staff(123, null, "Staff Contact", "42", "Staff Gender", "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName(null);
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertTrue(staff.equals(staff1));
    }

    @Test
    public void testEquals15() {
        Staff staff = new Staff(123, "Staff Name", null, "42", "Staff Gender", "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact(null);
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertTrue(staff.equals(staff1));
    }

    @Test
    public void testEquals16() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", null, "Staff Gender", "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId(null);
        staff1.setStaffGender("Staff Gender");
        assertTrue(staff.equals(staff1));
    }

    @Test
    public void testEquals2() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertTrue(staff.equals(staff1));
    }

    @Test
    public void testEquals3() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Department");
        assertFalse(staff.equals(new Staff()));
    }

    @Test
    public void testEquals4() {
        Staff staff = new Staff(123, null, "Staff Contact", "42", "Staff Gender", "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertFalse(staff.equals(staff1));
    }

    @Test
    public void testEquals5() {
        Staff staff = new Staff(123, "Staff Contact", "Staff Contact", "42", "Staff Gender", "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertFalse(staff.equals(staff1));
    }

    @Test
    public void testEquals6() {
        Staff staff = new Staff(123, "Staff Name", "Staff Name", "42", "Staff Gender", "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertFalse(staff.equals(staff1));
    }

    @Test
    public void testEquals7() {
        Staff staff = new Staff(123, "Staff Name", null, "42", "Staff Gender", "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertFalse(staff.equals(staff1));
    }

    @Test
    public void testEquals8() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "Staff Name", "Staff Gender", "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertFalse(staff.equals(staff1));
    }

    @Test
    public void testEquals9() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", null, "Staff Gender", "Staff Department");

        Staff staff1 = new Staff();
        staff1.setStaffId(123);
        staff1.setStaffContact("Staff Contact");
        staff1.setStaffDepartment("Staff Department");
        staff1.setStaffName("Staff Name");
        staff1.setStaffMailId("42");
        staff1.setStaffGender("Staff Gender");
        assertFalse(staff.equals(staff1));
    }

    @Test
    public void testHashCode() {
        assertEquals(-69206872,
                (new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Department")).hashCode());
        assertEquals(978134728,
                (new Staff(123, null, "Staff Contact", "42", "Staff Gender", "Staff Department")).hashCode());
        assertEquals(-1375234551,
                (new Staff(123, "Staff Name", null, "42", "Staff Gender", "Staff Department")).hashCode());
        assertEquals(-74842611,
                (new Staff(123, "Staff Name", "Staff Contact", null, "Staff Gender", "Staff Department")).hashCode());
        assertEquals(1217676182,
                (new Staff(123, "Staff Name", "Staff Contact", "42", null, "Staff Department")).hashCode());
        assertEquals(774672385, (new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", null)).hashCode());
    }

    @Test
    public void testSetStaffContact() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Department");
        staff.setStaffContact("Staff Contact");
        assertEquals("Staff Contact", staff.getStaffContact());
    }

    @Test
    public void testSetStaffDepartment() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Department");
        staff.setStaffDepartment("Staff Department");
        assertEquals("Staff Department", staff.getStaffDepartment());
    }

    @Test
    public void testSetStaffGender() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Department");
        staff.setStaffGender("Staff Gender");
        assertEquals("Staff Gender", staff.getStaffGender());
    }

    @Test
    public void testSetStaffId() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Department");
        staff.setStaffId(123);
        assertEquals(123, staff.getStaffId());
    }

    @Test
    public void testSetStaffMailId() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Department");
        staff.setStaffMailId("42");
        assertEquals("42", staff.getStaffMailId());
    }

    @Test
    public void testSetStaffName() {
        Staff staff = new Staff(123, "Staff Name", "Staff Contact", "42", "Staff Gender", "Staff Department");
        staff.setStaffName("Staff Name");
        assertEquals("Staff Name", staff.getStaffName());
    }
}

