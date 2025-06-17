package com.springboot.security_jwt_demo.service;

import com.springboot.security_jwt_demo.entity.Role;
import com.springboot.security_jwt_demo.repo.RoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class RoleService {
    @Autowired
    private RoleRepo roleRepo;

    public Role createNewRole (Role role) {
        return roleRepo.save(role);
    }
}
