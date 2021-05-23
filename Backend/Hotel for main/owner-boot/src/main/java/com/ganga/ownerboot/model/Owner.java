package com.ganga.ownerboot.model;

/*importing required annotations */
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
@Document(collection = "Owner")
public class Owner {

    /*This helps ignoring the field by not mapping it to the database*/
    @Transient
    public static final String sequenceName="userSequence";

    /*Providing all variables required */
    /*Setting up the below variable as primary key in the collection*/
    @Id
    private int managerId;
    private String departmentName;
    private String managerName;
    private String managerContact;
    private String managerMailId;
    private String managerGender;
    private int managerSalary;
    private int staffSalary;
}

