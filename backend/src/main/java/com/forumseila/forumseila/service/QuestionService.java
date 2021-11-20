package com.forumseila.forumseila.service;

import com.forumseila.forumseila.domain.Owner;
import com.forumseila.forumseila.domain.Question;
import com.forumseila.forumseila.domain.dto.QuestionDto;
import com.forumseila.forumseila.domain.dto.QuestionDtoReponse;
import com.forumseila.forumseila.repositories.OwnerRepository;
import com.forumseila.forumseila.repositories.QuestionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class QuestionService {
    private Logger logger = LoggerFactory.getLogger(QuestionService.class);

    private OwnerService ownerService;
    private QuestionRepository questionRepository;
    private OwnerRepository ownerRepository;

    public QuestionService(OwnerService ownerService,
                           QuestionRepository questionRepository,
                           OwnerRepository ownerRepository) {
        this.ownerService = ownerService;
        this.questionRepository = questionRepository;
        this.ownerRepository = ownerRepository;
    }

    @Transactional
    public Optional<Question> toQuestion(QuestionDto questionDto) {
        if (questionDto == null) {
            return null;
        }
        Optional<Owner> owner = ownerService.findByExternalId(questionDto.getExternalIdOwner());

        Question question = new Question();
        question.setQuestion(questionDto.getQuestion());
        question.setOwner(owner.get());

        owner.get().addQuestionList(question);
        ownerRepository.save(owner.get());

        save(Optional.ofNullable(question));
        return Optional.ofNullable(question);
    }

    public void save(Optional<Question> question) {
        if (question.isEmpty()) {
            logger.error("Unable to save the question");
            throw new IllegalStateException("Unable to save the question");
        }
        questionRepository.save(question.get());
        logger.info("Question saved successfully {} ", question.get().getExternalId());

    }

    public Page<QuestionDtoReponse> findAllQuestions (Integer page,Integer linesPerPage){
        Pageable pageable = PageRequest.of(page,linesPerPage);
       return questionRepository.findAll(pageable).map(QuestionDtoReponse::new);
    }

}
