
// // package com.examly.springapp.controller;
// // import java.util.Collections;
// // import java.util.List;
// // import com.examly.springapp.model.*;
// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.http.HttpStatus;
// // import org.springframework.http.ResponseEntity;
// // import org.springframework.web.bind.annotation.CrossOrigin;
// // import org.springframework.web.bind.annotation.GetMapping;
// // import org.springframework.web.bind.annotation.PostMapping;
// // import org.springframework.web.bind.annotation.RequestBody;
// // import org.springframework.web.bind.annotation.RequestMapping;
// // import org.springframework.web.bind.annotation.RestController;
// // import com.examly.springapp.model.User;
// // import com.examly.springapp.repository.UserRepository;
// // import com.examly.springapp.service.UserService;
// // import jakarta.validation.Valid;
// // @RestController
// // @RequestMapping("/api/users")
// // public class UserController {
// //         @Autowired
// //             private UserService userService;
// //                 @Autowired
// //                     private UserRepository userRepository;
// //                        @PostMapping
// //      public ResponseEntity<User>createUser(@Valid @RequestBody User user)
// //      {

// //         return ResponseEntity.ok(userService.createUser(user));

// //      }
// //      @GetMapping
// //      public List<User> getAllUsers()
// //      {
// //              return userService.getAllUsers();}
    
// //       @PostMapping("/register")
// //        public ResponseEntity<?> registerUser(@RequestBody User user)
// //         {
// //                   if(userRepository.findByEmail(user.getEmail())!=null)
// //                   {
// //                             return ResponseEntity.badRequest().body(Collections.singletonMap("error", "Emial already exists"));
// //                   }
// //                   try{
// //                         user.setPassword(user.getPassword());
// //                          userRepository.save(user);
// //                          return ResponseEntity.ok(Collections.singletonMap("message", "User registerd successfully"));}
// //                   catch(Exception e) {
// //                               e.printStackTrace();
// //                             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.singletonMap("error","Server error"+e.getMessage()));
// //                       }
// //          }
                           
// //          @PostMapping("/login")
// //          public ResponseEntity<?> loginUser(@RequestBody User loginUser)
// //          {
// //                   User user=userRepository.findByEmail(loginUser.getEmail());
// //                   if(user==null)
// //                   {
// //                         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email");
// //                      }
// //                    if(!user.getPassword().equals(loginUser.getPassword()))
// //                    {
// //                          return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
// //                          }
// //                       user.setPassword(null);//so we dont send the password back;
// //                             return ResponseEntity.ok(user);
// //             }

// //  }

// // package com.examly.springapp.controller;
// // import java.util.Collections;
// // import java.util.List;
// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.http.HttpStatus;
// // import org.springframework.http.ResponseEntity;
// // import org.springframework.web.bind.annotation.*;

// // import com.examly.springapp.model.Role;
// // import com.examly.springapp.model.User;
// // import com.examly.springapp.service.UserService;

// // import jakarta.validation.Valid;

// // @RestController
// // @RequestMapping("/api/users")
// // @CrossOrigin // allow Swagger and frontend to connect
// // public class UserController {

// //     @Autowired
// //     private UserService userService;

// //     // Get all users
// //     @GetMapping
// //     public List<User> getAllUsers() {
// //         return userService.getAllUsers();
// //     }

// //     // Register new user
// //     @PostMapping("/register")
// //     public ResponseEntity<?> registerUser(@Valid @RequestBody User user) {
// //         try {
// //             // Check if email already exists
// //             if (userService.findByEmail(user.getEmail()) != null) {
// //                 return ResponseEntity.badRequest()
// //                         .body(Collections.singletonMap("error", "Email already exists"));
// //             }

// //             // Validate required fields
// //             if (user.getPassword() == null || user.getPassword().isBlank()) {
// //                 return ResponseEntity.badRequest()
// //                         .body(Collections.singletonMap("error", "Password is required"));
// //             }
// //             if (user.getName() == null || user.getName().isBlank()) {
// //                 return ResponseEntity.badRequest()
// //                         .body(Collections.singletonMap("error", "Username is required"));
// //             }

// //             // Default role if null
// //             if (user.getRole() == null) {
// //                 user.setRole(Role.USER);
// //             }

// //             // Save user
// //             userService.createUser(user);

// //             return ResponseEntity.ok(Collections.singletonMap("message", "User registered successfully"));
// //         } catch (Exception e) {
// //             e.printStackTrace(); // log the error for debugging
// //             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
// //                     .body(Collections.singletonMap("error", "Server error: " + e.getMessage()));
// //         }
// //     }

   

// //     // Login user
// //     @PostMapping("/login")
// //     public ResponseEntity<?> loginUser(@RequestBody User loginUser) {
// //         try {
// //             User user = userService.findByEmail(loginUser.getEmail());
// //             if (user == null) {
// //                 return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
// //                         .body(Collections.singletonMap("error", "Invalid email"));
// //             }

// //             // Null-safe password check
// //             if (user.getPassword() == null || !user.getPassword().equals(loginUser.getPassword())) {
// //                 return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
// //                         .body(Collections.singletonMap("error", "Invalid password"));
// //             }

// //             // Hide password in response
// //             user.setPassword(null);
// //             return ResponseEntity.ok(user);
// //         } catch (Exception e) {
// //             e.printStackTrace();
// //             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
// //                     .body(Collections.singletonMap("error", "Server error: " + e.getMessage()));
// //         }
// //     }
// // }



package com.examly.springapp.controller;

import java.util.Collections;
import java.util.List;
import com.examly.springapp.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.service.UserService;

import jakarta.validation.Valid;


@RestController
@CrossOrigin(origins = {"http://localhost:3000",
               "http://localhost:8081",
              "https://8080-daaecfdefcaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io",
             "https://8081-daaecfdefcaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io"

}
)
@RequestMapping("/api/users")
public class UserController {
  @Autowired
  private UserService userService;
  @Autowired
  private UserRepository userRepository;
 
  @PostMapping
  public ResponseEntity<User>createUser(@Valid @RequestBody User user)
  {
     return ResponseEntity.ok(userService.createUser(user));
  }
  @GetMapping
  public List<User> getAllUsers()
  {
    return userService.getAllUsers();
  }
  @PostMapping("/register")
  public ResponseEntity<?> registerUser(@RequestBody User user)
  {
    if(userRepository.findByEmail(user.getEmail())!=null)
    {
      return ResponseEntity.badRequest().body(Collections.singletonMap("error", "Emial already exists"));
    }
    try{
    user.setPassword(user.getPassword());
    userRepository.save(user);
    
    return ResponseEntity.ok(Collections.singletonMap("message", "User registerd successfully"));}
    catch(Exception e)
    {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.singletonMap("error","Server error"+e.getMessage()));
    }
  }

  @PostMapping("/login")
  public ResponseEntity<?> loginUser(@RequestBody User loginUser)
  {
     User user=userRepository.findByEmail(loginUser.getEmail());
    if(user==null)
    {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email");
    }
    if(!user.getPassword().equals(loginUser.getPassword()))
    {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
    }
    user.setPassword(null);//so we dont send the password back;
    return ResponseEntity.ok(user);
  }

    
}


