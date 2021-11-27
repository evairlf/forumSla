package com.forumseila.forumseila.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.UUID;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private UUID externalId;

    @OneToMany(mappedBy = "question" ,fetch = FetchType.EAGER ,cascade = CascadeType.ALL)
    private List<Response> responses;

    @NotBlank
    @Size(min = 10, max = 500)
    private String question;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER ,cascade = CascadeType.ALL)
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
