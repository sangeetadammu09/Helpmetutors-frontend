import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from '../../../shared-service/teacher.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent implements OnInit {

  isRegistered:boolean=true;
  tlogin!: FormGroup;
  tsignup!: FormGroup
  constructor(private _router : Router, private _tservice: TeacherService, 
    private _fb: FormBuilder, private _toastrservice: ToastrService) { 
    this.tlogin =this._fb.group({
      temail: ['',[Validators.email,Validators.required]],
      password: ['',Validators.required]
    })
    this.tsignup = this._fb.group({
      tname:['',Validators.required],
      temail: ['',[Validators.email,Validators.required]],
      password: ['',Validators.required],
      cpass: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  movetoregister(){
    this.isRegistered = false;
  }

  movetologin(){
    this.isRegistered=true;
  }

  teachersignup(){
    if(!this.tsignup.valid || (this.tsignup.controls['password'].value != this.tsignup.controls['cpass'].value)){
      this._toastrservice.error('Password and Confirm Password dont match'); 
      return;
    }
   // console.log( this.psignup.value);
    this._tservice.teacherregister(this.tsignup.value).subscribe((rd:any)=>{
        console.log(rd)
        this._toastrservice.success('Teacher registered successfully'); 
        this.isRegistered=true;
        
      }
    )
  
  }

  tlogged(){
    this._tservice.teacherlogin(this.tlogin.value).subscribe((rd:any)=>{console.log(rd);
        localStorage.setItem('token',rd.token);
        localStorage.setItem('teachername',rd.loggedteacher.teachername)
      this._router.navigate(['/teacher/dashboard'])
      }
    )
  }

}
