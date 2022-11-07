import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirportService } from '../../services/airport.service';
import { Airport } from '../../model/airport';

@Component({
  selector: 'app-airport-modified',
  templateUrl: './airport-modified.component.html',
  styleUrls: ['./airport-modified.component.css']
})
export class AirportModifiedComponent implements OnInit {
  submit
  airportId:number;
  airport:Airport;
  constructor(private route: ActivatedRoute,private router: Router,
    private airportService: AirportService) { }

  ngOnInit(){
    this.airport = new Airport();

    this.airportId= this.route.snapshot.params['airportId'];

    this.airportService.viewAirport(this.airportId)
      .subscribe(data => {
        console.log(data)
        this.airport = data;
      }, error => console.log(error));
  }
  updateAirport() {
    this.airportService.modifyAirport(this.airportId, this.airport)
      .subscribe(data => console.log(data), error => console.log(error));
    this.airport = new Airport();
    this.gotoList();
  }

  onSubmit() {
    this.updateAirport();
  }

  gotoList() {
    this.router.navigate(['/airport-list']);
  }

}
