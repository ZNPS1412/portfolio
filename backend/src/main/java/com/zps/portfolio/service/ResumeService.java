package com.zps.portfolio.service;

import com.zps.portfolio.dto.response.ResumeResponse;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface ResumeService {

    ResumeResponse uploadResume(String language, MultipartFile file);

    ResumeResponse getResume(String language);

    ResponseEntity<Resource> downloadResume(String language);

}
