import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() empList: Employee[];
  @Input() title: string;
  @Output() message: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  sendToParent() {
   this.message.emit('This message is from Child');
  }
}
