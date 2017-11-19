import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from '../service/todo/todo.service';
import { RouterModule } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

import { AuthGuard } from '../service/guards/auth.guard';
import { TodoresolveGuard } from '../service/todo/todoresolve.guard';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'todo', component: TodoComponent, canActivate: [AuthGuard],
        resolve: {
          todList: TodoresolveGuard
        },
        canActivateChild: [AuthGuard],
        children: [
          { path: ':id', component: TodoDetailsComponent }
        ]
      },
      // { path: 'todo/:id', component: TodoDetailsComponent }
    ])
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoDetailsComponent
  ],
  providers: [TodoService, TodoresolveGuard]
})
export class TodoModule { }
