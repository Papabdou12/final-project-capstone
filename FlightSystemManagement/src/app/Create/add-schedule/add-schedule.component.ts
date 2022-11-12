import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../model/schedule';
import { ScheduleService } from '../../services/schedule.service';
import { Router } from '@angular/router';
import { AirportService } from '../../services/airport.service';
import { Airport } from '../../model/airport';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {
  airport: Airport[]=[];
  schedule: Schedule =new Schedule();
  submitted=false;
  constructor(private scheduleService: ScheduleService, private airportService :AirportService, private router: Router) {}

  ngOnInit(){
    this.reloadData();
    this.airportService.viewAllAirport().subscribe(arg => {
      this.airport = arg;
    });
  }
  reloadData() {
    this.scheduleService.viewAllSchedule();
  }
  newEmployee(): void {
    this.submitted = false;
    this.schedule = new Schedule();
  }

  save()
  {
    this.scheduleService.addSchedule(this.schedule).subscribe({
      next:(res)=>{
        alert("Schedule is added successfully")
        this.schedule = new Schedule();
        this.gotoList();
        this.reloadData();     
      },
      error:(err)=>{
        alert("Error while Adding the Scchedule")
      }
    })
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  
  }
  gotoList() {
    this.router.navigate(['/schedule-list']);

  }

}
