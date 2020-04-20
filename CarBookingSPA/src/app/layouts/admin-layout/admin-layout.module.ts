import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewrequestComponent } from 'app/pages/newrequest/newrequest.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    NewrequestComponent
  ]
})

export class AdminLayoutModule {}
