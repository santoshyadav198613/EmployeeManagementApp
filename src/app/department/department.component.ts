import { Component, OnInit } from '@angular/core';

import { Department } from '../service/department/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  department: Department = new Department();
  constructor() {
    console.log('This is constructor');
  }

  ngOnInit() {
    console.log('This is Init event');
  }

  addDepartment() {
    console.log(this.department);
  }

}
