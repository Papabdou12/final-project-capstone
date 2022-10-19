package com.saraya.flightmanagmentsystem.model;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.time.LocalTime;
import java.util.List;

@Data
@ToString
public class ScheduleDto implements Serializable {
    private  Long scheduleId;
    private  String deptDateTime;
    private  String arrDateTime;
    private AirportDto  airport;
}
