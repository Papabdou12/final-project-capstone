package com.saraya.flightmanagmentsystem.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Table(name = "airport")
public class Airport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="airport_id", nullable = false)
    private Long airportId;
    private String airportCode;
    private String airportLocation;
    private String airportName;

    @OneToOne
    @JoinColumn(name = "sk_schedule_id")
    @JsonIgnore
    private Schedule schedule;

//    @OneToOne(cascade = CascadeType.ALL)

   // @JoinColumn(name = "sk_schedule_id")



}
