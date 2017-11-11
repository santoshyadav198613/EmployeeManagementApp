import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDoTask } from './todoresponse';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  getToDoList() {
    return this.http.get<ToDoTask[]>('https://jsonplaceholder.typicode.com/todos',
      { headers: new HttpHeaders().set('token', 'thisistoken').set('newtoken', 'thisisnewtoken') });
  }

  addToDoTask(task: ToDoTask) {
    return this.http.post<ToDoTask>('https://jsonplaceholder.typicode.com/todos', task);
  }


}
