import { Flight } from '../model/flight';
// import { Passenger } from './passenger';
export class Booking {

  bookingId!: number;
  bookingDate!: string;
  noOfPassenger!: number;
  flights!: Flight;
  ticketCost!:number;
  //  PassengerList: Passenger;

}
