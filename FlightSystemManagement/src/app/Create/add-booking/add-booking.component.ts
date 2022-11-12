import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Passenger } from '../../model/passenger';

import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  passenger: Passenger =new Passenger();
  submitted=false;
  passengerId:number;
  constructor(private passengerService: PassengerService,private router: Router, private route:ActivatedRoute) { }

  ngOnInit(){
    this.reloadData();
        
  }
  reloadData() {
    this.passengerService.viewAllPassenger();
  }
  newEmployee(): void {
    this.submitted = false;
    this.passenger = new Passenger();
  }

  save()
  {
    this.passengerService.addPassenger(this.passenger).subscribe({
      next:(res)=>{
        alert("Passenge  is added successfully")
        this.passenger = new Passenger();
        this.gotoList();   

   

      },
      error:(err)=>{
        alert("Error while Adding the Flight")
      }
    })

    
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/passenger-list-user']);
   
  }
}

