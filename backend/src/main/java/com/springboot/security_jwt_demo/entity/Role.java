package com.springboot.security_jwt_demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreType;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;

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
