package com.zps.portfolio.service.impl;

import com.zps.portfolio.dto.request.ContactRequest;
import com.zps.portfolio.service.ContactService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ContactServiceImpl implements ContactService {

    @Value("${portfolio.contact.email}")
    private String contactEmail;

    @Override
    public void send(ContactRequest request) {

        log.info("===== CONTACT FORM =====");
        log.info("To: {}", contactEmail);
        log.info("Name: {}", request.getName());
        log.info("Email: {}", request.getEmail());
        log.info("Subject: {}", request.getSubject());
        log.info("Message: {}", request.getMessage());

    }

}