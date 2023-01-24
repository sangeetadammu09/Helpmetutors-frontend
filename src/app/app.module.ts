import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {DefaultFooterComponent,DefaultHeaderComponent,AdminLayoutComponent} from './admin-layout';
import {GeneralFooterComponent,GeneralHeaderComponent,GeneralLayoutComponent} from './common-layout';

import {SharedCustomModule} from './shared.module';

const APP_CONTAINERS = [
  DefaultFooterComponent,DefaultHeaderComponent,AdminLayoutComponent,
  GeneralHeaderComponent,GeneralFooterComponent,GeneralLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedCustomModule,
  ],

  bootstrap: [AppComponent],
})


export class AppModule {
}
