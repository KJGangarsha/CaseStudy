package com.ganga.guestboot.model;

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
@Document(collection = "Guest")
public class Guest {

    /*This helps ignoring the field by not mapping it to the database*/
    @Transient
    public static final String sequenceName="guestSequence";

    /*Providing all variables required */
    /*Setting up the below variable as primary key in the collection*/
    @Id
    private int guestId;
    private int roomNumber;
    private String guestName;
    private String guestGender;
    private String guestContact;
    private String guestMailId;
    private int numberOfPeople;
    private String checkInDate;
}
