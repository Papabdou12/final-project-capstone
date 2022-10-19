package com.saraya.flightmanagmentsystem.model;


import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ScheduleFlight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scheduleFlightId;
    private int availableSeats;
    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @ToString.Exclude
    @NotNull
     @JoinColumn(name = "fk_flight_id")
    private Flight flight;
    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)

    @ToString.Exclude
    @NotNull
    //  @JoinColumn(name = "sk_schedule_id")
    private Schedule schedule;


}
