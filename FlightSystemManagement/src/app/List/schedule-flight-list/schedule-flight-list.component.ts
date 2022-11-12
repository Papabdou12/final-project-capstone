import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleFlightService } from '../../services/schedule-flight.service';
import { ScheduleFlight } from '../../model/schedule-flight';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../../services/auth-guard.service';
import { Flight } from '../../model/flight';

@Component({
  selector: 'app-schedule-flight-list',
  templateUrl: './schedule-flight-list.component.html',
  styleUrls: ['./schedule-flight-list.component.css']
})
export class ScheduleFlightListComponent implements OnInit {


  scheduleFlights: ScheduleFlight[];

  constructor(private router: Router, private service: ScheduleFlightService,
     private tokenStorageService: AuthGuardService) { }

  ngOnInit() {
   this.service.getAll()
    .subscribe(data => this.scheduleFlights = data);
   
      
  }

 

  // add(){

  //   this.router.navigate(['/t']);

  // }

  logout(): void {
    this.tokenStorageService.signOut();
    // window.location.reload();
  }

  view(){

    this.router.navigate(['/schedule-flight-list']);

  }
  viewScheduleFlight(scheduleFlightId: number)
    {
      this.router.navigate(['/schedule-flight-details',scheduleFlightId]);
    }

  remove(scheduleFlightId:number)
  {
    this.service.removeScheduleFlight(scheduleFlightId).subscribe({
      next:(res)=>{
        alert("ScheduleFlight is deleted successfully")
        window.location.reload();
      },
      error:(err)=>{
        alert("Error while deletingSchedule Flight")
        
      }
    })
  }
  update(scheduleFlightId:number)
  {
    this.router.navigate(['/schedule-flight-modified',scheduleFlightId])
    window.location.reload();
  }
  // search(){

  //    this.router.navigate(['/scheduledFlight/search']);

  //  }
}
