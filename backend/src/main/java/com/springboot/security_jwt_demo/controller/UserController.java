package com.springboot.security_jwt_demo.controller;

import com.springboot.security_jwt_demo.dto.SignupRequest;
import com.springboot.security_jwt_demo.entity.User;
import com.springboot.security_jwt_demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

@RestController
@RequestMapping("/user")

public class UserController {
        @Autowired
        private UserService userService;

        @PostMapping("/register-new-user")
        public User registerNewUser(@RequestBody SignupRequest signupRequest) {
            return userService.registerNewUser(signupRequest);
        }

        @PostConstruct
        public void initRoleAndUser() {
            userService.initRoleAndUser();
        }

        @GetMapping("/for-admin")
        @PreAuthorize("hasRole('Admin')")
        public String forAdmin() {
            return "this url is only accessible to admin";
        }
        @GetMapping("/for-user")
        @PreAuthorize("hasAnyRole('User','Admin')")
        public String forUser() {
            return "this url is only accessible to user";
        }
}
