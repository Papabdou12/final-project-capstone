package com.saraya.flightmanagmentsystem.service;

import com.saraya.flightmanagmentsystem.model.*;
import com.saraya.flightmanagmentsystem.repository.BookingRepository;
import com.saraya.flightmanagmentsystem.repository.FlightRepository;
import com.saraya.flightmanagmentsystem.repository.PassengerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional

public class BookingService {

    @Autowired
    private final BookingRepository repo;
    @Autowired
    private final PassengerRepository passengerRepository;
    @Autowired
    private final FlightRepository flightRepository;
    @Autowired
    private  ModelMapper mapper;

    public BookingService(BookingRepository repo, PassengerRepository passengerRepository, FlightRepository flightRepository, ModelMapper mapper) {
        this.repo = repo;
        this.passengerRepository = passengerRepository;
        this.flightRepository = flightRepository;
        this.mapper = mapper;
    }

    public Iterable<Booking> getAll(){

        return  repo.findAll();
    }

    public Optional<Booking> getById(Long bookingId){

        return  repo.findById(bookingId);
    }

    public Booking create(Booking booking,Long bookingId ) {
        BookingDto bookingDto = mapper.map(booking, BookingDto.class);

//        UsersDto users = new UsersDto();
//        bookingDto.setUser(users);
        Optional<Passenger> passenger = passengerRepository.findById(bookingId);
        booking.setPassengerList(passenger.stream().toList());
       Flight flights = flightRepository.findById(bookingId).get();
        booking.setFlights(flights);
        booking = repo.save(booking);
        return booking;
    }
    public void addRoleToUser(Long bookingId, Long passengerId) {

        Optional<Booking> booking = repo.findById(bookingId);
        Optional<Passenger> passenger = passengerRepository.findById(passengerId);
        booking.get().getPassengerList().add(passenger.get());
    }
    public Booking updateBooking(BookingDto bookingDto){

        return repo.save(mapper.map(bookingDto, Booking.class));
    }

    public void  DeleteById(Long bookingId){
        repo.deleteById(bookingId);
    }

}
