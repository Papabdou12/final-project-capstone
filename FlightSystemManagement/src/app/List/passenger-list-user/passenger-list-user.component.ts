import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../model/passenger';
import { PassengerService } from '../../services/passenger.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../../services/auth-guard.service';


@Component({
  selector: 'app-passenger-list-user',
  templateUrl: './passenger-list-user.component.html',
  styleUrls: ['./passenger-list-user.component.css']
})
export class PassengerListUserComponent implements OnInit {

  passenger: Observable<Passenger[]>;
  constructor(private passengerService: PassengerService,
    private router: Router, private tokenStorageService: AuthGuardService) { }

    ngOnInit(){
      this.reloadData()
    }

    reloadData()
    {
      this.passenger= this.passengerService.viewAllPassenger();
    }

    logout(): void {
      this.tokenStorageService.signOut();
      // window.location.reload();
    }
    removePassenger(passengerId: number)
    {
      this.passengerService.removePassenger(passengerId).subscribe({
        next:(res)=>{
          alert("Passenger is deleted successfully")
          this.reloadData();     
        },
        error:(err)=>{
          alert("Error while deleting the Passenger")
        }
      })
    }

    viewPassengerDetails(passengerId: number)
    {
      this.router.navigate(['/booking-confirmed',passengerId]);
    }
    
    modifyPassenger(passengerId:number)
    {
      this.router.navigate(['/passenger-modified',passengerId])
      .then(() => {
        this.reloadData(); 
      });
    }

}
