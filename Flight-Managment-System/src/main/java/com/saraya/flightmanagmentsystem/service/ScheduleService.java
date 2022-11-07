package com.saraya.flightmanagmentsystem.service;


import com.saraya.flightmanagmentsystem.exception.ResourceNotFoundException;
import com.saraya.flightmanagmentsystem.model.Airport;
import com.saraya.flightmanagmentsystem.model.Booking;
import com.saraya.flightmanagmentsystem.model.Schedule;
import com.saraya.flightmanagmentsystem.model.ScheduleDto;
import com.saraya.flightmanagmentsystem.repository.AirportRepository;
import com.saraya.flightmanagmentsystem.repository.ScheduleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
public class ScheduleService {

    @Autowired
    private  final ScheduleRepository repo;

    @Autowired
    private  final AirportRepository repository;
    @Autowired
    private  ModelMapper mapper;
    @Autowired
    private final AirportService airportService;

    public ScheduleService(ScheduleRepository repo, AirportRepository repository, ModelMapper mapper, AirportService airportService) {
        this.repo = repo;
        this.repository = repository;
        this.mapper = mapper;
        this.airportService = airportService;
    }

    public List<Schedule> getAll(){
        return repo.findAll();
    }
//
//    public Schedule updateSchedule(Long scheduleId,Schedule schedule){
//        Schedule scheduleDB = repo.findById(scheduleId).get();
//
//        scheduleDB.setArrDateTime(schedule.getArrDateTime());
//        scheduleDB.setDeptDateTime(schedule.getDeptDateTime());
//        scheduleDB.setAirport(schedule.getAirport());
//
//        return repo.save(scheduleDB);
//    }
public Schedule updateSchedule(Long scheduleId, Schedule schedule) {
    return repo.findById(scheduleId).map(scheduleDB -> {
        scheduleDB.setArrDateTime(schedule.getArrDateTime());

      scheduleDB.setDeptDateTime(schedule.getDeptDateTime());
      scheduleDB.setAirport(schedule.getAirport());

        return repo.save(scheduleDB);
    }).orElseThrow(() -> new ResourceNotFoundException("ScheduleId " + scheduleId + " not found"));
}

    public Schedule create(Long scheduleId, Schedule schedule) {

        ScheduleDto scheduleDto = mapper.map(schedule,ScheduleDto.class);
        schedule = repo.save(schedule);
        Optional<Airport> airport= repository.findById(scheduleId);
        schedule.setAirport(airport.get());


        return schedule;
    }



    public void deleteById(long scheduleId) {

        repo.deleteById(scheduleId);
    }

    public Schedule getByIdSchedule(long scheduleId) {
        return repo.findById(scheduleId).get();

    }
}
