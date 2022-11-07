import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport } from '../model/airport';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  private baseUrl = 'http://localhost:9900/airport';
  constructor(private httpClient:HttpClient){}

  //Returns list of all airports
  getAllAirports():Observable<Airport[]>{
    return this.httpClient.get<Airport[]>(`${this.baseUrl}/allAirport`);
}

viewAirport(airportId: number): Observable<any> {
  return this.httpClient.get(`${this.baseUrl}/viewAirport/${airportId}`);
}

addAirport(airport: Object): Observable<Object> {
  return this.httpClient.post(`${this.baseUrl}/addAirport`,airport);
}

modifyAirport(airportId: number, value: any): Observable<Object> {
  return this.httpClient.put(`${this.baseUrl}/update`, value);
}

removeAirport(airportId: number): Observable<any> {
  return this.httpClient.delete(`${this.baseUrl}/deleteAirport/${airportId}`, { responseType: 'text' });
}

viewAllAirport(): Observable<any> {
  return this.httpClient.get(`${this.baseUrl}/allAirport`);
}
}
