package com.saraya.flightmanagmentsystem.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id", nullable = false)
    private  Long bookingId;
    private LocalDate bookingDate;
    @OneToOne ( cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @ToString.Exclude
    @NotNull
    @JoinColumn(name = "flight_booking_id")
    private Flight flights;
    @NotNull
    @OneToMany(orphanRemoval = true,cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @ToString.Exclude
    private List<Passenger> PassengerList;

    private int noOfPassenger;
    private Double ticketCost;



}
