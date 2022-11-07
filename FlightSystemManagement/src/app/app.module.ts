import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddAirportComponent } from './Create/add-airport/add-airport.component';
import { AddFlightComponent } from './Create/add-flight/add-flight.component';
import { AddBookingComponent } from './Create/add-booking/add-booking.component';
import { AddUserComponent } from './Create/add-user/add-user.component';
import { AddScheduleFlightComponent } from './Create/add-schedule-flight/add-schedule-flight.component';
import { AiportDetailsComponent } from './ViewDetails/aiport-details/aiport-details.component';
import { FlightDetailsComponent } from './ViewDetails/flight-details/flight-details.component';
import { BookingDetailsComponent } from './ViewDetails/booking-details/booking-details.component';
import { ScheduleFlightDetailsComponent } from './ViewDetails/schedule-flight-details/schedule-flight-details.component';
import { AirportListComponent } from './List/airport-list/airport-list.component';
import { FlightListComponent } from './List/flight-list/flight-list.component';
import { BookingListComponent } from './List/booking-list/booking-list.component';
import { UserListComponent } from './List/user-list/user-list.component';
import { UserDetailsComponent } from './ViewDetails/user-details/user-details.component';
import { AirportModifiedComponent } from './Update/airport-modified/airport-modified.component';
import { FlightModifiedComponent } from './Update/flight-modified/flight-modified.component';
import { BookingModifiedComponent } from './Update/booking-modified/booking-modified.component';
import { UserModifiedComponent } from './Update/user-modified/user-modified.component';
import { ScheduleFlightModifiedComponent } from './Update/schedule-flight-modified/schedule-flight-modified.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomAdminComponent } from './welcom-admin/welcom-admin.component';
import { WelcomUserComponent } from './welcom-user/welcom-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpParams } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { ScheduleFlightListComponent } from './List/schedule-flight-list/schedule-flight-list.component'
import {FormsModule} from '@angular/forms';
import { ScheduleComponent } from './List/schedule/schedule.component';
import { AddPassengerComponent } from './Create/add-passenger/add-passenger.component';
import { PassengerListComponent } from './List/passenger-list/passenger-list.component';
import { PassengerDetailsComponent } from './ViewDetails/passenger-details/passenger-details.component';
import { PassengerModifiedComponent } from './Update/passenger-modified/passenger-modified.component';
import { ProfilesComponent } from './profiles/profiles.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddAirportComponent,
    AddFlightComponent,
    AddBookingComponent,
    AddUserComponent,
    AddScheduleFlightComponent,
    AiportDetailsComponent,
    FlightDetailsComponent,
    BookingDetailsComponent,
    ScheduleFlightDetailsComponent,
    AirportListComponent,
    FlightListComponent,
    BookingListComponent,
    UserListComponent,
    UserDetailsComponent,
    AirportModifiedComponent,
    FlightModifiedComponent,
    BookingModifiedComponent,
    UserModifiedComponent,
    ScheduleFlightModifiedComponent,
    LoginComponent,
    LogoutComponent,
    SignUpComponent,
    WelcomAdminComponent,
    WelcomUserComponent,
    ScheduleFlightListComponent,
    ScheduleComponent,
    AddPassengerComponent,
    PassengerListComponent,
    PassengerDetailsComponent,
    PassengerModifiedComponent,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    FlightBookingRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,

  ],
  providers: [HttpClientModule,HttpParams],
  bootstrap: [AppComponent]
})
export class AppModule { }
