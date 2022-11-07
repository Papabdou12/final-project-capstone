import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AirportService } from '../../services/airport.service';
import { Router} from "@angular/router";
import { Airport } from '../../model/airport';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {
  airports: Observable<Airport[]>;
  constructor(private airportService: AirportService,
    private router: Router, private tokenStorageService: AuthGuardService) { }
    ngOnInit(){
      this.reloadData()
    }
    reloadData()
    {
      this.airports= this.airportService.viewAllAirport();
    }
    removeAirport(airportId:number)
    {
      this.airportService.removeAirport(airportId).subscribe({
        next:(res)=>{
          alert("Airport is deleted successfully")
          this.reloadData();     
        },
        error:(err)=>{
          alert("Error while deleting the Airport")
        }
      })
    }
    airportDetails(airportId:number)
    {
      this.router.navigate(['/airport-details',airportId]);
    }
    modifyAirport(airportId:number)
    {
      this.router.navigate(['/airport-modified',airportId])
      .then(() => {
        this.reloadData(); 
      });
    }

    logout(): void {
      this.tokenStorageService.signOut();
      // window.location.reload();
    }
}
