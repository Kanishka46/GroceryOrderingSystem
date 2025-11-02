// package com.examly.springapp.service;
// import java.util.List;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import com.examly.springapp.model.User;
// import com.examly.springapp.repository.UserRepository;
// @Service
// public class UserService {
//         @Autowired UserRepository userRepo;
//             public List<User> getAllUsers(){
//                 return userRepo.findAll();
//                 }
//  public User createUser(User user)
// {
//       return userRepo.save(user);
//   }
//  }

package com.examly.springapp.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.examly.springapp.model.User;

import com.examly.springapp.repository.UserRepository;

@Service
public class UserService {
  @Autowired UserRepository userRepo;
  
  
  public List<User> getAllUsers()
  {
    return userRepo.findAll();
  }
  public User createUser(User user)
  {
   return userRepo.save(user);
  }
}






