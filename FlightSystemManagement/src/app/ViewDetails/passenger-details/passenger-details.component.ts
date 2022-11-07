import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../model/passenger';
import { PassengerService } from '../../services/passenger.service';
import { Role } from '../../model/Role';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  
  passenger: Passenger;
  passengerId: number;

  constructor(private passengerService: PassengerService,
    private router: Router,private route: ActivatedRoute) { }


    ngOnInit(): void {
      this.passenger = new  Passenger();

    this.passengerId = this.route.snapshot.params['passengerId'];

    this.passengerService.viewPassenger(this.passengerId)
      .subscribe(data => {
        console.log(data)
        this.passenger = data;
      }, error => console.log(error));
    }

    list(){
      this.router.navigate(['/passenger-list']);
    }
}
