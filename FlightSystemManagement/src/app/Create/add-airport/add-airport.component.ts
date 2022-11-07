import { Component, OnInit } from '@angular/core';
import { AirportService } from '../../services/airport.service';
import { Router } from '@angular/router';
import { Airport} from '../../model/airport';
@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.css']
})
export class AddAirportComponent implements OnInit {

  airport: Airport =new Airport();
  submitted=false;
  constructor(private airportService: AirportService,private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  reloadData() {
    this.airportService.viewAllAirport();
  }
  newEmployee(): void {
    this.submitted = false;
    this.airport = new Airport();
  }

  // save() {
  //   this.airportService.addAirport(this.airport)
  //     .subscribe(data => console.log(data), error => console.log(error));
  //   this.airport = new Airport();
  //   this.gotoList();
    
  // }

  save()
  {
    this.airportService.addAirport(this.airport).subscribe({
      next:(res)=>{
        alert("Airport is added successfully")
        this.airport = new Airport();
        this.gotoList();
        this.reloadData();     
      },
      error:(err)=>{
        alert("Error while Adding the Airport")
      }
    })
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  
  }
  gotoList() {
    this.router.navigate(['/airport-list']);

  }

}
