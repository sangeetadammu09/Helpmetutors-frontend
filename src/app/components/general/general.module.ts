import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { GeneralContactComponent } from './contact/general-contact.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { AboutComponent } from './about/about.component';
import { RegisteredTutorsComponent } from './registered-tutors/registered-tutors.component';
import { TeachingJobsComponent } from './teaching-jobs/teaching-jobs.component';
import { SharedCustomModule } from 'src/app/shared.module';



@NgModule({
  declarations: [
    GeneralContactComponent,
    HomeComponent,
    RegisterComponent,
    ParentLoginComponent,
    TeacherLoginComponent,
    AboutComponent,
    RegisteredTutorsComponent,
    TeachingJobsComponent,

  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    SharedCustomModule
    
  ],
  
})
export class GeneralModule {
}
