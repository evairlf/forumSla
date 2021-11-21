package com.forumseila.forumseila.domain.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class OwnerDtoLogin {

    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String password;

    public OwnerDtoLogin(String email,
                         String password) {
        this.email = email;
        this.password = password;
    }

    @Deprecated
    public  OwnerDtoLogin(){
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
