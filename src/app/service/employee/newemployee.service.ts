import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Injectable()
export class NewemployeeService extends EmployeeService {

  constructor() {
    super();
  }

  getEmployees(): Employee[] {
    return this.employee = [
      { id: 1, name: 'Sumeet', address: 'Pune', salary: 10000 },
      { id: 2, name: 'Anna', address: 'Mumbai', salary: 15000 },
      { id: 3, name: 'Gulshan', address: 'Chennai', salary: 25000 },
      { id: 4, name: 'Nutan', address: 'Banglore', salary: 35000 },
      { id: 5, name: 'Sudhakar', address: 'Pune', salary: 50000 }
    ];
  }

}
