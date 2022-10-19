package com.saraya.flightmanagmentsystem.model;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
@ToString
public class AirportDto implements Serializable {
    private  Long airportId;
    private  String airportCode;
    private  String airportLocation;
    private  String airportName;
    private  String srcAirport;
    private  String dstAirport;
}
