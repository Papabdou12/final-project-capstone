
import { Flight } from './flight';
import { Schedule } from './schedule';


export class ScheduleFlight {
    scheduleFlightId: number;
    flight: Flight;
    availableSeats: number;
    schedule: Schedule;
}