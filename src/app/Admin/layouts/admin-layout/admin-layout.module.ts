import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from 'app/Admin/pages/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RolesComponent } from 'app/Admin/pages/roles/roles.component';
import { MenuComponent } from 'app/Admin/pages/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule, HttpClientModule,NgxPaginationModule
  ],
  declarations: [
    
    
    UserComponent,
    RolesComponent,
    MenuComponent

  ]
})

export class AdminLayoutModule {}
