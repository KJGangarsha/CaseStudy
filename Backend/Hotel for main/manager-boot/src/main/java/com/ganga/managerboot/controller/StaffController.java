package com.ganga.managerboot.controller;

import com.ganga.managerboot.exception.ResourceNotFoundException;
import com.ganga.managerboot.model.AuthRequest;
import com.ganga.managerboot.model.Staff;
import com.ganga.managerboot.repository.StaffRepository;
import com.ganga.managerboot.service.SequenceGeneratorService;
import com.ganga.managerboot.util.JwtUtil;
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
@RequestMapping("/manager")
public class StaffController {

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
    private StaffRepository repository;

    @Autowired
    private SequenceGeneratorService service;

    /*Handles the HTTP POST request matched with given URI expression*/
    @PostMapping("/addStaff")

    /*Method to create a new room*/

    /*@Request body enables automatic deserialization of the inbound HttpRequest body onto a Java object*/
    public String addStaff(@RequestBody Staff staff ){

        /*Setting Id by sequence generator*/
        staff.setStaffId(service.getSequenceNum(Staff.sequenceName));

        /*inserting staff model variables into collection*/
        repository.insert(staff);

        /*displays employee added*/
        return "Added employee with id: "+staff.getStaffId();
    }

    /*Handles the HTTP PUT request matched with given URI expression*/
    @PutMapping("/editStaff/{staffId}")

    /*Method to update a specified staff provided with staff Id*/
    public ResponseEntity<Staff> updateStaff(@PathVariable int staffId,
                                             @Validated @RequestBody Staff staffDetails) throws ResourceNotFoundException {
        /*exception handling if id not found*/
        Staff staff = repository.findById(staffId)
                .orElseThrow(() -> new ResourceNotFoundException("Recep not found for this id :: " +staffId));

        /*if id is found updating old with new */
        staff.setStaffName(staffDetails.getStaffName());
        staff.setStaffContact(staffDetails.getStaffContact());
        staff.setStaffMailId(staffDetails.getStaffMailId());
        staff.setStaffGender(staffDetails.getStaffGender());
        staff.setStaffDepartment(staffDetails.getStaffDepartment());

        final Staff updatedStaff = repository.save(staff);
        return ResponseEntity.ok(updatedStaff);
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/findStaffs")

    /*Method to find all employees */
    public List<Staff> getStaffs(){
        return repository.findAll();
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/findStaff/{staffId}")

    /*Method to find a specified staff details provided with staff Id*/
    public ResponseEntity<Staff> getStaff(@PathVariable int staffId)throws ResourceNotFoundException {
        Staff recep=repository.findById(staffId).orElseThrow(()-> new ResourceNotFoundException("Employee Not Found with id: "+staffId));
        return ResponseEntity.ok().body(recep);
    }

    /*Handles the HTTP DELETE request matched with given URI expression*/
    @DeleteMapping("/deleteStaff/{staffId}")

    /*Method to delete a staff by providing staff Id*/
    public String deleteStaff(@PathVariable int staffId)
            throws ResourceAccessException, ResourceNotFoundException {
        Staff staff = repository.findById(staffId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + staffId));

        repository.delete(staff);
        return "Deleted with id: "+staffId;
    }

}
