import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ParentService } from '../../../shared-service/parent.service';

@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrls: ['./parent-login.component.scss']
})
export class ParentLoginComponent implements OnInit {

  isRegistered:boolean=true;
  plogin: FormGroup;
  psignup: FormGroup
  hidepwd: boolean = true;
  
  constructor(private _router : Router, private _pservice: ParentService, private _fb: FormBuilder, private _toastrservice: ToastrService) {
    this.plogin = this._fb.group({
      pemail: ['',[Validators.email,Validators.required]],
      password: ['',Validators.required]
    })
    this.psignup = this._fb.group({
      pname:['',Validators.required],
      pemail: ['',[Validators.email,Validators.required]],
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
    // this.parentNavbar = 'true';
    // this.generalNavbar = 'false';
  }

  parentsignup(){
    if(!this.psignup.valid || (this.psignup.controls['password'].value != this.psignup.controls['cpass'].value)){
      this._toastrservice.error('Password and Confirm Password dont match'); 
      return;
    }
   // console.log( this.psignup.value);
    this._pservice.parentregister(this.psignup.value).subscribe(
      rd=>{
        console.log(rd)
        this._toastrservice.success('Parent registered successfully'); 
        this.isRegistered=true;
        
      }
    )
  
  }


  showPassword(password:any){
    this.hidepwd = false;
    console.log(password.type)
    if(password.type = 'password'){
      password.type = 'text';
    }
  }

  hidePassword(password:any){
    this.hidepwd = true;
    if(password.type = 'text'){
      password.type = 'password';
    }
  }

  plogged(){
    this._pservice.parentlogin(this.plogin.value).subscribe(
      rd=>{
        console.log(rd);
        localStorage.setItem('parentlogintoken',rd.token);
        this._router.navigate([`/parent/dashboard/history/${rd.loggedparent.parentid}`])
      }
    )
  }
}
