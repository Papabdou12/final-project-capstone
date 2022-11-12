package com.saraya.flightmanagmentsystem.controller;

import com.saraya.flightmanagmentsystem.model.Flight;
import com.saraya.flightmanagmentsystem.model.FlightDto;
import com.saraya.flightmanagmentsystem.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:4200")
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

    @GetMapping("/viewById/{flightId}")
    public Optional<Flight> getById(@PathVariable Long flightId){

        return  service.getById(flightId);
    }

    @PostMapping("/add")
    public Flight create(@RequestBody Flight flight) {
        return service.create(flight);
    }

    @PutMapping("/update")
    public Flight updateFlight(@RequestBody Flight flight){
        return service.updateFlight(flight);
    }

    @DeleteMapping("/delete/{flightId}")
    public void  DeleteById(@PathVariable Long flightId){
        service.DeleteById(flightId);
    }

    @GetMapping("/search/{from}/{to}/flight")
    public List<Flight> search( @PathVariable String from, @PathVariable String to){
        return service.search(from, to);
    }

}
