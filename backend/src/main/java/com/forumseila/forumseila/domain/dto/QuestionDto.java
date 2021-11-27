package com.forumseila.forumseila.domain.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class QuestionDto {

    @NotBlank
    @Size(min = 10, max = 500)
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
