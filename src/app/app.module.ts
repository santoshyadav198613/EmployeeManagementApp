import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentComponent } from './department/department.component';

import { EmployeeService } from './service/employee/employee.service';
import { NewemployeeService } from './service/employee/newemployee.service';
import { TodoComponent } from './todo/todo.component';
import { AppConstant, AppValues } from './service/appconstants/app.constant';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HttpInterceptorService } from './interceptor/http-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent,
    TodoComponent,
    OnboardingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
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
