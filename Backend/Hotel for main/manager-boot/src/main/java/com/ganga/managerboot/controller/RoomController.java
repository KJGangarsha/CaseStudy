package com.ganga.managerboot.controller;

import com.ganga.managerboot.exception.ResourceNotFoundException;
import com.ganga.managerboot.model.Room;
import com.ganga.managerboot.repository.RoomRepository;
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
public class RoomController {

    /*Enables you to inject the object dependency implicitly*/
    @Autowired
    private RoomRepository repository;

    @Autowired
    private SequenceGeneratorService service;

    /*Handles the HTTP POST request matched with given URI expression*/
    @PostMapping("/addRoom")

    /*Method to create a new room*/

    /*@Request body enables automatic deserialization of the inbound HttpRequest body onto a Java object*/
    public String addRoom(@RequestBody Room room ){

        /*Setting Id by sequence generator*/
        room.setRoomId(service.getSequenceNum(Room.sequenceName));

        /*inserting room model variables into collection*/
        repository.insert(room);

        /*displays room added*/
        return "Added room with id: "+room.getRoomId();
    }

    /*Handles the HTTP PUT request matched with given URI expression*/
    @PutMapping("/editRoom/{roomId}")

    /*Method to update a specified room provided with room Id*/
    public ResponseEntity<Room> updateRoom(@PathVariable int roomId,
                                             @Validated @RequestBody Room roomDetails) throws ResourceNotFoundException {
        /*exception handling if id not found*/
        Room room = repository.findById(roomId)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found for this id :: " +roomId));

        /*if id is found updating old with new */
        room.setRoomNumber(roomDetails.getRoomNumber());
        room.setRoomType(roomDetails.getRoomType());
        room.setRoomPrice(roomDetails.getRoomPrice());
        room.setRoomStatus(roomDetails.getRoomStatus());

        final Room updatedRoom = repository.save(room);
        return ResponseEntity.ok(updatedRoom);
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/findRooms")

    /*Method to find all rooms */
    public List<Room> getRooms(){
        return repository.findAll();
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/availRooms")

    /*Method to find all empty rooms */
    public List<Room> getAvailRooms(){
        return repository.findByroomStatus("Empty");
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/findRoom/{roomId}")

    /*Method to find a specified room details provided with room Id*/
    public ResponseEntity<Room> getRoom(@PathVariable int roomId)throws ResourceNotFoundException {
        Room room=repository.findById(roomId).orElseThrow(()-> new ResourceNotFoundException("Room Not Found with id: "+roomId));
        return ResponseEntity.ok().body(room);
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/findRoomByNumber/{roomNumber}")

    /*Method to find a specified room details provided with room number*/
    public ResponseEntity<Room> getRoomByNumber(@PathVariable int roomNumber)throws ResourceNotFoundException {
        Room room=repository.findByroomNumber(roomNumber).orElseThrow(()-> new ResourceNotFoundException("Room Not Found with id: "+roomNumber));
        return ResponseEntity.ok().body(room);
    }

    /*Handles the HTTP DELETE request matched with given URI expression*/
    @DeleteMapping("/deleteRoom/{roomId}")

    /*Method to delete a room by providing room Id*/
    public String deleteRoom(@PathVariable int roomId)
            throws ResourceAccessException, ResourceNotFoundException {
        Room room = repository.findById(roomId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + roomId));

        repository.delete(room);
        return "Deleted with id: "+roomId;
    }
}


