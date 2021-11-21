package com.forumseila.forumseila.repositories;

import com.forumseila.forumseila.domain.Email;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.UUID;

@Repository
public interface EmailRepository extends JpaRepository<Email, UUID> {

}
