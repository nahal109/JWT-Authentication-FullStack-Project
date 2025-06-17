package com.springboot.security_jwt_demo.controller;

import com.springboot.security_jwt_demo.dto.LoginRequest;
import com.springboot.security_jwt_demo.dto.LoginResponse;
import com.springboot.security_jwt_demo.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class LoginController {
    @Autowired
    private JwtService jwtService;

    @PostMapping({"/authentication"})
    public LoginResponse createJwtTokenAndLogin(@RequestBody LoginRequest loginRequest) throws Exception {
        return jwtService.createJwtToken(loginRequest);
    }

}
