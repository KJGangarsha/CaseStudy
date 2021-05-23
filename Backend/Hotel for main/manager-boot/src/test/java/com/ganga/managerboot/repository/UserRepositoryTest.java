package com.ganga.managerboot.repository;

import static org.junit.jupiter.api.Assertions.assertNull;

import com.ganga.managerboot.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ContextConfiguration;

@ContextConfiguration(classes = {UserRepository.class})
@EnableAutoConfiguration
@DataJpaTest
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    @Test
    public void testFindByUsername() {
        User user = new User();
        user.setPassword("iloveyou");
        user.setRole("Role");
        user.setUsername("janedoe");
        user.setId(1);

        User user1 = new User();
        user1.setPassword("iloveyou");
        user1.setRole("Role");
        user1.setUsername("janedoe");
        user1.setId(1);
        this.userRepository.<User>save(user);
        this.userRepository.<User>save(user1);
        assertNull(this.userRepository.findByUsername("foo"));
    }

    @Test
    public void testFindByUsername2() {
        User user = new User();
        user.setPassword("iloveyou");
        user.setRole("Role");
        user.setUsername("janedoe");
        user.setId(1);

        User user1 = new User();
        user1.setPassword("iloveyou");
        user1.setRole("Role");
        user1.setUsername("janedoe");
        user1.setId(1);
        this.userRepository.<User>save(user);
        this.userRepository.<User>save(user1);
        assertNull(this.userRepository.findByUsername("foo"));
    }
}

