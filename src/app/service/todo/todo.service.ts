import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  getToDoList() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
