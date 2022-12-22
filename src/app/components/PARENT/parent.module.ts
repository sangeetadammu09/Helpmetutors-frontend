import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ParentRoutingModule } from './parent-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TeacherslistComponent } from './teacherslist/teacherslist.component';
import { MyhistoryComponent } from './myhistory/myhistory.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { SharedCustomModule } from 'src/app/shared.module';



@NgModule({
  declarations: [
    MyProfileComponent, TeacherslistComponent, MyhistoryComponent, ParentFormComponent,
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    SharedCustomModule
    
  ]
})
export class ParentModule {
}
