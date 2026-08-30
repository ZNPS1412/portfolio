package com.zps.portfolio.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectResponse {

    private Long id;

    private String title;

    private String description;

    private String technologies;

    private String githubUrl;

    private String liveDemoUrl;

    private String apiDocsUrl;

    private String imageUrl;

    private Boolean featured;

    private List<String> highlights;

}
