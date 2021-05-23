package com.ganga.ownerboot.controller;

import com.ganga.ownerboot.exception.ResourceNotFoundException;
import com.ganga.ownerboot.model.AuthRequest;
import com.ganga.ownerboot.model.Owner;
import com.ganga.ownerboot.repository.OwnerRepository;
import com.ganga.ownerboot.service.SequenceGeneratorService;
import com.ganga.ownerboot.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;

/*Cross-Origin is a security concept that allows restricting the resources implemented.
 It prevents the JavaScript code producing or consuming the requests against different origin.*/
@CrossOrigin(origins = "http://localhost:3000")

/*This takes care of mapping request data to the defined request handler method*/
@RestController

/*This annotation maps HTTP requests to handler methods of this controller*/
@RequestMapping("/owner")
public class OwnerController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/authenticate")
    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        } catch (Exception ex) {
            throw new Exception("invalid username/password");
        }
        return jwtUtil.generateToken(authRequest.getUsername());
    }

    /*Enables you to inject the object dependency implicitly*/
    @Autowired
    private OwnerRepository repository;

    @Autowired
    private SequenceGeneratorService service;

    /*Handles the HTTP POST request matched with given URI expression*/
    @PostMapping("/addManager")

    /*Method to create a new manager*/

    /*@Request body enables automatic deserialization of the inbound HttpRequest body onto a Java object*/
    public String addManager(@RequestBody Owner manager){

        /*Setting Id by sequence generator*/
        manager.setManagerId(service.getSequenceNum(Owner.sequenceName));

        /*inserting manager model variables into collection*/
        repository.insert(manager);

        /*displays Manager added*/
        return "Added Manager with id: "+manager.getManagerId();
    }

    /*Handles the HTTP PUT request matched with given URI expression*/
    @PutMapping("/editManager/{managerId}")

    /*Method to update a specified manager provided with manager Id*/
    public ResponseEntity<Owner> updateManager(@PathVariable int managerId,
                                              @Validated @RequestBody Owner managerDetails) throws ResourceNotFoundException {
        /*exception handling if id not found*/
        Owner manager = repository.findById(managerId)
                .orElseThrow(() -> new ResourceNotFoundException("Manager not found for this id :: " + managerId));

        /*if id is found updating old with new */
        manager.setManagerName(managerDetails.getManagerName());
        manager.setDepartmentName(managerDetails.getDepartmentName());
        manager.setManagerMailId(managerDetails.getManagerMailId());
        manager.setManagerContact(managerDetails.getManagerContact());
        manager.setManagerSalary(managerDetails.getManagerSalary());
        manager.setStaffSalary(managerDetails.getStaffSalary());
        manager.setManagerGender(managerDetails.getManagerGender());
        final Owner updatedManager = repository.save(manager);
        return ResponseEntity.ok(updatedManager);
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/findManagers")

    /*Method to find all managers */
    public List<Owner> getManagers(){
        return repository.findAll();
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/findManager/{managerId}")

    /*Method to find a specified manager details provided with manager Id*/
    public ResponseEntity<Owner> getManager(@PathVariable int managerId)throws ResourceNotFoundException {
        Owner manager=repository.findById(managerId).orElseThrow(()-> new ResourceNotFoundException("Manager Not Found with id: "+managerId));
        return ResponseEntity.ok().body(manager);
    }

    /*Handles the HTTP DELETE request matched with given URI expression*/
    @DeleteMapping("/deleteManager/{managerId}")

    /*Method to delete a manager by providing manager Id*/
    public String deleteManager(@PathVariable int managerId)
            throws ResourceAccessException, ResourceNotFoundException {
        Owner manager = repository.findById(managerId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + managerId));

        repository.delete(manager);
        return "Deleted with id: "+managerId;
    }

}
