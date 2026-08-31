package com.zps.portfolio.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI portfolioOpenAPI() {

        return new OpenAPI()

                .info(
                        new Info()
                                .title("Personal Portfolio API")
                                .version("1.0")
                                .description(
                                        """
                                        REST API for a full-stack personal portfolio application.

                                        The API provides functionality for:

                                        - JWT-based authentication and authorization
                                        - Portfolio project management
                                        - Project image uploads
                                        - Resume management and downloads
                                        - Contact message submission and management
                                        - Contact email notifications

                                        Public endpoints allow visitors to view portfolio content,
                                        download resumes, and submit contact messages.

                                        Administrative operations require JWT authentication
                                        with the ADMIN role.
                                        """
                                )
                                .contact(
                                        new Contact()
                                                .name("Zarni Paing Sett")
                                                .email("zarnipaingsett2001@email.com")
                                                .url("https://github.com/ZNPS1412")
                                )
                )

                .components(
                        new Components()
                                .addSecuritySchemes(
                                        "bearerAuth",

                                        new SecurityScheme()
                                                .name("bearerAuth")
                                                .type(SecurityScheme.Type.HTTP)
                                                .scheme("bearer")
                                                .bearerFormat("JWT")
                                )
                );
    }

}
