package com.forumseila.forumseila.repositories;

import com.forumseila.forumseila.domain.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface OwnerRepository extends JpaRepository<Owner, Long> {

    Optional<Owner> findByExternalId (UUID externalId);

    Optional<Owner> findByEmail(String email);
}
