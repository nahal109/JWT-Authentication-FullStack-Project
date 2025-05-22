package com.springboot.security_jwt_demo.service;

import com.springboot.security_jwt_demo.dto.SignupRequest;
import com.springboot.security_jwt_demo.entity.Role;
import com.springboot.security_jwt_demo.entity.User;
import com.springboot.security_jwt_demo.repo.RoleRepo;
import com.springboot.security_jwt_demo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service

public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private RoleRepo roleRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;


    public User registerNewUser(SignupRequest signupRequest) {
        if (!userRepo.existsById(signupRequest.getUserName())) {
            User user = new User();
            user.setUserName(signupRequest.getUserName());
            user.setUserPassword(getEncodedPassword(signupRequest.getUserPassword()));
            user.setUserFirstName(signupRequest.getUserFirstName());
            user.setUserLastName(signupRequest.getUserLastName());

            Set<Role> adminRoles = new HashSet<>();
            if (signupRequest.getUserRole().equalsIgnoreCase("user")) {
                Role role = new Role();
                role.setRoleName(signupRequest.getUserRole());
                adminRoles.add(role);
            } else {
                throw new RuntimeException("no roles like this");
            }
            user.setRole(adminRoles);
            return userRepo.save(user);
        }
        throw new RuntimeException("user already exists");
    }

    public void initRoleAndUser() {
        Role adminRole = new Role();
        Role userRole = new Role();
        if (!roleRepo.existsById("Admin")) {
            adminRole.setRoleName("Admin");
            adminRole.setRoleDescription("Admin role");
            roleRepo.save(adminRole);
        }
        if (!roleRepo.existsById("User")) {
            userRole.setRoleName("User");
            userRole.setRoleDescription("User role");
            roleRepo.save(userRole);
        }

        if (!userRepo.existsById("admin123")) {
            User user = new User();
            user.setUserName("admin123");
            user.setUserPassword(getEncodedPassword("admin@123"));
            user.setUserFirstName("Malinga");
            user.setUserLastName("Lakshan");

            Set<Role> adminRoles = new HashSet<>();
            adminRoles.add(adminRole);

            user.setRole(adminRoles);
            userRepo.save(user);
        }
        if (!userRepo.existsById("user123")) {
            User user = new User();
            user.setUserName("user123");
            user.setUserPassword(getEncodedPassword("user@123"));
            user.setUserFirstName("Isuru");
            user.setUserLastName("Malintha");

            Set<Role> userRoles = new HashSet<>();
            userRoles.add(userRole);

            user.setRole(userRoles);
            userRepo.save(user);
        }
    }
    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}
