import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../../model/booking';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';
import { BrowserModule } from  '@angular/platform-browser';
import { Flight } from '../../model/flight';
import { FlightService } from '../../services/flight.service';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: Booking[];
  constructor(private bookingService: BookingService, private router: Router, private tokenStorageService:AuthGuardService) {}

  ngOnInit(): void {

    this.reloadData();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    // window.location.reload();
  }
  reloadData() {
     this.bookingService.getBookingsList()
      .subscribe(data => this.bookings = data);
  }

 
  deleteBooking(bookingId: number)
  {
    this.bookingService.deleteBooking(bookingId).subscribe({
      next:(res)=>{
        alert("Booking is deleted successfully")

        this.reloadData();     
      },
      error:(err)=>{
        alert("Error while deleting Booking")
      }
    })
  }
  
  bookingDetails(bookingId: number) {
    this.router.navigate(['/booking-details', bookingId]);
  }

  updateBooking(bookingId: number)
  {
    this.router.navigate(['/booking-modified',bookingId])
       .then(() => {
      this.reloadData(); 
    });
  
  }
 
}
