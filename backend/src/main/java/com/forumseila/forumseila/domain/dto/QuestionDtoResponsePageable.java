package com.forumseila.forumseila.domain.dto;

public class QuestionDtoResponsePageable {

    private String question;
    private String nameOwner;

    public QuestionDtoResponsePageable(String question,
                                       String nameOwner) {
        this.question = question;
        this.nameOwner = nameOwner;
    }


    @Deprecated
    public QuestionDtoResponsePageable() {
    }


    public String getNameOwner() {
        return nameOwner;
    }

    public String getQuestion() {
        return question;
    }

}
