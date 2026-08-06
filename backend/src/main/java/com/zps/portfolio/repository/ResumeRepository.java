package com.zps.portfolio.repository;

import com.zps.portfolio.model.Resume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ResumeRepository
        extends JpaRepository<Resume, Long> {

    Optional<Resume> findByLanguage(String language);

}
