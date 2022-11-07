import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking';
import { FlightService } from './flight.service';
import { Flight } from '../model/flight';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:9900/booking';
  constructor(private http: HttpClient) { }

  // createBooking(booking:Booking){
  //   let form=new FormData();
  //   form.append("bookingId", String(booking.bookingId))
  //   form.append("bookingDate",String(booking.bookingDate))
  //   form.append("noOfPassenger",String(booking.noOfPassenger ))
  //   form.append("ticketCost",String(booking.ticketCost ))
  //    form.append("flight",String(booking.flights))
  //   form.append("passenger",String(booking.PassengerList))
  //   let params = new HttpParams()
  //   // .set('flightId', flightId)
  //   // .set('passengerId', passengerId)
  //   console.log(booking);
  //   console.log(params.toString());
  //  // console.log(form);
  //  const headers = new HttpHeaders()
  //  .set('Content-Type', 'application/json')
  //   return this.http.post(`${this.baseUrl}/add/` + 'bookingId',form,{params,headers});
  // }
  getBooking(bookingId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/viewById/${bookingId}`);
  }


  viewFlight(flightId: number): Observable<any> {
    return this.http.get(`http://localhost:9900/flight/viewById/${flightId}`);
  }

  createBooking( booking: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, booking);
  }

  updateBooking(bookingId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${bookingId}`, value);
  }

  deleteBooking(bookingId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${bookingId}`, { responseType: 'text' });
  }

  getBookingsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/viewAll`);
      //  return this.http.get<Booking[]>(this.baseUrl+'/viewAll');

  }
}
