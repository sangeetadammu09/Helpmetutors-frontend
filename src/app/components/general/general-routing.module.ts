import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GeneralContactComponent } from './contact/general-contact.component';
import { HomeComponent } from './home/home.component';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import { RegisterComponent } from './register/register.component';
import { RegisteredTutorsComponent } from './registered-tutors/registered-tutors.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeachingJobsComponent } from './teaching-jobs/teaching-jobs.component';



const routes: Routes = [
  {path: 'contact',component: GeneralContactComponent,data: {title: 'Contact'}},
  {path: 'about',component: AboutComponent,data: {title: 'About'}},
  {path: 'registered-tutors',component: RegisteredTutorsComponent,data: {title: 'Registered Tutors'}},
  {path: 'teaching-jobs',component: TeachingJobsComponent,data: {title: 'Teaching Jobs'}},
  { path: '',component: HomeComponent,data: {title: 'Home'}},
  {path: 'register',component: RegisterComponent,data: {title: 'Register'}},
  {path: 'parent-login',component: ParentLoginComponent,data: {title: 'Parent Login'}},
  {path: 'teacher-login',component: TeacherLoginComponent,data: {title: 'Teacher Login'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule {
}
