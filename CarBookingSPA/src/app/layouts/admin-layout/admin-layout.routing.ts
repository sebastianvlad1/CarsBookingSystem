import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { NewrequestComponent } from 'app/pages/newrequest/newrequest.component';
import { RegisterComponent } from 'app/pages/register/register/register.component';
import { LoginComponent } from 'app/pages/login/login/login.component';
import { GuardService } from 'app/_guards/guard.service';
import { AdmindashboardComponent } from 'app/pages/admindashboard/admindashboard/admindashboard.component';
import { AdminpanelComponent } from 'app/pages/adminpanel/adminpanel/adminpanel.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',canActivate:[GuardService],      component: DashboardComponent },
    { path: 'user',canActivate:[GuardService] ,component: UserComponent },
    { path: 'newrequest',canActivate:[GuardService], component: NewrequestComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'localeditor', component: AdmindashboardComponent},
    { path: 'adminpanel', component: AdminpanelComponent}
];
