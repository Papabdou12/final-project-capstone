package com.saraya.flightmanagmentsystem.repository;

import com.saraya.flightmanagmentsystem.model.Flight;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flight,Long> {

    List<Flight> findFlightsByFromAndTo( String from, String to);
}
