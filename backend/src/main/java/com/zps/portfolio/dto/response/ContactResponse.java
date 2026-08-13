package com.zps.portfolio.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class ContactResponse {

    private Long id;

    private String name;

    private String email;

    private String subject;

    private String message;

    private LocalDateTime createdAt;

}
