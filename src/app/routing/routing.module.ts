import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EmployeeComponent } from '../employee/employee.component';
import { DepartmentComponent } from '../department/department.component';

import { OnboardingComponent } from '../onboarding/onboarding.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../service/guards/auth.guard';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
      { path: 'department', component: DepartmentComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      // { path: 'todo', component: TodoComponent },
      { path: 'onboarding', component: OnboardingComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  declarations: []
})
export class RoutingModule { }
