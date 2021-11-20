package com.forumseila.forumseila.service;

import com.forumseila.forumseila.domain.Owner;
import com.forumseila.forumseila.domain.dto.OwnerDto;
import com.forumseila.forumseila.repositories.OwnerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class OwnerService {
    private Logger logger = LoggerFactory.getLogger(OwnerService.class);

    private OwnerRepository ownerRepository;

    public OwnerService(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

    public Optional<Owner> toOwner(OwnerDto ownerDto) {
        if (ownerDto == null) {
            return null;
        }
        Owner owner = new Owner();
        owner.setName(ownerDto.getName());
        owner.setEmail(ownerDto.getEmail());
        owner.setPassword(ownerDto.getPassword());
        save(Optional.ofNullable(owner));
        return Optional.ofNullable(owner);
    }

    public void save(Optional<Owner> owner) {
        if (owner.isEmpty()) {
            logger.error("Unable to save the Owner {}");
            throw new IllegalStateException("Unable to save the Owner");
        }
        ownerRepository.save(owner.get());
        logger.error("Owner saved successfully {} ", owner.get().getExternalId());
    }

    public Optional<Owner> findByExternalId(String externalId) {
        Optional<Owner> owner =
                Optional.ofNullable(ownerRepository.findByExternalId(UUID.fromString(externalId))
                        .orElseThrow(() -> new IllegalStateException("Owner not found")));
        return owner;
    }
}
