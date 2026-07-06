package com.zps.portfolio.service;

import com.zps.portfolio.dto.filter.ProjectFilter;
import com.zps.portfolio.dto.request.ProjectRequest;
import com.zps.portfolio.dto.response.ProjectResponse;
import org.springframework.data.domain.Page;

public interface ProjectService {

    Page<ProjectResponse> getAllProjects(ProjectFilter filter);

    ProjectResponse getProjectById(Long id);

    ProjectResponse saveProject(ProjectRequest request);

    ProjectResponse updateProject(Long id, ProjectRequest request);

    void deleteProject(Long id);
}