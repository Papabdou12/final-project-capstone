import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightService } from '../../services/flight.service';
import { Router} from "@angular/router";
import { Flight } from '../../model/flight';
import { AuthGuardService } from '../../services/auth-guard.service';
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

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

  removeflight(flightId:number){
    this.flightService.removeFlight(flightId).subscribe({
      next:(res)=>{
        alert("Flight is deleted successfully")
        this.reloadData();     
      },
      error:(err)=>{
        alert("Error while deleting the flight")
      }
    })
  }
    flightDetails(flightId: number)
    {
      this.router.navigate(['/flight-details',flightId]);
    }
    modifyFlight(flightId:number)
    {
      this.router.navigate(['/flight-modified',flightId])
      .then(() => {
        this.reloadData(); 
      });
    }

}
