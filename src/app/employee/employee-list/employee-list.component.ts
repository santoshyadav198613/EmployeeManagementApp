import { Component, EventEmitter, Input, OnChanges,
   OnInit, Output, SimpleChanges } from '@angular/core';
import { Employee } from '../../service/employee/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnChanges {
  @Input() empList: Employee[];
  @Input() title: string;
  @Output() message: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
     console.log(changes);
  }

  sendToParent() {
    this.message.emit('This message is from Child');
  }
}
