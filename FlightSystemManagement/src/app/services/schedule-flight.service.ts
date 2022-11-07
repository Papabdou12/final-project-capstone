import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduleFlight } from '../model/schedule-flight';


@Injectable({
  providedIn: 'root'
})
export class ScheduleFlightService {

private SFurl: string;
  constructor(private http: HttpClient) { 
  }

  // addScheduleFlight(scheduleFlightId: number, scheduleFlight: ScheduleFlight): Observable<Object> {
  //   return this.http.post('http://localhost:9900/scheduleFlight/add/{scheduleFlightId}',scheduleFlight);

  //  // return this.http.post('http://localhost:9900/scheduleFlight/add/' + 'scheduleFlightId',scheduleFlight);
  
  // }


  addScheduleFlight(scheduleFlightId: number,scheduleFlight:ScheduleFlight){
    let form=new FormData();
    form.append("scheduleFlightId", String(scheduleFlight.scheduleFlightId))
    form.append("availableSeats",String(scheduleFlight.availableSeats))
    form.append("flight",String(scheduleFlight.flight))
    form.append("schedule",String(scheduleFlight.schedule));
    form.append("schedule",String(scheduleFlight.schedule.airport));
    let params = new HttpParams()
    console.log(scheduleFlight);
    console.log(params.toString());
   // console.log(form);
    return this.http.post('http://localhost:9900/scheduleFlight/add/${scheduleFlightId}',form,{params});
  }

  // createScheduleFlight(scheduleFlight:ScheduleFlight,airportId,airportCode,airportLocation,airportName,deptDateTime,arrDateTime){
  //   let form=new FormData();
  //   form.append("scheduleFlightId", String(scheduleFlight.scheduleFlightId))
  //   form.append("availableSeats",String(scheduleFlight.availableSeats))
  //   form.append("flight",String(scheduleFlight.flight))
  //   form.append("schedule",String(scheduleFlight.schedule));
  //   form.append("schedule",String(scheduleFlight.schedule.airport));
  //   let params = new HttpParams()
  //   .set('airportId', airportId)
  //   .set('airportCode', airportCode)
  //   .set('airportLocation', airportLocation)
  //   .set('airportName', airportName)
  //   .set('deptDateTime', deptDateTime)
  //   .set('arrDateTime', arrDateTime);
  //   console.log(scheduleFlight);
  //   console.log(params.toString());
  //  // console.log(form);
  //   return this.http.post('http://localhost:9900/scheduleFlight/add/scheduleFlightId',form,{params});
  // }
  

  viewScheduleFlight(scheduleFlightId: number) {
    return this.http.get('http://localhost:9900/scheduleFlight/viewById/${scheduleFlightId}');
  }

  removeScheduleFlight(scheduleFlightId:number){
    return this.http.delete('http://localhost:9900/scheduleFlight/delete/${scheduleFlightId}='+scheduleFlightId);

 }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:9900/scheduleFlight/viewAll');
  }
}