package com.saraya.flightmanagmentsystem.repository;

import com.saraya.flightmanagmentsystem.model.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PassengerRepository extends JpaRepository<Passenger,Long> {

}
