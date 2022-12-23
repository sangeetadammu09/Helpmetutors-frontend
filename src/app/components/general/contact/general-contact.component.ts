import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../../../shared-service/contact.service';
import { AuthService } from '../../../shared-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-contact',
  templateUrl: './general-contact.component.html',
  styleUrls: ['./general-contact.component.scss']
})
export class GeneralContactComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;
   // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }
  public visible = false;

  constructor(private _formBuilder: FormBuilder, private authService : AuthService,private router : Router,
    private contactService: ContactService,private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({  
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone:  ['', [Validators.required, Validators.pattern('^[0-9,]*$'), Validators.maxLength(10)]],
      subject: [null, Validators.required],
      message : [null, Validators.required],
      
    });
  }
  


  onContactSubmit(){
    this.submitted = true;
    if(this.contactForm.valid){
      var contactObject:any = {};
      contactObject.name = this.contactForm.controls['name'].value;
      contactObject.email = this.contactForm.controls['email'].value;
      contactObject.contact = this.contactForm.controls['phone'].value;
      contactObject.subject = this.contactForm.controls['subject'].value;
      contactObject.message = this.contactForm.controls['message'].value;
      // console.log(contactObject,'------------')
      this.contactService.createContact(contactObject).subscribe((data:any) => {
        //console.log(data)
        //this.toastrService.success('Query saved successfully');
        if(data.status == 200){
        this.visible = !this.visible;
        this.authService.contactEmail(contactObject).subscribe((data:any) => {
         // console.log(data, 'email')
        });
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

}

