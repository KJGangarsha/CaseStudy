package com.ganga.ZuulGateway;


import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
public class gatewayConfiguration extends WebSecurityConfigurerAdapter {
    /*@Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors();
        http.csrf().disable().authorizeRequests()
                .antMatchers("/owner/addManager",
                        "/owner/editManager/**","/owner/findManager/**","/owner/deleteManager/**")
                .hasAnyRole("owner").antMatchers("/owner/authenticate","/owner/findManagers").permitAll().anyRequest()
                .authenticated().and().exceptionHandling().and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        ;
    }*/
    @Override
    public void configure(final HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/owner/addManager",
                        "/owner/editManager/**","/owner/findManagers","/owner/findManager/**","/owner/deleteManager/**").hasAnyRole("owner")
                .antMatchers("/owner/authenticate","/guest/authenticate","/manager/findRoom/**","/manager/authenticate","/manager/availRooms","/manager/findRoomByNumber/**")
                .permitAll().anyRequest()
                .authenticated();
    }
}
