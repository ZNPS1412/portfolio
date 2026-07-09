package com.zps.portfolio.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
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
                                        "REST API for managing portfolio projects, skills, experience, education, and contact information."
                                )
                                .contact(
                                        new Contact()
                                                .name("Zarni Paing Sett")
                                                .email("zarnipaingsett2001@email.com")
                                                .url("https://github.com/ZNPS1412")
                                )
                );
    }

}