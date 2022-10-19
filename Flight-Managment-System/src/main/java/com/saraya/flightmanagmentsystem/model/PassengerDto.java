package com.saraya.flightmanagmentsystem.model;

import lombok.Data;

import java.io.Serializable;

@Data
public class PassengerDto implements Serializable {
    private  Long passengerId;
    private  String passengerName;
    private  int passengerAge;
    private  int passengerUIN;
    private  Double luggage;
}
