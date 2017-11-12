import { AppComponent } from './app.component';
import { AppConstant, AppValues } from './service/appconstants/app.constant';
import { BrowserModule } from '@angular/platform-browser';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeService } from './service/employee/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './interceptor/http-interceptor.service';
import { NewemployeeService } from './service/employee/newemployee.service';
import { NgModule } from '@angular/core';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { RoutingModule } from './routing/routing.module';
import { TodoModule } from './todo/todo.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    TodoModule,
    OnboardingModule,
    RoutingModule
  ],
  providers: [
    // EmployeeService
    { provide: EmployeeService, useClass: NewemployeeService },
    { provide: AppConstant, useValue: AppValues },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
