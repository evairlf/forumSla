package com.forumseila.forumseila.repositories;

import com.forumseila.forumseila.domain.Question;
import com.forumseila.forumseila.domain.dto.QuestionDtoReponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    Optional<Question> findByExternalId(UUID externalId);
}
