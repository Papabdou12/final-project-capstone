package com.saraya.flightmanagmentsystem.model;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "users")
@ToString
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Long  userId;
    private String username;
    private String password;
    private Integer userPhone;
    private String userEmail;
    @ManyToMany(fetch = FetchType.LAZY)
    @ToString.Exclude
    private Set<Role> roles = new HashSet<>();

    public Users(String username, String userEmail, String password) {
        this.username = username;
        this.userEmail = userEmail;
        this.password = password;
    }





}
