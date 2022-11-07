package com.saraya.flightmanagmentsystem.model;

import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id", nullable = false)
    private Long id;
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private  ERole roleName;

}
