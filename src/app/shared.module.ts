import { NgModule } from '@angular/core';
import {PERFECT_SCROLLBAR_CONFIG,PerfectScrollbarConfigInterface,PerfectScrollbarModule,} from 'ngx-perfect-scrollbar';
import {AvatarModule,BadgeModule,BreadcrumbModule,ButtonGroupModule,ButtonModule,CardModule,DropdownModule,
  FooterModule,FormModule,GridModule,HeaderModule,ListGroupModule,NavModule,ProgressModule,SharedModule,
  SidebarModule,TabsModule,UtilitiesModule,} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Title } from '@angular/platform-browser';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};


@NgModule({
  declarations: [],
  imports: [
    GridModule,HeaderModule,SidebarModule,IconModule,
    PerfectScrollbarModule,NavModule,ButtonModule,FormModule,UtilitiesModule,
    ButtonGroupModule,SidebarModule,SharedModule,TabsModule,
    ListGroupModule,ProgressModule,BadgeModule,
    CardModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
     preventDuplicates: true,
     }),
  ],
  exports: [
    AvatarModule,BreadcrumbModule,FooterModule,DropdownModule,
    GridModule,HeaderModule,SidebarModule,IconModule,
    PerfectScrollbarModule,NavModule,ButtonModule,FormModule,UtilitiesModule,
    ButtonGroupModule,SidebarModule,SharedModule,TabsModule,
    ListGroupModule,ProgressModule,BadgeModule,
    CardModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    ToastrModule
    
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
