import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared-service/auth.service';
import { ParentService } from '../../../shared-service/parent.service';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {

  addParentForm!: FormGroup;
  submitted: boolean = false;

   // convenience getter for easy access to form fields
   get p() { return this.addParentForm.controls; };


  constructor(private fb : FormBuilder, private parentService : ParentService,private authService : AuthService,
     private toastrService : ToastrService){ 
      this.addParentForm = this.fb.group({
        name : ['', Validators.required],
        email : ['', Validators.required],
        contact : ['', Validators.required],
        location : ['', Validators.required],
        lookingfor : ['', Validators.required],
        grade : ['', Validators.required],
        subjects : ['', Validators.required],
        details : [''],
        modeofteaching : ['', Validators.required],
        gender : ['', Validators.required],
        budget : ['', Validators.required],
        budgettype : ['', Validators.required],
        document: []
      
      })
  }

  ngOnInit(): void {
   
  }

  submitParentForm(){
    this.submitted = true;
    if(this.addParentForm.valid){
      var parentObject:any = {};
      parentObject.pname = this.addParentForm.controls['name'].value;
      parentObject.pemail = this.addParentForm.controls['email'].value;
      parentObject.contact = this.addParentForm.controls['contact'].value;
      parentObject.location = this.addParentForm.controls['location'].value;
      parentObject.lookingfor = this.addParentForm.controls['lookingfor'].value;
      parentObject.grade = this.addParentForm.controls['grade'].value;
      parentObject.subjects = this.addParentForm.controls['subjects'].value;
      parentObject.details = this.addParentForm.controls['details'].value;
      parentObject.modeofteaching = this.addParentForm.controls['modeofteaching'].value;
      parentObject.gender = this.addParentForm.controls['gender'].value;
      parentObject.budget = this.addParentForm.controls['budget'].value;
      parentObject.budgettype = this.addParentForm.controls['budgettype'].value;
      parentObject.document = this.addParentForm.controls['document'].value;
     //  console.log(parentObject,'------------')
      this.parentService.createparent(parentObject).subscribe((data:any) => {
        //console.log(data)
        if(data.Status == 200){
          this.authService.parentEmail(parentObject).subscribe((data:any) => {
          //  console.log(data, 'email')
           
          });
          this.toastrService.success('Requirement saved successfully')
        }
        
        
      },(error:any) => {
        console.log(error)
        this.toastrService.error('Something went wrong')
      })

    }else{
      return;
    }


  }

}
