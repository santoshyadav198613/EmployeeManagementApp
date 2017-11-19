import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TodoService } from './todo.service';
import { ToDoTask } from './todoresponse';

@Injectable()
export class TodoresolveGuard implements Resolve<ToDoTask[]> {

  constructor(private todoService: TodoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ToDoTask[]> | Promise<ToDoTask[]> | ToDoTask[] {
    return this.todoService.getToDoList();
  }
}
