package com.forumseila.forumseila.domain.dto;

public class ResponsePageable {

    private String nameOwner;
    private String response;

    public ResponsePageable(String nameOwner,
                            String response) {
        this.nameOwner = nameOwner;
        this.response = response;
    }

    @Deprecated
    public ResponsePageable(){
    }

    public String getNameOwner() {
        return nameOwner;
    }

    public String getResponse() {
        return response;
    }
}
