import { Routes } from '@angular/router';
import { MenuComponent } from 'app/Admin/pages/menu/menu.component';
import { RolesComponent } from 'app/Admin/pages/roles/roles.component';
import { UserComponent } from '../../pages/user/user.component';
export const AdminLayoutRoutes: Routes = [

    { path: 'user-management',component: UserComponent },
    { path: 'role-management', component: RolesComponent },
    { path: 'menu-management', component: MenuComponent },
   
];
