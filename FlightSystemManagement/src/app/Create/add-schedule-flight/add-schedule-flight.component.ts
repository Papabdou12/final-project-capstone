import { Component, OnInit } from '@angular/core';
import { ScheduleFlightService } from '../../services/schedule-flight.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScheduleFlight } from '../../model/schedule-flight';
import { Flight } from '../../model/flight';
import { Observable } from 'rxjs';
import { Schedule } from '../../model/schedule';
import { FlightService } from '../../services/flight.service';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-add-schedule-flight',
  templateUrl: './add-schedule-flight.component.html',
  styleUrls: ['./add-schedule-flight.component.css']
})
export class AddScheduleFlightComponent implements OnInit {


  // airportId:number;
  // airportCode:number;
  // airportLocation:string;
  // airportName:string;
  // deptDateTime:string;
  // arrDateTime:string;
   flight: Flight[]  = [];
  //  fl: Flight[] = [];
  schedules: Schedule[] = []
  submitted=false;
  scheduleFlightId: number;
  scheduleFlight: ScheduleFlight = new ScheduleFlight();

  constructor(private scheduleFlightService: ScheduleFlightService,  private router: Router, private route: ActivatedRoute
    , private flightService: FlightService, private scheduleService:ScheduleService) {
  }

  ngOnInit(){
    this.reloadData();

    this.flightService.viewAllFlight().subscribe(arg => {
      this.flight = arg;
    });

    this.scheduleService.viewAllSchedule().subscribe(arg => {
      this.schedules = arg;
    });
    
  }

  reloadData() {
    this.scheduleFlightService. getAll();
  }
  newEmployee(): void {
    this.submitted = false;
    this.scheduleFlight = new ScheduleFlight();
    //  this.flights = new Flight();
    //  this.schedule = new Schedule();
  }


  view(){

      this.router.navigate(['/schedule-flight/viewAll']);

  }


    idValid:boolean=false;
     validateId(){
        if(this.scheduleFlight.scheduleFlightId>999){
            this.idValid=true;
        }
        else if(this.scheduleFlight.scheduleFlightId<1){
            this.idValid=true;
        }else{
            this.idValid=false;
        }
    }          


  save()
  {
    this.scheduleFlightService.addScheduleFlight(this.scheduleFlightId, this.scheduleFlight).subscribe({
      next:(res)=>{
        alert("ScheduleFlight  successfully")
        this.gotoList();
        this.reloadData();     
      },
      error:(err)=>{
        alert("Error while Adding the schedule flightt")
        this.reloadData();  
      }
    })
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  
  }
  gotoList() {
    this.router.navigate(['/scheduleFlight-list']);

  }
  
}
