import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentComponent } from './department/department.component';

import { EmployeeService } from './service/employee/employee.service';
import { NewemployeeService } from './service/employee/newemployee.service';
import { TodoComponent } from './todo/todo.component';
import { AppConstant, AppValues } from './service/appconstants/app.constant';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // EmployeeService
    { provide: EmployeeService, useClass: NewemployeeService },
    { provide: AppConstant, useValue: AppValues }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
