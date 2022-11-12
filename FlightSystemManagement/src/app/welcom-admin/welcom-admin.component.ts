import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcom-admin',
  templateUrl: './welcom-admin.component.html',
  styleUrls: ['./welcom-admin.component.css']
})
export class WelcomAdminComponent implements OnInit {

  content?: string;

  constructor(private userService: UserService,private tokenStorageService: AuthGuardService,private router:Router) { }

  ngOnInit(): void {
    // this.userService.getAdminBoard().subscribe(
    //   data => {
    //     this.content = data;
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );
  }



  
  logout(): void {
    this.tokenStorageService.signOut();
    // window.location.reload();
  }


}

