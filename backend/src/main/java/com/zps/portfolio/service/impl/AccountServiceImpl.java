package com.zps.portfolio.service.impl;

import com.zps.portfolio.dto.request.ChangePasswordRequest;
import com.zps.portfolio.dto.request.ChangeUsernameRequest;
import com.zps.portfolio.exception.AccountUpdateException;
import com.zps.portfolio.exception.ResourceNotFoundException;
import com.zps.portfolio.model.AppUser;
import com.zps.portfolio.repository.UserRepository;
import com.zps.portfolio.service.AccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class AccountServiceImpl implements AccountService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void changeUsername(String currentUsername, ChangeUsernameRequest request) {

        AppUser appUser = userRepository.findByUsername(currentUsername)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found.")
                );

        String newUsername = request.getNewUsername().trim();

        if (newUsername.equals(appUser.getUsername())) {
            throw new AccountUpdateException("New username must be different from the current username.");
        }

        if (userRepository.existsByUsername(newUsername)) {
            throw new AccountUpdateException("Username is already taken.");
        }

        appUser.setUsername(newUsername);

        userRepository.save(appUser);

        log.info("Username changed successfully for authenticated account.");
    }

    @Override
    public void changePassword(String currentUsername, ChangePasswordRequest request) {

        AppUser appUser = userRepository.findByUsername(currentUsername)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found.")
                );

        if (!passwordEncoder.matches(
                request.getCurrentPassword(),
                appUser.getPassword()
        )) {
            throw new AccountUpdateException("Current password is incorrect.");
        }

        if (request.getCurrentPassword().equals(request.getNewPassword())) {
            throw new AccountUpdateException("New password must be different from the current password.");
        }

        appUser.setPassword(passwordEncoder.encode(request.getNewPassword()));

        userRepository.save(appUser);

        log.info("Password changed successfully for authenticated account.");
    }

}
