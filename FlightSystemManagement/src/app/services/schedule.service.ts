import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../model/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private Url = 'http://localhost:9900/schedule';

  constructor(private http: HttpClient) { }
  
  viewSchedule(scheduleId: number): Observable<any> {
    return this.http.get(`${this.Url}/viewById/${scheduleId}`);
  }

  addSchedule(schedule: Object): Observable<Object> {
    return this.http.post(`${this.Url}/add`, schedule);
  }

  modifySchedule(scheduleId: number,value:any): Observable<Object> {
    return this.http.put(`${this.Url}/updateSchedule/${scheduleId}`, value);
  }

  removeSchedule(scheduleId: number): Observable<any> {
    return this.http.delete(`${this.Url}/delete/${scheduleId}`);
  }

  viewAllSchedule(): Observable<any> {
    return this.http.get(`${this.Url}/viewAll`);
  }
}
