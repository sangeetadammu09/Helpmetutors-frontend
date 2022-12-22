import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  updateParentForm :FormGroup;

  // convenience getter for easy access to form fields
  get p() { return this.updateParentForm.controls; };

  constructor(private _formBuilder :FormBuilder) {
    this.updateParentForm = this._formBuilder.group({
      pname: ['', Validators.required],
      pemail: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      location: ['', Validators.required],

    });
   }

  ngOnInit(): void {
  }

}
