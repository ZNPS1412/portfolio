package com.zps.portfolio.service;

import com.zps.portfolio.dto.request.LoginRequest;
import com.zps.portfolio.dto.response.LoginResponse;

public interface AuthenticationService {

    LoginResponse login(LoginRequest request);

}