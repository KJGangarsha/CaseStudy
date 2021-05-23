package com.ganga.Apigateway.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
@RestController
public class fallBackController {

    @RequestMapping("/ownerFallBack")
    public Mono<String> ownerBootFallBack(){
        return Mono.just("Owner operations page is taking too long to respond or server is down,Please try again later");
    }

    @RequestMapping("/managerFallBack")
    public Mono<String> managerBootFallBack(){
        return Mono.just("Manager operations page is taking too long to respond or server is down,Please try again later");
    }

    @RequestMapping("/guestFallBack")
    public Mono<String> guestBootFallBack(){
        return Mono.just("Guest operations page is taking too long to respond or server is down,Please try again later");
    }
}
