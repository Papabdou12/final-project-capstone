import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  currentUser: any;
  constructor(private token: AuthGuardService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
}
