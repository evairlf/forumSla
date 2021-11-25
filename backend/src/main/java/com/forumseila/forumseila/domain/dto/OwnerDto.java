package com.forumseila.forumseila.domain.dto;

import com.forumseila.forumseila.domain.Owner;
import com.forumseila.forumseila.validator.genericvalidation.UniqueValue;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class OwnerDto {

    @NotBlank
    private String name;
    @NotBlank
    @Email
    @UniqueValue(domainClass = Owner.class, fieldName = "email")
    private String email;
    @NotBlank
    private String password;

    public OwnerDto(@NotBlank String name,
                    @NotBlank @Email String email,
                    @NotBlank String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    @Deprecated
    public OwnerDto() {
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
