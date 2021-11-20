package com.forumseila.forumseila.controller;

import com.forumseila.forumseila.domain.Response;
import com.forumseila.forumseila.domain.dto.ResponseDto;
import com.forumseila.forumseila.service.ResponseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/register")
public class RegisterResponseToTheQuestion {

    private ResponseService responseService;

    public RegisterResponseToTheQuestion(ResponseService responseService) {
        this.responseService = responseService;
    }

    @PostMapping("/response")
    public ResponseEntity<?> registerResponse(@Valid @RequestBody ResponseDto responseDto) {
        if (responseDto == null) {
            return ResponseEntity.badRequest().build();
        }
        Optional<Response> response =
                Optional.ofNullable(responseService.toResponse(responseDto)
                        .orElseThrow(() -> new IllegalStateException("Response not found")));
        return ResponseEntity.ok().build();
    }

}
