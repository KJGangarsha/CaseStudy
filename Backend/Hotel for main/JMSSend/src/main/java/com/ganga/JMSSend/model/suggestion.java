package com.ganga.JMSSend.model;

import lombok.ToString;

import java.io.Serializable;

@ToString

public class suggestion implements Serializable {

    private String name;
    private String mailId;
    private String suggestion;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMailId() {
        return mailId;
    }

    public void setMailId(String mailId) {
        this.mailId = mailId;
    }

    public String getSuggestion() {
        return suggestion;
    }

    public void setSuggestion(String suggestion) {
        this.suggestion = suggestion;
    }

    /*@Override
    public String toString()
    {
        return "Suggestion [Name=" + name + ", MailId=" + mailId + ", description=" + suggestion
                + "]";
    }*/

}

