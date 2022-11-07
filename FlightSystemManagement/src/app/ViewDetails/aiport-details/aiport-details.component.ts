import { Component, OnInit } from '@angular/core';
import { Airport } from '../../model/airport';
import { ActivatedRoute, Router } from '@angular/router';
import { AirportService } from '../../services/airport.service';

@Component({
  selector: 'app-aiport-details',
  templateUrl: './aiport-details.component.html',
  styleUrls: ['./aiport-details.component.css']
})
export class AiportDetailsComponent implements OnInit {

  
  airport : Airport;
  airportId: number;
  constructor(private route: ActivatedRoute,private router: Router,
    private airportService: AirportService) {
    
     }

    ngOnInit(): void {
      this.airport = new  Airport();

    this.airportId = this.route.snapshot.params['airportId'];

    this.airportService.viewAirport(this.airportId)
      .subscribe(data => {
        console.log(data)
        this.airport = data;
      }, error => console.log(error));
    }

    list(){
      this.router.navigate(['/airport-list']);
    }
}
