package com.ganga.ownerboot.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class OwnerTest {
    @Test
    public void testCanEqual() {
        assertFalse((new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1))
                .canEqual("Other"));
    }

    @Test
    public void testCanEqual2() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);

        Owner owner1 = new Owner();
        owner1.setManagerGender("Manager Gender");
        owner1.setManagerSalary(0);
        owner1.setManagerMailId("42");
        owner1.setDepartmentName("Department Name");
        owner1.setManagerContact("Manager Contact");
        owner1.setManagerId(123);
        owner1.setManagerName("Manager Name");
        owner1.setStaffSalary(0);
        assertTrue(owner.canEqual(owner1));
    }

    @Test
    public void testEquals() {
        assertFalse((new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1))
                .equals("42"));
    }

    @Test
    public void testEquals10() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Department Name", "42", "Manager Gender", 1, 1);
        assertFalse(owner
                .equals(new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testEquals11() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", null, "42", "Manager Gender", 1, 1);
        assertFalse(owner
                .equals(new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testEquals12() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "Department Name",
                "Manager Gender", 1, 1);
        assertFalse(owner
                .equals(new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testEquals13() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", null, "Manager Gender", 1, 1);
        assertFalse(owner
                .equals(new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testEquals14() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Department Name", 1, 1);
        assertFalse(owner
                .equals(new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testEquals15() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", null, 1, 1);
        assertFalse(owner
                .equals(new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testEquals16() {
        Owner owner = new Owner(123, null, "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        assertTrue(owner.equals(new Owner(123, null, "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testEquals17() {
        Owner owner = new Owner(123, "Department Name", null, "Manager Contact", "42", "Manager Gender", 1, 1);
        assertTrue(owner.equals(new Owner(123, "Department Name", null, "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testEquals2() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);

        Owner owner1 = new Owner();
        owner1.setManagerGender("Manager Gender");
        owner1.setManagerSalary(0);
        owner1.setManagerMailId("42");
        owner1.setDepartmentName("Department Name");
        owner1.setManagerContact("Manager Contact");
        owner1.setManagerId(123);
        owner1.setManagerName("Manager Name");
        owner1.setStaffSalary(0);
        assertFalse(owner.equals(owner1));
    }

    @Test
    public void testEquals3() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        assertTrue(owner
                .equals(new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testEquals4() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        assertFalse(owner.equals(new Owner()));
    }

    @Test
    public void testEquals5() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 0, 1);

        Owner owner1 = new Owner();
        owner1.setManagerGender("Manager Gender");
        owner1.setManagerSalary(0);
        owner1.setManagerMailId("42");
        owner1.setDepartmentName("Department Name");
        owner1.setManagerContact("Manager Contact");
        owner1.setManagerId(123);
        owner1.setManagerName("Manager Name");
        owner1.setStaffSalary(0);
        assertFalse(owner.equals(owner1));
    }

    @Test
    public void testEquals6() {
        Owner owner = new Owner(123, null, "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        assertFalse(owner
                .equals(new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testEquals7() {
        Owner owner = new Owner(123, "Manager Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        assertFalse(owner
                .equals(new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testEquals8() {
        Owner owner = new Owner(123, "Department Name", "Department Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        assertFalse(owner
                .equals(new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testEquals9() {
        Owner owner = new Owner(123, "Department Name", null, "Manager Contact", "42", "Manager Gender", 1, 1);
        assertFalse(owner
                .equals(new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)));
    }

    @Test
    public void testHashCode() {
        assertEquals(-644182724,
                (new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1))
                        .hashCode());
        assertEquals(1855766702,
                (new Owner(123, null, "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1)).hashCode());
        assertEquals(947733731,
                (new Owner(123, "Department Name", null, "Manager Contact", "42", "Manager Gender", 1, 1)).hashCode());
        assertEquals(1669315018,
                (new Owner(123, "Department Name", "Manager Name", null, "42", "Manager Gender", 1, 1)).hashCode());
        assertEquals(-644278245,
                (new Owner(123, "Department Name", "Manager Name", "Manager Contact", null, "Manager Gender", 1, 1))
                        .hashCode());
        assertEquals(-1430382957,
                (new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", null, 1, 1)).hashCode());
    }

    @Test
    public void testSetDepartmentName() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        owner.setDepartmentName("Department Name");
        assertEquals("Department Name", owner.getDepartmentName());
    }

    @Test
    public void testSetManagerContact() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        owner.setManagerContact("Manager Contact");
        assertEquals("Manager Contact", owner.getManagerContact());
    }

    @Test
    public void testSetManagerGender() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        owner.setManagerGender("Manager Gender");
        assertEquals("Manager Gender", owner.getManagerGender());
    }

    @Test
    public void testSetManagerId() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        owner.setManagerId(123);
        assertEquals(123, owner.getManagerId());
    }

    @Test
    public void testSetManagerMailId() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        owner.setManagerMailId("42");
        assertEquals("42", owner.getManagerMailId());
    }

    @Test
    public void testSetManagerName() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        owner.setManagerName("Manager Name");
        assertEquals("Manager Name", owner.getManagerName());
    }

    @Test
    public void testSetManagerSalary() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        owner.setManagerSalary(1);
        assertEquals(1, owner.getManagerSalary());
    }

    @Test
    public void testSetStaffSalary() {
        Owner owner = new Owner(123, "Department Name", "Manager Name", "Manager Contact", "42", "Manager Gender", 1, 1);
        owner.setStaffSalary(1);
        assertEquals(1, owner.getStaffSalary());
    }
}

