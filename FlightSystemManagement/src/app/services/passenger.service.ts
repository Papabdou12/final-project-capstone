import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passenger } from '../model/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  private Url = 'http://localhost:9900/passenger';

  constructor(private http: HttpClient) { }
  
  viewPassenger(passengerId: number): Observable<any> {
    return this.http.get(`${this.Url}/viewPassenger/${passengerId}`);
  }

  addPassenger(passenger: Object): Observable<Object> {
    return this.http.post(`${this.Url}/addPassenger`, passenger);
  }

  modifyPassenger(passengerId: number,value:any): Observable<Object> {
    return this.http.put(`${this.Url}/update/${passengerId}`, value);
  }

  removePassenger(passengerId: number): Observable<any> {
    return this.http.delete(`${this.Url}/delete/${passengerId}`);
  }

  viewAllPassenger(): Observable<any> {
    return this.http.get(`${this.Url}/allPassenger`);
  }
}
