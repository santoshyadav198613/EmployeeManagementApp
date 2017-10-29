import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  name: string = 'Nutan';
  department: string = 'IT';
  toggle: boolean = false;
  employee: Employee[] = [
    { id: 1, name: 'Sumeet', address: 'Pune' },
    { id: 2, name: 'Anna', address: 'Mumbai' },
    { id: 3, name: 'Gulshan', address: 'Chennai' },
    { id: 4, name: 'Nutan', address: 'Banglore' }
  ];
  role: string = '';
  message: string;
  constructor() { }

  toggleDiv() {
    this.toggle = !this.toggle;
  }

  receiveFromChild(message: string) {
    this.message = message;
  }
}
