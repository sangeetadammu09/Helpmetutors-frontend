import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  public visible = false;
  formattedaddress:any;
  options:any;


   // convenience getter for easy access to form fields
   get p() { return this.addParentForm.controls; };


  constructor(private fb : FormBuilder, private parentService : ParentService,
    private authService : AuthService, private router : Router,
     private toastrService : ToastrService){ 
      this.addParentForm = this.fb.group({
        name : ['', Validators.required],
        email : ['',[Validators.required, Validators.email]],
        contact : ['', [Validators.required, Validators.pattern('^[0-9,]*$'), Validators.maxLength(10)]],
        location : ['', Validators.required],
        lookingfor : ['', Validators.required],
        grade : ['', Validators.required],
        board : ['', Validators.required],
        subjects : ['', Validators.required],
        details : [''],
        modeofteaching : ['', Validators.required],
        days: ['', Validators.required],
        hours: ['', Validators.required],
        time: ['', Validators.required],
        gender : ['', Validators.required],
        budget : ['', [Validators.required, Validators.pattern('^[0-9,]*$')]],
        budgettype : ['', Validators.required],
        document: []
      
      })
  }

  ngOnInit(): void {
    this.options={
      componentRestrictions:{
      country:["AU"]
      }
  }
  }

  submitParentForm(){
    this.submitted = true;
    console.log(this.addParentForm.value)
    if(this.addParentForm.valid){
      var parentObject:any = {};
      parentObject.pname = this.addParentForm.controls['name'].value;
      parentObject.pemail = this.addParentForm.controls['email'].value;
      parentObject.contact = this.addParentForm.controls['contact'].value;
      parentObject.location = this.addParentForm.controls['location'].value;
      parentObject.lookingfor = this.addParentForm.controls['lookingfor'].value;
      parentObject.grade = this.addParentForm.controls['grade'].value;
      parentObject.board = this.addParentForm.controls['board'].value;
      parentObject.subjects = this.addParentForm.controls['subjects'].value;
      parentObject.details = this.addParentForm.controls['details'].value;
      parentObject.modeofteaching = this.addParentForm.controls['modeofteaching'].value;
      parentObject.gender = this.addParentForm.controls['gender'].value;
      parentObject.days = this.addParentForm.controls['days'].value;
      parentObject.hours = this.addParentForm.controls['hours'].value;
      parentObject.time = this.addParentForm.controls['time'].value;
      parentObject.budget = this.addParentForm.controls['budget'].value;
      parentObject.budgettype = this.addParentForm.controls['budgettype'].value;
      parentObject.document = this.addParentForm.controls['document'].value;
      console.log(parentObject,'------------')
      this.parentService.createparent(parentObject).subscribe((data:any) => {
        console.log(data)
        if(data.status == 200){
          this.visible = !this.visible;
          this.authService.parentEmail(parentObject).subscribe((data:any) => {
          //  console.log(data, 'email')
          
           
          });
        //  this.toastrService.success('Requirement saved successfully')
        }
        
        
      },(error:any) => {
        console.log(error)
        this.toastrService.error('Something went wrong')
      })

    }else{
      return;
    }

  }


  toggleLiveDemo() {
    this.visible = !this.visible;
    this.router.navigate(['/'])
  }


  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  
public AddressChange(address: any) {
//setting address from API to local variable
this.formattedaddress=address.formatted_address
}

}
