package com.saraya.flightmanagmentsystem.controller;
import com.saraya.flightmanagmentsystem.exception.ResourceNotFoundException;
import com.saraya.flightmanagmentsystem.model.*;
import com.saraya.flightmanagmentsystem.repository.BookingRepository;
import com.saraya.flightmanagmentsystem.repository.FlightRepository;
import com.saraya.flightmanagmentsystem.repository.PassengerRepository;
import com.saraya.flightmanagmentsystem.service.BookingService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private final BookingService service;

    @Autowired
    private final BookingRepository repo;

    @Autowired
    private final FlightRepository flightRepository;

    @Autowired
    private final PassengerRepository passengerRepository;



    @Autowired
    private final ModelMapper mapper;

    public BookingController(BookingService service, BookingRepository repo, FlightRepository flightRepository, PassengerRepository passengerRepository, ModelMapper mapper) {
        this.service = service;
        this.repo = repo;
        this.flightRepository = flightRepository;
        this.passengerRepository = passengerRepository;
        this.mapper = mapper;
    }

    @GetMapping("/viewAll")
    public ResponseEntity<Iterable<Booking>>  getBookingsList(){
        Iterable<Booking> bookings = service.getAll();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/viewById/{bookingId}")
    public ResponseEntity<Optional<Booking>> getBooking(@PathVariable Long bookingId){
        Optional<Booking> booking= service.getById(bookingId);

        return  new ResponseEntity<>(booking,HttpStatus.OK);
    }

@PostMapping("/add/{bookingId}")
    public  ResponseEntity<Booking> createBooking( @PathVariable Long bookingId,@RequestBody Booking booking) {
    Booking b = service.create(booking, bookingId);
        return new ResponseEntity<>(b,HttpStatus.CREATED);
    }

    @PutMapping("/update/{bookingId}")
    public  ResponseEntity<Booking> updateBooking(@RequestBody Booking booking, @PathVariable Long bookingId) {
        booking = service.updateBooking(bookingId, booking);
        return new ResponseEntity<Booking>(booking, HttpStatus.OK);
    }
@DeleteMapping("/delete/{bookingId}")
    public ResponseEntity<?>DeleteById(@PathVariable Long bookingId){
        service.DeleteById(bookingId);
        return new ResponseEntity<>(HttpStatus.OK);
    }



    @PostMapping("/add")
    @Transactional
    public ResponseEntity<Booking> createBooking( @RequestBody Booking request) {
        BookingDto dto = mapper.map(request,BookingDto.class);
        Booking booking = repo.save(request);

        Passenger passenger = request.getPassenger();
        passenger.setBooking(booking);
        passengerRepository.save(passenger);

        Flight flight = request.getFlights();
        flight.setBooking(booking);
        flightRepository.save(flight);


        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }

    @GetMapping("/booking/{passengerId}/booking")
    @Transactional
    public ResponseEntity<Booking> getBookingByPassengerId(@PathVariable(value = "passengerId") Long passengerId) {

        Passenger passenger = passengerRepository.findById(passengerId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Branch with id = " + passengerId));

        Booking booking = repo.findByPassenger(passengerId);
        return new ResponseEntity<>(booking, HttpStatus.OK);
    }

    @GetMapping("/booking/{flightId}/booking")
    @Transactional
    public ResponseEntity<Booking> getBookingByFlightId(@PathVariable(value = "flightId") Long flightId) {

        Flight flight = flightRepository.findById(flightId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Branch with id = " + flightId));

        Booking booking = repo.findByFlights(flightId);
        return new ResponseEntity<>(booking, HttpStatus.OK);
    }

}

//@Data
//class BookingToPassengerForm{
//    private Long bookingId;
//    private Long passengerId;
//}