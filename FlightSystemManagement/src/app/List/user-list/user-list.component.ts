import { Component, OnInit } from '@angular/core';
import { Users } from '../../model/users';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../../model/Role';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  
//   // users: Observable<Users[]>;
//   roles :Role[];
//   users: Users[];
  constructor(private userService: UserService,
    private router: Router) { }
    ngOnInit(){
      // this.reloadData()
    }
//     reloadData()
//     {
//      this.userService.getUserList().subscribe(
//         data => this.users=data  );  }


//         add(){

//           this.router.navigate(['/add-user']);
        
//         }
//     deleteUser(userId:number){
//     this.userService.deleteUser(userId).subscribe({
//       next:(res)=>{
//         alert("Flight is deleted successfully")
//         this.reloadData();     
//       },
//       error:(err)=>{
//         alert("Error while deleting the flight")
//       }
//     })
//   }
//   userDetails(userId: number)
//     {
//       this.router.navigate(['/user-details:/userId',userId]);
//     }
//    updateUser(user:Users)
//     {
//       this.router.navigate(['/user-modified',user]);
//     }

}

