package com.zps.portfolio.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {

    @GetMapping
    public ResponseEntity<Resource> downloadResume() {

        Resource resource = new ClassPathResource("static/resume/resume.pdf");

        return ResponseEntity.ok()
                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=resume.pdf"
                )
                .contentType(MediaType.APPLICATION_PDF)
                .body(resource);

    }

}