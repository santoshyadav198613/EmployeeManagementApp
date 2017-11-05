import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit  {

  constructor() {
    console.log('This is constructor');
   }

  ngOnInit() {
    console.log('This is Init event');
  }

}
