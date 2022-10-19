package com.saraya.flightmanagmentsystem.repository;


import com.saraya.flightmanagmentsystem.model.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface BookingRepository extends CrudRepository<Booking, Long> {

}
