import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Users } from '../../model/users';
import { Role } from '../../model/Role';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  roles:Role[];
    user: Users = new Users();
  submitted=false;
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(){
    // this.reloadData();
  }
  // reloadData() {
  //   this.userService.getUserList();
  // }
  // newEmployee(): void {
  //   this.submitted = false;
  //   this.user = new Users();
  //   this.roles;
  // }


  // save()
  // {
  //   this.userService.createUser(this.user).subscribe({
  //     next:(res)=>{
  //       alert("User is added successfully")
  //       this.user = new Users();
  //       this.roles ;
  //       this.gotoList();
  //       this.reloadData();     
  //     },
  //     error:(err)=>{
  //       alert("Error while Adding the User")
  //     }
  //   })
  // }
  // onSubmit() {
  //   this.submitted = true;
  //   this.save();
  
  // }
  // gotoList() {
  //   this.router.navigate(['/user-list']);

  // }
}
