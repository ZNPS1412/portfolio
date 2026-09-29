package com.zps.portfolio.service.impl;

import com.resend.Resend;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.CreateEmailOptions;
import com.zps.portfolio.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final Resend resend;

    @Value("${portfolio.contact.email}")
    private String contactEmail;

    @Value("${RESEND_FROM_EMAIL}")
    private String fromEmail;

    @Override
    public void sendContactNotification(
            String name,
            String email,
            String subject,
            String message) {

        String emailBody =
                "New contact message received.\n\n" +
                        "Name: " + name + "\n" +
                        "Email: " + email + "\n" +
                        "Subject: " + subject + "\n\n" +
                        "Message:\n" + message;

        CreateEmailOptions params = CreateEmailOptions.builder()
                                        .from(fromEmail)
                                        .to(contactEmail)
                                        .replyTo(email)
                                        .subject("Portfolio Contact: " + subject)
                                        .text(emailBody)
                                        .build();

        try {
            resend.emails().send(params);
        } catch (ResendException e) {
            throw new RuntimeException("Failed to send contact notification email", e);
        }
    }
}
