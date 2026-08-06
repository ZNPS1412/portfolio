package com.zps.portfolio.service.impl;

import com.zps.portfolio.dto.response.ResumeResponse;
import com.zps.portfolio.model.Resume;
import com.zps.portfolio.repository.ResumeRepository;
import com.zps.portfolio.service.FileStorageService;
import com.zps.portfolio.service.ResumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@RequiredArgsConstructor
public class ResumeServiceImpl implements ResumeService {

    private final ResumeRepository resumeRepository;

    private final FileStorageService fileStorageService;

    @Value("${file.upload-dir}")
    private String uploadDir;

    @Override
    public ResumeResponse uploadResume(String language, MultipartFile file) {

        Resume existingResume = resumeRepository
                                    .findByLanguage(language)
                                    .orElse(null);

        if (existingResume != null) {
            fileStorageService.deleteFile(existingResume.getFileName());
            resumeRepository.delete(existingResume);
        }

        String storedFileName = fileStorageService.uploadResume(file);

        Resume resume = new Resume();
        resume.setLanguage(language.toUpperCase());
        resume.setFileName(storedFileName);
        resume.setOriginalFileName(file.getOriginalFilename());

        Resume savedResume = resumeRepository.save(resume);

        ResumeResponse response = new ResumeResponse();

        response.setId(savedResume.getId());
        response.setLanguage(savedResume.getLanguage());
        response.setFileName(savedResume.getFileName());
        response.setOriginalFileName(savedResume.getOriginalFileName());

        return response;
    }

    @Override
    public ResumeResponse getResume(String language) {

        Resume resume = resumeRepository
                            .findByLanguage(language.toUpperCase())
                            .orElseThrow(() -> new RuntimeException("Resume not found."));

        ResumeResponse response = new ResumeResponse();

        response.setId(resume.getId());
        response.setLanguage(resume.getLanguage());
        response.setFileName(resume.getFileName());
        response.setOriginalFileName(resume.getOriginalFileName());

        return response;
    }

    @Override
    public ResponseEntity<Resource> downloadResume(String language) {

        Resume resume = resumeRepository
                            .findByLanguage(language.toUpperCase())
                            .orElseThrow(() -> new RuntimeException("Resume not found."));

        try {

            Path filePath = Paths.get(uploadDir).resolve(resume.getFileName());

            Resource resource = new UrlResource(filePath.toUri());

            return ResponseEntity.ok()
                        .contentType(MediaType.APPLICATION_PDF)
                        .header(
                                HttpHeaders.CONTENT_DISPOSITION,
                                "attachment; filename=\"" +
                                        resume.getOriginalFileName() +
                                        "\""
                        )
                        .body(resource);

        } catch (MalformedURLException e) {

            throw new RuntimeException("File not found.");
        }

    }

}
