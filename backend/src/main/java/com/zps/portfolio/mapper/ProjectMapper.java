package com.zps.portfolio.mapper;

import com.zps.portfolio.dto.request.ProjectRequest;
import com.zps.portfolio.dto.response.ProjectResponse;
import com.zps.portfolio.model.Project;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ProjectMapper {

    private final String appBaseUrl;

    public ProjectMapper(
            @Value("${APP_BASE_URL}") String appBaseUrl
    ) {
        this.appBaseUrl = appBaseUrl;
    }

    public Project toEntity(ProjectRequest request) {

        Project project = new Project();

        project.setTitle(request.getTitle());
        project.setDescription(request.getDescription());
        project.setTechnologies(request.getTechnologies());
        project.setGithubUrl(request.getGithubUrl());
        project.setLiveDemoUrl(request.getLiveDemoUrl());
        project.setApiDocsUrl(request.getApiDocsUrl());
        project.setImageUrl(request.getImageUrl());
        project.setFeatured(request.getFeatured());
        project.setHighlights(request.getHighlights());

        return project;
    }

    public ProjectResponse toResponse(Project project) {

        ProjectResponse response = new ProjectResponse();

        response.setId(project.getId());
        response.setTitle(project.getTitle());
        response.setDescription(project.getDescription());
        response.setTechnologies(project.getTechnologies());
        response.setGithubUrl(project.getGithubUrl());
        response.setLiveDemoUrl(project.getLiveDemoUrl());
        response.setApiDocsUrl(project.getApiDocsUrl());

        response.setImageUrl(
                appBaseUrl + "/uploads/" + project.getImageUrl()
        );

        response.setFeatured(project.getFeatured());
        response.setHighlights(project.getHighlights());

        return response;
    }
}
