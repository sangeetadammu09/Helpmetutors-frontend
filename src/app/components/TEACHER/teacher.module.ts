import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyhistoryComponent } from './myhistory/myhistory.component';
import { SharedCustomModule } from '../../shared.module';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';



@NgModule({
  declarations: [
    MyProfileComponent, MyhistoryComponent, TeacherFormComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedCustomModule
    
  ]
})
export class TeacherModule {
}
