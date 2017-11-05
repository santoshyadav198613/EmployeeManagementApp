import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Employee } from '../service/employee/employee';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from '../service/employee/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {
  name: string = 'Nutan';
  department: string = 'IT';
  toggle: boolean = false;
  employee: Employee[];
  role: string = '';
  message: string;
  @ViewChild(EmployeeListComponent)
  empComponent: EmployeeListComponent;

  @ViewChildren(EmployeeListComponent)
  empListComponent: QueryList<EmployeeListComponent>;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    // this.empComponent.empList = this.employee;
    this.employee = this.employeeService.getEmployees();
  }

  ngDoCheck(): void {
    console.log('do check is called');
  }

  ngAfterViewInit(): void {
    console.log(this.empListComponent);
    this.empListComponent.forEach((comp) =>
      setTimeout(() => comp.empList = this.employee, 0));
  }
  toggleDiv() {
    this.toggle = !this.toggle;
    // this.empComponent.empList = this.employee;
    console.log(this.empListComponent);
    this.empListComponent.forEach((comp) =>
      comp.empList = this.employee);
  }

  receiveFromChild(message: string) {
    this.message = message;
  }

  ngOnDestroy(): void {
    alert('This is destroy event');
  }

}
