package com.saraya.flightmanagmentsystem.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "Passenger")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Passenger {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long passengerId;
    private String passengerName;
    private int passengerAge;
    private int passengerUIN;
    private Double luggage;


}
