package com.saraya.flightmanagmentsystem.service;

import com.saraya.flightmanagmentsystem.model.*;
import com.saraya.flightmanagmentsystem.repository.PassengerRepository;
import lombok.ToString;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;


@Service
@Transactional
public class PassengerService {

    @Autowired
    private  PassengerRepository repo;


    public PassengerService(PassengerRepository repo) {
        this.repo = repo;
    }


    public Iterable<Passenger> getAll(){

        return  repo.findAll();
    }

    public Optional<Passenger> getById(Long passengerId){

        return  repo.findById(passengerId);
    }

    public Passenger create(Passenger passenger) {

        passenger = repo.save(passenger);
        return passenger;
    }

    public Passenger updateAirport(Passenger passenger){

        return repo.save(passenger);
    }

    public void  DeleteById(Long passengerId){
        repo.deleteById(passengerId);
    }

}
