package com.saraya.flightmanagmentsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

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
    private LocalDate passengerBirthday;
    private int passengerUIN;
    private Double luggage;

    @OneToOne
    @JsonIgnore
    private Booking booking;
}
