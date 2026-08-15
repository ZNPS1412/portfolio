package com.zps.portfolio.service;

public interface EmailService {

    void sendContactNotification(
            String name,
            String email,
            String subject,
            String message
    );

}
