// package com.examly.springapp.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// public class SecurityConfig {

//     @Bean
//     public PasswordEncoder pwd()
//     {
//         return new BCryptPasswordEncoder();
//     }
     
//     @Bean
//     public SecurityFilterChain sc(HttpSecurity http) throws Exception
//     {
//         http.csrf().disable().authorizeRequests(auth->auth.requestMatchers("/auth/**").permitAll().anyRequest().authenticated());
//         return http.build();

//     }
    
// }
