package com.springboot.security_jwt_demo.dto;

import com.springboot.security_jwt_demo.entity.User;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class LoginResponse {

    private User user;
    private String jwtToken;
}



