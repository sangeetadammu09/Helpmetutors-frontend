import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, CarouselModule, FormModule, GridModule, NavModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { GeneralRoutingModule } from './general-routing.module';
import { GeneralContactComponent } from './contact/general-contact.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { RegisteredTutorsComponent } from './registered-tutors/registered-tutors.component';
import { TeachingJobsComponent } from './teaching-jobs/teaching-jobs.component';



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
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,FormsModule,
    ReactiveFormsModule,NavModule,
    CarouselModule,TabsModule
    
  ]
})
export class GeneralModule {
}
