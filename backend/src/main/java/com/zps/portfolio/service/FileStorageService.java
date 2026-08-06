package com.zps.portfolio.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {

    String uploadImage(MultipartFile file);

    String uploadResume(MultipartFile file);

    void deleteFile(String filename);

}