package com.zps.portfolio.controller;

import com.zps.portfolio.dto.request.ContactRequest;
import com.zps.portfolio.dto.response.ContactResponse;
import com.zps.portfolio.payload.ApiResponse;
import com.zps.portfolio.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<ApiResponse<ContactResponse>> createMessage(
            @Valid @RequestBody ContactRequest request) {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Message sent successfully.",
                        contactService.createMessage(request)
                )
        );
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ContactResponse>>> getMessages() {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Messages retrieved successfully.",
                        contactService.getAllMessages()
                )
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteMessage(
            @PathVariable Long id) {

        contactService.deleteMessage(id);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Message deleted successfully.",
                        null
                )
        );
    }
}
