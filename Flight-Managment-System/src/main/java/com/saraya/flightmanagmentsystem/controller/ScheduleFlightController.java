package com.saraya.flightmanagmentsystem.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.saraya.flightmanagmentsystem.model.*;
import com.saraya.flightmanagmentsystem.service.ScheduleFlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/scheduleFlight")
public class ScheduleFlightController {

    @Autowired
private final ScheduleFlightService scheduleFlightService;

    public ScheduleFlightController( ScheduleFlightService scheduleFlightService) {
        this.scheduleFlightService = scheduleFlightService;
    }

    @GetMapping("/viewAll")
//    @ResponseStatus(code = HttpStatus.OK)
    public List<ScheduleFlight> getAll(){

        return scheduleFlightService.getAll();
    }
@GetMapping("/viewById/{scheduleFlightId}")
//@ResponseStatus(code = HttpStatus.OK)
    public Optional<ScheduleFlight> getById(@PathVariable Long scheduleFlightId){

        return  scheduleFlightService.getById(scheduleFlightId);
    }



    @PutMapping("/update/{scheduleFlightId}")
    public ScheduleFlight UpdateScheduleFlight(@PathVariable(value = "scheduleFlightId") Long scheduleFlightId, @RequestBody ScheduleFlight scheduleFlight){

       return  scheduleFlightService.UpdateScheduleFlight(scheduleFlight,scheduleFlightId);
    }

    @DeleteMapping("/delete/{scheduleFlightId}")
//    @ResponseStatus(code = HttpStatus.OK)
    public void  DeleteById(@PathVariable Long scheduleFlightId){
       scheduleFlightService.DeleteById(scheduleFlightId);
    }

    @PostMapping ("/add/{scheduleFlightId}")
//    @ResponseStatus(code = HttpStatus.CREATED)
    public ScheduleFlight create( @RequestBody ScheduleFlight scheduleFlight, @PathVariable("scheduleFlightId") Long scheduleFlightId) {
        return scheduleFlightService.create(scheduleFlight, scheduleFlightId);

    }


}


