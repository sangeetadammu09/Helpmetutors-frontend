import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared-service/auth.service';
import { ParentService } from 'src/app/shared-service/parent.service';
import { TeacherService } from 'src/app/shared-service/teacher.service';

@Component({
  selector: 'app-registered-tutors',
  templateUrl: './registered-tutors.component.html',
  styleUrls: ['./registered-tutors.component.scss']
})
export class RegisteredTutorsComponent implements OnInit {

  listofTeachers: any =[];
  applyJobForm!: FormGroup;
  submitted: boolean = false;
  public visible = false;
  appliedTeacherDetails: any = {};
  noTeacherFoundMsg: any;
  interestedTuition: any = {};
   // Pagination parameters.
   page: number = 1;
  count: number = 0;
  tableSize: number = 5;
 

   // convenience getter for easy access to form fields
   get t() { return this.applyJobForm.controls; };

  constructor(private parentService : ParentService, private router : Router,
    private teacherService : TeacherService, private fb : FormBuilder, private authService : AuthService) {
    
    this.applyJobForm = this.fb.group({
      name : ['', Validators.required],
      email : ['',[Validators.required, Validators.email]],
      contact : ['', [Validators.required, Validators.pattern('^[0-9,]*$'), Validators.maxLength(10)]],
      
    })
   }

  ngOnInit(): void {
    this.getAllRegisteredTeachers();
  }

  getAllRegisteredTeachers(){
    this.teacherService.listofteachers().subscribe((data:any) => {
      console.log(data)
     if(data.status == 200){
      this.listofTeachers = data.listofteachers;
     }
      
    })
  }

  clickToApply(item:any){
    this.interestedTuition = item;
     this.interestedTuition.title = 
    `Need ${item.gender} ${item.lookingfor} in ${item.location} to teach ${item.grade} for ${item.days} days/weekly ${item.hours} daily`;
    this.interestedTuition.parentDetails = 
    `Parent: ${item.pname}, ${item.pemail} and contact ${item.contact}`;

    this.visible = !this.visible;
  }

  submitJob(){
    this.submitted = true;
    //console.log(this.applyJobForm.value)
    if(this.applyJobForm.valid){
      var teacherEmail :any = {}
      teacherEmail.email = this.applyJobForm.controls['email'].value;
       this.teacherService.jobApplied(teacherEmail).subscribe((data:any) => {
         //   console.log(data)
           if(data.status == 200){
            this.appliedTeacherDetails.teacheDetails = data.appliedteacher;
            this.appliedTeacherDetails.appliedFor= this.interestedTuition.title;
            this.appliedTeacherDetails.parentDetails= this.interestedTuition.parentDetails;

            console.log(this.appliedTeacherDetails)  
            this.authService.interestedteacherEmail(this.appliedTeacherDetails).subscribe((data:any) => {
           // console.log(data, 'email')
             });
            this.visible = !this.visible; 

         }

      },(error:any)=>{
           console.log(error)
           if(error.error.status == 400){
            this.noTeacherFoundMsg = error.error.message;
            console.log(this.noTeacherFoundMsg)
         }
      })
    }
  }


  toggleLiveDemo() {
    this.visible = !this.visible;
    this.router.navigate(['/'])
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllRegisteredTeachers();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllRegisteredTeachers();
  }


}
