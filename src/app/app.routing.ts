import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './Admin/layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './Common/login/login.component';
import { RegisterComponent } from './Common/register/register.component';

export const AppRoutes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full'}, 
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {
    path: 'user',
    redirectTo: 'user',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./Admin/layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: '**',
    redirectTo: 'login'
  }
]
