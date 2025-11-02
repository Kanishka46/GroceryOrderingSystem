// package com.examly.springapp.config;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
// @Configuration
// public class CorsConfig {
//        @Bean
//        public WebMvcConfigurer corsConfigurer() {
//               return new WebMvcConfigurer() {
//                         @Override
//                         public void addCorsMappings(CorsRegistry registry) {                          
//                             registry.addMapping("/api/**")
//                             .allowedOrigins("http://localhost:3000",
//                             "http://localhost:8081",
//                             "https://8080-dfbcaefadaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io",
//                             "https://8081-dfbcaefadaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io")
//                     .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//                     .allowedHeaders("*")
//                     .allowCredentials(true)
//                     .maxAge(3600);
//                 }
//             };
//         }
//     }
    

package com.examly.springapp.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
       return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {             
              registry.addMapping("/api/**")
              .allowedOrigins("http://localhost:3000",
              "http://localhost:8081",
               "https://8080-daaecfdefcaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io",
               "https://8081-daaecfdefcaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io")
          .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
          .allowedHeaders("*")
          .allowCredentials(true)
          .maxAge(3600);
        }
      };
    }
  }
       
                                  
                                          
                                                                                                                       



                                                                   
                                                                                   
                                                                                                                                                                                                                                             
