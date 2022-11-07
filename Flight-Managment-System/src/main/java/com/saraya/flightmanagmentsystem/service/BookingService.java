package com.saraya.flightmanagmentsystem.service;

import com.saraya.flightmanagmentsystem.exception.ResourceNotFoundException;
import com.saraya.flightmanagmentsystem.model.*;
import com.saraya.flightmanagmentsystem.repository.BookingRepository;
import com.saraya.flightmanagmentsystem.repository.FlightRepository;
import com.saraya.flightmanagmentsystem.repository.PassengerRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@Slf4j
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

//    public Booking create(Booking booking,Long bookingId ) {
//        BookingDto bookingDto = mapper.map(booking, BookingDto.class);
//
////        UsersDto users = new UsersDto();
////        bookingDto.setUser(users);
//        Optional<Passenger> passenger = passengerRepository.findById(bookingId);
////        booking.getPassengerList().add(passenger.get());
//        booking.setPassengerList(passenger.stream().toList());
//        Optional<Flight> flights = flightRepository.findById(bookingId);
//        booking.setFlights(flights.get());
//        booking = repo.save(booking);
//        return booking;
//    }

    public Booking create(Booking booking ) {
        BookingDto bookingDto = mapper.map(booking, BookingDto.class);


        return repo.save(booking);
    }
//    public void addRoleToUser(Long bookingId, Long passengerId) {
//
//        Optional<Booking> booking = repo.findById(bookingId);
//        Optional<Passenger> passenger = passengerRepository.findById(passengerId);
//        booking.get().getPassengerList().add(passenger.get());
//    }

public Booking updateBooking( Long bookingId, Booking booking) {
    return repo.findById(bookingId).map(booking1 -> {
        booking1.setBookingDate(booking.getBookingDate());
        booking1.setNoOfPassenger(booking.getNoOfPassenger());
        booking1.setTicketCost(booking.getTicketCost());
       // booking1.setPassengerList(booking.getPassengerList());

        return repo.save(booking1);
    }).orElseThrow(() -> new ResourceNotFoundException("BookingId " + bookingId + " not found"));
}
    public void  DeleteById(Long bookingId){
        repo.deleteById(bookingId);
    }

}
