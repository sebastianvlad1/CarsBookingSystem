import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/_services/EventService/event.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-align-left-2',       class: '' },
    { path: '/newrequest',       title: 'Book a car',        icon:'nc-delivery-fast',    class: '' },
    { path: '/user',          title: 'My profile',        icon:'nc-single-02',    class: '' }
];

// icons:

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor(){
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

}
