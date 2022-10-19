package com.saraya.flightmanagmentsystem.model;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
public class FlightDto implements Serializable {
    private  Long flightId;
    private  String carrierName;
    private  String flightModel;
    private  int seatCapacity;
    private  String from;
    private  String to;
}
