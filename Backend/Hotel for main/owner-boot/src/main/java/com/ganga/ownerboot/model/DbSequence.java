package com.ganga.ownerboot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

/*getters, setters, all arguments and no argument constructors by annotations*/
@Data
@NoArgsConstructor
@AllArgsConstructor
/*to specify custom property values*/
/*setting collection name */
@Document(collection="IdSeq")
public class DbSequence {

    /*Providing all variables required */
    private String id;
    private int seq;

}
