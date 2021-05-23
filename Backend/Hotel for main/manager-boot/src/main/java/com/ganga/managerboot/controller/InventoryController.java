package com.ganga.managerboot.controller;

import com.ganga.managerboot.exception.ResourceNotFoundException;
import com.ganga.managerboot.model.Inventory;
import com.ganga.managerboot.repository.InventoryRepository;
import com.ganga.managerboot.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
public class InventoryController {

    /*Enables you to inject the object dependency implicitly*/
    @Autowired
    private InventoryRepository repository;

    @Autowired
    private SequenceGeneratorService service;

    /*Handles the HTTP POST request matched with given URI expression*/
    @PostMapping("/addInventory")

    /*Method to create a new inventory*/

    /*@Request body enables automatic deserialization of the inbound HttpRequest body onto a Java object*/
    public String addInventory(@RequestBody Inventory inventory ){
        /*Setting Id by sequence generator*/
        inventory.setInventoryId(service.getSequenceNum(Inventory.sequenceName));

        /*inserting inventory model variables into collection*/
        repository.insert(inventory);

        /*displays inventory added*/
        return "Added inventory with id: "+inventory.getInventoryId();
    }

    /*Handles the HTTP PUT request matched with given URI expression*/
    @PutMapping("/editInventory/{inventoryId}")

    /*Method to update a specified manager provided with manager Id*/
    public ResponseEntity<Inventory> updateInventory(@PathVariable int inventoryId,
                                                     @Validated @RequestBody Inventory inventoryDetails) throws ResourceNotFoundException {

        /*exception handling if id not found*/
        Inventory inventory = repository.findById(inventoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory not found for this id :: " +inventoryId));

        /*if id is found updating old with new */
        inventory.setInventoryName(inventoryDetails.getInventoryName());
        inventory.setInventoryUnits(inventoryDetails.getInventoryUnits());
        final Inventory updatedInventory = repository.save(inventory);
        return ResponseEntity.ok(updatedInventory);
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/findInventories")

    /*Method to find all inventories */
    public List<Inventory> getInventories(){
        return repository.findAll();
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/findInventory/{inventoryId}")

    /*Method to find a specified inventory details provided with inventory Id*/
    public ResponseEntity<Inventory> getInventory(@PathVariable int inventoryId)throws ResourceNotFoundException {
        Inventory inventory=repository.findById(inventoryId).orElseThrow(()-> new ResourceNotFoundException("Inventory Not Found with id: "+inventoryId));
        return ResponseEntity.ok().body(inventory);
    }

    /*Handles the HTTP DELETE request matched with given URI expression*/
    @DeleteMapping("/deleteInventory/{inventoryId}")

    /*Method to delete a inventory by providing inventory Id*/
    public String deleteInventory(@PathVariable int inventoryId)
            throws ResourceAccessException, ResourceNotFoundException {
        Inventory inventory = repository.findById(inventoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory not found for this id : " + inventoryId));

        repository.delete(inventory);
        return "Deleted with id: "+inventoryId;
    }
}






