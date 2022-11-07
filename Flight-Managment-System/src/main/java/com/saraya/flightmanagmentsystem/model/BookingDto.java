package com.saraya.flightmanagmentsystem.model;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Data
@ToString
public class BookingDto implements Serializable {
    private  Long bookingId;
    private  LocalDate bookingDate;

    private  List<PassengerDto> PassengerList;
    private  FlightDto flights;
    private  int noOfPassenger;
}
