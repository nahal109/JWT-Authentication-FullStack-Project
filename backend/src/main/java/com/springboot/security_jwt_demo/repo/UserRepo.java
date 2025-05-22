package com.springboot.security_jwt_demo.repo;

import com.springboot.security_jwt_demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories

public interface UserRepo extends JpaRepository<User, String> {
}
