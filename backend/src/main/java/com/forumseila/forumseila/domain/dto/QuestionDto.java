package com.forumseila.forumseila.domain.dto;

import javax.persistence.Lob;
import javax.validation.constraints.NotBlank;

public class QuestionDto {

    @Lob
    @NotBlank
    private String question;

    @NotBlank
    private String externalIdOwner;


    public QuestionDto(@NotBlank String question,
                       @NotBlank String externalIdOwner) {
        this.question = question;
        this.externalIdOwner = externalIdOwner;
    }

    @Deprecated
    public QuestionDto() {
    }

    public String getExternalIdOwner() {
        return externalIdOwner;
    }

    public String getQuestion() {
        return question;
    }

}
