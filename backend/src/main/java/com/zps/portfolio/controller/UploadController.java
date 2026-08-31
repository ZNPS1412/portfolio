package com.zps.portfolio.controller;

import com.zps.portfolio.payload.ApiResponse;
import com.zps.portfolio.service.FileStorageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/upload")
@RequiredArgsConstructor
@Tag(
        name = "File Upload",
        description = "Operations for uploading project images and other portfolio media files."
)
public class UploadController {

    private final FileStorageService fileStorageService;

    @Operation(
            summary = "Upload a project image",
            description = "Uploads an image file for use in a portfolio project. Requires ADMIN authentication."
    )
    @SecurityRequirement(name = "bearerAuth")
    @PostMapping
    public ResponseEntity<ApiResponse<String>> uploadImage(@RequestParam("file") MultipartFile file) {

        String filename = fileStorageService.uploadImage(file);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Image uploaded successfully.",
                        filename
                )
        );

    }

}
