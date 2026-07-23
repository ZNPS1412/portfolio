package com.zps.portfolio.config;

import com.zps.portfolio.model.AppUser;
import com.zps.portfolio.model.UserRole;
import com.zps.portfolio.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class AdminSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {

        if (userRepository.existsByUserRole(UserRole.ADMIN)) {

            log.info("Admin account already exists.");

            return;
        }

        AppUser admin = new AppUser();

        admin.setUsername("admin");

        admin.setPassword(
                passwordEncoder.encode("admin123")
        );

        admin.setUserRole(UserRole.ADMIN);

        userRepository.save(admin);

        log.info("Default admin account created.");

    }

}