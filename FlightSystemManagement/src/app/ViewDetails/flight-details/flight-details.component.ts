import { Component, OnInit } from '@angular/core';
import { Flight } from '../../model/flight';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  flight : Flight;
  flightId: number;
  constructor(private route: ActivatedRoute,private router: Router,
    private flightService: FlightService) {
    
     }

    ngOnInit(): void {
      this.flight = new  Flight();

    this.flightId = this.route.snapshot.params['flightId'];

    this.flightService.viewFlight(this.flightId)
      .subscribe(data => {
        console.log(data)
        this.flight = data;
      }, error => console.log(error));
    }

    list(){
      this.router.navigate(['/flight-list']);
    }
}
