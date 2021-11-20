package com.forumseila.forumseila.domain.dto;


import com.forumseila.forumseila.domain.Question;

import java.util.UUID;

public class QuestionDtoReponse {

    private String question;

    private String nameOwner;

    private String externalIdQuestion;

    @Deprecated
    public QuestionDtoReponse(){

    }
    public QuestionDtoReponse (Question question) {
     this.question = question.getQuestion();
     this.nameOwner = question.getOwner().getName();
     this.externalIdQuestion = String.valueOf(question.getExternalId());
    }

    public String getQuestion() {
        return question;
    }

    public String getNameOwner() {
        return nameOwner;
    }

    public String getExternalIdQuestion() {
        return externalIdQuestion;
    }
}
