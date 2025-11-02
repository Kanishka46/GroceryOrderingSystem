// package com.examly.springapp.model;
// import com.fasterxml.jackson.annotation.JsonIgnore;
// import com.fasterxml.jackson.annotation.JsonProperty;
// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.EnumType;
// import jakarta.persistence.Enumerated;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.validation.constraints.Email;
// import jakarta.validation.constraints.NotBlank;
// import jakarta.validation.constraints.NotNull;
// @Entity
// public class User {

//         @Id
//        @GeneratedValue(strategy = GenerationType.IDENTITY)
//        @JsonIgnore
//        private Long id;
    
//       @NotBlank
//   @JsonProperty("username")
//   private String name;
//        @Email 
//        @NotBlank
//        @Column(unique=true)
//        private String email;

//         @NotBlank
//         private String password;
//         //@NotNull(message = "Role is required")
//         @Enumerated (EnumType.STRING)
//         private Role role=Role.USER;
       
//         public User() {
//         }
//         public Long getId() {
//             return id;
//         }
//         public void setId(Long id) {
//             this.id = id;
//         }
//         public String getName() {
//             return name;
//         }
//         public void setName(String name) {
//             this.name = name;
//         }
//         public String getEmail() {
//             return email;
//         }
//         public void setEmail(String email) {
//             this.email = email;
//         }
//         public String getPassword() {
//             return password;
//         }
//         public void setPassword(String password) {
//             this.password = password;
//         }
//         public Role getRole() {
//             return role;
//         }
//         public void setRole(Role role) {
//             this.role = role;
//         }


                                                                   
//   }

package com.examly.springapp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;


@Entity
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @JsonIgnore
  private Long id;
  @NotBlank
  @JsonProperty("username")
  private String name;
  @Email 
  @NotBlank
  @Column(unique=true)
  private String email;
   @NotBlank
  private String password;
  @Enumerated (EnumType.STRING)
  private Role role;
  public Long getId() {
    return id;
  }
  public void setId(Long id) {
    this.id = id;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public Role getRole() {
    return role;
  }
  public void setRole(Role role) {
    this.role = role;
  }
  
  
  

                                 }



                                                                                                        
