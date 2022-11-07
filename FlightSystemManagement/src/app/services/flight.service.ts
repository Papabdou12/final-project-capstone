import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Flight } from '../model/flight';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private Url = 'http://localhost:9900/flight';

  constructor(private http: HttpClient) { }
  
  viewFlight(flightId: number): Observable<any> {
    return this.http.get(`${this.Url}/viewById/${flightId}`);
  }

  addFlight(flight: Object): Observable<Object> {
    return this.http.post(`${this.Url}/add`, flight);
  }

  modifyFlight(flightId: number,value:any): Observable<Object> {
    return this.http.put(`${this.Url}/update`, value);
  }

  removeFlight(flightId: number): Observable<any> {
    return this.http.delete(`${this.Url}/delete/${flightId}`);
  }

  viewAllFlight(): Observable<any> {
    return this.http.get(`${this.Url}/viewAll`);
  }
//   deleteflight (id : number){
//     return this.http.delete<any>(`${this.url}/delete/${flightId}`);
//   }
 }
