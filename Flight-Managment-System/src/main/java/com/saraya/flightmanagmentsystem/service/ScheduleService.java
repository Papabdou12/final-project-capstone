package com.saraya.flightmanagmentsystem.service;


import com.saraya.flightmanagmentsystem.model.Airport;
import com.saraya.flightmanagmentsystem.model.Schedule;
import com.saraya.flightmanagmentsystem.model.ScheduleDto;
import com.saraya.flightmanagmentsystem.repository.AirportRepository;
import com.saraya.flightmanagmentsystem.repository.ScheduleRepository;
import com.sun.istack.NotNull;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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

    public Schedule updateSchedule(Long scheduleId,Schedule schedule){
        Schedule scheduleDB = repo.findById(scheduleId).get();

        scheduleDB.setArrDateTime(schedule.getArrDateTime());
        scheduleDB.setDeptDateTime(schedule.getDeptDateTime());
        scheduleDB.setAirport(schedule.getAirport());

        schedule = repo.save(scheduleDB);
        return schedule;
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
