package com.saraya.flightmanagmentsystem.controller;

import com.saraya.flightmanagmentsystem.exception.ResourceNotFoundException;
import com.saraya.flightmanagmentsystem.model.Airport;
import com.saraya.flightmanagmentsystem.model.Schedule;
import com.saraya.flightmanagmentsystem.model.ScheduleDto;
import com.saraya.flightmanagmentsystem.repository.AirportRepository;
import com.saraya.flightmanagmentsystem.repository.ScheduleRepository;
import com.saraya.flightmanagmentsystem.service.ScheduleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/schedule")
public class ScheduleController {
    @Autowired
    private final ScheduleService service;

    @Autowired
    private final ScheduleRepository repo;

    @Autowired
    private final AirportRepository airportRepository;
    @Autowired
    private  ModelMapper mapper;

    public ScheduleController(ScheduleService service, ScheduleRepository repo, AirportRepository airportRepository, ModelMapper mapper) {
        this.service = service;
        this.repo = repo;
        this.airportRepository = airportRepository;
        this.mapper = mapper;
    }
    @GetMapping("/viewAll")
    public List<Schedule> getAll(){
        return  service.getAll();
    }

    @PostMapping ("/addSchedule/{scheduleId}")

    public Schedule create(@Validated @RequestBody  Schedule schedule, @PathVariable Long scheduleId) {
        return service.create(scheduleId, schedule);
    }


@PutMapping("/updateSchedule/{scheduleId}")
    public Schedule updateSchedule(@Validated @RequestBody Schedule schedule,Long scheduleId) {
        return service.updateSchedule(scheduleId, schedule);
    }
    @DeleteMapping("/delete/{scheduleId}")
    public void deleteById(@PathVariable long scheduleId) {
        service.deleteById(scheduleId);
    }


    @GetMapping("/viewById/{scheduleId}")
    public Schedule getByIdSchedule(@PathVariable long scheduleId) {
        return service.getByIdSchedule(scheduleId);

    }


    @PostMapping("/add")
    @Transactional
    public ResponseEntity<Schedule> createSchedule( @RequestBody Schedule scheduleRequest) {
        ScheduleDto scheduleDto = mapper.map(scheduleRequest,ScheduleDto.class);
        Schedule schedule = repo.save(scheduleRequest);

        Airport airport = scheduleRequest.getAirport();
        airport.setSchedule(schedule);
        airportRepository.save(airport);

        return new ResponseEntity<>(schedule, HttpStatus.CREATED);
    }

    @GetMapping("/schedule/{airportId}/schedule")
    @Transactional
    public ResponseEntity<Schedule> getScheduleByAirportId(@PathVariable(value = "airportId") Long airportId) {

        Airport airport= airportRepository.findById(airportId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Branch with id = " + airportId));

        Schedule schedule = repo.findByAirport(airportId);
        return new ResponseEntity<>(schedule, HttpStatus.OK);
    }

}
