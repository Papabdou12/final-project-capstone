import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../../services/schedule.service';
import { Schedule } from '../../model/schedule';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {

  
  schedule : Schedule;
  scheduleId: number;
  constructor(private route: ActivatedRoute,private router: Router,
    private scheduleService: ScheduleService) {
    
     }

    ngOnInit(): void {
      this.schedule = new  Schedule();

    this.scheduleId = this.route.snapshot.params['scheduleId'];

    this.scheduleService.viewSchedule(this.scheduleId)
      .subscribe(data => {
        console.log(data)
        this.schedule = data;
      }, error => console.log(error));
    }

    list(){
      this.router.navigate(['/schedule-list']);
    }

}
