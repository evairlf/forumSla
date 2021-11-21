package com.forumseila.forumseila.domain.dto;

public class OwnerResponse {

    private String nameOwner;

    public OwnerResponse(String nameOwner) {
        this.nameOwner = nameOwner;
    }

    @Deprecated
    public OwnerResponse() {

    }

    public String getNameOwner() {
        return nameOwner;
    }
}
