package com.zps.portfolio.controller;

import com.zps.portfolio.dto.filter.ProjectFilter;
import com.zps.portfolio.dto.request.ProjectRequest;
import com.zps.portfolio.dto.response.ProjectResponse;
import com.zps.portfolio.payload.ApiResponse;
import com.zps.portfolio.payload.PaginationResponse;
import com.zps.portfolio.service.ProjectService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<PaginationResponse<ProjectResponse>>> getAllProjects(

            @RequestParam(defaultValue = "0")
            int page,

            @RequestParam(defaultValue = "6")
            int size,

            @RequestParam(defaultValue = "id")
            String sortBy,

            @RequestParam(defaultValue = "asc")
            String sortDir,

            @RequestParam(required = false)
            String keyword,

            @RequestParam(required = false)
            Boolean featured
    ) {

        ProjectFilter filter = new ProjectFilter();

        filter.setPage(page);
        filter.setSize(size);
        filter.setSortBy(sortBy);
        filter.setSortDir(sortDir);
        filter.setKeyword(keyword);
        filter.setFeatured(featured);

        Page<ProjectResponse> pageResult =
                projectService.getAllProjects(filter);

        PaginationResponse<ProjectResponse> pagination =
                new PaginationResponse<>(
                        pageResult.getContent(),
                        pageResult.getNumber(),
                        pageResult.getSize(),
                        pageResult.getTotalElements(),
                        pageResult.getTotalPages(),
                        pageResult.hasNext(),
                        pageResult.hasPrevious()

                );

        ApiResponse<PaginationResponse<ProjectResponse>> response =
                new ApiResponse<>(
                        true,
                        "Projects retrieved successfully.",
                        pagination
                );

        return ResponseEntity.ok(response);

    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ProjectResponse>> getProjectById(@PathVariable Long id) {
        ApiResponse<ProjectResponse> response =
                new ApiResponse<>(
                        true,
                        "Project retrieved successfully.",
                        projectService.getProjectById(id)
                );

        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ProjectResponse>> createProject(
            @Valid @RequestBody ProjectRequest request) {

        ProjectResponse response =
                projectService.saveProject(request);

        ApiResponse<ProjectResponse> apiResponse =
                new ApiResponse<>(
                        true,
                        "Project created successfully.",
                        response
                );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(apiResponse);
    }

    @PutMapping("/{id}")
    public ProjectResponse updateProject(
            @PathVariable Long id,
            @Valid @RequestBody ProjectRequest request) {

        return projectService.updateProject(id, request);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(
            @PathVariable Long id) {

        projectService.deleteProject(id);

        return ResponseEntity.noContent().build();
    }
}