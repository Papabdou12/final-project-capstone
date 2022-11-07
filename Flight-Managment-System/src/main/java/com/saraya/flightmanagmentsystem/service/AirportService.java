package com.saraya.flightmanagmentsystem.service;

import com.saraya.flightmanagmentsystem.model.Airport;
import com.saraya.flightmanagmentsystem.model.AirportDto;
import com.saraya.flightmanagmentsystem.repository.AirportRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
@Slf4j
@Transactional
public class AirportService  {
    @Autowired
    private final AirportRepository repo;
    @Autowired
    private ModelMapper mapper;

    public AirportService(AirportRepository repo) {
        this.repo = repo;
    }

    public Iterable<Airport> getAll(){

        return  repo.findAll();
    }

    public Airport getById(Long airportId){

        return  repo.findById(airportId).get();
    }

    public AirportDto create(AirportDto airportDto) {
        //Convert Dto to Entity
        Airport airport = mapper.map(airportDto,Airport.class);
        airport = repo.save(airport);
        //Convert Dto to Entity
        return mapper.map(airport,AirportDto.class);
    }

    public Airport updateAirport(Airport airport){

        return repo.save(mapper.map(airport, Airport.class));
    }

    public void  DeleteById(Long airportId){
        repo.deleteById(airportId);
    }

}
