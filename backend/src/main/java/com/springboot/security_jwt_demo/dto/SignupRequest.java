package com.springboot.security_jwt_demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class SignupRequest {
    private String userName;
    private String userFirstName;
    private String userLastName;
    private String userPassword;
    private String userRole;

}
