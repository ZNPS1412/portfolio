package com.zps.portfolio.controller;

import com.zps.portfolio.exception.ResourceNotFoundException;
import com.zps.portfolio.model.Project;
import com.zps.portfolio.service.ProjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Project not found with id: " + id));
    }

    @PostMapping
    public Project createProject(@Valid @RequestBody Project project) {
        return projectService.saveProject(project);
    }

    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id,
                                 @Valid @RequestBody Project project) {

        return projectService.updateProject(id, project);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
    }
}