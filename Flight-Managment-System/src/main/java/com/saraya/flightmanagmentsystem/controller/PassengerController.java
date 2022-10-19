package com.saraya.flightmanagmentsystem.controller;

import com.saraya.flightmanagmentsystem.model.Passenger;
import com.saraya.flightmanagmentsystem.model.PassengerDto;
import com.saraya.flightmanagmentsystem.service.PassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/passenger")
public class PassengerController {

    @Autowired
    private final PassengerService service;

    public PassengerController(PassengerService service) {
        this.service = service;
    }

@GetMapping("/allPassenger")
    public Iterable<Passenger> getAll(){

            return  service.getAll();
        }
@GetMapping("/viewPassenger/{passengerId}")
        public Optional<Passenger> getById(@PathVariable Long passengerId){

            return  service.getById(passengerId);
        }
@PostMapping("/addPassenger")
        public Passenger create(@RequestBody Passenger passenger) {
            return service.create(passenger);
        }
@PutMapping("/update")
        public Passenger updateAirport(@RequestBody Passenger passenger){
            return service.updateAirport(passenger);
        }

        @DeleteMapping("/delete/{passengerId}")
        public void  deleteById(Long passengerId){
            service.DeleteById(passengerId);
        }

}
