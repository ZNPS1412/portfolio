package com.zps.portfolio.service.impl;

import com.zps.portfolio.exception.FileStorageException;
import com.zps.portfolio.service.FileStorageService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Objects;
import java.util.UUID;

@Service
public class FileStorageServiceImpl implements FileStorageService {

    @Value("${file.upload-dir}")
    private String uploadDir;

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

        return saveFile(file);

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

        return saveFile(file);

    }

    private String saveFile(MultipartFile file) {

        try {

            Path uploadPath = Paths.get(uploadDir);

            if (!Files.exists(uploadPath)) {

                Files.createDirectories(uploadPath);

            }

            String originalFilename = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));

            String extension = originalFilename.substring(originalFilename.lastIndexOf("."));

            String fileName = UUID.randomUUID() + extension;

            Files.copy(
                    file.getInputStream(),
                    uploadPath.resolve(fileName),
                    StandardCopyOption.REPLACE_EXISTING
            );

            return fileName;

        } catch (IOException e) {

            throw new FileStorageException("Failed to upload file.");
        }

    }

    @Override
    public void deleteFile(String filename) {

        try {

            if (filename == null || filename.isBlank()) {
                return;
            }

            Path filePath = Paths.get(uploadDir).resolve(filename);

            Files.deleteIfExists(filePath);

        } catch (IOException e) {

            throw new FileStorageException("Failed to delete file.");
        }

    }

}
