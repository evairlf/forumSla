package com.forumseila.forumseila.domain;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.UUID;

@Entity
public class Response {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private UUID externalId;

    @ManyToOne(cascade = CascadeType.ALL)
    private Question question;

    @NotBlank
    @Size(min = 10, max = 500)
    private String response;

    @NotBlank
    private String nameOwner;

    @PrePersist
    public void prePersist(){
        externalId = UUID.randomUUID();
    }

    public String getResponse() {
        return response;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public String getNameOwner() {
        return nameOwner;
    }

    public void setNameOwner(String nameOwner) {
        this.nameOwner = nameOwner;
    }

    public UUID getExternalId() {
        return externalId;
    }
}
