package com.zps.portfolio.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
public class SupabaseStorageConfig {

    @Bean
    public RestClient supabaseStorageClient(
            @Value("${SUPABASE_URL}") String supabaseUrl,
            @Value("${SUPABASE_SECRET_KEY}") String supabaseSecretKey
    ) {
        return RestClient.builder()
                .baseUrl(supabaseUrl + "/storage/v1")
                .defaultHeader("Authorization", "Bearer " + supabaseSecretKey)
                .defaultHeader("apikey", supabaseSecretKey)
                .build();
    }
}
