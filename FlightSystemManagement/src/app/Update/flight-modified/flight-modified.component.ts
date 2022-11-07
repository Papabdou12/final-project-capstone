import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../model/flight';

@Component({
  selector: 'app-flight-modified',
  templateUrl: './flight-modified.component.html',
  styleUrls: ['./flight-modified.component.css']
})
export class FlightModifiedComponent implements OnInit {
  flightId: number;
  flight: Flight;
  constructor(private route: ActivatedRoute,private router: Router,
    private flightService: FlightService) { }

  ngOnInit(){
    this.flight=new Flight();
    this.flightId=this.route.snapshot.params['flightId'];
    this.flightService.viewFlight(this.flightId)
      .subscribe(data => {
        console.log(data)
        this.flight = data;
      }, error => console.log(error));
  }

  modifyFlight() {
    this.flightService.modifyFlight(this.flightId, this.flight)
      .subscribe(data => console.log(data), error => console.log(error));
    this.flight = new Flight();
    this.gotoList();
  }

  onSubmit() {
    this.modifyFlight();
  }

  gotoList() {
    this.router.navigate(['/flight-list']);
  }
}
