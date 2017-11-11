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
      { id: 1, name: 'Sumeet', address: 'Pune' },
      { id: 2, name: 'Anna', address: 'Mumbai' },
      { id: 3, name: 'Gulshan', address: 'Chennai' },
      { id: 4, name: 'Nutan', address: 'Banglore' },
      { id: 5, name: 'Sudhakar', address: 'Pune' }
    ];
  }

}
