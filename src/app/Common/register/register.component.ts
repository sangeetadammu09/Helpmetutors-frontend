import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:any = FormGroup;
  submitted = false;

  constructor( private fb: FormBuilder) { 
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      lastName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
    }
    )}

    get firstName(): AbstractControl {
      return this.registerForm.get('firstName')!;
    }
  
    get lastName(): AbstractControl {
      return this.registerForm.get('lastName')!;
    }
  ngOnInit(): void {
   
    }
    onSubmit(): void {
      this.registerForm.markAllAsTouched();
    }
  }


