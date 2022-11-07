package com.saraya.flightmanagmentsystem.model;


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
//    private String srcAirport;
//    private String dstAirport;


}
