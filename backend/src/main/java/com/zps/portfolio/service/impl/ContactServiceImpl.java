package com.zps.portfolio.service.impl;

import com.zps.portfolio.dto.request.ContactRequest;
import com.zps.portfolio.dto.response.ContactResponse;
import com.zps.portfolio.model.ContactMessage;
import com.zps.portfolio.repository.ContactMessageRepository;
import com.zps.portfolio.service.ContactService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactMessageRepository contactMessageRepository;

    @Override
    public ContactResponse createMessage(ContactRequest request) {

        ContactMessage message = new ContactMessage();

        message.setName(request.getName());
        message.setEmail(request.getEmail());
        message.setSubject(request.getSubject());
        message.setMessage(request.getMessage());

        ContactMessage saved = contactMessageRepository.save(message);

        log.info(
                "New contact message received from {}",
                saved.getEmail()
        );

        return mapToResponse(saved);
    }

    @Override
    public List<ContactResponse> getAllMessages() {

        return contactMessageRepository
                .findAllByOrderByCreatedAtDesc()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public void deleteMessage(Long id) {

        contactMessageRepository.deleteById(id);

        log.info("Deleted contact message ID {}", id);
    }

    private ContactResponse mapToResponse(ContactMessage message) {

        ContactResponse response = new ContactResponse();

        response.setId(message.getId());
        response.setName(message.getName());
        response.setEmail(message.getEmail());
        response.setSubject(message.getSubject());
        response.setMessage(message.getMessage());
        response.setCreatedAt(message.getCreatedAt());

        return response;
    }
}
