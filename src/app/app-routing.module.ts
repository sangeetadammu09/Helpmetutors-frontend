import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/default-layout/default-layout.component';
import { GeneralLayoutComponent } from './common-layout';
import { Page404Component } from './components/pages/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: GeneralLayoutComponent,
    children: [  
      {
        path: 'login',
        loadChildren: () =>
          import('./components/common/general.module').then((m) => m.GeneralModule)
      },   
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  //admin dashboard
  {
    path: 'admin', component: AdminLayoutComponent,
   
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./components/Admin/admin.module').then((m) => m.AdminModule)
      },
      
    ]
  },
  
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      useHash: true
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
