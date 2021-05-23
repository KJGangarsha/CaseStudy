package com.ganga.managerboot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

/*getters, setters, all arguments and no argument constructors by annotations*/
@Data
@AllArgsConstructor
@NoArgsConstructor

/*@document- to specify custom property values*/
/*Defining collection name of mongodb to the model class*/
@Document(collection = "Staff")
public class Staff {

    /*This helps ignoring the field by not mapping it to the database*/
    @Transient
    public static final String sequenceName="staffSequence";

    /*Providing all variables required */
    /*Setting up the below variable as primary key in the collection*/
    @Id
    public int staffId;
    public String staffName;
    public String staffContact;
    public String staffMailId;
    public String staffGender;
    public String staffDepartment;

}
