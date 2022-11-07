import { Airport } from '../model/airport';

export class Schedule {
    scheduleId: number;
    airport: Airport;
    deptDateTime: string;
    arrDateTime: string;
}
