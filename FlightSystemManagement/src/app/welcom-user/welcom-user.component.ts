import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
@Component({
  selector: 'app-welcom-user',
  templateUrl: './welcom-user.component.html',
  styleUrls: ['./welcom-user.component.css']
})
export class WelcomUserComponent implements OnInit {

  constructor(private router: Router, private tokenStorageService: AuthGuardService) { }

  ngOnInit(): void {
  }


 
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
 
  
  }

}

