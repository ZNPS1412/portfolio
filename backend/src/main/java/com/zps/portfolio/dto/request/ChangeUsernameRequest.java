package com.zps.portfolio.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ChangeUsernameRequest {

    @NotBlank(message = "New username is required.")
    private String newUsername;

}
