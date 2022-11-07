import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../model/booking';

@Component({
  selector: 'app-booking-modified',
  templateUrl: './booking-modified.component.html',
  styleUrls: ['./booking-modified.component.css']
})
export class BookingModifiedComponent implements OnInit {

  submitted: false;
  bookingId: number;
  booking: Booking;

  constructor(private route: ActivatedRoute, private router: Router,
    private bookingService: BookingService) { }

  ngOnInit() {
    this.booking = new Booking();

    this.bookingId = this.route.snapshot.params['bookingId'];

    this.bookingService.getBooking(this.bookingId)
    .subscribe(data => {
      console.log(data);
      this.booking = data;
      },
      error => console.log(error));
  }

  updateBooking() {
    this.bookingService.updateBooking(this.bookingId,this.booking)
      .subscribe(data => console.log(data), error => console.log(error));
    this.booking = new Booking();
    this.gotoList();
  }

  onSubmit() {
    this.updateBooking();
  }

  gotoList() {
    this.router.navigate(['/booking-list']);
  }

}
