package com.saraya.flightmanagmentsystem.repository;


import com.saraya.flightmanagmentsystem.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.math.BigInteger;

@Repository
@Transactional
public interface BookingRepository extends JpaRepository<Booking, Long> {

    Booking findByPassenger(Long passengerId);
    Booking findByFlights(Long flightId);

}
