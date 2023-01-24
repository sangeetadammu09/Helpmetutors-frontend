import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/user-management',     title: 'User Management',   class: 'fa fa-user' },
    { path: '/role-management',  title: 'Role Management',  class: 'fa fa-money' },
    { path: '/menu-management',   title: 'Menu Management',  class: 'fa fa-bars' }
];

@Component({
    moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit,AfterViewInit {

    @ViewChild("colotext")marker : ElementRef;

    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    ngAfterViewInit()
  {
    console.log(this.marker);

    this.marker.nativeElement.style.color="red";
  }
}
