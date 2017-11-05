import { Component } from '@angular/core';
import { EmployeeService } from './service/employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>
  //     This is our APP</h1>`,
  styleUrls: ['./app.component.css'],
  //styles : ['']
})
export class AppComponent {
  title = 'app';
  toggle: boolean = false;

  constructor(private employeeService: EmployeeService) { }

  addEmployee() {
    this.employeeService.addEmployee();
  }
  toggleEmp() {
    this.toggle = !this.toggle;
  }
}
