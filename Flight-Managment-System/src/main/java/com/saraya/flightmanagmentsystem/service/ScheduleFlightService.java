package com.saraya.flightmanagmentsystem.service;


import com.saraya.flightmanagmentsystem.model.*;
import com.saraya.flightmanagmentsystem.repository.FlightRepository;
import com.saraya.flightmanagmentsystem.repository.ScheduleRepository;
import com.saraya.flightmanagmentsystem.repository.ScheduledFlightRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ScheduleFlightService  {

    @Autowired
    private final FlightRepository flightRepository;
    @Autowired
    private  ScheduleRepository scheduleRepository;
    @Autowired
    private  ScheduledFlightRepository repo;
    @Autowired
    private  ModelMapper mapper;


    public ScheduleFlightService(FlightRepository flightRepository,ScheduleRepository scheduleRepository, ScheduledFlightRepository repo, ModelMapper mapper) {
        this.flightRepository = flightRepository;
        this.scheduleRepository = scheduleRepository;
        this.repo = repo;
        this.mapper = mapper;
    }

    public List<ScheduleFlight> getAll(){

        return repo.findAll();
    }

    public Optional<ScheduleFlight> getById(Long scheduleFlightId){

        return  repo.findById(scheduleFlightId);
    }

    public ScheduleFlight UpdateScheduleFlight(ScheduleFlight Dto){
        ScheduleFlight scheduleFlight = mapper.map(Dto,ScheduleFlight.class);
       return repo.save(scheduleFlight);
    }

    public void  DeleteById(Long scheduleFlightId){
        repo.deleteById(scheduleFlightId);
    }

    public ScheduleFlight create(ScheduleFlight scheduleFlight, Long scheduleFlightId) {

   //  ScheduleFlight scheduleFlight= new ScheduleFlight() ;

        Optional<Flight> flight = flightRepository.findById(scheduleFlightId);
        scheduleFlight.setFlight(flight.get());
        scheduleFlight.setAvailableSeats(scheduleFlight.getFlight().getSeatCapacity());
      Optional<Schedule> schedule = scheduleRepository.findById(scheduleFlightId);
        scheduleFlight.setSchedule(schedule.get());
        scheduleFlight = repo.save(scheduleFlight);
        return scheduleFlight;
    }

}

