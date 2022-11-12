import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../model/passenger';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-passenger-modified',
  templateUrl: './passenger-modified.component.html',
  styleUrls: ['./passenger-modified.component.css']
})
export class PassengerModifiedComponent implements OnInit {
  passengerId: number;
  passenger: Passenger;
  constructor(private route: ActivatedRoute,private router: Router,
    private passengerService: PassengerService) { }

  ngOnInit(){
    this.passenger = new Passenger();
    this.passengerId= this.route.snapshot.params['passengerId'];
    this.passengerService.viewPassenger(this.passengerId)
      .subscribe(data => {
        console.log(data)
        this.passenger = data;
      }, error => console.log(error));
  }
  updatePassenger() {
    this.passengerService.modifyPassenger(this.passengerId, this.passenger)
      .subscribe(data => console.log(data), error => console.log(error));
    this.passenger = new Passenger();
    this.gotoList();
    window.location.reload;
  }

  onSubmit() {
    this.updatePassenger();
  }

  gotoList() {
    this.router.navigate(['/passenger-list']);
  }

}
