package com.saraya.flightmanagmentsystem.repository;

import com.saraya.flightmanagmentsystem.model.ScheduleFlight;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface ScheduledFlightRepository extends JpaRepository<ScheduleFlight, Long> {

}
