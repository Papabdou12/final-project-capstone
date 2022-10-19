package com.saraya.flightmanagmentsystem.controller;

import com.saraya.flightmanagmentsystem.model.Flight;
import com.saraya.flightmanagmentsystem.model.FlightDto;
import com.saraya.flightmanagmentsystem.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/flight")
public class FlightController {

    @Autowired
    private final FlightService service;

    public FlightController(FlightService service) {
        this.service = service;
    }

    @GetMapping("/viewAll")
    public Iterable<Flight> getAll(){

        return  service.getAll();
    }

    @GetMapping("/viewById")
    public Optional<Flight> getById(Long flightId){

        return  service.getById(flightId);
    }

    @PostMapping("/add")
    public Flight create(@RequestBody Flight flight) {
        return service.create(flight);
    }

    @PutMapping("/update")
    public Flight updateFlight(Flight flight){
        return service.updateFlight(flight);
    }

    @DeleteMapping("/delete/{flightId}")
    public void  DeleteById(@PathVariable Long flightId){
        service.DeleteById(flightId);
    }
}
