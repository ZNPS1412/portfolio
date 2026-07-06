package com.zps.portfolio.service.impl;

import com.zps.portfolio.dto.filter.ProjectFilter;
import com.zps.portfolio.dto.request.ProjectRequest;
import com.zps.portfolio.dto.response.ProjectResponse;
import com.zps.portfolio.exception.ResourceNotFoundException;
import com.zps.portfolio.mapper.ProjectMapper;
import com.zps.portfolio.model.Project;
import com.zps.portfolio.repository.ProjectRepository;
import com.zps.portfolio.service.ProjectService;
import com.zps.portfolio.specification.ProjectSpecification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public Page<ProjectResponse> getAllProjects(ProjectFilter filter) {

        Sort sort = filter.getSortDir().equalsIgnoreCase("asc")
                ? Sort.by(filter.getSortBy()).ascending()
                : Sort.by(filter.getSortBy()).descending();

        Pageable pageable = PageRequest.of(filter.getPage(), filter.getSize(), sort);

        Specification<Project> specification =
                Specification
                        .where(ProjectSpecification.hasKeyword(filter.getKeyword()))
                        .and(ProjectSpecification.hasFeatured(filter.getFeatured()));

        Page<Project> projects =
                projectRepository.findAll(specification, pageable);

        return projects.map(ProjectMapper::toResponse);
    }

    @Override
    public ProjectResponse getProjectById(Long id) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Project not found with id: " + id));

        return ProjectMapper.toResponse(project);
    }

    @Override
    public ProjectResponse saveProject(ProjectRequest request) {

        Project project = ProjectMapper.toEntity(request);

        Project savedProject = projectRepository.save(project);

        return ProjectMapper.toResponse(savedProject);
    }

    @Override
    public ProjectResponse updateProject(Long id, ProjectRequest request) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Project not found with id: " + id));

        project.setTitle(request.getTitle());
        project.setDescription(request.getDescription());
        project.setTechnologies(request.getTechnologies());
        project.setGithubUrl(request.getGithubUrl());
        project.setLiveDemoUrl(request.getLiveDemoUrl());
        project.setImageUrl(request.getImageUrl());
        project.setFeatured(request.getFeatured());

        Project updated = projectRepository.save(project);

        return ProjectMapper.toResponse(updated);
    }

    @Override
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}