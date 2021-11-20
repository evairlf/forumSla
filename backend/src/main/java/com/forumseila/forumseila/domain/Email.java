package com.forumseila.forumseila.domain;

import com.forumseila.forumseila.enums.StatusEmail;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class Email {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private UUID emailId;
    private String emailTo;
    private LocalDateTime sendDateEmail;
    @Enumerated(EnumType.STRING)
    private StatusEmail statusEmail;
    private String text;

    public Email(String emailFrom,
                 String emailTo,
                 String subject,
                 String text,
                 StatusEmail statusEmailail) {
        this.emailTo = emailTo;
        this.statusEmail = statusEmail;
    }

    @Deprecated
    public Email(){

    }

    @PrePersist
    public void date(){
        sendDateEmail = LocalDateTime.now();
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setEmailTo(String emailTo) {
        this.emailTo = emailTo;
    }

    public void setSendDateEmail(LocalDateTime sendDateEmail) {
        this.sendDateEmail = sendDateEmail;
    }

    public void setStatusEmail(StatusEmail statusEmail) {
        this.statusEmail = statusEmail;
    }
}
