package com.zps.portfolio.service;

import com.zps.portfolio.dto.request.ContactRequest;

public interface ContactService {

    void send(ContactRequest request);

}