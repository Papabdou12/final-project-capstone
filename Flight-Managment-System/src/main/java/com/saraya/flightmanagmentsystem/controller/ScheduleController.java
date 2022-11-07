package com.saraya.flightmanagmentsystem.controller;

import com.saraya.flightmanagmentsystem.model.Schedule;
import com.saraya.flightmanagmentsystem.service.ScheduleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/schedule")
public class ScheduleController {
    @Autowired
    private final ScheduleService service;

    @Autowired
    private  ModelMapper mapper;

    public ScheduleController(ScheduleService service, ModelMapper mapper) {
        this.service = service;
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

}
