import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor( private router: Router, private tokenStorageService: AuthGuardService) { }

  ngOnInit(): void {
  }

  


  logout(): void {
    this.tokenStorageService.signOut();
    // window.location.reload();
  }
}
