import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralLayoutComponent } from './general-containers';
import { ParentLayoutComponent } from './parent-container';
import { Page404Component } from './components/pages/page404/page404.component';
import { ParentFormComponent } from './components/PARENT/parent-form/parent-form.component';
import { TeacherFormComponent } from './components/TEACHER/teacher-form/teacher-form.component';
import { GeneralContactComponent } from './components/general/contact/general-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: GeneralLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [  
      {
        path: 'home',
        loadChildren: () =>
          import('./components/general/general.module').then((m) => m.GeneralModule)
      },
      { path: 'parent-form',component: ParentFormComponent,data: {title: 'Parent Form'}},
      { path: 'teacher-form',component: TeacherFormComponent,data: {title: 'Teacher Form'}},
      {path: 'contact',component: GeneralContactComponent,data: {title: 'Contact'}},
      
      
    ]
  },

 
 
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  //parent dashboard
  {
    path: 'parent', component: ParentLayoutComponent,
    data: {
      title: 'Parent Dashboard'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./components/PARENT/parent.module').then((m) => m.ParentModule)
      },
      
    ]
  },
  //teacher dashboard
  // {
  //   path: 'teacher', component: DefaultLayoutComponent,
  //   data: {
  //     title: 'Parent Dashboard'
  //   },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () =>
  //         import('./views/PARENT/parent.module').then((m) => m.ParentModule)
  //     },
      
  //   ]
  // },
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
