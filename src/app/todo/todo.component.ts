import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from '../service/todo/todo.service';

import { ToDoTask } from '../service/todo/todoresponse';
import { IAppConstant } from '../service/appconstants/Iapp.constant';
import { AppConstant } from '../service/appconstants/app.constant';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todoResponse: ToDoTask[];
  task: ToDoTask = new ToDoTask();
  constructor(private todoService: TodoService,
    @Inject(AppConstant) private appValues: IAppConstant) { }

  ngOnInit() {
    console.log(this.appValues.pageSize);
    this.todoService.getToDoList().subscribe((data) => this.todoResponse = data);
  }

  addTask() {
    this.todoService.addToDoTask(this.task).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );

    this.task = new ToDoTask();
  }

}
