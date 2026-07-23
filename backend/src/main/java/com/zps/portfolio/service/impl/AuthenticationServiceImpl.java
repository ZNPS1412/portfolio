package com.zps.portfolio.service.impl;

import com.zps.portfolio.dto.request.LoginRequest;
import com.zps.portfolio.dto.response.LoginResponse;
import com.zps.portfolio.model.AppUser;
import com.zps.portfolio.repository.UserRepository;
import com.zps.portfolio.security.jwt.JwtService;
import com.zps.portfolio.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final AuthenticationManager authenticationManager;

    private final UserRepository userRepository;

    private final JwtService jwtService;

    @Override
    public LoginResponse login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        AppUser user = userRepository
                .findByUsername(request.getUsername())
                .orElseThrow();

        String token = jwtService.generateToken(
                user.getUsername(),
                user.getUserRole().name()
        );

        return new LoginResponse(
                token,
                "Bearer",
                user.getUsername(),
                user.getUserRole().name()
        );

    }

}