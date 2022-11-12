import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';
import { Schedule } from '../../model/schedule';
import { ScheduleFlightService } from '../../services/schedule-flight.service';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule: Schedule[];
  constructor( private router: Router,
    private service:ScheduleService, private tokenStorageService: AuthGuardService) { }

  ngOnInit(): void {
    this.service.viewAllSchedule()
    .subscribe(data => this.schedule = data);
  }

  


  logout(): void {
    this.tokenStorageService.signOut();
    // window.location.reload();
  }


  removeSchedule(scheduleId: number)
  {
    this.service.removeSchedule(scheduleId).subscribe({
      next:(res)=>{
        alert("Schedule is deleted successfully")
        window.location.reload();     
      },
      error:(err)=>{
        alert("Error while deleting the Schedule")
      }
    })
  }

  viewScheduleDetails(scheduleId: number)
  {
    this.router.navigate(['/schedule-details',scheduleId]);
  }
  
  modifySchedule(scheduleId:number)
  {
    this.router.navigate(['/schedule-modified',scheduleId])
    .then(() => {
      window.location.reload();
    });
  }

}
