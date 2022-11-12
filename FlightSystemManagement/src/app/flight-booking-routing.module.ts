import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAirportComponent } from './Create/add-airport/add-airport.component';
import { HomeComponent } from './home/home.component';
import { AddFlightComponent } from './Create/add-flight/add-flight.component';
import { AddBookingComponent } from './Create/add-booking/add-booking.component';
import { AddScheduleFlightComponent } from './Create/add-schedule-flight/add-schedule-flight.component';
import { AddUserComponent } from './Create/add-user/add-user.component';
import { AirportListComponent } from './List/airport-list/airport-list.component';
import { BookingListComponent } from './List/booking-list/booking-list.component';
import { FlightListComponent } from './List/flight-list/flight-list.component';
import { ScheduleFlightListComponent } from './List/schedule-flight-list/schedule-flight-list.component';
import { UserListComponent } from './List/user-list/user-list.component';
import { AiportDetailsComponent } from './ViewDetails/aiport-details/aiport-details.component';
import { BookingDetailsComponent } from './ViewDetails/booking-details/booking-details.component';
import { FlightDetailsComponent } from './ViewDetails/flight-details/flight-details.component';
import { ScheduleFlightDetailsComponent } from './ViewDetails/schedule-flight-details/schedule-flight-details.component';
import { UserDetailsComponent } from './ViewDetails/user-details/user-details.component';
import { AirportModifiedComponent } from './Update/airport-modified/airport-modified.component';
import { BookingModifiedComponent } from './Update/booking-modified/booking-modified.component';
import { FlightModifiedComponent } from './Update/flight-modified/flight-modified.component';
import { ScheduleFlightModifiedComponent } from './Update/schedule-flight-modified/schedule-flight-modified.component';
import { UserModifiedComponent } from './Update/user-modified/user-modified.component';
import { WelcomUserComponent } from './welcom-user/welcom-user.component';
import { WelcomAdminComponent } from './welcom-admin/welcom-admin.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddPassengerComponent } from './Create/add-passenger/add-passenger.component';
import { PassengerListComponent } from './List/passenger-list/passenger-list.component';
import { PassengerDetailsComponent } from './ViewDetails/passenger-details/passenger-details.component';
import { PassengerModifiedComponent } from './Update/passenger-modified/passenger-modified.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { ScheduleComponent } from './List/schedule/schedule.component';
import { ScheduleDetailsComponent } from './ViewDetails/schedule-details/schedule-details.component';
import { ScheduleModifiedComponent } from './Update/schedule-modified/schedule-modified.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { BookingConformedComponent } from './booking-conformed/booking-conformed.component';
import { PassengerListUserComponent } from './List/passenger-list-user/passenger-list-user.component';
import { AddScheduleComponent } from './Create/add-schedule/add-schedule.component';
import { AboutUsComponent } from './about-us/about-us.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home',component : HomeComponent},
  {path: 'add-airport',component : AddAirportComponent},
  {path: 'add-booking',component : AddBookingComponent},
  {path: 'add-passenger',component : AddPassengerComponent},
  {path: 'add-flight',component :AddFlightComponent },
  {path: 'add-schedule-flight',component : AddScheduleFlightComponent},
  {path: 'add-schedule',component : AddScheduleComponent},
  {path: 'add-user',component : AddUserComponent},
  {path: 'airport-list',component : AirportListComponent},
  {path: 'schedule-list',component : ScheduleComponent},
  {path: 'booking-list',component : BookingListComponent},
  {path: 'flight-list',component : FlightListComponent},
  {path: 'passenger-list',component : PassengerListComponent},
  {path: 'passenger-list-user',component : PassengerListUserComponent},
  {path: 'schedule-flight-list',component : ScheduleFlightListComponent},
  {path: 'user-list',component : UserListComponent},
  {path: 'airport-details/:airportId',component : AiportDetailsComponent},
  {path: 'passenger-details/:passengerId',component : PassengerDetailsComponent},
  {path: 'booking-details/:bookingId',component : BookingDetailsComponent},
  {path: 'flight-details/:flightId',component : FlightDetailsComponent},
  {path: 'schedule-details/:scheduleId',component : ScheduleDetailsComponent},
  {path: 'schedule-flight-details/:scheduleFlightId',component : ScheduleFlightDetailsComponent},
  {path: 'user-details/:userId',component : UserDetailsComponent},
  {path: 'airport-modified/:airportId',component : AirportModifiedComponent},
  {path: 'booking-modified/:bookingId',component : BookingModifiedComponent},
  {path: 'schedule-modified/:scheduleId',component : ScheduleModifiedComponent},
  {path: 'passenger-modified/:passengerId',component : PassengerModifiedComponent},
  {path: 'flight-modified/:flightId',component : FlightModifiedComponent},
  {path: 'schedule-flight-modified/:scheduleFlightId',component : ScheduleFlightModifiedComponent},
  {path: 'user-modified/:userId',component : UserModifiedComponent},
  {path: 'user',component : WelcomUserComponent},
  {path: 'admin',component : WelcomAdminComponent},
  {path: 'login',component : LoginComponent},
  {path: 'logout',component : LogoutComponent},
  {path: 'sign-up',component : SignUpComponent},
  {path: 'search',component : SearchFlightComponent},
  {path: 'booking-confirmed/:passengerId',component : BookingConformedComponent},
  {path: 'profile',component : ProfilesComponent},
    {path: 'about',component : AboutUsComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class FlightBookingRoutingModule { }
