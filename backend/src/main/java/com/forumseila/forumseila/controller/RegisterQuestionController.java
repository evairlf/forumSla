package com.forumseila.forumseila.controller;

import com.forumseila.forumseila.domain.Question;
import com.forumseila.forumseila.domain.dto.QuestionDto;
import com.forumseila.forumseila.domain.dto.QuestionDtoReponse;
import com.forumseila.forumseila.service.QuestionService;
import org.springframework.data.domain.Page;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/question")
public class RegisterQuestionController {

    private QuestionService questionService;

    public RegisterQuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }
    
    @CrossOrigin(origins = "*")
    @PostMapping("/register")
    public ResponseEntity<?> registerQuestion(@Valid @RequestBody QuestionDto questionDto) {
        Optional<Question> question =
                Optional.ofNullable(questionService.toQuestion(questionDto)
                        .orElseThrow(() -> new IllegalArgumentException("Unable to save the Question")));
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<Page<QuestionDtoReponse>> findAllQuestions(  @RequestParam(value = "page", defaultValue = "0") 			    Integer page,
                                                                       @RequestParam(value = "size", defaultValue = "5") 	            Integer size,
                                                                       @RequestParam(value = "orderBy", defaultValue = "id")		    String orderBy ,
                                                                       @RequestParam(value = "direction", defaultValue = "ASC")	        String direction){
        Page<QuestionDtoReponse> questionDtoReponses = questionService.findAllQuestions(page, size, direction, orderBy);
        if (questionDtoReponses.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(questionDtoReponses);
    }
}
