package com.springboot.security_jwt_demo.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class Role {

    @Id
    private String roleName;
    private String roleDescription;

//    @ManyToMany(mappedBy = "role")
//    private Collection<User> users;
}
