import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import {SharedCustomModule} from '../../shared.module';

@NgModule({
  declarations: [
    Page404Component,Page500Component,
  ],
  imports: [
    SharedCustomModule,CommonModule,PagesRoutingModule
  ]
})
export class PagesModule {
}
