package com.forumseila.forumseila.repositories;

import com.forumseila.forumseila.domain.Response;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ResponseRepository extends JpaRepository<Response, Long> {

    List<Response> findResponseByQuestionExternalId(UUID externalId);
}
