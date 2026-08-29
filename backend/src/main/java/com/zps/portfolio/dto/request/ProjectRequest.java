package com.zps.portfolio.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectRequest {

    @NotBlank(message = "Title is required.")
    private String title;

    @Size(max = 1000, message = "Description cannot exceed 1000 characters.")
    private String description;

    @NotBlank(message = "Technologies are required.")
    private String technologies;

    @NotBlank(message = "GitHub URL is required.")
    private String githubUrl;

    private String liveDemoUrl;

    private String imageUrl;

    private Boolean featured;

    private List<
            @NotBlank(message = "Highlight cannot be blank.")
            @Size(max = 300, message = "Highlight cannot exceed 300 characters.")
                    String
            > highlights;

}
