package com.zps.portfolio.controller;

import com.zps.portfolio.dto.request.ContactRequest;
import com.zps.portfolio.payload.ApiResponse;
import com.zps.portfolio.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<ApiResponse<Object>> sendMessage(@Valid @RequestBody ContactRequest request) {

        contactService.send(request);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Message sent successfully.",
                        null
                )
        );
    }

}