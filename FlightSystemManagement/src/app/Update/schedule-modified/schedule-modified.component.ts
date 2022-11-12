import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../../services/schedule.service';
import { Schedule } from '../../model/schedule';
import { Airport } from '../../model/airport';
import { AirportService } from '../../services/airport.service';

@Component({
  selector: 'app-schedule-modified',
  templateUrl: './schedule-modified.component.html',
  styleUrls: ['./schedule-modified.component.css']
})
export class ScheduleModifiedComponent implements OnInit {
  schedule : Schedule;
  scheduleId: number;
  airport: Airport[]=[];
  constructor(private route: ActivatedRoute,private router: Router,
    private scheduleService: ScheduleService, private airportService: AirportService) {
    
     }


     ngOnInit(): void {
      this.schedule = new  Schedule();

    this.scheduleId = this.route.snapshot.params['scheduleId'];

    this.scheduleService.viewSchedule(this.scheduleId)
      .subscribe(data => {
        console.log(data)
        this.schedule = data;
      }, error => console.log(error));

      this.airportService.viewAllAirport().subscribe(arg => {
        this.airport = arg;
      });
    }

  updateSchedule() {
    this.scheduleService.modifySchedule(this.scheduleId, this.schedule)
      .subscribe(data => console.log(data), error => console.log(error));
      this.schedule = new Schedule();
    this.gotoList();
    window.location.reload;
  ;
  }

  onSubmit() {
    this.updateSchedule();
   
  }

  gotoList() {
    this.router.navigate(['/schedule-list']);
   window.location.reload;
  }


}
