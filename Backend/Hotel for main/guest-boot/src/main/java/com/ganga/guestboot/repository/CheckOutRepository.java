package com.ganga.guestboot.repository;

import com.ganga.guestboot.model.CheckOut;
import org.springframework.data.mongodb.repository.MongoRepository;

/*MongoRepository T=> collection name ID=> Primary key*/
public interface CheckOutRepository extends MongoRepository<CheckOut, Integer> {


}
