package com.zps.portfolio.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {

    String uploadImage(MultipartFile file);

    String uploadResume(MultipartFile file);

    void deleteImage(String filename);

    void deleteResume(String filename);

    Resource downloadResume(String filename);

}
