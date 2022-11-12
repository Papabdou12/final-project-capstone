import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking';
import { Passenger } from '../model/passenger';
import { Flight } from '../model/flight';
import { PassengerService } from '../services/passenger.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-conformed',
  templateUrl: './booking-conformed.component.html',
  styleUrls: ['./booking-conformed.component.css']
})
export class BookingConformedComponent implements OnInit {
passengers:Passenger;
passengerId: number;
  passenger: Passenger[]=[];

  flight:Flight[]=[];
  booking: Booking =new Booking();
  submitted=false;
  constructor(private bookingService: BookingService,private flightService: FlightService,
    private passengerService: PassengerService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(){
    this.passengers = new  Passenger();

    this.passengerId = this.route.snapshot.params['passengerId'];

    this.passengerService.viewPassenger(this.passengerId)
      .subscribe(data => {
        console.log(data)
        this.passengers = data;
      }, error => console.log(error));
    
    this.reloadData();

    this.flightService.viewAllFlight().subscribe(arg => {
      this.flight = arg;
    });

    
    this.passengerService.viewAllPassenger().subscribe(arg => {
      this.passenger = arg;
    });
    
  }
  reloadData() {
    this.bookingService.getBookingsList();
  }
  newEmployee(): void {
    this.submitted = false;
    this.booking = new Booking();
  }

  save()
  {
    this.bookingService.createBooking(this.booking).subscribe({
      next:(res)=>{
        alert("Your registration is  successfully ")
        this.booking = new Booking();  
        this.gotoList();
      
      },
      error:(err)=>{
        alert("Error review you Information")
         window.location.reload;
      }
    })
  }

 gotoList() {
    this.router.navigate(['/booking-list']);
  }
  onSubmit() {
    this.submitted = true;
    this.save();
    
  }

}
