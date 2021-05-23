package com.ganga.ownerboot.repository;

import com.ganga.ownerboot.model.Owner;
import org.springframework.data.mongodb.repository.MongoRepository;

/*MongoRepository T=> model name ID=> Primary key*/
public interface OwnerRepository extends MongoRepository<Owner, Integer> {
}
