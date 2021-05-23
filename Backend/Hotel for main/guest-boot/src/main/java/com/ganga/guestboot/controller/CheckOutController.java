package com.ganga.guestboot.controller;

import com.ganga.guestboot.model.CheckOut;
import com.ganga.guestboot.repository.CheckOutRepository;
import com.ganga.guestboot.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*Cross-Origin is a security concept that allows restricting the resources implemented.
 It prevents the JavaScript code producing or consuming the requests against different origin.*/
@CrossOrigin(origins = "http://localhost:3000")

/*This takes care of mapping request data to the defined request handler method*/
@RestController

/*This annotation maps HTTP requests to handler methods of this controller*/
@RequestMapping("/guest")
public class CheckOutController {

    /*Enables you to inject the object dependency implicitly*/
    @Autowired
    private CheckOutRepository repository;

    @Autowired
    private SequenceGeneratorService service;

    /*Handles the HTTP POST request matched with given URI expression*/
    @PostMapping("/checkOut")

    /*Method to create a new checkout*/

    /*@Request body enables automatic deserialization of the inbound HttpRequest body onto a Java object*/
    public String addCheckOut(@RequestBody CheckOut checkout){

        /*Setting Id by sequence generator*/
        checkout.setCheckOutId(service.getSequenceNum(CheckOut.sequenceName));

        /*inserting checkout model variables into collection*/
        repository.insert(checkout);

        /*displays guest checkedOut*/
        return "Guest CheckedOut with Id: " +checkout.getCheckOutId()+ " from room: "+checkout.getRoomNumber();
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/Checkouts")

    /*Method to find all checkedOut guests */
    public List<CheckOut> getCheckouts(){

        return repository.findAll();
    }



}
