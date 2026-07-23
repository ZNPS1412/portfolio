package com.zps.portfolio.controller;

import com.zps.portfolio.payload.ApiResponse;
import com.zps.portfolio.service.FileStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/upload")
@RequiredArgsConstructor
public class UploadController {

    private final FileStorageService fileStorageService;

    @PostMapping
    public ResponseEntity<ApiResponse<String>> uploadImage(@RequestParam("file") MultipartFile file) {

        String filename = fileStorageService.uploadFile(file);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Image uploaded successfully.",
                        filename
                )
        );

    }

}