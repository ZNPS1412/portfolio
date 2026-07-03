package com.zps.portfolio.service.impl;

import com.zps.portfolio.exception.ResourceNotFoundException;
import com.zps.portfolio.model.Project;
import com.zps.portfolio.repository.ProjectRepository;
import com.zps.portfolio.service.ProjectService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @Override
    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    @Override
    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public Project updateProject(Long id, Project project) {

        Project existingProject = projectRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Project not found with id: " + id));

        existingProject.setTitle(project.getTitle());
        existingProject.setDescription(project.getDescription());
        existingProject.setTechnologies(project.getTechnologies());
        existingProject.setGithubUrl(project.getGithubUrl());
        existingProject.setLiveDemoUrl(project.getLiveDemoUrl());
        existingProject.setImageUrl(project.getImageUrl());
        existingProject.setFeatured(project.getFeatured());

        return projectRepository.save(existingProject);
    }

    @Override
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}