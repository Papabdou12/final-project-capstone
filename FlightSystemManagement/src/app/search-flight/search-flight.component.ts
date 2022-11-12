import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Flight } from '../model/flight';
import { FormGroup, FormControl } from '@angular/forms'; 
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';






@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})

export class SearchFlightComponent implements OnInit {
  flights: Observable<Flight[]>;
  constructor(private flightService: FlightService,
    private router: Router, private tokenStorageService: AuthGuardService) { }
    ngOnInit(){
      this.reloadData()
    }
    reloadData()
    {
      this.flights= this.flightService.viewAllFlight();
    }
    logout(): void {
      this.tokenStorageService.signOut();
      // window.location.reload();
    }


    flightDetails(flightId: number)
    {
      this.router.navigate(['/flight-details',flightId]);
    }
  

  }
  

  

