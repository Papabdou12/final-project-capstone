package com.saraya.flightmanagmentsystem.repository;

import com.saraya.flightmanagmentsystem.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

}
