package com.saraya.flightmanagmentsystem.controller;

import com.saraya.flightmanagmentsystem.model.Airport;
import com.saraya.flightmanagmentsystem.model.Schedule;
import com.saraya.flightmanagmentsystem.model.ScheduleDto;
import com.saraya.flightmanagmentsystem.service.ScheduleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/schedule")
public class ScheduleController {
    @Autowired
    private final ScheduleService service;
    private ModelMapper mapper;

    public ScheduleController(ScheduleService service) {
        this.service = service;
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
