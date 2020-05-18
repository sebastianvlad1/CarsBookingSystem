import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NewrequestComponent } from 'app/pages/newrequest/newrequest.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RegisterComponent } from 'app/pages/register/register/register.component';
import { LoginComponent } from 'app/pages/login/login/login.component';
import { AdmindashboardComponent } from 'app/pages/admindashboard/admindashboard/admindashboard.component';
import { AdminpanelComponent } from 'app/pages/adminpanel/adminpanel/adminpanel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    NewrequestComponent,
    RegisterComponent,
    LoginComponent,
    AdmindashboardComponent,
    AdminpanelComponent
  ]
})

export class AdminLayoutModule {}
