package com.zps.portfolio.service.impl;

import com.zps.portfolio.exception.FileStorageException;
import com.zps.portfolio.service.FileStorageService;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;
import java.util.UUID;

@Service
public class FileStorageServiceImpl implements FileStorageService {

    private static final String IMAGE_BUCKET = "project-images";
    private static final String RESUME_BUCKET = "resumes";

    private final RestClient supabaseStorageClient;

    public FileStorageServiceImpl(RestClient supabaseStorageClient) {
        this.supabaseStorageClient = supabaseStorageClient;
    }

    @Override
    public String uploadImage(MultipartFile file) {

        if (file.isEmpty()) {
            throw new FileStorageException("Please select an image.");
        }

        String contentType = file.getContentType();

        if (contentType == null ||
                (!contentType.equals("image/png")
                        && !contentType.equals("image/jpeg")
                        && !contentType.equals("image/webp"))) {

            throw new FileStorageException("Only PNG, JPG and WEBP images are allowed.");
        }

        long maxSize = 5 * 1024 * 1024;

        if (file.getSize() > maxSize) {
            throw new FileStorageException("Image size cannot exceed 5 MB.");
        }

        return uploadToSupabase(
                file,
                IMAGE_BUCKET,
                contentType
        );
    }

    @Override
    public String uploadResume(MultipartFile file) {

        if (file.isEmpty()) {
            throw new FileStorageException("Please select a PDF.");
        }

        String contentType = file.getContentType();

        if (contentType == null || !contentType.equals("application/pdf")) {

            throw new FileStorageException("Only PDF files are allowed.");
        }

        return uploadToSupabase(
                file,
                RESUME_BUCKET,
                contentType
        );
    }

    private String uploadToSupabase(
            MultipartFile file,
            String bucket,
            String contentType
    ) {

        try {

            String originalFilename = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));

            String extension = "";

            int lastDot = originalFilename.lastIndexOf(".");

            if (lastDot >= 0) {
                extension = originalFilename.substring(lastDot);
            }

            String fileName = UUID.randomUUID() + extension;

            byte[] fileBytes = file.getBytes();

            supabaseStorageClient
                    .post()
                    .uri("/object/{bucket}/{filename}",
                            bucket,
                            fileName)
                    .header("x-upsert", "true")
                    .contentType(
                            MediaType.parseMediaType(contentType)
                    )
                    .body(fileBytes)
                    .retrieve()
                    .toBodilessEntity();

            return fileName;

        } catch (IOException e) {

            throw new FileStorageException("Failed to read file.");

        } catch (RestClientResponseException e) {

            throw new FileStorageException("Failed to upload file to Supabase Storage.");
        }
    }

    @Override
    public void deleteImage(String filename) {

        deleteFromSupabase(IMAGE_BUCKET, filename);
    }

    @Override
    public void deleteResume(String filename) {

        deleteFromSupabase(RESUME_BUCKET, filename);
    }

    private void deleteFromSupabase(String bucket, String filename
    ) {

        if (filename == null || filename.isBlank()) {
            return;
        }

        try {

            supabaseStorageClient
                    .delete()
                    .uri("/object/{bucket}/{filename}",
                            bucket,
                            filename)
                    .retrieve()
                    .toBodilessEntity();

        } catch (RestClientResponseException e) {

            throw new FileStorageException("Failed to delete file from Supabase Storage.");
        }
    }

    @Override
    public Resource downloadResume(String filename) {

        if (filename == null || filename.isBlank()) {
            throw new FileStorageException("Resume filename is required.");
        }

        try {

            byte[] fileBytes =
                    supabaseStorageClient
                            .get()
                            .uri(
                                    "/object/{bucket}/{filename}",
                                    RESUME_BUCKET,
                                    filename
                            )
                            .retrieve()
                            .body(byte[].class);

            if (fileBytes == null) {
                throw new FileStorageException("Resume file was not found.");
            }

            return new ByteArrayResource(fileBytes);

        } catch (RestClientResponseException e) {

            throw new FileStorageException("Failed to download resume from Supabase Storage.");
        }
    }
}
