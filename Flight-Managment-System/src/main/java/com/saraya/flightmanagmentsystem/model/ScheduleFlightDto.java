package com.saraya.flightmanagmentsystem.model;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
public class ScheduleFlightDto implements Serializable {
    private  Long scheduleFlightId;
    private  Integer availableSeats;
    private  FlightDto flight;
    private  ScheduleDto schedule;
}
