package com.ganga.ownerboot.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class UserTest {
    @Test
    public void testCanEqual() {
        assertFalse((new User(1, "janedoe", "iloveyou", "Role")).canEqual("Other"));
    }

    @Test
    public void testCanEqual2() {
        User user = new User(1, "janedoe", "iloveyou", "Role");

        User user1 = new User();
        user1.setPassword("iloveyou");
        user1.setRole("Role");
        user1.setUsername("janedoe");
        user1.setId(1);
        assertTrue(user.canEqual(user1));
    }

    @Test
    public void testEquals() {
        assertFalse((new User(1, "janedoe", "iloveyou", "Role")).equals("42"));
    }

    @Test
    public void testEquals10() {
        User user = new User(1, null, "iloveyou", "Role");

        User user1 = new User();
        user1.setPassword("iloveyou");
        user1.setRole("Role");
        user1.setUsername(null);
        user1.setId(1);
        assertTrue(user.equals(user1));
    }

    @Test
    public void testEquals11() {
        User user = new User(1, "janedoe", null, "Role");

        User user1 = new User();
        user1.setPassword(null);
        user1.setRole("Role");
        user1.setUsername("janedoe");
        user1.setId(1);
        assertTrue(user.equals(user1));
    }

    @Test
    public void testEquals12() {
        User user = new User(1, "janedoe", "iloveyou", null);

        User user1 = new User();
        user1.setPassword("iloveyou");
        user1.setRole(null);
        user1.setUsername("janedoe");
        user1.setId(1);
        assertTrue(user.equals(user1));
    }

    @Test
    public void testEquals2() {
        User user = new User(1, "janedoe", "iloveyou", "Role");

        User user1 = new User();
        user1.setPassword("iloveyou");
        user1.setRole("Role");
        user1.setUsername("janedoe");
        user1.setId(1);
        assertTrue(user.equals(user1));
    }

    @Test
    public void testEquals3() {
        User user = new User(1, "janedoe", "iloveyou", "Role");
        assertFalse(user.equals(new User()));
    }

    @Test
    public void testEquals4() {
        User user = new User(1, null, "iloveyou", "Role");

        User user1 = new User();
        user1.setPassword("iloveyou");
        user1.setRole("Role");
        user1.setUsername("janedoe");
        user1.setId(1);
        assertFalse(user.equals(user1));
    }

    @Test
    public void testEquals5() {
        User user = new User(1, "iloveyou", "iloveyou", "Role");

        User user1 = new User();
        user1.setPassword("iloveyou");
        user1.setRole("Role");
        user1.setUsername("janedoe");
        user1.setId(1);
        assertFalse(user.equals(user1));
    }

    @Test
    public void testEquals6() {
        User user = new User(1, "janedoe", "janedoe", "Role");

        User user1 = new User();
        user1.setPassword("iloveyou");
        user1.setRole("Role");
        user1.setUsername("janedoe");
        user1.setId(1);
        assertFalse(user.equals(user1));
    }

    @Test
    public void testEquals7() {
        User user = new User(1, "janedoe", null, "Role");

        User user1 = new User();
        user1.setPassword("iloveyou");
        user1.setRole("Role");
        user1.setUsername("janedoe");
        user1.setId(1);
        assertFalse(user.equals(user1));
    }

    @Test
    public void testEquals8() {
        User user = new User(1, "janedoe", "iloveyou", "janedoe");

        User user1 = new User();
        user1.setPassword("iloveyou");
        user1.setRole("Role");
        user1.setUsername("janedoe");
        user1.setId(1);
        assertFalse(user.equals(user1));
    }

    @Test
    public void testEquals9() {
        User user = new User(1, "janedoe", "iloveyou", null);

        User user1 = new User();
        user1.setPassword("iloveyou");
        user1.setRole("Role");
        user1.setUsername("janedoe");
        user1.setId(1);
        assertFalse(user.equals(user1));
    }

    @Test
    public void testHashCode() {
        assertEquals(-695772862, (new User(1, "janedoe", "iloveyou", "Role")).hashCode());
        assertEquals(-1288275063, (new User(1, null, "iloveyou", "Role")).hashCode());
        assertEquals(607530143, (new User(1, "janedoe", null, "Role")).hashCode());
        assertEquals(-698325801, (new User(1, "janedoe", "iloveyou", null)).hashCode());
    }

    @Test
    public void testSetId() {
        User user = new User(1, "janedoe", "iloveyou", "Role");
        user.setId(1);
        assertEquals(1, user.getId());
    }

    @Test
    public void testSetPassword() {
        User user = new User(1, "janedoe", "iloveyou", "Role");
        user.setPassword("iloveyou");
        assertEquals("iloveyou", user.getPassword());
    }

    @Test
    public void testSetRole() {
        User user = new User(1, "janedoe", "iloveyou", "Role");
        user.setRole("Role");
        assertEquals("Role", user.getRole());
    }

    @Test
    public void testSetUsername() {
        User user = new User(1, "janedoe", "iloveyou", "Role");
        user.setUsername("janedoe");
        assertEquals("janedoe", user.getUsername());
    }
}

