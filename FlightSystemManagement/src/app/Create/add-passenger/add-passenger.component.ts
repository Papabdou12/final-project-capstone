import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { Router } from '@angular/router';
import { Passenger } from '../../model/passenger';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {

  passenger: Passenger =new Passenger();
  submitted=false;
  constructor(private passengerService: PassengerService,private router: Router) { }

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
        this.reloadData();     
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
    this.router.navigate(['/passenger-list']);
  }
}
