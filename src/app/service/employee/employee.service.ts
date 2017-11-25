import { Injectable } from '@angular/core';
import { Employee } from './employee';
@Injectable()
export class EmployeeService {
  employee: Employee[] = [];
  constructor() { }

  getEmployees(): Employee[] {
    return this.employee = [
      { id: 1, name: 'Sumeet', address: 'Pune', salary: 10000 },
      { id: 2, name: 'Anna', address: 'Mumbai', salary: 15000 },
      { id: 3, name: 'Gulshan', address: 'Chennai', salary: 25000 },
      { id: 4, name: 'Nutan', address: 'Banglore', salary: 35000 }
    ];
  }

  addEmployee() {
    let emp: Employee = { id: 1, name: 'Sumeet', address: 'Pune' , salary: 45000 };
    this.employee.push(emp);
  }

}
