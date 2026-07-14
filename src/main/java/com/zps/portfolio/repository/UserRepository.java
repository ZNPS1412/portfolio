package com.zps.portfolio.repository;

import com.zps.portfolio.model.AppUser;
import com.zps.portfolio.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository
        extends JpaRepository<AppUser, Long> {

    Optional<AppUser> findByUsername(String username);

    boolean existsByUserRole(UserRole role);

}