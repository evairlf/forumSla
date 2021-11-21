package com.forumseila.forumseila.controller;

import com.forumseila.forumseila.domain.Email;
import com.forumseila.forumseila.domain.Owner;
import com.forumseila.forumseila.domain.dto.OwnerDto;
import com.forumseila.forumseila.service.EmailService;
import com.forumseila.forumseila.service.OwnerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/owner")
public class RegisterOwnerController {

    private OwnerService ownerService;

    private EmailService emailService;

    public RegisterOwnerController(OwnerService ownerService, EmailService emailService) {
        this.ownerService = ownerService;
        this.emailService = emailService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerQuestion(@Valid @RequestBody OwnerDto ownerDto) {
        Optional<Owner> owner =
                Optional.ofNullable(ownerService.toOwner(ownerDto)
                        .orElseThrow(() -> new IllegalArgumentException("Unable to save the Owner")));

        Email email = new Email();
        emailService.sendEmail(email, owner.get());
        return ResponseEntity.ok().build();
    }
}
