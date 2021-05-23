package com.ganga.managerboot.repository;

import com.ganga.managerboot.model.Staff;
import org.springframework.data.mongodb.repository.MongoRepository;

/*MongoRepository T=> collection name ID=> Primary key*/
public interface StaffRepository extends MongoRepository<Staff, Integer> {
}
