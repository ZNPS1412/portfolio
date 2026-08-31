package com.zps.portfolio.controller;

import com.zps.portfolio.dto.response.ResumeResponse;
import com.zps.portfolio.payload.ApiResponse;
import com.zps.portfolio.service.ResumeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/resume")
@RequiredArgsConstructor
@Tag(
        name = "Resume",
        description = "Operations for uploading, retrieving, and downloading portfolio resumes."
)
public class ResumeController {

    private final ResumeService resumeService;

    @Operation(
            summary = "Upload a resume",
            description = "Uploads or replaces a resume for the specified language. Requires ADMIN authentication."
    )
    @SecurityRequirement(name = "bearerAuth")
    @PostMapping
    public ResponseEntity<ApiResponse<ResumeResponse>> uploadResume(
            @RequestParam String language,
            @RequestParam MultipartFile file) {

        return ResponseEntity.ok(

                new ApiResponse<>(
                        true,
                        "Resume uploaded successfully.",
                        resumeService.uploadResume(
                                language,
                                file
                        )
                )
        );

    }

    @Operation(
            summary = "Download a resume",
            description = "Downloads the resume file for the specified language."
    )
    @GetMapping("/download/{language}")
    public ResponseEntity<Resource> downloadResume(
            @PathVariable String language) {

        return resumeService.downloadResume(language);

    }

    @Operation(
            summary = "Retrieve resume information",
            description = "Returns metadata and information about the resume for the specified language."
    )
    @GetMapping("/{language}")
    public ResponseEntity<ApiResponse<ResumeResponse>> getResume(
            @PathVariable String language) {

        return ResponseEntity.ok(

                new ApiResponse<>(
                        true,
                        "Resume retrieved successfully.",
                        resumeService.getResume(language)
                )
        );

    }

}
