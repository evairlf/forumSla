package com.forumseila.forumseila.controller;

import com.forumseila.forumseila.domain.Response;
import com.forumseila.forumseila.domain.dto.ResponseDto;
import com.forumseila.forumseila.domain.dto.ResponsePageable;
import com.forumseila.forumseila.service.ResponseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;


@RestController
@RequestMapping("/api/v1/response")
public class RegisterResponseController {
    private Logger log = LoggerFactory.getLogger(RegisterQuestionController.class);

    private ResponseService responseService;

    public RegisterResponseController(ResponseService responseService) {
        this.responseService = responseService;
    }

    @GetMapping("/{externalId}")
    public ResponseEntity<Page<ResponsePageable>> findAllResponse(@PathVariable String externalId, Pageable pageable) {
        Page<ResponsePageable> responsePageables =
                responseService.findAllResponse(externalId, pageable);
        if (responsePageables.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(responsePageables);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerResponse(@Valid @RequestBody ResponseDto responseDto) {
        if (responseDto == null) {
            return ResponseEntity.badRequest().build();
        }
        Optional<Response> response =
                Optional.ofNullable(responseService.toResponse(responseDto)
                        .orElseThrow(() -> new IllegalStateException("Response not found")));
        log.info("Registe response in DB {}, {}", response.get().getNameOwner(), response.get().getExternalId());
        return ResponseEntity.ok().build();
    }

}
