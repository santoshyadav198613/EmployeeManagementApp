import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToDoResponse } from './todoresponse';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  getToDoList() {
    return this.http.get<ToDoResponse[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
