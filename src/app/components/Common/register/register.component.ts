import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onButtonParentClick(){
  //  localStorage.setItem('data1', JSON.stringify(data1));
    this.router.navigate(['/general/parent-login']);
  
  }

  onButtonTeacherClick(){
   
    const data1={
     
    }
    console.log(data1);
    //localStorage.setItem('data1', JSON.stringify(data1));
    this.router.navigate(['/general/teacher-login']);
  
  }

}
