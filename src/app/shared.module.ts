import { NgModule } from '@angular/core';
import {PERFECT_SCROLLBAR_CONFIG,PerfectScrollbarConfigInterface,PerfectScrollbarModule,} from 'ngx-perfect-scrollbar';
import {AvatarModule,BadgeModule,BreadcrumbModule,ButtonGroupModule,ButtonModule,CardModule,CarouselModule,DropdownModule,
  FooterModule,FormModule,GridModule,HeaderModule,ListGroupModule,ModalModule,NavModule,ProgressModule,SharedModule,
  SidebarModule,TabsModule,UtilitiesModule,} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
//import for GooglePlaceModule
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};


@NgModule({
  declarations: [],
  imports: [
    GridModule,HeaderModule,SidebarModule,IconModule,
    PerfectScrollbarModule,NavModule,ButtonModule,FormModule,UtilitiesModule,
    ButtonGroupModule,SidebarModule,SharedModule,TabsModule,ModalModule,
    ListGroupModule,ProgressModule,BadgeModule,CarouselModule,
    CardModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    HttpClientModule,NgxPaginationModule,GooglePlaceModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      closeButton: true,
      timeOut: 20000, // 15 seconds
      progressBar: true,
     }),
  ],
  exports: [
    AvatarModule,BreadcrumbModule,FooterModule,DropdownModule,
    GridModule,HeaderModule,SidebarModule,IconModule,
    PerfectScrollbarModule,NavModule,ButtonModule,FormModule,UtilitiesModule,
    ButtonGroupModule,SidebarModule,SharedModule,TabsModule,ModalModule,
    ListGroupModule,ProgressModule,BadgeModule,CarouselModule,
    CardModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    ToastrModule,NgxPaginationModule,GooglePlaceModule
    
  ],
  providers: [
    // {
    //   provide: LocationStrategy,
    //   useClass: PathLocationStrategy,
    // },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title
  
  ],

 

})
export class SharedCustomModule {
}
