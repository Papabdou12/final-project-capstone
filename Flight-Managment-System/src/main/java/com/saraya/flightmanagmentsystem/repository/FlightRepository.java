package com.saraya.flightmanagmentsystem.repository;

import com.saraya.flightmanagmentsystem.model.Flight;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
@Repository
public interface FlightRepository extends CrudRepository<Flight,Long>{

}
