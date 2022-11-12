import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduleFlight } from '../model/schedule-flight';

// const url = 'http://localhost:9900/scheduleFlight';
@Injectable({
  providedIn: 'root'
})
export class ScheduleFlightService {

   private baseUrl = 'http://localhost:9900/scheduleFlight';

  constructor(private http: HttpClient) { 
  }

  addScheduleFlight( scheduleFlight: ScheduleFlight,scheduleFlightId: number,): Observable<Object> {
// return this.http.post('http://localhost:9900/scheduleFlight/add/${scheduleFlightId}', scheduleFlight);

const headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
 return this.http.post(`${this.baseUrl}` +'/add/' + 'scheduleFlightId' ,scheduleFlight);
 
  
  }


  modifiedScheduleFlight(scheduleFlightId: number) {
   return this.http.get(`${this.baseUrl}/update/${scheduleFlightId}`);
   // return this.http.get(baseUrl +'/update/' + `${scheduleFlightId }` );
  }

  viewScheduleFlight(scheduleFlightId: number) {
 return this.http.get(`${this.baseUrl}/viewById/${scheduleFlightId}`);
   // return this.http.get(baseUrl +'/viewById/' + `${scheduleFlightId }` );
  }

  removeScheduleFlight(scheduleFlightId:number){
   return this.http.delete(`${this.baseUrl}/delete/${scheduleFlightId}`, { responseType: 'text' });
   // return this.http.delete(baseUrl + '/branch/' + `${scheduleFlightId}`,{ responseType: 'text' })
 }

  getAll(): Observable<any> {
      return this.http.get(`${this.baseUrl}/viewAll`);
  //  return this.http.get(baseUrl +'/viewAll');
  }
}