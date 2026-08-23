package com.zps.portfolio.service.impl;

import com.zps.portfolio.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    @Value("${portfolio.contact.email}")
    private String contactEmail;

    @Override
    public void sendContactNotification(
            String name,
            String email,
            String subject,
            String message) {

        SimpleMailMessage mail = new SimpleMailMessage();

        mail.setTo(contactEmail);
        mail.setReplyTo(email);
        mail.setSubject("Portfolio Contact: " + subject);
        mail.setText(
                "New contact message received.\n\n" +

                        "Name: " + name + "\n" +

                        "Email: " + email + "\n" +

                        "Subject: " + subject + "\n\n" +

                        "Message:\n" + message
        );

        mailSender.send(mail);
    }
}
