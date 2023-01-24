import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/Admin/service/user.service';
import {UserList} from '../../../../assets/dummy/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _userService : UserService) { }

  userList = UserList.data; 
  addUser : boolean = false;
  editUser : boolean = false;
   // Pagination parameters.
   page: number = 1;
   count: number = 0;
   tableSize: number = 5;

  ngOnInit(): void {
     this.getAllUsers();
  }


  getAllUsers(){
    console.log(this.userList)
    // this._userService.getUser().subscribe(user => {
    //    console.log('user',user);
    // })
    
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllUsers();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllUsers();
  }

  openAddUserDialog(){
      this.addUser = true;
      this.editUser = false;
  
  }

  openEditUserDialog(user:any){
    this.editUser = true;
    this.addUser = false;
    
  }

  openDeleteUserDialog(user:any){
      
  }

  deleteUser(){

  }

 

}
