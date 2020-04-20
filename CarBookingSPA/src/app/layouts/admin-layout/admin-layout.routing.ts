import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { NewrequestComponent } from 'app/pages/newrequest/newrequest.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'newrequest', component: NewrequestComponent}
];
