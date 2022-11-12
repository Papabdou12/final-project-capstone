import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { FlightService } from '../services/flight.service';
import { Flight } from '../model/flight';
@Component({
  selector: 'app-welcom-user',
  templateUrl: './welcom-user.component.html',
  styleUrls: ['./welcom-user.component.css']
})
export class WelcomUserComponent implements OnInit {


  flight: Flight []=[];  
  from: '';
  to:'';
 
  constructor(private router: Router, private tokenStorageService: AuthGuardService,
    private flightService:FlightService) { }

  ngOnInit(): void {
  }


 
  searchName(): void {
    this.flightService.SearchAllFlight(this.from,this.to)
      .subscribe(
        data => {
          this.flight = data;
          console.log(data);
        },
        error => {
          console.log(error);
        
        });
        this.router.navigate(['/search']);
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
 
  
  }

}

