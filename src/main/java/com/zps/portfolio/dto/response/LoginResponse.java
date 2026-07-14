package com.zps.portfolio.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginResponse {

    private String token;

    private String tokenType;

    private String username;

    private String role;

}