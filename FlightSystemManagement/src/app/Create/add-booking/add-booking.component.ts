import { Component, OnInit } from '@angular/core';
import { Booking } from '../../model/booking';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';
import { Flight } from '../../model/flight';
import { Passenger } from '../../model/passenger';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  // PassengerList : Passenger[];
  // flights: Flight [];
  //  booking: Booking = {bookingId:null,bookingDate: null,noOfPassenger:null,ticketCost:null,flights:null};
   booking : Booking = new Booking();
  submitted=false;
  constructor(private bookingService: BookingService,private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  reloadData() {
    this.bookingService. getBookingsList();
  }
  newEmployee(): void {
    this.submitted = false;
    this.booking = new Booking();
  }


  save()
  {
    this.bookingService.createBooking(this.booking).subscribe({
      next:(res)=>{
        alert("Booking  successfully")
        this.booking = new Booking();
        this.gotoList();
        this.reloadData();     
      },
      error:(err)=>{
        alert("Error while Adding the Airport")
        this.reloadData();  
      }
    })
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  
  }
  gotoList() {
    this.router.navigate(['/booking-list']);

  }

}
