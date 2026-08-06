package com.zps.portfolio.controller;

import com.zps.portfolio.dto.response.ResumeResponse;
import com.zps.portfolio.payload.ApiResponse;
import com.zps.portfolio.service.ResumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/resume")
@RequiredArgsConstructor
public class ResumeController {

    private final ResumeService resumeService;

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

    @GetMapping("/download/{language}")
    public ResponseEntity<Resource> downloadResume(
            @PathVariable String language) {

        return resumeService.downloadResume(language);

    }

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
