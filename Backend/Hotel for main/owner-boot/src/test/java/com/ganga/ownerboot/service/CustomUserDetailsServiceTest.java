package com.ganga.ownerboot.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.ganga.ownerboot.model.User;
import com.ganga.ownerboot.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ContextConfiguration(classes = {CustomUserDetailsService.class})
@ExtendWith(SpringExtension.class)
public class CustomUserDetailsServiceTest {
    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @MockBean
    private UserRepository userRepository;

    @Test
    public void testLoadUserByUsername() throws UsernameNotFoundException {
        User user = new User();
        user.setPassword("iloveyou");
        user.setRole("Role");
        user.setUsername("janedoe");
        user.setId(1);
        when(this.userRepository.findByUsername(anyString())).thenReturn(user);
        UserDetails actualLoadUserByUsernameResult = this.customUserDetailsService.loadUserByUsername("janedoe");
        assertEquals("iloveyou", actualLoadUserByUsernameResult.getPassword());
        assertEquals(
                "org.springframework.security.core.userdetails.User [Username=janedoe, Password=[PROTECTED], Enabled=true,"
                        + " AccountNonExpired=true, credentialsNonExpired=true, AccountNonLocked=true, Granted Authorities=[ROLE"
                        + "_Role]]",
                actualLoadUserByUsernameResult.toString());
        assertTrue(actualLoadUserByUsernameResult.isEnabled());
        assertTrue(actualLoadUserByUsernameResult.isCredentialsNonExpired());
        assertTrue(actualLoadUserByUsernameResult.isAccountNonLocked());
        assertTrue(actualLoadUserByUsernameResult.isAccountNonExpired());
        assertEquals("janedoe", actualLoadUserByUsernameResult.getUsername());
        verify(this.userRepository).findByUsername(anyString());
    }
    @Test
    public void testLoadUserByUsername1() throws UsernameNotFoundException {
        User user = new User();
        user.setPassword("iloveyou");
        user.setRole("Role");
        user.setUsername("janedoe");
        user.setId(1);
        when(this.userRepository.findByUsername(anyString())).thenReturn(user);
        UserDetails actualLoadUserByUsernameResult = this.customUserDetailsService.loadUserByUsername("janedoe");
        assertEquals("iloveyou", actualLoadUserByUsernameResult.getPassword());
        assertEquals(
                "org.springframework.security.core.userdetails.User [Username=janedoe, Password=[PROTECTED], Enabled=true,"
                        + " AccountNonExpired=true, credentialsNonExpired=true, AccountNonLocked=true, Granted Authorities=[ROLE"
                        + "_Role]]",
                actualLoadUserByUsernameResult.toString());
        assertTrue(actualLoadUserByUsernameResult.isEnabled());
        assertTrue(actualLoadUserByUsernameResult.isCredentialsNonExpired());
        assertTrue(actualLoadUserByUsernameResult.isAccountNonLocked());
        assertTrue(actualLoadUserByUsernameResult.isAccountNonExpired());
        assertEquals("janedoe", actualLoadUserByUsernameResult.getUsername());
        verify(this.userRepository).findByUsername(anyString());
    }


}

