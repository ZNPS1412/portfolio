package com.zps.portfolio.controller;

import com.zps.portfolio.dto.request.ChangePasswordRequest;
import com.zps.portfolio.dto.request.ChangeUsernameRequest;
import com.zps.portfolio.payload.ApiResponse;
import com.zps.portfolio.service.AccountService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/account")
@SecurityRequirement(name = "bearerAuth")
@RequiredArgsConstructor
@Tag(
        name = "Account",
        description = "Authenticated account management operations."
)
public class AccountController {

    private final AccountService accountService;

    @Operation(
            summary = "Change username",
            description = "Changes the username of the currently authenticated account. Requires authentication."
    )
    @PutMapping("/username")
    public ResponseEntity<ApiResponse<Object>> changeUsername(
            Authentication authentication,
            @Valid @RequestBody ChangeUsernameRequest request
    ) {

        accountService.changeUsername(authentication.getName(), request);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Username changed successfully. Please log in again.",
                        null
                )
        );
    }

    @Operation(
            summary = "Change password",
            description = "Changes the password of the currently authenticated account. Requires authentication."
    )
    @PutMapping("/password")
    public ResponseEntity<ApiResponse<Object>> changePassword(
            Authentication authentication,
            @Valid @RequestBody ChangePasswordRequest request
    ) {

        accountService.changePassword(authentication.getName(), request);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Password changed successfully. Please log in again.",
                        null
                )
        );
    }

}
