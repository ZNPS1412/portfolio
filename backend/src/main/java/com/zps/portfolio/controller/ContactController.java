package com.zps.portfolio.controller;

import com.zps.portfolio.dto.request.ContactRequest;
import com.zps.portfolio.dto.response.ContactResponse;
import com.zps.portfolio.payload.ApiResponse;
import com.zps.portfolio.service.ContactService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@Tag(
        name = "Contact",
        description = "Operations for submitting and managing portfolio contact messages."
)
public class ContactController {

    private final ContactService contactService;

    @Operation(
            summary = "Send a contact message",
            description = "Allows visitors to submit a contact message through the portfolio website."
    )
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

    @Operation(
            summary = "Retrieve all contact messages",
            description = "Returns all contact messages ordered from newest to oldest. Requires ADMIN authentication."
    )
    @SecurityRequirement(name = "bearerAuth")
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

    @Operation(
            summary = "Delete a contact message",
            description = "Deletes a contact message by its ID. Requires ADMIN authentication."
    )
    @SecurityRequirement(name = "bearerAuth")
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
