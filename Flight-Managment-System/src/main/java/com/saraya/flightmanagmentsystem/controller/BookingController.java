package com.saraya.flightmanagmentsystem.controller;
import com.saraya.flightmanagmentsystem.model.*;
import com.saraya.flightmanagmentsystem.service.BookingService;
import lombok.Data;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private final BookingService service;

    @Autowired
    private final ModelMapper mapper;

    public BookingController(BookingService service, ModelMapper mapper) {
        this.service = service;
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
    @PostMapping("/add")
    public  ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        Booking b = service.create(booking);
        return new ResponseEntity<>(b,HttpStatus.CREATED);
    }
//@PostMapping("/add/{bookingId}")
//    public  ResponseEntity<Booking> createBooking(@RequestBody Booking booking, @PathVariable Long bookingId) {
//    Booking b = service.create(booking,bookingId);
//        return new ResponseEntity<>(b,HttpStatus.CREATED);
//    }
//    @PostMapping("/add/booking/toPassenger")
//    public ResponseEntity<?> addRoleToUser(@RequestBody BookingToPassengerForm form){
//        service.addRoleToUser(form.getBookingId(), form.getPassengerId());
//        return  ResponseEntity.ok().build();
//    }
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

}

//@Data
//class BookingToPassengerForm{
//    private Long bookingId;
//    private Long passengerId;
//}