package com.zps.portfolio.controller;

import com.zps.portfolio.dto.request.LoginRequest;
import com.zps.portfolio.dto.response.LoginResponse;
import com.zps.portfolio.payload.ApiResponse;
import com.zps.portfolio.service.AuthenticationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

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