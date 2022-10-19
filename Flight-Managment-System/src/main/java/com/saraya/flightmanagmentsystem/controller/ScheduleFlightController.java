package com.saraya.flightmanagmentsystem.controller;

import com.saraya.flightmanagmentsystem.model.*;
import com.saraya.flightmanagmentsystem.service.ScheduleFlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/scheduleFlight")
public class ScheduleFlightController {

    @Autowired
private final ScheduleFlightService scheduleFlightService;

    public ScheduleFlightController( ScheduleFlightService scheduleFlightService) {
        this.scheduleFlightService = scheduleFlightService;
    }

    @GetMapping("/viewAll")
    @ResponseStatus(code = HttpStatus.OK)
    public List<ScheduleFlight> getAll(){

        return scheduleFlightService.getAll();
    }
@GetMapping("/viewById/{scheduleFlightId}")
@ResponseStatus(code = HttpStatus.OK)
    public Optional<ScheduleFlight> getById(@PathVariable Long scheduleFlightId){

        return  scheduleFlightService.getById(scheduleFlightId);
    }



    @PutMapping("/update")
    @ResponseStatus(code = HttpStatus.OK)
    public ScheduleFlight UpdateScheduleFlight(ScheduleFlight scheduleFlight){

       return  scheduleFlightService.UpdateScheduleFlight(scheduleFlight);
    }

    @DeleteMapping("/delete/{scheduleFlightId}")
    @ResponseStatus(code = HttpStatus.OK)
    public void  DeleteById(@PathVariable Long scheduleFlightId){
       scheduleFlightService.DeleteById(scheduleFlightId);
    }

    @PostMapping("/add/{id}")
    @ResponseStatus(code = HttpStatus.CREATED)
    public ScheduleFlight create(@RequestBody ScheduleFlight scheduleFlight,@PathVariable("id") Long scheduleFlightId) {
        return scheduleFlightService.create(scheduleFlight, scheduleFlightId);

    }


}


