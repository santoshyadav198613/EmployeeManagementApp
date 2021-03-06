import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDoTask } from './todoresponse';

@Injectable()
export class TodoService {

  constructor(private isLoggedIn: boolean, private http: HttpClient) { }

  getToDoList() {
    console.log(this.isLoggedIn);
    // return this.http.get<ToDoTask[]>('https://jsonplaceholder.typicode.com/todos',
    //   { headers: new HttpHeaders().set('token', 'thisistoken').set('newtoken', 'thisisnewtoken') });
    return this.http.get<ToDoTask[]>('https://jsonplaceholder.typicode.com/todos',
      { headers: new HttpHeaders().set('token', 'thisistoken') })
  }

  addToDoTask(task: ToDoTask) {
    return this.http.post<ToDoTask>('https://jsonplaceholder.typicode.com/todos', task);
  }


}
