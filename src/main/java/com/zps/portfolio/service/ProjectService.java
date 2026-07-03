package com.zps.portfolio.service;

import com.zps.portfolio.model.Project;

import java.util.List;
import java.util.Optional;

public interface ProjectService {

    List<Project> getAllProjects();

    Optional<Project> getProjectById(Long id);

    Project saveProject(Project project);

    Project updateProject(Long id, Project project);

    void deleteProject(Long id);
}