import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Router } from '@angular/router';
import { Flight } from '../../model/flight';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flight: Flight =new Flight();
  submitted=false;
  constructor(private flightService: FlightService,private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  reloadData() {
    this.flightService.viewAllFlight();
  }
  newEmployee(): void {
    this.submitted = false;
    this.flight = new Flight();
  }

  // save() {
  //   this.flightService.addFlight(this.flight)
  //     .subscribe(data => console.log(data), error => console.log(error));
  //     this.flight = new Flight();
  //   this.gotoList();
    
  // }
  save()
  {
    this.flightService.addFlight(this.flight).subscribe({
      next:(res)=>{
        alert("Flight is added successfully")
        this.flight = new Flight();
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
    this.router.navigate(['/flight-list']);
  }

}
