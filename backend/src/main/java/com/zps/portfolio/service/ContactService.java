package com.zps.portfolio.service;

import com.zps.portfolio.dto.request.ContactRequest;
import com.zps.portfolio.dto.response.ContactResponse;

import java.util.List;

public interface ContactService {

    ContactResponse createMessage(ContactRequest request);

    List<ContactResponse> getAllMessages();

    void deleteMessage(Long id);

}
