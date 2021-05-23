package com.ganga.managerboot.repository;

import com.ganga.managerboot.model.Inventory;
import org.springframework.data.mongodb.repository.MongoRepository;

/*MongoRepository T=> collection name ID=> Primary key*/
public interface InventoryRepository extends MongoRepository<Inventory, Integer> {
}

