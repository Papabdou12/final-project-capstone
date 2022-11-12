package com.saraya.flightmanagmentsystem.model;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Data
@ToString
public class BookingDto implements Serializable {
    private  String bookingDate;
    private Long flightId;
    private String passengerName;
    private int passengerAge;
    private int passengerUIN;
    private Double luggage;
    private  int noOfPassenger;
}
