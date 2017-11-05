import { Injectable } from '@angular/core';
import { Employee } from './employee';
@Injectable()
export class EmployeeService {
  employee: Employee[] = [];
  constructor() { }

  getEmployees(): Employee[] {
    return this.employee = [
      { id: 1, name: 'Sumeet', address: 'Pune' },
      { id: 2, name: 'Anna', address: 'Mumbai' },
      { id: 3, name: 'Gulshan', address: 'Chennai' },
      { id: 4, name: 'Nutan', address: 'Banglore' }
    ];
  }

  addEmployee() {
    let emp: Employee = { id: 1, name: 'Sumeet', address: 'Pune' };
    this.employee.push(emp);
  }

}
