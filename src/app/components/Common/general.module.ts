import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedCustomModule } from 'src/app/shared.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
   
    RegisterComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    SharedCustomModule
    
  ],
  
})
export class GeneralModule {
}
