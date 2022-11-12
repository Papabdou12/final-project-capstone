package com.saraya.flightmanagmentsystem.service;

import com.saraya.flightmanagmentsystem.model.*;
import com.saraya.flightmanagmentsystem.repository.FlightRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


@Service
@Slf4j
@Transactional
public class FlightService {

    @Autowired
    private  FlightRepository repo;

    public FlightService(FlightRepository repo) {
        this.repo = repo;
    }


    public Iterable<Flight> getAll(){

        return  repo.findAll();
    }

    public Optional<Flight> getById(Long flightId){

        return  repo.findById(flightId);
    }

    public Flight create(Flight flight){
       flight= repo.save(flight);

        return flight ;
    }

    public Flight updateFlight(Flight flight){

        return repo.save(flight);
    }

    public void  DeleteById(Long flightId){
        repo.deleteById(flightId);
    }

    public List<Flight> search(String from, String to){
        return repo.findFlightsByFromAndTo(from, to);
    }

}

