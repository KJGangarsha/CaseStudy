package com.ganga.ownerboot.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class AuthRequestTest {
    @Test
    public void testCanEqual() {
        assertFalse((new AuthRequest("janedoe", "iloveyou")).canEqual("Other"));
    }

    @Test
    public void testCanEqual2() {
        AuthRequest authRequest = new AuthRequest("janedoe", "iloveyou");
        assertTrue(authRequest.canEqual(new AuthRequest("janedoe", "iloveyou")));
    }

    @Test
    public void testEquals() {
        assertFalse((new AuthRequest("janedoe", "iloveyou")).equals("42"));
    }

    @Test
    public void testEquals2() {
        AuthRequest authRequest = new AuthRequest("janedoe", "iloveyou");
        assertTrue(authRequest.equals(new AuthRequest("janedoe", "iloveyou")));
    }

    @Test
    public void testEquals3() {
        AuthRequest authRequest = new AuthRequest("janedoe", "iloveyou");
        assertFalse(authRequest.equals(new AuthRequest()));
    }

    @Test
    public void testEquals4() {
        AuthRequest authRequest = new AuthRequest(null, "iloveyou");
        assertFalse(authRequest.equals(new AuthRequest("janedoe", "iloveyou")));
    }

    @Test
    public void testEquals5() {
        AuthRequest authRequest = new AuthRequest("janedoe", "janedoe");
        assertFalse(authRequest.equals(new AuthRequest("janedoe", "iloveyou")));
    }

    @Test
    public void testEquals6() {
        AuthRequest authRequest = new AuthRequest("janedoe", null);
        assertFalse(authRequest.equals(new AuthRequest("janedoe", "iloveyou")));
    }

    @Test
    public void testEquals7() {
        AuthRequest authRequest = new AuthRequest(null, "iloveyou");
        assertFalse(authRequest.equals(new AuthRequest()));
    }

    @Test
    public void testEquals8() {
        AuthRequest authRequest = new AuthRequest();
        assertTrue(authRequest.equals(new AuthRequest()));
    }

    @Test
    public void testHashCode() {
        assertEquals(-1759146751, (new AuthRequest("janedoe", "iloveyou")).hashCode());
        assertEquals(-1332412826, (new AuthRequest(null, "iloveyou")).hashCode());
        assertEquals(-426727864, (new AuthRequest("janedoe", null)).hashCode());
    }

    @Test
    public void testSetPassword() {
        AuthRequest authRequest = new AuthRequest("janedoe", "iloveyou");
        authRequest.setPassword("iloveyou");
        assertEquals("iloveyou", authRequest.getPassword());
    }

    @Test
    public void testSetUsername() {
        AuthRequest authRequest = new AuthRequest("janedoe", "iloveyou");
        authRequest.setUsername("janedoe");
        assertEquals("janedoe", authRequest.getUsername());
    }
}

