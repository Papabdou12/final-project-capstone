package com.saraya.flightmanagmentsystem.model;


import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Table(name = "flight")
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "flight_id",  nullable = false)
    private Long flightId;
    private String carrierName;
    private String flightModel;
    private int seatCapacity;
    private String from;
    private String to;



}
