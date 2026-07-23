package com.zps.portfolio.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ContactRequest {

    @NotBlank(message = "Name is required.")
    @Size(max = 100)
    private String name;

    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email format.")
    private String email;

    @NotBlank(message = "Subject is required.")
    @Size(max = 200)
    private String subject;

    @NotBlank(message = "Message is required.")
    @Size(max = 3000)
    private String message;

}