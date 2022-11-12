package com.saraya.flightmanagmentsystem.repository;

import com.saraya.flightmanagmentsystem.model.Airport;
import com.saraya.flightmanagmentsystem.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Repository
@Transactional
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

    Schedule findByAirport(Long airportId);
}
