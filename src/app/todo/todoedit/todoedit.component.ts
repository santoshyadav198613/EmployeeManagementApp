import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToDoTask } from '../../service/todo/todoresponse';

@Component({
  selector: 'app-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.css']
})
export class TodoeditComponent implements OnInit {
  task: ToDoTask;
  constructor(public dialogRef: MatDialogRef<TodoeditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.task = this.data;
  }

  saveData() {
    //Logic/api call to save data. 
    this.dialogRef.close(this.task);
  }

}
