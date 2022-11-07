package com.saraya.flightmanagmentsystem.controller;

import com.saraya.flightmanagmentsystem.model.Airport;
import com.saraya.flightmanagmentsystem.model.AirportDto;
import com.saraya.flightmanagmentsystem.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/airport")
public class AirportController {

    @Autowired
    private final AirportService service;

    public AirportController(AirportService service) {
        this.service = service;
    }


    @GetMapping("/viewAirport/{id}")
    public Airport viewAirport(@PathVariable("id") Long airportId) {
        return service.getById(airportId);
    }

    @GetMapping("/allAirport")
    public Iterable<Airport> viewAllAirport() {
        return service.getAll();
    }

    @PostMapping("/addAirport")
    public AirportDto addAirport(@RequestBody AirportDto airport) {
        return service.create(airport);
    }

    @PutMapping("/update")
    public Airport modifyAirport(@RequestBody Airport airport) {
       return  service.updateAirport(airport);
    }

    @DeleteMapping("/deleteAirport/{id}")
    public void removeAirport(@PathVariable("id") Long airportId) {
        service.DeleteById(airportId);
    }

//    @GetMapping("/viewBySrcAirport/{srcAirport}")
//    Airport findBySrcAirport(@PathVariable String srcAirport){
//        return service.findSrcAirport(srcAirport);
//    }
//    @GetMapping("/viewByDstAirport/{dstAirport}")
//    Airport findByDstAirport(@PathVariable String dstAirport){
//        return service.findDstAirport(dstAirport);
//    }
}
