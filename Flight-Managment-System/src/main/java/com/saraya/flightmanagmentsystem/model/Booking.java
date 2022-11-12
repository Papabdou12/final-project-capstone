package com.saraya.flightmanagmentsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Table(name = "booking")
//@JsonIgnoreProperties(ignoreUnknown = true)
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id", nullable = false)
    private  Long bookingId;
    private LocalDate bookingDate;
    private int noOfPassenger;
    @OneToOne (fetch = FetchType.LAZY)
    @ToString.Exclude
    @JoinColumn(name = "flight_booking_id")
    private Flight flights;
    @OneToOne (fetch = FetchType.LAZY)
    @ToString.Exclude
    @JoinColumn(name = "passenger_booking_id")
    private Passenger passenger;


    private Double ticketCost;



}
