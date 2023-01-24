import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCustomModule } from '../../shared.module';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedCustomModule
    
  ]
})
export class AdminModule {
}