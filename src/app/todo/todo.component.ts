import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from '../service/todo/todo.service';

import { ToDoResponse } from '../service/todo/todoresponse';
import { IAppConstant } from '../service/appconstants/Iapp.constant';
import { AppConstant } from '../service/appconstants/app.constant';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todoResponse: ToDoResponse[];
  constructor(private todoService: TodoService,
    @Inject(AppConstant) private appValues: IAppConstant) { }

  ngOnInit() {
    console.log(this.appValues.pageSize);
    this.todoService.getToDoList().subscribe((data) => this.todoResponse = data);
  }

}
