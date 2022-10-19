package com.saraya.flightmanagmentsystem.model;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

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
    private String  userPassword;
    private Integer userPhone;
    private String userEmail;
    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private Collection<Role> roles = new ArrayList<>();




}
