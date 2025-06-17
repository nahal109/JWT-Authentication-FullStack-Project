package com.springboot.security_jwt_demo.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class LoginRequest {

    private String userName;
    private String userPassword;
}
