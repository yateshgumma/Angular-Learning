import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
allowNewUser = false;
changeUserStatus="";
userName= ""
  constructor() {
    setTimeout(()=>{
      this.allowNewUser=true;
    },3000);
  }

  ngOnInit(): void {
  }
  newUserAdded(){
    this.changeUserStatus = "New User is created";
  }

}
