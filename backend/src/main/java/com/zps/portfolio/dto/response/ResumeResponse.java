package com.zps.portfolio.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ResumeResponse {

    private Long id;

    private String language;

    private String fileName;

    private String originalFileName;

}
