package com.saraya.flightmanagmentsystem.repository;


import com.saraya.flightmanagmentsystem.model.Airport;
import com.saraya.flightmanagmentsystem.model.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AirportRepository extends CrudRepository<Airport, Long> {
 Airport findBySrcAirport(String srcAirport);
    Airport findByDstAirport(String DstAirport);
}
