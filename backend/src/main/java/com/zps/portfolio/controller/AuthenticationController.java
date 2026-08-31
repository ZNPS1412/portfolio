package com.zps.portfolio.controller;

import com.zps.portfolio.dto.request.LoginRequest;
import com.zps.portfolio.dto.response.LoginResponse;
import com.zps.portfolio.payload.ApiResponse;
import com.zps.portfolio.service.AuthenticationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(
        name = "Authentication",
        description = "Authentication operations for administrative access."
)
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @Operation(
            summary = "Authenticate administrator",
            description = "Authenticates an administrator using email and password and returns a JWT access token."
    )
    @PostMapping("/login")
    public ResponseEntity<ApiResponse<LoginResponse>> login(
            @Valid @RequestBody LoginRequest request) {

        LoginResponse response = authenticationService.login(request);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Login successful.",
                        response
                )
        );
    }

}
