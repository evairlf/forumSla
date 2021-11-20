package com.forumseila.forumseila.domain;

import org.springframework.context.annotation.Lazy;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.UUID;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private UUID externalId;

    @OneToMany(mappedBy = "question")
    private List<Response> responses;

    @NotBlank
    private String question;

    @NotNull
    @ManyToOne
    private Owner owner;

    public Question(@NotBlank String question,
                    @NotNull Owner owner) {
        this.question = question;
        this.owner = owner;
    }

    @Deprecated
    public Question(){
    }

    @PrePersist
    public void prePersist(){
        externalId = UUID.randomUUID();
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getQuestion() {
        return question;
    }

    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }

    public UUID getExternalId() {
        return externalId;
    }

    public List<Response> getResponses() {
        return responses;
    }

    public void addResponse(Response response){
        responses.add(response);
    }
}
