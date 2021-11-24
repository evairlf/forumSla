package com.forumseila.forumseila.domain.dto;

import java.util.UUID;

public class OwnerResponse {

    private String nameOwner;
    private String externalId;

    public OwnerResponse(String nameOwner, UUID externalId) {
        this.nameOwner = nameOwner;
        this.externalId = String.valueOf(externalId);
    }

    @Deprecated
    public OwnerResponse() {

    }

    public String getNameOwner() {
        return nameOwner;
    }

    public String getExternalId(){
        return externalId;
    }
}
