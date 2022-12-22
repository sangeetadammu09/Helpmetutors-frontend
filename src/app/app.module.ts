import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {DefaultFooterComponent,DefaultHeaderComponent,DefaultLayoutComponent} from './containers';
import {GeneralFooterComponent,GeneralHeaderComponent,GeneralLayoutComponent} from './general-containers';
import {ParentFooterComponent,ParentHeaderComponent,ParentLayoutComponent} from './parent-container';

import {SharedCustomModule} from './shared.module';
import {TeacherModule} from './components/TEACHER/teacher.module';
import { ParentModule } from './components/PARENT/parent.module';

const APP_CONTAINERS = [
  DefaultFooterComponent,DefaultHeaderComponent,DefaultLayoutComponent,
  GeneralHeaderComponent,GeneralFooterComponent,GeneralLayoutComponent,
  ParentFooterComponent,ParentHeaderComponent,ParentLayoutComponent
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedCustomModule, TeacherModule, ParentModule
  ],

  bootstrap: [AppComponent],
})


export class AppModule {
}
