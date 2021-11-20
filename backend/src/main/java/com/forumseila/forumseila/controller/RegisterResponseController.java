package com.forumseila.forumseila.controller;

import com.forumseila.forumseila.domain.dto.ResponsePageable;
import com.forumseila.forumseila.service.ResponseService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/response")
public class RegisterResponseController {

    private ResponseService responseService;

    public RegisterResponseController(ResponseService responseService) {
        this.responseService = responseService;
    }

    @GetMapping("/{externalId}")
    public ResponseEntity<Page<ResponsePageable>> findAllResponse(@PathVariable String externalId,
                                                                  @RequestParam(required = false,value = "page", defaultValue = "0")           Integer page,
                                                                  @RequestParam(required = false,value = "linesPerPage", defaultValue = "5")   Integer linesPerPage) {
        Page<ResponsePageable> responsePageables =
                responseService.findAllResponse(page, linesPerPage, externalId);
        if (responsePageables.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(responsePageables);
    }

}
