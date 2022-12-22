import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyhistoryComponent } from './myhistory/myhistory.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { TeacherslistComponent } from './teacherslist/teacherslist.component';

const routes: Routes = [
  { path: '',component: MyProfileComponent,data: {title: 'My Profile'}},
  { path: 'history',component: MyhistoryComponent,data: {title: 'Parent History'}},
  { path: 'form',component: ParentFormComponent,data: {title: 'Parent Form'}},
  { path: 'teachers-list',component: TeacherslistComponent,data: {title: 'Teachers List'}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule {
}
