package com.forumseila.forumseila.service;

import com.forumseila.forumseila.domain.Question;
import com.forumseila.forumseila.domain.Response;
import com.forumseila.forumseila.domain.dto.ResponseDto;
import com.forumseila.forumseila.domain.dto.ResponsePageable;
import com.forumseila.forumseila.repositories.QuestionRepository;
import com.forumseila.forumseila.repositories.ResponseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ResponseService {

    private QuestionRepository questionRepository;
    private ResponseRepository responseRepository;

    public ResponseService(QuestionRepository questionRepository,
                           ResponseRepository responseRepository) {
        this.questionRepository = questionRepository;
        this.responseRepository = responseRepository;
    }

    @Transactional
    public Optional<Response> toResponse(ResponseDto responseDto) {
        Optional<Question> question =
                Optional.ofNullable(questionRepository.findByExternalId(UUID.fromString(responseDto.getExternalIdQuestion()))
                        .orElseThrow(() -> new IllegalStateException("Question not found")));

        Response response = new Response();
        response.setResponse(responseDto.getResponse());
        response.setQuestion(question.get());
        response.setNameOwner(responseDto.getNameOwner());

        question.get().addResponse(response);
        responseRepository.save(response);

        questionRepository.save(question.get());

        return Optional.ofNullable(response);
    }

    public Page<ResponsePageable> findAllResponse(String externalId) {
        Optional<Question> question = questionRepository.findByExternalId(UUID.fromString(externalId));
        if (question.isEmpty()) {
            return Page.empty();
        }
        return new PageImpl<> (question.get().getResponses().stream().map(s ->
                new ResponsePageable(s.getNameOwner(), s.getResponse())).collect(Collectors.toList()));
    }
}
