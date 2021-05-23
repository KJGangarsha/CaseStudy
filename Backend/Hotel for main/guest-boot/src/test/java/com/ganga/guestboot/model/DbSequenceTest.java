package com.ganga.guestboot.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class DbSequenceTest {
    @Test
    public void testCanEqual() {
        assertFalse((new DbSequence("42", 1)).canEqual("Other"));
    }

    @Test
    public void testCanEqual2() {
        DbSequence dbSequence = new DbSequence("42", 1);

        DbSequence dbSequence1 = new DbSequence();
        dbSequence1.setSeq(0);
        dbSequence1.setId("42");
        assertTrue(dbSequence.canEqual(dbSequence1));
    }

    @Test
    public void testEquals() {
        assertFalse((new DbSequence("42", 1)).equals("42"));
    }

    @Test
    public void testEquals2() {
        DbSequence dbSequence = new DbSequence("42", 1);

        DbSequence dbSequence1 = new DbSequence();
        dbSequence1.setSeq(0);
        dbSequence1.setId("42");
        assertFalse(dbSequence.equals(dbSequence1));
    }

    @Test
    public void testEquals3() {
        DbSequence dbSequence = new DbSequence("42", 1);
        assertTrue(dbSequence.equals(new DbSequence("42", 1)));
    }

    @Test
    public void testEquals4() {
        DbSequence dbSequence = new DbSequence(null, 1);
        assertFalse(dbSequence.equals(new DbSequence("42", 1)));
    }

    @Test
    public void testEquals5() {
        DbSequence dbSequence = new DbSequence("Id", 1);
        assertFalse(dbSequence.equals(new DbSequence("42", 1)));
    }

    @Test
    public void testEquals6() {
        DbSequence dbSequence = new DbSequence(null, 1);
        assertTrue(dbSequence.equals(new DbSequence(null, 1)));
    }

    @Test
    public void testHashCode() {
        assertEquals(5202, (new DbSequence("42", 1)).hashCode());
        assertEquals(3583, (new DbSequence(null, 1)).hashCode());
    }

    @Test
    public void testSetId() {
        DbSequence dbSequence = new DbSequence("42", 1);
        dbSequence.setId("42");
        assertEquals("42", dbSequence.getId());
    }

    @Test
    public void testSetSeq() {
        DbSequence dbSequence = new DbSequence("42", 1);
        dbSequence.setSeq(1);
        assertEquals(1, dbSequence.getSeq());
    }
}

