package com.ganga.guestboot.repository;

import com.ganga.guestboot.model.Guest;
import org.springframework.data.mongodb.repository.MongoRepository;

/*MongoRepository T=> collection name ID=> Primary key*/
public interface GuestRepository extends MongoRepository<Guest, Integer> {
}
