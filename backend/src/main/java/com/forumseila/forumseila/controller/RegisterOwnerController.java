package com.forumseila.forumseila.controller;

import com.forumseila.forumseila.domain.Email;
import com.forumseila.forumseila.domain.Owner;
import com.forumseila.forumseila.domain.dto.OwnerDto;
import com.forumseila.forumseila.domain.dto.OwnerDtoLogin;
import com.forumseila.forumseila.domain.dto.OwnerResponse;
import com.forumseila.forumseila.service.EmailService;
import com.forumseila.forumseila.service.OwnerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/owner")
public class RegisterOwnerController {
    private Logger log = LoggerFactory.getLogger(RegisterOwnerController.class);

    private OwnerService ownerService;

    private EmailService emailService;

    public RegisterOwnerController(OwnerService ownerService, EmailService emailService) {
        this.ownerService = ownerService;
        this.emailService = emailService;
    }

    @CrossOrigin(origins = {"*"})
    @PostMapping("/register")
    public ResponseEntity<?> registerQuestion(@Valid @RequestBody OwnerDto ownerDto) {
        Optional<Owner> owner = ownerService.toOwner(ownerDto);
        if(owner.isEmpty()){
            log.error("Owner not found {} ", ownerDto.getEmail());
        }
        Email email = new Email();
        emailService.sendEmail(email, owner.get());
        log.info("Email send with success and owner saved in DB {} ", ownerDto.getEmail());
        return ResponseEntity.ok().build();
    }
    
    @CrossOrigin(origins = {"*"})
    @PostMapping("/login")
    public ResponseEntity<OwnerResponse> verifyLogin(@Valid @RequestBody OwnerDtoLogin ownerDtoLogin) {
        Optional<OwnerResponse> response = ownerService.isValid(ownerDtoLogin)
                .map(s -> new OwnerResponse(s.getName()));
        if(response.isEmpty()){
            log.error("Onwer not found {} ", ownerDtoLogin.getEmail());
            return  ResponseEntity.notFound().build();
        }
        log.info("Onwer is logged with success {} ",ownerDtoLogin.getEmail());
        return ResponseEntity.ok().body(response.get());
    }
}
