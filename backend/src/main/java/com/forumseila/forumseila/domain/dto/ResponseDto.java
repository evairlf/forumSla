package com.forumseila.forumseila.domain.dto;

import javax.persistence.Lob;
import javax.validation.constraints.NotBlank;

public class ResponseDto {

    @NotBlank
    private String externalIdQuestion;

    @Lob
    @NotBlank
    private String response;

    @NotBlank
    private String nameOwner;

    public ResponseDto(String externalIdQuestion, String response, String nameOwner) {
        this.externalIdQuestion = externalIdQuestion;
        this.response = response;
        this.nameOwner = nameOwner;
    }

    @Deprecated
    public ResponseDto(){
    }

    public String getExternalIdQuestion() {
        return externalIdQuestion;
    }

    public String getResponse() {
        return response;
    }

    public String getNameOwner() {
        return nameOwner;
    }
}
