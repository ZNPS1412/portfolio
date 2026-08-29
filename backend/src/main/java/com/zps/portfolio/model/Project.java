package com.zps.portfolio.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000)
    private String description;

    private String technologies;

    private String githubUrl;

    private String liveDemoUrl;

    private String imageUrl;

    private Boolean featured;

    @ElementCollection
    @CollectionTable(
            name = "project_highlights",
            joinColumns = @JoinColumn(name = "project_id")
    )
    @Column(name = "highlight", length = 300)
    @OrderColumn(name = "highlight_order")
    private List<String> highlights = new ArrayList<>();

}
