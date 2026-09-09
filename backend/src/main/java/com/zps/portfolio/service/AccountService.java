package com.zps.portfolio.service;

import com.zps.portfolio.dto.request.ChangePasswordRequest;
import com.zps.portfolio.dto.request.ChangeUsernameRequest;

public interface AccountService {

    void changeUsername(String currentUsername, ChangeUsernameRequest request);

    void changePassword(String currentUsername, ChangePasswordRequest request);

}
