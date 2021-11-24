package com.forumseila.forumseila.domain;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class Owner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private UUID externalId;

    @NotBlank
    private String name;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

    @OneToMany(mappedBy = "owner")
    private List<Question> questionList = new ArrayList<>();

    @PrePersist
    public void prePersist(){
        externalId = UUID.randomUUID();
    }

    public Owner() {
    }

    public Owner(@NotBlank String name,
                 @NotBlank @Email String email,
                 @NotBlank String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public UUID getExternalId() {
        return externalId;
    }

    public String getExternalIdString(){
        return String.valueOf(externalId);
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void addQuestionList(Question question) {
        questionList.add(question);
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
