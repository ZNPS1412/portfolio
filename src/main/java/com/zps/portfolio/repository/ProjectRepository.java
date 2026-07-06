package com.zps.portfolio.repository;

import com.zps.portfolio.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ProjectRepository
        extends JpaRepository<Project, Long>,
        JpaSpecificationExecutor<Project> {

    Page<Project> findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCaseOrTechnologiesContainingIgnoreCase(
            String title,
            String description,
            String technologies,
            Pageable pageable
    );

}