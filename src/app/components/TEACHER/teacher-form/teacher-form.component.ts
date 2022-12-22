import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared-service/auth.service';
import { TeacherService } from '../../../shared-service/teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {

  addTeacherForm!: FormGroup;
  submitted: boolean = false;
  modeofTeachingArr: any =[];
  modeValueArr: any =[];

   // convenience getter for easy access to form fields
   get t() { return this.addTeacherForm.controls; };


  constructor(private fb : FormBuilder, private teacherService : TeacherService, 
    private toastrService : ToastrService, private authService : AuthService){

      this.addTeacherForm = this.fb.group({
        name : ['', Validators.required],
        email : ['', Validators.required],
        contact : ['', Validators.required],
        location : ['', Validators.required],
        qualification : ['', Validators.required],
        teaching : ['', Validators.required],
        about : [''],
        modeofteaching : ['', Validators.required],
        subjects : ['', Validators.required],
        timing : ['', Validators.required],
        charge : ['', Validators.required],
        chargeType : ['', Validators.required],
        document: []
      
      })
  }

  ngOnInit(): void {
    this.modeofTeachingArr = [
      {
        "id" : 1,
        "label" : "Home",
        "value" : "home"
      },
      {
        "id" : 2,
        "label" : "Online",
        "value" : "online"
      },
      {
        "id" : 3,
        "label" : "Student's place",
        "value" : "studentplace"
      }
    ]
   
  }


  onModeChange(event:any){
       var modeValue = event.target.value;
       this.modeValueArr.push(modeValue);
  }

  submitTeacherForm(){
    this.submitted = true;
    if(this.addTeacherForm.valid){
      var teacherObject:any = {};
      teacherObject.tname = this.addTeacherForm.controls['name'].value;
      teacherObject.temail = this.addTeacherForm.controls['email'].value;
      teacherObject.contact = this.addTeacherForm.controls['contact'].value;
      teacherObject.location = this.addTeacherForm.controls['location'].value;
      teacherObject.qualification = this.addTeacherForm.controls['qualification'].value;
      teacherObject.teachingexp = this.addTeacherForm.controls['teaching'].value;
      teacherObject.timing = this.addTeacherForm.controls['timing'].value;
      teacherObject.about = this.addTeacherForm.controls['about'].value;
      teacherObject.modeofteaching = this.modeValueArr;
      teacherObject.subjects = this.addTeacherForm.controls['subjects'].value;
      teacherObject.timing = this.addTeacherForm.controls['timing'].value;
      teacherObject.charge = this.addTeacherForm.controls['charge'].value;
      teacherObject.chargeType = this.addTeacherForm.controls['chargeType'].value;
      teacherObject.document = this.addTeacherForm.controls['document'].value;
       //console.log(teacherObject,'------------')
      this.teacherService.createteacher(teacherObject).subscribe((data:any) => {
        if(data.Status == 200){
          this.authService.teacherEmail(teacherObject).subscribe((data:any) => {
           //console.log(data, 'email')
          });
          this.toastrService.success('Your details are saved successfully')
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
