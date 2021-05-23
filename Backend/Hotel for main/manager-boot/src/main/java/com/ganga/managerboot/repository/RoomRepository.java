package com.ganga.managerboot.repository;

import com.ganga.managerboot.model.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

/*MongoRepository T=> collection name ID=> Primary key*/
public interface RoomRepository extends MongoRepository<Room, Integer> {
    /*declaring new findByroomStatus */
    List<Room> findByroomStatus(String roomStatus);

    /*declaring new findByroomNumber*/
    Optional<Room> findByroomNumber(int roomNumber);
}
