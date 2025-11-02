package com.examly.springapp.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
@Configuration
@OpenAPIDefinition(

    info=@Info(
    title="Online Grocery Ordering System",
    version="1.0",
      description="API documentation for my Spring Boot Application"

    )

)

public class SwaggerConfig {

       

}



 