package com.springboot.security_jwt_demo.service;

import com.springboot.security_jwt_demo.dto.LoginRequest;
import com.springboot.security_jwt_demo.dto.LoginResponse;
import com.springboot.security_jwt_demo.entity.User;
import com.springboot.security_jwt_demo.repo.UserRepo;
import com.springboot.security_jwt_demo.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service

public class JwtService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JWTUtil jwtUtil;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findById(username).get();
        if(user != null) {
            return new org.springframework.security.core.userdetails.User(
                    user.getUserName(),
                    user.getUserPassword(),
                    getAuthority(user)
            );
        }else {
            throw new UsernameNotFoundException("user not found with username: " + username);
        }
    }

    private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
//        for(Role role: user.getRole()){
//            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getRoleName()));
////        }
        user.getRole().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getRoleName()));
        });
        return authorities;
    }

    public LoginResponse createJwtToken(LoginRequest loginRequest) throws Exception {
        String username = loginRequest.getUserName();
        String userpassword = loginRequest.getUserPassword();
        authenticate(username,userpassword);
        UserDetails userDetails = loadUserByUsername(username);
        String newGeneratedToken = jwtUtil.generateToken(userDetails);
        User user = userRepo.findById(username).get();
        LoginResponse loginResponse = new LoginResponse(
                user,
                newGeneratedToken
        );
        return loginResponse;
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));

        }catch (BadCredentialsException e){
            throw new Exception("Invalid username or password",e);
        }
    }
}
